import{_ as e,V as n,W as i,a0 as d}from"./framework-5dde3bca.js";const s="/assets/1-2d63f7a2.png",a="/assets/image-20230118145124966-99547897.png",l="/assets/image-20230118151935428-88711ee6.png",c="/assets/640-102c22d1.png",r={},t=d('<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h2 id="一、nginx-概述" tabindex="-1"><a class="header-anchor" href="#一、nginx-概述" aria-hidden="true">#</a> 一、Nginx 概述</h2><p>Nginx 是开源、高性能、高可靠的 Web 和反向代理服务器，而且支持热部署，几乎可以做到 7 * 24 小时不间断运行，即使运行几个月也不需要重新启动，还能在不间断服务的情况下对软件版本进行热更新。性能是 Nginx 最重要的考量，其占用内存少、并发能力强、能支持高达 5w 个并发连接数，最重要的是， Nginx 是免费的并可以商业化，配置使用也比较简单。</p><h2 id="二、nginx-特点" tabindex="-1"><a class="header-anchor" href="#二、nginx-特点" aria-hidden="true">#</a> 二、Nginx 特点</h2><ul><li>高并发、高性能；</li><li>模块化架构使得它的扩展性非常好；</li><li>异步非阻塞的事件驱动模型这点和 <code>Node.js</code> 相似；</li><li>相对于其它服务器来说它可以连续几个月甚至更长而不需要重启服务器使得它具有高可靠性；</li><li>热部署、平滑升级；</li><li>完全开源，生态繁荣；</li></ul><h2 id="三、nginx-作用" tabindex="-1"><a class="header-anchor" href="#三、nginx-作用" aria-hidden="true">#</a> 三、Nginx 作用</h2><p>Nginx 的最重要的几个使用场景：</p><ol><li>静态资源服务，通过本地文件系统提供服务；</li><li>反向代理服务，延伸出包括缓存、负载均衡等；</li><li><code>API</code> 服务， <code>OpenResty</code> ；</li></ol><p>对于前端来说 <code>Node.js</code> 并不陌生， <code>Nginx</code> 和 <code>Node.js</code> 的很多理念类似， <code>HTTP</code> 服务器、事件驱动、异步非阻塞等，且 <code>Nginx</code> 的大部分功能使用 <code>Node.js</code> 也可以实现，但 <code>Nginx</code> 和 <code>Node.js</code> 并不冲突，都有自己擅长的领域。 <code>Nginx</code> 擅长于底层服务器端资源的处理（静态资源处理转发、反向代理，负载均衡等）， <code>Node.js</code> 更擅长上层具体业务逻辑的处理，两者可以完美组合。</p><p>用一张图表示：</p><p><img src="'+s+`" alt="1"></p><h2 id="四、nginx-安装" tabindex="-1"><a class="header-anchor" href="#四、nginx-安装" aria-hidden="true">#</a> 四、Nginx 安装</h2><h2 id="五、nginx-常用命令" tabindex="-1"><a class="header-anchor" href="#五、nginx-常用命令" aria-hidden="true">#</a> 五、Nginx 常用命令</h2><p><strong><code>systemctl</code> 系统命令：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开机配置</span>
systemctl <span class="token builtin class-name">enable</span> nginx <span class="token comment"># 开机自动启动</span>
systemctl disable nginx <span class="token comment"># 关闭开机自动启动</span>

<span class="token comment"># 启动Nginx</span>
systemctl start nginx <span class="token comment"># 启动Nginx成功后，可以直接访问主机IP，此时会展示Nginx默认页面</span>

<span class="token comment"># 停止Nginx</span>
systemctl stop nginx

<span class="token comment"># 重启Nginx</span>
systemctl restart nginx

<span class="token comment"># 重新加载Nginx</span>
systemctl reload nginx

<span class="token comment"># 查看 Nginx 运行状态</span>
systemctl status nginx

<span class="token comment"># 查看Nginx进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx

<span class="token comment"># 杀死Nginx进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid <span class="token comment"># 根据上面查看到的Nginx进程号，杀死Nginx进程，-9 表示强制结束进程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>Nginx</code> 应用程序命令：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload  <span class="token comment"># 向主进程发送信号，重新加载配置文件，热重启</span>
nginx <span class="token parameter variable">-s</span> reopen  <span class="token comment"># 重启 Nginx</span>
nginx <span class="token parameter variable">-s</span> stop    <span class="token comment"># 快速关闭</span>
nginx <span class="token parameter variable">-s</span> quit    <span class="token comment"># 等待工作进程处理完成后关闭</span>
nginx <span class="token parameter variable">-T</span>         <span class="token comment"># 查看当前 Nginx 最终的配置</span>
nginx <span class="token parameter variable">-t</span>         <span class="token comment"># 检查配置是否有问题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、nginx-核心配置" tabindex="-1"><a class="header-anchor" href="#六、nginx-核心配置" aria-hidden="true">#</a> 六、Nginx 核心配置</h2><h3 id="_6-1-配置文件结构" tabindex="-1"><a class="header-anchor" href="#_6-1-配置文件结构" aria-hidden="true">#</a> 6.1 配置文件结构</h3><p><code>Nginx</code> 的典型配置示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># main段配置信息
user  nginx;                        # 运行用户，默认即是nginx，可以不进行设置
worker_processes  auto;             # Nginx 进程数，一般设置为和 CPU 核数一样
error_log  /var/log/nginx/error.log warn;   # Nginx 的错误日志存放目录
pid        /var/run/nginx.pid;      # Nginx 服务启动时的 pid 存放位置

# events段配置信息
events {
    use epoll;     # 使用epoll的I/O模型(如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的)
    worker_connections 1024;   # 每个进程允许最大并发数
}

# http段配置信息
# 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置
http { 
    # 设置日志模式
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;   # Nginx访问日志存放位置

    sendfile            on;   # 开启高效传输模式
    tcp_nopush          on;   # 减少网络报文段的数量
    tcp_nodelay         on;
    keepalive_timeout   65;   # 保持连接的时间，也叫超时时间，单位秒
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;      # 文件扩展名与类型映射表
    default_type        application/octet-stream;   # 默认文件类型

    include /etc/nginx/conf.d/*.conf;   # 加载子配置项
    
    # server段配置信息
    server {
     listen       80;       # 配置监听的端口
     server_name  localhost;    # 配置的域名
      
     # location段配置信息
     location / {
      root   /usr/share/nginx/html;  # 网站根目录
      index  index.html index.htm;   # 默认首页文件
      deny 172.168.22.11;   # 禁止访问的ip地址，可以为all
      allow 172.168.33.44；# 允许访问的ip地址，可以为all
     }
     
     error_page 500 502 503 504 /50x.html;  # 默认50x对应的访问页面
     error_page 400 404 error.html;   # 同上
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>main</code> 全局配置，对全局生效；</li><li><code>events</code> 配置影响 <code>Nginx</code> 服务器与用户的网络连接；</li><li><code>http</code> 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置；</li><li><code>server</code> 配置虚拟主机的相关参数，一个 <code>http</code> 块中可以有多个 <code>server</code> 块；</li><li><code>location</code> 用于配置匹配的 <code>uri</code> ；</li><li><code>upstream</code> 配置后端服务器具体地址，负载均衡配置不可或缺的部分；</li></ul><p>用一张图清晰的展示它的层级结构：</p><p><img src="`+a+`" alt="image-20230118145124966"></p><h3 id="_6-2-配置文件-main-段核心参数" tabindex="-1"><a class="header-anchor" href="#_6-2-配置文件-main-段核心参数" aria-hidden="true">#</a> 6.2 配置文件 main 段核心参数</h3><h4 id="_6-2-1-user" tabindex="-1"><a class="header-anchor" href="#_6-2-1-user" aria-hidden="true">#</a> 6.2.1 user</h4><p>指定运行 <code>Nginx</code> 的 <code>woker</code> 子进程的属主和属组，其中组可以不指定。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>user USERNAME <span class="token punctuation">[</span>GROUP<span class="token punctuation">]</span>
user nginx lion<span class="token punctuation">;</span> <span class="token comment"># 用户是nginx;组是lion</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-2-pid" tabindex="-1"><a class="header-anchor" href="#_6-2-2-pid" aria-hidden="true">#</a> 6.2.2 pid</h4><p>指定运行 <code>Nginx</code> <code>master</code> 主进程的 <code>pid</code> 文件存放路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pid /opt/nginx/logs/nginx.pid <span class="token comment"># master主进程的的pid存放在nginx.pid的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-2-3-worker-rlimit-nofile-number" tabindex="-1"><a class="header-anchor" href="#_6-2-3-worker-rlimit-nofile-number" aria-hidden="true">#</a> 6.2.3 worker_rlimit_nofile_number</h4><p>指定 <code>worker</code> 子进程可以打开的最大文件句柄数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_rlimit_nofile <span class="token number">20480</span><span class="token punctuation">;</span> <span class="token comment"># 可以理解成每个worker子进程的最大连接数量。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-2-4-worker-rlimit-core" tabindex="-1"><a class="header-anchor" href="#_6-2-4-worker-rlimit-core" aria-hidden="true">#</a> 6.2.4 worker_rlimit_core</h4><p>指定 <code>worker</code> 子进程异常终止后的 <code>core</code> 文件，用于记录分析问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_rlimit_core 50M<span class="token punctuation">;</span> <span class="token comment"># 存放大小限制</span>
working_directory /opt/nginx/tmp<span class="token punctuation">;</span> <span class="token comment"># 存放目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-5-worker-processes-number" tabindex="-1"><a class="header-anchor" href="#_6-2-5-worker-processes-number" aria-hidden="true">#</a> 6.2.5 worker_processes_number</h4><p>指定 <code>Nginx</code> 启动的 <code>worker</code> 子进程数量。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_processes 4; # 指定具体子进程数量
worker_processes auto; # 与当前cpu物理核心数一致
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-6-worker-cpu-affinity" tabindex="-1"><a class="header-anchor" href="#_6-2-6-worker-cpu-affinity" aria-hidden="true">#</a> 6.2.6 worker_cpu_affinity</h4><p>将每个 <code>worker</code> 子进程与我们的 <code>cpu</code> 物理核心绑定。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_cpu_affinity 0001 0010 0100 1000; # 4个物理核心，4个worker子进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+l+`" alt="image-20230118151935428"></p><p>将每个 <code>worker</code> 子进程与特定 <code>CPU</code> 物理核心绑定，优势在于，避免同一个 <code>worker</code> 子进程在不同的 <code>CPU</code> 核心上切换，缓存失效，降低性能。但其并不能真正的避免进程切换。</p><h4 id="_6-2-7-worker-priority" tabindex="-1"><a class="header-anchor" href="#_6-2-7-worker-priority" aria-hidden="true">#</a> 6.2.7 worker_priority</h4><p>指定 <code>worker</code> 子进程的 <code>nice</code> 值，以调整运行 <code>Nginx</code> 的优先级，通常设定为负值，以优先调用 <code>Nginx</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_priority -10; # 120-10=110，110就是最终的优先级
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Linux</code> 默认进程的优先级值是120，值越小越优先； <code>nice</code> 定范围为 <code>-20</code> 到 <code>+19</code> 。</p><p>[备注] 应用的默认优先级值是120加上 <code>nice</code> 值等于它最终的值，这个值越小，优先级越高。</p><h4 id="_6-2-8-worker-shutdown-timeout" tabindex="-1"><a class="header-anchor" href="#_6-2-8-worker-shutdown-timeout" aria-hidden="true">#</a> 6.2.8 worker_shutdown_timeout</h4><p>指定 <code>worker</code> 子进程优雅退出时的超时时间。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_shutdown_timeout 5s;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-2-9-timer-resolution" tabindex="-1"><a class="header-anchor" href="#_6-2-9-timer-resolution" aria-hidden="true">#</a> 6.2.9 timer_resolution</h4><p><code>worker</code> 子进程内部使用的计时器精度，调整时间间隔越大，系统调用越少，有利于性能提升；反之，系统调用越多，性能下降。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>timer_resolution 100ms;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>Linux</code> 系统中，用户需要获取计时器时需要向操作系统内核发送请求，有请求就必然会有开销，因此这个间隔越大开销就越小。</p><h4 id="_6-2-10-daemon" tabindex="-1"><a class="header-anchor" href="#_6-2-10-daemon" aria-hidden="true">#</a> 6.2.10 daemon</h4><p>指定 <code>Nginx</code> 的运行方式，前台还是后台，前台用于调试，后台用于生产。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>daemon off; # 默认是on，后台运行模式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-3-配置文件-events-段核心参数" tabindex="-1"><a class="header-anchor" href="#_6-3-配置文件-events-段核心参数" aria-hidden="true">#</a> 6.3 配置文件 events 段核心参数</h3><h4 id="_6-3-1-use" tabindex="-1"><a class="header-anchor" href="#_6-3-1-use" aria-hidden="true">#</a> 6.3.1 use</h4><p><code>Nginx</code> 使用何种事件驱动模型。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use method; # 不推荐配置它，让nginx自己选择
method 可选值为：select、poll、kqueue、epoll、/dev/poll、eventport
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-2-worker-connections" tabindex="-1"><a class="header-anchor" href="#_6-3-2-worker-connections" aria-hidden="true">#</a> 6.3.2 worker_connections</h4><p><code>worker</code> 子进程能够处理的最大并发连接数。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>worker_connections 1024 # 每个子进程的最大连接数为1024
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_6-3-3-accept-mutex" tabindex="-1"><a class="header-anchor" href="#_6-3-3-accept-mutex" aria-hidden="true">#</a> 6.3.3 accept_mutex</h4><p>是否打开负载均衡互斥锁。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>accept_mutex on # 默认是off关闭的，这里推荐打开
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-4-server-name-指令" tabindex="-1"><a class="header-anchor" href="#_6-4-server-name-指令" aria-hidden="true">#</a> 6.4 server_name 指令</h3><p>指定虚拟主机域名。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server_name name1 name2 name3
# 示例：
server_name www.nginx.com;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>域名匹配的四种写法：</p><ul><li>精确匹配： <code>server_name www.nginx.com</code> ;</li><li>左侧通配： <code>server_name *.nginx.com</code> ;</li><li>右侧统配： <code>server_name www.nginx.*</code> ;</li><li>正则匹配： <code>server_name ~^www\\.nginx\\.*$</code> ;</li></ul><p>匹配优先级：<strong>「精确匹配 &gt; 左侧通配符匹配 &gt; 右侧通配符匹配 &gt; 正则表达式匹配」</strong></p><p><code>server_name</code> 配置实例：</p><p>1、配置本地 <code>DNS</code> 解析 <code>vim /etc/hosts</code> （ <code>macOS</code> 系统）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 添加如下内容，其中 121.42.11.34 是阿里云服务器IP地址
121.42.11.34 www.nginx-test.com
121.42.11.34 mail.nginx-test.com
121.42.11.34 www.nginx-test.org
121.42.11.34 doc.nginx-test.com
121.42.11.34 www.nginx-test.cn
121.42.11.34 fe.nginx-test.club
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注意] 这里使用的是虚拟域名进行测试，因此需要配置本地 <code>DNS</code> 解析，如果使用阿里云上购买的域名，则需要在阿里云上设置好域名解析。</p><p>2、配置阿里云 <code>Nginx</code> ，<code>vim /etc/nginx/nginx.conf</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 这里只列举了http端中的sever端配置

# 左匹配
server {
 listen 80;
 server_name *.nginx-test.com;
 root /usr/share/nginx/html/nginx-test/left-match/;
 location / {
  index index.html;
 }
}

# 正则匹配
server {
 listen 80;
 server_name ~^.*\\.nginx-test\\..*$;
 root /usr/share/nginx/html/nginx-test/reg-match/;
 location / {
  index index.html;
 }
}

# 右匹配
server {
 listen 80;
 server_name www.nginx-test.*;
 root /usr/share/nginx/html/nginx-test/right-match/;
 location / {
  index index.html;
 }
}

# 完全匹配
server {
 listen 80;
 server_name www.nginx-test.com;
 root /usr/share/nginx/html/nginx-test/all-match/;
 location / {
  index index.html;
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、访问分析</p><p>当访问 www.nginx-test.com 时，都可以被匹配上，因此选择优先级最高的“完全匹配”；</p><p>当访问 mail.nginx-test.com 时，会进行“左匹配”；</p><p>当访问 www.nginx-test.org 时，会进行“右匹配”；</p><p>当访问 doc.nginx-test.com 时，会进行“左匹配”；</p><p>当访问 www.nginx-test.cn 时，会进行“右匹配”；</p><p>当访问 fe.nginx-test.club 时，会进行“正则匹配”；</p><h3 id="_6-5-root" tabindex="-1"><a class="header-anchor" href="#_6-5-root" aria-hidden="true">#</a> 6.5 root</h3><p>指定静态资源目录位置，它可以写在 <code>http</code> 、 <code>server</code> 、 <code>location</code> 等配置中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root path

# 例如：
location /image {
    root /opt/nginx/static;
}

# 当用户访问 www.test.com/image/1.png 时，实际在服务器找的路径是 /opt/nginx/static/image/1.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注意] <code>root</code> 会将定义路径与 <code>URI</code> 叠加， <code>alias</code> 则只取定义路径。</p><h3 id="_6-6-alias" tabindex="-1"><a class="header-anchor" href="#_6-6-alias" aria-hidden="true">#</a> 6.6 alias</h3><p>它也是指定静态资源目录位置，它只能写在 <code>location</code> 中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /image {
    alias /opt/nginx/static/image/;
}

# 当用户访问 www.test.com/image/1.png 时，实际在服务器找的路径是 /opt/nginx/static/image/1.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注意] 使用 alias 末尾一定要添加 <code>/</code> ，并且它只能位于 <code>location</code> 中。</p><h3 id="_6-7-location" tabindex="-1"><a class="header-anchor" href="#_6-7-location" aria-hidden="true">#</a> 6.7 location</h3><p>配置路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location [ = | ~ | ~* | ^~ ] uri {
 ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配规则：</p><ul><li><code>=</code> 精确匹配；</li><li><code>~</code> 正则匹配，区分大小写；</li><li><code>~*</code> 正则匹配，不区分大小写；</li><li><code>^~</code> 匹配到即停止搜索；</li></ul><p>匹配优先级： <code>=</code> &gt; <code>^~</code> &gt; <code>~</code> &gt; <code>~*</code> &gt; 不带任何字符。</p><p>实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name www.nginx-test.com<span class="token punctuation">;</span>
  
  <span class="token comment"># 只有当访问 www.nginx-test.com/match_all/ 时才会匹配到/usr/share/nginx/html/match_all/index.html</span>
  location <span class="token operator">=</span> /match_all/ <span class="token punctuation">{</span>
      root /usr/share/nginx/html
      index index.html
  <span class="token punctuation">}</span>
  
  <span class="token comment"># 当访问 www.nginx-test.com/1.jpg 等路径时会去 /usr/share/nginx/images/1.jpg 找对应的资源</span>
  location ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpeg<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>svg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
      root /usr/share/nginx/images<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment"># 当访问 www.nginx-test.com/bbs/ 时会匹配上 /usr/share/nginx/html/bbs/index.html</span>
  location ^~ /bbs/ <span class="token punctuation">{</span>
      root /usr/share/nginx/html<span class="token punctuation">;</span>
      index index.html index.htm<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-7-1-location-中的反斜线" tabindex="-1"><a class="header-anchor" href="#_6-7-1-location-中的反斜线" aria-hidden="true">#</a> 6.7.1 location 中的反斜线</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /test {
 ...
}

location /test/ {
 ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不带 <code>/</code> 当访问 <code>www.nginx-test.com/test</code> 时， <code>Nginx</code> 先找是否有 <code>test</code> 目录，如果有则找 <code>test</code> 目录下的 <code>index.html</code> ；如果没有 <code>test</code> 目录， <code>nginx</code> 则会找是否有 <code>test</code> 文件。</li><li>带 <code>/</code> 当访问 <code>www.nginx-test.com/test</code> 时， <code>Nginx</code> 先找是否有 <code>test</code> 目录，如果有则找 <code>test</code> 目录下的 <code>index.html</code> ，如果没有它也不会去找是否存在 <code>test</code> 文件。</li></ul><h4 id="_6-7-2-return" tabindex="-1"><a class="header-anchor" href="#_6-7-2-return" aria-hidden="true">#</a> 6.7.2 return</h4><p>停止处理请求，直接返回响应码或重定向到其他 <code>URL</code> ；执行 <code>return</code> 指令后， <code>location</code> 中后续指令将不会被执行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return code [text];
return code URL;
return URL;

例如：
location / {
    return 404; # 直接返回状态码
}

location / {
    return 404 &quot;pages not found&quot;; # 返回状态码 + 一段文本
}

location / {
    return 302 /bbs ; # 返回状态码 + 重定向地址
}

location / {
    return https://www.baidu.com ; # 返回重定向地址
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-7-3-rewrite" tabindex="-1"><a class="header-anchor" href="#_6-7-3-rewrite" aria-hidden="true">#</a> 6.7.3 rewrite</h4><p>根据指定正则表达式匹配规则，重写 <code>URL</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：rewrite 正则表达式 要替换的内容 [flag];

上下文：server、location、if

示例：rewirte /images/(.*\\.jpg)$ /pic/$1; # $1是前面括号(.*\\.jpg)的反向引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>flag</code> 可选值的含义：</p><ul><li><code>last</code> 重写后的 <code>URL</code> 发起新请求，再次进入 <code>server</code> 段，重试 <code>location</code> 的中的匹配；</li><li><code>break</code> 直接使用重写后的 <code>URL</code> ，不再匹配其它 <code>location</code> 中语句；</li><li><code>redirect</code> 返回302临时重定向；</li><li><code>permanent</code> 返回301永久重定向；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
  listen 80;
  server_name fe.lion.club; # 要在本地hosts文件进行配置
  root html;
  location /search {
      rewrite ^/(.*) https://www.baidu.com redirect;
  }
  
  location /images {
      rewrite /images/(.*) /pics/$1;
  }
  
  location /pics {
      rewrite /pics/(.*) /photos/$1;
  }
  
  location /photos {
  
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照这个配置我们来分析：</p><ul><li>当访问 <code>fe.lion.club/search</code> 时，会自动帮我们重定向到 <code>https://www.baidu.com</code>。</li><li>当访问 <code>fe.lion.club/images/1.jpg</code> 时，第一步重写 <code>URL</code> 为 <code>fe.lion.club/pics/1.jpg</code> ，找到 <code>pics</code> 的 <code>location</code> ，继续重写 <code>URL</code> 为 <code>fe.lion.club/photos/1.jpg</code> ，找到 <code>/photos</code> 的 <code>location</code> 后，去 <code>html/photos</code> 目录下寻找 <code>1.jpg</code> 静态资源。</li></ul><h3 id="_6-8-if-指令" tabindex="-1"><a class="header-anchor" href="#_6-8-if-指令" aria-hidden="true">#</a> 6.8 if 指令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>语法：if (condition) {...}

上下文：server、location

示例：
if($http_user_agent ~ Chrome){
  rewrite /(.*)/browser/$1 break;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>condition</code> 判断条件：</p><ul><li><code>$variable</code> 仅为变量时，值为空或以0开头字符串都会被当做 <code>false</code> 处理；</li><li><code>=</code> 或 <code>!=</code> 相等或不等；</li><li><code>~</code> 正则匹配；</li><li><code>! ~</code> 非正则匹配；</li><li><code>~*</code> 正则匹配，不区分大小写；</li><li><code>-f</code> 或 <code>! -f</code> 检测文件存在或不存在；</li><li><code>-d</code> 或 <code>! -d</code> 检测目录存在或不存在；</li><li><code>-e</code> 或 <code>! -e</code> 检测文件、目录、符号链接等存在或不存在；</li><li><code>-x</code> 或 <code>! -x</code> 检测文件可以执行或不可执行；</li></ul><p>实例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 8080;
  server_name localhost;
  root html;
  
  location / {
   if ( $uri = &quot;/images/&quot; ){
     rewrite (.*) /pics/ break;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问 <code>localhost:8080/images/</code> 时，会进入 <code>if</code> 判断里面执行 <code>rewrite</code> 命令。</p><h3 id="_6-9-autoindex" tabindex="-1"><a class="header-anchor" href="#_6-9-autoindex" aria-hidden="true">#</a> 6.9 autoindex</h3><p>用户请求以 <code>/</code> 结尾时，列出目录结构，可以用于快速搭建静态资源下载网站。</p><p><code>autoindex.conf</code> 配置信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
  listen 80;
  server_name fe.lion-test.club;
  
  location /download/ {
    root /opt/source;
    
    autoindex on; # 打开 autoindex，，可选参数有 on | off
    autoindex_exact_size on; # 修改为off，以KB、MB、GB显示文件大小，默认为on，以bytes显示出⽂件的确切⼤⼩
    autoindex_format html; # 以html的方式进行格式化，可选参数有 html | json | xml
    autoindex_localtime off; # 显示的⽂件时间为⽂件的服务器时间。默认为off，显示的⽂件时间为GMT时间
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问 <code>fe.lion.com/download/</code> 时，会把服务器 <code>/opt/source/download/</code> 路径下的文件展示出来，如下图所示：</p><p><img src="`+c+'" alt="图片"></p><h2 id="七、变量" tabindex="-1"><a class="header-anchor" href="#七、变量" aria-hidden="true">#</a> 七、变量</h2><p><code>Nginx</code> 提供给使用者的变量非常多，但是终究是一个完整的请求过程所产生数据， <code>Nginx</code> 将这些数据以变量的形式提供给使用者。</p><p>下面列举些项目中常用的变量：</p><table><thead><tr><th>变量名</th><th>含义</th></tr></thead><tbody><tr><td>remote_addr</td><td>客户端IP地址</td></tr><tr><td>remote_port</td><td>客户端端口</td></tr><tr><td>server_addr</td><td>服务端IP地址</td></tr><tr><td>server_port</td><td>服务端端口</td></tr><tr><td>server_protocol</td><td>服务端协议</td></tr><tr><td>binary_remote_addr</td><td>二进制格式的客户端IP地址</td></tr><tr><td>connection</td><td>TCP连接的序号，递增</td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></tbody></table><p>connection_reques TCP 连接当前的请求数量 uri 请求的URL,不包含参数 request_uri 请求的URL,包含参数 scheme 协议名， nttp或 https request method 请求方法 request_length 全部请求的长度，包含请求行、请求头、请求体 args 全部参数字符串 arg_参效名 获取特定参数值 is_args URL中是否有参数，有的话返回？，否则返回空 query_string 与 args 相同 请求信息中的Host,如果请求中没有Host 行，则在请求头中找，最后使用 host nginx中设置的server._name。</p>',137),o=[t];function v(u,m){return n(),i("div",null,o)}const b=e(r,[["render",v],["__file","nginx.html.vue"]]);export{b as default};
