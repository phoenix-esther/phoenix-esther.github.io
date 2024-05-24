const e=JSON.parse('{"key":"v-d9d3dd9a","path":"/quality/network/1_base/1.tcp-id-model.html","title":"TCP/IP 网络模型有哪几层？","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一、应用层","slug":"一、应用层","link":"#一、应用层","children":[]},{"level":2,"title":"二、传输层","slug":"二、传输层","link":"#二、传输层","children":[]},{"level":2,"title":"三、网络层","slug":"三、网络层","link":"#三、网络层","children":[]},{"level":2,"title":"四、网络接口层","slug":"四、网络接口层","link":"#四、网络接口层","children":[]},{"level":2,"title":"五、总结","slug":"五、总结","link":"#五、总结","children":[]}],"git":{"createdTime":1694651999000,"updatedTime":1694954851000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":1},{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":8.42,"words":2526},"filePathRelative":"quality/network/1_base/1.tcp-id-model.md","localizedDate":"2023年9月14日","excerpt":"<h1> TCP/IP 网络模型有哪几层？</h1>\\n<p>问大家，为什么要有 TCP/IP 网络模型？</p>\\n<p>对于同一台设备上的进程间通信，有很多种方式，比如有管道、消息队列、共享内存、信号等方式，而对于不同设备上的进程间通信，就需要网络通信，而设备是多样性的，所以要兼容多种多样的设备，就协商出了一套<strong>通用的网络协议</strong>。</p>\\n<p>这个网络协议是分层的，每一层都有各自的作用和职责，接下来就根据「 TCP/IP 网络模型」分别对每一层进行介绍。</p>\\n<h2> 一、应用层</h2>\\n<p>最上层的，也是我们能直接接触到的就是<strong>应用层</strong>（<em>Application Layer</em>），我们电脑或手机使用的应用软件都是在应用层实现。那么，当两个不同设备的应用需要通信的时候，应用就把应用数据传给下一层，也就是传输层。</p>"}');export{e as data};