import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c,a as e,b as a,d,e as l}from"./app-e53dd85b.js";const t="/assets/2023112521000002-6992dcd5.png",r="/assets/2023112521000001-664aa72a.png",v="/assets/202310291000007-0590cfa2.png",u="/assets/202310291000001-3f3b485f.png",p="/assets/202310291000002-6639769a.png",m="/assets/202310291000003-8fca8196.jpg",b="/assets/202310291000004-137ead55.jpg",g="/assets/202310291000005-5c7568bd.jpg",h="/assets/202310291000006-b7ea2791.jpg",J="/assets/202310312000001-de246cd9.jpg",f="/assets/202310311000003-a5e06b2b.png",S="/assets/202310311000001-fd3d4bcf.jpg",x="/assets/202310311000002-0eac641d.jpg",q="/assets/202311011000001-f5f5290a.png",j="/assets/202311261000001-a8ae27db.png",E={},k=l('<h1 id="java-9-新特性总结" tabindex="-1"><a class="header-anchor" href="#java-9-新特性总结" aria-hidden="true">#</a> Java 9 新特性总结</h1><h2 id="java-9-新特性—概述" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—概述" aria-hidden="true">#</a> Java 9 新特性—概述</h2><blockquote><p>Java 9 发布于 2017 年 9 月 22 日。</p></blockquote><p><img src="'+t+'" alt="img"></p><h3 id="jep-261-模块系统" tabindex="-1"><a class="header-anchor" href="#jep-261-模块系统" aria-hidden="true">#</a> <strong>JEP 261: 模块系统</strong></h3><p>在传统的 Java 应用中，类路径的机制限制了封装性。即使类被标记为 <code>package-private</code>，也可以被同一个类路径中的其他任意代码访问。而且随着应用程序规模的增长，类路径依赖变得越来越复杂。</p><p>Java 为了能够改进大型应用程序和库的封装性、可维护性和性能，在 Java 9 版本引入模块系统。模块系统是 Java 平台架构的一次重大变革，它旨在解决长期以来 Java 应用所面临的一些结构性问题，特别是在大型系统和微服务架构中。</p><p>其主要内容是：</p><ul><li><strong>模块化 JDK</strong>：JDK 被划分为一系列的模块，使得可以只需要引入必需的 JDK 模块，减少了应用程序的体积。</li><li><strong>模块路径</strong>：取代了传统的类路径，用于指定模块的位置。</li><li><strong>模块声明</strong>：使用 <code>module-info.java</code> 文件来声明模块，指定模块所需的其他模块和模块导出的包。</li></ul><p>使用方法是：</p><p>新建模块后，我们就需要在 <code>module-info.java</code> 中定义模块信息了，信息主要包括如下几个部分：</p><ol><li>使用<code>module</code>关键字定义模块，并指定模块的名称，例如：<code>module java.module01 { }</code>。</li><li>使用<code>requires</code>关键字声明模块之间的依赖关系，例如：<code>requires java.sql;</code> 表示模块依赖于<code>java.sql</code>模块。</li><li>使用<code>exports</code>关键字声明模块中哪些包可以被其他模块访问，例如：<code>exports com.skjava.module01.entity;</code> 表示导出<code>com.skjava.module01.entity</code>包。</li></ol><p>模块化系统带来三大好处：</p><ol><li><strong>更好的封装性</strong>：允许我们封装内部实现，只暴露必要的 API，从而减少了意外的依赖。</li><li><strong>性能提升</strong>：模块化可以帮助 JVM 更高效地加载代码，提高启动速度和降低内存占用。</li><li><strong>更好的安全性</strong>：可以限制哪些模块可以访问 JDK 的特定部分，从而提高安全性。</li></ol>',14),y={href:"https://www.skjava.com/series/article/2044128092",target:"_blank",rel:"noopener noreferrer"},_=l('<h3 id="jep-269-集合工厂方法" tabindex="-1"><a class="header-anchor" href="#jep-269-集合工厂方法" aria-hidden="true">#</a> <strong>JEP 269: 集合工厂方法</strong></h3><p>在 Java 9 之前创建一个不可变集合通常涉及多个步骤，包括创建、填充和包装。Java 9 引入该特性旨在提供一种简洁、安全且不可变的方式来创建集合（List、Set、Map）。</p><p>其内容包括：</p><ul><li><code>List.of()</code>：创建一个不可变的 List，可以传递任意数量的元素。</li><li><code>Set.of()</code>：创建一个不可变的 Set，元素不可重复。</li><li><code>Map.of()</code> 和 <code>Map.ofEntries()</code>：用于创建一个不可变的 Map。<code>Map.of()</code> 可以直接传递键值对，而 <code>Map.ofEntries()</code> 可以通过 <code>Map.entry(k, v)</code> 创建条目。</li></ul>',4),T={href:"https://www.skjava.com/series/article/6358413511",target:"_blank",rel:"noopener noreferrer"},w=l('<h3 id="jep-222-jshell" tabindex="-1"><a class="header-anchor" href="#jep-222-jshell" aria-hidden="true">#</a> J<strong>EP 222</strong>：Jshell</h3><p>在传统的 Java 开发中，即使是为了运行一个简单的程序，也需要编写完整的类和方法，然后编译和运行，这种方式对初学者很不友好，而且也不利于想要快速验证算法或逻辑的需求。</p><p>所以，Java 9 引入 <code>Java Shell</code>，其目的是提供一个官方的 Java REPL，支持快速测试、探索和实验 Java 代码片段。</p><p>Java Shell，是一个交互式的 Java REPL（Read-Eval-Print Loop），即一个用于交互式地执行 Java 代码的命令行工具。它的主要特点是：</p><ul><li><strong>交互式执行</strong>：可以直接在命令行中输入并执行 Java 代码，无需创建完整的类文件。</li><li><strong>自动补全</strong>：支持代码自动补全，提高编码效率。</li><li><strong>临时变量和历史记录</strong>：自动为表达式的结果分配临时变量，并保存命令历史，方便回顾和修改。</li><li><strong>错误诊断</strong>：即使代码片段出错，JShell 也可以继续运行，提供错误信息帮助诊断问题。</li></ul><p>能带来三大好处：</p><ul><li><strong>提高效率</strong>：允许我们快速测试小片段的代码，而无需编写完整的应用程序。</li><li><strong>便于学习</strong>：为初学者提供了一个友好的环境，帮助他们理解 Java 语言的基础概念。</li><li><strong>快速原型验证</strong>：可以迅速验证想法和算法，加速开发过程。</li></ul>',7),C={href:"https://www.skjava.com/series/article/2132633297",target:"_blank",rel:"noopener noreferrer"},L=e("h3",{id:"jep-213-接口支持私有方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jep-213-接口支持私有方法","aria-hidden":"true"},"#"),a(" JEP 213：接口支持私有方法")],-1),P=e("p",null,"我们知道 Java 8 支持默认方法和静态方法，虽然提高了 Java 接口的灵活性和扩展性，但他们限制了接口的封装性和复用性。",-1),I=e("p",null,"为了提高接口的封装性和代码复用性，Java 9 支持在接口中定义私有方法和私有静态方法。",-1),O=e("ul",null,[e("li",null,[e("strong",null,"私有方法"),a("：可以在接口内部定义私有方法，以帮助实现默认方法或其他私有方法。")]),e("li",null,[e("strong",null,"私有静态方法"),a("：类似地，可以定义私有静态方法，用于辅助接口内部的静态方法。")])],-1),F=e("p",null,"引入接口私有方法，除了增强接口的封装性和代码复用外，还能够使接口的设计者可以更清晰地区分公共 API 和内部实现细节，从而提供更干净、更简洁的公共 API。",-1),R={href:"https://www.skjava.com/series/article/4535468349",target:"_blank",rel:"noopener noreferrer"},A=l('<h3 id="stream-api-增强" tabindex="-1"><a class="header-anchor" href="#stream-api-增强" aria-hidden="true">#</a> Stream API 增强</h3><p>Java 9 对 Stream API 新增了几个方法，这些方法使得 Stream 在处理数据流变得更加方便和强大了。</p><ol><li><code>takeWhile()</code>** **：允许从流的开始处理元素，直到给定的谓词返回 false。这在处理有序流时特别有用。</li><li><code>dropWhile()</code>** **：与 <code>takeWhile()</code> 相反，它从流的开始丢弃元素，直到谓词返回 false，然后处理剩余的元素。</li><li><code>ofNullable()</code>：用于创建单元素流，如果元素是 null，则返回一个空流，避免了 <code>NullPointerException</code>。</li><li><code>iterate()</code> 的新重载：在 Java 8 中，<code>iterate()</code> 方法是无限的。Java 9 添加了一个重载，允许你提供一个谓词作为终止条件，这样就可以创建有限的流。</li></ol>',3),M={href:"https://www.skjava.com/series/article/2547807010",target:"_blank",rel:"noopener noreferrer"},U=l('<h3 id="optional-的增强" tabindex="-1"><a class="header-anchor" href="#optional-的增强" aria-hidden="true">#</a> Optional 的增强</h3><p>Optional 是在 Java 8 中引入的，主要是用来解决 <code>NullPointerException</code> 的。Java 9 引入 3 个方法，进一步增强 Optional 的使用场景。</p><ol><li><code>stream()</code> ：允许将 <code>Optional</code> 对象转换为一个（最多只有一个元素的）流。这在将多个 <code>Optional</code> 对象组合到一个流中时特别有用。</li><li><code>ifPresentOrElse()</code>：这个方法允许执行一个操作，如果 <code>Optional</code> 包含值，则执行一个操作，否则执行另一个操作。这提供了类似于“if-else”语句的功能。</li><li><code>or()</code>：允许在当前的 <code>Optional</code> 为空时，提供一个替代的 <code>Optional</code>。这类似于 <code>orElse()</code> 和 <code>orElseGet()</code>，但返回的是 <code>Optional</code> 对象而不是值。</li></ol>',3),N={href:"https://www.skjava.com/series/article/1624717282",target:"_blank",rel:"noopener noreferrer"},D=l(`<h3 id="改进-try-with-resources" tabindex="-1"><a class="header-anchor" href="#改进-try-with-resources" aria-hidden="true">#</a> 改进 try-with-resources</h3><p><code>try-with-resources</code> 是在 Java 7 中引入的，它能够完成资源的自动管理，例如文件和套接字的关闭，但是它需要在 try 语句内部声明和初始化，尽管它已经在外部声明了，这导致了代码的重复和冗余。</p><p>Java 9 对其进行了一个小的改动：允许使用在 try 语句块外部声明的资源。这意味着如果资源已经是 final 或者 effectively final（即实际上没有被后续代码修改），就可以在 try-with-resources 语句中直接使用，而无需在 try 语句内再声明一个新的局部变量。例如：</p><ul><li>Java 7</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>BufferedReader reader = new BufferedReader(new FileReader(&quot;file.txt&quot;));
try (BufferedReader r = reader) {
    // 使用 reader
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Java 9</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>BufferedReader reader = new BufferedReader(new FileReader(&quot;file.txt&quot;));
try (reader) {
    // 使用 reader
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),W={href:"https://www.skjava.com/series/article/1487108972",target:"_blank",rel:"noopener noreferrer"},K=l(`<h3 id="jep-102-process-api" tabindex="-1"><a class="header-anchor" href="#jep-102-process-api" aria-hidden="true">#</a> JEP 102：Process API</h3><p>在 Java 9 之前，Java 提供的进程控制功能相对有限，很难直接获取关于系统进程的详细信息，也难以管理这些进程。这导致开发者需要依赖于特定平台的代码来完成这些任务，降低了代码的可移植性和易用性。</p><p>为了使 Java 应用能够更方便、更有效地管理和控制操作系统级别的进程，Java 9 引入 Process API，其目的是为了提供更好的控制和管理操作系统进程的能力，并使其在不同操作系统上的行为更加一致。其主要内容包括：</p><ul><li><strong>增强的 Process 类</strong>：Java 9 增强了 <code>Process</code> 类，提供了更多方法来管理和控制进程。</li><li><strong>ProcessHandle 接口</strong>：引入了 <code>ProcessHandle</code> 接口，它提供了获取进程的 PID（进程标识符）、父进程、子进程、进程状态等信息的能力。</li><li><strong>流式 API</strong>：利用流式 API，可以更方便地处理进程的信息和状态。</li></ul><p>下面是获取本地所有进程的相关信息：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void processHandleTest() {
        ProcessHandle.allProcesses() // 获取所有进程
                .forEach(processHandle -&gt; {
                    System.out.printf(&quot;Process ID: %s, Command: %s, Start Time: %s, User: %s%n&quot;,
                            processHandle.pid(),                                                  // 获取进程ID
                            processHandle.info().command().orElse(&quot;Unknown&quot;),               // 获取进程的命令信息
                            processHandle.info().startInstant()
                                    .map(i -&gt; i.toString()).orElse(&quot;Unknown&quot;),              // 获取进程的启动时间
                            processHandle.info().user().orElse(&quot;Unknown&quot;));                 // 获取运行进程的用户
                });

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果（部分）：</p><p><img src="`+r+`" alt="img"></p><h3 id="jep-264-平台日志-api-和-服务" tabindex="-1"><a class="header-anchor" href="#jep-264-平台日志-api-和-服务" aria-hidden="true">#</a> JEP 264：平台日志 API 和 服务</h3><p>在 Java 9 之前，JDK 内部使用了多种日志记录机制，比如 <code>System.out.println</code> 和 <code>java.util.logging</code>，这种方法缺乏统一性，使得维护和控制日志变得复杂。因此，需要一个统一的日志系统，使 JDK 自身的日志更加一致和可管理。</p><p>Java 9 引入该特性其主要目的是为 JDK 提供一个统一的日志系统，它能够通过不同的日志框架来捕获 JDK 内部的日志信息。这不仅简化了 JDK 自身的日志处理，也为开发者提供了更大的灵活性和控制力，使得他们能够更好地管理和监控 JDK 产生的日志信息。</p><p>主要内容：</p><ol><li><strong>新的日志API</strong>：引入了一组新的日志API，称为 <code>System.Logger</code> API，用于 JDK 内部日志记录。</li><li><strong>日志级别支持</strong>：支持不同的日志级别，例如 ERROR, WARNING, INFO, DEBUG, 和 TRACE。</li><li><strong>日志服务接口</strong>：定义了一个服务接口，允许替换JDK的日志记录系统，或者将其桥接到其他日志框架。</li></ol><p>下面代码是该日志 API 的示例：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void loggerTest() {
        System.Logger logger = System.getLogger(&quot;Java9Test&quot;);
        logger.log(System.Logger.Level.INFO, &quot;这是 INFO 级别&quot;);
        logger.log(System.Logger.Level.WARNING, &quot;这是 WARNING 级别&quot;);
        logger.log(System.Logger.Level.ERROR, &quot;这是 ERROR 级别&quot;);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它带来如下几个好处：</p><ol><li><strong>更好的日志管理</strong>：统一的API使日志管理变得更加简单和一致。</li><li><strong>灵活性和可扩展性</strong>：开发者可以根据需要选择不同的日志实现，提高了灵活性和可扩展性。</li><li><strong>更好的集成</strong>：使得JDK与现代日志框架（如 SLF4J, Log4j）之间的集成更加容易和无缝。</li></ol><h3 id="jep-266-反应式流-reactive-streams" tabindex="-1"><a class="header-anchor" href="#jep-266-反应式流-reactive-streams" aria-hidden="true">#</a> JEP 266: 反应式流（Reactive Streams）</h3><p>在传统的阻塞 IO 和同步处理模式中，处理大量数据流或异步操作时常常面临效率和响应性问题。反应式编程是一种更有效地处理异步数据流的编程范式。Java 9 之前，并没有标准的方式在 Java 中实现反应式编程。因此 Java 9 引入反应式流，其目的是提供一种在 Java 中处理异步数据流的标准方式，同时保证高效率、低延迟，并支持背压（back-pressure），即允许接收者控制数据流的速度，防止被快速生产的数据淹没。</p><p>主要内容为：</p><ul><li><p>引入了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>java.util.concurrent.Flow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类，它包含了几个嵌套的静态接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Publisher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Subscriber
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Subscription
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>和</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Processor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>。</p><ul><li><code>Publisher</code>：一个数据流的生产者。</li><li><code>Subscriber</code>：订阅 <code>Publisher</code> 并处理数据的消费者。</li><li><code>Subscription</code>：连接 <code>Publisher</code> 和 <code>Subscriber</code>，允许 <code>Subscriber</code> 控制数据流。</li><li><code>Processor</code>：充当生产者和消费者的中间人，即 <code>Publisher</code> 和 <code>Subscriber</code> 的组合。</li></ul></li></ul><h3 id="jep-224-html5-javadoc" tabindex="-1"><a class="header-anchor" href="#jep-224-html5-javadoc" aria-hidden="true">#</a> JEP 224: HTML5 Javadoc</h3><p>在 Java 9 之前，Javadoc 主要使用较老的 HTML 4 格式。随着 Web 标准的发展，特别是 HTML5 的普及，有必要更新 Javadoc 以支持更现代的 Web 技术和标准。</p><p>Java 9 引入 HTML5 Javadoc，主要目的是将 Javadoc 文档更新为使用 HTML5，从而提高文档的兼容性、可用性和可访问性。这包括支持更多现代浏览器的特性，提供更好的布局和样式，以及改善搜索功能。</p><h3 id="jep-238-多版本兼容-jar-文件" tabindex="-1"><a class="header-anchor" href="#jep-238-多版本兼容-jar-文件" aria-hidden="true">#</a> JEP 238: 多版本兼容 JAR 文件</h3><p>在 Java 9 之前，一个 JAR 文件只能包含针对一个特定 Java 版本编译的类文件。随着 Java 平台的不断发展和版本的迭代，这限制了库和应用程序在不同 Java 版本间的兼容性。</p><p>Java 9 引入该特性的主要目的是提供一种机制，使得库开发者可以在单个 JAR 文件中包含针对不同 Java 版本编译的类文件。这样，应用程序可以在不同的 Java 运行时环境中运行，而无需更改或重新打包。</p><h3 id="jep-277-改进的弃用注解-deprecated" tabindex="-1"><a class="header-anchor" href="#jep-277-改进的弃用注解-deprecated" aria-hidden="true">#</a> JEP 277：<strong>改进的弃用注解 @Deprecated</strong></h3><p><code>@Deprecated</code> 注解用于标记过时的 API，但它并没有提供关于 API 为何过时、何时过时以及替代方案等信息。这导致开发者在使用或维护这些 API 时缺乏足够的信息。Java 9 对其进行了改进，增加了两个的属性：</p><ul><li><code>since</code> 属性用于指明从哪个版本开始 API 被弃用。</li><li><code>forRemoval</code>：指出这个 API 是否计划在未来的版本中被移除。</li></ul><p>该项特性可以让开发者能够更清晰地了解 API 的状态和未来规划，比如是否继续使用该 API、寻找替代方案。</p><h3 id="jep213-改进钻石操作符-diamond-operator" tabindex="-1"><a class="header-anchor" href="#jep213-改进钻石操作符-diamond-operator" aria-hidden="true">#</a> JEP213：<strong>改进钻石操作符(Diamond Operator)</strong></h3><p>在 Java 7 中引入的钻石操作符简化了泛型实例的创建，但它不能用于匿名内部类。由于这个限制，开发者不得不在使用匿名内部类时指定泛型参数，这增加了代码的冗余和复杂性。</p><p>在 Java 9 中改进了钻石操作符，它可以与匿名内部类一起使用。这意味着当我们在创建一个匿名内部类的实例，并且该类具有泛型参数时，我们可以省略这些参数，Java 编译器会根据上下文推断出正确的类型。</p><h3 id="增强-completablefuture" tabindex="-1"><a class="header-anchor" href="#增强-completablefuture" aria-hidden="true">#</a> 增强 CompletableFuture</h3><p><code>CompletableFuture</code> 是在 Java 8 中引入的，它是一个非常强大的用于异步编程的工具，但是在实际使用过程中，发现它还有一些改进空间。故而，Java 9 对其进行了一些增强，内容如下：</p><ul><li>新增方法 <ul><li><code>completeAsync()</code>：允许异步地完成 <code>CompletableFuture</code>。它受一个 <code>Supplier</code> 函数和可选的 <code>Executor</code>，用于异步生成结果。</li><li><code>orTimeout()</code>：为 <code>CompletableFuture</code> 添加超时功能。如果在指定的时间内未完成，<code>CompletableFuture</code> 将会被异常地完成。</li><li><code>completeOnTimeout()</code>：类似于 <code>orTimeout()</code>，但在超时发生时，它会使用提供的值来完成 <code>CompletableFuture</code>，而不是抛出异常。</li></ul></li><li>改进异常处理 <ul><li><code>exceptionallyCompose()</code>：它允许在 <code>CompletableFuture</code> 遇到异常时，构建并返回一个新的 <code>CompletionStage</code>，这为异常处理提供了更多的灵活性。</li></ul></li><li>增强的组合操作 <ul><li><code>delayedExecutor()</code>: 这是一个工具方法，用于创建一个延迟执行任务的 <code>Executor</code>。它可以和其他 <code>CompletableFuture</code> 方法结合使用，实现延迟执行的效果。</li><li><code>minimalCompletionStage()</code>** 和 **<code>completeMinimalFuture()</code>: 这两个方法分别用于创建一个具有最小完成状态的 <code>CompletionStage</code>，以及从 <code>CompletionStage</code> 创建一个 <code>CompletableFuture</code>。这些方法有助于在不需要 <code>CompletableFuture</code> 完整功能的场景中减少资源消耗。</li></ul></li></ul><h2 id="java-9-新特性—模块化" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—模块化" aria-hidden="true">#</a> Java 9 新特性—模块化</h2><p>Java 9 中最大的特性毫无疑问就是模块化，其实模块化的概念在 Java 7 的时候就已经提出来了，由于它的复杂性，不断跳票，从 Java 7 到 Java 8 ，最后 Java 9终于姗姗来迟，它的出现犹如壮士断腕。</p><p>那模块化到底是什么呢？在实际开发中又有什么用呢？这篇文章大明哥带你彻底了解 Java 9 的模块化。</p><p><img src="`+v+'" alt="img"></p><h3 id="什么是模块化" tabindex="-1"><a class="header-anchor" href="#什么是模块化" aria-hidden="true">#</a> 什么是模块化</h3><p>模块是 Java 9 中新增的一个组件，官方是这么定义它的：**一个被命名的，代码和数据的自描述集合。（ the module, which is a named, self-describing collection of code and data）。**怎么理解呢？我们可以简单地将它理解为 <code>package</code> 的上一级单位，是多个 <code>package</code> 的集合。</p><p>我们知道在 <code>Java</code> 中， <code>Java</code> 文件是最小的可执行文件，为了更好地管理这些 <code>Java</code> 文件，我们需要用 <code>package</code> 将同一类的 <code>Java</code> 文件统一管理起来，多个 <code>package</code> 文件、<code>Java</code> 文件可以打包成一个 <code>jar</code> 文件，现在 Java 9 在 <code>package</code> 上面增加 <code>module</code>，一个 <code>module</code> 可以包含多个 <code>package</code>，所以从代码结构上来看层级关系是这样的：<code>jar &gt; module &gt; package &gt; java 文件</code>。</p><p>所以，从本质上来说，模块就是用来管理各个 <code>package</code> 的组件，它的概念，其实就可以理解为在 <code>package</code> 上面再包一层，包这一层的主要目的是让我们能够更好地组织和管理 <code>Java</code> 应用程序的代码，以及更好地控制代码的可见性和依赖关系。</p><p>要掌握模块化，就需要理解它的几个核心概念：</p><ol><li>模块（<code>Module</code>）：模块是模块化系统的基本单元。它是一个逻辑上独立的代码单元，包括类、接口、资源和<code>module-info.java</code>文件。每个模块都有一个唯一的名称，例如：&quot;<code>java.base</code>&quot;、&quot;<code>com.example.myapp</code>&quot;等。</li><li>模块路径（<code>Module Path</code>）：模块路径是一组包含模块的路径，用于在运行时指定应用程序所需的模块。类似于类路径，但它是用于模块。</li><li><code>module-info.java</code> 文件：每个模块都包含一个特殊的文件，名为<code>module-info.java</code>。这个文件描述了模块的信息，包括模块名称、依赖关系、导出的包以及其他模块信息。</li><li>模块依赖性（<code>Module Dependencies</code>）：在<code>module-info.java</code>文件中，可以使用<code>requires</code>关键字声明模块之间的依赖关系。</li><li>模块导出（<code>Module Exporting</code>）：在<code>module-info.java</code>文件中，可以使用 <code>exports</code> 关键字声明哪些包可以被其他模块访问，这有助于控制包的可见性。</li></ol><p>模块化怎么体现的呢？下图是 Java 8 与Java 9 的目录结构：</p><p><img src="'+u+'" alt="img"></p><p><img src="'+p+'" alt="img"></p><p>从上图中你会发现 Java 9 中没有<code>jre</code>，没有<code>rt.jar</code>，没有<code>tools.jar</code>，而是多了一个 <code>jmods</code>，该文件夹下都是一个一个的模块：</p><p><img src="'+m+'" alt="img"></p><p>对于 Java 9 之前的工程，他们都是单体模式，一个简单的 hello world，都需要引入 <code>rt.jar</code>，导致这个简单的 hello world 的 jar 变得很大，而 Java 9 引入模块后，它只需要引入它所依赖的即可。</p><h3 id="为什么需要模块化" tabindex="-1"><a class="header-anchor" href="#为什么需要模块化" aria-hidden="true">#</a> 为什么需要模块化</h3><p>在 Java 9 之前我们没有使用模块化之前用起来还是很顺手的，现在突然在 <code>package</code> 上面增加一层 <code>module</code>，势必会增加我们编码的复杂度，既然增加了复杂度为什么还要引入呢？其实引入模块化有着几个非常好的优势。</p><blockquote><p><strong>1、显式管理依赖</strong></p></blockquote><p>模块化系统需要我们明确申请模块之间的依赖关系，它减少了传统类路径（classpath）上的混乱和不稳定性。每个模块都需要显示声明自己需暴露的 <code>package</code>，而自己所依赖的和自己内部使用的 package，则不会暴露，也不会被外部依赖，这有助于保护内部实现，防止不应该公开的部分被外部模块访问。依赖的模块也需要显示引入需要依赖的 <code>package</code>。</p><blockquote><p><strong>2、更好地安全性</strong></p></blockquote><p>模块化系统可以提供更严格的可见性控制，防止私有实现被不应访问的模块访问，从而增强了应用程序的安全性。代码真正意义上可以按照作者的设计思路进行公开和隐藏，同时也限制了反射的滥用，更好的保护了那些不建议被外部直接使用或过时的内部类。</p><blockquote><p><strong>3、标准化</strong></p></blockquote><p>模块化引入了标准化的方式来组织和管理代码。显示的声明暴露的内容，可以让第三方库的开发者更好地管理自己的内部实现逻辑和内部类。</p><blockquote><p><strong>4、自定义最小运行时映像</strong></p></blockquote><p>Java因为其向后兼容的原则，不会轻易对其内容进行删除，包含的陈旧过时的技术也越来越多，导致<code>JDK</code>变得越来越臃肿。而Java 9的显示依赖管理使得加载最小所需模块成为了可能，我们可以选择只加载必须的<code>JDK</code>模块，抛弃如<code>java.awt</code>, <code>javax.swing</code>,<code> java.applet</code>等这些用不到的模块。这种机制，大大的减少了运行<code>Java</code>环境所需要的内存资源，在对于嵌入式系统开发或其他硬件资源受限的场景下的开发非常有用。</p><blockquote><p><strong>5、更加适合大型应用程序管理</strong></p></blockquote><p>于大型应用程序，模块化系统提供更好的组织结构，减少了复杂性，使开发者能够更轻松地管理和扩展应用程序。</p><blockquote><p><strong>6、更好的性能</strong></p></blockquote><p>通过减少不必要的类路径搜索和提供更紧凑的部署单元，模块化系统有助于提高应用程序的性能。</p><h3 id="怎么用模块化" tabindex="-1"><a class="header-anchor" href="#怎么用模块化" aria-hidden="true">#</a> 怎么用模块化</h3><p>使用 Java 9 的模块化主要分为以下几个步骤。</p><blockquote><p><strong>1、创建模块</strong></p></blockquote><p>创建一个 <code>module</code>，<code>module</code> 下面包含该模块的代码和 <code>module-info.java</code>文件。<code>module-info.java</code>文件是每个模块的关键组成部分，它描述了模块的信息，包括名称、依赖关系和导出的包。</p><p>这里我们新建两个 <code>module</code>：<code>java-module-01</code> 和 <code>java-module-02</code>，同时 <code>java-module-01</code> 依赖 <code>java-module-02</code>，如下：</p><p><img src="'+b+'" alt="img"></p><p>这里可能有小伙伴不知道怎么新建 <code>module-info.java</code>，其实只需要在 <code>java</code> 下面右键 <code>new</code> 就可以了：</p><p><img src="'+g+'" alt="img"></p><p>如果这里没有，则表示你 <code>module</code> 的 <code>jdk</code> 没有配置好，配置下就可以了：</p><p><img src="'+h+`" alt="img"></p><blockquote><p><strong>2、定义模块信息</strong></p></blockquote><p>新建模块后，我们就需要在 <code>module-info.java</code> 中定义模块信息了，信息主要包括如下几个部分：</p><ol><li>使用<code>module</code>关键字定义模块，并指定模块的名称，例如：<code>module java.module01 { }</code>。</li><li>使用<code>requires</code>关键字声明模块之间的依赖关系，例如：<code>requires java.sql;</code> 表示模块依赖于<code>java.sql</code>模块。</li><li>使用<code>exports</code>关键字声明模块中哪些包可以被其他模块访问，例如：<code>exports com.skjava.module01.entity;</code> 表示导出<code>com.skjava.module01.entity</code>包。</li></ol><p>我们在 <code>java-module-02</code> 定义了 <code>com.skjava.module02.entity</code> 和 <code>com.skjava.module02.service</code> 两个包，同时将 <code>com.skjava.module02.entity</code> 暴露出去：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>module java.module02 {
    exports com.skjava.module02.entity;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>entity package</code> 新建 <code>UserEntity</code> 类，<code>service package</code> 中新建 <code>UserService</code> 接口：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class UserEntity {
    private String userName;

    private Integer age;

    public UserEntity(String userName,Integer age) {
        this.userName = userName;
        this.age = age;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们在 <code>java-module-01</code> 中不申请引入模块 <code>java.module02</code>，我们是无法使用 <code>UserEntity</code> 这个类的。所以我们在 <code>java-module-01</code> 中的 <code>module-info.java</code> 引入 <code>java.module02</code>：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>module java.module01 {
    requires java.module02;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们就可以放心地在 <code>java-module-01</code> 中使用 <code>com.skjava.module02.entity</code> 的内容了：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import com.skjava.module02.entity.UserEntity;

public class UserService {
    public static void main(String[] args) {
        UserEntity user = new UserEntity(&quot;大明哥&quot;,18);
        System.out.println(user);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看 UserEntity 导入的包是不是 <code>com.skjava.module02.entity</code>。那可以使用 <code>com.skjava.module02.service</code> 中的 UserService 呢？不可以，因为 <code>java-module-02</code> 并没有将 <code>com.skjava.module02.service</code> 暴露出去。</p><p>这里只是阐述一种比较简单的使用方式，在实际项目中使用情况会更加复杂，这些都需要我们在工作过程中不断地去探索。</p><h2 id="java-9-新特性—repl-工具-jsheel-命令" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—repl-工具-jsheel-命令" aria-hidden="true">#</a> Java 9 新特性—REPL 工具：JSheel 命令</h2><p>熟悉 <code>Python</code> 和 <code>Scala</code> 之类的语言的小伙伴应该知道，他们在很早就已经有了交互式编程环境 <code>REPL</code>（<code>Read-Eval-Print Loop</code>），<code>REPL</code> 以交互式的方式对语句和表达式进行求值。<code>REPL</code> 提供了一个交互式的方式，允许开发人员输入代码，立即执行它，无需编译，然后查看执行结果。</p><p>Java 在 Java 9 引入 Java 版的 <code>REPL</code> 工具：<code>Java Shell</code>。</p><h3 id="什么是-jshell" tabindex="-1"><a class="header-anchor" href="#什么是-jshell" aria-hidden="true">#</a> 什么是 JShell</h3><p><code>Java Shell</code> 是 Java 在 Java 9 中引入的一个交互式编程工具，它可以让开发人员能够在一个命令行界面即时编写、编辑和执行Java代码片段，而无需创建和编译传统的Java源代码文件。</p><p><code>JShell</code>的目的是提供一个更快速、更便捷的方式来学习和测试Java代码，以及进行原型设计和实验性编程。它主要有如下几个特点：</p><ol><li><strong>即时反馈</strong>：可以立即查看代码的输出，不需要等待编译和运行整个Java应用程序。</li><li>**代码片段：**您可以编写单个Java表达式、语句或方法，并在<code>JShell</code>中立即执行它们。这对于测试和验证代码的特定部分非常有用。</li><li><strong>自动导入</strong>：<code>JShell</code>自动导入常见的Java类和包，因此您无需手动导入它们，使代码编写更加简洁。</li><li><strong>脚本化</strong>：我们可以将多个命令保存在脚本文件中，并使用<code>JShell</code>执行这些脚本。</li></ol><p><code>JShell</code> 通常用于教学、快速原型设计和测试，以及在 Java 开发中进行快速的探索性编程，但是它不适用于开发大型的Java应用程序。</p><h3 id="为什么需要使用-jshell" tabindex="-1"><a class="header-anchor" href="#为什么需要使用-jshell" aria-hidden="true">#</a> 为什么需要使用 <strong>JShell</strong></h3><p>我们先看我们以前刚刚学习 Java 时写的第一个 <code>hello world</code> 的程序步骤：</p><ol><li>打开 idea，并新建一个 <code>java-study</code> 的工程</li><li>配置该工程的 Java 环境</li><li>新建一个 <code>hello world</code> 的 Java 类</li><li>编译 Java 文件，并修复各种问题</li><li>运行程序</li></ol><p>该步骤比较繁琐，而使用 <code>JShell</code> 工具，我们可以一次输入一个程序元素，立即看到执行结果，并根据需要进行调整。</p><p><code>JShell</code>对于初学者非常有用，因为它允许开发者快速编写和测试 Java 代码片段，无需担心完整项目结构和编译过程。这有助于新手更容易地理解 Java 语言的基础概念。同时由于不需要创建完整的应用程序，这可以加速原型设计过程，帮助我们更快地验证概念。</p><blockquote><p>但是 <code>JShell</code> 不能代替 IDE，它只能作为辅助和便捷的工具而已。</p></blockquote><h3 id="使用-jshell" tabindex="-1"><a class="header-anchor" href="#使用-jshell" aria-hidden="true">#</a> 使用 <strong>JShell</strong></h3><p>要使用 <code>JShell</code> 必须安装 JDK 9 或更高版本。</p><blockquote><p>启动 <code>JShell</code></p></blockquote><p>使用 jshell 命令即可启动 <code>JShell</code>，如果启动不了，可能是环境变量配置配置好，可以进入“ <code>bin</code> ”目录，通过该命令启动 <code>JShell</code>。</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code> chenssy@chenssydeMacBook-Pro  ~  jshell
|  欢迎使用 JShell -- 版本 17.0.8
|  要大致了解该版本, 请键入: /help intro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动 <code>JShell</code> 我们就可以在该窗口测试代码了。</p><p>在 JShell 中我们可以直接<strong>声明变量</strong>、<strong>创建方法</strong>、<strong>调用方法</strong>：</p><blockquote><p><strong>声明变量</strong></p></blockquote><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>jshell&gt; int a = 1;
a ==&gt; 1

jshell&gt; int b = 2;
b ==&gt; 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里声明了两个变量 a 和 b。</p><blockquote><p><strong>创建方法</strong></p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>jshell&gt; int add(int x,int y) {
   ...&gt;     return x + y;
   ...&gt; }
|  已创建 方法 add(int,int)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建了一个 <code>add()</code> 方法；</p><blockquote><p><strong>调用方法</strong></p></blockquote><p>我们可以直接利用上面的变量a 、b 来调用 <code>add()</code>:</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>jshell&gt; int c = add(a,b)
c ==&gt; 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>运行表达式</strong></p></blockquote><p><code>JShell</code> 还可以直接输入 Java 表达式，计算出表达式的结果，然后返回。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>jshell&gt; 1 + 2
$6 ==&gt; 3

jshell&gt; 1 &gt; 2 ? &quot;死磕 Java 并发&quot; : &quot;死磕 Java 新特性&quot;
$7 ==&gt; &quot;死磕 Java 新特性&quot;

jshell&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>创建 Java 类</strong></p></blockquote><p><code>JShell</code> 可以新建 Java 类，然后调用它。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>jshell&gt; public class SKTest{
   ...&gt;     public void test(){
   ...&gt;         System.out.println(&quot;死磕 Java 就是牛&quot;);
   ...&gt;     }
   ...&gt; }
|  已创建 类 SKTest

jshell&gt; SKTest skTest = new SKTest();
skTest ==&gt; SKTest@17a7cec2

jshell&gt; skTest.test();
死磕 Java 就是牛
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>定义接口</strong></p></blockquote><p>我们还可以定义接口，并实现它。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>jshell&gt; public interface UserService{
   ...&gt;     void test();
   ...&gt; }
|  已创建 接口 UserService

jshell&gt; public class UserServiceImpl implements UserService{
   ...&gt;     public void test(){
   ...&gt;         System.out.println(&quot;死磕 Java 新特性就是牛...&quot;);
   ...&gt;     }
   ...&gt; }
|  已创建 类 UserServiceImpl

jshell&gt; UserService userService = new UserServiceImpl();
userService ==&gt; UserServiceImpl@4783da3f

jshell&gt; userService.test();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他的情况大明哥就不一一介绍了，个人感觉这个工具还是显得有点儿鸡肋，比如你新建一个类，语法错了需要重新写，这就很鸡肋了，不过 Mac book 的 iTerm 倒是可以回退整块语句，也算方便了不少。</p><h3 id="jshell-的主要命令" tabindex="-1"><a class="header-anchor" href="#jshell-的主要命令" aria-hidden="true">#</a> JShell 的主要命令</h3><p>JShell 提供了一系列主要命令，用于在交互式环境中执行各种任务和操作。以下表格是一些常用的命令：</p><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td><code>/help</code> (或 <code>/?</code>)</td><td>查看可用命令的帮助信息，或获取特定命令的详细信息。</td></tr><tr><td><code>/list</code> (或 <code>/l</code>)</td><td>列出当前已经输入的代码片段。</td></tr><tr><td><code>/edit</code> (或 <code>/e</code>)</td><td>编辑以前输入的代码片段。</td></tr><tr><td><code>/drop </code>(或<code> /d</code>)</td><td>删除以前输入的代码片段。</td></tr><tr><td><code>/save </code>(或 <code>/s</code>)</td><td>将当前会话中的代码保存到文件中。</td></tr><tr><td><code>/open</code> (或<code>/o</code>)</td><td>从文件中加载代码以继续会话。</td></tr><tr><td><code>/reset</code></td><td>重置<code>JShell</code>环境，清除所有已输入的代码片段。</td></tr><tr><td><code>/vars</code> (或 <code>/v</code>)</td><td>查看当前定义的所有变量。</td></tr><tr><td><code>/methods</code> (或 <code>/m</code>)</td><td>查看当前定义的所有方法。</td></tr><tr><td><code>/types</code> (或 <code>/t</code>)</td><td>查看当前定义的所有类型。</td></tr><tr><td><code>/imports</code> (或<code>/i</code>)</td><td>查看当前导入的包和类。</td></tr><tr><td><code>/set</code> (或 <code>/s</code>)</td><td>设置<code>JShell</code>的各种选项，如类路径、编辑器、输出格式等。</td></tr><tr><td><code>/classpath</code> (或 <code>/cp</code>)</td><td>查看或设置类路径，以便加载外部类和库。</td></tr><tr><td><code>/history </code>(或 <code>/h</code>)</td><td>查看和搜索<code>JShell</code>历史记录。</td></tr><tr><td><code>/save</code> (或 <code>/s</code>)</td><td>将<code>JShell</code>历史记录保存到文件中，以便将其用于以后的会话。</td></tr></tbody></table><h2 id="java-9-新特性—接口支持私有方法" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—接口支持私有方法" aria-hidden="true">#</a> Java 9 新特性—接口支持私有方法</h2><p>从我们一接触接口开始我们就知道 Java Interface 接口中是不能定义 private 私有方法的，但是这个在 Java 9 中被打破了。</p><p>为了减少代码重复，提高代码的可维护性，Java 9 接口支持私有方法，这样做有几个好处：</p><ol><li><strong>接口更好地演化</strong>：在不破坏现有实现的前提下，我们可以向接口中添加默认方法，这是接口演化的一种方式。然后，如果默认方法之间有重复代码，就会导致代码容易重复。在接口中定义私有方法，可以将这些重复的代码抽离出来，使接口更容易维护和扩展。</li><li><strong>代码复用</strong>：将重复的，通用的功能封装在私有方法中，私有方法可以被接口中的其他方法调用，这有助于减少代码重复和提高代码的可维护性。</li><li><strong>防止子类滥用</strong>：由于私有方法只能在接口内部使用，无法在接口的实现类中被滥用，这有助于保持接口的一致性和约定。</li></ol><p>在接口中使用私有方法有如下几个限制：</p><ol><li>接口私有方法不能是抽象的。</li><li>私有方法只能在接口内部使用，无法被接口的实现类或外部类访问。</li><li>私有方法不会继承给接口的子接口，每个接口都必须自己定义自己的私有方法。</li><li>私有静态方法可以在其他静态和非静态接口方法中使用。</li><li>私有非静态方法不能在私有静态方法内部使用。</li></ol><p>下面演示下怎么在接口中使用私有方法。</p><p>定义接口 <code>MyInterface</code>：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface MyInterface {

    /**
     * 抽象方法
     */
    void publicMethod();

    /**
     * 默认方法
     */
    default void defaultMethod() {
        System.out.println(&quot;defaultMethod&quot;);

        // 调用静态方法
        privateMethod();

        // 调用私有静态方法
        privateStaticMethod();
    }

    /**
     * 静态方法
     */
    private void privateMethod() {
        System.out.println(&quot;privateMethod&quot;);
    }

    /**
     * 静态方法
     */
    static void staticMethod() {
        System.out.println(&quot;staticMethod&quot;);

        // 调用私有静态方法
        privateStaticMethod();
    }

    /**
     * 私有静态方法
     */
    private static void privateStaticMethod() {
        System.out.println(&quot;privateStaticMethod&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现类：<code>MyInterfaceImpl</code>：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MyInterfaceImpl implements MyInterface {
    @Override
    public void publicMethod() {
        System.out.println(&quot;publicMethod&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Test {
    public static void main(String[] args) {
        // 调用实例方法
        MyInterface myInterface = new MyInterfaceImpl();
        myInterface.publicMethod();
        
        // 调用默认方法
        System.out.println(&quot;&quot;);
        myInterface.defaultMethod();

        // 调用静态方法
        System.out.println(&quot;&quot;);
        MyInterface.staticMethod();
    }
}

// 结果......
publicMethod

defaultMethod
privateMethod
privateStaticMethod

staticMethod
privateStaticMethod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>通过引入私有方法，Java 9 增强了接口的功能，使其更加灵活，能够更好地满足不同的编程需求，特别是在接口的演化和维护方面提供了更多的选项。这有助于减少代码重复，提高代码的可维护性，并使接口的设计更加清晰和一致。</p></blockquote><h2 id="java-9-新特性—string-底层存储结构变更" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—string-底层存储结构变更" aria-hidden="true">#</a> Java 9 新特性—String 底层存储结构变更</h2><p>大明哥相信绝大数小伙伴一定看过 Java 8 的 <code>String</code> 源码，对于它的底层存储结构一定不陌生，在 Java 9 之前，<code>String</code> 的底层存储结构都是 <code>char[]</code>：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public final class String
     implements java.io.Serializable, Comparable&lt;String&gt;, CharSequence {

  //The value is used for character storage.
  private final char value[];

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个 <code>char</code> 都以 2 个字节存储在内存中。然而 Oracle 的 JDK 开发人员调研了成千上万个应用程序的 <code>heap dump</code> 信息，他们注意到大多数字符串都是以 <code>Latin-1</code> 字符编码表示的，它只需要一个字节存储就够了，两个字节完全是浪费，这比 <code>char</code> 数据类型存储少 50%（1 个字节）。</p><p>所以，在 Java 9 中将 <code>String</code> 的底层存储结构调整为 <code>byte[]</code>:</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public final class String
    implements java.io.Serializable, Comparable&lt;String&gt;, CharSequence,
               Constable, ConstantDesc {

    @Stable
    private final byte[] value;

    private final byte coder;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 9 这样调整的目的是减小字符串的内存占用，这样带来了两个好处：</p><ol><li><strong>节省内存</strong>：对于包含大量<code>ASCII</code>字符的字符串，内存占用大幅减少，因为每个字符只占用一个字节而不是两个字节。</li><li><strong>提高性能</strong>：由于字符串的存储结构与编码方式更加紧凑，字符串操作的性能也有所提高。</li></ol><p>需要注意的是，这仅仅只是底层数据结构的变化，对于我们上层调用者完全是透明的，不会有任何影响，<code>String</code> 的方法以前怎么使用，现在还是怎么使用，例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class StringTest {
    public static void main(String[] args) {
        String skString1 = &quot;skjava&quot;;
        String skString2 = &quot;死磕Java&quot;;
        System.out.println(skString1.charAt(0));
        System.out.println(skString2.charAt(0));
    }
}
// 结果......
s
死
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>charAt()</code> 源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public char charAt(int index) {
        if (isLatin1()) {
            return StringLatin1.charAt(value, index);
        } else {
            return StringUTF16.charAt(value, index); 
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>isLatin1()</code> 用于判断编码格式是否为 <code>Latin-1</code> 字符编码，如果是则调用 <code>StringLatin1.charAt()</code>，否则调用 <code>StringUTF16.charAt()</code>。这里为什么要判断字符编码呢？<code>Latin-1</code> 字符编码也称 <code>ISO 8859-1</code>，它包括了拉丁字母（包括西欧、北欧和南欧语言的字母）以及一些常见的符号和特殊字符，但是它并不支持其他非拉丁字母的语言，例如希腊语、俄语或中文，对于这些我们只能使用其他字符编码了。</p><p>在 Java 9 中，<code>String</code> 支持的字符编码格式有两种：</p><ol><li><code>Latin-1</code>：<code>Latin-1</code> 编码用于存储只包含拉丁字符的字符串。它采用了一字节编码，每个字符占用一个字节（8位）。</li><li><code>UTF-16</code>：<code>UTF-16</code> 编码用于存储包含非拉丁字符的字符串，以及当字符串包含不适合 <code>Latin-1</code> 编码的字符时。</li></ol><p>在 Java 9 中，<code>String</code> 多了一个成员变量 <code>coder</code>，它代表编码的格式，0 表示 <code>Latin-1</code> ，1 表示 <code>UTF-16</code>，我们在看 <code>skString1</code> 和 <code>skString2</code>：</p><p><img src="`+J+'" alt="img"></p><p>从这张图可以清晰地看到 <code>“skjava”</code> 的字符编码是 <code>Latin-1</code>，而 <code>“死磕Java”</code> 的字符编码则是 <code>UTF-16</code>。不同的字符编码选择不同的方法来获取。其实你看下 String 里面的方法都是这种模式。</p><blockquote><p><strong>所以，Java 9 中的 String 使用 *<em>**<code>Latin-1</code>**</em>* 和 *<em>**<code>UTF-16</code>**</em>* 两种字符编码方式，根据字符串的内容来选择合适的编码格式，以便在内部存储时提高效率。</strong></p></blockquote><p>但是，有小伙伴就喜欢硬扛，我就不喜欢 <code>Latin-1</code>，可以完全用<code>UTF-16</code> 么 ？可以。Java 满足你的一切不合理的要求。</p><blockquote><p><code>-XX:-CompactStrings</code><strong>：禁用精简字符串特性</strong>。</p></blockquote><ol><li>如果启用 <code>Compact Strings</code>（默认情况），JVM 会根据字符串的内容来选择 <code>Latin-1</code> 还是 <code>UTF-16</code>，以在内存中有效地存储字符串，减小内存占用。</li><li>如果禁用 <code>Compact Strings</code>（使用 <code>-XX:-CompactStrings</code>），JVM 将始终使用 <code>UTF-16</code> 编码来存储字符串。</li></ol><p>一般来说，我们是不需要显式设置 <code>-XX:-CompactStrings</code>，开启 <code>Compact Strings</code> 能够帮组我们节约内存和提高性能。</p><h2 id="java-9-新特性—optional-的增强" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—optional-的增强" aria-hidden="true">#</a> Java 9 新特性—Optional 的增强</h2>',171),B={href:"https://www.skjava.com/series/article/1810194665",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"Optional",-1),X=e("code",null,"NullPointerException",-1),V=l(`<ul><li><code>or()</code></li><li><code>ifPresentOrElse()</code></li><li><code>stream()</code></li></ul><p>下面就一一介绍这三个方法。</p><h3 id="or" tabindex="-1"><a class="header-anchor" href="#or" aria-hidden="true">#</a> or()</h3><p><code>or()</code> 方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public Optional&lt;T&gt; or(Supplier&lt;? extends Optional&lt;? extends T&gt;&gt; supplier);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方法接受一个 <code>Supplier</code>，当 <code>Optional</code> 为空时，将执行该 <code>Supplier</code>，以获取另一个 <code>Optional</code> 对象。这使得在处理 <code>Optional</code> 时更加灵活，可以轻松地提供备用值或计算。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void orTest() {
        Optional&lt;String&gt; optional1 = Optional.of(&quot;死磕 Java 新特性&quot;);
        Optional&lt;String&gt; optional2 = Optional.empty();
        System.out.println(&quot;optional1 value:&quot; + optional1.or(()-&gt;Optional.of(&quot;死磕 Java&quot;)).get());
        System.out.println(&quot;optional2 value:&quot; + optional2.or(()-&gt;Optional.of(&quot;死磕 Java&quot;)).get());
    }
// 结果......
optional1 value:死磕 Java 新特性
optional2 value:死磕 Java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ifpresentorelse" tabindex="-1"><a class="header-anchor" href="#ifpresentorelse" aria-hidden="true">#</a> ifPresentOrElse()</h3><p>Java 8 有一个 <code>ifPresent()</code>，它用于在 <code>Optional</code> 包含非空值时执行指定的操作，Java 9 对其的改进就是增加了一个 <code>else</code>。</p><p><code>ifPresentOrElse()</code> 方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void ifPresentOrElse(Consumer&lt;? super T&gt; action, Runnable emptyAction);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它接受两个参数：</p><ol><li><code>action</code>：是一个 <code>Consumer</code> 函数式接口，用于在 <code>Optional</code> 包含非空值时执行的操作。</li><li><code>emptyAction</code>：是一个 Runnable 函数式接口，用于在 <code>Optional</code> 为空时执行的操作，通常是一些默认操作或错误处理。</li></ol><p>使用 <code>ifPresentOrElse()</code> 方法，你可以避免手动编写空值检查代码，从而更容易地处理可能为空的情况。例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void ifPresentOrElseTest() {
        Optional&lt;String&gt; optional = Optional.empty();
        optional.ifPresentOrElse(value -&gt; System.out.println(&quot;optional value:&quot; + optional.get()),
                () -&gt; System.out.println(&quot;optional value is null&quot;));
    }
// 结果......
optional value is null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法可以让我们不需要显式地编写 <code>if...else</code> 来检查 <code>Optional</code> 是否为空，从而提高了代码的可读性和可维护性，是比较实用的一个方法。</p><h3 id="stream" tabindex="-1"><a class="header-anchor" href="#stream" aria-hidden="true">#</a> stream()</h3><p><code>stream</code>() 允许我们将 <code>Optional</code> 对象转化为一个流 （<code>Stream</code>），以便能够更灵活地处理包含或不包含值的情况。方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Stream&lt;T&gt; stream()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法允许我们执行以下操作：</p><ul><li>如果 <code>Optional</code> 包含非空值**：** <code>stream()</code> 会创建一个包含这个值的流。</li><li>如果 <code>Optional</code> 为空**：** <code>stream()</code> 会创建一个空流。</li></ul><p>有了 <code>Stream</code> 后，我们就可以利用 <code>Stream</code> 的各种功能来处理 <code>Optional</code> 中的值，例如映射、过滤、转换等等。例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void streamTest() {
        Optional&lt;String&gt; optional = Optional.of(&quot;死磕 Java&quot;);
        optional.stream()
                .filter(o -&gt; o.startsWith(&quot;死磕&quot;))
                .map(val -&gt; val + &quot; —— https://skjava.com/&quot;)
                .forEach(System.out::println);
    }
// 结果......
死磕 Java-https://skjava.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再入：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void streamTest1() {
        List&lt;Optional&lt;String&gt;&gt; list = List.of(
                Optional.of(&quot;死磕 java 并发&quot;),
                Optional.of(&quot;死磕 java 新特性&quot;),
                Optional.empty(),
                Optional.of(&quot;死磕 Netty&quot;),
                Optional.empty()
        );
        list.stream()
                .flatMap(Optional::stream)
                .filter(o -&gt; o.startsWith(&quot;死磕&quot;))
                .map(val -&gt; val + &quot; —— https://skjava.com/&quot;)
                .forEach(System.out::println);
    }
// 结果......
死磕 java 并发 —— https://skjava.com/
死磕 java 新特性 —— https://skjava.com/
死磕 Netty —— https://skjava.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>stream()</code> 可以让我们更加流畅地处理 <code>Optional</code> 中的值，而不需要额外的空值检查代码。</p><h2 id="java-9-新特性—try-with-resources的升级" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—try-with-resources的升级" aria-hidden="true">#</a> Java 9 新特性—try-with-resources的升级</h2><p>只要学过 Java 的小伙伴都需要知道，资源用了是要关闭的，否则会发生大麻烦，轻则被骂，重则滚蛋，不要以为是玩笑话，很严重的！！</p><p><img src="`+f+`" alt="img"></p><h3 id="java-7-之前-资源需要手动关闭" tabindex="-1"><a class="header-anchor" href="#java-7-之前-资源需要手动关闭" aria-hidden="true">#</a> Java 7 之前，资源需要手动关闭</h3><p>我相信有5 年以上工作经验的小伙伴一定写过这样的代码：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>FileInputStream fileInputStream = null;
try {
    fileInputStream = new FileInputStream(&quot;file.txt&quot;);
    // 读取文件内容
} catch (IOException e) {
    // 处理异常
} finally {
    if (fileInputStream != null) {
        try {
            fileInputStream.close();
        } catch (IOException e) {
            // 处理关闭异常
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为，在 Java 7 之前，需要我们手动关闭各种资源，包括文件、数据库连接、网络套接字等等其他可能需要显式关闭的资源。但是这种关闭资源的方式存在几个问题：</p><ul><li>容易忽略关闭资源的步骤，导致资源泄漏。</li><li>需要编写冗长的 <code>try-catch-finally</code> 代码，降低了代码的可读性。</li><li>异常处理变得复杂，需要额外的嵌套 <code>try-catch</code> 块来处理关闭资源时可能出现的异常。</li></ul><h3 id="java-7-中的-try-with-resources" tabindex="-1"><a class="header-anchor" href="#java-7-中的-try-with-resources" aria-hidden="true">#</a> Java 7 中的 try-with-resources</h3><p>为了解决上面的问题，Java 7 引入了 <code>try-with-resources</code> 语法。<code>try-with-resources</code> 是一个用于简化资源管理的语法糖，它可以自动关闭实现了 <code>AutoCloseable</code> 或 <code>Closeable</code> 接口的资源，无需显式编写资源关闭代码。这种特性有如下几个优点：</p><ul><li>资源自动化管理，减少了资源泄漏的风险。</li><li>减少了编写冗长的 <code>try-catch-finally</code> ，简化了代码，提高了代码的可读性和可维护性。</li><li>自动处理资源关闭时的异常。</li></ul><p>使用 <code>try-with-resources</code> 的步骤如下：</p><blockquote><p><strong>1、资源必须实现 *<em>**<code>AutoCloseable</code>**</em>* 或 *<em>**<code>Closeable</code>**</em>* 接口</strong></p></blockquote><p>要使用 <code>try-with-resources</code>，资源必须是实现了 <code>AutoCloseable</code>（Java 7 引入）或 <code>Closeable</code>（ Java 5 引入）接口的类的实例。这些接口要求资源类提供一个 <code>close</code> 方法，用于在不再需要资源时执行清理操作。例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Resource implements AutoCloseable{
    
    public void doSome() {
        System.out.println(&quot;do something....&quot;);
    }
    
    @Override
    public void close() throws Exception {
        System.out.println(&quot;关闭了 Resource 资源&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>2、语法</strong></p></blockquote><p><code>try-with-resources</code> 使用 <code>try</code> 块来声明和初始化资源。资源的声明必须在圆括号内，资源会在 <code>try</code> 块退出时自动关闭。此语法还可以包括一个 <code>catch</code> 块来处理可能抛出的异常。例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class ResourceTest {
    public static void main(String[] args) {
        try(Resource resourceTest = new Resource()) {
            resourceTest.doSome();
        } catch (Exception e) {
            // 处理异常
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>3、自动关闭资源</strong></p></blockquote><p>在 <code>try</code> 块退出时，资源会自动关闭，即使在 <code>try</code> 块内发生异常也会如此。资源的 <code>close()</code> 会被调用以释放资源，并且资源的关闭异常会被抛出或被抑制（附加到原始异常中）。例如上诉代码执行结果如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>do something....
关闭了 Resource 资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>不管是正常退出还是因为异常退出，都会自动调用资源的 <code>close()</code> 来释放资源。</p><blockquote><p><strong>4、多个资源</strong></p></blockquote><p>我们可以在同一个 <code>try-with-resources</code> 语句中管理多个资源，它会按照声明的顺序被初始化和关闭。多个资源的声明使用分号分隔。如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>try (Resource1 resource1 = new Resource1();
     Resource2 resource2 = new Resource2();
     Resource3 resource2 = new Resource3()) {
     // 使用 resource1、resource2、resource3
} catch (Exception e) {
    // 处理异常
}
// 在这里，resource1、resource2、resource3 都会自动关闭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是资源的关闭顺序与它们的声明顺序相反，即最后声明的资源最先关闭。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class ResourceTest {
    public static void main(String[] args) {
        try(Resource1 resource1 = new Resource1();
            Resource2 resource2 = new Resource2();
            Resource3 resource3 = new Resource3()) {

        } catch (Exception e) {
            // 处理异常
        }
    }
}
// 结果......
关闭了 Resource3 资源
关闭了 Resource2 资源
关闭了 Resource1 资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-9-对-try-with-resources-的改进" tabindex="-1"><a class="header-anchor" href="#java-9-对-try-with-resources-的改进" aria-hidden="true">#</a> Java 9 对 try-with-resources 的改进</h3><p>Java 7 虽然利用 <code>try-with-resources</code> 来优化了资源的管理，无须我们手动关闭资源，但是它依然是不够完美，它要求管理的资源必须在 <code>try</code> 子句中初始化，否则编译不通过，如下：</p><p><img src="`+S+'" alt="img"></p><p>为了解决这个问题，Java 9 对其改进了：**如果你已经有一个资源是 final 或等效于 final 变量,您可以在 try-with-resources 语句中使用该变量，而无需在 try-with-resources 语句中声明一个新变量。**例如我们将编译环境调整到 Java 9 及以上去：</p><p><img src="'+x+`" alt="img"></p><p>执行结果：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>关闭了 Resource3 资源
关闭了 Resource2 资源
关闭了 Resource1 资源
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过这个例子我们就可以看到 Java 在不断地进步，对 Java 的未来充满信心！！！</p><h2 id="java-9-新特性—stream-api的增强" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—stream-api的增强" aria-hidden="true">#</a> Java 9 新特性—Stream API的增强</h2>`,62),Q=e("code",null,"Stream API",-1),G={href:"https://www.skjava.com/series/article/6972779809",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"Stream API",-1),$=l('<p>为了提高 Stream API 的灵活性和性能，Java 9 对 <code>Stream API</code> 做了一些增强，主要体现在以下几个方法：</p><ol><li>新增 <code>ofNullable()</code></li><li>重载 <code>iterate()</code></li><li>新增 <code>dropWhile()</code> 和 <code>takeWhile()</code></li></ol><p><img src="'+q+`" alt="img"></p><h3 id="新增-ofnullable" tabindex="-1"><a class="header-anchor" href="#新增-ofnullable" aria-hidden="true">#</a> 新增 ofNullable()</h3><p><code>ofNullable()</code> 用于创建一个 <code>Stream</code>，其中包含一个非空元素或者为空。该方法的主要目的是简化处理可能包含 <code>null</code> 值的集合时的代码，以便避免显式地检查和过滤 <code>null</code> 值。其定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static&lt;T&gt; Stream&lt;T&gt; ofNullable(T t) {
        return t == null ? Stream.empty()
                         : StreamSupport.stream(new Streams.StreamBuilderImpl&lt;&gt;(t), false);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果参数 <code>t</code> 不为 null，则返回一个包含该非空元素的单元素 Stream。</li><li>如果参数 <code>t</code> 为 null，则返回一个空的 Stream。</li></ul><p>这就意味着我们可以使用 <code>Stream.ofNullable()</code> 方法来快速创建一个只包含非空元素的 Stream，且无需担心处理 null 值的边界情况。比如，我们有一个 List 包含一些可能为 null 的字符串，我们可以使用 <code>Stream.ofNullable()</code> 来创建一个只包含非空字符串的 Stream：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void ofNullableTest() {
        List&lt;String&gt; list = Arrays.asList(&quot;死磕 Java&quot;,null,&quot;死磕 Java 新特性&quot;,&quot;死磕 Netty&quot;,null,null);
        list.stream()
            .flatMap(Stream::ofNullable)
            .forEach(System.out::println);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重载-iterate" tabindex="-1"><a class="header-anchor" href="#重载-iterate" aria-hidden="true">#</a> 重载 iterate()</h3><p>我们知道 Java 8 中的 <code>iterate()</code> 用于创建一个无限流，其元素由给定的初始值和一个生成下一个元素的函数产生，为了终止流我们需要使用一些限制性的函数来操作，例如 <code>limit()</code>：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void iterate() {
        Stream.iterate(1,v -&gt; v + 2)
                .limit(10)
                .forEach(System.out::println);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Java 9 中为了限制该无序流的长度，增加了一个谓词，方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>static &lt;T&gt; Stream&lt;T&gt; iterate(T seed, Predicate&lt;? super T&gt; hasNext, UnaryOperator&lt;T&gt; next)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>seed</code>：初始元素，作为序列的第一个元素。</li><li><code>hasNext</code>：用于在生成元素时限制序列的长度。如果 <code>hasNext</code> 返回 <code>true</code>，则<code>next</code> 函数就会继续生成下一个元素；一旦 <code>hasNext</code> 返回 <code>false</code>，序列生成将停止。</li></ul><p>例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void iterateTest() {
        Stream.iterate(1,n -&gt; n &lt; 20,v -&gt; v + 2)
                .forEach(System.out::println);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当生成的值大于等于 20 时，序列生成就停止。</p><p>该重载方法允许我们更加方便地生成元素序列，并在需要时限制序列的长度，这在处理无限序列的情况下非常有用。</p><h3 id="新增-dropwhile-和-takewhile" tabindex="-1"><a class="header-anchor" href="#新增-dropwhile-和-takewhile" aria-hidden="true">#</a> 新增 dropWhile() 和 takeWhile()</h3><p>Java 9 引入 <code>dropWhile()</code> 和 <code>takeWhile()</code>，这两个方法允许我们根据谓词条件从流中选择或删除元素，直到遇到第一个不满足条件的元素。</p><p><code>dropWhile()</code> 和 <code>takeWhile()</code>，用于处理流中的前缀元素，而不必处理整个流，为处理 Stream 流提供了更多的灵活性。</p><h4 id="dropwhile" tabindex="-1"><a class="header-anchor" href="#dropwhile" aria-hidden="true">#</a> dropWhile()</h4><p><code>dropWhile()</code> 方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>dropWhile(Predicate&lt;? super T&gt; predicate)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>方法接受一个 <code>Predicate</code>（谓词）作为参数。</li><li>方法会从流的开头开始，跳过满足谓词条件的所有元素，直到找到第一个不满足条件的元素。一旦找到第一个不满足条件的元素，<code>dropWhile()</code> 将停止跳过元素，并返回一个新的流，其中包含了剩余的元素。</li><li>如果流的所有元素都满足谓词条件，那么返回一个空流。</li></ul><p>示例：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void dropWhileTest() {
        Stream&lt;Integer&gt; stream = Stream.of(1,2,3,4,5,3,2,6,7,8);
        stream.dropWhile(x -&gt; x &lt; 5)
                .forEach(System.out::println);
    }
    }
// 结果.....
5
3
2
6
7
8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>谓词条件 <code>x &lt; 5</code>，即 <code>dropWhile()</code> 会跳过小于 5 的元素， 一旦找到第一个不小于 5 的元素（5），它将停止跳过并返回包含剩余元素的新流（<code>5,3,2,6,7,8</code>）。</p><h4 id="takewhile" tabindex="-1"><a class="header-anchor" href="#takewhile" aria-hidden="true">#</a> takeWhile()</h4><p><code>takeWhile()</code> 则与 <code>dropWhile()</code> 相反，它是从流的开头开始，选择满足谓词条件的所有元素，直到找到第一个不满足条件的元素，一旦找到该元素，将会停止选择元素，并返回一个新的流，其中包含了前缀元素。注意两个方法的用词区别，一个是跳过（<code>dropWhile()</code>），一个是选择（<code>takeWhile()</code>）。</p><p>如果流的所有元素都满足谓词条件，它将返回原始流的一个副本。</p><p>示例：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void takeWhileTest() {
        Stream&lt;Integer&gt; stream = Stream.of(1,2,3,4,5,3,2,6,7,8);
        stream.takeWhile(x -&gt; x &lt; 5)
                .forEach(System.out::println);
    }
// 结果......
1
2
3
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到没，同样的示例，只是方法不一样，效果就完全相反。</p><h2 id="java-9-新特性—新增只读集合和工厂方法" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—新增只读集合和工厂方法" aria-hidden="true">#</a> Java 9 新特性—新增只读集合和工厂方法</h2><p>对于大多数小伙伴而言，其实是很少使用只读集合的，甚至有蛮大一部分小伙伴可能都没有听过这个，大部分使用集合无非就是如下两种方式：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; list = new ArrayList();
or
List&lt;String&gt; list = getXxxList();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实只读集合在编程中还是蛮有用处的，首先只读就意味着不可变，即线程安全，在使用它的过程中我们无需使用同步机制来保护其内部状态。同时只读集合通常比可变集合更加高效。因为它们是不可变的，不需要支持修改操作，因此在内部数据结构上可以进行优化，这可以提高数据访问的速度和降低内存开销。</p><p>这篇文章我们来看看 Java 引入的一项重要特性—只读集合和工厂方法。</p><h3 id="java-8-创建不可变集合" tabindex="-1"><a class="header-anchor" href="#java-8-创建不可变集合" aria-hidden="true">#</a> Java 8 创建不可变集合</h3><p>在 Java 9 之前要创建一个只读集合，通常需要通过将可变集合转换为不可变集合的方式来实现，即使用<code>Collections.unmodifiableXXX()</code>，其中<code>XXX</code>可以是<code>List</code>、<code>Set</code>或<code>Map</code>，例如要创建一个只读 List：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        List&lt;String&gt; list = new ArrayList&lt;&gt;();
        list.add(&quot;死磕 Java 新特性&quot;);
        list.add(&quot;死磕 Netty&quot;);

        // 转换为只读集合
        list = Collections.unmodifiableList(list);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>Collections.unmodifiableList()</code> 将 List 转换为不可变集合，如果我们使用 <code>add()</code> 来添加元素，会报 <code>UnsupportedOperationException</code> 异常信息</p><p>这种方式虽然有效，但是比较麻烦，它需要额外的步骤来处理，而且容易出错。</p><h3 id="java-9-创建不可变集合" tabindex="-1"><a class="header-anchor" href="#java-9-创建不可变集合" aria-hidden="true">#</a> Java 9 创建不可变集合</h3><p>为了解决 Java 8 的问题，Java 9 引入不可变集合和对应的工厂方法，目的就在于提供更安全、更高效的方式来创建不可变集合，同时确保原始集合无法被修改。</p><p><code>List</code>、<code>Set</code>、<code>Map</code> 都提供了对应的工厂方法来创建不可变集合，我们这里列出 <code>List</code> 的：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>static &lt;E&gt; List&lt;E&gt;  of()
static &lt;E&gt; List&lt;E&gt;  of(E e1)
static &lt;E&gt; List&lt;E&gt;  of(E e1, E e2)
static &lt;E&gt; List&lt;E&gt;  of(E e1, E e2, E e3)
static &lt;E&gt; List&lt;E&gt;  of(E e1, E e2, E e3, E e4)
static &lt;E&gt; List&lt;E&gt;  of(E e1, E e2, E e3, E e4, E e5)
static &lt;E&gt; List&lt;E&gt;  of(E e1, E e2, E e3, E e4, E e5, E e6)
static &lt;E&gt; List&lt;E&gt;  of(E e1, E e2, E e3, E e4, E e5, E e6, E e7)
static &lt;E&gt; List&lt;E&gt;  of(E e1, E e2, E e3, E e4, E e5, E e6, E e7, E e8)
static &lt;E&gt; List&lt;E&gt;  of(E e1, E e2, E e3, E e4, E e5, E e6, E e7, E e8, E e9)
static &lt;E&gt; List&lt;E&gt;  of(E e1, E e2, E e3, E e4, E e5, E e6, E e7, E e8, E e9, E e10)
//varargs
static &lt;E&gt; List&lt;E&gt;  of(E... elements)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到这么多重载方法是不是有点儿懵逼，感觉是不是只需要有 <code>of()</code> 和 <code>of(E... elements)</code> 这两个方法就可以了，从实现的效果上来说，确实是可以。<code>of(E... elements)</code> 确实是一个非常灵活的方法，可以适用于多种情况，但是Java 9 引入多个重载的 <code>List.of()</code> 方法并不是为了提供不同数量的参数选择的灵活性，而是为了性能和可读性的考虑。每个 <code>List.of()</code>方法的重载版本都是针对特定的参数数量进行了优化，以提高性能和代码清晰度。当使用 <code>of(E... elements)</code> 时，Java运行时需要创建一个数组以容纳传递的元素（<strong>Java 的可变参数，会被编译器转型为一个数组</strong>），这可能会引入一些额外的开销，尤其是在创建小型 <code>List</code> 时。而多个重载的 <code>List.of()</code> 方法避免了这种开销，因为它们直接接受参数，而无需创建数组。所以，看着懵逼，但是性能杠杠的。</p><p>不可变的 List 具有如下几个特征：</p><ol><li>这些列表是不可变的。调用任何改变 List 的方法（如<code>add()</code>、<code>remove()</code>、<code>replaceAll()</code>、<code>clear()</code>），都会抛出 <code>UnsupportedOperationException</code>。</li><li>它们不允许 <code>null</code> 元素。 尝试添加 <code>null</code> 元素将导致 <code>NullPointerException</code>。</li><li>列表中元素的顺序与提供的参数或提供的数组中的元素的顺序相同。</li></ol><p>对于 Set 和 Map 大明哥就不介绍了，小伙们自己去探索下！</p><h2 id="java-9-新特性—改进completablefuture" tabindex="-1"><a class="header-anchor" href="#java-9-新特性—改进completablefuture" aria-hidden="true">#</a> Java 9 新特性—改进CompletableFuture</h2>`,54),Y=e("code",null,"CompletableFuture",-1),Z=e("code",null,"CompletableFuture",-1),ee={href:"https://www.skjava.com/series/article/5020516690",target:"_blank",rel:"noopener noreferrer"},ae=l('<p>但是在实际使用过程中，发现 <code>CompletableFuture</code> 还有一些改进空间，所以 Java 9 对它做了一些增强，主要内容包括：</p><ul><li><strong>新的工厂方法</strong></li><li><strong>支持超时和延迟执行</strong></li><li><strong>支持子类化</strong></li></ul><p><img src="'+j+`" alt="img"></p><h3 id="新的工厂方法" tabindex="-1"><a class="header-anchor" href="#新的工厂方法" aria-hidden="true">#</a> <strong>新的工厂方法</strong></h3><p>在 Java 9 中 CompletableFuture 新增了三个工厂方法。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>completedFuture()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>此方法用于创建一个已经完成的 <code>CompletableFuture</code> 实例，方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static &lt;U&gt; CompletableFuture&lt;U&gt; completedFuture(U value)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法允许我们快速创建一个已经有结果的 <code>CompletableFuture</code>，这对于单元测试或需要立即返回结果的场景非常有用。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>failedFuture()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>此方法创建一个异常完成（异常终止）的 <code>CompletableFuture</code> 实例，方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static &lt;U&gt; CompletableFuture&lt;U&gt; failedFuture(Throwable ex) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方法接受的参数为 Throwable，表明为异常终止，它为异步编程提供了一种简洁的方式来表示已知的失败情况，这对于错误处理和异常测试场景非常重要。</p><p>除上面两个工厂方法外，Java 9 引入了下面这对 <code>stage-oriented</code> 工厂方法，返回完成的或异常完成的 completion stages：</p><ul><li><code>CompletionStage completedStage(U value)</code>: 返回一个新的以指定 value 完成的<code>CompletionStage</code> ，并且只支持 <code>CompletionStage</code> 里的接口。</li><li><code>CompletionStage failedStage(Throwable ex)</code>: 返回一个新的以指定异常完成的<code>CompletionStage</code> ，并且只支持 <code>CompletionStage</code> 里的接口。</li></ul><h3 id="支持超时和延迟执行" tabindex="-1"><a class="header-anchor" href="#支持超时和延迟执行" aria-hidden="true">#</a> <strong>支持超时和延迟执行</strong></h3><p>在 Java 9 中，<code>CompletableFuture</code> 引入了支持超时和延迟执行的改进，这两个功能对于控制异步操作的时间行为至关重要。</p><p>支持超时</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>orTimeout()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>允许为 <code>CompletableFuture</code> 设置一个超时时间。如果在指定的超时时间内未完成，<code>CompletableFuture</code> 将以 <code>TimeoutException</code> 完成，方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public CompletableFuture&lt;T&gt; orTimeout(long timeout, TimeUnit unit)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该方法为 <code>CompletableFuture</code> 提供了超时机制，这对于避免永久挂起的异步操作和保证响应性至关重要。</p><ul><li>示例：</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void orTimeTest() {
       try {
           CompletableFuture completableFuture = CompletableFuture.runAsync(()-&gt;{
               System.out.println(&quot;异步任务开始执行....&quot;);
               try {
                   TimeUnit.SECONDS.sleep(5);
               } catch (InterruptedException e) {
                   throw new RuntimeException(e);
               }
           }).orTimeout(2,TimeUnit.SECONDS);

           completableFuture.join();
       } catch (Exception e) {
           System.out.println(e);
       }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行结果</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>异步任务开始执行....
java.util.concurrent.CompletionException: java.util.concurrent.TimeoutException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>completeOnTimeout()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>该允许在指定的超时时间内如果未完成，则用一个默认值来完成 <code>CompletableFuture</code>，方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public CompletableFuture&lt;T&gt; completeOnTimeout(T value, long timeout, TimeUnit unit)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>value</code> 为默认默认值。该方法提供了一种优雅的回退机制，确保即使在超时的情况下也能保持异步流的连续性和完整性。</p><ul><li>示例</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void completeOnTimeoutTest() {
        CompletableFuture&lt;String&gt; completableFuture = CompletableFuture.supplyAsync(()-&gt;{
            System.out.println(&quot;异步任务开始执行....&quot;);
            try {
                TimeUnit.SECONDS.sleep(5);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return &quot;死磕 Java 新特性&quot;;
        }).completeOnTimeout(&quot;死磕 Java&quot;,2,TimeUnit.SECONDS);

        System.out.println(&quot;执行结果为：&quot; + completableFuture.join());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>执行结果</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>异步任务开始执行....
执行结果为：死磕 Java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="支持延迟执行" tabindex="-1"><a class="header-anchor" href="#支持延迟执行" aria-hidden="true">#</a> 支持延迟执行</h4><p><code>CompletableFuture</code> 提供了<code>delayedExecutor()</code> 来支持延迟执行，该方法创建一个延迟执行的 <code>Executor</code>，可以将任务的执行推迟到未来某个时间点。方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static Executor delayedExecutor(long delay, TimeUnit unit, Executor executor)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它能够让我们更加精确地控制异步任务的执行时机，特别是在需要根据时间安排任务执行的场景中。</p><ul><li>示例</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void completeOnTimeoutTest() {
        // 创建一个延迟执行的Executor
        Executor delayedExecutor = CompletableFuture.delayedExecutor(3, TimeUnit.SECONDS);

        // 使用延迟的Executor执行一个简单任务
        CompletableFuture&lt;Void&gt; future = CompletableFuture.runAsync(() -&gt; {
            System.out.println(&quot;任务延迟后执行...&quot;);
        }, delayedExecutor);

        // 等待异步任务完成
        future.join();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="支持子类化" tabindex="-1"><a class="header-anchor" href="#支持子类化" aria-hidden="true">#</a> <strong>支持子类化</strong></h3><p>在 Java 9 中，CompletableFuture 做了一些改进，使得 <strong>CompletableFuture</strong> 可以被更简单的继承。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>newIncompleteFuture()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>创建一个新的、不完整的 <code>CompletableFuture</code> 实例， 子类可以重写这个方法来返回 <code>CompletableFuture</code> 的子类实例，允许在整个 <code>CompletableFuture</code> API 中自定义实例的行为。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>defaultExecutor()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>该方法提供 <code>CompletableFuture</code> 操作的默认执行器，子类可以重写此方法以提供不同的默认执行器，这对于定制任务执行策略特别有用。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>copy()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>创建一个与当前 <code>CompletableFuture</code> 状态相同的新实例。子类可以重写此方法以确保复制的实例是特定子类的实例，而不仅仅是 <code>CompletableFuture</code>。</p>`,48);function ie(de,le){const i=s("ExternalLinkIcon");return o(),c("div",null,[k,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",y,[a("Java 9 新特性—模块化"),d(i)])])]),_,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",T,[a("Java 9 新特性—新增只读集合和工厂方法"),d(i)])])]),w,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",C,[a("Java 9 新特性—REPL 工具：JSheel 命令"),d(i)])])]),L,P,I,O,F,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",R,[a("Java 9 新特性—接口支持私有方法"),d(i)])])]),A,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",M,[a("Java 9 新特性—Stream API的增强"),d(i)])])]),U,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",N,[a("Java 9 新特性—Optional 的增强"),d(i)])])]),D,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",W,[a("Java 9 新特性—try-with-resources的升级"),d(i)])])]),K,e("p",null,[a("在文章 "),e("a",B,[a("Optional 解决NullPointerException"),d(i)]),a(" 大明哥详细的介绍如何利用 "),H,a(" 来解决 "),X,a(" 。然后 Java 9 对它又进行了一些增强，以提高其实用性和易用性。主要是增加三个方法：")]),V,e("p",null,[a("我们知道 Java 8 强势推出 "),Q,a("，让我们能够以一种更加简洁、易读、高效的方式来处理集合数据，大大地提高了我们的生产力，在文章 "),e("a",G,[a("Stream API 对元素流进行函数式操作"),d(i)]),a("，大明哥对 "),z,a(" 做了非常详细的说明，各位小伙伴可以去阅读阅读。")]),$,e("p",null,[Y,a(" 是 Java 8 中引入用于处理异步编程的核心类，它引入了一种基于 Future 的编程模型，允许我们以更加直观的方式执行异步操作，并处理它们的结果或异常。关于 "),Z,a(" 的核心原理请阅读："),e("a",ee,[a("Java 8 新特性—深入理解 CompletableFuture"),d(i)]),a("。")]),ae])}const oe=n(E,[["render",ie],["__file","java-9-feature.html.vue"]]);export{oe as default};
