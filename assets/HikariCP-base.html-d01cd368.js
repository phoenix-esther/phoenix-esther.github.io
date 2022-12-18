import{_ as n,V as s,W as a,X as e}from"./framework-4ec38622.js";const t={},i=e(`<h1 id="hikaricp-基础" tabindex="-1"><a class="header-anchor" href="#hikaricp-基础" aria-hidden="true">#</a> HikariCP 基础</h1><h2 id="hikaricp简介" tabindex="-1"><a class="header-anchor" href="#hikaricp简介" aria-hidden="true">#</a> HikariCP简介</h2><h3 id="hikaricp是什么" tabindex="-1"><a class="header-anchor" href="#hikaricp是什么" aria-hidden="true">#</a> HikariCP是什么？</h3><p>HikariCP 本质上就是一个数据库连接池。创建和关闭数据库连接的开销很大，HikariCP 通过“池”来复用连接，减小开销。</p><h3 id="why-hikaricp" tabindex="-1"><a class="header-anchor" href="#why-hikaricp" aria-hidden="true">#</a> Why HikariCP？</h3><p>HikariCP 是目前最快的连接池。就连风靡一时的 boneCP 也停止维护，主动让位给它。SpringBoot 也把它设置为默认连接池。</p><p>HikariCP 非常轻量。本文用到的 4.0.3 版本的 jar 包仅仅只有 156 KB，它的源码真的非常精炼。</p><h2 id="hikaricp的使用" tabindex="-1"><a class="header-anchor" href="#hikaricp的使用" aria-hidden="true">#</a> HikariCP的使用</h2><h3 id="引入mavne依赖" tabindex="-1"><a class="header-anchor" href="#引入mavne依赖" aria-hidden="true">#</a> 引入Mavne依赖</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- hikari --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.zaxxer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>HikariCP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.0.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- mysql驱动 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>8.0.15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建datasource" tabindex="-1"><a class="header-anchor" href="#创建datasource" aria-hidden="true">#</a> 创建DataSource</h3><p><code>HikariCP</code>作为数据库连接池，提供实现了<code>DataSource</code>接口的<code>HikariDataSource</code>，使用HikariCP要构造<code>HikariDataSource</code>实例，有许多方式可以创建：</p><ul><li>默认构造器，需要额外设置配置</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HikariDataSource</span> ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">setJdbcUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ds<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过<code>HikariConfig</code>初始化:</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HikariConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
config<span class="token punctuation">.</span><span class="token function">setJdbcUrl</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:mysql://localhost:3306/test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
config<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
config<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HikariDataSource</span> ds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariDataSource</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过配置文件进行初始化</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">jdbcUrl</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/github_demo?characterEncoding=utf8&amp;serverTimezone=GMT%2B8</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在代码中进行初始化</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 加载配置文件，也可以无参构造并使用启动参数 hikaricp.configurationFile 指定配置文件（不推荐，后面会说原因）</span>
<span class="token class-name">HikariConfig</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariConfig</span><span class="token punctuation">(</span><span class="token string">&quot;/hikari2.properties&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">HikariDataSource</span> dataSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HikariDataSource</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取连接" tabindex="-1"><a class="header-anchor" href="#获取连接" aria-hidden="true">#</a> 获取连接</h3><p>然后可以通过<code>ds</code>获取<code>Connection</code>实例，并用它执行查询：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Connection</span> connection <span class="token operator">=</span> ds<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     <span class="token class-name">Statement</span> st <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> st<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token string">&quot;show tables;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// handle exception</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置参数详解" tabindex="-1"><a class="header-anchor" href="#配置参数详解" aria-hidden="true">#</a> 配置参数详解</h2><p>相比其他连接池，HikariCP 的配置参数非常简单，其中有几个功能需要注意：</p><ol><li>HikariCP 借出连接时强制检查连接的活性，不像其他连接池一样可以选择不检查；</li><li>默认会检查 idleTimeout、maxLifetime，可以选择禁用，但不推荐；</li><li>默认不检查 keepaliveTime、leakDetectionThreshold，可以选择开启，推荐开启leakDetectionThreshold 即可。</li></ol><h3 id="必须的参数" tabindex="-1"><a class="header-anchor" href="#必须的参数" aria-hidden="true">#</a> 必须的参数</h3><p>注意，这里 jdbcUrl 和 dataSourceClassName 二选一。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">#-------------必需的参数--------------------------------</span>
<span class="token comment"># JDBC 驱动中 DataSource 的实现类全限定类名。不支持 XA DataSource</span>
<span class="token comment"># 如果指定， HikariCP 将使用 DataSouce.getConnection 获取连接而不是使用 DriverManager.getConnection，官方建议指定（mysql 除外）</span>
<span class="token comment"># dataSourceClassName=</span>

<span class="token comment"># 如果指定， HikariCP 将使用 DriverManager.getConnection 获取连接而不是使用 DataSouce.getConnection</span>
<span class="token key attr-name">jdbcUrl</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/github_demo?characterEncoding=utf8&amp;serverTimezone=GMT%2B8</span>

<span class="token comment"># 用户名和密码</span>
<span class="token key attr-name">username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token key attr-name">password</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的参数" tabindex="-1"><a class="header-anchor" href="#常用的参数" aria-hidden="true">#</a> 常用的参数</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 从池中借出的连接是否默认自动提交事务</span>
<span class="token comment"># 默认 true</span>
<span class="token key attr-name">autoCommit</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment"># 当我从池中借出连接时，愿意等待多长时间。如果超时，将抛出 SQLException</span>
<span class="token comment"># 默认 30000 ms，最小值 250 ms。支持 JMX 动态修改</span>
<span class="token key attr-name">connectionTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">30000</span>

<span class="token comment"># 一个连接在池里闲置多久时会被抛弃</span>
<span class="token comment"># 当 minimumIdle &lt; maximumPoolSize 才生效</span>
<span class="token comment"># 默认值 600000 ms，最小值为 10000 ms，0表示禁用该功能。支持 JMX 动态修改</span>
<span class="token key attr-name">idleTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">600000</span>

<span class="token comment"># 多久检查一次连接的活性</span>
<span class="token comment"># 检查时会先把连接从池中拿出来（空闲的话），然后调用isValid()或执行connectionTestQuery来校验活性，如果通过校验，则放回池里。</span>
<span class="token comment"># 默认 0 （不启用），最小值为 30000 ms，必须小于 maxLifetime。支持 JMX 动态修改</span>
<span class="token key attr-name">keepaliveTime</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>

<span class="token comment"># 当一个连接存活了足够久，HikariCP 将会在它空闲时把它抛弃</span>
<span class="token comment"># 默认 1800000  ms，最小值为 30000 ms，0 表示禁用该功能。支持 JMX 动态修改</span>
<span class="token key attr-name">maxLifetime</span><span class="token punctuation">=</span><span class="token value attr-value">1800000</span>

<span class="token comment"># 用来检查连接活性的 sql，要求是一个查询语句，常用select &#39;x&#39;</span>
<span class="token comment"># 如果驱动支持 JDBC4.0，建议不设置，这时默认会调用  Connection.isValid() 来检查，该方式会更高效一些</span>
<span class="token comment"># 默认为空</span>
<span class="token comment"># connectionTestQuery=</span>

<span class="token comment"># 池中至少要有多少空闲连接。</span>
<span class="token comment"># 当空闲连接 &lt; minimumIdle，总连接 &lt; maximumPoolSize 时，将新增连接</span>
<span class="token comment"># 默认等于 maximumPoolSize。支持 JMX 动态修改</span>
<span class="token key attr-name">minimumIdle</span><span class="token punctuation">=</span><span class="token value attr-value">5</span>

<span class="token comment"># 池中最多容纳多少连接（包括空闲的和在用的）</span>
<span class="token comment"># 默认为 10。支持 JMX 动态修改</span>
<span class="token key attr-name">maximumPoolSize</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>

<span class="token comment"># 用于记录连接池各项指标的 MetricRegistry 实现类</span>
<span class="token comment"># 默认为空，只能通过代码设置</span>
<span class="token comment"># metricRegistry=</span>

<span class="token comment"># 用于报告连接池健康状态的 HealthCheckRegistry 实现类</span>
<span class="token comment"># 默认为空，只能通过代码设置</span>
<span class="token comment"># healthCheckRegistry=</span>

<span class="token comment"># 连接池名称。</span>
<span class="token comment"># 默认自动生成</span>
<span class="token key attr-name">poolName</span><span class="token punctuation">=</span><span class="token value attr-value">zzsCP</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="很少用的参数" tabindex="-1"><a class="header-anchor" href="#很少用的参数" aria-hidden="true">#</a> 很少用的参数</h3><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 如果启动连接池时不能成功初始化连接，是否快速失败 TODO</span>
<span class="token comment"># &gt;0 时，会尝试获取连接。如果获取时间超过指定时长，不会开启连接池，并抛出异常</span>
<span class="token comment"># =0 时，会尝试获取并验证连接。如果获取成功但验证失败则不开启池，但是如果获取失败还是会开启池</span>
<span class="token comment"># &lt;0 时，不管是否获取或校验成功都会开启池。</span>
<span class="token comment"># 默认为 1</span>
<span class="token key attr-name">initializationFailTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>

<span class="token comment"># 是否在事务中隔离 HikariCP 自己的查询。</span>
<span class="token comment"># autoCommit 为 false 时才生效</span>
<span class="token comment"># 默认 false</span>
<span class="token key attr-name">isolateInternalQueries</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token comment"># 是否允许通过 JMX 挂起和恢复连接池</span>
<span class="token comment"># 默认为 false</span>
<span class="token key attr-name">allowPoolSuspension</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token comment"># 当连接从池中取出时是否设置为只读</span>
<span class="token comment"># 默认值 false</span>
<span class="token key attr-name">readOnly</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>

<span class="token comment"># 是否开启 JMX</span>
<span class="token comment"># 默认 false</span>
<span class="token key attr-name">registerMbeans</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment"># 数据库 catalog</span>
<span class="token comment"># 默认由驱动决定</span>
<span class="token comment"># catalog=</span>

<span class="token comment"># 在每个连接创建后、放入池前，需要执行的初始化语句</span>
<span class="token comment"># 如果执行失败，该连接会被丢弃</span>
<span class="token comment"># 默认为空</span>
<span class="token comment"># connectionInitSql=</span>

<span class="token comment"># JDBC 驱动使用的 Driver 实现类</span>
<span class="token comment"># 一般根据 jdbcUrl 判断就行，报错说找不到驱动时才需要加</span>
<span class="token comment"># 默认为空</span>
<span class="token comment"># driverClassName=</span>

<span class="token comment"># 连接的默认事务隔离级别</span>
<span class="token comment"># 默认值为空，由驱动决定</span>
<span class="token comment"># transactionIsolation=</span>

<span class="token comment"># 校验连接活性允许的超时时间</span>
<span class="token comment"># 默认 5000 ms，最小值为 250 ms，要求小于 connectionTimeout。支持 JMX 动态修改</span>
<span class="token key attr-name">validationTimeout</span><span class="token punctuation">=</span><span class="token value attr-value">5000</span>

<span class="token comment"># 连接对象可以被借出多久</span>
<span class="token comment"># 默认 0（不开启），最小允许值为 2000 ms。支持 JMX 动态修改</span>
<span class="token key attr-name">leakDetectionThreshold</span><span class="token punctuation">=</span><span class="token value attr-value">0</span>

<span class="token comment"># 直接指定 DataSource 实例，而不是通过 dataSourceClassName 来反射构造</span>
<span class="token comment"># 默认为空，只能通过代码设置</span>
<span class="token comment"># dataSource=</span>

<span class="token comment"># 数据库 schema</span>
<span class="token comment"># 默认由驱动决定</span>
<span class="token comment"># schema=</span>

<span class="token comment"># 指定连接池获取线程的 ThreadFactory 实例</span>
<span class="token comment"># 默认为空，只能通过代码设置</span>
<span class="token comment"># threadFactory=</span>

<span class="token comment"># 指定连接池开启定时任务的 ScheduledExecutorService 实例（建议设置setRemoveOnCancelPolicy(true)）</span>
<span class="token comment"># 默认为空，只能通过代码设置</span>
<span class="token comment"># scheduledExecutor=</span>

<span class="token comment"># JNDI 配置的数据源名</span>
<span class="token comment"># 默认为空</span>
<span class="token comment"># dataSourceJndiName=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),c=[i];function l(p,o){return s(),a("div",null,c)}const d=n(t,[["render",l],["__file","HikariCP-base.html.vue"]]);export{d as default};
