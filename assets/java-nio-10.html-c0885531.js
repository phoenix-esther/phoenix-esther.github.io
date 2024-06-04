import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as a,a as e,b as i,d as c,e as n}from"./app-e53dd85b.js";const o="/assets/nio-202204211000001-7032be40.png",t="/assets/nio-202204191000001-edcdd882.png",v="/assets/nio-202204191000002-a782dbdf.png",u="/assets/nio-202204191000003-bcc9db9d.png",m="/assets/nio-202204191000004-c05497f7.png",b="/assets/nio-202204191000005-fa57e76b.png",h="/assets/nio-202204191000006-cb959964.png",p="/assets/nio-202204191000007-7da3708e.png",k={},g=n('<h1 id="服务端多线程化" tabindex="-1"><a class="header-anchor" href="#服务端多线程化" aria-hidden="true">#</a> 服务端多线程化</h1><p><img src="'+o+'" alt="img"></p><h2 id="多线程架构" tabindex="-1"><a class="header-anchor" href="#多线程架构" aria-hidden="true">#</a> 多线程架构</h2><p>前面所有文章的示例服务端都是单线程模式，这种模式存在很多的缺陷</p><ol><li>无法充分利用多核 CPU 的性能</li><li>如果服务端某个读写操作耗时较多，则会拖慢整个服务端</li></ol><p>所以，这篇文章大明哥将介绍服务端多线程的模式，让我们榨干服务器性能。</p><p>我们清楚服务端主要做两件事，建立连接和处理读写事件，所以我们可以将服务端的线程分为两组：</p><ol><li>一个线程专门处理 accept 事件，我们称之为 Boss 线程</li><li>CPU 核心数个线程，这些线程处理读写事件，我们称之为 Worker 线程</li></ol><p>这个时候，客户端服务端的关系如下：</p><p><img src="'+t+`" alt="img"></p><p>Boss 线程只服务处理 Acept 事件，Worker 线程只处理读写事件，他们都各自维护一个 Selector，每个 Selector 负责监听自己的 SocketChannel。对于 Boss 线程和 Worker 线程，我们唯一需要做的是需要将 Boss 线程连接的 SocketChannel 注册到某个 Worker 线程的 Selector 上，这个时候当 Worker 线程的 Selector 监测到有 SocketChannel 准备就绪后就会在自己的 Worker 线程中进行处理。</p><p>就如上面讲述的一样，一个 Boss 线程服务建立连接，多个 Worker 线程负责处理读写。</p><h2 id="单-worker-线程" tabindex="-1"><a class="header-anchor" href="#单-worker-线程" aria-hidden="true">#</a> 单 Worker 线程</h2><p>下面我们服务端多线程来实现下。</p><ul><li><strong>Boss 线程</strong></li></ul><p>Boss 线程主要是用来接受 Accept 事件，代码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[] args) throws IOException {
    Thread.currentThread().setName(&quot;boss-thread&quot;);

    ServerSocketChannel scc = ServerSocketChannel.open();
    scc.configureBlocking(false);

    Selector selector = Selector.open();
    scc.register(selector,SelectionKey.OP_ACCEPT);

    scc.bind(new InetSocketAddress(&quot;127.0.0.1&quot;,8808));

    while (true) {
        selector.select();
        Iterator&lt;SelectionKey&gt; iterator = selector.selectedKeys().iterator();

        while (iterator.hasNext()) {
            SelectionKey key = iterator.next();
            iterator.remove();

            if (key.isAcceptable()) {
                SocketChannel sc = scc.accept();
                sc.configureBlocking(false);

                log.info(&quot;已连接，客户端:{}&quot;,sc);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Boss 线程的雏形就写好了，下面是 Worker 线程。</p><ul><li><strong>Worker</strong> 线程</li></ul><p>Worker 线程主要是用来处理读写事件的。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class WorkerThread implements Runnable{
    private Thread thread;
    private Selector selector;
    private String name;
    private boolean isInit = false;

    public WorkerThread(String name) {
        this.name = name;
    }

    public void register() throws IOException {
        if (!isInit) {
            /**
             * 一个 Worker 线程会有多个 SocketChannel 注册进来，但是我们的 Worker 线程只能初始化一次
             */
            this.selector = Selector.open();
            this.thread = new Thread(this,name);
            this.thread.start();
            
        }
    }

    @Override
    public void run() {
        while (true) {
            try {
                log.info(&quot;Worker 线程开始执行 select()...&quot;);
                selector.select();
                log.info(&quot;Worker 线程执行完成 select()...&quot;);

                Iterator&lt;SelectionKey&gt; iterator = selector.selectedKeys().iterator();
                while (iterator.hasNext()) {
                    SelectionKey key = iterator.next();
                    iterator.remove();

                    if(key.isReadable()) {
                        ByteBuffer buffer = ByteBuffer.allocate(16);
                        SocketChannel socketChannel = (SocketChannel) key.channel();

                        socketChannel.read(buffer);
                        buffer.flip();

                        ByteBufferUtil.debugAll(buffer);
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public Selector getSelector() {
        return this.selector;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Worker 线程里面有一个 Selector 变量，这是因为所有的 Worker 线程都需要一个 Selector 。变量 isInit 用于标识当前 Worker 线程是否已完成初始化，因为一个 Worker 线程会监听多个 SocketChannel 的读写事件，但我们的 Worker 线程只能初始化一次。</p><ul><li><strong>关联 Boss 线程和 Worker 线程</strong></li></ul><p>上面代码已经完成了 Boss 线程和 Worker 线程的基本雏形，但是他们还是两个单独的个体，我们需要将两者关联起来，当 Boss 线程与某个 SocketChannel 建立连接后，该 SocketChannel 就需要注册到 Worker 线程里面的 Selector 上面。所以我们需要在 Boss 线程里面 new 一个 Worker 线程，同时绑定建立连接的 SocketChannel。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[] args) throws IOException {
    Thread.currentThread().setName(&quot;boss-thread&quot;);

    ServerSocketChannel scc = ServerSocketChannel.open();
    scc.configureBlocking(false);

    Selector selector = Selector.open();
    scc.register(selector,SelectionKey.OP_ACCEPT);

    scc.bind(new InetSocketAddress(&quot;127.0.0.1&quot;,8808));

    // 新建 Worker 线程
    WorkerThread workerThread = new WorkerThread(&quot;worker-thread&quot;);
    workerThread.register();

    while (true) {
        selector.select();
        Iterator&lt;SelectionKey&gt; iterator = selector.selectedKeys().iterator();

        while (iterator.hasNext()) {
            SelectionKey key = iterator.next();
            iterator.remove();

            if (key.isAcceptable()) {
                SocketChannel sc = scc.accept();
                sc.configureBlocking(false);

                log.info(&quot;已连接，客户端:{}&quot;,sc);

                // sc 关联到 Worker 线程
                log.info(&quot;注册到 Worker 线程的 Selector 上，开始...&quot;);
                sc.register(workerThread.getSelector(),SelectionKey.OP_READ);
                log.info(&quot;注册到 Worker 线程的 Selector 上，已完成...&quot;);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>运行结果</strong></li></ul><p>启动服务端，然后客户端给服务端发送消息“hi,client-01”。运行结果如下：</p><p><img src="`+v+'" alt="img"></p><p>看运行结果你是不是觉得非常奇怪，因为 Worker 线程根本就没有打印出来客户端发送的“hi,client-01”。这是什么原因呢？</p><h3 id="运行结果问题分析" tabindex="-1"><a class="header-anchor" href="#运行结果问题分析" aria-hidden="true">#</a> 运行结果问题分析</h3><p>我们来分析下。</p>',31),S=n("<li><p>服务端启动，它会 new 一个 Worker 线程，然后调用 <code>register()</code>，这个时候 Worker 线程会做两件事</p><ol><li>创建 Selector 对象</li><li>new 一个线程，且运行该线程</li></ol></li><li><p>Worker 线程执行 <code>run()</code> 方法，在里面执行到 <code>selector.select()</code>时就会阻塞直到有 SocketChannel 已准备就绪，于是 worker-thread 就只打印 <code>Worker 线程开始执行 select()...</code>。</p></li><li><p>客户端发送一个连接过来，Boss 线程建立连接后，打印 <code>已连接，客户端:java.nio.channels.SocketChannel[connected local=/127.0.0.1:8808 remote=/127.0.0.1:62903]</code></p></li>",3),f=e("p",null,[i("建立连接后，该 SocketChannel 就要注册到 Worker 线程的 Selector 上，注意这两个 Selector 是同一个，由于前面 Worker 线程还阻塞在 "),e("code",null,"select()"),i(" 方法上。所以 "),e("code",null,"register()"),i(" 也会阻塞直到有读写事件发生，所以这里就只打印了 "),e("code",null,"注册到 Worker 线程的 Selector 上，开始..."),i("。这是为什呢？大明哥这里贴两段代码你就知道了。")],-1),W=e("p",null,[e("img",{src:u,alt:"img"})],-1),w=e("p",null,[e("img",{src:m,alt:"img"})],-1),_={href:"https://www.skjava.com/series/article/www.skjava.com",target:"_blank",rel:"noopener noreferrer"},T=n(`<p>针对上面的分析，我们知道了原因就是因为 <code>selector.select()</code> 阻塞了，解决这个问题有两种方法：</p><ol><li>调用 <code>register()</code> 方法比 <code>selector.select()</code> 方法先执行。</li><li>调用 <code>register()</code> 方法的时候唤醒 Selector。</li></ol><p>下面我们就这两种方法做下介绍。</p><h3 id="解决方法一-调整执行顺序" tabindex="-1"><a class="header-anchor" href="#解决方法一-调整执行顺序" aria-hidden="true">#</a> 解决方法一：调整执行顺序</h3><ul><li>调用 <code>register()</code> 方法比 <code>selector.select()</code> 方法先执行</li></ul><p>其实就是将 <code>workerThread.register()</code> 移动到 <code>sc.register()</code> 前面，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 省略很多代码
if (key.isAcceptable()) {
    SocketChannel sc = scc.accept();
    sc.configureBlocking(false);

    log.info(&quot;已连接，客户端:{}&quot;,sc);

    // 初始化 worker
    workerThread.register();
     // sc 关联到 workerThread
    log.info(&quot;注册到 Worker 线程的 Selector 上，开始...&quot;);
    sc.register(workerThread.getSelector(),SelectionKey.OP_READ);
    log.info(&quot;注册到 Worker 线程的 Selector 上，已完成...&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><p><img src="`+b+`" alt="img"></p><p>是不是完美解决了这个问题？但是这个还是有一个问题，因为是多线程的方式，这里可能存在两个问题</p><ol><li>调用 <code>workerThread.register();</code> 后，Selector 还没有 new 出来，那么 <code>workerThread.getSelector() </code>就会为空</li><li>多线程就一定能保证 <code>sc.register()</code> 先执行吗？</li></ol><h3 id="解决方法二-主动唤醒-select" tabindex="-1"><a class="header-anchor" href="#解决方法二-主动唤醒-select" aria-hidden="true">#</a> 解决方法二：主动唤醒 select</h3><p>所以有一种更好的方法，主动唤醒 <code>select()</code> 方法。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 省略一些代码
// 主动唤醒 select
workerThread.getSelector().wakeup();

// sc 关联到 workerThread
log.info(&quot;注册到 Worker 线程的 Selector 上，开始...&quot;);
sc.register(workerThread.getSelector(),SelectionKey.OP_READ);
log.info(&quot;注册到 Worker 线程的 Selector 上，已完成...&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><p><img src="`+h+`" alt="img"></p><p>运行结果展示出来了客户端发送来的消息。</p><p>有兴趣的小伙伴可以好好对比两种解决方法打印日志的顺序，这里大明哥就不做过多阐述了。</p><h2 id="多-worker-线程" tabindex="-1"><a class="header-anchor" href="#多-worker-线程" aria-hidden="true">#</a> 多 Worker 线程</h2><p>上面示例只有一个 Worker 线程，其实在实际应用中我们一般都是使用多个 Worker 线程来处理读写事件，多个 Worker 线程来管理多个 SocketChannel。实现步骤。</p><ul><li>创建一个 WorkerThread 数组，并且对立面每个 WorkerThread 进行初始化。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 新建两个 Worker 线程
WorkerThread[] workerThreads = new WorkerThread[2];
workerThreads[0] = new WorkerThread(&quot;worker-thread-0&quot;);
workerThreads[1] = new WorkerThread(&quot;worker-thread-1&quot;);

workerThreads[0].register();
workerThreads[1].register();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用计数器用来记录有多少个客户端。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>AtomicInteger atomicInteger = new AtomicInteger(0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>每来一个客户端建立连接就从 WorkerThread 数组中选择相对应的 WorkThread ，获取它的 Selector 来进行注册。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 获取 WorkerThread
WorkerThread workerThread = workerThreads[atomicInteger.getAndIncrement() % 2];
                    
// 主动唤醒 select
workerThread.getSelector().wakeup();

// sc 关联到 workerThread
log.info(&quot;注册到 Worker 线程的 Selector 上，开始...&quot;);
sc.register(workerThread.getSelector(),SelectionKey.OP_READ);
log.info(&quot;注册到 Worker 线程的 Selector 上，已完成...&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行结果</li></ul><p><img src="`+p+'" alt="img"></p>',28);function q(x,C){const r=s("ExternalLinkIcon");return d(),a("div",null,[g,e("ol",null,[S,e("li",null,[f,W,w,e("p",null,[i("这两段代码，大明哥在 "),e("a",_,[i("【死磕 NIO】— Selector 源码分析"),c(r)]),i(" 中就已经分析了，不了解的小伙伴可以去看看。")])])]),T])}const J=l(k,[["render",q],["__file","java-nio-10.html.vue"]]);export{J as default};
