import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as p,a as n,b as s,d as e,e as l}from"./app-9aa256ea.js";const r="/assets/image-20221030125007909-101e42c1.png",u="/assets/image-20221030125250140-17bb5f84.png",d="/assets/image-20221030125548727-e0b1d719.png",o="/assets/image-20221101130132410-7c72a740.png",v="/assets/image-20221101130548178-37101ef1.png",b="/assets/image-20221101131201855-35608521.png",m="/assets/image-20221101131407013-53a29412.png",k="/assets/image-20221102084714149-6127ea5e.png",h="/assets/image-20221102085341241-e58e7445.png",g="/assets/image-20221102085956655-a50f9b4c.png",y="/assets/image-20221114123402861-089a5d46.png",f="/assets/image-20221114124210197-9b00aaae.png",_={},x=n("h1",{id:"gitlab-自动发布流程构建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitlab-自动发布流程构建","aria-hidden":"true"},"#"),s(" Gitlab 自动发布流程构建")],-1),w=n("h2",{id:"一-ci-cd是什么",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-ci-cd是什么","aria-hidden":"true"},"#"),s(" 一：CI/CD是什么？")],-1),q={href:"https://cloud.tencent.com/product/coding?from=10680",target:"_blank",rel:"noopener noreferrer"},L={href:"https://cloud.tencent.com/product/coding-cd?from=10680",target:"_blank",rel:"noopener noreferrer"},R=l(`<ul><li><strong>持续集成</strong>的重点是将各个开发人员的工作集合到一个代码仓库中。通常，每天都要进行几次，主要目的是尽早发现集成错误，使团队更加紧密结合，更好地协作。</li><li><strong>持续交付</strong>的目的是最小化部署或释放过程中固有的摩擦。它的实现通常能够将构建部署的每个步骤自动化，以便任何时刻能够安全地完成代码发布（理想情况下）。</li><li><strong>持续部署</strong>是一种更高程度的自动化，无论何时对代码进行重大更改，都会自动进行构建/部署。</li></ul><h3 id="持续集成的好处是什么" tabindex="-1"><a class="header-anchor" href="#持续集成的好处是什么" aria-hidden="true">#</a> 持续集成的好处是什么？</h3><p>持续集成可以使问题尽早暴露，从而也降低了解决问题的难度，正如老马所说，持续集成无法消除bug，但却能大大降低修复的难度和时间。</p><h3 id="持续交付的好处是什么" tabindex="-1"><a class="header-anchor" href="#持续交付的好处是什么" aria-hidden="true">#</a> 持续交付的好处是什么？</h3><p>持续交付的好处在于快速获取用户反馈；适应市场变化和商业策略的变化。开发团队保证每次提交的修改都是可上线的修改，那么决定何时上线，上线哪部分功能则完全由产品业务团队决定。</p><p>虽然持续交付有显著的优点，但也有不成立的时候，比如对于嵌入式系统的开发，往往需要软硬件的配合。</p><h3 id="持续部署的好处是什么" tabindex="-1"><a class="header-anchor" href="#持续部署的好处是什么" aria-hidden="true">#</a> 持续部署的好处是什么？</h3><p>持续部署的目标是通过减少批量工作的大小，并加快团队工作的节奏，帮助开发团队在其开发流程中消除浪费。这使团队能够一直处于一种可持续的平稳流状态， 让团队更容易去创新、试验，并达到可持续的生产率</p><h2 id="二-gitlab的安装" tabindex="-1"><a class="header-anchor" href="#二-gitlab的安装" aria-hidden="true">#</a> 二：GitLab的安装</h2><h2 id="三-gitlab-runner" tabindex="-1"><a class="header-anchor" href="#三-gitlab-runner" aria-hidden="true">#</a> 三：GitLab Runner</h2><h3 id="_3-1-gitlab-runner-简介" tabindex="-1"><a class="header-anchor" href="#_3-1-gitlab-runner-简介" aria-hidden="true">#</a> 3.1 GitLab Runner 简介</h3><ul><li>GitLab Runner 是一个开源项目，用于运行作业并将结果发送会GitLab</li><li>与GitLab结合使用，GitLab CI 是GitLab随附的用于协调作业的开源持续击集成服务</li><li>GitLab Runner 是用Go编写的，可以在Linux、Windows和MacOS操作系统上运行</li><li>容器部署需要使用最新Docker版本，GitLab Runner 需要最小的Docker v1.13.0</li><li>GitLab Runner 版本应与GitLab版本同步。（避免版本不一致导致的差异）</li><li>可以根据需要配置任意数量的Runner</li></ul><h4 id="_3-1-1-gitlab-runner-特点" tabindex="-1"><a class="header-anchor" href="#_3-1-1-gitlab-runner-特点" aria-hidden="true">#</a> 3.1.1 GitLab Runner 特点</h4><ul><li><p>作业运行控制：同时执行多个作业</p></li><li><p>作业运行环境：</p><ul><li><p>在本地、使用Docker容器、使用Docker容器并通过SSH执行作业。</p></li><li><p>使用Docker容器在不同的云和虚拟化管理程序上自动缩放。</p></li><li><p>连接到远程SSH服务器。</p></li></ul></li><li><p>支持Bash,Windows Batch和Windows PowerShell。</p></li><li><p>允许自定义作业运行环境。</p></li><li><p>自动重新加载配置，无需重启。</p></li><li><p>易于安装，可作为Linux,macOS和Windows的服务。</p></li></ul><h4 id="_3-1-2-gitlab-runner的类型与状态" tabindex="-1"><a class="header-anchor" href="#_3-1-2-gitlab-runner的类型与状态" aria-hidden="true">#</a> 3.1.2 GitLab Runner的类型与状态</h4><ul><li>类到 <ul><li>shared共享类型，运行整个平台项目的作业(gitlab)</li><li>group项目组类型，运行特定group下的所有项目的作业(group)</li><li>specific项目类型，运行指定的项目作业(project.)</li></ul></li><li>状态 <ul><li>locked:锁定状态，无法运行项目作业</li><li>paused:.暂停状态，暂时不会接受新的作业</li></ul></li></ul><h3 id="_3-2-gitlab-runner安装" tabindex="-1"><a class="header-anchor" href="#_3-2-gitlab-runner安装" aria-hidden="true">#</a> 3.2 GitLab Runner安装</h3><p>**系统环境：**可以在Linux,mac0S,FreeBSD和Windows.上安装和使用GitLab Runner。</p><p>**部署方式：**二进制文件、rpm/deb软件包、Docker、Kubernetes</p><h4 id="_3-2-1-通过包管理工具安装" tabindex="-1"><a class="header-anchor" href="#_3-2-1-通过包管理工具安装" aria-hidden="true">#</a> 3.2.1 通过包管理工具安装</h4><p>Add GitLab&#39;s official repository:.添加官方仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># For Debian/Ubuntu/Mint</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>

<span class="token comment"># For RHEL/CentoS/Fedora</span>
<span class="token function">curl</span> <span class="token parameter variable">-L</span> https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.rpm.sh <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更新runner</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># For Debian/Ubuntu/Mint</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gitlab-runner

<span class="token comment"># For RHEL/Centos/Fedora</span>
<span class="token function">sudo</span> yum update
<span class="token function">sudo</span> yum <span class="token function">install</span> gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Install the latest version of GitLab Runner:安装最新版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># For Debian/Ubuntu/Mint</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gitlab-runner

<span class="token comment"># For RHEL/CentoS/Fedora</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To install a specific version of GitLab Runner:安装指定版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># for DEB based systems</span>
<span class="token function">apt-cache</span> madison gitlab-runner
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gitlab-runner<span class="token operator">=</span><span class="token number">10.0</span>.0

<span class="token comment"># for RPM based systems</span>
yum list gitlab-runner <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> gitlab-runner-10.0.0-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2-手动deb-rpm包安装" tabindex="-1"><a class="header-anchor" href="#_3-2-2-手动deb-rpm包安装" aria-hidden="true">#</a> 3.2.2 手动deb/rpm包安装</h4><p>下载软件包</p><ol><li>https://gitlab-runner--downloads.s3.amazonaws.com/latest/index.html上找到最新的文件名和选项。</li><li>选择一个版本并下载二进制文件，如文档所述，该文件用于下载任何其他标记的GitLab Runner发行版。</li></ol><p>例如，对于Debian?或Ubuntu:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-LJO</span> https://gitlab-runner-downloads.s3.amazonaws.com/latest/deb/gitlab-runner_<span class="token operator">&lt;</span>arch<span class="token operator">&gt;</span>.deb
dpkg <span class="token parameter variable">-i</span> gitlab-runner_<span class="token operator">&lt;</span>arch<span class="token operator">&gt;</span>.deb
dpkg <span class="token parameter variable">-i</span> gitlab-runner <span class="token operator">&lt;</span>arch<span class="token operator">&gt;</span>.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如，对于CentOS或Red Hat Enterprise Linux:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-LJO</span> https://gitlab-runner-downloads.s3.amazonaws.com/latest/rpm/gitlab-runner <span class="token operator">&lt;</span>arch<span class="token operator">&gt;</span>.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-i</span> gitlab-runner_<span class="token operator">&lt;</span>arch<span class="token operator">&gt;</span>.rpm
<span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span> gitlab-runner_<span class="token operator">&lt;</span>arch<span class="token operator">&gt;</span>.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-3-二进制文件安装" tabindex="-1"><a class="header-anchor" href="#_3-2-3-二进制文件安装" aria-hidden="true">#</a> 3.2.3 二进制文件安装</h4><p>下载指定版本：将上面URL中的latest切换为v12.9。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Linux x86-64</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">--output</span> /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64
<span class="token comment"># Linux x86</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">--output</span> /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-386
<span class="token comment"># Linux arm</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">--output</span> /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-arm
<span class="token comment"># Linux arm64</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">--output</span> /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-arm64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加执行权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建一个gitlab用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">--comment</span> <span class="token string">&#39;GitLab Runner&#39;</span>--create-home gitlab-runner <span class="token parameter variable">--shell</span> /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装并作为服务运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> gitlab-runner <span class="token function">install</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>gitlab-runner --working-directory<span class="token operator">=</span>/home/gitlab-runner
<span class="token function">sudo</span> gitlab-runner start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更新</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 停止服务</span>
<span class="token function">sudo</span> gitlab-runner stop
<span class="token comment"># 下载新版本二进制包</span>
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token parameter variable">--output</span> /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64
<span class="token comment"># 赋予执行权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/gitlab-runner
<span class="token comment"># 启动服务</span>
<span class="token function">sudo</span> gitlab-runner start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-4-mac-os系统下的安装-手动" tabindex="-1"><a class="header-anchor" href="#_3-2-4-mac-os系统下的安装-手动" aria-hidden="true">#</a> 3.2.4 Mac OS系统下的安装 - 手动</h4><p>下载二进制包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">--output</span> /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>授予其执行权限：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将Runner作为服务安装并启动它：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
gitlab-runner <span class="token function">install</span>
gitlab-runner start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-5-mac-os-系统下的安装-自动" tabindex="-1"><a class="header-anchor" href="#_3-2-5-mac-os-系统下的安装-自动" aria-hidden="true">#</a> 3.2.5 Mac OS 系统下的安装 - 自动</h4><p>安装，启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install gitlab-runner
brew services.start gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更新</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab-runner stop

<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-o</span> /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-darwin-amd64

<span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/gitlab-runner

gitlab-runner start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-gitlab-runner-注册" tabindex="-1"><a class="header-anchor" href="#_3-3-gitlab-runner-注册" aria-hidden="true">#</a> 3.3 GitLab Runner 注册</h3><ul><li>注册步骤： <ul><li>获取runner token -&gt; 进行注册</li></ul></li><li>GitLabRunner类型 <ul><li>shared：运行整个平台项目的作业(gitlab)</li><li>group：运行特定group下的所有项目的作业(group）</li><li>specific：运行指定的项目作业(project)</li><li>locked：无法运行项目作业</li><li>paused：不会运行作业</li></ul></li></ul><h4 id="_3-3-1-获取注册token" tabindex="-1"><a class="header-anchor" href="#_3-3-1-获取注册token" aria-hidden="true">#</a> 3.3.1 获取注册token</h4><p>获取Shared类型的Token</p><p><img src="`+r+'" alt="image-20221030125007909"></p><p>获取Group类型的Token</p><p><img src="'+u+'" alt="image-20221030125250140"></p><p>获取Special类型的Token</p><p><img src="'+d+`" alt="image-20221030125548727"></p><h4 id="_3-3-2-gitlab-runner-的注册" tabindex="-1"><a class="header-anchor" href="#_3-3-2-gitlab-runner-的注册" aria-hidden="true">#</a> 3.3.2 GitLab Runner 的注册</h4><p>runner的注册采用的是交互式的方式：</p><p>通过执行<code>sudo gitlab-runner register</code>进行注册，过程中需要输入以下一些参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># gitlab 的url：</span>
http://127.0.0.1:10001
<span class="token comment"># runner 的 token ：</span>
DR9XssZPEdqymnQBVDpb
<span class="token comment"># runner 的描述信息 - 用于辨识该注册所属的群组或项目，可以设置为方便区分的字符串：</span>
test-shard
<span class="token comment"># runner 的 tag - 标签用于后续CI配置中选择此执行器，后期可以通过gitlab界面更改：</span>
build
<span class="token comment"># 选择执行器 - 后续CI任务的执行方式，docker方式运行的请选择docker ： </span>
shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个完整的注册流程：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>xuliang@xuliang-vm:~$ <span class="token function">sudo</span> gitlab-runner register
Runtime platform                                    <span class="token assign-left variable">arch</span><span class="token operator">=</span>amd64 <span class="token assign-left variable">os</span><span class="token operator">=</span>linux <span class="token assign-left variable">pid</span><span class="token operator">=</span><span class="token number">12303</span> <span class="token assign-left variable">revision</span><span class="token operator">=</span>0d4137b8 <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token number">15.5</span>.0
Running <span class="token keyword">in</span> system-mode.                            
                                                   
Enter the GitLab instance URL <span class="token punctuation">(</span>for example, https://gitlab.com/<span class="token punctuation">)</span>:
http://127.0.0.1:10001
Enter the registration token:
DR9XssZPEdqymnQBVDpb
Enter a description <span class="token keyword">for</span> the runner:
<span class="token punctuation">[</span>xuliang-vm<span class="token punctuation">]</span>: test-shard
Enter tags <span class="token keyword">for</span> the runner <span class="token punctuation">(</span>comma-separated<span class="token punctuation">)</span>:
build,deploy
Enter optional maintenance note <span class="token keyword">for</span> the runner:

Registering runner<span class="token punctuation">..</span>. succeeded                     <span class="token assign-left variable">runner</span><span class="token operator">=</span>DR9XssZP
Enter an executor: docker-ssh, shell, ssh, kubernetes, docker-ssh+machine, instance, custom, docker, parallels, virtualbox, docker+machine:
shell
Runner registered successfully. Feel <span class="token function">free</span> to start it, but <span class="token keyword">if</span> it&#39;s running already the config should be automatically reloaded<span class="token operator">!</span>
 
Configuration <span class="token punctuation">(</span>with the authentication token<span class="token punctuation">)</span> was saved <span class="token keyword">in</span> <span class="token string">&quot;/etc/gitlab-runner/config.toml&quot;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-gitlab-runner-执行器" tabindex="-1"><a class="header-anchor" href="#_3-4-gitlab-runner-执行器" aria-hidden="true">#</a> 3.4 GitLab Runner 执行器</h3><h4 id="_3-4-1-背景介绍" tabindex="-1"><a class="header-anchor" href="#_3-4-1-背景介绍" aria-hidden="true">#</a> 3.4.1 背景介绍</h4><p>GitLab CI/CD的流水线真正的执行环境是GitLab Runner提供的执行器，为了满足各种各样的需求，GitLab CI/CD支持的执行器有很多种，最常用的是Docker， shell，Kubernets三种。每一种执行器都与自己的特性，了解各个执行器的特性，并选择合适的执行器才能让我们流水线更加可靠，稳健。下面我就给大家讲解一下各种执行器的特性。</p><h4 id="_3-4-2-执行器类型" tabindex="-1"><a class="header-anchor" href="#_3-4-2-执行器类型" aria-hidden="true">#</a> 3.4.2 执行器类型</h4><p>GitLab Runner支持的执行器有以下几种：</p><ul><li>SSH</li><li>Shell</li><li>Parallels</li><li>VirtualBox</li><li>Docker</li><li>Docker Machine (auto-scaling)</li><li>Kubernetes</li><li>Custom</li></ul><p>GitLab Runner 支持的执行器有GitLab Runner的安装方式有关也和宿主机环境有关。</p><h4 id="_3-4-3-执行器特性对比1" tabindex="-1"><a class="header-anchor" href="#_3-4-3-执行器特性对比1" aria-hidden="true">#</a> 3.4.3 执行器特性对比1</h4><table><thead><tr><th>执行器</th><th>SSH</th><th>Shell</th><th>VirtualBox</th><th>Parallels</th><th>Docker</th><th>Kubernetes</th><th>Custom</th></tr></thead><tbody><tr><td>每次build清空build环境</td><td>✗</td><td>✗</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>conditional (4)</td></tr><tr><td>如果以前的克隆存在，请重新使用它</td><td>✓</td><td>✓</td><td>✗</td><td>✗</td><td>✓</td><td>✗</td><td>conditional (4)</td></tr><tr><td>runner文件系统访问受到保护（5）</td><td>✓</td><td>✗</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>conditional (4)</td></tr><tr><td>迁移runner机器</td><td>✗</td><td>✗</td><td>partial</td><td>partial</td><td>✓</td><td>✓</td><td>✓</td></tr><tr><td>复杂的构建环境</td><td>✗</td><td>✗（2）</td><td>✓（3）</td><td>✓（3）</td><td>✓</td><td>✓</td><td>conditional (4)</td></tr><tr><td>调试构建问题</td><td>容易</td><td>容易</td><td>困难</td><td>困难</td><td>中等</td><td>中等</td><td>中等</td></tr></tbody></table><p>标注解释</p><ol><li>迁移时需要在新的机器上安装所依赖的应用，服务，工具包</li><li>要求所有依赖手动安装</li><li>例如使用 https://www.vagrantup.com/docs/providers/virtualbox</li><li>取决于您正在配置的环境类型。它可以在每个构建之间完全隔离或共享。</li><li>当runner的文件系统访问不受保护时，作业可以访问整个系统，包括运行程序的令牌，以及其他作业的缓存和代码。执行器被标记为 ✓ 默认情况下不允许运行程序访问文件系统。但是，安全缺陷或某些配置可能会允许作业从其容器中跳出并访问文件系统宿主runner</li></ol><p>对于ssh和shell执行器，在构建完成后，并不会自动清空构建目录。其他执行器则会。所以如果你用的是Shell执行器，会在Runner的build目录下找到构建的文件和产物，而当你是使用Shell执行器时，如果以及克隆过项目了，则会重新使用它。虽然shell执行器使用的宿主机环境，运行足够快，但在使用时，必须手动安装所有构建环境，依赖，而且可能存在越权的问题。如果你是一个追求速度，可以使用Shell执行器，如果你追求灵活性，稳健，可以使用Dokcer执行器，如果你对自动扩缩容有一定要求，建议上Kubernets。</p><h4 id="_3-4-4-执行器特性对比2" tabindex="-1"><a class="header-anchor" href="#_3-4-4-执行器特性对比2" aria-hidden="true">#</a> 3.4.4 执行器特性对比2</h4>`,86),G=n("thead",null,[n("tr",null,[n("th",null,"Executor"),n("th",null,"SSH"),n("th",null,"Shell"),n("th",null,"VirtualBox"),n("th",null,"Parallels"),n("th",null,"Docker"),n("th",null,"Kubernetes"),n("th",null,"Custom")])],-1),D=n("tr",null,[n("td",null,"保护变量"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓")],-1),I=n("tr",null,[n("td",null,"GitLab Runner 执行命令行"),n("td",null,"✗"),n("td",null,"✓"),n("td",null,"✗"),n("td",null,"✗"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓")],-1),S=n("td",null,[s("支持"),n("code",null,".gitlab-ci.yml"),s(" ：image")],-1),j=n("td",null,"✗",-1),C=n("td",null,"✗",-1),E=n("td",null,"✗",-1),N=n("td",null,"✗",-1),M=n("td",null,"✓",-1),O=n("td",null,"✓",-1),A={href:"https://blog.csdn.net/github_35631540/article/details/custom.md#stages",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"$CUSTOM_ENV_CI_JOB_IMAGE",-1),P=n("tr",null,[n("td",null,[s("支持"),n("code",null,".gitlab-ci.yml"),s(": services")]),n("td",null,"✗"),n("td",null,"✗"),n("td",null,"✗"),n("td",null,"✗"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓")],-1),U=n("tr",null,[n("td",null,[s("支持"),n("code",null,".gitlab-ci.yml"),s(": cache")]),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓")],-1),B=n("tr",null,[n("td",null,[s("支持"),n("code",null,".gitlab-ci.yml"),s(": artifacts")]),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓")],-1),H=n("tr",null,[n("td",null,"跨阶段制品传递"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"✓")],-1),F=n("tr",null,[n("td",null,"使用 GitLab 私有镜像仓库"),n("td",null,"n/a"),n("td",null,"n/a"),n("td",null,"n/a"),n("td",null,"n/a"),n("td",null,"✓"),n("td",null,"✓"),n("td",null,"n/a")],-1),J=n("tr",null,[n("td",null,"集成 Web terminal"),n("td",null,"✗"),n("td",null,"✓ (UNIX)"),n("td",null,"✗"),n("td",null,"✗"),n("td",null,"✓"),n("td",null,"✓ (1)"),n("td",null,"✗")],-1),V=l(`<p>在上面的执行器特性对比中需要注意的是如果是Shell执行器，无法使用docker镜像和<code>services</code>关键词。即使你的宿主机已经安装的Docker。此外控制台调试之后Docker与k8s以及，unix的shell执行器可以使用。</p><h3 id="_3-5-gitlab-runner-命令总结" tabindex="-1"><a class="header-anchor" href="#_3-5-gitlab-runner-命令总结" aria-hidden="true">#</a> 3.5 GitLab Runner 命令总结</h3><p>gitlab-runner删除无效runner</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab-runner verify <span class="token parameter variable">--delete</span> <span class="token parameter variable">--name</span> xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看帮助</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab-runner <span class="token parameter variable">--help</span>
gitlab-runner <span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件路径</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 配置文件</span>
<span class="token comment"># 当gitlab-runner作为超级用户（root）执行时，在* nix系统上</span>
/etc/gitlab-runner/config.toml

<span class="token comment"># 当gitlab-runner以非root身份执行时，在* nix系统上</span>
~/.gitlab-runner/config.toml 

<span class="token comment"># 在其他系统上</span>
./config.toml 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 注册</span>
gitlab-runner register <span class="token parameter variable">--name</span> my-runner <span class="token parameter variable">--url</span> http://gitlab.example.com --registration-token my-registration-token

<span class="token comment"># 或者通过在register命令之前配置环境变量：</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CI_SERVER_URL</span><span class="token operator">=</span>http://gitlab.example.com
<span class="token builtin class-name">export</span> <span class="token assign-left variable">RUNNER_NAME</span><span class="token operator">=</span>my-runner
<span class="token builtin class-name">export</span> <span class="token assign-left variable">REGISTRATION_TOKEN</span><span class="token operator">=</span>my-registration-token
<span class="token builtin class-name">export</span> <span class="token assign-left variable">REGISTER_NON_INTERACTIVE</span><span class="token operator">=</span>true
gitlab-runner register

<span class="token comment"># 非互动注册，可以在非交互/无人值守模式下使用注册。</span>
gitlab-runner register --non-interactive <span class="token operator">&lt;</span>other-arguments<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注销</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 取消注册所有附加的注册者</span>
gitlab-runner unregister --all-runners

<span class="token comment"># 要取消注册特定的跑步者，首先通过执行gitlab-runner list获取注册者的详细信息</span>
gitlab-runner list
<span class="token comment"># 再根据信息注销，按注册令牌</span>
gitlab-runner unregister <span class="token parameter variable">--url</span> http://gitlab.example.com/ <span class="token parameter variable">--token</span> t0k3n
<span class="token comment"># 按名字</span>
gitlab-runner unregister <span class="token parameter variable">--name</span> hj_project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装gitlab-runner install</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#复制gitlab-runner到/usr/bin/目录下</span>
<span class="token function">cp</span> /root/gitlab-runner-linux-amd64  /usr/bin/gitlab-runner

<span class="token comment">#赋予可执行权限</span>
<span class="token function">chmod</span> +x /usr/bin/gitlab-runner

<span class="token comment"># 创建符号链接文件</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span>  /usr/bin/gitlab-runner /usr/local/bin/gitlab-runner

<span class="token comment"># 创建 GitLab Runner用户</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">--comment</span> <span class="token string">&#39;GitLab Runner&#39;</span> --create-home gitlab-runner <span class="token parameter variable">--shell</span> /bin/bash

<span class="token comment"># 修改gitla-runner密码</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;gitlab-runner&quot;</span> <span class="token operator">|</span> <span class="token function">passwd</span> <span class="token parameter variable">--stdin</span> gitlab-runner
<span class="token comment"># 安装</span>
gitlab-runner <span class="token function">install</span> <span class="token parameter variable">--user</span><span class="token operator">=</span>gitlab-runner --working-directory<span class="token operator">=</span>/home/gitlab-runner

<span class="token comment"># 把服务添加成随机启动</span>
<span class="token function">chkconfig</span> gitlab-runner on

<span class="token comment"># 给gitl-runner用户可以sudo执行/usr/local/bin/gitlab-runner的权限</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;Cmnd_Alias CMD = /usr/bin/systemctl,/usr/bin/gitlab-runner,/usr/bin/vim&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/sudoers.d/gitlab-runner
<span class="token builtin class-name">echo</span> <span class="token string">&quot;gitlab-runner ALL=(ALL)       NOPASSWD:CMD&quot;</span> <span class="token operator">&gt;&gt;</span>/etc/sudoers.d/gitlab-runner

<span class="token comment"># 运行</span>
gitlab-runner start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">!</span>/bin/bash
<span class="token comment"># 卸载gitlab-runner</span>

<span class="token comment"># 停止服务</span>
gitlab-runner stop

<span class="token comment"># 取消随机启动</span>
<span class="token function">chkconfig</span> gitlab-runner off

<span class="token comment"># 卸载服务</span>
gitlab-runner uninstall

<span class="token comment"># 清理文件</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/gitlab-runner
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/local/bin/gitlab-runner
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/bin/gitlab-runner
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/sudoers.d/gitlab-runner

<span class="token comment"># 删除用户</span>
<span class="token function">userdel</span> <span class="token parameter variable">-r</span> gitlab-runner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-运行流水线任务" tabindex="-1"><a class="header-anchor" href="#_3-6-运行流水线任务" aria-hidden="true">#</a> 3.6 运行流水线任务</h3><p>脚本</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> deploy
  
<span class="token key atrule">build</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">tags</span><span class="token punctuation">:</span> 
    <span class="token punctuation">-</span> build
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;mvn<span class="token punctuation">-</span>clean
    <span class="token punctuation">-</span> echo &quot;mvn install&quot;
    
<span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> deploy
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;hello deploy&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-gitlab-pipline" tabindex="-1"><a class="header-anchor" href="#四-gitlab-pipline" aria-hidden="true">#</a> 四：GitLab PipLine</h2><p>GitLab CI的每个实例都有一个称为Lint的嵌入式调试工具，该工具可以验证.gitlab--ci.yml文件的内容</p><h3 id="_4-1-gitlab-pipline-语法" tabindex="-1"><a class="header-anchor" href="#_4-1-gitlab-pipline-语法" aria-hidden="true">#</a> 4.1 GitLab Pipline 语法</h3><h4 id="_4-1-1-job" tabindex="-1"><a class="header-anchor" href="#_4-1-1-job" aria-hidden="true">#</a> 4.1.1 Job</h4><p>在每个项目中，使用名为.gitlab-ci.yml的YAML文件配置GitLab CI/CD管道。在文件中可以定义一个或多个作业(job)。每个作业必须具有唯一的名称（不能使用关键字），每个作业是独立执行的。作业定义了在约束条件下进行相关操作，每个作业至少要包含一个script。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job1</span><span class="token punctuation">:</span>
  script<span class="token punctuation">:</span><span class="token string">&quot;execute-script-for-jobl&quot;</span>
<span class="token key atrule">job2</span><span class="token punctuation">:</span>
  script<span class="token punctuation">:</span><span class="token string">&quot;execute-script-for-job2&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里在pipeline中定义了两个作业，每个作业运行不同的命令。命令可以是shell或脚本。</p><p>一个样例</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">before_script</span><span class="token punctuation">:</span>
  echo &quot;before<span class="token punctuation">-</span>script <span class="token tag">!</span><span class="token tag">!</span>&quot;
  
<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">DOMAIN</span><span class="token punctuation">:</span> example.com
  
<span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> codescan
  <span class="token punctuation">-</span> deploy
  
<span class="token key atrule">build</span><span class="token punctuation">:</span>
  <span class="token key atrule">before_script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;before<span class="token punctuation">-</span>script in job&quot;
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;mvn clean
    <span class="token punctuation">-</span> echo &quot;mvn install&quot;
    <span class="token punctuation">-</span> echo &quot;$DOMAIN&quot;
  <span class="token key atrule">after_script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;after script in buildjob&quot;

<span class="token key atrule">unittest</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;run test&quot;

<span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;hello deploy&quot;
    <span class="token punctuation">-</span> sleep 2;
    
<span class="token key atrule">codescan</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> codescan
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;codescan&quot;
    <span class="token punctuation">-</span> sleep 5;
    
<span class="token key atrule">after_script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> echo &quot;after<span class="token punctuation">-</span>script <span class="token tag">!</span><span class="token tag">!</span>&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-2-script" tabindex="-1"><a class="header-anchor" href="#_4-1-2-script" aria-hidden="true">#</a> 4.1.2 Script</h4><p>每个作业至少要包含一个script。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> uname <span class="token punctuation">-</span>a
    <span class="token punctuation">-</span> bundle exec rspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**注意：**有时，script命令需要用单引号或双引号引起来。例如，包含冒号命令(😃，需要加引号，以便被包裹的YML解析器知道来解释整个事情作为一个字符串，而不是一个&quot;键:值&quot;对。使用特殊字符时要小心：<code>:</code>，<code>{</code>，<code>}</code>,<code>[</code>,<code>]</code>,<code>,</code>,<code>&amp;</code>,<code>*</code>,<code>#</code>,<code>?</code>,<code>|</code>,<code>-</code>，<code>&lt;</code>，<code>&gt;</code>，<code>=</code>,<code>!</code>，<code>%</code>，<code>@</code>，\`\`\`</p><h4 id="_4-1-3-before-script" tabindex="-1"><a class="header-anchor" href="#_4-1-3-before-script" aria-hidden="true">#</a> 4.1.3 before_script</h4><p>用于定义一个命令，该命令在每个作业之前运行。必须是一个数组。指定的script与主脚本中指定的任何脚本串联在一起，并在单个shell中一起执行。</p><p>before_script失败导致整个作业失败，其他作业将不再执行。作业失败不会影响after_script运行。</p><h4 id="_4-1-4-after-script" tabindex="-1"><a class="header-anchor" href="#_4-1-4-after-script" aria-hidden="true">#</a> 4.1.4 after_script</h4><p>用于定义在每个作业（包括失败的作业）之后运行的命令。</p><p>这必须是一个数组。</p><p>指定的脚本在新的shell中执行，与任何before_script或script脚本分开。</p><p>after_script失败不会影响作业失败。</p><h4 id="_4-1-5-stages" tabindex="-1"><a class="header-anchor" href="#_4-1-5-stages" aria-hidden="true">#</a> 4.1.5 stages</h4><p>用于定义作业可以使用的阶段，并且是全局定义的。</p><p>同一阶段的作业并行运行，不同阶段按顺序执行。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> codescan
  <span class="token punctuation">-</span> deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="image-20221101130132410"></p><h4 id="_4-1-6-pre-post" tabindex="-1"><a class="header-anchor" href="#_4-1-6-pre-post" aria-hidden="true">#</a> 4.1.6 .pre&amp;.post</h4><p>.pre始终是整个管道的第一个运行阶段，.post始终是整个管道的最后一个运行阶段。用户定义的阶段都在两者之间运行。.pre和.post的顺序无法更改。如果管道仅包含.pre或.post阶段的作业，则不会创建管道。</p><p><img src="'+v+'" alt="image-20221101130548178"></p><h4 id="_4-1-7-stage" tabindex="-1"><a class="header-anchor" href="#_4-1-7-stage" aria-hidden="true">#</a> 4.1.7 stage</h4><p>是按Job定义的，并且依赖于全局定义的stages。它允许将作业分为不同的阶段，并且同一stage作业可以并行执行（取决于特定条件）。</p><p><img src="'+b+'" alt="image-20221101131201855"></p><p>可能遇到的问题：阶段并没有并行运行。在这里我把这两个阶段在同一个runner运行了，所以需要修改runner每次运行的作业数量。默认是1，改为10.</p><p><img src="'+m+`" alt="image-20221101131407013"></p><p>vim /etc/gitlab-runner/config.toml 更改后自动加载无需重启。</p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code>concurrent <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-1-8-variables" tabindex="-1"><a class="header-anchor" href="#_4-1-8-variables" aria-hidden="true">#</a> 4.1.8 variables</h4><p>定义变量，pipeline变量、job变量。job变量优先级最大。</p><h4 id="_4-1-9-tags" tabindex="-1"><a class="header-anchor" href="#_4-1-9-tags" aria-hidden="true">#</a> 4.1.9 tags</h4><p>用于从允许运行该项目的所有Runner列表中选择特定的Runner，在Runner注册期间，您可以指定Runner的标签。</p><p><img src="`+k+'" alt="image-20221102084714149"></p><h4 id="_4-1-10-allow-failure" tabindex="-1"><a class="header-anchor" href="#_4-1-10-allow-failure" aria-hidden="true">#</a> 4.1.10 allow_failure</h4><p>allow_failure允许作业失败，默认值为false。启用后，如果作业失败，该作业将在用户界面中显示橙色警告。但是，管道的逻辑流程将认为作业成功/通过，并且不会被阻塞。假设所有其他作业均成功，则该作业的阶段及其管道将显示相同的橙色警告。但是，关联的提交将被标记为&quot;通过&quot;，而不会发出警告。</p><p><img src="'+h+'" alt="image-20221102085341241"></p><h4 id="_4-1-11-when" tabindex="-1"><a class="header-anchor" href="#_4-1-11-when" aria-hidden="true">#</a> 4.1.11 when</h4><p>控制作业的运行</p><ul><li><strong>on_success：</strong> 前面阶段中的所有作业都成功时才执行作业，默认值。</li><li>**on_failure：**当前面阶段出现失败时执行。</li><li>**always：**总是执行作业。</li><li>**manual：**手动执行作业。</li><li>**delayed：**延迟执行作业。</li></ul><p><img src="'+g+`" alt="image-20221102085956655"></p><p>demo</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">timedrollout</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &#39;Rolling out 10% <span class="token punctuation">...</span> &#39;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> delayed
  <span class="token key atrule">start_in</span><span class="token punctuation">:</span> <span class="token string">&#39;30&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-12-retry" tabindex="-1"><a class="header-anchor" href="#_4-1-12-retry" aria-hidden="true">#</a> 4.1.12 retry</h4><ul><li>配置在失败的情况下重试作业的次数。</li><li>当作业失败并配置了retry，将再次处理该作业，直到达到retry关键字指定的次数。</li><li>如果retry设置为2，并且作业在第二次运行成功（第一次重试)，则不会再次重试。retry值必须是一个正整数，等于或大于0，但小于或等于2（最多两次重试，总共运行3次）。</li></ul><p><strong>精确匹配错误</strong></p><p>默认情况下，在失败情况下重试作业。max：最大重试次数when：重试失败的错误类型</p><ul><li>always：在发生任何故障时重试（默认）。</li><li>unknown_failure：当失败原因未知时。</li><li>script_failure：脚本失败时重试。</li><li>api_failure：API失败重试。</li><li>stuck_or_timeout_failure：作业卡住或超时时。</li><li>runner_system_failure：运行系统发生故障。</li><li>missing_dependency_failure：如果依赖丢失。</li><li>runner_unsupported：Runner不受支持。</li><li>stale_schedule：无法执行延迟的作业。</li><li>job_execution_timeout：脚本超出了为作业设置的最大执行时间。</li><li>archived_failure：作业已存档且无法运行。</li><li>unmet_prerequisites：作业未能完成先决条件任务。</li><li>scheduler_failure：调度程序未能将作业分配给运行scheduler_failure。</li><li>data_integrity_failure：检测到结构完整性问题。</li></ul><p><strong>demo</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">unittest</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> build
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ech &quot;run test&quot;
  <span class="token key atrule">retry</span><span class="token punctuation">:</span>
    <span class="token key atrule">max</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token key atrule">when</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> script_failure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-13-timeout" tabindex="-1"><a class="header-anchor" href="#_4-1-13-timeout" aria-hidden="true">#</a> 4.1.13 timeout</h4><p>作业级别的超时可以超过项目级别超时，但不能超过Runner特定的超时。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">build</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> build.sh
  <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 3 hours 30 minutes

<span class="token key atrule">test</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> rspec
  <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 3h 30m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-14-parallel" tabindex="-1"><a class="header-anchor" href="#_4-1-14-parallel" aria-hidden="true">#</a> 4.1.14 parallel</h4><p>并行作业</p><ul><li>配置要并行运行的作业实例数，此值必须大于或等于2并且小于或等于50。</li><li>这将创建N个并行运行的同一作业实例.它们从job_name 1/N到job_name N/N依次命名。</li></ul><blockquote><p>实验脚本demo</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">before script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> echo &quot;before<span class="token punctuation">-</span>script<span class="token tag">!</span><span class="token tag">!</span>&quot;

<span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">DOMAIN</span><span class="token punctuation">:</span> example.com

<span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> build
  <span class="token punctuation">-</span> test
  <span class="token punctuation">-</span> codescan
  <span class="token punctuation">-</span> deploy

<span class="token key atrule">build</span><span class="token punctuation">:</span>
  <span class="token key atrule">inherit</span><span class="token punctuation">:</span>
    <span class="token key atrule">default</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">variables</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">before script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;before<span class="token punctuation">-</span>script in job&quot;
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> build
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span>master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;mvnclean
    <span class="token punctuation">-</span> echo &quot;mvn install&quot;
    <span class="token punctuation">-</span> echo &quot;S(DOMAIN)&quot;
    <span class="token punctuation">-</span> false <span class="token important">&amp;&amp;</span> true exit_code=$<span class="token punctuation">?</span>
    <span class="token punctuation">-</span> if <span class="token punctuation">[</span> $exit_code <span class="token punctuation">-</span>ne 0 <span class="token punctuation">]</span>; then echo &quot;Previous command failed&quot;; fi;
    <span class="token punctuation">-</span> sleep 2;
  <span class="token key atrule">after script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;after script in job&quot;

<span class="token key atrule">unittest</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> build
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;run test&quot;
    
<span class="token key atrule">interfacetest</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> test
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> build
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;run test&quot;
    <span class="token punctuation">-</span> sleep 2;    
    
<span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> deploy
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;hello deploy&quot;
    <span class="token punctuation">-</span> sleep 2;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> manual
  <span class="token key atrule">allow_failure</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  
<span class="token key atrule">timedrollout</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &#39;Rolling out 10% <span class="token punctuation">...</span> &#39;
  <span class="token key atrule">when</span><span class="token punctuation">:</span> delayed
  <span class="token key atrule">start_in</span><span class="token punctuation">:</span> <span class="token string">&#39;30&#39;</span>

<span class="token key atrule">codescan</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> codescan
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> build
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;codescan&quot;
    <span class="token punctuation">-</span> sleep 5;
  <span class="token key atrule">after_script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;after<span class="token punctuation">-</span>script&quot;    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-15-only-except-限制分支标签" tabindex="-1"><a class="header-anchor" href="#_4-1-15-only-except-限制分支标签" aria-hidden="true">#</a> 4.1.15 only &amp; except 限制分支标签</h4><p>简单了解，逐渐被rules替代了</p><ul><li>only和except用分支策略来限制jobs构建： <ul><li>only定义哪些分支和标签的git项目将会被job执行。</li><li>except定义哪些分支和标签的git项目将不会被job执行。</li></ul></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job</span><span class="token punctuation">:</span>
  <span class="token comment"># use regexp</span>
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> /^issue<span class="token punctuation">-</span>.<span class="token important">*$/</span>
  <span class="token comment"># use special keyword</span>
  <span class="token key atrule">except</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> branches
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>branches</td><td>当管道的Git引用是分支时.</td></tr><tr><td>tags</td><td>当管道的Git引用是标签时，</td></tr><tr><td>api</td><td>当第二个管道API触发了管道时（不是触发器API)</td></tr><tr><td>external</td><td>使用除GitLab以外的CI服务时.</td></tr><tr><td>pipelines</td><td>对于多项目触发器，使用带有CI_JOB_TOKEN的API创建.</td></tr><tr><td>pushes</td><td>管道由用户的git push触发.</td></tr><tr><td>schedules</td><td>For scheduled pipelines.</td></tr><tr><td>triggers</td><td>对于使用触发令牌创建的管道，</td></tr><tr><td>web</td><td>对于使用GitLab UI中的&quot;运行管道&quot;按钮创建的管道（在项目的Pipelines下）.</td></tr><tr><td>merge_requests</td><td>创建或更新合并请求时（请参阅管道以了解合并请求）</td></tr><tr><td>external_pull_requests</td><td>在GitHub上创建或请求外部拉取请求时（有关外部拉取请求，请参见管道）.</td></tr><tr><td>chat</td><td>对于使用GitLab ChatOps命令创建的作业，</td></tr></tbody></table><h4 id="_4-1-16-rules-构建规则" tabindex="-1"><a class="header-anchor" href="#_4-1-16-rules-构建规则" aria-hidden="true">#</a> 4.1.16 rules 构建规则</h4><ul><li>rules允许按顺序评估单个规则，直到匹配并为作业动态提供属性。</li><li>rules不能only/except与only/except组合使用。</li></ul><p>可用的规则：</p><ul><li>if（如果条件匹配）</li><li>changes（指定文件发生变化）</li><li>exists（指定文件存在）</li></ul><p>，</p><h5 id="rules-if-条件匹配" tabindex="-1"><a class="header-anchor" href="#rules-if-条件匹配" aria-hidden="true">#</a> rules-if-条件匹配</h5><ul><li>如果DOMAIN的值匹配，则需要手动运行。</li><li>不匹配on_success。</li><li>条件判断从上到下，匹配即停止。</li><li>多条件匹配可以使用&amp;&amp; ||</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">DOMAIN</span><span class="token punctuation">:</span> example.com
  
<span class="token key atrule">codescan</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> codescan
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;codescan&quot;
    <span class="token punctuation">-</span> sleep 5;
  <span class="token comment">#parallel:5</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> &#39;$DOMAIN ==&quot;example.com&quot;
      when<span class="token punctuation">:</span>manual
	<span class="token punctuation">-</span> when<span class="token punctuation">:</span>on_success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="rules-changes-文件变化" tabindex="-1"><a class="header-anchor" href="#rules-changes-文件变化" aria-hidden="true">#</a> rules-changes-文件变化</h5><ul><li>接受文件路径数组。</li><li>如果提交中Jenkinsfile文件发生的变化则为true。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">codescan</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> codescan
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;codescan&quot;
    <span class="token punctuation">-</span> sleep 5;
  <span class="token comment">#parallel:5</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">changes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> Jenkinsfile
      when<span class="token punctuation">:</span>manual
    <span class="token punctuation">-</span> if<span class="token punctuation">:</span>&#39;$DOMAIN =&quot;example.com&quot;
      when<span class="token punctuation">:</span>on_success
    <span class="token punctuation">-</span> when<span class="token punctuation">:</span>on success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="rules-exists-文件存在" tabindex="-1"><a class="header-anchor" href="#rules-exists-文件存在" aria-hidden="true">#</a> rules-exists-文件存在</h5><ul><li>接受文件路径数组。</li><li>当仓库中存在指定的文件时操作。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">codescan</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> codescan
  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> build
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> echo &quot;codescan&quot;
    <span class="token punctuation">-</span> sleep 5;
  <span class="token comment">#parallel:5</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">exists</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> Jenkinsfile
      <span class="token key atrule">when</span><span class="token punctuation">:</span> manual
    <span class="token punctuation">-</span> <span class="token key atrule">changes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> Jenkinsfile
      <span class="token key atrule">when</span><span class="token punctuation">:</span> on_success
    <span class="token punctuation">-</span> if;&#39;$DOMAIN ==&quot;example.com&quot;
      <span class="token key atrule">when</span><span class="token punctuation">:</span> on_success
    <span class="token punctuation">-</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> on_success
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="rules-allow-failure-允许失败" tabindex="-1"><a class="header-anchor" href="#rules-allow-failure-允许失败" aria-hidden="true">#</a> rules-allow_failure-允许失败</h5><ul><li>使用allow failure: true</li><li>rules: 在不停止管道本身的情况下允许作业失败或手动作业等待操作。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">job</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> <span class="token string">&quot;echo Hello,Rules!&quot;</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> if<span class="token punctuation">:</span>&#39;$CI_MERGE_REQUEST_TARGET_BRANCH_NAME ==&quot;master&quot;
      <span class="token key atrule">when</span><span class="token punctuation">:</span> manual
      <span class="token key atrule">allow_failure</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在此示例中，如果第一个规则匹配，则作业将具有以下when: manual和allow_failure: true。</p><h4 id="_4-1-17-workflow" tabindex="-1"><a class="header-anchor" href="#_4-1-17-workflow" aria-hidden="true">#</a> 4.1.17 workflow</h4><p>workflow -rules - 管道创建</p><ul><li>顶级workf1ow关键字适用于整个管道，并将确定是否创建管道。</li><li>when: 可以设置为always或never, 如果未提供，则默认值always。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">variables</span><span class="token punctuation">:</span>
  <span class="token key atrule">DOMAIN</span><span class="token punctuation">:</span> example.com
  
<span class="token key atrule">workflow</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">if</span><span class="token punctuation">:</span> &#39;$DOMAIN &quot;example.com&quot;&quot;
    <span class="token punctuation">-</span> <span class="token key atrule">when</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-18-cache" tabindex="-1"><a class="header-anchor" href="#_4-1-18-cache" aria-hidden="true">#</a> 4.1.18 cache</h4><p>缓存</p><ul><li>存储编译项目所需的运行时依赖项，指定项目工作空间中需要在j0b之间缓存的文件或目录。</li><li>全局cache定义在job之外，针对所有job生效。job中cache优先于全局。</li></ul><p><strong>cache：paths</strong></p><ul><li>在job build中定义缓存，将会缓存target目录下的所有.jar文件。</li><li>当在全局定义了cache:paths会被job中覆盖。以下实例将缓存target目录。</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>build;
  <span class="token key atrule">script</span><span class="token punctuation">:</span> test
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> target/<span class="token important">*.jar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cache</span><span class="token punctuation">:</span>
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> my/files
    
<span class="token key atrule">build</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span> echo &quot;hello&quot;
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">key</span><span class="token punctuation">:</span> build
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> target/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>cache: key - 缓存标记</strong></p><p>为缓存做个标记，可以配置job、分支为key来实现分支、作业特定的缓存。为不同job定义了不同的cache:key时，会为每个job分配一个独立的cache。cache:key 变量可以使用任何预定义变量，默认default。从GitLab9.0开始，默认情况下所有内容都在管道和作业之间共享。</p><p>按照分支来设置缓存</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cache</span><span class="token punctuation">:</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">[</span>CI_COMMIT_REF_SLUG<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>cache: key: files:</strong></p><p>文件变化自动创建缓存</p><p>files:文件发生变化自动重新生成缓存(files最多指定两个文件)，提交的时候检查指定的文件。根据指定的文件生成密钥计算SHA校验和，如果文件未改变值为default。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cache:
  key:
    files:
      - Gemfile.lock
      - package.json I
  paths:
    - vendor/ruby
    - node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>cache: key: prefix:</strong></p><p>组合生成SHA校验和</p><p>prefix: 允许给定prefix的值与指定文件生成的秘钥组合。在这里定义了全局的cache，如果文件发生变化则值为rspec-xxx111111111222222，未发生变化为rspec-default。</p><p><img src="`+y+`" alt="image-20221114123402861"></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">cache</span><span class="token punctuation">:</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span>
    <span class="token key atrule">files</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> Gemfile.lock
    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> $<span class="token punctuation">[</span>CIJOB_NAME)
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> vendor/ruby
  <span class="token key atrule">rspec</span><span class="token punctuation">:</span>
    <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> bundle exec rspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>cache: policy:</strong> - 缓存策略</p><p>默认：在执行开始时下载文件，并在结束时重新上传文件。</p><p>policy:pull 跳过下载步骤，policy: push 跳过上传步骤</p><p><img src="`+f+`" alt="image-20221114124210197"></p><h4 id="_4-1-19-artifacts" tabindex="-1"><a class="header-anchor" href="#_4-1-19-artifacts" aria-hidden="true">#</a> 4.1.19 artifacts</h4><p>用于指定在作业成功或者失败时应附加到作业的文件或目录的列表。作业完成后，工件将被发送到GitLab,并可在GitLab UI中下载。</p><p>制品，就是Java项目编程完成后的Jar包。其他语言的可能是一些XMl文件，或者HTML文件等。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> target/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>artifacts-制品创建</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">default-job</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> mvn test <span class="token punctuation">-</span>U
  <span class="token key atrule">except</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> tags

<span class="token key atrule">release-job</span><span class="token punctuation">:</span>
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> mvn package <span class="token punctuation">-</span>U
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> target/<span class="token important">*.war</span>
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-1-20-dependencies" tabindex="-1"><a class="header-anchor" href="#_4-1-20-dependencies" aria-hidden="true">#</a> 4.1.20 dependencies</h4>`,142);function $(z,K){const a=t("ExternalLinkIcon");return c(),p("div",null,[x,w,n("p",null,[s("我们的开发模式经历了如下的转变：瀑布模型->敏捷开发→"),n("a",q,[s("DevOps"),e(a)]),s("(Development、Operations的组合词，是一组过程、方法与系统的统称)")]),n("p",null,[s("后来随着DevOps的兴起，出现了持续集成（Continuous Integration）、持续交付（Continuous Delivery） 、"),n("a",L,[s("持续部署"),e(a)]),s("（Continuous Deployment） 的新方法，关于持续集成、持续交付、持续部署，总结如下：")]),R,n("table",null,[G,n("tbody",null,[D,I,n("tr",null,[S,j,C,E,N,M,O,n("td",null,[s("✓ (via "),n("a",A,[T,e(a)])])]),P,U,B,H,F,J])]),V])}const Q=i(_,[["render",$],["__file","gitlab.html.vue"]]);export{Q as default};
