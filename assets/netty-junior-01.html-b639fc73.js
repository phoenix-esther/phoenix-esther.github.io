import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as l}from"./app-e53dd85b.js";const a="/assets/202206192000003-a7191283.png",d="/assets/202205191000001-41220e62.png",t={},r=l('<h1 id="netty-入门-—-hello-world" tabindex="-1"><a class="header-anchor" href="#netty-入门-—-hello-world" aria-hidden="true">#</a> Netty 入门 — Hello World</h1><p>这篇文章我们正式开始学习 Netty，在入门之前我们还是需要了解什么是 Netty。</p><p><img src="'+a+`" alt="img"></p><h2 id="什么是-netty" tabindex="-1"><a class="header-anchor" href="#什么是-netty" aria-hidden="true">#</a> 什么是 Netty</h2><p>为什么很多人都推崇 Java boy 去研究 Netty？Netty 这么高大上，它到底是何方神圣？</p><blockquote><p>用官方的话说：<strong>Netty 是一款异步的、基于事件驱动的网络应用程序框架，用以快速开发高性能、高可靠性的网络 IO 程序</strong>。</p></blockquote><p>为什么要使用 Netty 呢？因为使用原生的 Java NIO 非常不爽，它存在一系列的问题，比如：</p><ol><li>使用 Java NIO 需要了解很多概念，而且 API 非常繁琐。</li><li>使用 Java NIO 编程复杂，一不小心就会 Bug 横飞。</li><li>开发工作量和难度也很大，例如我们要处理断开重连、网络闪断、半包读写、网络拥塞、异常处理，等等异常情况，处理起来难度比较大。需要非常熟悉 Java 多线程和网络相关知识点，才能编写一个高质量的 Java NIO 程序。</li><li>JDK NIO 的 Bug：例如臭名昭著的 Epoll Bug，它会导致 Selector 空轮询，最终导致 CPU 100%。</li></ol><p>使用 Netty，都解决了上面的问题，它具备如下几个优点：</p><ol><li>容易上手：Netty 是 Java NIO 进行了封装，API 使用简单，开发门槛相对较低。</li><li>功能强大：预置多种编解码功能，支持多种主流协议，底层 IO 模型随意切换等等。</li><li>高性能：精心设计的 Reactor 线程模型支持高并发，优秀的内存模型，减少了资源的消耗。</li><li>设计优雅：灵活且可扩展的事件模型，可以清晰地分离关注点；高度可定制化的线程模型；粘包/粘包、异常检测等机制将我们从繁重的细节中解脱，只需关注业务逻辑。</li><li>社区活跃：Netty 是目前最为活跃的开源项目之一，版本迭代周期短，bug 修复速度快。</li><li>安全：完整的 SSL/TLS 和 StartTLS 支持。</li><li>质量有保障：经过大规模的商业应用考验，质量得到了充分的验证，健壮性无比强大，放心使用吧。</li></ol><h2 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h2><p>接下来我们用 Netty 来实现我们的第一个应用程序：Hello World。该 Hello World 程序大明哥做到尽可能简单，理解不了没有关系，能跑起来就行，毕竟是第一个 demo。</p><blockquote><p><strong>注：大明哥写这篇文章时， Netty 最新版本为：4.1.77，所以后面所有文章 Netty 版本都是基于 4.1.77，包括源码解析。</strong></p></blockquote><h3 id="引入-netty" tabindex="-1"><a class="header-anchor" href="#引入-netty" aria-hidden="true">#</a> 引入 Netty</h3><div class="language-XML line-numbers-mode" data-ext="XML"><pre class="language-XML"><code>&lt;dependency&gt;
    &lt;groupId&gt;io.netty&lt;/groupId&gt;
    &lt;artifactId&gt;netty-all&lt;/artifactId&gt;
    &lt;version&gt;4.1.77.Final&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h3><p>服务端的逻辑非常简单，监听 8081 端口，当有客户端连接进来时打印：“**，已连接”，同时打印客户端发送过来的消息。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class HelloWorldServer {
    public static void main(String[] args) {
        // 创建服务端启动引导器
        ServerBootstrap bootstrap = new ServerBootstrap();
        // 配置线程模型
        bootstrap.group(new NioEventLoopGroup());
        // 指定服务端的 IO 模型
        bootstrap.channel(NioServerSocketChannel.class);
        // 定义处理器 Handler
        bootstrap.childHandler(new ChannelInitializer&lt;NioSocketChannel&gt;() {
            @Override
            protected void initChannel(NioSocketChannel ch) throws Exception {
                // 解码
                ch.pipeline().addLast(new StringDecoder());

                ch.pipeline().addLast(new ChannelInboundHandlerAdapter(){
                    @Override
                    public void channelActive(ChannelHandlerContext ctx) throws Exception {
                        System.out.println(ctx.channel() + &quot;,hello world&quot;);
                    }

                    @Override
                    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
                        System.out.println(new Date() + &quot;：&quot; + msg);
                    }
                });
            }
        });
        // 绑定 8081 端口
        bootstrap.bind(8081);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大明哥依次解释上面代码</p><ul><li><code>ServerBootstrap bootstrap = new ServerBootstrap();</code>：创建服务端启动引导器，<code>ServerBootstrap</code> 将用于引导服务端的启动工作。</li><li><code>bootstrap.group(new NioEventLoopGroup());</code>：给引导器配置一个线程组，也就是 Netty 的线程模型，我们知道 Netty 是基于 Reactor 的线程模型，这里使用的单线程模型，即接受连接和业务处理都是使用同一个线程。</li><li><code>bootstrap.channel(NioServerSocketChannel.class);</code>：指定服务端的 IO 模型，这里我们定义的是 NIO，当然你也可以使用 BIO（OioServerSocketChannel.class），但是一般都不推荐，因为 Netty 的优势就在于 NIO。</li><li><code>bootstrap.childHandler()</code>：这里是定义业务逻辑处理器，简单来说就是客户端向服务端做的操作（连接、读、写），服务端都是在这里进行处理的。</li><li><code>bootstrap.bind(8081)</code>：绑定 8081 端口</li></ul><p>一个最简单的 Netty 服务单程序就写完了。</p><h3 id="客户端" tabindex="-1"><a class="header-anchor" href="#客户端" aria-hidden="true">#</a> 客户端</h3><p>客户端就做一件事，连接服务端，然后不停地往服务端发送 “hello world”。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class HelloWorldClient {
    public static void main(String[] args) throws InterruptedException {
        // 客户端引导器
        Bootstrap bootstrap = new Bootstrap();
        // 配置线程组
        bootstrap.group(new NioEventLoopGroup());
        // 指定 IO 类型为 NIO
        bootstrap.channel(NioSocketChannel.class);
        // 配置 IO 处理器
        bootstrap.handler(new ChannelInitializer&lt;SocketChannel&gt;() {
            @Override
            protected void initChannel(SocketChannel ch) throws Exception {
                ch.pipeline().addLast(new StringEncoder());
            }
        });
        // 建立连接
        Channel channel = bootstrap.connect(&quot;127.0.0.1&quot;,8081).channel();
        // 发送消息
        while (true) {
            channel.writeAndFlush(&quot;hello world..&quot;);
            TimeUnit.SECONDS.sleep(5);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端与服务端的逻辑差不多，只不过它使用的是 Bootstrap，Bootstrap 为客户端启动的引导器，它负责启动客户端和连接服务端。创建引导器后，就和服务端一样了，需要配置线程模型，指定 IO 类型，配置 IO 处理器，最后与服务端建立连接。</p><ul><li><code>bootstrap.connect(&quot;127.0.0.1&quot;,8081)</code>：<code>connect()</code> 方法与服务端进行连接，这里需要注意 <code>connect()</code> 方法是一个异步方法，它返回的是 ChannelFuture，调用 <code>channel()</code> 方法可以获取到对应的 channel（代码里面这种方式处理不是很优雅，我们后续再来讲）。</li><li><code>channel.writeAndFlush()</code>：向服务端发送消息。</li></ul><p>到这里一个简单的 Netty 应用就完成了，是不是比使用 NIO 简便很多，也非常清晰。</p><h3 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果" aria-hidden="true">#</a> 运行结果</h3><p><img src="`+d+'" alt="img"></p><p>从服务端打印的日志可以看出，当客户端连接服务端后，打印日志：<code>[id: 0xee05e542, L:/127.0.0.1:8081 - R:/127.0.0.1:53354],hello world</code>，然后每隔 5 秒钟输出 hell world，这和我们开始的预期一样。</p><p>可能小伙伴们对上面的代码还不是很理解，对上面的 ServerBootstrap、<code>group()</code> 、<code>channel()</code> 等方法都不明白什么意思，没有关系，因为这篇文章仅仅只是让你对 Netty 有一个简单的认识，后面文章大明哥会将这些概念全部都讲的明明白白的。</p>',31),s=[r];function o(c,v){return n(),i("div",null,s)}const b=e(t,[["render",o],["__file","netty-junior-01.html.vue"]]);export{b as default};
