import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as l}from"./app-e53dd85b.js";const c="/assets/nio-20220320100001-e0dbe9ee.png",a="/assets/nio-20220320100003-d3f0e39d.png",s="/assets/nio-20220320100002-99a14797.png",r="/assets/nio-20220320100004-23fe730f.png",d={},t=l('<h1 id="nio-serversocketchannel的缺陷" tabindex="-1"><a class="header-anchor" href="#nio-serversocketchannel的缺陷" aria-hidden="true">#</a> NIO - ServerSocketChannel的缺陷？</h1><p>上篇文章大明哥介绍了 SocketChannel 的核心原理及其源码，这篇文章就来介绍如何使用 ServerSocketChannel，分析单独使用 ServerSocketChannel 存在哪些问题。</p><p><img src="'+c+`" alt="img"></p><h2 id="阻塞模式" tabindex="-1"><a class="header-anchor" href="#阻塞模式" aria-hidden="true">#</a> 阻塞模式</h2><p>我们先看服务端方法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[] args) throws Exception {
    ByteBuffer buffer = ByteBuffer.allocate(100);
    ServerSocketChannel serverSocket = ServerSocketChannel.open()
    serverSocket.bind(new InetSocketAddress(8080));
    List&lt;SocketChannel&gt; channels = new ArrayList&lt;&gt;();
    while(true) {
        SocketChannel sc = serverSocket.accept();
        channels.add(sc);

        for (SocketChannel asc :channels) {
            asc.read(buffer);
            buffer.flip();
            ByteBufferUtil.debugAll(buffer);
            buffer.clear();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>首先新建一个 ServerSocketChannel 类，同时绑定 8080 端口</li><li>然后 <code>while(true)</code>循环调用 <code>accept()</code>来建立连接，同时将该 SocketChannel 加入到 List 集合中，该集合用来装所有与服务端建立连接的 SocketChannel</li><li>最后接受客户端发送来的数据，打印出来</li></ul><p>现在我们来运行下（这里就不写客户端程序了，就用 MAC 的 iTerm 来模拟即可）。需要开 2 个客户端。</p><p>我们先打开 client-01，然后发送一条 “hi,i am client-01”</p><p><img src="`+a+'" alt="img"></p><p>服务器运行结果：</p><p><img src="'+s+'" alt="img"></p><p>服务端准确无误打印出 client-01 发送过来的消息（hi,i am client-01）。这个时候你再发一条消息：“hi,i am client-11”，你会惊奇地发现，服务端竟然不输出客户端发来的消息。这个时候你再启动 client-02，神奇的事情发生了，服务端把 client-01 发送的消息（hi,i am client-11）给打印出来了：</p><p><img src="'+r+`" alt="img"></p><p>为什么会出现这种神奇的现象？主要原因就是该 <strong>ServerSocketChannel 是阻塞模式，相关方法都会导致线程的阻塞</strong>，当 client-01 建立连接，第一次发送消息时，服务端正常打印消息（hi,i am client-01），这时服务端又运行到 <code>accept()</code>，注意这个方法是阻塞方法，如果没有客户端来建立连接，它会一直阻塞在这里，哪怕 client-01 再次发送消息（hi,i am client-11），服务端也不会打印。这时 client-02 与服务端建立连接，服务端就不会阻塞，打印 client-01 第二次发来的消息（hi,i am client-11）。</p><p>所以，阻塞模式存在如下缺陷</p><ul><li>单线程情况下，阻塞方法都会导致线程暂停 <ul><li><code>ServerSocketChannel.accept()</code> 会在没有连接建立时让线程暂停，即使有客户端向服务端发送消息，服务单也接收不到直到有新客户端连接服务端，不再阻塞在<code>accept()</code>方法上。</li><li><code>SocketChannel.read()</code> 会在通道中没有数据可读时让线程暂停，即使之后有新客户端向服务端发起连接请求也接受不了，直到读取完毕，不再阻塞在<code>read()</code>方法上</li></ul></li></ul><p>所以在单线程情况，服务端几乎不可能正常工作。那多线程呢？多线程情况下，如果连接数过多，必然会导致 OOM，然后线程的上下文切换也会导致性能低下。</p><h2 id="非阻塞模式" tabindex="-1"><a class="header-anchor" href="#非阻塞模式" aria-hidden="true">#</a> 非阻塞模式</h2><p>上面的阻塞模式几乎导致整个服务端是可能使用的，我们是可以使用非阻塞模式来避免的。如下</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static void main(String[] args) throws Exception {
    ByteBuffer buffer = ByteBuffer.allocate(100);
    ServerSocketChannel serverSocket = ServerSocketChannel.open();

    serverSocket.bind(new InetSocketAddress(8080));
    List&lt;SocketChannel&gt; channels = new ArrayList&lt;&gt;();
    while(true) {
        // 非阻塞模式
        serverSocket.configureBlocking(false);

        SocketChannel sc = serverSocket.accept();
        if (sc != null){
          channels.add(sc);
        }

        for (SocketChannel asc :channels) {
            asc.configureBlocking(false);

            int size = asc.read(buffer);
            if (size &gt; 0) {
                buffer.flip();
                ByteBufferUtil.debugAll(buffer);
                buffer.clear();
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过 <code>ServerSocketChannel.configureBlocking(false)</code> 将 serverSocket 设置为非阻塞模式，这样 serverSocket 在调用 <code>accept()</code>方法时就不会阻塞了，如果没有连接，则会返回 null</li><li>通过 <code>SocketChannel..configureBlocking(false)</code> 将 asc 设置为非阻塞模式，这 asc 在调用 <code>read()</code> 方法就不会阻塞了，如果没有可读数据，它则会返回 -1。</li></ul><p>非阻塞模式虽然不会影响业务的使用，但由于在 <code>while(true)</code> 循环里面，CPU 会一直处理运行状态，占用和浪费 CPU 资源。</p><p>所以，采用这种 <code>while(true)</code> 循环的暴力方式根本就不适合业务使用，对于 SocketChannel 而言，我们希望他只担任一个通道，传传数据的角色即可，不需再有额外的角色了，故而我们不能放任他们，需要对其进行统一管理，既要有管理器，有连接来了，我就告诉你该建立连接了，有要读的数据，我就告诉你可以读数据了，这样 SocketChannel 是不是就很爽了。在 NIO 中，这个管理器称之为 Selector。</p>`,24),v=[t];function o(u,m){return n(),i("div",null,v)}const p=e(d,[["render",o],["__file","java-nio-6.html.vue"]]);export{p as default};
