import{_ as e,V as d,W as a,X as i}from"./framework-4ec38622.js";const r={},t=i(`<h1 id="redis-基础" tabindex="-1"><a class="header-anchor" href="#redis-基础" aria-hidden="true">#</a> Redis 基础</h1><h2 id="一-redis的基础数据结构" tabindex="-1"><a class="header-anchor" href="#一-redis的基础数据结构" aria-hidden="true">#</a> 一：Redis的基础数据结构</h2><h3 id="_1-1-redis的安装" tabindex="-1"><a class="header-anchor" href="#_1-1-redis的安装" aria-hidden="true">#</a> 1.1 Redis的安装</h3><h4 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码" aria-hidden="true">#</a> 下载源码</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> wget https://download.redis.io/redis-stable.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="编译redis" tabindex="-1"><a class="header-anchor" href="#编译redis" aria-hidden="true">#</a> 编译Redis</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 解压
tar zxvf redis-stable.tar.gz

// 编译之前需要安装make和gcc
sudo apt install make
sudo apt-get install gcc
sudo apt install pkg-config

// 编译
make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译过程中报了个错误</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd src &amp;&amp; make all
make[1]: Entering directory &#39;/home/xuliang/developer/env/redis-stable/src&#39;
/bin/sh: 1: pkg-config: not found
    CC adlist.o
In file included from adlist.c:34:
zmalloc.h:50:10: fatal error: jemalloc/jemalloc.h: No such file or directory
   50 | #include &lt;jemalloc/jemalloc.h&gt;
      |          ^~~~~~~~~~~~~~~~~~~~~
compilation terminated.
make[1]: *** [Makefile:374: adlist.o] Error 1
make[1]: Leaving directory &#39;/home/xuliang/developer/env/redis-stable/src&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以尝试在编译的时候添加一个参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make MALLOC=libc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h4><p>编译完成之后在src目录下会生成一下文件</p><table><thead><tr><th>文件名</th><th>描述</th><th>备注</th></tr></thead><tbody><tr><td>redis-server</td><td>Redis服务端</td><td></td></tr><tr><td>redis-sentinel</td><td>Redis Sentinel</td><td>redis-server的软连接</td></tr><tr><td>redis-cli</td><td>Redis命令行工具</td><td></td></tr><tr><td>redis-check-rdb</td><td>Redis RDB检查工具</td><td></td></tr><tr><td>redis-check-aof</td><td>Redis Append Only File 检查工具</td><td></td></tr><tr><td>redis-benchmark</td><td>Redis 基准/性能测试工具</td><td></td></tr></tbody></table><h3 id="_1-2-五种基础的数据类型" tabindex="-1"><a class="header-anchor" href="#_1-2-五种基础的数据类型" aria-hidden="true">#</a> 1.2 五种基础的数据类型</h3><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h4><h4 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h4><h4 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h4><h4 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> Hash</h4><h4 id="zset" tabindex="-1"><a class="header-anchor" href="#zset" aria-hidden="true">#</a> ZSet</h4><h3 id="_1-3-容器型数据结构的通用规则" tabindex="-1"><a class="header-anchor" href="#_1-3-容器型数据结构的通用规则" aria-hidden="true">#</a> 1.3 容器型数据结构的通用规则</h3><ul><li><p>create if not exists</p></li><li><p>drop if not exists</p></li></ul><h3 id="_1-4-过期时间" tabindex="-1"><a class="header-anchor" href="#_1-4-过期时间" aria-hidden="true">#</a> 1.4 过期时间</h3><p>Redis中所有</p><hr>`,25),s=[t];function n(l,c){return d(),a("div",null,s)}const o=e(r,[["render",n],["__file","redis-base.html.vue"]]);export{o as default};
