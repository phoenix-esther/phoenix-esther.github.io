import{_ as n,c as s}from"./app.3f0ca793.js";const a={},t=s(`<h1 id="\u4ECE\u542F\u52A8\u6D41\u7A0B\u8BF4\u8D77" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u542F\u52A8\u6D41\u7A0B\u8BF4\u8D77" aria-hidden="true">#</a> \u4ECE\u542F\u52A8\u6D41\u7A0B\u8BF4\u8D77</h1><p>\u63D0\u524D\u58F0\u660E\uFF0C\u6587\u4E2D\u6240\u7C98\u8D34\u4EE3\u7801\u5747\u4E3A\u6838\u5FC3\u6D41\u7A0B\uFF0C\u7701\u7565\u4E86\u65E5\u5FD7\u548C\u6821\u9A8C\u903B\u8F91\uFF0Ctry cache\u7B49</p><p>Servlet\u5728\u5728\u542F\u52A8\u65F6\u9996\u5148\u4F1A\u8C03\u7528Listener\u63A5\u53E3\uFF0C\u5728\u8C03\u7528init\u63A5\u53E3\u3002\u5728Spring\u4E2D\uFF0C\u6700\u4E3B\u8981\u7684\u63A5\u53E3\u5C31\u662FContextLoaderListener\u63A5\u53E3\u3002\u4E0B\u9762\u5148\u770B\u770B\u8FD9\u4E2A\u63A5\u53E3\uFF0C\u7136\u540E\u5728\u770Binit\u7684\u521D\u59CB\u5316\u6D41\u7A0B\u3002</p><h2 id="contextloaderlistener" tabindex="-1"><a class="header-anchor" href="#contextloaderlistener" aria-hidden="true">#</a> ContextLoaderListener</h2><p>ContextLoaderListener\u7EE7\u627F\u81EA<code>ServeltContextListener</code>\uFF0C\u4ED6\u7684\u4E3B\u8981\u4F5C\u7528\u5C31\u662F\u7528\u6765\u76D1\u542CServeltContext\u58F0\u660E\u5468\u671F\u7684\u6539\u53D8\uFF0C\u5176\u5185\u90E8\u53EA\u5B9A\u4E49\u4E862\u4E2A\u63A5\u53E3\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ServletContextListener</span> <span class="token keyword">extends</span> <span class="token class-name">EventListener</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u5728web\u5E94\u7528\u4E2D\u7684filters\u548Cservlets\u521D\u59CB\u5316\u4E4B\u524D\uFF0C\u4F1A\u901A\u77E5\u6240\u6709\u7684Listener
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextInitialized</span><span class="token punctuation">(</span><span class="token class-name">ServletContextEvent</span> sce<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * \u5728Listener\u88AB\u901A\u77E5\u4E4B\u524D\uFF0C\u6240\u6709\u7684filter\u548Cservlets\u90FD\u88AB\u9500\u6BC1
     */</span>
    <span class="token keyword">default</span> <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextDestroyed</span><span class="token punctuation">(</span><span class="token class-name">ServletContextEvent</span> sce<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u5728\u521D\u59CB\u5316servlet\u4E4B\u524D\u548C\u9500\u6BC1servlet\u4E4B\u540E\uFF0C\u90FD\u4F1A\u901A\u77E5Listener\u3002\u4E0B\u9762\u5C31\u770B\u770BSpring\u7684\u5177\u4F53\u5B9E\u73B0\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ContextLoaderListener</span> <span class="token keyword">extends</span> <span class="token class-name">ContextLoader</span> <span class="token keyword">implements</span> <span class="token class-name">ServletContextListener</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextInitialized</span><span class="token punctuation">(</span><span class="token class-name">ServletContextEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u521D\u59CB\u5316webApplicationContext</span>
		<span class="token function">initWebApplicationContext</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">contextDestroyed</span><span class="token punctuation">(</span><span class="token class-name">ServletContextEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">closeWebApplicationContext</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">ContextCleanupListener</span><span class="token punctuation">.</span><span class="token function">cleanupAttributes</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u8FD9\u4E2A\u7C7B\u7EE7\u627F\u81EA<code>ContextLoader</code>,\u5728\u8FD9\u4E2A\u7C7B\u4E2D\u6709\u8FD9\u6837\u4E00\u6BB5\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> DEFAULT_STRATEGIES_PATH <span class="token operator">=</span> <span class="token string">&quot;ContextLoader.properties&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token punctuation">{</span>
     <span class="token class-name">ClassPathResource</span> resource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassPathResource</span><span class="token punctuation">(</span>DEFAULT_STRATEGIES_PATH<span class="token punctuation">,</span> <span class="token class-name">ContextLoader</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     defaultStrategies <span class="token operator">=</span> <span class="token class-name">PropertiesLoaderUtils</span><span class="token punctuation">.</span><span class="token function">loadProperties</span><span class="token punctuation">(</span>resource<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8BE5\u65B9\u6CD5\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A0\u8F7D\u4E86\u9ED8\u8BA4\u7B56\u7565\uFF0C\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token key attr-name">org.springframework.web.context.WebApplicationContext</span><span class="token punctuation">=</span><span class="token value attr-value">org.springframework.web.context.support.XmlWebApplicationContext</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u63A5\u7740\uFF0C\u54B1\u4EEC\u5728\u56DE\u5230<code>ContextLoaderListener#contextInitialized</code>\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u5185\u53EA\u6709\u4E00\u884C\u4EE3\u7801\u554A\uFF0C\u5C31\u662F\u8C03\u7528<code>ContextLoader#initWebApplicationContext</code>\u65B9\u6CD5\uFF1B</p><h3 id="\u521D\u59CB\u5316web\u5E94\u7528\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316web\u5E94\u7528\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u521D\u59CB\u5316Web\u5E94\u7528\u4E0A\u4E0B\u6587</h3><p>\u521D\u59CB\u5316web\u5E94\u7528\u4E0A\u4E0B\u6587\uFF0C\u4E3B\u8981\u5305\u542B\u51E0\u5927\u6D41\u7A0B\uFF1A</p><ul><li>\u68C0\u67E5\u662F\u5426\u5305\u542Broot application context</li><li>\u5982\u679C\u5F53\u524Dcontext\u4E3Anull\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684context\uFF0C</li><li>\u5237\u65B0\u5F53\u524D\u5E94\u7528\u4E0A\u4E0B\u6587</li><li>\u5C06context\u8BBE\u7F6E\u4E3Aroot application context</li></ul><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">initWebApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ServletContext</span> servletContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>servletContext<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token class-name">WebApplicationContext</span><span class="token punctuation">.</span>ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE<span class="token punctuation">)</span><span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u7981\u6B62\u591A\u6B21\u521D\u59CB\u5316context\u5B9E\u4F8B</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span><span class="token string">&quot;already present&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u901A\u8FC7 createWebApplicationContext \u65B9\u6CD5\u521B\u5EFA\u4E0A\u4E0B\u6587\uFF0C\u9ED8\u8BA4\u521B\u5EFA XmlWebApplicationContext</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token operator">=</span> <span class="token function">createWebApplicationContext</span><span class="token punctuation">(</span>servletContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>context <span class="token keyword">instanceof</span> <span class="token class-name">ConfigurableWebApplicationContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ConfigurableWebApplicationContext</span> cwac <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ConfigurableWebApplicationContext</span><span class="token punctuation">)</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>
            <span class="token comment">// \u5224\u65AD\u8FD9\u4E2A\u662F\u5426\u88AB\u542F\u52A8\u8FC7</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cwac<span class="token punctuation">.</span><span class="token function">isActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>cwac<span class="token punctuation">.</span><span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u4ECE5.0\u5F00\u59CB\uFF0CloadParentContext\u8FD4\u56DEnull</span>
                    <span class="token class-name">ApplicationContext</span> parent <span class="token operator">=</span> <span class="token function">loadParentContext</span><span class="token punctuation">(</span>servletContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    cwac<span class="token punctuation">.</span><span class="token function">setParent</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">// \u5728\u8BE5\u65B9\u6CD5\u4E2D\u8C03\u7528\u4E0A\u4E0B\u6587\u7684 refresh \u65B9\u6CD5\uFF0Crefresh \u5C31\u662F\u542F\u52A8\u4E0A\u4E0B\u6587\u7684\u5165\u53E3</span>
                <span class="token function">configureAndRefreshWebApplicationContext</span><span class="token punctuation">(</span>cwac<span class="token punctuation">,</span> servletContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5C06contextClass\u4FE1\u606F\u8BB0\u5F55\u5230servletContext\u4E2D</span>
        servletContext<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span>
            <span class="token class-name">WebApplicationContext</span><span class="token punctuation">.</span>ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h4 id="\u521B\u5EFA\u5E94\u7528\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5E94\u7528\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u521B\u5EFA\u5E94\u7528\u4E0A\u4E0B\u6587</h4><p>\u5728\u521B\u5EFA\u5E94\u7528\u4E0A\u4E0B\u6587\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u4F7F\u7528\u4E0A\u9762\u4EE3\u7801\u4E2D\u52A0\u8F7D\u7684\u9ED8\u8BA4\u7B56\u7565\u3002</p><p>\u4EE3\u7801\u5982\u4E0B\uFF08\u8FD9\u91CC\u53EA\u7C98\u4E86\u6838\u5FC3\u4EE3\u7801\uFF0C\u7701\u7565\u4E86\u4E00\u4E9Btry cache\u548C\u6821\u9A8C\u903B\u8F91\uFF09\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">WebApplicationContext</span> <span class="token function">createWebApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ServletContext</span> sc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u8981\u4F7F\u7528\u7684ApplicationContext\u7684\u7C7B\u578B\uFF0C\u5BF9\u5E94\u5230web.xml\u4E2D\u7684\u914D\u7F6EcontextClass\uFF0C\u9ED8\u8BA4\u4E3AXmlWebApplicationContext</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> contextClass <span class="token operator">=</span> <span class="token function">determineContextClass</span><span class="token punctuation">(</span>sc<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment">// \u5B9E\u4F8B\u5316</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">ConfigurableWebApplicationContext</span><span class="token punctuation">)</span> <span class="token class-name">BeanUtils</span><span class="token punctuation">.</span><span class="token function">instantiateClass</span><span class="token punctuation">(</span>contextClass<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">determineContextClass</span><span class="token punctuation">(</span><span class="token class-name">ServletContext</span> servletContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6context\u4E2D\u7684contextClass\u5C5E\u6027   \uFF08\u6807\u7B7E\u4E0B\uFF09</span>
    <span class="token class-name">String</span> contextClassName <span class="token operator">=</span> servletContext<span class="token punctuation">.</span><span class="token function">getInitParameter</span><span class="token punctuation">(</span>CONTEXT_CLASS_PARAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>contextClassName <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>contextClassName<span class="token punctuation">,</span> <span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token function">getDefaultClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u91CC\u52A0\u8F7D\u7684\u9ED8\u8BA4\u7B56\u7565\uFF0C\u5373XmlWebApplicationContext</span>
        contextClassName <span class="token operator">=</span> defaultStrategies<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token class-name">WebApplicationContext</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">ClassUtils</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>contextClassName<span class="token punctuation">,</span> <span class="token class-name">ContextLoader</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u5237\u65B0\u4E0A\u9650\u6587" tabindex="-1"><a class="header-anchor" href="#\u5237\u65B0\u4E0A\u9650\u6587" aria-hidden="true">#</a> \u5237\u65B0\u4E0A\u9650\u6587</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configureAndRefreshWebApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableWebApplicationContext</span> wac<span class="token punctuation">,</span> 
                                                        <span class="token class-name">ServletContext</span> sc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span><span class="token function">identityToString</span><span class="token punctuation">(</span>wac<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>wac<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// The application context id is still set to its original default value</span>
        <span class="token comment">// -&gt; assign a more useful id based on available information</span>
        <span class="token comment">// \u83B7\u53D6contextId\u5C5E\u6027</span>
        <span class="token class-name">String</span> idParam <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">getInitParameter</span><span class="token punctuation">(</span>CONTEXT_ID_PARAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>idParam <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            wac<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span>idParam<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u751F\u6210\u9ED8\u8BA4\u7684id</span>
            wac<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableWebApplicationContext</span><span class="token punctuation">.</span>APPLICATION_CONTEXT_ID_PREFIX <span class="token operator">+</span>
                      <span class="token class-name">ObjectUtils</span><span class="token punctuation">.</span><span class="token function">getDisplayString</span><span class="token punctuation">(</span>sc<span class="token punctuation">.</span><span class="token function">getContextPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/** wac \u9ED8\u8BA4\u7684\u5B9E\u4F8B\u662FXmlWebApplication, \u8BBE\u7F6EServletContext*/</span>
    wac<span class="token punctuation">.</span><span class="token function">setServletContext</span><span class="token punctuation">(</span>sc<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** contextConfigLocation \u662F\u7528\u6765\u914D\u7F6Espring\u7684\u914D\u7F6E\u6587\u4EF6\u7684*/</span>
    <span class="token class-name">String</span> configLocationParam <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">getInitParameter</span><span class="token punctuation">(</span>CONFIG_LOCATION_PARAM<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>configLocationParam <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        wac<span class="token punctuation">.</span><span class="token function">setConfigLocation</span><span class="token punctuation">(</span>configLocationParam<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u8FD9\u91CCget\u7684\u65F6\u5019\u4F1A\u9ED8\u8BA4\u521B\u5EFA\u4E00\u4E2AStandardEnvironment\u7C7B\u578B\u7684\u73AF\u5883bean\uFF0C\u5E76\u4E14\u662FConfigurableEnvironment\u7C7B\u578B</span>
    <span class="token class-name">ConfigurableEnvironment</span> env <span class="token operator">=</span> wac<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>env <span class="token keyword">instanceof</span> <span class="token class-name">ConfigurableWebEnvironment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableWebEnvironment</span><span class="token punctuation">)</span> env<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">initPropertySources</span><span class="token punctuation">(</span>sc<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">customizeContext</span><span class="token punctuation">(</span>sc<span class="token punctuation">,</span> wac<span class="token punctuation">)</span><span class="token punctuation">;</span>
    wac<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,24);function p(e,o){return t}var l=n(a,[["render",p],["__file","spring-source-web-init.html.vue"]]);export{l as default};