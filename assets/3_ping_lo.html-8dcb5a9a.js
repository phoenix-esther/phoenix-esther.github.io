import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as r,a as s,b as n,d as o,e as a}from"./app-9aa256ea.js";const i="/assets/c3a97f36607c0e7ef6805bfba482a060-f96bf785.gif",d="/assets/5137bc7bce08dc60cfa2f8152b738dfd-f78e5cfe.jpeg",l="/assets/fa904fbcf66cc7abf510a8dc16f867fa-15c49cb6.png",g="/assets/e841adeeecf9451e1aca296d5c7a7f30-9d1e7c2f.png",m="/assets/8e0aba146432baeb407ab445292c8019-700fe29f.png",b="/assets/eb0963a11439dff361dbe0e7a8876abd-650a2dda.png",u="/assets/c1019a8be584b27c4fc8b8abda9d3cf1-edef08b0.png",k="/assets/a207c14a5416f44e9dbf0fe0a41179e4-c3303f21.png",_="/assets/bc2765b1d6d3e37a5663f98085198926-7e3e87c7.png",h="/assets/50cd584f9f82aee8d3d9bfaf7d910cb8-d950a6d8.png",f="/assets/12e13316a18009ce8b2983846819e270-ccfb5066.png",v="/assets/2c35f573e91e94733d009384a4657859-bb360e58.png",P="/assets/ba534fdc5f21b3ab26d0b8c890bb02c3-304f8319.png",I="/assets/9b31572ced19805fab02a23b22819b92-e37d16f6.png",E={},B=s("h1",{id:"断网了-还能-ping-通-127-0-0-1-吗",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#断网了-还能-ping-通-127-0-0-1-吗","aria-hidden":"true"},"#"),n(" 断网了，还能 ping 通 127.0.0.1 吗？")],-1),C=s("p",null,"来源：公众号@小白debug",-1),A={href:"https://mp.weixin.qq.com/s/qqfnyw4wKFjJqnV1eoRDhw",target:"_blank",rel:"noopener noreferrer"},x=a('<p>你<strong>女神爱不爱你</strong>，你问她，她可能不会告诉你。</p><p>但<strong>网通不通</strong>，你 <code>ping</code> 一下就知道了。</p><p>可能看到标题，你就知道答案了，但是你了解背后的原因吗？</p><p>那如果把 <code>127.0.0.1</code> 换成 <code>0.0.0.0</code> 或 <code>localhost</code> 会怎么样呢？你知道这几个<code>IP</code>有什么区别吗？</p><p>以前面试的时候就遇到过这个问题，大家看个动图了解下面试官和我当时的场景，求当时我的心里阴影面积。</p><p><img src="'+i+'" alt="图片"></p><p>话不多说，我们直接开车。</p><p>拔掉网线，断网。</p><p><img src="'+d+`" alt="图片"></p><p>然后在控制台输入<code>ping 127.0.0.1</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ping</span> <span class="token number">127.0</span>.0.1
PING <span class="token number">127.0</span>.0.1 <span class="token punctuation">(</span><span class="token number">127.0</span>.0.1<span class="token punctuation">)</span>: <span class="token number">56</span> data bytes
<span class="token number">64</span> bytes from <span class="token number">127.0</span>.0.1: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.080</span> ms
<span class="token number">64</span> bytes from <span class="token number">127.0</span>.0.1: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.093</span> ms
<span class="token number">64</span> bytes from <span class="token number">127.0</span>.0.1: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.074</span> ms
<span class="token number">64</span> bytes from <span class="token number">127.0</span>.0.1: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.079</span> ms
<span class="token number">64</span> bytes from <span class="token number">127.0</span>.0.1: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">4</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.079</span> ms
^C
--- <span class="token number">127.0</span>.0.1 <span class="token function">ping</span> statistics ---
<span class="token number">5</span> packets transmitted, <span class="token number">5</span> packets received, <span class="token number">0.0</span>% packet loss
round-trip min/avg/max/stddev <span class="token operator">=</span> <span class="token number">0.074</span>/0.081/0.093/0.006 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明，拔了网线，<code>ping 127.0.0.1</code> 是<strong>能ping通的</strong>。</p><p>其实这篇文章看到这里，标题前半个问题已经被回答了。但是我们可以再想深一点。</p><p>为什么断网了还能 <code>ping</code> 通 <code>127.0.0.1</code> 呢？</p><p><strong>这能说明你不用交网费就能上网吗？</strong></p><p><strong>不能。</strong></p><p>首先我们需要进入基础科普环节。</p><p>不懂的同学看了就懂了，懂的看了就当查漏补缺吧。</p>`,18),q={id:"什么是127-0-0-1",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#什么是127-0-0-1","aria-hidden":"true"},"#",-1),V={href:"https://xiaolincoding.com/network/4_ip/ping_lo.html#%E4%BB%80%E4%B9%88%E6%98%AF127-0-0-1",target:"_blank",rel:"noopener noreferrer"},w=a(`<p>首先，这是个 <code>IPV4</code> 地址。</p><p><code>IPV4</code> 地址有 <code>32</code> 位，一个字节有 <code>8</code> 位，共 <code>4</code> 个字节。</p><p>其中<strong>127 开头的都属于回环地址</strong>，也是 <code>IPV4</code> 的特殊地址，没什么道理，就是人为规定的。</p><p>而<code>127.0.0.1</code>是<strong>众多</strong>回环地址中的一个。之所以不是 <code>127.0.0.2</code> ，而是 <code>127.0.0.1</code>，是因为源码里就是这么定义的，也没什么道理。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* Address to loopback in software to local host.  */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>    <span class="token macro-name">INADDR_LOOPBACK</span>     <span class="token expression"><span class="token number">0x7f000001</span>  </span><span class="token comment">/* 127.0.0.1   */</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+l+'" alt="图片"></p><p><code>IPv4</code> 的地址是 <code>32</code> 位的，2的32次方，大概是<code>40+亿</code>。地球光人口就76亿了，40亿IP这点量，<strong>塞牙缝都不够</strong>，实际上<strong>IP也确实用完</strong>了。</p><p>所以就有了<code>IPV6</code>， <code>IPv6</code> 的地址是 <code>128</code> 位的，大概是2的128次方≈<strong>10的38次方</strong>。据说地球的沙子数量大概是 <strong>10的23次方</strong>，所以IPV6的IP可以认为用不完。</p><p>IPV4以8位一组，每组之间用 <strong>.</strong> 号隔开。</p><p>IPV6就以16位为一组，每组之间用 <strong>:</strong> 号隔开。如果全是0，那么可以省略不写。</p><p><img src="'+g+'" alt="图片"></p><p>在IPV4下的回环地址是 <code>127.0.0.1</code>，在<code>IPV6</code>下，表达为 <code>::1</code> 。中间把<strong>连续的0</strong>给省略了，之所以不是<strong>7个 冒号</strong>，而是<strong>2个冒号:</strong> ， 是因为一个 IPV6 地址中<strong>只允许出现⼀次两个连续的冒号</strong>。</p><blockquote><p>多说一句：在IPV4下用的是 <strong>ping 127.0.0.1</strong> 命令。在IPV6下用的是 <strong>ping6 ::1</strong> 命令。</p></blockquote>',13),N={id:"什么是-ping",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#什么是-ping","aria-hidden":"true"},"#",-1),M={href:"https://xiaolincoding.com/network/4_ip/ping_lo.html#%E4%BB%80%E4%B9%88%E6%98%AF-ping",target:"_blank",rel:"noopener noreferrer"},S=a('<p>ping 是应用层命令，可以理解为它跟游戏或者聊天软件属于同一层。只不过聊天软件可以收发消息，还能点个赞什么的，有很多复杂的功能。而 ping 作为一个小软件，它的功能比较简单，就是<strong>尝试</strong>发送一个小小的消息到目标机器上，判断目的机器是否<strong>可达</strong>，其实也就是判断目标机器网络是否能连通。</p><p>ping应用的底层，用的是网络层的<strong>ICMP协议</strong>。</p><p>IP和ICMP和Ping所在分层</p><p>虽然ICMP协议和IP协议<strong>都属于网络层协议</strong>，但其实<strong>ICMP也是利用了IP协议进行消息的传输</strong>。</p><p><img src="'+m+'" alt="图片"></p><p>所以，大家在这里完全可以简单的理解为 ping 某个IP 就是往某个IP地址发个消息。</p>',6),D={id:"tcp发数据和ping的区别",tabindex:"-1"},R=s("a",{class:"header-anchor",href:"#tcp发数据和ping的区别","aria-hidden":"true"},"#",-1),O={href:"https://xiaolincoding.com/network/4_ip/ping_lo.html#tcp%E5%8F%91%E6%95%B0%E6%8D%AE%E5%92%8Cping%E7%9A%84%E5%8C%BA%E5%88%AB",target:"_blank",rel:"noopener noreferrer"},F=a('<p>一般情况下，我们会使用 TCP 进行网络数据传输，那么我们可以看下它和 ping 的区别。</p><p><em>PS：下图中有一处画错了，右边是 tcp 数据，而不是 ping 数据，我偷懒就不重画了</em>。</p><p><img src="'+b+'" alt="图片"></p><p>ping和其他应用层软件都属于<strong>应用层</strong>。</p><p>那么我们横向对比一下，比方说聊天软件，如果用的是TCP的方式去发送消息。</p><p>为了发送消息，那就得先知道往哪发。linux里万物皆文件，那你要发消息的目的地，也是个文件，这里就引出了socket 的概念。</p><p>要使用 <code>socket</code> , 那么首先需要创建它。</p><p>在 TCP 传输中创建的方式是 <code>socket(AF_INET, SOCK_STREAM, 0);</code>，其中 <code>AF_INET</code> 表示将使用 IPV4 里 <strong>host:port</strong> 的方式去解析待会你输入的网络地址。<code>SOCK_STREAM</code> 是指使用面向字节流的 TCP 协议，<strong>工作在传输层</strong>。</p><p>创建好了 <code>socket</code> 之后，就可以愉快的把要传输的数据写到这个文件里。调用 socket 的<code>sendto</code>接口的过程中进程会从<strong>用户态进入到内核态</strong>，最后会调用到 <code>sock_sendmsg</code> 方法。</p><p>然后进入传输层，带上<code>TCP</code>头。网络层带上<code>IP</code>头，数据链路层带上 <code>MAC</code>头等一系列操作后。进入网卡的<strong>发送队列 ring buffer</strong> ，顺着网卡就发出去了。</p><p>回到 <code>ping</code> ， 整个过程也基本跟 <code>TCP</code> 发数据类似，差异的地方主要在于，创建 <code>socket</code> 的时候用的是 <code>socket(AF_INET,SOCK_RAW,IPPROTO_ICMP)</code>，<code>SOCK_RAW</code> 是原始套接字 ，<strong>工作在网络层</strong>， 所以构建<code>ICMP</code>（网络层协议）的数据，是再合适不过了。ping 在进入内核态后最后也是调用的 <code>sock_sendmsg</code> 方法，进入到网络层后加上<strong>ICMP和IP头</strong>后，数据链路层加上<strong>MAC头</strong>，也是顺着网卡发出。因此 本质上ping 跟 普通应用发消息 在程序流程上没太大差别。</p><p>这也解释了**为什么当你发现怀疑网络有问题的时候，别人第一时间是问你能ping通吗？**因为可以简单理解为ping就是自己组了个数据包，让系统按着其他软件发送数据的路径往外发一遍，能通的话说明其他软件发的数据也能通。</p>',12),K={id:"为什么断网了还能-ping-通-127-0-0-1",tabindex:"-1"},L=s("a",{class:"header-anchor",href:"#为什么断网了还能-ping-通-127-0-0-1","aria-hidden":"true"},"#",-1),U={href:"https://xiaolincoding.com/network/4_ip/ping_lo.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%96%AD%E7%BD%91%E4%BA%86%E8%BF%98%E8%83%BD-ping-%E9%80%9A-127-0-0-1",target:"_blank",rel:"noopener noreferrer"},G=a('<p>前面提到，有网的情况下，ping 最后是<strong>通过网卡</strong>将数据发送出去的。</p><p>那么断网的情况下，网卡已经不工作了，ping 回环地址却一切正常，我们可以看下这种情况下的工作原理。</p><p><img src="'+u+'" alt="图片"></p><p>从应用层到传输层再到网络层。这段路径跟ping外网的时候是几乎是一样的。到了网络层，系统会根据目的IP，在路由表中获取对应的<strong>路由信息</strong>，而这其中就包含选择<strong>哪个网卡</strong>把消息发出。</p><p>当发现<strong>目标IP是外网IP</strong>时，会从&quot;真网卡&quot;发出。</p><p>当发现<strong>目标IP是回环地址</strong>时，就会选择<strong>本地网卡</strong>。</p><p>本地网卡，其实就是个**&quot;假网卡&quot;<strong>，它不像&quot;真网卡&quot;那样有个<code>ring buffer</code>什么的，&quot;假网卡&quot;会把数据推到一个叫 <code>input_pkt_queue</code> 的 *<em>链表*</em> 中。这个链表，其实是所有网卡共享的，上面挂着发给本机的各种消息。消息被发送到这个链表后，会再触发一个</strong>软中断**。</p><p>专门处理软中断的工具人**&quot;ksoftirqd&quot;** （这是个<strong>内核线程</strong>），它在收到软中断后就会立马去链表里把消息取出，然后顺着数据链路层、网络层等层层往上传递最后给到应用程序。</p><p><img src="'+k+'" alt="图片"></p><p>ping 回环地址和<strong>通过TCP等各种协议发送数据到回环地址</strong>都是走这条路径。整条路径从发到收，都没有经过&quot;真网卡&quot;。**之所以127.0.0.1叫本地回环地址，可以理解为，消息发出到这个地址上的话，就不会出网络，在本机打个转就又回来了。**所以断网，依然能 <code>ping</code> 通 <code>127.0.0.1</code>。</p>',10),$={id:"ping回环地址和ping本机地址有什么区别",tabindex:"-1"},j=s("a",{class:"header-anchor",href:"#ping回环地址和ping本机地址有什么区别","aria-hidden":"true"},"#",-1),W={href:"https://xiaolincoding.com/network/4_ip/ping_lo.html#ping%E5%9B%9E%E7%8E%AF%E5%9C%B0%E5%9D%80%E5%92%8Cping%E6%9C%AC%E6%9C%BA%E5%9C%B0%E5%9D%80%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB",target:"_blank",rel:"noopener noreferrer"},J=a(`<p>我们在mac里执行 <code>ifconfig</code> 。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ifconfig</span>
lo0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">804</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,LOOPBACK,RUNNING,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">16384</span>
    inet <span class="token number">127.0</span>.0.1 netmask 0xff000000
    <span class="token punctuation">..</span>.
en0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">886</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST<span class="token operator">&gt;</span> mtu <span class="token number">1500</span>
    inet <span class="token number">192.168</span>.31.6 netmask 0xffffff00 broadcast <span class="token number">192.168</span>.31.255
    <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能看到 <strong>lo0</strong>，表示本地回环接口，对应的地址，就是我们前面提到的 <strong>127.0.0.1</strong> ，也就是<strong>回环地址</strong>。</p><p>和 <strong>eth0</strong>，表示本机第一块网卡，对应的IP地址是<strong>192.168.31.6</strong>，管它叫<strong>本机IP</strong>。</p><p>之前一直认为ping本机IP的话会通过&quot;真网卡&quot;出去，然后遇到第一个路由器，再发回来到本机。</p><p>为了验证这个说法，可以进行抓包，但结果跟上面的说法并不相同。</p><p>ping 127.0.0.1:</p><p><img src="`+_+'" alt="图片"></p><p>ping 本机地址:</p><p><img src="'+h+'" alt="图片"></p><p>可以看到 ping 本机IP 跟 ping 回环地址一样，相关的网络数据，都是走的 <strong>lo0</strong>，本地回环接口，也就是前面提到的**&quot;假网卡&quot;**。</p><p>只要走了本地回环接口，那数据都不会发送到网络中，在本机网络协议栈中兜一圈，就发回来了。因此 <strong>ping回环地址和ping本机地址没有区别</strong>。</p>',12),X={id:"_127-0-0-1-和-localhost-以及-0-0-0-0-有区别吗",tabindex:"-1"},Y=s("a",{class:"header-anchor",href:"#_127-0-0-1-和-localhost-以及-0-0-0-0-有区别吗","aria-hidden":"true"},"#",-1),z={href:"https://xiaolincoding.com/network/4_ip/ping_lo.html#_127-0-0-1-%E5%92%8C-localhost-%E4%BB%A5%E5%8F%8A-0-0-0-0-%E6%9C%89%E5%8C%BA%E5%88%AB%E5%90%97",target:"_blank",rel:"noopener noreferrer"},H=a('<p>回到文章开头动图里的提问，算是面试八股文里的老常客了。</p><p>以前第一次用 <code>nginx</code> 的时候，发现用这几个 <code>IP</code>，都能正常访问到 <code>nginx</code> 的欢迎网页。一度认为这几个 <code>IP</code> 都是一样的。</p><p>访问127.0.0.1:80</p><p><img src="'+f+'" alt="图片"></p><p>访问localhost:80</p><p><img src="'+v+'" alt="图片"></p><p>访问0.0.0.0:80</p><p><img src="'+P+'" alt="图片"></p><p>访问本机的IP地址</p><p><img src="'+I+`" alt="图片"></p><p>但本质上还是有些区别的。</p><p>首先 <code>localhost</code> 就不叫 <code>IP</code>，它是一个域名，就跟 <code>&quot;baidu.com&quot;</code>,是一个形式的东西，只不过默认会把它解析为 <code>127.0.0.1</code> ，当然这可以在 <code>/etc/hosts</code> 文件下进行修改。</p><p>所以默认情况下，使用 <code>localhost</code> 跟使用 <code>127.0.0.1</code> 确实是没区别的。</p><p>其次就是 <code>0.0.0.0</code>，执行 ping 0.0.0.0 ，是会失败的，因为它在<code>IPV4</code>中表示的是无效的<strong>目标地址</strong>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">ping</span> <span class="token number">0.0</span>.0.0
PING <span class="token number">0.0</span>.0.0 <span class="token punctuation">(</span><span class="token number">0.0</span>.0.0<span class="token punctuation">)</span>: <span class="token number">56</span> data bytes
ping: sendto: No route to <span class="token function">host</span>
ping: sendto: No route to <span class="token function">host</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但它还是很有用处的，回想下，我们启动服务器的时候，一般会 <code>listen</code> 一个 IP 和端口，等待客户端的连接。</p><p>如果此时 <code>listen</code> 的是本机的 <code>0.0.0.0</code> , 那么它表示本机上的<strong>所有IPV4地址</strong>。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* Address to accept any incoming messages. */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span>    <span class="token macro-name">INADDR_ANY</span>      <span class="token expression"><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token number">0x00000000</span><span class="token punctuation">)</span> </span><span class="token comment">/* 0.0.0.0   */</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>举个例子。刚刚提到的 <code>127.0.0.1</code> 和 <code>192.168.31.6</code> ，都是本机的IPV4地址，如果监听 <code>0.0.0.0</code> ，那么用上面两个地址，都能访问到这个服务器。</p><p>当然， 客户端 <code>connect</code> 时，不能使用 <code>0.0.0.0</code> 。必须指明要连接哪个服务器IP。</p>`,20),Q={id:"总结",tabindex:"-1"},Z=s("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#",-1),ss={href:"https://xiaolincoding.com/network/4_ip/ping_lo.html#%E6%80%BB%E7%BB%93",target:"_blank",rel:"noopener noreferrer"},ns=a("<ul><li><code>127.0.0.1</code> 是<strong>回环地址</strong>。<code>localhost</code>是<strong>域名</strong>，但默认等于 <code>127.0.0.1</code>。</li><li><code>ping</code> 回环地址和 <code>ping</code> 本机地址，是一样的，走的是<strong>lo0 &quot;假网卡&quot;</strong>，都会经过网络层和数据链路层等逻辑，最后在快要出网卡前<strong>狠狠拐了个弯</strong>， 将数据插入到一个<strong>链表</strong>后就<strong>软中断</strong>通知 <strong>ksoftirqd</strong> 来进行<strong>收数据</strong>的逻辑，<strong>压根就不出网络</strong>。所以断网了也能 <code>ping</code> 通回环地址。</li><li>如果服务器 <code>listen</code> 的是 <code>0.0.0.0</code>，那么此时用<code>127.0.0.1</code>和本机地址<strong>都可以</strong>访问到服务。</li></ul>",1);function es(os,as){const e=p("ExternalLinkIcon");return c(),r("div",null,[B,s("blockquote",null,[C,s("p",null,[n("原文地址："),s("a",A,[n("断网了，还能 ping 通 127.0.0.1 吗？(opens new window)"),o(e)])])]),x,s("h2",q,[T,n(),s("a",V,[n("#"),o(e)]),n("什么是127.0.0.1")]),w,s("h2",N,[y,n(),s("a",M,[n("#"),o(e)]),n("什么是 ping")]),S,s("h2",D,[R,n(),s("a",O,[n("#"),o(e)]),n("TCP发数据和ping的区别")]),F,s("h2",K,[L,n(),s("a",U,[n("#"),o(e)]),n("为什么断网了还能 ping 通 127.0.0.1")]),G,s("h2",$,[j,n(),s("a",W,[n("#"),o(e)]),n("ping回环地址和ping本机地址有什么区别")]),J,s("h2",X,[Y,n(),s("a",z,[n("#"),o(e)]),n("127.0.0.1 和 localhost 以及 0.0.0.0 有区别吗")]),H,s("h2",Q,[Z,n(),s("a",ss,[n("#"),o(e)]),n("总结")]),ns])}const cs=t(E,[["render",es],["__file","3_ping_lo.html.vue"]]);export{cs as default};