import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as l}from"./app-e53dd85b.js";const a="/assets/nio-202203301000007-b96870e1.png",s="/assets/nio-202203281000001-86838772.png",d="/assets/nio-202203291000001-e228b379.png",r="/assets/nio-202203301000001-0bee0cc3.png",t="/assets/nio-202203301000003-4d8a0f09.png",c="/assets/nio-202203301000005-555775dd.png",v={},u=l('<h1 id="消息边界的处理" tabindex="-1"><a class="header-anchor" href="#消息边界的处理" aria-hidden="true">#</a> 消息边界的处理</h1><p><img src="'+a+`" alt="img"></p><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>我们先看下面一段代码。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[] args) throws Exception {
    ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();

    serverSocketChannel.configureBlocking(false);

    serverSocketChannel.bind(new InetSocketAddress(8081));

    Selector selector = Selector.open();

    serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);

    while (true) {
        selector.select();

        Iterator&lt;SelectionKey&gt; iterator = selector.selectedKeys().iterator();

        while (iterator.hasNext()) {
            SelectionKey key = iterator.next();

            iterator.remove();

            if (key.isAcceptable()) {
                ServerSocketChannel socketChannel = (ServerSocketChannel) key.channel();
                SocketChannel clientChannel = socketChannel.accept();
                log.info(&quot;{} 建立连接&quot;, clientChannel);
                clientChannel.configureBlocking(false);

                SelectionKey clientKey = clientChannel.register(selector, SelectionKey.OP_READ);
            } else if (key.isReadable()) {
                SocketChannel clientChannel = (SocketChannel) key.channel();
                ByteBuffer byteBuffer = ByteBuffer.allocate(8);
                int size = clientChannel.read(byteBuffer);
                if (size &lt; 0) {
                    // 小于 0 表示客户端断开连接，需要关闭该 SocketChannel
                    log.info(&quot;{}，断开了连接&quot;, clientChannel);
                    clientChannel.close();
                } else {
                    byteBuffer.flip();

                    CharBuffer charBuffer = Charset.forName(&quot;utf-8&quot;).decode(byteBuffer);

                    log.info(&quot;服务端收到消息,消息内容是:{}&quot;,charBuffer.toString());
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务端，客户端连接并发送内容：“hi,i am client-01”，服务端收到内容如下：</p><p><img src="`+s+`" alt="img"></p><p>从服务端输出的结果可以看出，服务端将客户端发送的消息“hi,i am client-01”，分成了三份消息接受，分别是：</p><ul><li>&quot;hi,i am &quot;</li><li>&quot;client-0&quot;</li><li>&quot;1&quot;</li></ul><p>为什么会产生这种情况呢？</p><h2 id="原因分析" tabindex="-1"><a class="header-anchor" href="#原因分析" aria-hidden="true">#</a> 原因分析</h2><p>原因就是下面这行代码：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>ByteBuffer byteBuffer = ByteBuffer.allocate(8);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>分配的缓冲区太小了，服务端每次只能接收 8 个字节，“hi,i am client-01” 消息过长，需要将其进行拆分，分多次进行读取。怎么解决这个问题呢？调整分配 ByteBuffer 的大小？不是这么简单的！因为它涉及一个很敏感的问题： <strong>消息边界</strong>。</p><h3 id="消息边界" tabindex="-1"><a class="header-anchor" href="#消息边界" aria-hidden="true">#</a> 消息边界</h3><p>什么是消息边界？从字面意思上面看就是消息是有边界的？为什么消息要有边界呢？为了区分收到的消息是否为一条完整的消息，为什么每次接收到的消息不是一条完整的消息呢？</p><p>在 Socket 网络编程中，发送端为了将数据更有效地发送给对方，使用了优化方法（Nagle 算法），将多次间隔较小且数据量小的数据合并成一个大的数据块一并发送给对方（封包），这样处理后，接收端就非常难分辨出来了，它必须提供科学有效拆包机制。</p><p>对于 UDP 协议而言，它是数据报传输，协议保证了接收端一次只能接收一个数据报，但是 TCP 是面向流的，是流式传输，没有消息边界的，如果发送端连续发送数据，那么接收端很有可能一次性就接收了多个数据包。</p><p>举个例子，接收端连续发送三个数据包，分别是 2K，4K，8K。如果我们使用 UDP 协议，不管我们使用了多大的接收缓冲区去接收数据，我们必须有三次接收动作，才能够把所有的数据包接收完成。如果我们 TCP 协议，我们只需要把接收端的缓冲区大小设置为 14K 以上，我们就能够一次性把所有的数据包都接收下来。这样我们是不是使用 UDP 协议就好了呢？事实上 UDP 协议是不可靠传输，在实际应用中我们大部分场景都是使用 TCP 协议的。</p><p>上面是阐述了封包的概念，其实还有一个拆包的概念，这里就不详细阐述了，有兴趣的朋友可以查看这篇文章：https://juejin.cn/post/6985486918414761992</p><h3 id="nio-消息边界" tabindex="-1"><a class="header-anchor" href="#nio-消息边界" aria-hidden="true">#</a> NIO 消息边界</h3><p>我们再回归到上面的程序中。上面的程序是接收端将一个消息分成了多次接收，原因就是接收端的缓冲区大小太小了，无法一次性将发送端发送的消息一次性接收完毕。</p><p>对接收端而言，它的 ByteBuffer 存在三种情况：</p><ol><li>ByteBufeer 较小，但是消息比较大</li><li>ByteBufeer 较大，消息比较小。会出现半包现象</li><li>ButeBuffer 较小，但是容纳了多个消息。此时会出现黏包现象</li></ol><p><img src="`+d+`" alt="img"></p><p>怎么解决这种问题呢？一般有三种方式</p><ol><li>固定消息大小。每次发送端都发送固定大小的消息，消息大小不够的就补齐。比如客户端和服务端约定每次 1024 个字节，服务端有 1200 个字节，那第一次就直接发送 1024 个字节，第二次再将剩余的 176 个字节 + 848 个补齐的字节一起发送过去。 <ol><li>这种方案比较浪费带宽。而且将消息拆分补齐后，接收端要进行额外的处理</li></ol></li><li>分割符。就是以特殊字符结尾的就是一条消息的结尾，比如约定每次遇到 \\r 就表示一条消息。 <ol><li>这种方案，效率比较低下，而且需要对发送消息的内容进行转义操作</li></ol></li><li>TLV 格式。即 Type 类型、Length 长度、Value 数据，类型和长度已知的情况下，就可以方便获取消息大小，分配合适的 buffer <ol><li>这种方案是 buffer 需要提前分配，如果内容过大，则影响 server 吞吐量</li><li>Http 1.1 是 TLV 格式</li><li>Http 2.0 是 LTV 格式</li></ol></li></ol><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><p>下面大明哥就用那分割符方案来解决上面那个消息边界这个问题。</p><p>分割符的方案其实很简单，约定客户端和服务端的分割符为 \\n ，那么在接收端判断接收的 ByteBuffer 里面是否有 \\n，如果有就分割，当做一个完成的 ByteBuffer 处理。</p><ul><li>服务端代码</li></ul><p>服务端只列出 read 部分代码。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>SocketChannel clientChannel = (SocketChannel) key.channel();
ByteBuffer byteBuffer = ByteBuffer.allocate(1024);
int size = clientChannel.read(byteBuffer);
if (size &lt; 0) {
    // 小于 0 表示客户端断开连接，需要关闭该 SocketChannel
    log.info(&quot;{}，断开了连接&quot;, clientChannel);
    clientChannel.close();
} else {
    // 消息处理
    byteBufferHandler(byteBuffer);
}

private static void byteBufferHandler(ByteBuffer byteBuffer) {
    byteBuffer.flip();

    for (int i = 0 ; i &lt; byteBuffer.limit() ; i++) {
        if (byteBuffer.get(i) == &#39;\\n&#39;) {
            // 如果有 \\n 就获取前面部分
            int length = i + 1 - byteBuffer.position();

            // 赋值到目标 ByteBuffer 中
            ByteBuffer targetBuffer = ByteBuffer.allocate(length);
            for (int j = 0 ; j &lt; length ; j++) {
                targetBuffer.put(byteBuffer.get());
            }

            ByteBufferUtil.debugAll(targetBuffer);
        }
    }

    byteBuffer.compact();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>客户端代码</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[] args) throws IOException {
    SocketChannel socketChannel = SocketChannel.open();
    socketChannel.connect(new InetSocketAddress(&quot;127.0.0.1&quot;,8081));
    socketChannel.write(Charset.defaultCharset().encode(&quot;hello\\nworld\\n&quot;));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行结果</li></ul><p><img src="`+r+`" alt="img"></p><p>客户端发送 <code>hello\\nworld\\n</code>，服务端确实是准确无误解析出来了。那这个是不是就没有问题了呢？我们重新改造下客户端发送的消息。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[] args) throws IOException {
    SocketChannel socketChannel = SocketChannel.open();
    socketChannel.connect(new InetSocketAddress(&quot;127.0.0.1&quot;,8081));
    socketChannel.write(Charset.defaultCharset().encode(&quot;hello\\nworld&quot;));
    socketChannel.write(Charset.defaultCharset().encode(&quot;,i am sike\\n&quot;));
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个程序我们的预期效果应该是，服务端输出两条消息:</p><ul><li>hello</li><li>world,i am sike</li></ul><p>但事实呢？</p><p><img src="`+t+`" alt="img"></p><p>它把 world 给丢弃了。为什么？因为一个请求，他的 <code>hello\\nworld</code>中的 world 不是一个完整的消息，被丢弃了。怎么解决？将这个 不完整的ByteBuffer 保存起来。如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>} else if (key.isReadable()) {
    SocketChannel clientChannel = (SocketChannel) key.channel();

    // 获取关联的附件
    ByteBuffer byteBuffer =(ByteBuffer) key.attachment();
    if (byteBuffer == null) {
        byteBuffer = ByteBuffer.allocate(1024);
    }
    int size = clientChannel.read(byteBuffer);
    if (size &lt; 0) {
        // 小于 0 表示客户端断开连接，需要关闭该 SocketChannel
        log.info(&quot;{}，断开了连接&quot;, clientChannel);
        clientChannel.close();
    } else {
        // 消息处理
        byteBufferHandler(byteBuffer);

        if (byteBuffer.position() == byteBuffer.limit()) {
            ByteBuffer newBuffer = ByteBuffer.allocate(byteBuffer.capacity() * 2);
            byteBuffer.flip();
            newBuffer.put(byteBuffer);

            // 附加
            key.attach(newBuffer);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实就是使用 <code>SelectionKey</code> 的 Attach 附加对象功能。执行结果：</p><p><img src="`+c+'" alt="img"></p>',47),o=[u];function b(m,f){return n(),i("div",null,o)}const B=e(v,[["render",b],["__file","java-nio-9.html.vue"]]);export{B as default};
