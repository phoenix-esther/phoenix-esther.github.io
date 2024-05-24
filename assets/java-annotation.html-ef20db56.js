const n=JSON.parse('{"key":"v-6cfb7c34","path":"/java/java-base/java-annotation.html","title":"深入理解Java注解类型(@Annotation)","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一、理解Java注解","slug":"一、理解java注解","link":"#一、理解java注解","children":[]},{"level":2,"title":"二、基本语法","slug":"二、基本语法","link":"#二、基本语法","children":[{"level":3,"title":"2.1 声明注解与元注解","slug":"_2-1-声明注解与元注解","link":"#_2-1-声明注解与元注解","children":[]},{"level":3,"title":"2.2 注解元素及其数据类型","slug":"_2-2-注解元素及其数据类型","link":"#_2-2-注解元素及其数据类型","children":[]},{"level":3,"title":"2.3 编译器对默认值的限制","slug":"_2-3-编译器对默认值的限制","link":"#_2-3-编译器对默认值的限制","children":[]},{"level":3,"title":"2.4 注解不支持继承","slug":"_2-4-注解不支持继承","link":"#_2-4-注解不支持继承","children":[]},{"level":3,"title":"2.5 快捷方式","slug":"_2-5-快捷方式","link":"#_2-5-快捷方式","children":[]},{"level":3,"title":"2.6 Java内置注解与其它元注解","slug":"_2-6-java内置注解与其它元注解","link":"#_2-6-java内置注解与其它元注解","children":[]}]},{"level":2,"title":"三、注解与反射机制","slug":"三、注解与反射机制","link":"#三、注解与反射机制","children":[]},{"level":2,"title":"四、运行时注解处理器","slug":"四、运行时注解处理器","link":"#四、运行时注解处理器","children":[]},{"level":2,"title":"五、Java 8中注解增强","slug":"五、java-8中注解增强","link":"#五、java-8中注解增强","children":[{"level":3,"title":"5.1 元注解@Repeatable","slug":"_5-1-元注解-repeatable","link":"#_5-1-元注解-repeatable","children":[]},{"level":3,"title":"5.2 新增的两种ElementType","slug":"_5-2-新增的两种elementtype","link":"#_5-2-新增的两种elementtype","children":[]}]}],"git":{"createdTime":1696594256000,"updatedTime":1697974777000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":3}]},"readingTime":{"minutes":19.35,"words":5806},"filePathRelative":"java/java-base/java-annotation.md","localizedDate":"2023年10月6日","excerpt":"<h1> 深入理解Java注解类型(@Annotation)</h1>\\n<p>java注解是在JDK5时引入的新特性，鉴于目前大部分框架(如Spring)都使用了注解简化代码并提高编码的效率，因此掌握并深入理解注解对于一个Java工程师是来说是很有必要的事。本篇我们将通过以下几个角度来分析注解的相关知识点</p>\\n<h2> 一、理解Java注解</h2>\\n<p>实际上Java注解与普通修饰符(public、static、void等)的使用方式并没有多大区别，下面的例子是常见的注解：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">AnnotationDemo</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//@Test注解修饰方法A</span>\\n    <span class=\\"token annotation punctuation\\">@Test</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token class-name\\">A</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Test.....\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token comment\\">//一个方法上可以拥有多个不同的注解</span>\\n    <span class=\\"token annotation punctuation\\">@Deprecated</span>\\n    <span class=\\"token annotation punctuation\\">@SuppressWarnings</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"uncheck\\"</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token class-name\\">B</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};