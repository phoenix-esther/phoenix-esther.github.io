import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as s}from"./app-e53dd85b.js";const d="/assets/nio-20220227100001-3000bb6d.png",a="/assets/202311031000003-350a93bd.png",l="/assets/202311031000004-1ce7711f.png",r="/assets/202311031000005-3e13ea12.png",c="/assets/nio-20220123100001-12f9982c.jpg",t="/assets/nio-20220123100002-62fa5e3d.jpg",v="/assets/nio-20220220100001-baab9463.png",o={},u=s('<h1 id="nio-socketchannel" tabindex="-1"><a class="header-anchor" href="#nio-socketchannel" aria-hidden="true">#</a> NIO - SocketChannel</h1><p>前两篇文章我们分析了 Channel 及 FileChannel，这篇文章我们探究 SocketChannel的核心原理，毕竟下一个系列就是 **【死磕 Netty】**了。</p><p><img src="'+d+'" alt="img"></p><h2 id="聊聊socket" tabindex="-1"><a class="header-anchor" href="#聊聊socket" aria-hidden="true">#</a> 聊聊Socket</h2><p>要想掌握 SocketChannel，我们就必须先了解什么是 Socket。要想解释清楚 Socket，就需要了解下 TCP/IP。</p><p><strong>注：本文重点在 SocketChannel，所以对 TCP和 Socket仅仅只做相关介绍，有兴趣的同学，麻烦自查专业资料</strong>。</p><h3 id="tcp-ip-体系结构" tabindex="-1"><a class="header-anchor" href="#tcp-ip-体系结构" aria-hidden="true">#</a> TCP/IP 体系结构</h3><p>学过计算机网络的小伙伴知道，计算机网络是分层的，每层专注于一类事情。OSI 网路模型分为七层，如下：</p><p><img src="'+a+'" alt="img"></p><p>OSI 模型是理论中的模型，在实际应用中我们使用的是 TCP/IP 四层模型，它对OSI模型重新进行了划分和规整，如下：</p><p><img src="'+l+'" alt="img"></p><p>网络层次划分清楚了，那怎么传输数据呢？如下图：</p><p><img src="'+r+'" alt="img"></p><p>计算机A首先在应用层将要发送的数据准备好，然后给传输层， <strong>传输层的主要作用就是为发送端和接收端提供可靠的连接服务</strong>，传输层将数据处理完成后给网络层， <strong>网络层的一个核心功能就是数据传输路径的选择</strong>。计算机A到计算机B有很多条路，网络层的作用就是负责管理下一步数据应该到那个路由器，选择好路径后，数据就到了网络接入层，该层主要负责将数据从一个路由器发送到另一个路由器。</p><p>上图是一个非常清晰的传输过程。但是我们思考两个个问题：</p><ol><li>计算机A是怎么知道计算机B的具体位置的呢？</li><li>它又怎么知道将该数据包发送给哪个应用程序呢？</li></ol><p>TCP/IP协议族已经帮我们解决了这个问题： <strong>IP地址+协议+端口</strong>。</p><ul><li><strong>网络层的“IP地址”唯一标识了网络中的主机</strong>：这样就可以找到要将数据发送给哪台主机了。</li><li><strong>传输层的“协议 + 端口”唯一标识主机中的应用程序</strong>：这样就可以找到要将数据发给那个应该程序了。</li></ul><p>利用三元组（IP地址、协议、端口）就可以让计算机A确定将数据包发送给计算机B的应用程序了。</p><p>使用TCP/IP 协议的应用程序通常采用编程接口：UNIX BSD的套接字(socket)和UNIX System V的TLI(已经被淘汰)，来实现网络进程之间的通信。就目前而言， <strong>几乎所有的应用程序都是采用的 Socket</strong>。</p><h3 id="socket" tabindex="-1"><a class="header-anchor" href="#socket" aria-hidden="true">#</a> Socket</h3><p>上面提到就目前而言，几乎所有的应用程序都是采用 Socket 来完成网络通信的。那什么是Socket呢？百度百科是这样定义的：</p><blockquote><p>套接字（socket）是一个抽象层，应用程序可以通过它发送或接收数据，可对其进行像对文件一样的打开、读写和关闭等操作。套接字允许应用程序将I/O插入到网络中，并与网络中的其他应用程序进行通信。网络套接字是IP地址与端口的组合。</p></blockquote><p>在TCP/IP四层模型中，我们并没有看到 Socket 影子，那它到底在哪里呢？ 又扮演什么角色呢？</p><p>Socket 并不是属于 TCP/IP 模型中的任何一层，它的存在只是为了让应用层能够更加简便地将数据传输给传输层，应用层不需要关注TCP/IP 协议的复杂内容。我们可以将其理解成一个接口，一个把复杂的TCP/IP协议族隐藏起来的接口，对于应用层而言，他们只需要简单地调用 Socket 接口就可以实现复杂的TCP/IP 协议，就像设计模式中的门面模式（ <strong>将复杂的TCP\\IP 协议族隐藏起来，对外提供统一的接口，是应用层能够更加容易地使用</strong>）。简单地说就是简单来说可以把 <strong>Socket理解成是应用层与TCP/IP协议族通信的抽象层、函数库</strong>。</p><p><img src="'+c+'" alt="img"></p><p>下图是 Socket一次完整的通信流程图：</p><p><img src="'+t+`" alt="img"></p><p>上图设计到的Socket 相关函数：</p><ul><li><code>socket()</code>：返回套接字描述符</li><li><code>connect()</code>：建立连接</li><li><code>bind()</code>：一个本地协议地址赋予一个套接字</li><li><code>linsten()</code>：服务器监听端口连接</li><li><code>accept()</code>：应用程序接受完成3次握手的客户端连接</li><li><code>send()</code>、<code>recv()</code>、<code>write()</code>、<code>read()</code>：服务端与客户端互相发送数据</li><li><code>colse()</code>：关闭连接</li></ul><h2 id="探究socketchannel" tabindex="-1"><a class="header-anchor" href="#探究socketchannel" aria-hidden="true">#</a> 探究SocketChannel</h2><p>SocketChannel 是一个连接 TCP 网络Socket 的 Channel，我们可以认为它是对传统 Java Socket API的改进。它支持了非阻塞的读写。</p><p>SocketChannel具有如下特点</p><ol><li>对于已经存在的socket不能创建SocketChannel。</li><li>SocketChannel中提供的open接口创建的Channel并没有进行网络级联，需要使用connect接口连接到指定地址。</li><li>未进行连接的SocketChannle执行I/O操作时，会抛出<code>NotYetConnectedException</code>。</li><li>SocketChannel支持两种I/O模式：阻塞式和非阻塞式。</li><li>SocketChannel支持异步关闭。如果SocketChannel在一个线程上read阻塞，另一个线程对该SocketChannel调用shutdownInput，则读阻塞的线程将返回-1表示没有读取任何数据；如果SocketChannel在一个线程上write阻塞，另一个线程对该SocketChannel调用shutdownWrite，则写阻塞的线程将抛出<code>AsynchronousCloseException</code>。</li></ol><h3 id="socketchannel-的使用" tabindex="-1"><a class="header-anchor" href="#socketchannel-的使用" aria-hidden="true">#</a> SocketChannel 的使用</h3><p><strong>1. 创建SocketChannel</strong></p><p>要想使用 SocketChannel我们首先得创建它。创建SocketChannel的方式有两种：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 方式 1
SocketChannel socketChannel = SocketChannel.open(new InetSocketAddress(&quot;www.baidu.com&quot;, 80));

// 方式 2
SocketChannel socketChannel = SocketChannel.open();
socketChannel.connect(new InetSocketAddress(&quot;www.baidu.com&quot;, 80));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、连接校验</strong></p><p>使用的SocketChannel必须是已连接的，如果使用一个未连接的SocketChannel，则会抛出 <code>NotYetConnectedException</code>。SocketChannel提供了四个方法来校验连接。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 测试SocketChannel是否为open状态
socketChannel.isOpen();
// 测试SocketChannel是否已经被连接   
socketChannel.isConnected();
// 测试SocketChannel是否正在进行连接
socketChannel.isConnectionPending();
// 校验正在进行套接字连接的SocketChannel是否已经完成连接
socketChannel.finishConnect(); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、读操作</strong></p><p>SocketChannel 提供了 <code>read()</code>方法用于读取数据：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public abstract int read(ByteBuffer dst) throws IOException;

public abstract long read(ByteBuffer[] dsts, int offset, int length) throws IOException;

public final long read(ByteBuffer[] dsts) throws IOException {
  return read(dsts, 0, dsts.length);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先我们需要先分配一个 ByteBuffer，然后调用 <code>read()</code>方法，该方法会将数据从SocketChannel读入到 ByteBuffer中。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>ByteBuffer buf = ByteBuffer.allocate(48);
int bytesRead = socketChannel.read(buf);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>read()</code>方法会返回一个 int 值，该值表示读取了多少数据到 Buffer 中，如果返回 -1，则表示已经读到了流的末尾。</p><p>4、<strong>写操作</strong></p><p>调用 SocketChannel的<code>write()</code>方法，可以向 SocketChannel 中写数据。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public abstract int write(ByteBuffer src) throws IOException;

public abstract long write(ByteBuffer[] srcs, int offset, int length) throws IOException;

public final long write(ByteBuffer[] srcs) throws IOException {
    return write(srcs, 0, srcs.length);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5、设置 I/O 模式</strong></p><p>SocketChannel 支持阻塞和非阻塞两种 I/O 模式，调用 <code>configureBlocking()</code>方法即可：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>socketChannel.configureBlocking(false);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>false 表示非阻塞，true 表示阻塞。</p><p><strong>6、关闭</strong></p><p>当使用完 SocketChannel 后需要将其关闭，SocketChannel 提供了 <code>close()</code>来关闭 SocketChannel 。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>socketChannel.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="socketchannel-源码分析" tabindex="-1"><a class="header-anchor" href="#socketchannel-源码分析" aria-hidden="true">#</a> SocketChannel 源码分析</h3><p>上面简单介绍了 SocketChannel 的使用，下面我们再来详细分析 SocketChannel 的源码。SocketChannel 实现 Channel 接口，它有一个核心子类 SocketChannel，该类实现了 SocketChannel 的大部分功能。如下（图有删减）</p><p><img src="`+v+`" alt="img"></p><h4 id="创建-socketchannel" tabindex="-1"><a class="header-anchor" href="#创建-socketchannel" aria-hidden="true">#</a> <strong>创建</strong> <strong>SocketChannel</strong></h4><p>上面提到通过调用 <code>open()</code>方法就可以一个 SocketChannel 实例。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static SocketChannel open() throws IOException {
    return SelectorProvider.provider().openSocketChannel();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看到它是通过 SelectorProvider 来创建 SocketChannel 的，<code>provider()</code> 方法会创建一个 SelectorProvider 实例，SelectorProvider 是 Selector 和 Channel 实例的提供者，它提供了创建 Selector、SocketChannel、ServerSocketChannel 实例的方法，采用 SPI 的方式实现。 <strong>SelectorProvider</strong> 我们在讲解 Selector 的时候在阐述。</p><p>provider 创建完成后调用 <code>openSocketChannel()</code> 来创建 SocketChannel。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public SocketChannel openSocketChannel() throws IOException {
    return new SocketChannelImpl(this);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这了就可以看出 SocketChannelImpl 为 SocketChannel 的实现者。调用 SocketChannelImpl 的构造函数实例化一个 SocketChannel 对象。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>SocketChannelImpl(SelectorProvider sp) throws IOException {
    super(sp);
    // 创建 Socket 并创建一个文件描述符与其关联
    this.fd = Net.socket(true);
    // 在注册 selector 的时候需要获取到文件描述符的值
    this.fdVal = IOUtil.fdVal(fd);
    // 设置状态为未连接
    this.state = ST_UNCONNECTED;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>fd</strong>：文件夹描述符对象。</p><p><strong>fdVal</strong>：fd 的 value。</p><blockquote><p>文件描述符简称 fd，它是一个抽象概念，在 C 库编程中可以叫做文件流或文件流指针，在其它语言中也可以叫做文件句柄（handler），而且这些不同名词的隐含意义可能是不完全相同的。不过在系统层，我们统一把它叫做文件描述符。</p></blockquote><p><strong>state</strong>：状态，设置为未连接。它有如下 6 个值</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private static final int ST_UNINITIALIZED = -1;
private static final int ST_UNCONNECTED = 0;
private static final int ST_PENDING = 1;
private static final int ST_CONNECTED = 2;
private static final int ST_KILLPENDING = 3;
private static final int ST_KILLED = 4;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="连接服务器-connect" tabindex="-1"><a class="header-anchor" href="#连接服务器-connect" aria-hidden="true">#</a> 连接服务器：connect()</h4><p>调用 <code>Connect()</code> 方法可以链接远程服务器。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public boolean connect(SocketAddress sa) throws IOException {
    int localPort = 0;
    
    // 注意这里的加锁
    synchronized (readLock) {
        synchronized (writeLock) {
           // 确保当前 SocketChannel 是打开且未连接的
            ensureOpenAndUnconnected();
            InetSocketAddress isa = Net.checkAddress(sa);
            SecurityManager sm = System.getSecurityManager();
            if (sm != null)
                sm.checkConnect(isa.getAddress().getHostAddress(),
                                isa.getPort());
            // 这里的锁是注册和阻塞配置的锁
            synchronized (blockingLock()) {
                int n = 0;
                try {
                    try {
                        // 支持线程中断，通过设置当前线程的Interruptible blocker属性实现
                        begin();
                        // 
                        synchronized (stateLock) {
                           // 默认为 open, 除非调用了 close()
                            if (!isOpen()) {
                                return false;
                            }
                            // 只有未绑定本地地址也就是说未调用bind方法才执行
                            if (localAddress == null) {
                                NetHooks.beforeTcpConnect(fd,
                                                       isa.getAddress(),
                                                       isa.getPort());
                            }
                            // 记录当前线程
                            readerThread = NativeThread.current();
                        }
                        for (;;) {
                            InetAddress ia = isa.getAddress();
                            if (ia.isAnyLocalAddress())
                                ia = InetAddress.getLocalHost();
                            // 调用 Linux 的 connect 函数实现
                            // 如果采用堵塞模式，会一直等待，直到成功或出现异常
                            n = Net.connect(fd,
                                            ia,
                                            isa.getPort());
                            if (  (n == IOStatus.INTERRUPTED)
                                  &amp;&amp; isOpen())
                                continue;
                            break;
                        }

                    } finally {
                        readerCleanup();
                        end((n &gt; 0) || (n == IOStatus.UNAVAILABLE));
                        assert IOStatus.check(n);
                    }
                } catch (IOException x) {
                    // 出现异常，关闭 Channel
                    close();
                    throw x;
                }
                synchronized (stateLock) {
                    remoteAddress = isa;
                    if (n &gt; 0) {
                        // n &gt; 0,表示连接成功
                        // 连接成功，更新状态为ST_CONNECTED
                        state = ST_CONNECTED;
                        if (isOpen())
                            
                            localAddress = Net.localAddress(fd);
                        return true;
                    }
                    // 如果是非堵塞模式，而且未立即返回成功，更新状态为ST_PENDING
                    // 由此可见，该状态只有非堵塞时才会存在
                    if (!isBlocking())
                        state = ST_PENDING;
                    else
                        assert false;
                }
            }
            return false;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法的核心方法就在于 <code>n = Net.connect(fd,ia,isa.getPort());</code> 该方法会一直调用到 native 方法去：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>JNIEXPORT jint JNICALL
Java_sun_nio_ch_Net_connect0(JNIEnv *env, jclass clazz, jboolean preferIPv6,
                             jobject fdo, jobject iao, jint port)
{
    SOCKADDR sa;
    int sa_len = SOCKADDR_LEN;
    int rv;
    //地址转换为struct sockaddr格式
    if (NET_InetAddressToSockaddr(env, iao, port, (struct sockaddr *) &amp;sa,
                                  &amp;sa_len, preferIPv6) != 0)
    {
      return IOS_THROWN;
    }
   //传入 fd 和 sockaddr,与远程服务器建立连接，一般就是 TCP 三次握手
   //如果设置了 configureBlocking(false), 不会堵塞，否则会堵塞一直到超时或出现异常
    rv = connect(fdval(env, fdo), (struct sockaddr *)&amp;sa, sa_len);
    if (rv != 0) { 
        // 0 表示连接成功，失败时通过 errno 获取具体原因
        if (errno == EINPROGRESS) {  //非堵塞，连接还未建立(-2)
            return IOS_UNAVAILABLE;
        } else if (errno == EINTR) {  //中断(-3)
            return IOS_INTERRUPTED;
        }
        return handleSocketError(env, errno); //出错
    }
    return 1; //连接建立,一般TCP连接连接都需要时间，因此除非是本地网络，一般情况下非堵塞模式返回IOS_UNAVAILABLE比较多；
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读数据-read" tabindex="-1"><a class="header-anchor" href="#读数据-read" aria-hidden="true">#</a> 读数据：read()</h4><p>SocketChannel 提供 <code>read()</code> 方法读取数据。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public int read(ByteBuffer buf) throws IOException {
     synchronized (readLock) {
         // ...
         try {
             // ...
             for (;;) {
                 n = IOUtil.read(fd, buf, -1, nd);
                 if ((n == IOStatus.INTERRUPTED) &amp;&amp; isOpen()) {
                     continue;
                 }
                 return IOStatus.normalize(n);
             }

         } finally {
             // ...
         }
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心方法就在于 <code>IOUtil.read(fd, buf, -1, nd)</code>。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>static int read(FileDescriptor fd, ByteBuffer dst, long position,NativeDispatcher nd)
    throws IOException
{
    if (dst.isReadOnly())
        throw new IllegalArgumentException(&quot;Read-only buffer&quot;);
    if (dst instanceof DirectBuffer)
        // 使用直接缓冲区读取数据
        return readIntoNativeBuffer(fd, dst, position, nd);

    // 当不是使用直接内存时，则从线程本地缓冲获取一块临时的直接缓冲区存放待读取的数据
    ByteBuffer bb = Util.getTemporaryDirectBuffer(dst.remaining());
    try {
        int n = readIntoNativeBuffer(fd, bb, position, nd);
        bb.flip();
        if (n &gt; 0)
            // 将直接缓冲区的数据写入到堆缓冲区中
            dst.put(bb);
        return n;
    } finally {
        // 使用完成后释放缓冲
        Util.offerFirstTemporaryDirectBuffer(bb);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们看到如果 ByteBuffer 是 DirectBuffer，则调用 <code>readIntoNativeBuffer()</code> 读取数据，如果不是则通过 <code>getTemporaryDirectBuffer()</code> 获取一个临时的直接缓冲区，然后调用 <code>readIntoNativeBuffer()</code>获取数据，然后将获取的数据写入 ByteBuffer 中。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private static int readIntoNativeBuffer(FileDescriptor fd, ByteBuffer bb,long position, NativeDispatcher nd)
    throws IOException
{
    int pos = bb.position();
    int lim = bb.limit();
    assert (pos &lt;= lim);
    int rem = (pos &lt;= lim ? lim - pos : 0);

    if (rem == 0)
        return 0;
    int n = 0;
    if (position != -1) {
        n = nd.pread(fd, ((DirectBuffer)bb).address() + pos,rem, position);
    } else {
        n = nd.read(fd, ((DirectBuffer)bb).address() + pos, rem);
    }
    if (n &gt; 0)
        bb.position(pos + n);
    return n;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写数据 <code>write()</code>方法和 <code>read()</code>方法大致一样，大明哥这里就不在阐述了，有兴趣的小伙伴自己去研究下。</p><p>ServerSocketChannel 与 SocketChannel 原理大同小异，这里就不展开讲述了，下篇文章我们开始研究第三个组件： <strong>Selector</strong></p>`,87),m=[u];function b(p,h){return n(),i("div",null,m)}const k=e(o,[["render",b],["__file","java-nio-5.html.vue"]]);export{k as default};
