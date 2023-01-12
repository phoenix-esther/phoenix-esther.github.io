import{_ as n,V as a,W as s,a0 as e}from"./framework-5dde3bca.js";const i="/assets/image-20221119151813753-21212176.png",t="/assets/image-20221119151903129-bdaaa320.png",l="/assets/30591c6bbf4e4ecd85f1c0a768984ac2noop.image_iz_58558_from_article-bf394658.jpeg",c="/assets/63651-20170904202237913-177051853-eb07ca95.png",p="/assets/63651-20170905201017069-171460014-81e851b4.png",o="/assets/63651-20170906230652788-1835188684-ac70a97a.png",r="/assets/7d2c1caae67045d5bd1ca1a9a96fc8a3-590cfd02.png",d="/assets/image-20221119164524042-f98b11c7.png",u="/assets/image-20221119164711595-1f6d36cf.png",m="/assets/image-20221119163838224-8497bb50.png",v="/assets/image-20221119164113788-16c250cf.png",b="/assets/image-20221119164245236-1930e58e.png",h="/assets/image-20221119165132928-b32cb2dc.png",g="/assets/image-20221119165206974-a1d9b2aa.png",k="/assets/image-20221119163641293-199ecf6d.png",f="/assets/image-20221119165338182-8ae722d0.png",_="/assets/image-20221119165718813-49c02176.png",x="/assets/image-20221119165802333-28c9fe9a.png",$="/assets/5aad146f8efe4b099f1b5218260bf188noop.image_iz_58558_from_article-8bb945c2.jpeg",y="/assets/b613c1cb00b145c0bc79b2a7704e04a1noop.image_iz_58558_from_article-d1879bd5.png",G="/assets/aeac95b2628246229b84ece93614a9c7noop.image_iz_58558_from_article-62c94bc4.png",q={},D=e('<h1 id="git-使用" tabindex="-1"><a class="header-anchor" href="#git-使用" aria-hidden="true">#</a> Git 使用</h1><h2 id="一、-版本控制工具" tabindex="-1"><a class="header-anchor" href="#一、-版本控制工具" aria-hidden="true">#</a> 一、 版本控制工具</h2><h3 id="_1-1-什么是版本控制系统" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是版本控制系统" aria-hidden="true">#</a> 1.1. 什么是版本控制系统？</h3><p>版本控制系统（Version Control System）:是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。版本控制系统不仅可以应用于软件源代码的文本文件，而且可以对任何类型的文件进行版本控制。</p><p>常见的版本控制系统有：cvs、svn、git</p><h3 id="_1-2-为什么要有版本控制系统" tabindex="-1"><a class="header-anchor" href="#_1-2-为什么要有版本控制系统" aria-hidden="true">#</a> 1.2. 为什么要有版本控制系统?</h3><ol><li>在开发过程中，经常需要对一个文件进行修改甚至删除，但是我们又希望能够保存这个文件的历史记录，如果通过备份，那么管理起来会非常的复杂。</li><li>在多人开发时，如果需要多人合作开发一个页面，那么修改以及合并也会非常的棘手。容易出现冲突。</li></ol><h3 id="_1-3-版本控制系统分类" tabindex="-1"><a class="header-anchor" href="#_1-3-版本控制系统分类" aria-hidden="true">#</a> 1.3. 版本控制系统分类</h3><p>关于版本控制</p><p><strong>本地版本控制系统</strong></p><p>本地版本控制系统就是在一台机器上，记录版本的不同变化，保证内容不会丢失</p><p>缺点：如果多人开发，每个人都在不同的系统和电脑上开发，没办法协同工作。</p><p><img src="'+i+'" alt="image-20221119151813753"></p><p><strong>集中式版本控制系統</strong></p><p>svn/cvs都是集中式的版本控制系统</p><ol><li>需要一个中央服务器来管理代码的的版本和备份</li><li>所有的用户电脑都是从中央服务器获取代码或者是将本地的代码提交到中央服务器</li><li>依赖与网络环境，如果连不上中央服务器，就无法提交和获取代码。</li><li>如果中央服务器宕机，所有人都无法工作。</li></ol><p><img src="'+t+'" alt="image-20221119151903129"></p><p><strong>分布式版本控制系统</strong></p><p>git是分布式的版本控制系统。</p><ol><li>需要一台服务器作为代码仓库</li><li>每个用户电脑都是一个服务器（代码仓库），并且和代码仓库是镜像的，用户修改和获取代码都是提交到自己的服务器当中。</li><li>不需要网络就可以进行工作。</li><li>当连接网络时，用户可以选择将自己的服务器与代码仓库进行同步。</li></ol><p><img src="'+l+'" alt="img"></p><h3 id="_1-4-版本控制中的常见术语" tabindex="-1"><a class="header-anchor" href="#_1-4-版本控制中的常见术语" aria-hidden="true">#</a> 1.4 版本控制中的常见术语</h3><h4 id="_1-4-1-仓库-repository" tabindex="-1"><a class="header-anchor" href="#_1-4-1-仓库-repository" aria-hidden="true">#</a> 1.4.1 仓库（Repository）</h4><p>受版本控制的所有文件修订历史的共享数据库</p><h4 id="_1-4-2-工作空间-workspace" tabindex="-1"><a class="header-anchor" href="#_1-4-2-工作空间-workspace" aria-hidden="true">#</a> 1.4.2 工作空间（Workspace)</h4><p>本地硬盘或Unix 用户帐户上编辑的文件副本</p><h4 id="_1-4-3-工作树-区-working-tree" tabindex="-1"><a class="header-anchor" href="#_1-4-3-工作树-区-working-tree" aria-hidden="true">#</a> 1.4.3 工作树/区（Working tree）</h4><p>工作区中包含了仓库的工作文件。您可以修改的内容和提交更改作为新的提交到仓库。</p><h4 id="_1-4-4-暂存区-staging-area" tabindex="-1"><a class="header-anchor" href="#_1-4-4-暂存区-staging-area" aria-hidden="true">#</a> 1.4.4 暂存区（Staging area）</h4><p>暂存区是工作区用来提交更改（commit）前可以暂存工作区的变化。</p><p><img src="'+c+`" alt="img"></p><h4 id="_1-4-5-索引-index" tabindex="-1"><a class="header-anchor" href="#_1-4-5-索引-index" aria-hidden="true">#</a> 1.4.5 索引（Index）</h4><p>索引是暂存区的另一种术语。</p><h4 id="_1-4-6-签入-checkin" tabindex="-1"><a class="header-anchor" href="#_1-4-6-签入-checkin" aria-hidden="true">#</a> 1.4.6 签入（Checkin）</h4><p>将新版本复制回仓库</p><h4 id="_1-4-7-签出-checkout" tabindex="-1"><a class="header-anchor" href="#_1-4-7-签出-checkout" aria-hidden="true">#</a> 1.4.7 签出（Checkout）</h4><p>从仓库中将文件的最新修订版本复制到工作空间</p><h4 id="_1-4-8-提交-commit" tabindex="-1"><a class="header-anchor" href="#_1-4-8-提交-commit" aria-hidden="true">#</a> 1.4.8 提交（Commit）</h4><p>对各自文件的工作副本做了更改，并将这些更改提交到仓库</p><h4 id="_1-4-9-冲突-conflict" tabindex="-1"><a class="header-anchor" href="#_1-4-9-冲突-conflict" aria-hidden="true">#</a> 1.4.9 冲突（Conflict）</h4><p>多人对同一文件的工作副本进行更改，并将这些更改提交到仓库</p><h4 id="_1-4-10-合并-merge" tabindex="-1"><a class="header-anchor" href="#_1-4-10-合并-merge" aria-hidden="true">#</a> 1.4.10 合并（Merge）</h4><p>将某分支上的更改联接到此主干或同为主干的另一个分支</p><h4 id="_1-4-11-分支-branch" tabindex="-1"><a class="header-anchor" href="#_1-4-11-分支-branch" aria-hidden="true">#</a> 1.4.11 分支（Branch）</h4><p>从主线上分离开的副本，默认分支叫master</p><h4 id="_1-4-12-锁-lock" tabindex="-1"><a class="header-anchor" href="#_1-4-12-锁-lock" aria-hidden="true">#</a> 1.4.12 锁（Lock）</h4><p>获得修改文件的专有权限。</p><h4 id="_1-4-13-头-head" tabindex="-1"><a class="header-anchor" href="#_1-4-13-头-head" aria-hidden="true">#</a> 1.4.13 头（HEAD）</h4><p>头是一个象征性的参考，最常用以指向当前选择的分支。</p><h4 id="_1-4-14-修订-revision" tabindex="-1"><a class="header-anchor" href="#_1-4-14-修订-revision" aria-hidden="true">#</a> 1.4.14 修订（Revision）</h4><p>表示代码的一个版本状态。Git通过用SHA1 hash算法表示的ID来标识不同的版本。</p><h4 id="_1-4-15-标记-tags" tabindex="-1"><a class="header-anchor" href="#_1-4-15-标记-tags" aria-hidden="true">#</a> 1.4.15 标记（Tags）</h4><p>标记指的是某个分支某个特定时间点的状态。通过标记，可以很方便的切换到标记时的状态。</p><h2 id="二、-git" tabindex="-1"><a class="header-anchor" href="#二、-git" aria-hidden="true">#</a> 二、 Git</h2><h3 id="_2-1-git介绍" tabindex="-1"><a class="header-anchor" href="#_2-1-git介绍" aria-hidden="true">#</a> 2.1. Git介绍</h3><blockquote><p>Git是一款免费、开源的<strong>分布式版本控制系统</strong> ，用于敏捷高效地处理任何或小或大的项目。</p></blockquote><p>Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</p><h3 id="_2-2-git-基本使用" tabindex="-1"><a class="header-anchor" href="#_2-2-git-基本使用" aria-hidden="true">#</a> 2.2 Git 基本使用</h3><ol><li>初始化git仓库git init</li><li>查看当前git仓库的状态git status</li><li>将文件添加到git的暂存区git add 文件名</li><li>将文件由暂存区提交到仓库区git commit -m &#39;提交说明&#39;</li><li>查看提交日志git log</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化git仓库，会在当前目录生成一个隐藏文件夹 .git  不要去修改这个文件夹下的任意东西。</span>
<span class="token function">git</span> init

<span class="token comment"># 查看git的状态 ,如果此时新建一个文件，那么这个文件是没有被追踪的，说白了git还没有管理这个新建的文件</span>
<span class="token function">git</span> status 

<span class="token comment"># 让git管理这个新建的文件</span>
<span class="token function">git</span> <span class="token function">add</span> index.html

<span class="token comment"># 让文件由暂存区提交到仓库区。此时文件才真正的被git管理了。</span>
<span class="token comment"># 如果提交日志乱码，右键--&gt;options--&gt;Text--&gt;将编码改成utf-8</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;第一次提交&#39;</span>

<span class="token comment"># 查看提交日志</span>
<span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-git配置文件" tabindex="-1"><a class="header-anchor" href="#_2-3-git配置文件" aria-hidden="true">#</a> 2.3 Git配置文件</h3><h4 id="_2-3-1-查看当前git配置" tabindex="-1"><a class="header-anchor" href="#_2-3-1-查看当前git配置" aria-hidden="true">#</a> 2.3.1 查看当前Git配置</h4><p>使用git config -l 可以查看现在的git环境详细配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> config <span class="token parameter variable">-l</span>
<span class="token assign-left variable">diff.astextplain.textconv</span><span class="token operator">=</span>astextplain
<span class="token assign-left variable">filter.lfs.clean</span><span class="token operator">=</span>git-lfs clean -- %f
<span class="token assign-left variable">filter.lfs.smudge</span><span class="token operator">=</span>git-lfs smudge -- %f
<span class="token assign-left variable">filter.lfs.process</span><span class="token operator">=</span>git-lfs filter-process
<span class="token assign-left variable">filter.lfs.required</span><span class="token operator">=</span>true
<span class="token assign-left variable">http.sslbackend</span><span class="token operator">=</span>openssl
<span class="token assign-left variable">http.sslcainfo</span><span class="token operator">=</span>C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
<span class="token assign-left variable">core.autocrlf</span><span class="token operator">=</span>true
<span class="token assign-left variable">core.fscache</span><span class="token operator">=</span>true
<span class="token assign-left variable">core.symlinks</span><span class="token operator">=</span>false
<span class="token assign-left variable">pull.rebase</span><span class="token operator">=</span>false
<span class="token assign-left variable">credential.helper</span><span class="token operator">=</span>manager-core
credential.https://dev.azure.com.usehttppath<span class="token operator">=</span>true
<span class="token assign-left variable">init.defaultbranch</span><span class="token operator">=</span>master
<span class="token assign-left variable">filter.lfs.required</span><span class="token operator">=</span>true
<span class="token assign-left variable">filter.lfs.clean</span><span class="token operator">=</span>git-lfs clean -- %f
<span class="token assign-left variable">filter.lfs.smudge</span><span class="token operator">=</span>git-lfs smudge -- %f
<span class="token assign-left variable">filter.lfs.process</span><span class="token operator">=</span>git-lfs filter-process
<span class="token assign-left variable">user.name</span><span class="token operator">=</span>xuliang
<span class="token assign-left variable">user.email</span><span class="token operator">=</span><span class="token number">895252461</span>@qq.com
<span class="token assign-left variable">safe.directory</span><span class="token operator">=</span>D:/developer/github/spring-framework
<span class="token assign-left variable">safe.directory</span><span class="token operator">=</span>D:/developer/gitee/spring-learn

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Git Config的级别</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看系统config</span>
<span class="token function">git</span> config <span class="token parameter variable">--system</span> <span class="token parameter variable">--list</span>
　　
<span class="token comment">#查看当前用户（global）配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span>  <span class="token parameter variable">--list</span>
 
<span class="token comment">#查看当前仓库配置信息</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span>  <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-2-git-配置文件的分类" tabindex="-1"><a class="header-anchor" href="#_2-3-2-git-配置文件的分类" aria-hidden="true">#</a> 2.3.2 Git 配置文件的分类</h4><p>在Windows系统中，Git在$HOME目录中查找.gitconfig文件</p><p><strong>Git的相关配置文件有三个：</strong></p><ul><li><p>path/to/git/etc/gitconfig</p><p>包含了适用于系统所有用户和所有项目的值。--system 系统级</p></li><li><p>~/.gitconfig</p><p>只适用于当前登录用户的配置。--global 全局</p></li><li><p>位于git项目目录中的.git/config</p><p>适用于特定git项目的配置。--local当前项目</p></li></ul><p>注意：对于同一配置项，三个配置文件的优先级是1&lt;2&lt;3</p><p>这里可以直接编辑配置文件，通过命令设置后会响应到这里。</p><h4 id="_2-3-3-添加或删除配置项" tabindex="-1"><a class="header-anchor" href="#_2-3-3-添加或删除配置项" aria-hidden="true">#</a> 2.3.3 添加或删除配置项</h4><p>添加配置项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token punctuation">[</span>--local<span class="token operator">|</span>--global<span class="token operator">|</span>--system<span class="token punctuation">]</span>  section.key value
<span class="token comment"># 默认为--local</span>
section.key <span class="token comment">#区域下的键</span>
value <span class="token comment">#对应的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除配置项</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token punctuation">[</span>--local<span class="token operator">|</span>--global<span class="token operator">|</span>--system<span class="token punctuation">]</span> <span class="token parameter variable">--unset</span> section.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-3-4-设置用户名与邮箱" tabindex="-1"><a class="header-anchor" href="#_2-3-4-设置用户名与邮箱" aria-hidden="true">#</a> 2.3.4 设置用户名与邮箱</h4><p>当你安装Git后首先要做的事情是设置你的用户名称和e-mail地址。这是非常重要的，因为每次Git提交都会使用该信息。它被永远的嵌入到了你的提交中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># git config  user.name 你的目标用户名</span>
<span class="token comment"># git config  user.email 你的目标邮箱名</span>
<span class="token comment"># 这种配置方式只有在当前仓库生效</span>
<span class="token function">git</span> config user.name shuaige
<span class="token function">git</span> config user.email <span class="token number">669104343</span>@qq.com

<span class="token comment"># 可以使用--global参数，配置全局的用户名和邮箱，这样别的git仓库就不需要重新配置了。</span>
<span class="token comment"># 如果同时配置了局部的和全局的，那么局部的用户名和邮箱将会生效。</span>
<span class="token function">git</span> config  <span class="token parameter variable">--global</span> user.name shuaige
<span class="token function">git</span> config  <span class="token parameter variable">--global</span> user.email <span class="token number">669104343</span>@qq.com

<span class="token comment"># 查看配置信息</span>
<span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-git的工作原理" tabindex="-1"><a class="header-anchor" href="#_2-4-git的工作原理" aria-hidden="true">#</a> 2.4 git的工作原理</h3><h4 id="_2-4-1-工作区域" tabindex="-1"><a class="header-anchor" href="#_2-4-1-工作区域" aria-hidden="true">#</a> 2.4.1 工作区域</h4><p>Git本地有三个工作区域：工作目录（Working Directory）、暂存区(Stage/Index)、资源库(Repository或Git Directory)。如果在加上远程的git仓库(Remote Directory)就可以分为四个工作区域。文件在这四个区域之间的转换关系如下：</p><p><img src="`+p+'" alt="img"></p><ul><li>Workspace：工作区，就是你平时存放项目代码的地方</li><li>Index / Stage：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息</li><li>Repository：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本</li><li>Remote：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换</li></ul><p>本地的三个区域确切的说应该是git仓库中HEAD指向的版本</p><p><img src="'+o+'" alt="img"></p><ul><li>Directory：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。</li><li>WorkSpace：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间。</li><li>.git：存放Git管理信息的目录，初始化仓库的时候自动创建。</li><li>Index/Stage：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。</li><li>Local Repo：本地仓库，一个存放在本地的版本库；HEAD会只是当前的开发分支（branch）。</li><li>Stash：隐藏，是一个工作状态保存栈，用于保存/恢复WorkSpace中的临时状态。</li></ul><h4 id="_2-4-2-git文件状态" tabindex="-1"><a class="header-anchor" href="#_2-4-2-git文件状态" aria-hidden="true">#</a> 2.4.2 Git文件状态</h4><p>Git工作区中的文件状态分为一下几种：</p><ul><li>Untracked 未跟踪，工作区中没有加入过暂存区的文件，不参与版本控制；</li><li>Unmodified 未修改，加入版本控制，但和版本库中文件快照相同；</li><li>Modified 已修改，加入版本控制，而且和上次加入版本库时的快照不同；</li><li>Staged 已暂存，下一步可以提交到本地仓库（版本库）</li></ul><p><img src="'+r+`" alt="在这里插入图片描述"></p><p>git status命令可以用来查看工作区文件当前的状态：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看特定文件的状态</span>
<span class="token function">git</span> status <span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment">#查看所有文件状态</span>
<span class="token function">git</span> status

<span class="token comment">#精简的方式显示文件状态</span>
<span class="token function">git</span> status <span class="token parameter variable">-s</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-git命令详解" tabindex="-1"><a class="header-anchor" href="#_2-5-git命令详解" aria-hidden="true">#</a> 2.5 git命令详解</h3><h4 id="_2-5-1-git-add-重点" tabindex="-1"><a class="header-anchor" href="#_2-5-1-git-add-重点" aria-hidden="true">#</a> 2.5.1 git add(重点)</h4><ul><li><p>作用：将文件由 工作区 添加到 暂存区，暂存文件</p></li><li><p>命令：</p></li><li><p>git add 文件名</p></li><li><ul><li>例如： git add index.html</li></ul></li><li><p>git add --all 或者 git add -A 或者git add .（简写） 添加所有文件</p></li><li><p>git add a.txt b.txt 同时添加两个文件</p></li><li><p>git add *.js 添加当前目录下的所有js文件</p></li></ul><h4 id="_2-5-2-git-checkout-文件名" tabindex="-1"><a class="header-anchor" href="#_2-5-2-git-checkout-文件名" aria-hidden="true">#</a> 2.5.2 git checkout 文件名</h4><p>checkout命令用于从历史提交（或者暂存区域）中拷贝文件到工作目录，也可用于切换分支。</p><p>当给定某个文件名（或者打开-p选项，或者文件名和-p选项同时打开）时，git会从指定的提交中拷贝文件到暂存区域和工作目录。比如，git checkout HEAD~ foo.c会将提交节点HEAD~(即当前提交节点的父节点)中的foo.c复制到工作目录并且加到暂存区域中。（如果命令中没有指定提交节点，则会从暂存区域中拷贝内容。）注意当前分支不会发生变化。</p><p><img src="`+d+'" alt="image-20221119164524042"></p><p>当不指定文件名，而是给出一个（本地）分支时，那么HEAD标识会移动到那个分支（也就是说，我们“切换”到那个分支了），然后暂存区域和工作目录中的内容会和HEAD对应的提交节点一致。新提交节点（下图中的a47c3）中的所有文件都会被复制（到暂存区域和工作目录中）；只存在于老的提交节点（ed489）中的文件会被删除；不属于上述两者的文件会被忽略，不受影响。</p><p><img src="'+u+'" alt="image-20221119164711595"></p><p>如果既没有指定文件名，也没有指定分支名，而是一个标签、远程分支、SHA-1值或者是像main~3类似的东西，就得到一个匿名分支，称作detached HEAD（被分离的HEAD标识）。这样可以很方便地在历史版本之间互相切换。</p><h4 id="_2-5-3-git-commit-重点" tabindex="-1"><a class="header-anchor" href="#_2-5-3-git-commit-重点" aria-hidden="true">#</a> 2.5.3 git commit（重点）</h4><p>提交时，git用暂存区域的文件创建一个新的提交，并把此时的节点设为父节点。然后把当前分支指向新的提交节点。下图中，当前分支是main。在运行命令之前，main指向ed489，提交后，main指向新的节点f0cec并以ed489作为父节点。</p><p><img src="'+m+'" alt="image-20221119163838224"></p><p>即便当前分支是某次提交的祖父节点，git会同样操作。下图中，在main分支的祖父节点stable分支进行一次提交，生成了1800b。这样，stable分支就不再是main分支的祖父节点。此时，<strong>合并</strong> (或者 <strong>衍合</strong>) 是必须的。</p><p><img src="'+v+'" alt="image-20221119164113788"></p><p>如果想更改一次提交，使用 git commit --amend。git会使用与当前提交相同的父节点进行一次新提交，旧的提交会被取消。</p><p><img src="'+b+'" alt="image-20221119164245236"></p><p>另一个例子是分离HEAD提交。</p><h4 id="_2-5-4-git-status" tabindex="-1"><a class="header-anchor" href="#_2-5-4-git-status" aria-hidden="true">#</a> 2.5.4 git status</h4><ul><li>作用：查看文件的状态</li><li>命令：git status</li><li>命令：git stauts -s 简化日志输出格式</li></ul><h4 id="_2-5-5-git-log" tabindex="-1"><a class="header-anchor" href="#_2-5-5-git-log" aria-hidden="true">#</a> 2.5.5 git log</h4><ul><li>作用：查看提交日志</li><li>git log 只能查看当前head以及以前的日志</li><li>git log --oneline 简洁的日志信息</li><li>git reflog 查看所有的提交变更日志</li></ul><h4 id="_2-5-6-git-reset" tabindex="-1"><a class="header-anchor" href="#_2-5-6-git-reset" aria-hidden="true">#</a> 2.5.6 git reset</h4><p>reset命令把当前分支指向另一个位置，并且有选择的变动工作目录和索引。也用来在从历史仓库中复制文件到索引，而不动工作目录。如果不给选项，那么当前分支指向到那个提交。如果用--hard选项，那么工作目录也更新，如果用--soft选项，那么都不变。</p><p><img src="'+h+'" alt="image-20221119165132928"></p><p>如果没有给出提交点的版本号，那么默认用HEAD。这样，分支指向不变，但是索引会回滚到最后一次提交，如果用--hard选项，工作目录也同样。</p><p><img src="'+g+'" alt="image-20221119165206974"></p><h4 id="_2-5-7-git-diff" tabindex="-1"><a class="header-anchor" href="#_2-5-7-git-diff" aria-hidden="true">#</a> 2.5.7 git diff</h4><p>有许多种方法查看两次提交之间的变动。下面是一些示例。</p><p><img src="'+k+'" alt="image-20221119163641293"></p><h4 id="_2-5-8-git-cherry-pick" tabindex="-1"><a class="header-anchor" href="#_2-5-8-git-cherry-pick" aria-hidden="true">#</a> 2.5.8 git cherry-pick</h4><p>cherry-pick命令&quot;复制&quot;一个提交节点并在当前分支做一次完全一样的新提交。</p><p><img src="'+f+'" alt="image-20221119165338182"></p><h4 id="_2-5-9-git-rebase" tabindex="-1"><a class="header-anchor" href="#_2-5-9-git-rebase" aria-hidden="true">#</a> 2.5.9 git rebase</h4><p>衍合是合并命令的另一种选择。合并把两个父分支合并进行一次提交，提交历史不是线性的。衍合在当前分支上重演另一个分支的历史，提交历史是线性的。本质上，这是线性化的自动的 cherry-pick</p><p><img src="'+_+'" alt="image-20221119165718813"></p><p>上面的命令都在topic分支中进行，而不是main分支，在main分支上重演，并且把分支指向新的节点。注意旧提交没有被引用，将被回收。</p><p>要限制回滚范围，使用--onto选项。下面的命令在main分支上重演当前分支从169a6以来的最近几个提交，即2c33a。</p><p><img src="'+x+`" alt="image-20221119165802333"></p><h4 id="_2-5-10-git-merge" tabindex="-1"><a class="header-anchor" href="#_2-5-10-git-merge" aria-hidden="true">#</a> 2.5.10 git merge</h4><h3 id="_2-6-git忽视文件" tabindex="-1"><a class="header-anchor" href="#_2-6-git忽视文件" aria-hidden="true">#</a> 2.6 git忽视文件</h3><blockquote><p>在仓库中，有些文件是不想被git管理的，比如数据的配置密码、写代码的一些思路等。git可以通过配置从而达到忽视掉一些文件，这样这些文件就可以不用提交了。</p></blockquote><ul><li>在仓库的根目录创建一个.gitignore的文件，文件名是固定的。</li><li>将不需要被git管理的文件路径添加到.gitignore中</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 忽视idea.txt文件
idea.txt

# 忽视.gitignore文件
.gitignore

# 忽视css下的index.js文件
css/index.js

# 忽视css下的所有的js文件
css/*.js

# 忽视css下的所有文件
css/*.*
# 忽视css文件夹
css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、-git分支操作" tabindex="-1"><a class="header-anchor" href="#三、-git分支操作" aria-hidden="true">#</a> 三、 git分支操作</h2><p>分支就是科幻电影里面的平行宇宙，当你正在电脑前努力学习Git的时候，另一个你正在另一个平行宇宙里努力学习SVN。</p><p>如果两个平行宇宙互不干扰，那对现在的你也没啥影响。不过，在某个时间点，两个平行宇宙合并了，结果，你既学会了Git又学会了SVN！</p><p><img src="`+$+'" alt="img"></p><h3 id="_3-1-为什么要有分支" tabindex="-1"><a class="header-anchor" href="#_3-1-为什么要有分支" aria-hidden="true">#</a> 3.1. 为什么要有分支？</h3><ul><li>如果你要开发一个新的功能，需要2周时间，第一周你只能写50%代码，如果此时立即提交，代码没写完，不完整的代码会影响到别人无法工作。如果等代码写完再提交，代码很容易丢失，风险很大。</li><li>有了分支，你就可以创建一个属于自己的分支，别人看不到，也不影响别人，你在自己的分支上工作，提交到自己的分支上，等到功能开发完毕，一次性的合并到原来的分支。这样既安全，又不影响他人工作。</li><li>在工作过程中，经常会碰到<strong>多任务并行开发</strong> 的情况，使用分支就能很好的避免任务之间的影响。</li><li>其他版本工具比如svn，cvs中也有分支这个概念，但是这些工具中的分支操作非常的慢，形同摆设。</li></ul><h3 id="_3-2-分支操作的命令" tabindex="-1"><a class="header-anchor" href="#_3-2-分支操作的命令" aria-hidden="true">#</a> 3.2. 分支操作的命令</h3><h4 id="_3-2-1-创建分支" tabindex="-1"><a class="header-anchor" href="#_3-2-1-创建分支" aria-hidden="true">#</a> 3.2.1. 创建分支</h4><ul><li>git branch 分支名称创建分支，分支中的代码，在创建时与当前分支的内容完全相同。</li><li>git在第一次提交时，就有了一个叫master的主分支。</li></ul><h4 id="_3-2-2-查看分支" tabindex="-1"><a class="header-anchor" href="#_3-2-2-查看分支" aria-hidden="true">#</a> 3.2.2. 查看分支</h4><ul><li>git branch可以查看所有的分支，</li><li>在当前分支的前面会有一个*</li></ul><h4 id="_3-2-3-切换分支" tabindex="-1"><a class="header-anchor" href="#_3-2-3-切换分支" aria-hidden="true">#</a> 3.2.3. 切换分支</h4><ul><li>git checkout 分支名称切换分支</li><li>在当前分支的任何操作，都不会影响到其他的分支，除非进行了分支合并。</li><li>切换分支之前，<strong>必须保证代码已经提交了</strong></li></ul><h4 id="_3-2-4-创建并切换分支" tabindex="-1"><a class="header-anchor" href="#_3-2-4-创建并切换分支" aria-hidden="true">#</a> 3.2.4. 创建并切换分支</h4><ul><li>git checkout -b 分支名称 创建并切换分支</li></ul><h4 id="_3-2-5-删除分支" tabindex="-1"><a class="header-anchor" href="#_3-2-5-删除分支" aria-hidden="true">#</a> 3.2.5. 删除分支</h4><ul><li>git branch -d 分支名称 可以删除分支</li><li>注意：不能在当前分支删除当前分支，需要切换到其他分支才能删除。</li><li>注意：master分支是可以删除的，但是不推荐那么做。</li></ul><h4 id="_3-2-6-合并分支" tabindex="-1"><a class="header-anchor" href="#_3-2-6-合并分支" aria-hidden="true">#</a> 3.2.6. 合并分支</h4><ul><li>git merge 分支名称 将其他分支的内容合并到当前分支。</li><li>在master分支中执行git merge dev 将dev分支中的代码合并到master分支</li></ul><h3 id="_3-3-git分支的工作原理" tabindex="-1"><a class="header-anchor" href="#_3-3-git分支的工作原理" aria-hidden="true">#</a> 3.3. git分支的工作原理</h3><p><img src="'+y+'" alt="img"></p><h3 id="_3-4-git合并冲突" tabindex="-1"><a class="header-anchor" href="#_3-4-git合并冲突" aria-hidden="true">#</a> 3.4. git合并冲突</h3><ul><li>对于同一个文件，如果有多个分支需要合并时，容易出现冲突。</li><li>合并分支时，如果出现冲突，只能手动处理，再次提交，一般的作法，把自己的代码放到冲突代码的后面即可。</li></ul><h2 id="四、远程仓库" tabindex="-1"><a class="header-anchor" href="#四、远程仓库" aria-hidden="true">#</a> 四、远程仓库</h2><p>所有的程序员都可以通过远程仓库来进行版本的共享，达到所有人的代码一致的效果。</p><h3 id="_4-1-远程仓库相关的命令" tabindex="-1"><a class="header-anchor" href="#_4-1-远程仓库相关的命令" aria-hidden="true">#</a> 4.1. 远程仓库相关的命令</h3><h4 id="_4-1-1-git-push" tabindex="-1"><a class="header-anchor" href="#_4-1-1-git-push" aria-hidden="true">#</a> 4.1.1. git push</h4><ul><li>作用：将本地代码提交到远程仓库</li><li>git push 仓库地址 master 在代码提交到远程仓库，注意master分支必须写，不能省略</li><li>例子：git push git@github.com:hucongcong/test.git master 如果第一次使用，需要填写github的用户名和密码</li></ul><h4 id="_4-1-2-git-pull" tabindex="-1"><a class="header-anchor" href="#_4-1-2-git-pull" aria-hidden="true">#</a> 4.1.2. git pull</h4><ul><li>作用：将远程的代码下载到本地</li><li>git pull 代码地址 将远程的代码中master分支下载到本地</li><li>通常在push前，需要先pull一次。</li></ul><h4 id="_4-1-3-git-clone" tabindex="-1"><a class="header-anchor" href="#_4-1-3-git-clone" aria-hidden="true">#</a> 4.1.3. git clone</h4><ul><li>作用：克隆远程仓库的代码到本地</li><li>git clone 仓库地址 自定义本地仓库名 将整个仓库克隆到本地</li></ul><h4 id="_4-1-4-git-remote" tabindex="-1"><a class="header-anchor" href="#_4-1-4-git-remote" aria-hidden="true">#</a> 4.1.4. git remote</h4><p>每次push和pull操作都需要带上远程仓库的地址，非常的麻烦，我们可以给仓库地址设置一个别名</p><ul><li><p>git remote add 仓库别名 仓库地址</p></li><li><p>使用仓库别名替代仓库地址。仓库别名相当于一个变量，仓库地址就是对应的值。</p></li><li><ul><li>git remote add hucc git@github.com:hucongcong/test.git 设置了一个hucc的仓库别名，以后push和pull都可以不用仓库地址，而用hucc</li></ul></li><li><p>git remote remove hucc 删除hucc这个仓库别名。</p></li><li><p>git remote 查看所有的仓库别名</p></li><li><p>如果使用了git clone命令从远程仓库获取下来的，那么这个本地仓库会自动添加一个 origin的远程地址，指向的就是克隆的远程地址。</p></li></ul><h2 id="附件-命令大全" tabindex="-1"><a class="header-anchor" href="#附件-命令大全" aria-hidden="true">#</a> 附件：命令大全</h2><p><img src="'+G+`" alt="img"></p><ul><li>Workspace：工作区</li><li>Index / Stage：暂存区</li><li>Repository：仓库区（或本地仓库）</li><li>Remote：远程仓库</li></ul><h3 id="_1、仓库" tabindex="-1"><a class="header-anchor" href="#_1、仓库" aria-hidden="true">#</a> 1、仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在当前目录新建一个Git代码库</span>
$ <span class="token function">git</span> init

<span class="token comment"># 新建一个目录，将其初始化为Git代码库</span>
$ <span class="token function">git</span> init <span class="token punctuation">[</span>project-name<span class="token punctuation">]</span>

<span class="token comment"># 下载一个项目和它的整个代码历史</span>
$ <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、配置" tabindex="-1"><a class="header-anchor" href="#_2、配置" aria-hidden="true">#</a> 2、配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前的Git配置</span>
$ <span class="token function">git</span> config <span class="token parameter variable">--list</span>

<span class="token comment"># 编辑Git配置文件</span>
$ <span class="token function">git</span> config <span class="token parameter variable">-e</span> <span class="token punctuation">[</span>--global<span class="token punctuation">]</span>

<span class="token comment"># 设置提交代码时的用户信息</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.name <span class="token string">&quot;[name]&quot;</span>
$ <span class="token function">git</span> config <span class="token punctuation">[</span>--global<span class="token punctuation">]</span> user.email <span class="token string">&quot;[email address]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、增加-删除文件" tabindex="-1"><a class="header-anchor" href="#_3、增加-删除文件" aria-hidden="true">#</a> 3、增加/删除文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加指定文件到暂存区</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># 添加指定目录到暂存区，包括子目录</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span>

<span class="token comment"># 添加当前目录的所有文件到暂存区</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 添加每个变化前，都会要求确认</span>
<span class="token comment"># 对于同一个文件的多处变化，可以实现分次提交</span>
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-p</span>

<span class="token comment"># 删除工作区文件，并且将这次删除放入暂存区</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.

<span class="token comment"># 停止追踪指定文件，但该文件会保留在工作区</span>
$ <span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 改名文件，并且将这个改名放入暂存区</span>
$ <span class="token function">git</span> <span class="token function">mv</span> <span class="token punctuation">[</span>file-original<span class="token punctuation">]</span> <span class="token punctuation">[</span>file-renamed<span class="token punctuation">]</span>

<span class="token comment"># 从git中彻底删除文件</span>
<span class="token function">git</span> filter-branch <span class="token parameter variable">--force</span> --index-filter <span class="token string">&quot;git rm -rf --cached --ignore-unmatch 路径&quot;</span> --prune-empty --tag-name-filter <span class="token function">cat</span> -- <span class="token parameter variable">--all</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、代码提交" tabindex="-1"><a class="header-anchor" href="#_4、代码提交" aria-hidden="true">#</a> 4、代码提交</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 提交暂存区到仓库区</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交暂存区的指定文件到仓库区</span>
$ <span class="token function">git</span> commit <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>. <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 提交工作区自上次commit之后的变化，直接到仓库区</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-a</span>

<span class="token comment"># 提交时显示所有diff信息</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">-v</span>

<span class="token comment"># 使用一次新的commit，替代上一次提交</span>
<span class="token comment"># 如果代码没有任何新变化，则用来改写上一次commit的提交信息</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token parameter variable">-m</span> <span class="token punctuation">[</span>message<span class="token punctuation">]</span>

<span class="token comment"># 重做上一次commit，并包括指定文件的新变化</span>
$ <span class="token function">git</span> commit <span class="token parameter variable">--amend</span> <span class="token punctuation">[</span>file1<span class="token punctuation">]</span> <span class="token punctuation">[</span>file2<span class="token punctuation">]</span> <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、分支" tabindex="-1"><a class="header-anchor" href="#_5、分支" aria-hidden="true">#</a> 5、分支</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有本地分支</span>
$ <span class="token function">git</span> branch

<span class="token comment"># 列出所有远程分支</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-r</span>

<span class="token comment"># 列出所有本地分支和远程分支</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-a</span>

<span class="token comment"># 新建一个分支，但依然停留在当前分支</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，并切换到该分支</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，指向指定commit</span>
$ <span class="token function">git</span> branch <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个分支，与指定的远程分支建立追踪关系</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">--track</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># 切换到指定分支，并更新工作区</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 切换到上一个分支</span>
$ <span class="token function">git</span> checkout -

<span class="token comment"># 建立追踪关系，在现有分支与指定的远程分支之间</span>
$ <span class="token function">git</span> branch --set-upstream <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>remote-branch<span class="token punctuation">]</span>

<span class="token comment"># 合并指定分支到当前分支</span>
$ <span class="token function">git</span> merge <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 选择一个commit，合并进当前分支</span>
$ <span class="token function">git</span> cherry-pick <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 删除分支</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>

<span class="token comment"># 删除远程分支</span>
$ <span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branch-name<span class="token punctuation">]</span>
$ <span class="token function">git</span> branch <span class="token parameter variable">-dr</span> <span class="token punctuation">[</span>remote/branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、标签" tabindex="-1"><a class="header-anchor" href="#_6、标签" aria-hidden="true">#</a> 6、标签</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有tag</span>
$ <span class="token function">git</span> tag

<span class="token comment"># 新建一个tag在当前commit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 新建一个tag在指定commit</span>
$ <span class="token function">git</span> tag <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 删除本地tag</span>
$ <span class="token function">git</span> tag <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 删除远程tag</span>
$ <span class="token function">git</span> push origin :refs/tags/<span class="token punctuation">[</span>tagName<span class="token punctuation">]</span>

<span class="token comment"># 查看tag信息</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交指定tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>

<span class="token comment"># 提交所有tag</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--tags</span>

<span class="token comment"># 新建一个分支，指向某个tag</span>
$ <span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token punctuation">[</span>tag<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、查看信息" tabindex="-1"><a class="header-anchor" href="#_7、查看信息" aria-hidden="true">#</a> 7、查看信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示有变更的文件</span>
$ <span class="token function">git</span> status

<span class="token comment"># 显示当前分支的版本历史</span>
$ <span class="token function">git</span> log

<span class="token comment"># 显示commit历史，以及每次commit发生变更的文件</span>
$ <span class="token function">git</span> log <span class="token parameter variable">--stat</span>

<span class="token comment"># 搜索提交历史，根据关键词</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-S</span> <span class="token punctuation">[</span>keyword<span class="token punctuation">]</span>

<span class="token comment"># 显示某个commit之后的所有变动，每个commit占据一行</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:%s

<span class="token comment"># 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件</span>
$ <span class="token function">git</span> log <span class="token punctuation">[</span>tag<span class="token punctuation">]</span> HEAD <span class="token parameter variable">--grep</span> feature

<span class="token comment"># 显示某个文件的版本历史，包括文件改名</span>
$ <span class="token function">git</span> log <span class="token parameter variable">--follow</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>
$ <span class="token function">git</span> whatchanged <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示指定文件相关的每一次diff</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示过去5次提交</span>
$ <span class="token function">git</span> log <span class="token parameter variable">-5</span> <span class="token parameter variable">--pretty</span> <span class="token parameter variable">--oneline</span>

<span class="token comment"># 显示所有提交过的用户，按提交次数排序</span>
$ <span class="token function">git</span> shortlog <span class="token parameter variable">-sn</span>

<span class="token comment"># 显示指定文件是什么人在什么时间修改过</span>
$ <span class="token function">git</span> blame <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示暂存区和工作区的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span>

<span class="token comment"># 显示暂存区和上一个commit的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--cached</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 显示工作区与当前分支最新commit之间的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> HEAD

<span class="token comment"># 显示两次提交之间的差异</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token punctuation">[</span>first-branch<span class="token punctuation">]</span><span class="token punctuation">..</span>.<span class="token punctuation">[</span>second-branch<span class="token punctuation">]</span>

<span class="token comment"># 显示今天你写了多少行代码</span>
$ <span class="token function">git</span> <span class="token function">diff</span> <span class="token parameter variable">--shortstat</span> <span class="token string">&quot;@{0 day ago}&quot;</span>

<span class="token comment"># 显示某次提交的元数据和内容变化</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交发生变化的文件</span>
$ <span class="token function">git</span> show --name-only <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 显示某次提交时，某个文件的内容</span>
$ <span class="token function">git</span> show <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>:<span class="token punctuation">[</span>filename<span class="token punctuation">]</span>

<span class="token comment"># 显示当前分支的最近几次提交</span>
$ <span class="token function">git</span> reflog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、远程同步" tabindex="-1"><a class="header-anchor" href="#_8、远程同步" aria-hidden="true">#</a> 8、远程同步</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载远程仓库的所有变动</span>
$ <span class="token function">git</span> fetch <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 显示所有远程仓库</span>
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>

<span class="token comment"># 显示某个远程仓库的信息</span>
$ <span class="token function">git</span> remote show <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>

<span class="token comment"># 增加一个新的远程仓库，并命名</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>

<span class="token comment"># 取回远程仓库的变化，并与本地分支合并</span>
$ <span class="token function">git</span> pull <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 上传本地指定分支到远程仓库</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>

<span class="token comment"># 强行推送当前分支到远程仓库，即使有冲突</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--force</span>

<span class="token comment"># 推送所有分支到远程仓库</span>
$ <span class="token function">git</span> push <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9、撤销" tabindex="-1"><a class="header-anchor" href="#_9、撤销" aria-hidden="true">#</a> 9、撤销</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 恢复暂存区的指定文件到工作区</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复某个commit的指定文件到暂存区和工作区</span>
$ <span class="token function">git</span> checkout <span class="token punctuation">[</span>commit<span class="token punctuation">]</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 恢复暂存区的所有文件到工作区</span>
$ <span class="token function">git</span> checkout <span class="token builtin class-name">.</span>

<span class="token comment"># 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>file<span class="token punctuation">]</span>

<span class="token comment"># 重置暂存区与工作区，与上一次commit保持一致</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span>

<span class="token comment"># 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变</span>
$ <span class="token function">git</span> reset <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 重置当前HEAD为指定commit，但保持暂存区和工作区不变</span>
$ <span class="token function">git</span> reset <span class="token parameter variable">--keep</span> <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 新建一个commit，用来撤销指定commit</span>
<span class="token comment"># 后者的所有变化都将被前者抵消，并且应用到当前分支</span>
$ <span class="token function">git</span> revert <span class="token punctuation">[</span>commit<span class="token punctuation">]</span>

<span class="token comment"># 暂时将未提交的变化移除，稍后再移入</span>
$ <span class="token function">git</span> stash
$ <span class="token function">git</span> stash pop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10、其他" tabindex="-1"><a class="header-anchor" href="#_10、其他" aria-hidden="true">#</a> 10、其他</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 生成一个可供发布的压缩包</span>
$ <span class="token function">git</span> archive

<span class="token comment"># 回收空间</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> .git/refs/original <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> reflog expire <span class="token parameter variable">--expire</span><span class="token operator">=</span>now <span class="token parameter variable">--all</span>
<span class="token function">git</span> gc <span class="token parameter variable">--prune</span><span class="token operator">=</span>now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,196),A=[D];function H(E,w){return a(),s("div",null,A)}const j=n(q,[["render",H],["__file","git.html.vue"]]);export{j as default};
