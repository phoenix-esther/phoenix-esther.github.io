import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as r,a as e,b as n,d as l,e as t}from"./app-e53dd85b.js";const d="/assets/nio-20220321100001-5a3a6dbd.png",o="/assets/nio-202203261000001-f28df4b3.png",v="/assets/nio-202203261000002-c47127f6.png",u="/assets/nio-202203261000003-ac08e82b.png",m="/assets/nio-2022032610000031-cb03d5e3.png",b="/assets/nio-202203261000004-21ae6d7d.png",h="/assets/nio-202203261000005-6dad4509.png",S="/assets/nio-202203261000006-bf6ea66b.png",p="/assets/nio-202203261000007-8a65e386.png",C={},f=e("h1",{id:"nio-详解-selector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nio-详解-selector","aria-hidden":"true"},"#"),n(" NIO - 详解 Selector")],-1),y=e("p",null,"前面 4 篇文章深入分析了 NIO 三大组件中的两个：Buffer 和 Channel：",-1),k={href:"https://www.skjava.com/series/article/1390741921",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.skjava.com/series/article/1166024893",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.skjava.com/series/article/5499954954",target:"_blank",rel:"noopener noreferrer"},K={href:"https://www.skjava.com/series/article/2061265663",target:"_blank",rel:"noopener noreferrer"},O=e("p",null,"这篇文章则介绍第三个组件：Selector。",-1),B=e("p",null,"相比 Buffer 和 Channel 而言，Selector 对于 NIO 来说显得更加重要，因为它是 NIO 实现多路复用的核心，它的使命就是完成 IO 的多路复用。",-1),I=e("h2",{id:"selector-简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#selector-简介","aria-hidden":"true"},"#"),n(" Selector 简介")],-1),w={href:"https://www.skjava.com/series/article/1945821696",target:"_blank",rel:"noopener noreferrer"},P=t('<ul><li>阻塞模式：所有阻塞方法都会引起线程的暂停，根本无法应用到业务中来</li><li>非阻塞模式：CPU 一直在空转，浪费资源</li></ul><p>所以，如果是我们服务端单独使用 ServerSocketChannel 确实是很麻烦，典型的吃力不讨好。故而我们希望有一个组件能够统一管理我们的 Channel，这个组件就是选择器 Selector。</p><p><strong>Selector（选择器）是 Channel 的多路复用器，它可以同时监控多个 Channel 的 IO 状况，允许单个线程来操作多个 Channel</strong>。如下：</p><p><img src="'+d+`" alt="img"></p><p>Selector 的作用是什么？</p><p>Selector 提供选择执行已经就绪的任务的能力。从底层来看，Selector 提供了询问 Channel 是否已经准备好执行每个 I/O 操作的能力。Selector 允许单线程处理多个 Channel。仅用单个线程来处理多个 Channels 的好处是，只需要更少的线程来处理 Channel 。事实上，可以只用一个线程处理所有的通道，这样会大量的减少线程之间上下文切换的开销。</p><h2 id="selector-的使用" tabindex="-1"><a class="header-anchor" href="#selector-的使用" aria-hidden="true">#</a> Selector 的使用</h2><p>使用 Selector 的主要流程如下：</p><ol><li>打开 Selector</li><li>将 Channel 注册到 Selector 中，并设置要监听的事件</li><li>轮询处理 IO 操作</li></ol><h3 id="打开-selector" tabindex="-1"><a class="header-anchor" href="#打开-selector" aria-hidden="true">#</a> 打开 Selector</h3><p>和 SocketChannel 相似，调用 <code>Selector.open()</code> 就可以打开一个选择器实例。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Selector selector = Selector.open();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="注册-selector" tabindex="-1"><a class="header-anchor" href="#注册-selector" aria-hidden="true">#</a> 注册 Selector</h3><p>为了将 Channel 和 Selector 配合使用，我们需要将 Channel 注册到对应的 Selector 上，调用 <code>SelectableChannel.register()</code> 方法来实现。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>channel.configureBlocking(false);
SelectionKey key = channel.register(selector,Selectionkey.OP_ACCEPT);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有一个要注意的地方，所有注册到 Selector 中的 Channel 都必须是非阻塞的。怎么判断 Channel 是否可以设置为非阻塞呢？判断它是否继承了SelectableChannel，SelectableChannel 是一个抽象类，它提供了实现 Channel 的可选择性所需要的公共方法。而 FileChannel 没有继承 SelectableChannel ，所以它不能使用 Selector。</p><p><code>register()</code> 提供了两个参数，一个是要注册的 Selector 是谁，第二个参数是对什么事件感兴趣。事件类型有四种：</p><ul><li>连接 : SelectionKey.OP_CONNECT</li><li>接收 : SelectionKey.OP_ACCEPT</li><li>可读 : SelectionKey.OP_READ</li><li>可写 : SelectionKey.OP_WRITE</li></ul><p>如果感兴趣的事件不止一个，则可以使用“位运算 | ” 来组合多个事件，如： <code>SelectionKey.OP_CONNECT | SelectionKey.OP_ACCEPT</code>。</p><p>需要提醒的是，Selector 关注的不是 Channel 的操作，而是 Channel的某个操作的一种就绪状态。一旦 Channel 具备完成某个操作的条件，表示该 Channel 的某个操作已经就绪，就可以被 Selector 查询到，程序可以对该 Channel 进行对应的操作。比如说，某个 SocketChannel 可以连接到一个服务器，则处于“连接就绪”（OP_CONNECT）。某给 ServerSocketChannel 可以接收新的连接，则处理“接收就绪”（SelectionKey.OP_ACCEPT）。</p><h3 id="轮询处理-io-操作" tabindex="-1"><a class="header-anchor" href="#轮询处理-io-操作" aria-hidden="true">#</a> 轮询处理 IO 操作</h3><p>将 Channel 注册到 Selector 并关注相对应的时间后，就可以轮询处理 IO 事件了。</p><p>Selector 提供了方法 <code>select()</code>，该方法可以查询出已经就绪的 Channel操作，如果没有事件发生，则该方法会一直阻塞，直到有事件。<code>select()</code> 有三个重载方法：</p><ul><li><code>select()</code>:阻塞到至少有一个通道在你注册的事件上就绪了。·</li><li><code>select(long timeout)</code>：和<code>select()</code>一样，但最长阻塞事件为timeout毫秒。</li><li><code>selectNow(</code>):非阻塞，只要有通道就绪就立刻返回。</li></ul><p><code>select()</code> 返回值为 int 类型，该值表示有多少 Channel 的操作已经就绪，更准确地说是上一次 <code>select()</code> 到这一次 <code>select()</code> 方法之间的时间段内，有多少 Channel 变成了就绪状态。</p><p>当 <code>select()</code> 返回后，如果返回值大于 0 ，则可以调用 <code>selectedKeys()</code> 方法，该方法返回一个 Set 集合，该集合是一个 SelectionKey 的集合，SelectionKey 表示的是可选择通道 SelectableChannel 和一个特定的 Selector之间的注册关系。</p><ul><li>SelectionKey 是一个抽象类，表示 SelectableChannel 在 Selector 中注册的标识.每个 Channel 向 Selector 注册时,都将会创建一个selectionKey</li><li>SelectionKey 是 SelectableChannel 与 Selector 的建立关系，并维护了 Channel 事件</li><li>可以通过 <code>cancel()</code> 方法取消 key，取消的 key 不会立即从 Selector 中移除,而是添加到 cancelledKeys 中,在下一次 <code>select()</code> 操作时移除它.所以在调用某个 key 时,需要使用 isValid 进行校验。</li></ul><p>SelectionKey 提供了两个非常重要的 &quot;Set&quot;：<code>interest set</code> 和 <code>ready set</code>。</p><ul><li>interest set 表示感兴趣的事件，我们可以通过以下方式获取：</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int interestSet = selectionKey.interestOps();

boolean isInterestedInAccept  = interestSet &amp; SelectionKey.OP_ACCEPT;
boolean isInterestedInConnect = interestSet &amp; SelectionKey.OP_CONNECT;
boolean isInterestedInRead    = interestSet &amp; SelectionKey.OP_READ;
boolean isInterestedInWrite   = interestSet &amp; SelectionKey.OP_WRITE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ready set：代表了 Channel 所准备好了的操作。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int readySet = selectionKey.readyOps();
selectionKey.isAcceptable();
selectionKey.isConnectable();
selectionKey.isReadable();
selectionKey.isWritable();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下代码是一个处理 IO 操作的完整代码：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>while (true) {
    selector.select();
    
    Set&lt;SelectionKey&gt; selectedKeys = selector.selectedKeys();

    Iterator&lt;SelectionKey&gt; keyIterator = selectedKeys.iterator();
    while (iterator.hasNext()) {
        SelectionKey key = keyIterator.next();
    
        if(key.isAcceptable()) {
            // a connection was accepted by a ServerSocketChannel.
    
        } else if (key.isConnectable()) {
            // a connection was established with a remote server.
    
        } else if (key.isReadable()) {
            // a channel is ready for reading
    
        } else if (key.isWritable()) {
            // a channel is ready for writing
        }
        
        // 这段代码非常重要，后面演示
        key.remove();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这里有一段非常重要的代码 <code>key.remove()</code>，这行代码表示，我已经在处理该 IO 事件了，需要删除。</p></blockquote><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2><h3 id="简单实例" tabindex="-1"><a class="header-anchor" href="#简单实例" aria-hidden="true">#</a> 简单实例</h3><p>下面大明哥用 Selector 实现一个完整的案例。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[] args) throws Exception {
    // 创建 ServerSocketChannel
    ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();

    // 设置为非阻塞
    serverSocketChannel.configureBlocking(false);

    // 绑定 8081 端口
    serverSocketChannel.bind(new InetSocketAddress(8081));

    // 打开 Selector
    Selector selector = Selector.open();

    // 将 SocketChannel 注册到  Selector
    // 通常我们都是先注册一个 OP_ACCEPT 事件, 然后在 OP_ACCEPT 到来时, 再将这个 Channel 的 OP_READ
    serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);

    while (true) {
        // select 方法，一直阻塞直到有事件发生
        selector.select();

        // 获取 I/O 操作就绪的 SelectionKey, 通过 SelectionKey 可以知道哪些 Channel 的哪类 I/O 操作已经就绪
        Iterator&lt;SelectionKey&gt; iterator = selector.selectedKeys().iterator();

        while (iterator.hasNext()) {
            SelectionKey key = iterator.next();

            // 获取一个 SelectionKey 后，我们要将其删除掉，表示我们已经处理了这个事件
            iterator.remove();

            if (key.isAcceptable()) {
                // 连接时间发生
                // 当客户端连接服务端的时候，我们需要服务单与之建立连接
                // 需要注意的是在 OP_ACCEPT 事件中, 从 key.channel() 返回的 Channel 是 ServerSocketChannel
                ServerSocketChannel socketChannel = (ServerSocketChannel) key.channel();
                // 需要从 socketChannel 获取 SocketChanel
                SocketChannel clientChannel = socketChannel.accept();
                log.info(&quot;{} 建立连接&quot;,clientChannel);
                // 设置 clientChannel 为非阻塞
                clientChannel.configureBlocking(false);

                clientChannel.register(selector,SelectionKey.OP_READ);
            } else if (key.isReadable()) {
                // 获取的为 SocketChannel
                SocketChannel clientChannel = (SocketChannel) key.channel();
                ByteBuffer byteBuffer = ByteBuffer.allocate(64);
                int size = clientChannel.read(byteBuffer);
                if (size &lt; 0) {
                    // 小于 0 表示客户端断开连接，需要关闭该 SocketChannel
                    log.info(&quot;{}，断开了连接&quot;,clientChannel);
                    clientChannel.close();
                } else {
                    byteBuffer.flip();

                    CharBuffer charBuffer = Charset.forName(&quot;utf-8&quot;).decode(byteBuffer);

                    log.info(&quot;{}，发来了消息,消息内容是:{}&quot;,clientChannel,charBuffer.toString());

                    // 服务端接收消息后，给客户端发送给客户端
                    Scanner scanner = new Scanner(System.in);
                    String string = scanner.nextLine();
                    ByteBuffer writeBuffer = Charset.forName(&quot;utf-8&quot;).encode(string);
                    clientChannel.write(writeBuffer);

                    if (writeBuffer.hasRemaining()) {
                        // 如果不能一次性发完只需要触发 write 事件去发
                        key.attach(writeBuffer);
                        key.interestOps(key.interestOps() + SelectionKey.OP_WRITE);
                    }
                }
            } else if (key.isWritable() &amp;&amp; key.isValid()) {
                ByteBuffer byteBuffer = (ByteBuffer) key.attachment();
                SocketChannel clientChannel = (SocketChannel) key.channel();
                byteBuffer.flip();

                clientChannel.write(byteBuffer);

                if (!byteBuffer.hasRemaining()) {
                    // 如果已完，则只无须关注 write 事件
                    key.attach(null);
                    key.interestOps(key.interestOps() - SelectionKey.OP_WRITE);
                }
            }
         }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务端，打开 iTerm，输入命令 <code>telnet localhost 8081</code>，连接服务端，这时服务端接收到客户端 client-01 的连接请求，进行建立连接。</p><p><img src="`+o+'" alt="img"></p><p>建立连接后，客户端发送消息<code>i am client_01</code>，服务端收到消息，然后给客户端发送消息<code>hi,client-01,i am server</code>。</p><ul><li>服务端</li></ul><p><img src="'+v+'" alt="img"></p><ul><li>客户端</li></ul><p><img src="'+u+`" alt="img"></p><h3 id="分析为什么要-key-remove" tabindex="-1"><a class="header-anchor" href="#分析为什么要-key-remove" aria-hidden="true">#</a> 分析为什么要：key.remove()</h3><p>这里拿上面那个问题来说明，为什么要加这 <code>key.remove()</code> 代码呢？首先这段代码的意思是说<strong>获取一个 SelectionKey 后，我们需要将其删除，表示我们已经对该 IO 事件进行了处理</strong>，如果没有这样代码会有什么后果呢？<strong>报 NullPointerException</strong>！</p><p>注释掉 <code>key.remove()</code> 这行代码，然后加一些日志，然后去掉服务端发送消息的代码，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>while (true) {
    // select 方法，一直阻塞直到有事件发生
    selector.select();

    // 获取 I/O 操作就绪的 SelectionKey, 通过 SelectionKey 可以知道哪些 Channel 的哪类 I/O 操作已经就绪
    Iterator&lt;SelectionKey&gt; iterator = selector.selectedKeys().iterator();

    while (iterator.hasNext()) {
        SelectionKey key = iterator.next();
        log.info(&quot;key={}&quot;, key);

        // 获取一个 SelectionKey 后，我们要将其删除掉，表示我们已经处理了这个事件
        //iterator.remove();

        if (key.isAcceptable()) {
            // 连接时间发生
            // 当客户端连接服务端的时候，我们需要服务单与之建立连接
            // 需要注意的是在 OP_ACCEPT 事件中, 从 key.channel() 返回的 Channel 是 ServerSocketChannel
            ServerSocketChannel socketChannel = (ServerSocketChannel) key.channel();
            // 需要从 socketChannel 获取 SocketChanel
            SocketChannel clientChannel = socketChannel.accept();
            log.info(&quot;{} 建立连接&quot;, clientChannel);
            // 设置 clientChannel 为非阻塞
            clientChannel.configureBlocking(false);

            clientChannel.register(selector, SelectionKey.OP_READ);
        } else if (key.isReadable()) {
            // 获取的为 SocketChannel
            SocketChannel clientChannel = (SocketChannel) key.channel();
            ByteBuffer byteBuffer = ByteBuffer.allocate(64);
            int size = clientChannel.read(byteBuffer);
            if (size &lt; 0) {
                // 小于 0 表示客户端断开连接，需要关闭该 SocketChannel
                log.info(&quot;{}，断开了连接&quot;, clientChannel);
                clientChannel.close();
            } else {
                byteBuffer.flip();

                CharBuffer charBuffer = Charset.forName(&quot;utf-8&quot;).decode(byteBuffer);

                log.info(&quot;{}，发来了消息,消息内容是:{}&quot;, clientChannel, charBuffer.toString());
            }
        }
    }

    System.out.println(&quot;==============================我是分割线===================================&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务端，然后客户端连接，发送消息，结果如下：</p><p><img src="`+m+'" alt="img"></p><p>为什么会这样呢？这里我们来梳理整个流程。</p><ul><li>首先服务端创建一个 Selector，该 Selector 与 ServerSocketChannel 绑定，且关注 accept 事件。如下</li></ul><p><img src="'+b+'" alt="img"></p><ul><li>当客户端发起连接时，<code>selector.selectedKeys()</code> 会返回 Set 集合，该集合包含了已经准备就绪的 SelectionKey，这个时候只有连接事件，相对应的 SelectionKey 为 2b71fc7e</li></ul><p><img src="'+h+'" alt="img"></p><ul><li>当服务端与客户端建立连接后，绑定 Selector 并关注 read 事件。这里需要注意的是 <strong>Selector 并不会主动去删除 SelectionKey，它只会增加</strong>，所以这个时候 Selector 里面有两个 SelectionKey，一个是 2b71fc7e（accept），一个是 1de0aca6（read）。建立连接后，事件处理完成，会该事件与之对应的事件去掉，也就是 2b71fc7e 的 SelectionKey 绑定的 ServerSocketChannel ，但是 Selector 里面对应的 SelectionKey 还是存在的。</li></ul><p><img src="'+S+'" alt="img"></p><ul><li>当客户端给服务端发送消息时，服务端监测到有事件发生，会将发生时间的 SelectionKey@1de0aca6 加入到 selectedKey 中，如下：</li></ul><p><img src="'+p+'" alt="img"></p><p>在迭代过程第一次取的是 SelectionKey@1de0aca6，这个是读事件，可以正常读，打印客户端发送过来的，但是第二次读取的是 SelectionKey@2b71fc7e，但是这个 Key 与之相绑定的事件已经处理了，它为 null，那肯定会报 NullPointerException。所以在使用 NIO 时一定要主动删除已经处理过的 SelectionKey ，既主动调用 <code>key.remove()</code>，删除该 SelectionKey。</p>',62);function x(N,E){const i=a("ExternalLinkIcon");return c(),r("div",null,[f,y,e("ul",null,[e("li",null,[e("a",k,[n("【死磕 NIO】— 深入分析Buffer"),l(i)])]),e("li",null,[e("a",g,[n("【死磕 NIO】— 深入分析Channel和FileChannel"),l(i)])]),e("li",null,[e("a",_,[n("【死磕NIO】— 跨进程文件锁：FileLock"),l(i)])]),e("li",null,[e("a",K,[n("【死磕NIO】— 探索 SocketChannel 的核心原理"),l(i)])])]),O,B,I,e("p",null,[n("在前一篇文章："),e("a",w,[n("【死磕 NIO】— ServerSocketChannel 的应用实例"),l(i)]),n(" ，大明哥分析了 ServerSocketChannel 两种模式的缺点")]),P])}const J=s(C,[["render",x],["__file","java-nio-7.html.vue"]]);export{J as default};
