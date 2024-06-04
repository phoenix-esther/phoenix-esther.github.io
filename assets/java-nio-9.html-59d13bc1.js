const e=JSON.parse('{"key":"v-60a6785c","path":"/java/java-io/java-nio-9.html","title":"消息边界的处理","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[{"level":3,"title":"消息边界","slug":"消息边界","link":"#消息边界","children":[]},{"level":3,"title":"NIO 消息边界","slug":"nio-消息边界","link":"#nio-消息边界","children":[]}]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]}],"git":{"createdTime":1716801999000,"updatedTime":1716801999000,"contributors":[{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":6.01,"words":1803},"filePathRelative":"java/java-io/java-nio-9.md","localizedDate":"2024年5月27日","excerpt":"<h1> 消息边界的处理</h1>\\n<p></p>\\n<h2> 背景</h2>\\n<p>我们先看下面一段代码。</p>\\n<div class=\\"language-Java line-numbers-mode\\" data-ext=\\"Java\\"><pre class=\\"language-Java\\"><code>public static void main(String[] args) throws Exception {\\n    ServerSocketChannel serverSocketChannel = ServerSocketChannel.open();\\n\\n    serverSocketChannel.configureBlocking(false);\\n\\n    serverSocketChannel.bind(new InetSocketAddress(8081));\\n\\n    Selector selector = Selector.open();\\n\\n    serverSocketChannel.register(selector, SelectionKey.OP_ACCEPT);\\n\\n    while (true) {\\n        selector.select();\\n\\n        Iterator&lt;SelectionKey&gt; iterator = selector.selectedKeys().iterator();\\n\\n        while (iterator.hasNext()) {\\n            SelectionKey key = iterator.next();\\n\\n            iterator.remove();\\n\\n            if (key.isAcceptable()) {\\n                ServerSocketChannel socketChannel = (ServerSocketChannel) key.channel();\\n                SocketChannel clientChannel = socketChannel.accept();\\n                log.info(\\"{} 建立连接\\", clientChannel);\\n                clientChannel.configureBlocking(false);\\n\\n                SelectionKey clientKey = clientChannel.register(selector, SelectionKey.OP_READ);\\n            } else if (key.isReadable()) {\\n                SocketChannel clientChannel = (SocketChannel) key.channel();\\n                ByteBuffer byteBuffer = ByteBuffer.allocate(8);\\n                int size = clientChannel.read(byteBuffer);\\n                if (size &lt; 0) {\\n                    // 小于 0 表示客户端断开连接，需要关闭该 SocketChannel\\n                    log.info(\\"{}，断开了连接\\", clientChannel);\\n                    clientChannel.close();\\n                } else {\\n                    byteBuffer.flip();\\n\\n                    CharBuffer charBuffer = Charset.forName(\\"utf-8\\").decode(byteBuffer);\\n\\n                    log.info(\\"服务端收到消息,消息内容是:{}\\",charBuffer.toString());\\n                }\\n            }\\n        }\\n    }\\n}\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
