import{_ as a,V as s,W as d,X as e,Y as n,Z as l,a0 as t,D as o}from"./framework-5dde3bca.js";const r="/assets/image-20220425132347160-c94e7fa1.png",c={},u=e("h1",{id:"gitbook-安装及使用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gitbook-安装及使用","aria-hidden":"true"},"#"),n(" gitbook 安装及使用")],-1),v=e("h3",{id:"gitbook的安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gitbook的安装","aria-hidden":"true"},"#"),n(" gitbook的安装")],-1),p=e("p",null,"首先需要安装Nodejs，这里直接安装v12.22.1版本，其他版本在安装nodejs的过程中有错误，避免入坑",-1),m={href:"https://nodejs.org/zh-cn/download/releases/",target:"_blank",rel:"noopener noreferrer"},b=t(`<blockquote><p>https://nodejs.org/zh-cn/download/releases/</p></blockquote><p>下载后解压缩，配置环境变量即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>λ <span class="token function">node</span> <span class="token parameter variable">-v</span>
v12.22.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>nodejs需要配置国内的源，要不然安装包的时候真的是费劲</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org   <span class="token comment">#设置国内源</span>
<span class="token function">npm</span> config get registry <span class="token comment">#查看源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置好源之后，就可以安装gitbook了</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>λ <span class="token function">npm</span> <span class="token function">install</span> gitbook-cli <span class="token parameter variable">-g</span>
C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node-v12.22.1<span class="token punctuation">\\</span>gitbook -<span class="token operator">&gt;</span> C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node-v12.22.1<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>gitbook-cli<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>gitbook.js
+ gitbook-cli@2.3.2
added <span class="token number">578</span> packages from <span class="token number">672</span> contributors <span class="token keyword">in</span> <span class="token number">31</span>.412s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看gitbook的版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>λ gitbook <span class="token parameter variable">-V</span>
CLI version: <span class="token number">2.3</span>.2
GitBook version: <span class="token number">3.2</span>.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gitbook的使用" tabindex="-1"><a class="header-anchor" href="#gitbook的使用" aria-hidden="true">#</a> gitbook的使用</h3><p>首先需要初始化一个目录。在windows下新建一个文件夹，通过命令行cd到该文件夹下，然后执行以下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitbook init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>λ gitbook init
warn: no summary <span class="token function">file</span> <span class="token keyword">in</span> this book
info: create README.md
info: create SUMMARY.md
info: initialization is finished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目录中会自动生成两个文件，其中README.md是说明文件，SUMMARY.md是目录文件。</p><h4 id="编写summary文件" tabindex="-1"><a class="header-anchor" href="#编写summary文件" aria-hidden="true">#</a> 编写SUMMARY文件</h4><p>GitBook使用一个<code>SUMMARY.md</code>文件来定义文档的菜单。</p><p>虽说在官方文档中，它是可选的，但是它相当重要，控制了左边菜单栏的显示内容。</p><p>它通过 Markdown 中的列表语法来表示文件的父子关系。</p><p>紧凑型的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Summary
* [Introduction](README.md)
* [Part I](part1/README.md)
    * [Writing is nice](part1/writing.md)
    * [GitBook is nice](part1/gitbook.md)
* [Part II](part2/README.md)
    * [We love feedback](part2/feedback_please.md)
    * [Better tools for authors](part2/better_tools.md)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分散型的</p><p>也可以通过使用 标题 或者 水平分割线 标志将 GitBook 分为几个不同的部分。</p><p>你看到左侧菜单栏的部分 <code>SUMMARY.md</code>文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Summary

### Part I

* [Part I](part1/README.md)
    * [Writing is nice](part1/README.md#writing)
    * [GitBook is nice](part1/README.md#gitbook)
* [Part II](part2/README.md)
    * [We love feedback](part2/README.md#feedback)
    * [Better tools for authors](part2/README.md#tools)

### Part II

* [feedback](part2/feedback.md)
* [tools](part2/tools.md)

----

* [Last part](part3/last.md)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写完summary文件之后再次执行命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gitbook init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就会生成相应的文件了。</p><p>如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>λ gitbook init
info: create java/README.md
info: create java/collection.md
info: create java/collection/list.md
info: create java/concurrent.md
info: create spring/README.md
info: create mybatis/README.md
info: create SUMMARY.md
info: initialization is finished
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成静态网页" tabindex="-1"><a class="header-anchor" href="#生成静态网页" aria-hidden="true">#</a> 生成静态网页</h3><p>将会在<code>gitbook_test</code>目录下生成一个<code>_book</code>文件夹，这就是我们的一个静态站点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gitbook build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译完成后，我么可以启动一个服务，来预览我们的笔记</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gitbook serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="生成pdf" tabindex="-1"><a class="header-anchor" href="#生成pdf" aria-hidden="true">#</a> 生成PDF</h3><p>在生成pdf之前需要安装一个软件，从一下连接下载，选择自己合适的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://calibre-ebook.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我安装的版本是5.16.1，目前没有遇到问题</p><p>安装完成后，通过如下命令生成pdf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>λ gitbook pdf ./ ./note.pdf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>λ gitbook pdf ./ ./note.pdf
info: 7 plugins are installed
info: 6 explicitly listed
info: loading plugin &quot;highlight&quot;... OK
info: loading plugin &quot;search&quot;... OK
info: loading plugin &quot;lunr&quot;... OK
info: loading plugin &quot;sharing&quot;... OK
info: loading plugin &quot;fontsettings&quot;... OK
info: loading plugin &quot;theme-default&quot;... OK
info: found 10 pages
info: found 221 asset files
info: &gt;&gt; generation finished with success in 32.9s !
info: &gt;&gt; 1 file(s) generated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装使用过程中出现的错误" tabindex="-1"><a class="header-anchor" href="#安装使用过程中出现的错误" aria-hidden="true">#</a> 安装使用过程中出现的错误</h3><p><img src="`+r+'" alt="image-20220425132347160"></p><p>这个直接把polyfills.js中62行到64行的代码注释掉即可</p>',46);function g(h,k){const i=o("ExternalLinkIcon");return s(),d("div",null,[u,v,p,e("p",null,[e("a",m,[n("nodejs"),l(i)]),n("的所有历史版本可以在这里下载")]),b])}const x=a(c,[["render",g],["__file","gitbook.html.vue"]]);export{x as default};
