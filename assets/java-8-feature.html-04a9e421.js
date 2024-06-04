import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as r,a as e,b as a,d as n,e as d}from"./app-e53dd85b.js";const o="/assets/202311181000002-4b59094f.png",u="/assets/202310031000003-39cd98b1.png",c="/assets/202310041000002-40818199.png",v="/assets/202310041000001-c6bb7c65.jpg",m="/assets/202310031000001-1f339132.jpg",p="/assets/202310051000003-4c4a270c.png",b="/assets/202310051000001-45d536e1.jpg",g="/assets/202310051000002-7987b8cd.jpg",h="/assets/202310071000002-07098d6e.png",q="/assets/202310071000001-e9f1725f.jpg",J="/assets/202310091000001-9ea6bd49.png",S="/assets/202310101000002-51e12eeb.png",f="/assets/202310101000001-140d7319.jpg",y="/assets/202310211000014-8b34d8cb.png",x="/assets/202310211000001-8fbef282.jpg",T="/assets/202310211000002-4d7e5cc1.jpg",F="/assets/202310211000004-74f0bfe0.jpg",L="/assets/202310211000006-525ada46.jpg",C="/assets/202310211000007-59dc97c7.jpg",A="/assets/202310211000008-af75ed8e.jpg",w="/assets/202310211000009-c83abd2b.jpg",I="/assets/202310211000010-2557b84e.jpg",k="/assets/202310211000011-08edd5ad.jpg",M="/assets/202310211000012-0704e41a.jpg",D="/assets/202310211000013-8b7c4f33.jpg",O="/assets/202310102000002-5f027979.png",_="/assets/202310102000001-9b86723c.jpg",E="/assets/202310111000001-1fff7b20.jpg",j="/assets/202310261000002-1ed92629.png",P="/assets/202310261000001-cabd0b83.jpg",N="/assets/202311191000001-d7ca8776.png",B="/assets/202311232000003-d5114c93.png",U="/assets/202311232000002-03d6643d.png",R="/assets/202311251000001-db891709.png",Z={},H=d('<h1 id="java-8-新特性总结" tabindex="-1"><a class="header-anchor" href="#java-8-新特性总结" aria-hidden="true">#</a> Java 8 新特性总结</h1><h2 id="java-8-新特性—概述" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—概述" aria-hidden="true">#</a> Java 8 新特性—概述</h2><blockquote><p>Java 8 是Java历史上一个重大的版本更新，发布于2014年3月18日。</p></blockquote><p><img src="'+o+`" alt="img"></p><h3 id="jep-126-lambda-表达式" tabindex="-1"><a class="header-anchor" href="#jep-126-lambda-表达式" aria-hidden="true">#</a> <strong>JEP 126：Lambda 表达式</strong></h3><p>Lambda 表达式是 Java 8 新特性中最重要且最显著的一个，为 Java 增加了函数式编程的能力，使得代码变得更加简洁和易读。Lambda 表达式主要用于简化匿名内部类的实现。</p><p>Lambda 表达式的基本语法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>(parameters) -&gt; expression 或 (parameters) -&gt; { statements; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>parameters</code> ：是 Lambda表达式的参数列表，可以为空或包含一个或多个参数。</li><li><code>-&gt;</code> ：是 Lambda 操作符，用于将参数和 Lambda 主体分开。</li><li><code>expression</code> ：是 Lambda 表达式的返回值，或者在主体中执行的单一表达式。</li><li><code>{ statements; }</code> ：是 Lambda 主体，包含了一系列语句，如果需要执行多个操作，就需要使用这种形式。</li></ul><p>它具有如下几个特点：</p><ol><li><strong>无需声明类型</strong>：Lambda 表达式不需要声明参数类型，编译器可以自动推断参数类型。</li><li><strong>可选的参数圆括</strong>号：当只有一个参数时，可以省略圆括号。但是当参数个数大于一个时，圆括号是必需的。空括号用于表示空参数集。</li><li><strong>可选的大括号</strong>：当 Lambda 表达式的主体只包含一个表达式时，可以省略大括号。当表达式需要包含多个语句时，需要使用大括号。</li><li><strong>可选的返回关键字</strong>：当 Lambda 表达式主体只有一个表达式，且该表达式会自动返回结果时，可以省略 return 关键字。</li></ol>`,11),Y={href:"https://www.skjava.com/series/article/1747461365",target:"_blank",rel:"noopener noreferrer"},G=d('<h3 id="jep-126-函数式接口" tabindex="-1"><a class="header-anchor" href="#jep-126-函数式接口" aria-hidden="true">#</a> <strong>JEP 126</strong>：函数式接口</h3><p>Java 8 引入函数式接口的主要目的是支持函数式编程范式，也就是 Lambda 表达式。在函数式编程语言中，函数被当做一等公民对待，Lambda 表达式的类型是函数，它可以像其他数据类型一样进行传递、赋值和操作。但是在 Java 中，“<strong>一切皆对象</strong>”是不可违背的宗旨，所以 Lambda 表达式是对象，而不是函数，他们必须要依附于一类特别的对象类型：函数式接口。所以函数式接口是与Lambda表达式紧密相连的，它为Java添加了一种新的抽象层次，<strong>允许将方法作为一等公民对待</strong>。</p><p>函数式接口具有两个特点：</p><ol><li><strong>只包含一个抽象方法</strong>：函数式接口只能有一个抽象方法，但可以包含多个默认方法或静态方法。</li><li><strong>用</strong>**<code>@FunctionalInterface</code>**<strong>注解标记</strong>：该注解不强制，但通常会使用它来标记该接口为函数式接口。这样做可以让编译器检查接口是否符合函数式接口的定义，以避免不必要的错误。</li></ol><p>一般来说函数式接口有两个最主要的用途：</p><ol><li>与 Lambda表达式一起使用，为Java带来更加函数式的编程风格。</li><li>用于实现简单的函数策略或行为，如回调、事件处理等。</li></ol>',6),V={href:"https://www.skjava.com/series/article/1841959591",target:"_blank",rel:"noopener noreferrer"},W=d(`<p><strong>JEP 179</strong>：方法引用</p><p>为了提升 Java 编程语言的表达力和可读性，特别是在配合 Lambda 表达式和函数式编程风格，Java 8 引入方法引用。</p><p>方法引用实际上是一个简化版的 Lambda 表达式，它允许我们以更简洁的方式引用方法。它有如下几种类型：</p><ol><li><p>静态方法引用</p><p>：使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类名::静态方法名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>的形式。</p><ul><li>例如，<code>String::valueOf</code> 相当于 <code>x -&gt; String.valueOf(x)</code>。</li></ul></li><li><p>实例方法引用（对象的实例方法）</p><p>：使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>实例对象::实例方法名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>的形式。</p><ul><li>例如，假设有一个 <code>String</code> 对象 <code>myString</code>，那么 <code>myString::length</code> 相当于 <code>() -&gt; myString.length()</code>。</li></ul></li><li><p>特定类型的任意对象的实例方法引用</p><p>：使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类名::实例方法名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>。</p><ul><li>例如，<code>String::length</code> 相当于 <code>str -&gt; str.length()</code>。这里不是调用特定对象的 <code>length</code> 方法，而是用于任意的 <code>String</code> 对象。</li></ul></li><li><p>构造器引用</p><p>：使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>类名::new
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>。</p><ul><li>例如，<code>ArrayList::new</code> 相当于 <code>() -&gt; new ArrayList&lt;&gt;()</code>。</li></ul></li></ol>`,4),z={href:"https://www.skjava.com/series/article/1019158498",target:"_blank",rel:"noopener noreferrer"},X=e("h3",{id:"jep-150-接口的默认方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jep-150-接口的默认方法","aria-hidden":"true"},"#"),a(),e("strong",null,"JEP 150"),a("：接口的默认方法")],-1),K=e("p",null,"在 Java 8 之前，接口中可以申明方法和变量的，只不过变量必须是 public、static、final 的，方法必须是 public、abstract的。我们知道接口的设计是一项巨大的工作，因为如果我们需要在接口中新增一个方法，需要对它的所有实现类都进行修改，如果它的实现类比较少还可以接受，如果实现类比较多则工作量就比较大了。",-1),Q=e("p",null,"为了解决这个问题，Java 8 引入了默认方法，默认方法允许在接口中添加具有默认实现的方法，它使得接口可以包含方法的实现，而不仅仅是抽象方法的定义。",-1),$=e("p",null,[a("默认方法是接口中带有 "),e("code",null,"default"),a(" 关键字的非抽象方法。这种方法可以有自己的实现，而不需要子类去覆盖它。")],-1),ee=e("p",null,"默认方法允许我们向接口添加新方法而不破坏现有的实现。它解决了在 Java 8 之前，向接口添加新方法意味着所有实现该接口的类都必须修改的问题。",-1),ae={href:"https://www.skjava.com/series/article/9298099860",target:"_blank",rel:"noopener noreferrer"},ie=d(`<h3 id="jep-107-stream-api" tabindex="-1"><a class="header-anchor" href="#jep-107-stream-api" aria-hidden="true">#</a> JEP 107：<strong>Stream API</strong></h3><p>为了解决 Java 8 之前版本中集合操作的一些限制和不足，提高数据处理的效率和代码的简洁性，Java 8 引入 Stream API，它的引入标志着 Java 对集合操作迎来了的一种全新的处理方式，它在处理集合类时提供了一种更高效、声明式的方法。</p><p><code>Stream API </code>的核心思想是将数据处理操作以函数式的方式链式连接，以便于执行各种操作，如过滤、映射、排序、归约等，而无需显式编写传统的循环代码。</p><p>下面是 <code>Stream API</code> 的一些重要概念和操作：</p><ol><li><p><code>Stream</code>（流）</p><p>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Stream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>是 Java 8 中处理集合的关键抽象概念，它是数据渠道，用于操作数据源所生成的元素序列。这些数据源可以来自集合（</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Collection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>）、数组、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>I/O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>操作等等。它具有如下几个特点：</p><ol><li><code>Stream</code> 不会存储数据。</li><li><code>Stream</code> 不会改变源数据对象，它返回一个持有结果的新的 <code>Stream</code>。</li><li><code>Stream</code> 操作是延迟执行的，这就意味着他们要等到需要结果的时候才会去执行。</li></ol></li><li><p><strong>中间操作</strong>：这些操作允许您在 <code>Stream</code> 上执行一系列的数据处理。常见的中间操作有 <code>filter</code>（过滤）、<code>map</code>（映射）、<code>distinct</code>（去重）、<code>sorted</code>（排序）、<code>limit</code>（截断）、<code>skip</code>（跳过）等。这些操作返回的仍然是一个 Stream。</p></li><li><p><strong>终端操作</strong>：终端操作是对流进行最终处理的操作。当调用终端操作时，流将被消费，不能再进行进一步的中间操作。常见的终端操作包括 <code>forEach</code>（遍历元素）、<code>collect</code>（将元素收集到集合中）、<code>reduce</code>（归约操作，如求和、求最大值）、<code>count</code>（计数）等。</p></li><li><p><strong>惰性求值</strong>：Stream 操作是惰性的，只有在调用终端操作时才会执行中间操作。这可以提高性能，因为只处理需要的数据。</p></li></ol>`,5),ne={href:"https://www.skjava.com/series/article/6972779809",target:"_blank",rel:"noopener noreferrer"},de=e("h3",{id:"optional-类",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#optional-类","aria-hidden":"true"},"#"),a(),e("strong",null,"Optional 类")],-1),te=e("p",null,[a("Java 8 引入了 "),e("code",null,"Optional"),a(" 类，这是一个为了解决空指针异常（"),e("code",null,"NullPointerException"),a("）而设计的容器类。它可以帮助开发者在编程时更优雅地处理可能为 "),e("code",null,"null"),a(" 的情况。")],-1),le={href:"https://www.skjava.com/series/article/1810194665",target:"_blank",rel:"noopener noreferrer"},se=d('<h3 id="jep-170-新的日期时间-api" tabindex="-1"><a class="header-anchor" href="#jep-170-新的日期时间-api" aria-hidden="true">#</a> JEP 170：<strong>新的日期时间 API</strong></h3><p>作为 Java 开发者你一定直接或者间接使用过 <code>java.util.Date</code> 、<code>java.util.Calendar</code>、<code>java.text.SimpleDateFormat</code> 这三个类吧，这三个类是 Java 用于处理日期、日历、日期时间格式化的。由于他们存在一些问题，诸如：</p><ol><li><p>线程不安全</p><p>：</p><ol><li><code>java.util.Date</code> 和 <code>java.util.Calendar</code> 线程不安全，这就导致我们在多线程环境使用需要额外注意。</li><li><code>java.text.SimpleDateFormat</code> 也是线程不安全的，这可能导致性能问题和日期格式化错误。而且它的模式字符串容易出错，且不够直观。</li></ol></li><li><p><strong>可变性</strong>：<code>java.util.Date</code>类是可变的，这意味着我们可以随时修改它，如果一不小心就会导致数据不一致问题。</p></li><li><p><strong>时区处理困难</strong>：Java 8 版本以前的日期 API 在时区处理上存在问题，例如时区转换和夏令时处理不够灵活和准确。而且时区信息在 <code>Date</code> 对象中存储不明确，这使得正确处理时区变得复杂。</p></li><li><p>设计不佳</p><p>：</p><ol><li>日期和日期格式化分布在多个包中。</li><li><code>java.util.Date</code> 的默认日期，年竟然是从 1900 开始，月从 1 开始，日从 1 开始，没有统一性。而且 <code>java.util.Date</code> 类也缺少直接操作日期的相关方法。</li><li>日期和时间处理通常需要大量的样板代码，使得代码变得冗长和难以维护。</li></ol></li></ol><p>基于上述原因，Java 8 重新设计了日期时间 API，以提供更好的性能、可读性和可用性，同时解决了这些问题，使得在 Java 中处理日期和时间变得更加方便和可靠。相比 Java 8 之前的版本，Java 8 版本的日期时间 API 具有如下几个优点：</p><ol><li><strong>不可变性（Immutability）</strong>：Java 8的日期时间类（如<code>LocalDate</code>、<code>LocalTime</code>和<code>LocalDateTime</code>）都是不可变的，一旦创建就不能被修改。这确保了<strong>线程安全</strong>，避免了并发问题。</li><li><strong>清晰的API设计</strong>：Java 8 的日期时间 API 采用了更清晰、更一致的设计，相比于以前版本的 <code>Date</code> 和 <code>Calendar</code> 更易于理解和使用。而且它们还提供了丰富的方法来执行日期和时间的各种操作，如加减、比较、格式化等。</li><li><strong>本地化支持</strong>：Java 8 的日期时间 API 支持本地化，可以轻松处理不同地区和语言的日期和时间格式。它们能够自动适应不同的时区和夏令时规则。</li><li><strong>新的时区处理</strong>：Java 8引入了 <code>ZoneId</code> 和 <code>ZoneOffset</code> 等新的时区类，使时区处理更加精确和灵活。这有助于解决以前版本中时区处理的问题。</li><li><strong>新的格式化API</strong>：Java 8引入了 <code>DateTimeFormatter</code> 类，用于格式化和解析日期和时间，支持自定义格式和本地化。这提供了更强大和灵活的格式化选项。</li><li><strong>更好的性能</strong>：Java 8 的日期时间API 比以前的API 性能更佳。</li></ol>',5),re={href:"https://www.skjava.com/series/article/1658730277",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://www.skjava.com/series/article/1765935055",target:"_blank",rel:"noopener noreferrer"},ue=d('<h3 id="jep-120-重复注解" tabindex="-1"><a class="header-anchor" href="#jep-120-重复注解" aria-hidden="true">#</a> <strong>JEP 120</strong>：重复注解</h3><p>在 Java 8 之前的版本中，对于一个特定的类型，一个注解在同一个声明上只能使用一次。Java 8 引入了重复注解，它允许对同一个类型的注解在同一声明或类型上多次使用。</p><p>工作原理如下：</p><ol><li><strong>定义重复注解</strong>：您需要定义一个注解，并用 <code>@Repeatable</code> 元注解标注它。<code>@Repeatable</code> 接收一个参数，该参数是一个容器注解，用于存储重复注解的实例。</li><li><strong>定义容器注解</strong>：容器注解定义了一个注解数组，用于存放重复注解的多个实例。这个容器注解也需要具有运行时的保留策略（<code>@Retention(RetentionPolicy.RUNTIME)</code>）。</li></ol>',4),ce={href:"https://www.skjava.com/series/article/8453320489",target:"_blank",rel:"noopener noreferrer"},ve=d('<h3 id="base64-编码解码" tabindex="-1"><a class="header-anchor" href="#base64-编码解码" aria-hidden="true">#</a> Base64 编码解码</h3><p>在 Java 8 之前，我们通常需要依赖于第三方库（如 Apache Commons Codec）或者使用 Java 内部类（如 <code>sun.misc.BASE64Encoder</code> 和 <code>sun.misc.BASE64Decoder</code>）来处理 Base64 编解码。但是这些内部类并非 Java 官方的一部分，它们的使用并不推荐，因为它们可能会在未来的版本中发生变化，造成兼容性问题。同时使用非官方或内部 API 可能导致安全漏洞或运行时错误，所以 Java 8 引入一个新的 Base64 编解码 API，它处理 Base64 编码和解码的官方、标准化的方法。</p><p>Java 8 中的 Base64 API 包含在 <code>java.util</code> 包中。它提供了以下三种类型的 Base64 编解码器：</p><ol><li><strong>基本型（Basic）</strong>：用于处理常规的 Base64 编码和解码。它不对输出进行换行处理，适合于在URLs和文件名中使用。</li><li><strong>URL和文件名安全型（URL and Filename Safe）</strong>：输出映射到一组 URL 和文件名安全的字符集。它使用 &#39;-&#39; 和 &#39;_&#39; 替换标准 Base64 中的 &#39;+&#39; 和 &#39;/&#39; 字符。</li><li><strong>MIME型</strong>：用于处理 MIME 类型的数据（例如，邮件）。它在每行生成 76 个字符后插入一个换行符。</li></ol>',4),me={href:"https://www.skjava.com/series/article/1066055319",target:"_blank",rel:"noopener noreferrer"},pe=d('<h3 id="jep-104-类型注解" tabindex="-1"><a class="header-anchor" href="#jep-104-类型注解" aria-hidden="true">#</a> <strong>JEP 104</strong>：类型注解</h3><p>在 Java 8 之前，注解仅限于声明（如类、方法或字段）。这种限制意味着注解的用途在许多编程情景中受到限制，特别是在需要对类型本身（而不仅仅是声明）进行描述时。为了提高注解的能力，Java 8 引入类型注解来增强注解的功能。</p><p>该特性扩展了注解的应用范围，允许我们将注解应用于任何使用类型的地方，而不仅仅是声明。包括以下情况：</p><ul><li>对象创建（如 <code>new</code> 表达式）</li><li>类型转换和强制类型转换</li><li>实现（implements）语句</li><li>泛型类型参数（如 <code>List&lt;@NonNull String&gt;</code>）</li></ul>',4),be={href:"https://www.skjava.com/series/article/2019475189",target:"_blank",rel:"noopener noreferrer"},ge=d('<h3 id="jep-101-类型推断优化" tabindex="-1"><a class="header-anchor" href="#jep-101-类型推断优化" aria-hidden="true">#</a> <strong>JEP 101</strong>：类型推断优化</h3><p>在 Java 8 之前，Java 的类型推断主要局限于泛型方法调用的返回类型。这意味着在许多情况下，我们不得不显式指定泛型参数，即使它们可以从上下文中推断出来。这种限制使得代码变得冗长且不够直观，特别是在使用泛型集合和泛型方法时。</p><p>为了提高编码效率和可读性，同时简化泛型使用，Java 8 中引入了对类型推断机制的优化，扩大了类型推断的范围，使其能在更多情况下自动推断出类型信息，包括：</p><ol><li><strong>Lambda 表达式中的类型推断</strong>：在使用 Lambda 表达式时，编译器可以根据上下文推断出参数类型，从而减少了在某些情况下编写显式类型的需求。</li><li><strong>泛型方法调用的改进</strong>：在调用泛型方法时，编译器可以更好地推断方法参数、返回类型以及链式调用中间步骤的类型。</li><li><strong>泛型构造器的类型推断</strong>：在创建泛型对象时，编译器能够推断出构造器参数的类型。</li></ol>',4),he={href:"https://www.skjava.com/series/article/6176475946",target:"_blank",rel:"noopener noreferrer"},qe=d('<h3 id="jep-174-nashorn-javascript-引擎" tabindex="-1"><a class="header-anchor" href="#jep-174-nashorn-javascript-引擎" aria-hidden="true">#</a> <strong>JEP 174：Nashorn JavaScript 引擎</strong></h3><p>在 Java 8 之前，Java 平台的主要 JavaScript 引擎是 Mozilla 的 Rhino。Rhino 是一个成熟的引擎，但由于其架构和设计年代较早，它在性能和与 Java 的集成方面存在一些限制。随着 JavaScript 在 Web 和服务器端应用中日益重要，需要一个更现代、更高效的 JavaScript 引擎来提供更好的性能和更深度的 Java 集成。因此，Nashorn 引擎被引入作为 Java 平台的一部分。</p><p>Nashorn 是一个基于 Java 的 JavaScript 引擎，它完全用 Java 语言编写，并且是 Rhino 的替代品。主要特点：</p><ol><li><strong>基于 JVM 的执行</strong>：Nashorn 是作为 Java 虚拟机的一个原生组件实现的，它直接编译 JavaScript 代码到 Java 字节码。这意味着它可以充分利用 JVM 的性能优化和管理能力。</li><li><strong>高性能</strong>：与 Rhino 相比，Nashorn 提供了显著的性能提升，特别是在执行 JavaScript 代码方面。</li><li><strong>与 Java 的深度集成</strong>：Nashorn 允许 JavaScript 代码和 Java 代码之间有更紧密的交互。开发者可以在 JavaScript 中方便地调用 Java 类库和对象，反之亦然。</li><li><strong>ECMAScript 5.1 支持</strong>：Nashorn 支持 ECMAScript 5.1 规范，为开发者提供了一个符合标准的现代 JavaScript 编程环境。</li></ol><h3 id="jep-122-移除permgen" tabindex="-1"><a class="header-anchor" href="#jep-122-移除permgen" aria-hidden="true">#</a> <strong>JEP 122</strong>：移除Permgen</h3><p>在 Java 8 之前，JJVM使用永久代（PermGen）的内存区域来存储类的元数据和方法数据。随着时间的推移，这个设计开始显现出一些问题，特别是在应用程序频繁加载和卸载类的场景中，比如在 Java EE 应用服务器和热部署环境中。</p><p>永久代有一个固定的大小限制，当类的数量和大小超过这个限制时，就会抛出 <code>OutOfMemoryError: PermGen space</code> 错误。这种设计限制了 Java 的灵活性和可伸缩性。</p><p>Java 8 移除永久代并用元空间（Metaspace）的新内存区域来取代它。相比永久代，元空间的具有如下优势：</p><ol><li><strong>基于本地内存</strong>：元空间不在 JVM 的堆内存中，而是直接使用本地内存（操作系统的内存）。这意味着它不再受到 Java 堆大小的限制。</li><li><strong>动态调整大小</strong>：元空间的大小可以根据应用程序的需求动态调整。这减少了内存溢出的风险，并允许应用更高效地管理内存。</li><li><strong>更好的性能</strong>：由于移除了固定大小的限制，元空间可以提供更好的性能，尤其是在大型应用和复杂的部署环境中。</li></ol><h2 id="java-8-新特性—lambda-表达式" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—lambda-表达式" aria-hidden="true">#</a> Java 8 新特性—Lambda 表达式</h2><p><img src="'+u+`" alt="img"></p><h3 id="什么是-lambda-表达式" tabindex="-1"><a class="header-anchor" href="#什么是-lambda-表达式" aria-hidden="true">#</a> 什么是 Lambda 表达式</h3><p>Lambda 表达式是在 Java 8 中引入，并且被吹捧为 Java 8 最大的特性。它是函数式编程的的一个重要特性，标志着 Java 向函数式编程迈出了重要的第一步。</p><p>它的语法如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>(parameters) -&gt; expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>(parameters) -&gt; { statements; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中</p><ul><li><code>parameters</code> ：是 Lambda表达式的参数列表，可以为空或包含一个或多个参数。</li><li><code>-&gt;</code> ：是 Lambda 操作符，用于将参数和 Lambda 主体分开。</li><li><code>expression</code> ：是 Lambda 表达式的返回值，或者在主体中执行的单一表达式。</li><li><code>{ statements; }</code> ：是 Lambda 主体，包含了一系列语句，如果需要执行多个操作，就需要使用这种形式。</li></ul><p>Java 8 引入 Lambda 表达式的主要作用是简化部分匿名内部类的写法。使用它可以完成用少量的代码实现复杂的功能，极大的简化代码代码量和代码结构。同时，JDK 中也增加了大量的内置函数式接口供我们使用，使得在使用 Lambda 表达式时更加简单、高效。</p><p>下面我们就来看它的一些常见用法。</p><h3 id="常见用法" tabindex="-1"><a class="header-anchor" href="#常见用法" aria-hidden="true">#</a> 常见用法</h3><h4 id="无参数-无返回值" tabindex="-1"><a class="header-anchor" href="#无参数-无返回值" aria-hidden="true">#</a> 无参数，无返回值</h4><p>例如 <code>Runnable</code> 接口的 <code>run()</code>。</p><p>在 Java 8 版本之前的版本，我们一般都是这样用：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>        new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println(&quot;死磕 Java 就是牛逼...&quot;);
            }
        }).start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 Java 8 开始，无参数匿名内部类可以简写成如下这种方式：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>() -&gt; {
    执行语句
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以上面代码可以简写成这样的：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>new Thread(() -&gt; System.out.println(&quot;死磕 Java 就是牛逼...&quot;)).start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="单参数-无返回值" tabindex="-1"><a class="header-anchor" href="#单参数-无返回值" aria-hidden="true">#</a> 单参数，无返回值</h4><p>只有一个参数，无返回值，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>(x) -&gt; System.out.println(x);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Java 8 中，有一个函数式接口 Consumer，它定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@FunctionalInterface
public interface Consumer&lt;T&gt; {

    void accept(T t);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们用它来演示下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>        Consumer&lt;String&gt; consumer = (String s) -&gt; {
            System.out.println(s);
        };
        
        consumer.accept(&quot;死磕 Java 就是牛...&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是比较简便，但是这段代码还不够简便，它还可以进行多次优化，</p><ul><li>如果 Lambda 主体只有一条语句，则 <code>{、}</code> 可以省略</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Consumer&lt;String&gt; consumer = (String s) -&gt; System.out.println(s);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Lambda 表达式有一个依据：<strong>类型推断机制</strong>。在上下文信息足够的情况下，编译器可以推断出参数表的类型，而不需要显式指名。所以 <code>(String s)</code> 可以简写为 <code>(s)</code>：</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Consumer&lt;String&gt; consumer = (s) -&gt; System.out.println(s);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>对于只有一个参数的情况，左侧括号可以省略：</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Consumer&lt;String&gt; consumer = s -&gt; System.out.println(s);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="多参数-有返回值" tabindex="-1"><a class="header-anchor" href="#多参数-有返回值" aria-hidden="true">#</a> 多参数，有返回值</h4><p>如 Comparator 接口的 <code>compare(T o1, T o2)</code> 方法，在 Java 8 之前，写法如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>        Comparator&lt;Integer&gt; comparator = new Comparator&lt;Integer&gt;() {
            @Override
            public int compare(Integer o1, Integer o2) {
                System.out.println(&quot;o1:&quot; + o1);
                System.out.println(&quot;o2:&quot; + o2);
                return o1.compareTo(o2);
            }
        };
        
        comparator.compare(12,13);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Lambda 表达式后：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>        Comparator&lt;Integer&gt; comparator = (o1, o2) -&gt; {
            System.out.println(&quot;o1:&quot; + o1);
            System.out.println(&quot;o2:&quot; + o2);
            return o1.compareTo(o2);
        };

        comparator.compare(12,13);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果去掉 <code>System.out.println()</code>，还可以简写为 <code>Comparator&lt;Integer&gt; comparator = (o1, o2) -&gt; o1.compareTo(o2);</code> ，这里是可以省略 return 关键字的。</p><p>这里就 Lambda 的简写做一个总结：</p><ol><li><strong>类型推断</strong>：编译器可以根据上下文推断 Lambda 表达式的参数类型，从而可以省略参数类型的声明。</li><li><strong>单一参数</strong>：当 Lambda 表达式只有一个参数时，可以省略参数外的括号。如: <code>(x) → x * 2</code> 可以简写为 <code>x → x * 2</code> 。</li><li><strong>单表达式</strong>：当 Lambda 表达式只有一行代码时，可以省略大括号和 return 关键字。如 <code>(x,y) → {return x + y}</code> 可以简写为 <code>(x,y) → x + y</code>。</li></ol><h3 id="lambda-简写依据" tabindex="-1"><a class="header-anchor" href="#lambda-简写依据" aria-hidden="true">#</a> Lambda 简写依据</h3><p>Lambda 简写的依据有两个：</p><blockquote><p><strong>1、必须有相应的函数式接口</strong></p></blockquote><p>所谓函数式接口函数式就是指只包含一个抽象方法的接口，它是在 Java 8 版本中引入的，其主要目的是支持函数式编程，有了函数式接口我们可以将函数作为参数传递、将函数作为返回值返回，同时也为使用 Lambda 表达式提供了支持。</p><p>函数式接口具有以下特征：</p><ol><li><strong>只包含一个抽象方法</strong>：函数式接口只能有一个抽象方法，但可以包含多个默认方法或静态方法（Java 8 中有另一个新特性：<code>default</code> 关键字）。这个唯一的抽象方法通常用来表示某种功能或操作。</li><li><strong>用</strong>**<code>@FunctionalInterface</code>**<strong>注解标记</strong>：注解不强制，但通常会使用它来标记该接口为函数式接口。这样做可以让编译器检查接口是否符合函数式接口的定义，以避免不必要的错误。</li></ol><blockquote><p><strong>2、类型推断机制</strong></p></blockquote><p>类型推断机制则是允许编译器根据上下文自动推断 Lambda 表达式的参数类型。这个推断过程包括两个方面：</p><ol><li><strong>目标类型推断</strong></li></ol><p>编译器会根据 Lambda 表达式在赋值、传参等地方的上下文来推断Lambda表达式的目标类型。例如，如果Lambda表达式被赋值给一个接口类型的变量，编译器会根据该接口的抽象方法来推断Lambda表达式的参数类型。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Runnable runnable = () -&gt; System.out.println(&quot;死磕 Java 就是牛...&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Lambda表达式被赋值给了 Runnable 类型的变量，所以编译器知道 Lambda 表达式需要没有参数且返回类型为<code>void</code>的方法。</p><ol><li><strong>参数类型推断</strong></li></ol><p>如果 Lambda 表达式的参数类型可以从上下文中唯一确定，编译器会自动推断参数的类型。例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; skList = Arrays.asList(&quot;死磕 Java 并发&quot;, &quot;死磕 Netty&quot;, &quot;死磕 NIO&quot;,&quot;死磕 Spring&quot;);
skList.forEach(sk -&gt; System.out.println(sk));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>forEach</code>方法期望一个参数类型为<code>Consumer&lt;String&gt;</code>的函数，编译器可以从 <code>sk</code>的类型推断出Lambda表达式的参数类型为<code>String</code>。</p><p>虽然类型推断机制允许省略Lambda表达式的参数类型，但有时候显式声明参数类型可以增强代码的可读性和处理复杂的泛型情况，这个时候我们还是将参数类型写上会显得更加友好。</p><h2 id="java-8-新特性—函数式接口" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—函数式接口" aria-hidden="true">#</a> Java 8 新特性—函数式接口</h2>`,70),Je={href:"https://www.skjava.com/series/article/1747461365",target:"_blank",rel:"noopener noreferrer"},Se=d('<p><img src="'+c+`" alt="img"></p><h3 id="什么是函数式接口" tabindex="-1"><a class="header-anchor" href="#什么是函数式接口" aria-hidden="true">#</a> 什么是函数式接口</h3><p>函数式接口是一个只有一个抽象方法的接口，最开始的时候也叫做 <strong>SAM 类型</strong>的接口（<code>Single Abstract Method</code>）。它具有两个特点：</p><ol><li><strong>只包含一个抽象方法</strong>：函数式接口只能有一个抽象方法，但可以包含多个默认方法或静态方法。</li><li><strong>用</strong>**<code>@FunctionalInterface</code>**<strong>注解标记</strong>：该注解不强制，但通常会使用它来标记该接口为函数式接口。这样做可以让编译器检查接口是否符合函数式接口的定义，以避免不必要的错误。</li></ol><p>Java 引入函数式接口的主要目的是支持函数式编程范式，也就是 Lambda 表达式。在函数式编程语言中，函数被当做一等公民对待，Lambda 表达式的类型是函数，它可以像其他数据类型一样进行传递、赋值和操作。但是在 Java 中，“<strong>一切皆对象</strong>”是不可违背的宗旨，所以 Lambda 表达式是对象，而不是函数，他们必须要依附于一类特别的对象类型：函数式接口。</p><blockquote><p>所以，<strong>从本质上来说 Lambda 表达式就是一个函数式接口的实例</strong>。这就是 Lambda 表达式和函数式接口的关系。简单理解就是只要一个对象时函数式接口的实例，那么该对象就可以用 Lambda 表达式来表示。</p></blockquote><h3 id="自定义函数式接口" tabindex="-1"><a class="header-anchor" href="#自定义函数式接口" aria-hidden="true">#</a> 自定义函数式接口</h3><p>根据函数式接口的定义和特点，我们可以自定义函数式接口：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@FunctionalInterface
public interface FunctionInterface {

    /**
     * 抽象方法
     */
    void doSomething();

    /**
     * 默认方法
     * @param s
     */
    default void defaultMethod(String s) {
        System.out.println(&quot;默认方法：&quot; + s);
    }

    /**
     * 静态方法
     * @param s
     */
    static void staticMethod(String s) {
        System.out.println(&quot;静态方法：&quot; + s);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FunctionInterface 是一个自定义函数式接口，它只包含一个抽象方法 <code>doSomething()</code>，还包含一个默认方法 <code>defaultMethod(String s)</code> 和一个静态方法 <code>staticMethod(String s)</code>，这两个方法都是可选的。</p><p><code>@FunctionalInterface</code> 注解是可写可可不写的，但是我们一般都推荐写，写上他可以让编译器检查接口是否符合函数式接口的定义，以避免不必要的错误，比如：</p><p><img src="`+v+`" alt="img"></p><p>上面接口定义了两个抽象方法，它会明确告诉你错误了。</p><p>使用如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>        FunctionInterface functionInterface = () -&gt; {
            System.out.println(&quot;死磕 Java 就是牛...&quot;);
        };

        // 调用抽象方法
        functionInterface.doSomething();
        // 调用默认方法
        functionInterface.defaultMethod(&quot;死磕 Netty 就是牛...&quot;);
        // 调用静态方法
        FunctionInterface.staticMethod(&quot;死磕 Java 并发就是牛...&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行如下：</p><p><img src="`+m+`" alt="img"></p><h3 id="常用函数式接口" tabindex="-1"><a class="header-anchor" href="#常用函数式接口" aria-hidden="true">#</a> 常用函数式接口</h3><p>其实在 Java 8 之前就已经有了大量的函数式接口，我们最熟悉的就是 <code>java.lang.Runnable</code>接口了。Java 8 之前已有的函数式接口：</p><ul><li><code>java.lang.Runnable</code></li><li><code>java.util.concurrent.Callable</code></li><li><code>java.security.PrivilegedAction</code></li><li><code>java.util.Comparator</code></li><li><code>java.io.FileFilter</code></li><li><code>java.nio.file.PathMatcher</code></li><li><code>java.lang.reflect.InvocationHandler</code></li><li><code>java.beans.PropertyChangeListener</code></li><li><code>java.awt.event.ActionListener</code></li><li><code>javax.swing.event.ChangeListener</code></li></ul><p>而在 Java 8 中，新增的函数式接口都在 <code>java.util.function</code> 包中，里面有很多函数式接口，用来支持 Java 的函数式编程，从而丰富了 Lambda 表达式的使用场景。我们使用最多的也是最核心的函数式接口有四个：</p><ul><li><code>java.util.function.Consumer</code>：消费型接口</li><li><code>java.util.function.Function</code>：函数型接口</li><li><code>java.util.function.Supplier</code>：供给型接口</li><li><code>java.util.function.Predicate</code>：断定型接口</li></ul><p>下面我们就来看这四个函数式接口的使用方法</p><h4 id="consumer-接口" tabindex="-1"><a class="header-anchor" href="#consumer-接口" aria-hidden="true">#</a> Consumer 接口</h4><p>Consumer 代表这一个接受一个输入参数并且不返回任何结果的操作。它包含一个抽象方法 <code>accept(T t)</code>，该方法接受一个参数 <code>t</code>，并对该参数执行某种操作：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@FunctionalInterface
public interface Consumer&lt;T&gt; {
    void accept(T t);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 Consumer 接口中包含的抽象方法不返回结果，所以它通常用于对对象进行一些操作，如修改、输出、打印等。它的使用方法也比较简单，分为两步。</p><ol><li><strong>创建一个 Consumer 对象</strong>：使用 Lambda 表达式来创建一个对象，定义在 <code>accept(T t)</code> 中要执行的操作。</li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Consumer&lt;String&gt; consumer = str -&gt; System.out.println(str);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><strong>使用 Consumer 对象</strong></li></ol><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>consumer.accept(&quot;死磕 Java 就是牛...&quot;);

// 输出结果...

死磕 Java 就是牛...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Consumer 接口中还有一个默认方法 <code>andThen()</code>，该方法接受一个 Consumer 实例对象 after，它允许我们将两个 Consumer 对象组合在一起，形成一个新的 Consumer 对象，该新对象按照顺序执行这两个 Consumer 对象的操作。先执行调用<code>andThen()</code>接口的<code>accept()</code>，然后再执行<code>andThen()</code>参数after中的<code>accept()</code>。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Consumer&lt;String&gt; consumer1 = str -&gt; System.out.println(&quot;consumer1：&quot; + str);
Consumer&lt;String&gt; consumer2 = str -&gt; System.out.println(&quot;consumer2：&quot; + str);

consumer1.andThen(consumer2).accept(&quot;死磕 Java 就是牛..&quot;);

// 输出结果...

consumer1：死磕 Java 就是牛..
consumer2：死磕 Java 就是牛..
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="function-接口" tabindex="-1"><a class="header-anchor" href="#function-接口" aria-hidden="true">#</a> Function 接口</h4><p>Function 代表一个接受一个输入参数并且产生一个输出结果的函数。它包含一个抽象方法 <code>R apply(T t)</code>，该方法接受一个参数 <code>t</code>（类型为 <code>T</code>），并返回一个结果（类型为 <code>R</code>），我们可以理解为根据一个数据类型 T ，经过一系列的操作后得到类型 R。Function 接口是非常通用的，应该是他们四个当中使用最为广泛的。</p><blockquote><p><strong>用途一：函数转换</strong></p></blockquote><p>Function 可以用于将一个类型的值转换为另一个类型的值。它可以用于各种转换操作，如类型转换、数据映射等。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Function&lt;String,Integer&gt; function = str -&gt; Integer.parseInt(str);
int result = function.apply(&quot;456&quot;);
// 输出结果...
456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>用途二：数据处理</strong></p></blockquote><p>Function 可用于对输入数据进行处理并生成输出结果。它可以用于执行各种操作，如过滤、计算、提取、格式化等。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Function&lt;List&lt;String&gt;, String&gt; function = list -&gt; {
    StringBuilder result = new StringBuilder();
        for (String str : list) {
            if (str.startsWith(&quot;李&quot;)) {
                result.append(str).append(&quot;,&quot;);
            }
        }

        return result.toString();
    };
List&lt;String&gt; list = Arrays.asList(&quot;张三&quot;,&quot;李四&quot;,&quot;李武&quot;,&quot;李柳&quot;);
System.out.println(function.apply(list));
// 输出结果...
李四,李武,李柳,   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>andThen()</code><strong>：方法链式调用</strong></p></blockquote><p><code>andThen()</code> 接受一个 Function 作为参数，并返回一个新的 Function，该新函数首先应用当前函数，然后将结果传递给参数函数。这种方法链的方式可以用于将多个函数组合在一起，以执行一系列操作。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Function&lt;String,Integer&gt; function1 = t -&gt; Integer.parseInt(t);
Function&lt;Integer,Integer&gt; function2 = t -&gt; t * 10;
System.out.println(function1.andThen(function2).apply(&quot;20&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>先将 String 转换为 Integer，然后再 <code>* 10</code>，利用 <code>andThen()</code> 我们可以进行一系列复杂的操作。</p><blockquote><p><code>compose()</code><strong>：顺序执行</strong></p></blockquote><p><code>compose()</code> 与 <code>andThen()</code>相反，它首先应用参数函数，然后再应用当前函数，这种可能更加好理解些，常用于一些顺序执行。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Function&lt;String,Integer&gt; function1 = t -&gt; {
  System.out.println(&quot;function1&quot;);
  return Integer.parseInt(t);
};
Function&lt;Integer,Integer&gt; function2 = t -&gt; {
  System.out.println(&quot;function2&quot;);
  return t * 10;
};
Function&lt;Integer,String&gt; function3 = t -&gt; {
  System.out.println(&quot;function3&quot;);
  return t.toString();
};
System.out.println(function3.compose(function2.compose(function1)).apply(&quot;20&quot;));
        
// 输出结果...
function1
function2
function3
200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果中可以更加直观地看清楚他们的执行顺序。</p><blockquote><p><code>identity()</code>：<strong>恒等函数</strong></p></blockquote><p><code>identity()</code> 返回一个恒等函数，它仅返回其输入值，对输入值不进行任何操作。源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    static &lt;T&gt; Function&lt;T, T&gt; identity() {
        return t -&gt; t;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一看感觉 <code>identity()</code> 没啥用处，其实它在某些场景大有用处，例如</p><ul><li><strong>作为默认函数</strong></li></ul><p><code>identity()</code> 可以作为函数组合链中的起点或默认函数。当我们想构建一个函数组合链时，可以使用 <code>identity</code> 作为初始函数，然后使用 <code>andThen()</code> 或 <code>compose()</code> 方法添加其他函数。这种方式允许您以一种优雅的方式处理链的起点。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Function&lt;String,String&gt; function1 = Function.identity();
Function&lt;String,String&gt; function2 = str -&gt; str.toUpperCase();
Function&lt;String,String&gt; function3 = str -&gt; str + &quot; WORLD!!!&quot;;

System.out.println(function3.compose(function2.compose(function1)).apply(&quot;hello&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>保持一致性</strong></li></ul><p>在某些情况下，我们可能需要一个函数，但不需要对输入进行任何操作。使用 <code>identity()</code> 可以确保函数的签名（输入和输出类型）与其他函数一致。</p><h4 id="supplier-接口" tabindex="-1"><a class="header-anchor" href="#supplier-接口" aria-hidden="true">#</a> Supplier 接口</h4><p>Supplier 是一个代表生产（或供应）某种结果的接口，它不接受任何参数，但能够提供一个结果。它定义了一个 <code>get()</code> 的抽象方法，用于获取结果。</p><p>接口定义简单，使用也简单：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Supplier&lt;LocalDate&gt; supplier = () -&gt; LocalDate.now();
LocalDate localDate = supplier.get();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Supplier 接口通常用于惰性求值，只有在需要结果的时候才会执行 <code>get()</code> 。这对于延迟计算和性能优化非常有用。</p><h4 id="predicate-接口" tabindex="-1"><a class="header-anchor" href="#predicate-接口" aria-hidden="true">#</a> Predicate 接口</h4><p>Predicate 表示一个谓词，它接受一个输入参数并返回一个布尔值，用于表示某个条件是否满足。抽象方法为 <code>test()</code>，使用如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Predicate&lt;String&gt; predicate = str -&gt; str.length() &gt; 10;
boolean result = predicate.test(&quot;www.skjava.com&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>判断某个字符长度是否大于 10。</p><blockquote><p><code>and()</code>：表示两个 Predicate 的 与操作</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Predicate&lt;Integer&gt; predicate1 = x -&gt; x &gt; 10;
Predicate&lt;Integer&gt; predicate2 = x -&gt; x % 2 == 0;
boolean result = predicate1.and(predicate2).test(13);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>or()</code>：表示两个 Predicate 的或操作</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Predicate&lt;Integer&gt; predicate1 = x -&gt; x &gt; 10;
Predicate&lt;Integer&gt; predicate2 = x -&gt; x % 2 == 0;
boolean result = predicate1.or(predicate2).test(13);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>negate()</code>：表示 Predicate 的逻辑非操作</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Predicate&lt;Integer&gt; predicate1 = x -&gt; x &gt; 10;
boolean result = predicate1.negate().test(14);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="其他函数式接口" tabindex="-1"><a class="header-anchor" href="#其他函数式接口" aria-hidden="true">#</a> 其他函数式接口</h4><p>除了上面四个常用的函数式接口外，<code>java.util.function</code> 包下面还定义了很多函数式接口，下面做一个简单的介绍：</p><table><thead><tr><th>接口</th><th>说明</th></tr></thead><tbody><tr><td>BiConsumer&lt;T,U&gt;</td><td>表示接受两个不同类型的参数，但不返回任何结果的操作</td></tr><tr><td>BiFunction&lt;T,U,R&gt;</td><td>表示接受两个不同类型的参数，并返回一个其它类型的结果的操作</td></tr><tr><td>BinaryOperator</td><td>表示接受两个相同类型的参数，并返回一个同一类型的结果的操作</td></tr><tr><td>BiPredicate&lt;T,U&gt;</td><td>表示接受两个不同诶行的参数，且返回布尔类型的结果的操作</td></tr><tr><td>BooleanSupplier</td><td>不接受任何参数，且返回一个布尔类型的结果的操作</td></tr><tr><td>DoubleBinaryOperator</td><td>表示接受两个double类型的参数，并返回double类型结果的操作</td></tr><tr><td>DoubleConsumer</td><td>表示接受一个double类型的参数，但不返回任何结果的操作</td></tr><tr><td>DoubleFunction</td><td>表示接受一个double类型的参数，且返回一个R类型的结果的操作</td></tr><tr><td>DoublePredicate</td><td>表示一个接受两个double类型的参数，且返回一个布尔类型的结果的操作</td></tr><tr><td>DoubleSupplier</td><td>表示一个不接受任何参数，但返回布尔类型的结果的操作</td></tr><tr><td>DoubleToIntFunction</td><td>表示接受两个double类型的参数，但返回一个int类型的结果的操作</td></tr><tr><td>DoubleToLongFunction</td><td>表示接受两个double类型的参数，但返回一个long类型的结果的操作</td></tr><tr><td>DoubleUnaryOperator</td><td>表示接受一个double类型的参数，且返回一个double类型的结果的操作</td></tr><tr><td>IntBinaryOperator</td><td>表示一个接受两个int类型的参数，且返回一个int类型的结果的操作</td></tr><tr><td>IntConsumer</td><td>表示接受一个int类型的参数，但不返回任何结果的操作</td></tr><tr><td>IntFunction</td><td>表示接受一个int类型的参数，但返回一个R类型的结果的操作</td></tr><tr><td>IntPredicate</td><td>表示接受一个int类型的参数，但返回布尔类型的结果的操作</td></tr><tr><td>IntSupplier</td><td>表示不接受任何参数，但返回一个int类型的结果的操作</td></tr><tr><td>IntToDoubleFunction</td><td>表示接受一个int类型的参数，但返回一个double类型的结果的操作</td></tr><tr><td>IntToLongFunction</td><td>表示接受一个int类型的参数，但返回一个long类型的结果的操作</td></tr><tr><td>IntUnaryOperator</td><td>表示接受一个int类型的参数，且返回一个int类型的结果的操作</td></tr><tr><td>LongBinaryOperator</td><td>表示接受两个long类型的参数，且返回一个long类型的结果的操作</td></tr><tr><td>LongConsumer</td><td>表示不接受任何参数，但返回一个long类型的结果的操作</td></tr><tr><td>LongFunction</td><td>表示接受一个loing类型的参数，但返回一个R类型的结果的操作</td></tr><tr><td>LongPredicate</td><td>表示接受一个long类型的参数，但返回布尔类型的结果的操作</td></tr><tr><td>LongSupplier</td><td>表示不接受任何参数，但返回一个long类型的结果的操作</td></tr><tr><td>LongToDoubleFunction</td><td>表示接受一个long类型的参数，但返回一个double类型的结果的函数</td></tr><tr><td>LongToIntFunction</td><td>表示接受一个long类型的参数，但返回int类型的结果的函数</td></tr><tr><td>LongUnaryOperator</td><td>表示接受一个long类型的参数，并返回一个long类型的结果的操作</td></tr><tr><td>ObjDoubleConsumer</td><td>表示接受两个参数，一个为T类型的对象，另一个double类型，但不返回任何结果的操作</td></tr><tr><td>ObjIntConsumer</td><td>表示接受两个参数，一个为T类型的对象，另一个int类型，但不返回任何结果的操作</td></tr><tr><td>ObjLongConsumer</td><td>表示接受两个参数，一个为T类型的对象，另一个double类型，但不返回任何结果的操作</td></tr><tr><td>ToDoubleBiFunction&lt;T,U&gt;</td><td>表示接受两个不同类型的参数，但返回一个double类型的结果的操作</td></tr><tr><td>ToDoubleFunction</td><td>表示一个接受指定类型T的参数，并返回一个double类型的结果的操作</td></tr><tr><td>ToIntBiFunction&lt;T,U&gt;</td><td>表示接受两个不同类型的参数，但返回一个int类型的结果的操作</td></tr><tr><td>ToIntFunction</td><td>表示一个接受指定类型T的参数，并返回一个int类型的结果的操作</td></tr><tr><td>ToLongBiFunction&lt;T,U&gt;</td><td>表示接受两个不同类型的参数，但返回一个long类型的结果的操作</td></tr><tr><td>ToLongFunction</td><td>表示一个接受指定类型的参数，并返回一个long类型的结果的操作</td></tr><tr><td>UnaryOperator</td><td>表示接受一个参数，并返回一个与参数类型相同的结果的操作</td></tr></tbody></table><p>函数式接口使用非常灵活，上面的举例都是很简单的 demo，它需要我们在日常开发过程中多多使用才能灵活地运用它。</p><h2 id="java-8-新特性—方法引用和构造器引用" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—方法引用和构造器引用" aria-hidden="true">#</a> Java 8 新特性—方法引用和构造器引用</h2>`,78),fe={href:"https://www.skjava.com/series/article/1747461365",target:"_blank",rel:"noopener noreferrer"},ye=d('<p><img src="'+p+`" alt="img"></p><h3 id="什么是方法引用" tabindex="-1"><a class="header-anchor" href="#什么是方法引用" aria-hidden="true">#</a> 什么是方法引用</h3><p>我们先看一个例子。首先定义一个 Student 类：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Student {
    private String name;

    private Integer age;

    public static int compareByAge(Student a,Student b) {
        return a.getAge().compareTo(b.getAge());
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Student 中含有一个静态方法 <code>compareByAge()</code>，它是用来比较年龄的。</p><p>现在需要实现一个需求，有一批学生我们希望能够根据 age 进行排序。</p><p>在没有学习 Lambda 表达式时，我们这样写：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MethodReferenceTest {
    public static void main(String[] args) {
        List&lt;Student&gt; studentList = Arrays.asList(
                new Student(&quot;小明&quot;,16),
                new Student(&quot;小红&quot;,14),
                new Student(&quot;小兰&quot;,15),
                new Student(&quot;小李&quot;,18),
                new Student(&quot;小张&quot;,14),
                new Student(&quot;小林&quot;,15)
        );

        Collections.sort(studentList, new Comparator&lt;Student&gt;() {
            @Override
            public int compare(Student o1, Student o2) {
                return o1.getAge().compareTo(o2.getAge());
            }
        });
        System.out.println(studentList);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>学习了 Lambda 表达式后，我们知道 Comparator 接口是一个函数式接口，因此我们可以使用Lambda表达式，而不需要使用这种匿名内部类的方式：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MethodReferenceTest {
    public static void main(String[] args) {
        // 省略代码...

        Collections.sort(studentList, (o1,o2) -&gt; Student.compareByAge(o1,o2));
        System.out.println(studentList);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，这里我们是使用 Student 类中的静态方法：<code>compareByAge()</code>。到这里后其实还有进一步的优化空间：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MethodReferenceTest {
    public static void main(String[] args) {
        // 省略代码...

        Collections.sort(studentList, Student::compareByAge);
        System.out.println(studentList);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码将 Lambda 表达式 <code>(o1,o2) -&gt; Student.compareByAge(o1,o2)</code> 转变为了 <code>Student::compareByAge</code> 是不是很懵逼？</p><p><code>Student::compareByAge</code> 写法就是我们这篇文章要讲的方法引用。那什么是方法引用呢？</p><blockquote><p>方法引用是 Java 8 引入的特性，它提供了一种更加简洁的可用作 Lambda 表达式的表达方式。 定义：<strong>方法引用是用来直接访问类或者实例的已经存在的方法或者构造方法。</strong></p></blockquote><p>我们可以简单认为，方法引用是一种更加简洁易懂的 Lambda表达式。当 Lambda 表达式的主体中只有一个执行方法的调用时，我们可以不使用 Lambda 表达式，而是选择更加简洁的方法引用，这样可读性更高一些。</p><h3 id="三种方法引用类型" tabindex="-1"><a class="header-anchor" href="#三种方法引用类型" aria-hidden="true">#</a> 三种方法引用类型</h3><p>方法引用的标准格式是：<code>类名::方法名</code>。它有如下三种类型：</p><table><thead><tr><th><strong>类型</strong></th><th><strong>格式</strong></th></tr></thead><tbody><tr><td>引用静态方法</td><td><code>类名::静态方法名</code></td></tr><tr><td>引用对象的实例方法</td><td><code>实例对象::方法名</code></td></tr><tr><td>引用类型的任意对象的实例方法</td><td><code>类名::实例方法名</code></td></tr></tbody></table><p>下面我们来看这三种类型的使用方法。</p><h4 id="引用静态方法" tabindex="-1"><a class="header-anchor" href="#引用静态方法" aria-hidden="true">#</a> 引用静态方法</h4><p>引用静态方法的格式是：<code>类名::静态方法名</code>。这个是其实和我们使用静态方法一样，只不过是将 <code>“.”</code> 替换成了 <code>“::”</code>。其实我们上面那个例子就是引用静态方法的例子，这里大明哥再举一个示例，<code>java.lang.Math</code> 中有很多静态方法，比如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// Lambda 表达式
Function&lt;Integer,Integer&gt; function1 = t -&gt; Math.abs(t);
int result1 = function1.apply(-123);
        
// 方法引用
Function&lt;Integer,Integer&gt; function2 = Math::abs;
int result2 = function2.apply(-123); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="引用对象的实例方法" tabindex="-1"><a class="header-anchor" href="#引用对象的实例方法" aria-hidden="true">#</a> 引用对象的实例方法</h4><p>引用对象的实力方法格式是：<code>实例对象名::实例方法名</code>，这种方式引用的是一个实例方法，所以需要提供一个对象实例来引用，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Student student = new Student(&quot;小明&quot;,15);

// Lambda 表达式
Supplier&lt;String&gt; supplier1 = () -&gt; student.getName();
String name1 = supplier1.get();
 
// 方法引用  
Supplier&lt;String&gt; supplier2 = student::getName;
String name2 = supplier2.get();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式在我们使用 Stream 来操作集合时用得非常多。</p><h4 id="引用类型的任意对象的实例方法" tabindex="-1"><a class="header-anchor" href="#引用类型的任意对象的实例方法" aria-hidden="true">#</a> 引用类型的任意对象的实例方法</h4><p>引用类型的任意对象的实例方法的格式是：<code>类名::实例方法名</code>，这个有点儿不是很好理解。这种引用方式引用的是一个特定对象的实例方法，通常在函数式接口中作为第一个参数传递给方法引用，怎么理解呢？我们看下面两个例子：</p><p>比如 Comparator 中的 <code>int compare(T o1, T o2)</code>，我们需要比较两个字符串的大小，使用方式如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Comparator&lt;String&gt; comparator = (o1,o2) -&gt; o1.compareTo(o2);
System.out.println(comparator.compare(&quot;sike&quot;,&quot;sk&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>改成 <code>类名::实例方法名</code> 怎么改呢？</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Comparator&lt;String&gt; comparator = String::compareTo;
System.out.println(comparator.compare(&quot;sike&quot;,&quot;sk&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是比较懵逼？再看一个：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// Lambda 表达式
List&lt;String&gt; list = Arrays.asList(&quot;xiaoming&quot;,&quot;xiaohong&quot;,&quot;xiaoli&quot;,&quot;xiaodu&quot;);
list.forEach(name -&gt; name.toUpperCase());
// 方法引用
List&lt;String&gt; list = Arrays.asList(&quot;xiaoming&quot;,&quot;xiaohong&quot;,&quot;xiaoli&quot;,&quot;xiaodu&quot;);
list.forEach(String::toUpperCase);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是比较懵？其实大明哥看到这个也比较懵，确实是不好理解，但是没关系，最后面大明哥教你们一个终极神器，让你使用方法引用不再困难。</p><h3 id="方法引用的前提条件" tabindex="-1"><a class="header-anchor" href="#方法引用的前提条件" aria-hidden="true">#</a> 方法引用的前提条件</h3><p>方法引用确实可以极大地降低我们的代码量也更加清晰了，但是并不是所有的 Lambda 表达式都可以转换为方法引用。它有如下几个前提条件。</p><blockquote><p><strong>1、Lambda 表达式中只有一个调用方法的代码</strong></p></blockquote><p>注意这个<strong>一个调用方法</strong>的含义，它包含两重意思。</p><ul><li>只有一行代码</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; list = Arrays.asList(&quot;xiaoming&quot;,&quot;xiaohong&quot;,&quot;xiaoli&quot;,&quot;xiaodu&quot;);
list.forEach(name -&gt; {
    System.out.println(&quot;www.skjava.com&quot;);
    name.toUpperCase();
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 Lambda 中有两行代码，这是无法转换为方法引用的。</p><ul><li>只有一个调用方法</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; list = Arrays.asList(&quot;xiaoming&quot;,&quot;xiaohong&quot;,&quot;xiaoli&quot;,&quot;xiaodu&quot;);
list.forEach(name -&gt; System.out.println(name.toUpperCase()));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法也是转换不了的，虽然只有一行代码，但是它调用了两个方法。</p><blockquote><p><strong>2、方法引用的目标方法必须与Lambda 表达式的函数接口的抽象方法参数类型和返回类型相匹配</strong></p></blockquote><p>这就意味着目标方法的参数数量、类型以及返回类型必须与函数接口的要求一致。但是它只能规范<strong>引用静态方法</strong>和<strong>引用对象的实例方法</strong>，而<strong>引用类型的任意对象的实例方法</strong>这种类型其实是不适用。</p><blockquote><p><strong>3、如果方法引用是通过对象引用来实现的，那么 Lambda 表达式中的参数列表的第一个参数必须是方法引用的目标方法的隐式参数，而其余参数（如果有的话）必须与方法引用的目标方法的参数一致。</strong></p></blockquote><p>比如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>BiConsumer&lt;Student,Integer&gt; consumer = (stu,age) -&gt; stu.setAge(age);
改成
BiConsumer&lt;Student,Integer&gt; consumer = Student::setAge;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Lambda 表达式有两个参数 <code>(stu,age)</code>，第一个参数 <code>stu</code> 是目标方法 <code>setAge()</code> 的隐式参数，其余参数 （<code>age</code>）与方法引用的目标方法 （<code>setAge(Integer age)</code> ）的参数 <code>(Integer age)</code> 是一致的。这种就可以改写。</p><p>又如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Comparator&lt;String&gt; comparator = (o1,o2) -&gt; o1.compareTo(o2);
改为
Comparator&lt;String&gt; comparator = String::compareTo;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法引用简单是简单，就是不好理解，尤其是 <code>类名::实例方法</code> 格式的，直接会让人懵逼，还有我们有终极神器。</p><h3 id="方法引用的终极神器" tabindex="-1"><a class="header-anchor" href="#方法引用的终极神器" aria-hidden="true">#</a> 方法引用的终极神器</h3><p>这个终极神器其实就是 idea。idea 不管是对于 Lambda 表达式还是方法引用其实都是有提示的，例如：</p><p><img src="`+b+'" alt="img"></p><p>idea 会直接提示你该 Lambda 表达式可以简化为 <code>String::compareTo</code>，是不是很给力。再如：</p><p><img src="'+g+`" alt="img"></p><p>直接提示你可以简化为 Lambda 表达式。所以<strong>工欲善其事必先利其器</strong>。</p><h3 id="构造器引用" tabindex="-1"><a class="header-anchor" href="#构造器引用" aria-hidden="true">#</a> 构造器引用</h3><p>构造器引用提供了一种更加简介的方式来创建对象，语法格式是 ：<code>类::new</code>。调用哪个构造器取决于函数式接口中的方法形参的定义，Lambda 表达式会自动根据接口方法推断出你要调用的构造器。</p><ul><li>调用无参构造器</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// Lambda 表达式
Supplier&lt;Student&gt; supplier = () -&gt; new Student();
// 方法引用
Supplier&lt;Student&gt; supplier = Student::new;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调用有参构造器</li></ul><p>例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// Lambda 表达式
Function&lt;String,Student&gt; function = name -&gt; new Student(name);
// 方法引用
Function&lt;String,Student&gt; function = Student::new;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个是调用的构造器为：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public Student(String name) {
        this.name = name;
    }  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// Lambda 表达式
BiFunction&lt;String,Integer,Student&gt; function = (name,age) -&gt; new Student(name,age);
// 方法引用
BiFunction&lt;String,Integer,Student&gt; function = Student::new;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里各位小伙伴应该明白是怎么回事了吧？但是这里有一个漏洞，因为 Function 只有一个参数，所以它只支持带有一个参数的构造器，BiFunction 有两个参数，所以它只支持带有两个参数的构造器，如果我的 Student 有四个属性呢？怎么办？<strong>自定义函数式接口</strong>。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
@AllArgsConstructor
public class Student {
    private String name;

    private Integer age;

    private String birthday;

    private String className;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们需要自定义一个函数式接口，它需要有四个参数，一个返回值，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@FunctionalInterface
public interface FunctionInterface&lt;T,U,O,P,R&gt; {
    R apply(T t, U u,O o,P p);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以利用构造器引用来构造 Student 对象了：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>FunctionInterface&lt;String,Integer,String,String,Student&gt; functionInterface = Student::new;
System.out.println(functionInterface.apply(&quot;xiaoming&quot;,8,&quot;06-19&quot;,&quot;二年三班&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式确实是简单了，但是没有必要为了多个参数来自定义一个函数式接口。在实际项目过程中我觉得还不如 <code>new Student</code> 来的直接明了。</p><h3 id="数组引用" tabindex="-1"><a class="header-anchor" href="#数组引用" aria-hidden="true">#</a> 数组引用</h3><p>数组引用和构造器引用的语法格式一样，<code>Type[]::new</code>。<code>Type</code> 是数组元素的类型，后面的<code>::new</code>表示引用该类型的数组构造方法来创建新数组。例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code> Function&lt;Integer, int[]&gt; function = int[]::new;
 int[] arrays = function.apply(5);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个包含5个整数的一维数组。对于多维数组，大明哥其实不是很建议使用这种方式，因为有点儿鸡肋，多维的数组内容还是需要我们处理。</p><h2 id="java-8-新特性—optional" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—optional" aria-hidden="true">#</a> Java 8 新特性—Optional</h2><p><code>NullPointerException</code> 是我们最常见也是最烦的异常处理，它非常常见，处理起来有很简单，但是你又不得不去处理，超级烦。</p><p><img src="`+h+`" alt="img"></p><h3 id="引言" tabindex="-1"><a class="header-anchor" href="#引言" aria-hidden="true">#</a> 引言</h3><p>我们先看一个简单的例子：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
public class User {
    private String name;

    private Address address;
}

@Data
public class Address {
    private String province;

    private String city;

    private String area;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们需要获取用户所在城市，我们会这么写：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static String getUserCity(User user) {
        return user.getAddress().getCity();
    }
    
    String city = getUserCity(user);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法有可能会报 <code>NullPointerException</code>，因为 user 可能为 null，user.getAddress() 也有可能为 null，所以为了解决这个问题 ，我们会采用这种写法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static String getUserCity(User user) {
        if (user != null) {
            Address address = user.getAddress();
            if (address != null) {
                return address.getCity();
            }
        }
        return null;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就问这种写法丑不丑？繁琐不繁琐？为了避免这种丑陋的写法，让丑陋的设计变得优雅，Java 8 提供了 Optional。</p><h3 id="optional-是什么" tabindex="-1"><a class="header-anchor" href="#optional-是什么" aria-hidden="true">#</a> Optional 是什么</h3><p>Optional 是 Java 8 提供了一个类库。被设计出来的目的是为了减少因为<code>null</code>而引发的<code>NullPointerException</code>异常，并提供更安全和优雅的处理方式。</p><p>Java 中臭名昭著的 <code>NullPointerException</code> 是导致 Java 应用程序失败最常见的原因，没有之一，没有一个 Java 开发程序员没有遇到这个异常。为了解决 <code>NullPointerException</code>，Google Guava 引入了 Optional 类，它提供了一种在处理可能为<code>null</code>值时更灵活和优雅的方式，受 Google Guava 的影响，Java 8 引入 Optional 来处理 null 值。</p><p>在 Javadoc 中是这样描述它的：<strong>一个可以为 null 的容器对象</strong>。所以 <code>java.util.Optional&lt;T&gt;</code> 是一个容器类，它可以保存类型为 T 的值，T 可以是实际 Java 对象，也可以是 null。</p><h3 id="api-介绍" tabindex="-1"><a class="header-anchor" href="#api-介绍" aria-hidden="true">#</a> API 介绍</h3><p>我们先看 Optional 的定义：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public final class Optional&lt;T&gt; {

    /**
     * 如果非空，则为该值；如果为空，则表示没有值存在。
     */
    private final T value;
    
    //...
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里可以看出，Optional 的本质就是内部存储了一个真实的值 T，如果 T 非空，就为该值，如果为空，则表示该值不存在。</p><h4 id="构造-optional-对象" tabindex="-1"><a class="header-anchor" href="#构造-optional-对象" aria-hidden="true">#</a> <strong>构造 Optional 对象</strong></h4><p>Optional 的构造函数是 private 权限的，它对外提供了三个方法用于构造 Optional 对象。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Optional.of(T value)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static &lt;T&gt; Optional&lt;T&gt; of(T value) {
        return new Optional&lt;&gt;(value);
    }
    
    private Optional(T value) {
        this.value = Objects.requireNonNull(value);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以 <code>Optional.of(T value)</code> 是创建一个包含非null值的 Optional 对象。如果传入的值为<code>null</code>，将抛出<code>NullPointerException</code> 异常信息。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Optional.ofNullable(T value)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static &lt;T&gt; Optional&lt;T&gt; ofNullable(T value) {
        return value == null ? empty() : of(value);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个包含可能为null值的Optional对象。如果传入的值为null，则会创建一个空的Optional对象。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Optional.empty()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static&lt;T&gt; Optional&lt;T&gt; empty() {
        @SuppressWarnings(&quot;unchecked&quot;)
        Optional&lt;T&gt; t = (Optional&lt;T&gt;) EMPTY;
        return t;
    }
    
    private static final Optional&lt;?&gt; EMPTY = new Optional&lt;&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个空的<code>Optional</code>对象，表示没有值。</p><h4 id="检查是否有值" tabindex="-1"><a class="header-anchor" href="#检查是否有值" aria-hidden="true">#</a> <strong>检查是否有值</strong></h4><p>Optional 提供了两个方法用来检查是否有值。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>isPresent()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>isPresent()</code> 用于检查Optional对象是否包含一个非null值，源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public boolean isPresent() {
        return value != null;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>User user = null;
Optional&lt;User&gt; optional = Optional.ofNullable(user);
System.out.println(optional.isPresent());
// 结果......
false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ifPresent(Consumer&lt;? super T&gt; action)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>该方法用来执行一个操作，该操作只有在 Optional 包含非null值时才会执行。源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public void ifPresent(Consumer&lt;? super T&gt; consumer) {
        if (value != null)
            consumer.accept(value);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，这是 Consumer，是没有返回值的。</p><p>示例如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>User user = new User(&quot;xiaoming&quot;);
Optional.ofNullable(user).ifPresent(value-&gt; System.out.println(&quot;名字是:&quot; + value.getName()));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取值" tabindex="-1"><a class="header-anchor" href="#获取值" aria-hidden="true">#</a> 获取值</h4><p>获取值是 Optional 中的核心 API，Optional 为该功能提供了四个方法。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>get()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>get()</code> 用来获取 Optional 对象中的值。如果 Optional 对象的值为空，会抛出<code>NoSuchElementException</code>异常。源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public T get() {
        if (value == null) {
            throw new NoSuchElementException(&quot;No value present&quot;);
        }
        return value;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>orElse(T other)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>orElse()</code> 用来获取 Optional 对象中的值，如果值为空，则返回指定的默认值。源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public T orElse(T other) {
        return value != null ? value : other;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>User user = null;
user = Optional.ofNullable(user).orElse(new User(&quot;xiaohong&quot;));
System.out.println(user);
// 结果......
User(name=xiaohong, address=null)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>orElseGet(Supplier&lt;? extends T&gt; other)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>orElseGet()</code>用来获取 Optional 对象中的值，如果值为空，则通过 Supplier 提供的逻辑来生成默认值。源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public T orElseGet(Supplier&lt;? extends T&gt; other) {
        return value != null ? value : other.get();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>User user = null;
user = Optional.ofNullable(user).orElseGet(() -&gt; {
  Address address = new Address(&quot;湖南省&quot;,&quot;长沙市&quot;,&quot;岳麓区&quot;);
  return new User(&quot;xiaohong&quot;,address);
});
System.out.println(user);
// 结果......
User(name=xiaohong, address=Address(province=湖南省, city=长沙市, area=岳麓区))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>orElseGet()</code> 和 <code>orElse()</code>的区别是：当 T 不为 null 的时候，<code>orElse()</code> 依然执行 other 的部分代码，而 <code>orElseGet()</code> 不会，验证如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class OptionalTest {

    public static void main(String[] args) {
        User user = new User(&quot;xiaoming&quot;);
        User user1 = Optional.ofNullable(user).orElse(createUser());
        System.out.println(user);

        System.out.println(&quot;=========================&quot;);

        User user2 = Optional.ofNullable(user).orElseGet(() -&gt; createUser());
        System.out.println(user2);
    }

    public static User createUser() {
        System.out.println(&quot;执行了 createUser() 方法&quot;);
        Address address = new Address(&quot;湖南省&quot;,&quot;长沙市&quot;,&quot;岳麓区&quot;);
        return new User(&quot;xiaohong&quot;,address);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下：</p><p><img src="`+q+`" alt="img"></p><p>是不是 <code>orElse()</code> 执行了 <code>createUser()</code> ，而 <code>orElseGet()</code> 没有执行？一般而言，<code>orElseGet()</code> 比 <code>orElse()</code> 会更加灵活些。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>orElseThrow(Supplier&lt;? extends X&gt; exceptionSupplier)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>orElseThrow()</code> 用来获取 Optional 对象中的值，如果值为空，则通过 Supplier 提供的逻辑抛出异常。源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public &lt;X extends Throwable&gt; T orElseThrow(Supplier&lt;? extends X&gt; exceptionSupplier) throws X {
        if (value != null) {
            return value;
        } else {
            throw exceptionSupplier.get();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>User user = null;
user = Optional.ofNullable(user).orElseThrow(() -&gt; new RuntimeException(&quot;用户不存在&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h4><p>Optional 提供 <code>map()</code> 和 <code>flatMap()</code> 用来进行类型转换。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>map(Function&lt;? super T, ? extends U&gt; mapper)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>map()</code> 允许我们对 Optional 对象中的值进行转换，并将结果包装在一个新的 Optional 对象中。该方法接受一个 Function 函数，该函数将当前 Optional 对象中的值映射成另一种类型的值，并返回一个新的 Optional 对应，这个新的 Optional 对象中的值就是映射后的值。如果当前 Optional 对象的值为空，则返回一个空的 Optional 对象，且 Function 不会执行，源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public&lt;U&gt; Optional&lt;U&gt; map(Function&lt;? super T, ? extends U&gt; mapper) {
        Objects.requireNonNull(mapper);
        if (!isPresent())
            return empty();
        else {
            return Optional.ofNullable(mapper.apply(value));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如我们要获取 User 对象中的 name，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>User user = new User(&quot;xiaolan&quot;);
String name = Optional.ofNullable(user).map(value -&gt; value.getName()).get();
System.out.println(name);
// 结果......
xiaolan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Function&lt;? super T, Optional&lt;U&gt;&gt; mapper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>flatMap()</code> 与 <code>map()</code> 相似，不同之处在于 <code>flatMap()</code>的映射函数返回的是一个 Optional 对象而不是直接的值，它是将当前 Optional 对象映射为另外一个 Optional 对象。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public&lt;U&gt; Optional&lt;U&gt; flatMap(Function&lt;? super T, Optional&lt;U&gt;&gt; mapper) {
        Objects.requireNonNull(mapper);
        if (!isPresent())
            return empty();
        else {
            return Objects.requireNonNull(mapper.apply(value));
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面获取 name 的代码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String name = Optional.ofNullable(user).flatMap(value -&gt; Optional.ofNullable(value.getName())).get();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>flatMap()</code> 内部需要再次封装一个 Optional 对象，所以 <code>flatMap()</code> 通常用于在一系列操作中处理嵌套的<code>Optional</code>对象，以避免层层嵌套的情况，使代码更加清晰和简洁。</p><h4 id="过滤" tabindex="-1"><a class="header-anchor" href="#过滤" aria-hidden="true">#</a> 过滤</h4><p>Optional 提供了 <code>filter()</code> 用于在 Optional 对象中的值满足特定条件时进行过滤操作，源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public Optional&lt;T&gt; filter(Predicate&lt;? super T&gt; predicate) {
        Objects.requireNonNull(predicate);
        if (!isPresent())
            return this;
        else
            return predicate.test(value) ? this : empty();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>filter()</code> 接受 一个Predicate 来对 Optional 中包含的值进行过滤，如果满足条件，那么还是返回这个 Optional；否则返回 <code>Optional.empty</code>。</p><h3 id="实战应用" tabindex="-1"><a class="header-anchor" href="#实战应用" aria-hidden="true">#</a> 实战应用</h3><p>这里大明哥利用 Optional 的 API 举几个例子。</p><ul><li>示例一</li></ul><p>Java 8 以前：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static String getUserCity(User user) {
        if (user != null) {
            Address address = user.getAddress();
            if (address != null) {
                return address.getCity();
            }
        }
        return null;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常规点的，笨点的方法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static String getUserCity(User user) {
        Optional&lt;User&gt; userOptional = Optional.of(user);
        return Optional.of(userOptional.get().getAddress()).get().getCity();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高级一点的：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static String getUserCity(User user) {
        return Optional.ofNullable(user)
                .map(User::getAddress)
                .map(Address::getCity)
                .orElseThrow(() -&gt; new RuntimeException(&quot;值不存在&quot;));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是比上面高级多了？</p><ul><li>示例二</li></ul><p>比如我们要获取末尾为&quot;ming&quot;的用户的 city，不是的统一返回 &quot;深圳市&quot;。</p><p>Java 8 以前</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static String getUserCity(User user) {
        if (user != null &amp;&amp; user.getName() != null) {
            if (user.getName().endsWith(&quot;ming&quot;)) {
                Address address = user.getAddress();
                if (address != null) {
                    return address.getCity();
                } else {
                    return &quot;深圳市&quot;;
                }
            } else {
                return &quot;深圳市&quot;;
            }
        }

        return &quot;深圳市&quot;;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java 8</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static String getUserCity2(User user) {
        return Optional.ofNullable(user)
                .filter(u -&gt; u.getName().endsWith(&quot;ming&quot;))
                .map(User::getAddress)
                .map(Address::getCity)
                .orElse(&quot;深圳市1&quot;);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种写法确实是优雅了很多。其余的例子大明哥就不一一举例了，这个也没有其他技巧，唯手熟尔！！</p><h2 id="java-8-新特性—日期时间-api" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—日期时间-api" aria-hidden="true">#</a> Java 8 新特性—日期时间 API</h2><p><img src="`+J+`" alt="img"></p><h3 id="为什么-java-8-要重新设计日期时间-api" tabindex="-1"><a class="header-anchor" href="#为什么-java-8-要重新设计日期时间-api" aria-hidden="true">#</a> 为什么 Java 8 要重新设计日期时间 API</h3><p>作为 Java 开发者你一定直接或者间接使用过 <code>java.util.Date</code> 、<code>java.util.Calendar</code>、<code>java.text.SimpleDateFormat</code> 这三个类吧，这三个类是 Java 用于处理日期、日历、日期时间格式化的。由于他们存在一些问题，诸如：</p><ol><li><p>线程不安全</p><p>：</p><ol><li><code>java.util.Date</code> 和 <code>java.util.Calendar</code> 线程不安全，这就导致我们在多线程环境使用需要额外注意。</li><li><code>java.text.SimpleDateFormat</code> 也是线程不安全的，这可能导致性能问题和日期格式化错误。而且它的模式字符串容易出错，且不够直观。</li></ol></li><li><p><strong>可变性</strong>：<code>java.util.Date</code>类是可变的，这意味着我们可以随时修改它，如果一不小心就会导致数据不一致问题。</p></li><li><p><strong>时区处理困难</strong>：Java 8 版本以前的日期 API 在时区处理上存在问题，例如时区转换和夏令时处理不够灵活和准确。而且时区信息在 <code>Date</code> 对象中存储不明确，这使得正确处理时区变得复杂。</p></li><li><p>设计不佳</p><p>：</p><ol><li>日期和日期格式化分布在多个包中。</li><li><code>java.util.Date</code> 的默认日期，年竟然是从 1900 开始，月从 1 开始，日从 1 开始，没有统一性。而且 <code>java.util.Date</code> 类也缺少直接操作日期的相关方法。</li><li>日期和时间处理通常需要大量的样板代码，使得代码变得冗长和难以维护。</li></ol></li></ol><p>基于上述原因，Java 8 重新设计了日期时间 API，以提供更好的性能、可读性和可用性，同时解决了这些问题，使得在 Java 中处理日期和时间变得更加方便和可靠。相比 Java 8 之前的版本，Java 8 版本的日期时间 API 具有如下几个优点：</p><ol><li><strong>不可变性（Immutability）</strong>：Java 8的日期时间类（如<code>LocalDate</code>、<code>LocalTime</code>和<code>LocalDateTime</code>）都是不可变的，一旦创建就不能被修改。这确保了<strong>线程安全</strong>，避免了并发问题。</li><li><strong>清晰的API设计</strong>：Java 8 的日期时间 API 采用了更清晰、更一致的设计，相比于以前版本的 <code>Date</code> 和 <code>Calendar</code> 更易于理解和使用。而且它们还提供了丰富的方法来执行日期和时间的各种操作，如加减、比较、格式化等。</li><li><strong>本地化支持</strong>：Java 8 的日期时间 API 支持本地化，可以轻松处理不同地区和语言的日期和时间格式。它们能够自动适应不同的时区和夏令时规则。</li><li><strong>新的时区处理</strong>：Java 8引入了 <code>ZoneId</code> 和 <code>ZoneOffset</code> 等新的时区类，使时区处理更加精确和灵活。这有助于解决以前版本中时区处理的问题。</li><li><strong>新的格式化API</strong>：Java 8引入了 <code>DateTimeFormatter</code> 类，用于格式化和解析日期和时间，支持自定义格式和本地化。这提供了更强大和灵活的格式化选项。</li><li><strong>更好的性能</strong>：Java 8 的日期时间API 比以前的API 性能更佳。</li></ol><h3 id="instant-时间点" tabindex="-1"><a class="header-anchor" href="#instant-时间点" aria-hidden="true">#</a> Instant：时间点</h3><p>Instant 用于表示时间线上的点，即一个瞬间。它是不可变的，以纳秒为单位精确表示时间，可以用于在不考虑时区的情况下进行时间的计算和比较。</p><p>Instant 参考点是标准的 Java 纪元（epoch），即<code>1970-01-01T00：00：00Z</code>（1970年1月1日00:00 GMT）。 Instant 类的 EPOCH 属性返回表示 Java 纪元的 Instant 实例。 在纪元之后的时间是正值，而在此之前的时间即是负值。</p><ul><li>使用 <code>Instant.now()</code> 创建当前的时间点：</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Instant now = Instant.now();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>getEpochSecond()</code> 返回自纪元以来经过的秒数。 <code>getNano()</code> 返回自上一秒开始以来的纳秒数。</p><ul><li>从 <code>java.util.Date</code> 或 <code>java.util.Calendar</code> 转换为 <code>Instant</code></li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Instant instant = new Date().toInstant();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Instant 在以下场景特别有用：</p><ol><li>计算事件发生的时间戳，无论时区如何。</li><li>进行时间计算，如计算时间差、定时任务等。</li></ol><p>例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class InstantTest {

    @test
    public void test() {

        Instant start = Instant.now();

        // do something here

        Instant end = Instant.now();

        System.out.println(Duration.between(start, end).toMillis());
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localdate-本地日期" tabindex="-1"><a class="header-anchor" href="#localdate-本地日期" aria-hidden="true">#</a> LocalDate ：本地日期</h3><blockquote><p>LocalDate 用于表示不包含时间信息的日期。它是不可变的。</p></blockquote><h4 id="创建-localdate" tabindex="-1"><a class="header-anchor" href="#创建-localdate" aria-hidden="true">#</a> 创建 LocalDate</h4><p>Java 提供了三种方式用来创建一个 LocalDate 对象。</p><ul><li>使用<code>LocalDate.now()</code>方法创建当前日期</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>LocalDate currentDate = LocalDate.now();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用 LocalDate.of() 来创建指定年、月、日的 LocalDate 对象</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>LocalDate date = LocalDate.of(2023, 10, 8)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用 DateTimeFormatter 解析一个 LocalDate 对象</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd&quot;);
LocalDate parsedDate = LocalDate.parse(&quot;2023-10-08&quot;, formatter);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="日期计算" tabindex="-1"><a class="header-anchor" href="#日期计算" aria-hidden="true">#</a> 日期计算</h4><p>LocalDate 提供了 plus 和 minus 类方法用于在日期上增加或者减少一定数量的年、月、日：</p><ul><li><code>plusYears()</code>、<code>plusMonths()</code> 和 <code>plusDays()</code>：分别用于在日期上增加年、月和日。</li><li><code>minusYears()</code>、<code>minusMonths()</code> 和 <code>minusDays()</code>：分别用于从日期中减去年、月和日。</li></ul><p>这 6 个方法都是返回一个新的 LocalDate 对象，原始 LocalDate 对象不受影响。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @test
    public void test() {
        LocalDate localDate = LocalDate.now();
        LocalDate plusYears = localDate.plusYears(1);
        LocalDate plusMonths = localDate.plusMonths(1);
        LocalDate plusDays = localDate.plusDays(1);

        LocalDate minusYears = localDate.minusYears(1);
        LocalDate minusMonths = localDate.minusMonths(1);
        LocalDate minusDays = localDate.minusDays(1);

        System.out.println(&quot;原始 LocalDate：&quot; + localDate);
        System.out.println(&quot;plusYears(1)：&quot; + plusYears);
        System.out.println(&quot;plusMonths(1)：&quot; + plusMonths);
        System.out.println(&quot;plusDays(1)：&quot; + plusDays);
        System.out.println(&quot;minusYears(1)：&quot; + minusYears);
        System.out.println(&quot;minusMonths(1)：&quot; + minusMonths);
        System.out.println(&quot;minusDays(1)：&quot; + minusDays);
    }
    
// 结果......
原始 LocalDate：2023-10-08
plusYears(1)：2024-10-08
plusMonths(1)：2023-11-08
plusDays(1)：2023-10-09
minusYears(1)：2022-10-08
minusMonths(1)：2023-09-08
minusDays(1)：2023-10-07
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取日期信息" tabindex="-1"><a class="header-anchor" href="#获取日期信息" aria-hidden="true">#</a> 获取日期信息</h4><p>LocalDate 提供了 get 类方法用于获取日期信息：</p><ul><li><code>getYear()</code>：获取年份。</li><li><code>getMonth()</code>：获取月份（返回<code>Month</code>枚举类型）。</li><li><code>getDayOfMonth()</code>：获取月中的天数。</li><li><code>getDayOfWeek()</code>：获取星期几（返回<code>DayOfWeek</code>枚举类型）。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        LocalDate localDate = LocalDate.now();
        System.out.println(&quot;getYear()：&quot; + localDate.getYear());
        System.out.println(&quot;getMonthValue()：&quot; + localDate.getMonthValue());
        System.out.println(&quot;getDayOfMonth()：&quot; + localDate.getDayOfMonth());
        System.out.println(&quot;getDayOfWeek()：&quot; + localDate.getDayOfWeek());
    }
// 结果......
getYear()：2023
getMonthValue()：10
getDayOfMonth()：8
getDayOfWeek()：SUNDAY
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改日期" tabindex="-1"><a class="header-anchor" href="#修改日期" aria-hidden="true">#</a> 修改日期</h4><p>LocalDate 提供了 with 类方法用于修改 LocalDate 对象，它返回的也是一个新的 LocalDate 对象。</p><ul><li><code>withDayOfMonth()</code>：修改月中的天数字段</li><li><code>withMonth()</code>：修改月份字段</li><li><code>withYear()</code>：修改年份字段</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        LocalDate localDate = LocalDate.now();
        LocalDate withYear = localDate.withYear(2022);
        LocalDate withMonth = localDate.withMonth(12);
        LocalDate withDayOfMonth = localDate.withDayOfMonth(22);

        System.out.println(&quot;原始 localDate：&quot; + localDate);
        System.out.println(&quot;withYear(2022)：&quot; + withYear);
        System.out.println(&quot;withMonth(12)：&quot; + withMonth);
        System.out.println(&quot;withDayOfMonth(22)：&quot; + withDayOfMonth);
    }
//  结果......
原始 localDate：2023-10-08
withYear(2022)：2022-10-08
withMonth(12)：2023-12-08
withDayOfMonth(22)：2023-10-22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置的值的时候注意时间范围，你别 <code>withDayOfMonth(99)</code> 肯定报异常。</p><h3 id="period-localdate-的距离" tabindex="-1"><a class="header-anchor" href="#period-localdate-的距离" aria-hidden="true">#</a> Period：LocalDate 的距离</h3><p>Period 是用于处理日期间隔的类，通常用于计算两个日期之间的间隔，如天数、月数和年数。</p><p><code>Period.of()</code> 用于创建一个表示日期间隔的 Period 对象，该方法接受三个参数：年、月、日：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Period period = Period.of(5,10,8);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同时，Period 也提供了对应的 get 方法用于获取间隔的年、月、日，对应的方法分别为 <code>getYears()</code>、<code>getMonths()</code>、<code>getDays()</code>：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        Period period = Period.of(5,10,8);
        int years = period.getYears();
        int months = period.getMonths();
        int days = period.getDays();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Period 提供的 <code>between()</code> 用于计算两个日期之间的间隔：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        LocalDate begin = LocalDate.of(2023,10,8);
        LocalDate end = LocalDate.of(2025,9,12);
        
        Period period = Period.between(begin,end);
        System.out.println(&quot;years：&quot; + period.getYears());
        System.out.println(&quot;getMonths：&quot; + period.getMonths());
        System.out.println(&quot;getDays：&quot; + period.getDays());
    }
// 结果......
years：1
getMonths：11
getDays：4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Period.between()</code> 返回的是一个 Period 对象，我们可以利用对应的 get 方法获取相应的数据。</p><h3 id="localtime-本地时间" tabindex="-1"><a class="header-anchor" href="#localtime-本地时间" aria-hidden="true">#</a> LocalTime 本地时间</h3><p>LocalTime 用于不包含日期信息的时间，它只表示一天中的时间。</p><h4 id="创建-localtime" tabindex="-1"><a class="header-anchor" href="#创建-localtime" aria-hidden="true">#</a> 创建 LocalTime</h4><p>LocalTime 提供了四种方式来创建 LocalTime 对象。</p><ul><li><code>LocalTime.now()</code>：获取当前系统时间。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>LocalTime localTime = LocalTime.now();      //11:44:47.123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>LocalTime.of(int hour, int minute)</code>：创建指定的小时和分钟的时间</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>LocalTime localTime = LocalTime.of(12,46);    //12:46
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>LocalTime.of(int hour, int minute, int second)</code>：创建指定的小时、分钟和秒的时间。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>LocalTime localTime = LocalTime.of(12,46,50);     //12:46:50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>LocalTime.of(int hour, int minute, int second, int nanoOfSecond)</code>：创建指定的小时、分钟、秒和纳秒的时间。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>LocalTime localTime = LocalTime.of(12,46,50,500000000);     // 12:46:50.500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>LocalTime 和 LocalDate 提供的方法都差不多，plus 增加时分秒、minus 减少时分秒，get 获取时分秒，with 修改时分秒，同时 LocalTime 也是不变的，所以也是线程安全的。</p><h4 id="时间计算" tabindex="-1"><a class="header-anchor" href="#时间计算" aria-hidden="true">#</a> 时间计算</h4><p>LocalTime 提供了 plus 和 minus 类型方法用于对时间进行加减操作。</p><ul><li><code>plusHours()</code>、<code>plusMinutes()</code>、<code>plusSeconds()</code>：分别用于在时间上增加时、分、秒。</li><li><code>minusHours()</code>、<code>minusMinutes()</code>、<code>minusSeconds()</code>：分别用于在时间上减少时、分、秒。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        LocalTime localTime = LocalTime.now();
        LocalTime plusHours = localTime.plusHours(1);
        LocalTime plusMinutes = localTime.plusMinutes(1);
        LocalTime plusSeconds = localTime.plusSeconds(1);
        LocalTime minusHours = localTime.minusHours(1);
        LocalTime minusMinutes = localTime.minusMinutes(1);
        LocalTime minusSeconds = localTime.minusSeconds(1);

        System.out.println(&quot;localTime：&quot; + localTime);
        System.out.println(&quot;plusHours(1)：&quot; + plusHours);
        System.out.println(&quot;plusMinutes(1)：&quot; + plusMinutes);
        System.out.println(&quot;plusSeconds(1)：&quot; + plusSeconds);
        System.out.println(&quot;minusHours(1)：&quot; + minusHours);
        System.out.println(&quot;minusMinutes(1)：&quot; + minusMinutes);
        System.out.println(&quot;minusSeconds(1)：&quot; + minusSeconds);
    }
// 结果......
localTime：15:40:01.160
plusHours(1)：16:40:01.160
plusMinutes(1)：15:41:01.160
plusSeconds(1)：15:40:02.160
minusHours(1)：14:40:01.160
minusMinutes(1)：15:39:01.160
minusSeconds(1)：15:40:00.160 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="获取时间信息" tabindex="-1"><a class="header-anchor" href="#获取时间信息" aria-hidden="true">#</a> 获取时间信息</h4><p>LocalTime 提供了 get 类方法用于获取时间相关的信息。</p><p>getHour()、getMinute()、getSecond()、getNano()：分别用于获取时间的时、分、秒、纳秒。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        LocalTime localTime = LocalTime.now();

        System.out.println(&quot;localTime：&quot; + localTime);
        System.out.println(&quot;getHour()：&quot; + localTime.getHour());
        System.out.println(&quot;getMinute()：&quot; + localTime.getMinute());
        System.out.println(&quot;getSecond()：&quot; + localTime.getSecond());
        System.out.println(&quot;getNano()：&quot; + localTime.getNano());
    }
// 结果......
localTime：15:43:38.300
getHour()：15
getMinute()：43
getSecond()：38
getNano()：300000000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改时间" tabindex="-1"><a class="header-anchor" href="#修改时间" aria-hidden="true">#</a> 修改时间</h4><p>LocalTime 提供了 with 类方法用于修改时分秒：</p><p><code>withHour()</code>、<code>withMinute()</code>、<code>withSecond()</code> 分别用于修改时间上的时、分、秒。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        LocalTime localTime = LocalTime.now();

        System.out.println(&quot;withHour(22)：&quot; + localTime.withHour(22));
        System.out.println(&quot;withMinute(22)：&quot; + localTime.withMinute(22));
        System.out.println(&quot;withMinute(22)：&quot; + localTime.withSecond(22));
        System.out.println(&quot;localTime：&quot; + localTime);
    }
// 结果......
withHour(22)：22:49:41.755
withMinute(22)：15:22:41.755
withMinute(22)：15:49:22.755
localTime：15:49:41.755
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="localdatetime-本地日期时间" tabindex="-1"><a class="header-anchor" href="#localdatetime-本地日期时间" aria-hidden="true">#</a> LocalDateTime 本地日期时间</h3><p>在大部分时间我们不仅仅只是需要日期或者时间，而是日期和时间，这是时候我们就需要使用 LocalDateTime。LocalDateTime 是用于处理日期和时间的，它不包含时区信息，它提供了一种简单、便捷的方式处理日期和时间，可以代替旧的 <code>java.util.Date</code> 和 <code>java.util.Calendar</code> 类，并且提供更多的功能和灵活性。</p><p>LocalDateTime 是表示日期和时间的，包括年、月、日、小时、分钟、秒以及毫秒，但是不包括时区。它里面很多方法和 LocalDate 、LocalTime 一致，所以大明哥在这里就不过多介绍了。</p><ul><li><code>plus</code> 类：增加日期或时间</li><li><code>minus</code> 类：减少日期或时间</li><li><code>get</code> 类：获取日期或时间</li><li><code>with</code> 类：修改日期或时间</li><li><code>isBefore</code>、<code>isAfter</code>：比较两个 LocalDateTime 对象</li></ul><h3 id="zoneddatetime-带时区的日期时间" tabindex="-1"><a class="header-anchor" href="#zoneddatetime-带时区的日期时间" aria-hidden="true">#</a> ZonedDateTime 带时区的日期时间</h3><p>ZonedDateTime 是一个用于表示包含时区信息的日期和时间对象，它用于解决处理日期和时间时的时区问题，以便更好地支持全球化的时间操作。</p><p>有了一个 LocalDateTime 不够，为什么还需要在增加一个 ZonedDateTime 呢？要明白这个问题我们就需要先了解什么是时区，为什么需要它。</p><h4 id="什么是时区" tabindex="-1"><a class="header-anchor" href="#什么是时区" aria-hidden="true">#</a> 什么是时区</h4><p>由于地球自转，不同经度上的地方会在不同时刻经历日出和日落，因此当你在一个地方看到太阳高悬在天空中时，在另一个地方可能是夜晚。当你 9 点起来上班时，别人可能刚刚吃完晚饭准备带老婆孩子去遛弯，所以我们需要创建时区机制，来保证能更合理地安排生产生活。</p><p>时区是地球上的不同区域，每个区域都使用统一的时间标准，使人们能够在不同地方协调时间。时区基于经度划分，地球被分成24个主要时区，每个时区大致相当于地球上的一个经度带。每个时区都有自己的标准时间，该时间是该时区内所有地方的参考时间。</p><h4 id="zoneddatetime-的使用方法" tabindex="-1"><a class="header-anchor" href="#zoneddatetime-的使用方法" aria-hidden="true">#</a> ZonedDateTime 的使用方法</h4><p>ZonedDateTime 和 LocalDateTime 中的方法几乎都一样，知道 LocalDateTime 的方法含义就一定知道 ZonedDateTime 的方法含义。下面大明哥讲解下与 LocalDateTime 不一样的地方。</p><p>ZonedDateTime 也是提供了<code>now()</code> 和 <code>of()</code> 来创建 ZonedDateTime ：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>ZonedDateTime zonedDateTime = ZonedDateTime.now();
// 当前日期时间，时区为系统默认时区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>of()</code> 需要指明时区 ZoneId，ZoneId 是 Java 中用于表示时区的类，目前 Java 8 中共包含 599 个时区。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Set&lt;String&gt; availableZoneId = ZoneId.getAvailableZoneIds();   // 获取所有的时区
// 根据时区 id 获取 ZoneId 对象
ZoneId GMT= ZoneId.of(&quot;GMT&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到 ZoneId 对象后就可以利用 <code>of()</code> 来构建 ZonedDateTime 对象：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>ZonedDateTime zonedDateTime = ZonedDateTime.of(2023, 10, 9, 21, 10, 0, 0, ZoneId.of(&quot;America/New_York&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以将一个 LocalDateTime 转换为 ZonedDateTime：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>LocalDateTime localDateTime = LocalDateTime.now();
ZonedDateTime zonedDateTime = ZonedDateTime.of(localDateTime,ZoneId.of(&quot;America/New_York&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ZonedDateTime 也提供了时区转换的功能：</p><ul><li><code>withZoneSameInstant()</code>：保持时间点不变，但切换到另一个时区</li><li><code>withZoneSameLocal()</code>：会保持本地时间不变，但根据新时区调整偏移量</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>ZonedDateTime newYorkTime = zonedDateTime.withZoneSameInstant(ZoneId.of(&quot;America/New_York&quot;));
ZonedDateTime londonTime = zonedDateTime.withZoneSameInstant(ZoneId.of(&quot;Europe/London&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-8-新特性—日期时间格式化" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—日期时间格式化" aria-hidden="true">#</a> Java 8 新特性—日期时间格式化</h2>`,286),xe={href:"https://www.skjava.com/series/article/1658730277",target:"_blank",rel:"noopener noreferrer"},Te=d('<p><img src="'+S+`" alt="img"></p><h3 id="datetimeformatter" tabindex="-1"><a class="header-anchor" href="#datetimeformatter" aria-hidden="true">#</a> DateTimeFormatter</h3><p>DateTimeFormatter 用于格式化和解析日期和时间，它能够轻松地将日期时间对象转换为字符串以及将字符串解析为日期时间对象。而且它是不可变的，线程安全的。</p><h4 id="创建-datetimeformatter" tabindex="-1"><a class="header-anchor" href="#创建-datetimeformatter" aria-hidden="true">#</a> <strong>创建 DateTimeFormatter</strong></h4><p>DateTimeFormatter 提供了 <code>ofPattern()</code> 静态方法用于构建 DateTimeFormatter 对象：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其他静态方法如下：</p><ul><li><code>ofPattern(String pattern, Locale locale)</code>：使用给定的模式和区域设置创建格式化器。</li><li><code>ofLocalizedDate(FormatStyle dateStyle)</code>：创建具有当地特定日期格式的格式化器。FormatStyle是一个枚举，其值可以是FULL, LONG, MEDIUM, SHORT。</li><li><code>ofLocalizedDateTime(FormatStyle dateTimeStyle)</code>：创建具有特定地区日期时间(date-time)格式的格式化器。</li><li><code>ofLocalizedDateTime(FormatStyle dateStyle, FormatStyle timeStyle)</code>： 创建具有特定地区日期时间(date-time)格式的格式化器。我们需要为日期和时间分别传递FormatStyle。例如，日期可以是LONG，时间可以是SHORT。</li><li><code>ofLocalizedTime(FormatStyle timeStyle)</code>： 创建具有当地特定时间格式的格式化器。</li></ul><p>我们也可以使用预定义的格式化器，DateTimeFormatter 提供了大量的预定义格式化器，如下：</p><table><thead><tr><th>Formatter</th><th>Example</th></tr></thead><tbody><tr><td>BASIC_ISO_DATE</td><td>‘20181203’</td></tr><tr><td>ISO_LOCAL_DATE</td><td>‘2018-12-03’</td></tr><tr><td>ISO_OFFSET_DATE</td><td>‘2018-12-03+01:00’</td></tr><tr><td>ISO_DATE</td><td>‘2018-12-03+01:00’; ‘2018-12-03’</td></tr><tr><td>ISO_LOCAL_TIME</td><td>‘11:15:30’</td></tr><tr><td>ISO_OFFSET_TIME</td><td>‘11:15:30+01:00’</td></tr><tr><td>ISO_TIME</td><td>‘11:15:30+01:00’; ‘11:15:30’</td></tr><tr><td>ISO_LOCAL_DATE_TIME</td><td>‘2018-12-03T11:15:30’</td></tr><tr><td>ISO_OFFSET_DATE_TIME</td><td>‘2018-12-03T11:15:30+01:00’</td></tr><tr><td>ISO_ZONED_DATE_TIME</td><td>‘2018-12-03T11:15:30+01:00[Europe/Paris]’</td></tr><tr><td>ISO_DATE_TIME</td><td>‘2018-12-03T11:15:30+01:00[Europe/Paris]’</td></tr><tr><td>ISO_ORDINAL_DATE</td><td>‘2018-337’</td></tr><tr><td>ISO_WEEK_DATE</td><td>‘2018-W48-6’</td></tr><tr><td>ISO_INSTANT</td><td>‘2018-12-03T11:15:30Z’</td></tr><tr><td>RFC_1123_DATE_TIME</td><td>‘Tue, 3 Jun 2018 11:05:30 GMT’</td></tr></tbody></table><p>例如，我们使用 ISO_DATE_TIME 格式化一个日期时间：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
String dateTime = formatter.format(LocalDateTime.now()); //2023-10-10T15:36:03.626
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们需要的不再是简单的 yyyy-MM-dd 格式的日期，而是更加复杂的日期格式，我们可以使用 DateTimeFormatterBuilder 来构建更加复杂的日期格式。</p><h4 id="格式转换" tabindex="-1"><a class="header-anchor" href="#格式转换" aria-hidden="true">#</a> 格式转换</h4><h5 id="将日期时间对象转换为字符串" tabindex="-1"><a class="header-anchor" href="#将日期时间对象转换为字符串" aria-hidden="true">#</a> <strong>将日期时间对象转换为字符串</strong></h5><p>为了格式化一个日期、时间或日期时间，DateTimeFormatter提供了两个 format 方法：</p><ul><li><code>format(TemporalAccessor temporal)</code>：将日期时间对象格式化为字符串，返回的是一个字符串对象。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
System.out.println(dateTimeFormatter.format(LocalDateTime.now()));   //2023-10-09 22:12:55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>formatTo(TemporalAccessor temporal, Appendable appendable)</code>：将日期时间对象格式化，但是它没有返回值，而是将结果附加到给定的Appendable对象中。Appendable对象可以是StringBuffer、StringBuilder等的实例，这样可以提供性能，因为它避免创建了不必要的字符串对象。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
StringBuilder stringBuilder = new StringBuilder();
dateTimeFormatter.formatTo(LocalDateTime.now(),stringBuilder);
System.out.println(stringBuilder.toString());                      // 2023-10-09 22:23:43
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以将日期时间格式的字符串转换为 <code>LocalDateTime</code>、<code>ZonedDateTime</code> 等日期时间对象：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
System.out.println(LocalDateTime.parse(&quot;2023-10-09 22:12:55&quot;,dateTimeFormatter));  //2023-10-09T22:12:55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="将字符串解析为日期时间对象" tabindex="-1"><a class="header-anchor" href="#将字符串解析为日期时间对象" aria-hidden="true">#</a> <strong>将字符串解析为日期时间对象</strong></h5><p>DateTimeFormatter 用于将字符串解析为日期时间对象的方法主要是 <code>parse()</code>，但是它返回的是 TemporalAccessor，我们需要再次将 TemporalAccessor 进一步转换：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy/MM/dd&quot;);
TemporalAccessor temporalAccessor = formatter.parse(&quot;2023-10-10&quot;);
LocalDate localDate = LocalDate.from(temporalAccessor);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有点儿繁琐，所以如果我们明确了要解析的类型，可以直接使用 来将字符串解析为指定的日期时间对象：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy/MM/dd&quot;);
LocalDate localDate = formatter.parse(&quot;2023-10-10&quot;, LocalDate::from);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者直接使用具体的日期时间对象的 parse() 来转换：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;yyyy/MM/dd&quot;);
LocalDate localDate = LocalDate.parse(&quot;2023-10-10&quot;,formatter);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datetimeformatterbuilder" tabindex="-1"><a class="header-anchor" href="#datetimeformatterbuilder" aria-hidden="true">#</a> DateTimeFormatterBuilder</h3><p>DateTimeFormatter 虽然能够帮忙我们格式化标准的日期时间，但是有时候我们需要更加复杂的日期时间格式，比如这种格式：<code>Day is:17, month is:10, and year:2014 with the time:23:35</code> ，你使用 DateTimeFormatter 是会报错的：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DateTimeFormatter formatter = DateTimeFormatter.ofPattern(&quot;Day is:dd, month is:MM, and year:yyyy with the time:HH:mm&quot;);
String dateTime = formatter.format(LocalDateTime.now());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>报错如下：</p><p><img src="`+f+`" alt="img"></p><p>碰到这种比较灵活，个性化的日期格式时，DateTimeFormatter 无法处理或者处理起来比较麻烦时，我们可以使用更加强大灵活的 DateTimeFormatterBuilder。</p><p>DateTimeFormatterBuilder 是 Java 中用于构建自定义日期时间的格式化神器。它允许我们按照自己的需求来构建日期和时间，包括自定义的日期和时间分隔符时区、日期元素的顺序等等。</p><p>DateTimeFormatter 中的预定义格式化器就是采用 DateTimeFormatterBuilder 来构建的，例如 ISO_DATE_TIME：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public static final DateTimeFormatter ISO_DATE_TIME;
    static {
        ISO_DATE_TIME = new DateTimeFormatterBuilder()
                .append(ISO_LOCAL_DATE_TIME)
                .optionalStart()
                .appendOffsetId()
                .optionalStart()
                .appendLiteral(&#39;[&#39;)
                .parseCaseSensitive()
                .appendZoneRegionId()
                .appendLiteral(&#39;]&#39;)
                .toFormatter(ResolverStyle.STRICT, IsoChronology.INSTANCE);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们通过构造函数构建出一个 DateTimeFormatterBuilder 实例对象后，就可以通过它的实例方法来添加不同的元素构造成我们的格式化器。常见的方法有：</p><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>appendPattern(String pattern)</code></td><td>根据传入的模式字符串添加格式化元素。</td></tr><tr><td><code>appendLiteral(char literal)</code></td><td>添加字面文字。</td></tr><tr><td><code>appendValue(TemporalField field, int width)</code></td><td>添加字段值。</td></tr><tr><td><code>appendText(TemporalField field)</code></td><td>添加字段的文本表示。</td></tr><tr><td><code>appendZoneId()</code></td><td>添加时区标识。</td></tr><tr><td><code>appendOffset(String pattern, String noOffsetText)</code></td><td>添加偏移量信息。</td></tr></tbody></table><p>示例：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>builder.appendPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
builder.appendLiteral(&#39;T&#39;);
builder.appendValue(ChronoField.HOUR_OF_DAY, 2);
builder.appendLiteral(&#39;:&#39;);
builder.appendValue(ChronoField.MINUTE_OF_HOUR, 2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们构建完毕后，使用 <code>toFormatter()</code> 方法就可以将其转换为 DateTimeFormatter。下面我们就用 DateTimeFormatterBuilder 来完成上面那个示例。</p><p><code>Day is:</code> 这种是字面文字，所以使用 <code>appendLiteral(char literal)</code> 直接添加就可以了。年月日这样的实际值我们需要 <code>appendValue(TemporalField field, int width)</code> 来添加，该方法中的 <code>width</code> 表示字面的宽度，即显示字段的位数，比如 9 月份，如果 width 为 2 ，则显示为 09，如果不设置的话则显示为 9，代码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        DateTimeFormatter formatter = new DateTimeFormatterBuilder().appendLiteral(&quot;Day is:&quot;)
                .appendValue(ChronoField.DAY_OF_MONTH,2)
                .appendLiteral(&quot;, month is:&quot;)
                .appendValue(ChronoField.MONTH_OF_YEAR,2)
                .appendLiteral(&quot;, and year:&quot;)
                .appendValue(ChronoField.YEAR,4)
                .appendLiteral(&quot; with the time:&quot;)
                .appendValue(ChronoField.HOUR_OF_DAY)
                .appendLiteral(&quot;:&quot;)
                .appendValue(ChronoField.MINUTE_OF_HOUR)
                .toFormatter();
        LocalDateTime dateTime = LocalDateTime.of(2023,9,13,22,34,25,0);
        String str = dateTime.format(formatter);
        System.out.println(str);
    }
// 结果......
Day is:13, month is:09, and year:2023 with the time:22:34
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是很完美地呈现出来了？</p><p>DateTimeFormatterBuilder 是一个非常灵活的格式化工具，我们可以利用它创建各种各样的自定义日期时间格式化器，以满足我们的特定需求。</p><h2 id="java-8-新特性—completablefuture" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—completablefuture" aria-hidden="true">#</a> Java 8 新特性—CompletableFuture</h2><p>CompletableFuture 是 Java 8 中引入用于处理异步编程的核心类，它引入了一种基于 Future 的编程模型，允许我们以更加直观的方式执行异步操作，并处理它们的结果或异常。</p><p><img src="`+y+`" alt="img"></p><h3 id="future-的局限性" tabindex="-1"><a class="header-anchor" href="#future-的局限性" aria-hidden="true">#</a> Future 的局限性</h3><p>学过 Java 并发或者接触过异步开发的小伙伴应该都知道 Future，通过 Future 我们能够知道异步执行的操作结果，它提供了 <code>isDone()</code> 来检测异步是否已经完成，也可以通过 <code>get()</code> 方法来获取计算结果。在异步计算中，Future 确实是一个非常优秀的接口，但是它依然存在一些局限性：</p><ol><li><strong>缺乏回调机制</strong>：Future 没有内置的回调机制，这就意味着我们必须轮询 Future 对象来检查任务是否完成，而不是等待通知。</li><li><strong>无法取消任务</strong>：虽然可以通过 <code>cancel()</code> 方法来取消 Future 中的任务，但这并不保证任务会被取消。如果任务已经开始执行，那么 <code>cancel()</code> 方法可能无法终止任务的执行。</li><li><strong>缺乏异常处理机制</strong>：Future 通过 <code>get()</code> 方法返回任务的结果或异常，但它无法提供更多的异常处理功能。如果任务抛出异常，你必须在客户端代码中捕获这些异常。</li><li><strong>单一结果</strong>：每个 Future 对象只能关联一个任务，这就限制了它的使用，如果我们需要并行执行多个任务并收集它们的结果，我们只能自己管理多个 Future 对象。</li><li><strong>无法进行链式调用</strong>：如果我们希望在计算完成后执行特定操作，比如通知用户，这个时候我们就无法使用 Future 来实现了。</li><li><strong>无法组合多任务</strong>：在处理多个任务时，Future 并没有提供很好的组合方式，比如我们需要等待 10 任务全部完成后再执行特定操作，这个时候使用 Future 就不是很好操作了。</li></ol><h3 id="什么是-completablefuture" tabindex="-1"><a class="header-anchor" href="#什么是-completablefuture" aria-hidden="true">#</a> 什么是 CompletableFuture</h3><p>为了克服 Future 的局限性，Java 8 提供了 CompletableFuture，它构建在 Future 之上，提供了更加强大的异步编程功能，相比 Future 它具备如下优势：</p><ol><li><strong>提供了回调机制</strong>：CompletableFuture 提供了回调功能，我们可以注册回调函数来处理任务完成时的结果，而不必阻塞线程等待任务完成。这样可以提高并发性能，减少线程的阻塞时间。</li><li><strong>提供了异常处理</strong>：CompletableFutur 具备丰富的异常处理机制，可以捕获任务执行中的异常，并允许我们定义自定义的异常处理策略。</li><li><strong>能够取消任务</strong>：我们可以使用 <code>cancel()</code>取消任务的执行，同时还可以指定是否中断正在执行的任务。这提供了更好的任务控制能力。</li><li><strong>强大的异步编程能力</strong>：CompletableFuture 提供了丰富的方法来处理异步操作，包括<strong>组合</strong>、<strong>转换</strong>、<strong>处理异常</strong>以及<strong>执行自定义</strong>的操作。这使得异步编程更加灵活，可以更轻松地实现复杂的异步任务组合。</li><li><strong>支持组合、链式操作</strong>：CompletableFutur 提供了一系列支持组合操作的方法，例如 <code>thenCombine()</code> ， <code>thenCompose()</code>，<code>thenApplyAsync()</code>等等，使得多个 CompletableFuture 可以轻松组合成一个新的 CompletableFuture，从而更容易构建复杂的异步操作流。</li></ol><p>CompletableFuture 提供了比传统 Future 更加强大、更加灵活的异步编程能力，能够更好地满足复杂异步任务处理的需求，能够更加方便地构建复杂的异步操作流，是 Java 8 及以后的版本中，处理异步操作的首选。</p><h3 id="completablefuture-的核心-api" tabindex="-1"><a class="header-anchor" href="#completablefuture-的核心-api" aria-hidden="true">#</a> CompletableFuture 的核心 API</h3><h4 id="构建异步操作" tabindex="-1"><a class="header-anchor" href="#构建异步操作" aria-hidden="true">#</a> 构建异步操作</h4><p>CompletableFuture 提供了多种方法用于构建异步操作。</p><blockquote><p><code>runAsync()</code>： 用于异步执行没有返回值的任务。</p></blockquote><p>它有两个重载方法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable)
public static CompletableFuture&lt;Void&gt; runAsync(Runnable runnable, Executor executor)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个方法的区别在于：</p><ul><li><code>runAsync(Runnable runnable)</code> 会使用 ForkJoinPool 作为它的线程池执行异步代码。</li><li><code>runAsync(Runnable runnable, Executor executor)</code> 则是使用指定的线程池执行异步代码。</li></ul><p>示例：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void runAsyncTest(){
        CompletableFuture.runAsync(() -&gt;{
            log.info(&quot;死磕 Java 新特性 - 01&quot;);
        });

        CompletableFuture.runAsync(() -&gt; {
            log.info(&quot;死磕 Java 新特性 - 02&quot;);
        }, Executors.newFixedThreadPool(10));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><p><img src="`+x+`" alt="img"></p><blockquote><p><code>supplyAsync()</code><strong>：</strong> 用于异步执行有返回值的任务。</p></blockquote><p><code>supplyAsync()</code> 也有两个重载方法，区别 <code>runAsync()</code> 和一样：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier)
public static &lt;U&gt; CompletableFuture&lt;U&gt; supplyAsync(Supplier&lt;U&gt; supplier, Executor executor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void supplyAsyncTest() throws Exception {
        CompletableFuture&lt;String&gt; completableFuture1 = CompletableFuture.supplyAsync(() -&gt;{
            log.info(&quot;死磕 Java 新特性 - 01&quot;);
            return &quot;死磕 Java 新特性 - 01&quot;;
        });

        CompletableFuture&lt;String&gt; completableFuture2 = CompletableFuture.supplyAsync(() -&gt;{
            log.info(&quot;死磕 Java 新特性 - 02&quot;);
            return &quot;死磕 Java 新特性 - 02&quot;;
        },Executors.newFixedThreadPool(10));

        log.info(completableFuture1.get());
        log.info(completableFuture2.get());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><p><img src="`+T+`" alt="img"></p><blockquote><p><code>completedFuture()</code>： 创建一个已完成的 CompletableFuture，它包含特定的结果。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void completedFutureTest() {
        CompletableFuture&lt;String&gt; completableFuture = CompletableFuture.completedFuture(&quot;死磕 Java 就是牛&quot;);
        System.out.println(completableFuture.join());
    }
// 结果......
死磕 Java 就是牛
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：使用默认线程池会有一个：在主线程任务执行完以后，如果异步线程执行任务还没执行完，它会直接把异步任务线程清除掉，因为默认线程池中的都是守护线程 ForkJoinPool，当没有用户线程以后，会随着 JVM 一起清除。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void runAsyncTest(){
        CompletableFuture.runAsync(() -&gt;{
            log.info(&quot;CompletableFuture 任务开始执行...&quot;);
            for (int i = 0; i &lt; 100 ; i++) {
                log.info(&quot;CompletableFuture 任务执行中[{}]...&quot;,i);
            }
            log.info(&quot;CompletableFuture 任务执行完毕...&quot;);
        });

        log.info(&quot;主线程执行完毕...&quot;);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><p><img src="`+F+`" alt="img"></p><p>CompletableFuture 任务的 for 循环只执行到 14 就结束了，并没有完成整个任务就被清理掉了。</p><h4 id="获取结果" tabindex="-1"><a class="header-anchor" href="#获取结果" aria-hidden="true">#</a> 获取结果</h4><p>CompletableFuture 提供了 <code>get()</code> 和 <code>join()</code> 方法用于我们获取计算结果：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public T get() throws InterruptedException, ExecutionException
public T get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException

public T join()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>get()</code> 有两个重载方法：</p><ul><li><code>get()</code>：会阻塞当前线程，直到计算完成并返回结果</li><li><code>get(long timeout, TimeUnit unit)</code>：有阻塞时间，如果在指定的超时时间内未能获取到结果，会抛出 <code>TimeoutException</code> 异常。</li></ul><p>而 <code>get()</code> 和 <code>join()</code> 的区别则在于：</p><ul><li><code>get()</code> 会抛出 <code>InterruptedException</code> 和 <code>ExecutionException</code> 这两个受检查异常，我们必须显式地在代码中处理这些异常或将它们抛出。</li><li><code>join()</code> 不会抛出受检查异常，所以在使用过程中代码会显得更加简洁，但是如果任务执行中发生异常，它会包装在 <code>CompletionException</code> 中，我们需要在后续代码中处理。</li></ul><p>示例：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void completedFutureTest() {
        CompletableFuture&lt;String&gt; completableFuture = CompletableFuture.completedFuture(&quot;死磕 Java 就是牛&quot;);
        
        System.out.println(completableFuture.join());

        try {
            System.out.println(completableFuture.get());
        } catch (InterruptedException | ExecutionException e) {
            // 捕获异常并处理
            // 或者直接抛出
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结果、异常处理" tabindex="-1"><a class="header-anchor" href="#结果、异常处理" aria-hidden="true">#</a> 结果、异常处理</h4><p>当 CompletableFuture 因为异步任务执行完成或者发生异常而完成时，我们可以执行特定的 Action，主要方法有：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public CompletableFuture&lt;T&gt; whenComplete(BiConsumer&lt;? super T,? super Throwable&gt; action)
public CompletableFuture&lt;T&gt; whenCompleteAsync(BiConsumer&lt;? super T,? super Throwable&gt; action)
public CompletableFuture&lt;T&gt; whenCompleteAsync(BiConsumer&lt;? super T,? super Throwable&gt; action, Executor executor)

public CompletableFuture&lt;T&gt; exceptionally(Function&lt;Throwable, ? extends T&gt; fn) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>whenComplete(BiConsumer&lt;? super T,? super Throwable&gt; action)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>接受一个 <code>Consumer</code> 参数，该参数接受计算的结果（如果成功）或异常（如果发生异常）并执行相应的操作。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void whenCompleteTest() {
        CompletableFuture&lt;String&gt; completableFuture1 = CompletableFuture.supplyAsync(() -&gt; {
            log.info(&quot;[completableFuture-1] - www.skjava.com 网站就是牛..&quot;);
            return &quot;[completableFuture-1] - 死磕 Java 新特性&quot;;
        }).whenComplete((res,ex) -&gt; {
           if (ex == null) {
               System.out.println(&quot;结果是:&quot; + res);
           } else {
               System.out.println(&quot;发生了异常，异常信息是:&quot; + ex.getMessage());
           }
        });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法是同步执行，回调函数是在触发它的 CompletableFuture 所在的线程中执行，且它会阻塞当前线程。比如这里我们是在 main 线程去调用它的，所以执行他的线程就是 main 线程，它会阻塞 mian 线程执行。如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class WhenCompleteTest {
    private static CompletableFuture&lt;String&gt; future;

    public static void main(String[] args) {
        future = CompletableFuture.supplyAsync(() -&gt;{
            log.info(&quot;CompletableFuture 主体执行&quot;);
            return &quot;死磕 Java 新特性&quot;;
        });

        Thread thread = new Thread(() -&gt;{
           log.info(&quot;thread 线程开始执行&quot;);

            future.whenComplete((res,ex) -&gt; {
                log.info(&quot;whenComplete 主体开始执行&quot;);

                sleep(5);

                if (ex == null) {
                    log.info(&quot;whenComplete 执行结果:{}&quot;,res);
                } else {
                    log.info(&quot;whenComplete 执行异常:{}&quot;,ex.getMessage());
                }
                log.info(&quot;whenComplete 主体执行完毕&quot;);
            });

            log.info(&quot;thread 线程执行完成&quot;);
        });
        thread.setName(&quot;test-thread&quot;);
        thread.start();

        // 阻塞主线程
        sleep(15);
        log.info(&quot;主线程执行完毕&quot;);
    }

    public static void sleep(long sleep) {
        try {
            TimeUnit.SECONDS.sleep(sleep);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><p><img src="`+L+`" alt="img"></p><ol><li>首先 <code>test-thread</code> 线程先执行，打印 “thread 线程开始执行”</li><li>然后调用 <code>future.whenComplete()</code>，这个时候我们看到执行的线程也是 <code>test-thread</code>，在这里面它等待了 5 秒</li><li>5 秒过后再次打印 “thread 线程执行完成”</li></ol><p>从执行结果中可以看出 <code>whenComplete()</code> 就是由调用它的线程来执行，且会阻塞当前线程</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>whenCompleteAsync(BiConsumer&lt;? super T,? super Throwable&gt; action)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>异步执行，回调函数会在默认的 ForkJoinPool 的线程中执行，但是它不会阻塞当前线程。我们将上面例子的 <code>whenComplete()</code> 改成 <code>whenCompleteAsync()</code>，执行结果如下：</p><p><img src="`+C+`" alt="img"></p><ul><li><code>whenCompleteAsync()</code> 方法的执行线程是 <code>ForkJoinPool.commonPool-worker-9</code></li><li>没有阻塞 <code>test-tread</code> 线程的执行</li></ul><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>whenCompleteAsync(BiConsumer&lt;? super T,? super Throwable&gt; action, Executor executor)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>它与前一个方法相似，只不过我们可以执行执行 Action 执行的线程池。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void whenCompleteTest() {
        CompletableFuture&lt;String&gt; completableFuture3 = CompletableFuture.supplyAsync(() -&gt; {
            log.info(&quot;[completableFuture-3] - www.skjava.com 网站就是牛..&quot;);
            return &quot;[completableFuture-2] - 死磕 Java 新特性&quot;;
        }).whenCompleteAsync((res,ex) -&gt; {
            if (ex == null) {
                log.info(&quot;结果是:{}&quot;,res);
            } else {
                log.warn(&quot;发生了异常，异常信息是:{}&quot;,ex.getMessage());
            }
        },Executors.newFixedThreadPool(4));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exceptionally(Function&lt;Throwable, ? extends T&gt; fn)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>exceptionally()</code> 用于处理异步操作中的异常情况，当异步操作发生异常时，该回调函数将会被执行，我们可以在该回调函数中处理异常情况。<code>exceptionally</code>() 返回一个新的 <code>CompletableFuture</code> 对象，其中包含了异常处理的结果或者异常对象。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void exceptionallyTest() {
        CompletableFuture&lt;String&gt; future = CompletableFuture.supplyAsync(() -&gt; {
            int i = 10 / 0;
            return &quot;死磕 Java 并发就是牛&quot;;
        });

        CompletableFuture&lt;String&gt; resultFuture = future.exceptionally((ex) -&gt; {
            log.info(&quot;发生了异常:{}&quot;,ex.getMessage());
            return &quot;死磕 Netty 就是牛&quot;;
        });

        try {
            System.out.println(future.join());
        } catch (Exception ex) {
            log.error(&quot;异常:{}&quot;,ex.getMessage());
        }
        System.out.println(resultFuture.join());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><p><img src="`+A+`" alt="img"></p><p>由于 future 抛了异常，所以调用 <code>future.join()</code> 会报错，我们需要 <code>try...catch</code> 处理下 。</p><h4 id="结果转换" tabindex="-1"><a class="header-anchor" href="#结果转换" aria-hidden="true">#</a> 结果转换</h4><p>结果转换，就是将上一段任务的执行结果作为下一阶段任务的入参参与重新计算，产生新的结果。</p><blockquote><p><code>thenApply()</code>** <strong>和</strong> <strong><code>thenApplyAsync()</code></strong>：** 用于将一个 CompletableFuture 的结果应用于一个函数，并返回一个新的 CompletableFuture，表示转换后的结果。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void thenApplyTest() {
        CompletableFuture&lt;String&gt; completableFuture = CompletableFuture.supplyAsync(() -&gt; {
            log.info(&quot;执行第一步...&quot;);
            return &quot;死磕 Java&quot;;
        }).thenApply(s -&gt; {
            log.info(&quot;执行第二步,第一步返回结果:{}&quot;,s);
            return s + &quot; 就是牛..&quot;;
        });

        log.info(&quot;结果为:{}&quot;,completableFuture.join());
    }
 // 结果......
2023-10-22 15:28:26.882 [ForkJoinPool.commonPool-worker-9] INFO  - 执行第一步...
2023-10-22 15:28:26.888 [ForkJoinPool.commonPool-worker-9] INFO  - 执行第二步,第一步返回结果:死磕 Java
2023-10-22 15:28:26.888 [main] INFO  - 结果为:死磕 Java 就是牛.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>thenApply()</code>** <strong>和</strong> **<code>thenApplyAsync()</code> 两个方法的区别就不用大明哥再阐述了吧。</p><blockquote><p><code>thenCompose()</code> 和 <code>thenComposeAsync()</code> ：它用于将一个 CompletableFuture 的结果应用于一个函数，该函数返回一个新的 CompletableFuture。</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void thenComposeTest() {
        CompletableFuture&lt;String&gt; completableFuture = CompletableFuture.supplyAsync(() -&gt; {
            log.info(&quot;执行第一步...&quot;);
            return &quot;死磕 Java&quot;;
        }).thenCompose((s) -&gt; {
            log.info(&quot;执行第二步,第一步返回结果:{}&quot;,s);
            // 注意这里跟 thenApply() 的差异
            return CompletableFuture.supplyAsync(() -&gt; s + &quot; 就是牛..&quot;);
        });

        log.info(&quot;结果为:{}&quot;,completableFuture.join());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>thenCompose()</code> 与 <code>thenApply()</code> 两者的返回值虽然都是新的 CompletableFuture，但是 <code>thenApply()</code> 由于它的函数的返回值仅仅只是结果，所以它通常用于对异步操作的结果进行简单的转换，而 <code>thenCompose()</code> 则允许我们链式地组合多个异步操作。虽然两者都有可能实现相同的效果（比如上面例子），但是他们的使用场景和意义还是有区别的。</p><h4 id="结果消费" tabindex="-1"><a class="header-anchor" href="#结果消费" aria-hidden="true">#</a> 结果消费</h4><p>结果消费则是只对结果执行 Action，而不返回新的计算值。</p><blockquote><p><code>thenAccept()</code>：用于处理异步操作的结果，但不返回任何结果。</p></blockquote><p><code>thenAccept()</code> 接受一个 Consumer 函数接口。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void thenAcceptTest() throws InterruptedException {
        CompletableFuture&lt;String&gt; completableFuture = CompletableFuture.supplyAsync(() -&gt;{
          return &quot;死磕 Java 新特性&quot;;
        });

        completableFuture.thenAccept(s -&gt;{
            System.out.println(&quot;CompletableFuture 计算结果是:&quot; + s);
        });

        TimeUnit.SECONDS.sleep(5);
    }
// 结果......
CompletableFuture 计算结果是:死磕 Java 新特性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>thenAcceptBoth()</code>：用于处理两个不同的 CompletableFuture 异步操作的结果，并执行操作，但不返回新的结果。</p></blockquote><p>方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public CompletableFuture&lt;Void&gt; thenAcceptBoth(CompletableFuture&lt;? extends U&gt; other, BiConsumer&lt;? super T, ? super U&gt; action)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>other：为另外一个 CompletableFuture，它包含了另一个异步操作的结果。</li><li>action：类型为 BiConsumer，它接受两个参数，分别表示第一个 CompletableFuture 的结果和第二个 CompletableFuture 的结果。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void thenAcceptBothTest() throws InterruptedException {
        CompletableFuture&lt;String&gt; future1 = CompletableFuture.completedFuture(&quot;死磕 Netty&quot;);
        CompletableFuture&lt;String&gt; future2 = CompletableFuture.completedFuture(&quot;死磕 Java 新特性&quot;);

        future1.thenAcceptBoth(future2,(result1,result2) -&gt; {
            System.out.println(&quot;future1 的结果是：&quot; + result1);
            System.out.println(&quot;future2 的结果是：&quot; + result2);
        });

        TimeUnit.SECONDS.sleep(5);
    }
 // 结果......
 future1 的结果是：死磕 Netty
future2 的结果是：死磕 Java 新特性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>thenRun()</code>：用于在一个 CompletableFuture 异步操作完成后执行操作，而不关注计算的结果</p></blockquote><p><code>thenRun()</code> 通常用于执行其他作用的操作、清理工作、或在异步操作完成后触发其他操作。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void thenRunTest() throws InterruptedException {
        CompletableFuture&lt;String&gt; future = CompletableFuture.completedFuture(&quot;死磕 Netty&quot;);
        future.thenRun(()  -&gt;{
            System.out.println(&quot;CompletableFuture 计算执行完成，开始执行后续操作...&quot;);
        });

        TimeUnit.SECONDS.sleep(5);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结果组合" tabindex="-1"><a class="header-anchor" href="#结果组合" aria-hidden="true">#</a> 结果组合</h4><p><code>thenCombine()</code> 用于将两个不同的 CompletableFuture 异步操作的结果合并为一个新的结果，并执行操作。该方法允许我们在两个异步操作都完成后执行一个操作，它接受两个结果作为参数，并返回一个新的结果。</p><p>方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public &lt;U, V&gt; CompletableFuture&lt;V&gt; thenCombine(CompletableFuture&lt;? extends U&gt; other, BiFunction&lt;? super T, ? super U, ? extends V&gt; action)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>other：表示另外一个 CompletableFuture，它包含了该 CompletableFuture 的计算结果</li><li>action：类型是 BiFunction，它接受两个参数，分别是第一个 CompletableFuture 的计算结果和第二个 CompletableFuture 的计算结果。</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void thenCombineTest() {
        CompletableFuture&lt;String&gt; future1 = CompletableFuture.completedFuture(&quot;死磕 Netty&quot;);
        CompletableFuture&lt;String&gt; future2 = CompletableFuture.completedFuture(&quot;死磕 Java 新特性&quot;);

        CompletableFuture&lt;String&gt; combineFuture = future1.thenCombine(future2,(result1,result2) -&gt;{
            System.out.println(&quot;future1 的结果是：&quot; + result1);
            System.out.println(&quot;future2 的结果是：&quot; + result2);
            return result1 + &quot;和&quot; + result1 + &quot; 就是牛...&quot;;
        });

        System.out.println(combineFuture.join());
    }
 // 结果......
future1 的结果是：死磕 Netty
future2 的结果是：死磕 Java 新特性
死磕 Netty和死磕 Netty 就是牛...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="任务交互" tabindex="-1"><a class="header-anchor" href="#任务交互" aria-hidden="true">#</a> 任务交互</h4><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>applyToEither()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>applyToEither()</code> 用于处理两个不同的 CompletableFuture 异异步操作中的任何一个完成后，将其结果应用于一个函数，并返回一个新的 CompletableFuture 表示该函数的输出结果。该方法允许我们在两个异步操作中的任何一个完成时执行操作，而不需要等待它们都完成。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void applyToEitherTest() {
        CompletableFuture&lt;String&gt; future1 = CompletableFuture.completedFuture(&quot;死磕 Netty&quot;);
        CompletableFuture&lt;String&gt; future2 = CompletableFuture.completedFuture(&quot;死磕 Java 新特性&quot;);

        CompletableFuture&lt;String&gt; eitherFuture = future1.applyToEither(future2,res -&gt;{
            System.out.println(&quot;接受的结果是:&quot; + res);
            return &quot;eitherFuture 接受的结果是:&quot; +res;
        });

        System.out.println(eitherFuture.join());
    }
// 结果.....
接受的结果是:死磕 Netty
eitherFuture 接受的结果是:死磕 Netty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>acceptEither()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>acceptEither()</code> 与 <code>applyToEither()</code> 一样，也是等待两个 CompletableFuture 中的任意一个执行完成后执行操作，但是它不返回结果。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void acceptEitherTest() {
        CompletableFuture&lt;String&gt; future1 = CompletableFuture.completedFuture(&quot;死磕 Netty&quot;);
        CompletableFuture&lt;String&gt; future2 = CompletableFuture.completedFuture(&quot;死磕 Java 新特性&quot;);

        CompletableFuture&lt;Void&gt; eitherFuture = future1.acceptEither(future2,res -&gt;{
            System.out.println(&quot;接受的结果是:&quot; + res);
        });

        eitherFuture.join();
    }
 // 结果......
 接受的结果是:死磕 Java 新特性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>runAfterEither()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>runAfterEither()</code>用于在两个不同的 CompletableFuture 异步操作中的任何一个完成后执行操作，而不依赖操作的结果。这个方法通常用于在两个异步操作中的任何一个成功完成时触发清理操作或执行某些操作，而不需要返回值。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void runAfterEitherTest() {
        CompletableFuture&lt;String&gt; future1 = CompletableFuture.completedFuture(&quot;死磕 Netty&quot;);
        CompletableFuture&lt;String&gt; future2 = CompletableFuture.completedFuture(&quot;死磕 Java 并发&quot;);
        future1.runAfterEither(future2,() -&gt;{
            System.out.println(&quot;已经有一个任务完成了...&quot;);
        });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>runAfterBoth()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>runAfterBoth()</code> 用于在两个不同的 CompletableFuture 异步操作都完成后执行操作，而不依赖操作的结果。这个方法通常用于在两个异步操作都完成时触发某些操作或清理工作，而不需要返回值。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void runAfterBothTest() {
        CompletableFuture&lt;String&gt; future1 = CompletableFuture.completedFuture(&quot;死磕 Netty&quot;);
        CompletableFuture&lt;String&gt; future2 = CompletableFuture.completedFuture(&quot;死磕 Java 并发&quot;);
        future1.runAfterBoth(future2,() -&gt;{
            System.out.println(&quot;future1 和 future2 两个异步任务都完成了...&quot;);
        });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>anyOf()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p><code>anyOf()</code> 是用于处理多个 CompletableFuture 对象的<strong>静态方法</strong>，它允许我们等待多个异步操作中的任何一个完成，并执行相应的操作。它类似于多个异步操作的并发执行，只要有一个操作完成，它就会返回一个新的 CompletableFuture 对象，表示第一个完成的操作。</p><p><code>anyOf()</code> 是一个可变参数，我们可以传入任意数量的 CompletableFuture 对象。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void anyOfTest() {
        CompletableFuture&lt;String&gt; future1 = CompletableFuture.supplyAsync(() -&gt;{
            sleep(1);
            log.info(&quot;死磕 Netty 执行完成...&quot;);
            return &quot;死磕 Netty&quot;;
        });

        CompletableFuture&lt;String&gt; future2 = CompletableFuture.supplyAsync(() -&gt;{
            sleep(2);
            log.info(&quot;死磕 Java 并发 执行完成...&quot;);
            return &quot;死磕 Java 并发&quot;;
        });

        CompletableFuture&lt;String&gt; future3 = CompletableFuture.supplyAsync(() -&gt;{
            sleep(3);
            log.info(&quot;死磕 Redis 执行完成...&quot;);
            return &quot;死磕 Redis&quot;;
        });

        CompletableFuture&lt;String&gt; future4 = CompletableFuture.supplyAsync(() -&gt;{
            sleep(4);
            log.info(&quot;死磕 Java 新特性 执行完成...&quot;);
            return &quot;死磕 Java 新特性&quot;;
        });

        CompletableFuture&lt;String&gt; future5 = CompletableFuture.supplyAsync(() -&gt;{
            sleep(5);
            log.info(&quot;死磕 Spring 执行完成...&quot;);
            return &quot;死磕 Spring&quot;;
        });

        CompletableFuture&lt;Object&gt; anyOfFuture = CompletableFuture.anyOf(future1,future2,future3,future4,future5);
        anyOfFuture.thenAccept(result -&gt; {
            log.info(&quot;接收到的结果为:&quot; + result);
        });

        sleep(10);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><p><img src="`+w+`" alt="img"></p><p><code>anyOf()</code> 比较有用，当我们需要并行执行多个异步操作，并在其中任何一个完成时执行操作时，就可以使用它，大明哥在生产过程中应用过几次。</p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>allOf()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote><p>anyOf() 是任一一个异步任务完成就会触发，而 <code>allOf()</code> 则需要所有异步都要完成。我们将上面方法改为 <code>allOf()</code> 得到结果如下：</p><p><img src="`+I+'" alt="img"></p><p>这里得到结果为 null，是因为 <code>allOf()</code> 是没有返回值的。</p><h3 id="completablefuture-的任务编排" tabindex="-1"><a class="header-anchor" href="#completablefuture-的任务编排" aria-hidden="true">#</a> CompletableFuture 的任务编排</h3><p>著名数学家华罗庚先生在《统筹方法》这篇文章里介绍了一个烧水泡茶的例子，最优解如下：</p><p><img src="'+k+'" alt="img"></p><p>但是我们为了能够更好地验证 CompletableFuture 的任务编排功能，我们将其进行扩展：</p><p><img src="'+M+`" alt="img"></p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class Tea {
    public static void main(String[] args) throws InterruptedException {
        CompletableFuture&lt;String&gt; future1  = CompletableFuture.supplyAsync(()-&gt;{
            log.info(&quot;拿开水壶&quot;);
            return &quot;开水壶&quot;;
        });

        CompletableFuture&lt;String&gt; future2  = CompletableFuture.supplyAsync(() -&gt; {
            log.info(&quot;拿水壶&quot;);
            return &quot;水壶&quot;;
        });

        CompletableFuture&lt;String&gt; future3  = CompletableFuture.supplyAsync(() -&gt;{
            log.info(&quot;拿茶杯&quot;);
            return &quot;茶杯&quot;;
        });

        CompletableFuture&lt;String&gt; future4  = CompletableFuture.supplyAsync(() -&gt; {
            log.info(&quot;拿茶叶&quot;);
            return &quot;西湖龙井&quot;;
        });

        CompletableFuture&lt;String&gt; future11 = future1.thenApply((result) -&gt; {
            log.info(&quot;拿到&quot; + result + &quot;,开始洗&quot; + result);
            return &quot;干净的开水壶&quot;;
        });

        CompletableFuture&lt;String&gt; future12 = future11.thenApply((result) -&gt; {
            log.info(&quot;拿到&quot;  + result + &quot;,开始烧开水&quot;);
            return &quot;烧开水了&quot;;
        });

        CompletableFuture&lt;String&gt; future21 = future2.thenApply((result) -&gt; {
            log.info(&quot;拿到&quot; + result + &quot;,开始洗&quot; + result);
            return &quot;干净的水壶&quot;;
        });

        CompletableFuture&lt;String&gt; future31 = future3.thenApply((result) -&gt; {
            log.info(&quot;拿到&quot; + result + &quot;,开始洗&quot; + result);
            return &quot;干净的茶杯&quot;;
        });


        CompletableFuture&lt;Void&gt; future5  = CompletableFuture.allOf(future4,future12,future21,future31);
        future5.thenRun(() -&gt; {
           log.info(&quot;泡好了茶，还是喝美味的西湖龙井茶&quot;);
        });

        TimeUnit.SECONDS.sleep(5);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><p><img src="`+D+'" alt="img"></p><p>结果大明哥就不分析了，各位小伙伴好好对照下就明白了。通过这个例子我们清晰的见识到 CompletableFuture 任务编排的能力。</p><h3 id="completablefuture-api-总结" tabindex="-1"><a class="header-anchor" href="#completablefuture-api-总结" aria-hidden="true">#</a> CompletableFuture API 总结</h3><p>CompletableFuture的 API 比较多，不同的方法有不同的使用场景，大明哥也不可能将所有的 API 都介绍和举一个示例，就简单列一个表格吧。</p><blockquote><p><strong>构建异步操作</strong></p></blockquote><table><thead><tr><th>方法</th><th>说明</th><th>有无返回值</th></tr></thead><tbody><tr><td><code>runAsync</code></td><td>异步执行任务，默认 ForkJoinPool 线程池</td><td>无返回值</td></tr><tr><td><code>supplyAsync</code></td><td>异步执行任务，默认 ForkJoinPool 线程池</td><td>有返回值</td></tr><tr><td><code>completedFuture</code></td><td>创建一个已经完成的 CompletableFuture 对象</td><td>有返回值</td></tr></tbody></table><blockquote><p><strong>两个线程依次执行</strong></p></blockquote><table><thead><tr><th>方法</th><th>说明</th><th>有无返回值</th></tr></thead><tbody><tr><td><code>thenApply</code></td><td>获取前一个线程的执行结果，第二个线程处理该结果，生成一个新的 CompletableFuture 对象</td><td>有返回值</td></tr><tr><td><code>thenAccept</code></td><td>获取前一个线程的执行结果，第二个线程消费结果，不会返还给调用端</td><td>无返回值</td></tr><tr><td><code>thenRun</code></td><td>第一个线程执行完后，再执行，它忽略第一个线程的执行结果，也不返回结果</td><td>无返回值</td></tr><tr><td><code>thenCompose</code></td><td>获取前一个线程的执行结果，对其进行组合，返回新的 CompletableFuture 对象</td><td>有返回值</td></tr><tr><td><code>whenComplete</code></td><td>获取前一个线程的结果或异常，消费</td><td>不影响上一线程返回值</td></tr><tr><td><code>exceptionally</code></td><td>线程异常执行，配合whenComplete 使用</td><td>有返回值</td></tr><tr><td><code>handle</code></td><td>相当于whenComplete + exceptionally</td><td>有返回值</td></tr></tbody></table><blockquote><p><strong>等待2个线程都执行完</strong></p></blockquote><table><thead><tr><th>方法</th><th>说明</th><th>有无返回值</th></tr></thead><tbody><tr><td><code>thenCombine</code></td><td>2个线程都要有返回值，等待都结束，结果合并转换</td><td>有返回值</td></tr><tr><td><code>thenAcceptBoth</code></td><td>2个线程都要有返回值，等待都结束，结果合并消费</td><td>无返回值</td></tr><tr><td><code>runAfterBoth</code></td><td>2个线程无需要有返回值，等待都结束，执行其他逻辑</td><td>无返回值</td></tr></tbody></table><blockquote><p><strong>等待2个线程任一执行完</strong></p></blockquote><table><thead><tr><th>方法</th><th>说明</th><th>有无返回值</th></tr></thead><tbody><tr><td><code>applyToEither</code></td><td>2个线程都要有返回值，等待任一结束，转换其结果</td><td>有返回值</td></tr><tr><td><code>acceptEither</code></td><td>2个线程都要有返回值，等待任一结束，消费其结果</td><td>无返回值</td></tr><tr><td><code>runAfterEither</code></td><td>2个线程无需有返回值，等待任一结束，执行其他逻辑</td><td>无返回值</td></tr></tbody></table><blockquote><p><strong>多个线程等待</strong></p></blockquote><table><thead><tr><th>方法</th><th>说明</th><th>有无返回值</th></tr></thead><tbody><tr><td><code>anyOf</code></td><td>多个线程任一执行完返回</td><td>有返回值</td></tr><tr><td><code>allOf</code></td><td>多个线程全部执行完返回</td><td>无返回值</td></tr></tbody></table><h2 id="java-8-新特性—重复注解-repeatable" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—重复注解-repeatable" aria-hidden="true">#</a> Java 8 新特性—重复注解@Repeatable</h2><p><img src="'+O+`" alt="img"></p><h3 id="java-8-之前如何使用重复注解" tabindex="-1"><a class="header-anchor" href="#java-8-之前如何使用重复注解" aria-hidden="true">#</a> Java 8 之前如何使用重复注解</h3><p>在 Java 8 之前我们是无法在一个类型重复使用多次同一个注解，比如我们常用的 <code>@PropertySource</code>，如果我们在 Java 8 版本以下这样使用：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@PropertySource(&quot;classpath:config.properties&quot;)
@PropertySource(&quot;classpath:application.properties&quot;)
public class PropertyTest {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译会报错，错误信息是：<code>Duplicate annotation</code>。</p><p>那怎么解决这个问题呢？在 Java 8 之前想到一个方案来解决 <code>Duplicate annotation</code> 错误：新增一个注解 <code>@PropertySources</code>，该注解包裹 <code>@PropertySource</code>，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public @interface PropertySources {

  PropertySource[] value();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以利用 <code>@PropertySources</code> 来完成了：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@PropertySources({
  @PropertySource(&quot;classpath:config.properties&quot;),
  @PropertySource(&quot;classpath:application.properties&quot;)     
})
public class PropertyTest {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这种嵌套的方式来规避重复注解的问题，怎么获取呢？</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void  test() {
        PropertySources propertySources = PropertyTest.class.getAnnotation(PropertySources.class);
        for (PropertySource propertySource : propertySources.value()) {
            System.out.println(propertySource.value()[0]);
        }
    }
// 结果......
classpath:config.properties
classpath:application.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-8-重复注解-repeatable" tabindex="-1"><a class="header-anchor" href="#java-8-重复注解-repeatable" aria-hidden="true">#</a> Java 8 重复注解 @Repeatable</h3><p>通过上述那种方式确实是可以解决重复注解的问题，但是使用有点儿啰嗦，所以 Java 8 为了解决这个问题引入了注解 <code>@Repeatable</code> 来解决这个问题。</p><blockquote><p><code>@Repeatable</code> 注解允许在同一个类型上多次使用相同的注解，它提供了更灵活的注解使用方式。</p></blockquote><p>下面我们来看看如何使用重复注解。</p><h4 id="如何使用重复注解" tabindex="-1"><a class="header-anchor" href="#如何使用重复注解" aria-hidden="true">#</a> 如何使用重复注解</h4><blockquote><p><strong>1、重复注解声明</strong></p></blockquote><p>在使用重复注解之前，需要在自定义注解类型上使用<code>@Repeatable</code>注解，以指定该注解可重复使用的容器注解类型。容器注解类型本身也是一个注解，通常具有一个value属性，其值是一个数组，用于存储重复使用的注解。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Repeatable(MyAnnotations.class)        // 声明重复注解
public @interface MyAnnotation {
    String name() default &quot;&quot;;
}

/**
 * 重复注解容器
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface MyAnnotations {
    MyAnnotation[] value();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>2、使用重复注解</strong></p></blockquote><p>定义了重复注解，我们就可以在一个类型上面使用多个相同的注解，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@MyAnnotation(name = &quot;死磕 Java 并发&quot;)
@MyAnnotation(name = &quot;死磕 Netty&quot;)
@MyAnnotation(name = &quot;死磕 Redis&quot;)
@MyAnnotation(name = &quot;死磕 Java 基础&quot;)
@MyAnnotation(name = &quot;死磕 Redis&quot;)
public class MyAnnotationTest {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>3、获取重复注解的值</strong></p></blockquote><p>使用放射获取元素上面的重复注解，由于我们这里有多个所以需要根据 <code>getAnnotationsByType()</code> 来获取所有重复注解的数组：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        MyAnnotation[] myAnnotations = MyAnnotationTest.class.getAnnotationsByType(MyAnnotation.class);
        for (MyAnnotation myAnnotation : myAnnotations) {
            System.out.println(myAnnotation.name());
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+_+`" alt="img"></p><p>我们还可以直接获取它的容器注解：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        MyAnnotations myAnnotations = MyAnnotationTest.class.getAnnotation(MyAnnotations.class);
        for (MyAnnotation myAnnotation : myAnnotations.value()) {
            System.out.println(myAnnotation.name());
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依然可以获取到值。</p><p>重复注解很容易就理解了，知道如何自定义注解，然后变换下思路就行了。</p><h2 id="java-8-新特性—接口默认方法和静态方法" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—接口默认方法和静态方法" aria-hidden="true">#</a> Java 8 新特性—接口默认方法和静态方法</h2><h3 id="接口默认方法" tabindex="-1"><a class="header-anchor" href="#接口默认方法" aria-hidden="true">#</a> 接口默认方法</h3><p>在 Java 8 之前，接口中可以申明方法和变量的，只不过变量必须是 public、static、final 的，方法必须是 public、abstract的。我们知道接口的设计是一项巨大的工作，因为如果我们需要在接口中新增一个方法，需要对它的所有实现类都进行修改，如果它的实现类比较少还可以接受，如果实现类比较多则工作量就比较大了。</p><p>为了解决这个问题，Java 8 引入了默认方法，默认方法允许在接口中添加具有默认实现的方法，它使得接口可以包含方法的实现，而不仅仅是抽象方法的定义。</p><p>默认方法允许接口在不破坏实现类的情况下进行演进。这对于标准化库的维护和扩展非常重要，因为可以添加新的方法来满足新的需求，而不会影响已存在的实现。同时默认方法使得接口可以通过通用的方法实现，这可以减少代码的重复性，提供了代码的可维护性，是不是有点儿像抽象类了？</p><p>默认方法是通过在接口中使用 <code>default</code> 关键字来定义的，后面跟着方法的实现。语法如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>interface MyInterface {
    default void myDefaultMethod() {
        // 默认方法的实现
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现类可以选择性地重写默认方法，如果它们</p><p>实现接口的类可以根据自己的需要重写接口的默认方法。当然如果实现类没有提供自己的实现，将使用默认方法的实现。</p><p>使用默认方法非常简单，就当做普通的方法调用即可。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 接口
public interface MyInterface {

    default String defaultMethod() {
       return &quot;MyInterface-defaultMethod&quot;;
    }
}

// 实现类-1
public class MyInterfaceImpl1 implements MyInterface{
}

// 实现类-2
public class MyInterfaceImpl2 implements MyInterface{
    @Override
    public String defaultMethod() {
        return &quot;MyInterfaceImpl2-defaultMethod&quot;;
    }
}

@Test
public void test() {
  MyInterface myInterface1 = new MyInterfaceImpl1();
  MyInterface myInterface2 = new MyInterfaceImpl2();

  System.out.println(myInterface1.defaultMethod());
  System.out.println(myInterface2.defaultMethod());
}
// 结果......
MyInterface-defaultMethod
MyInterfaceImpl2-defaultMethod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MyInterfaceImpl1 调用 MyInterface 接口内的 <code>defaultMethod()</code>，而 MyInterfaceImpl2 则是调用自己重写的 <code>defaultMethod()</code>。</p><p>我们知道 Java 是可以实现多个接口的，如果都包含具有相同方法签名的默认方法呢？这种情况，Java 要求我们实现类必须重写该默认方法来解决冲突，否则编译异常。比如再提供一个接口 MyInterface1 ，MyInterfaceImpl1 实现 MyInterface 和 MyInterface1：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface MyInterface1 {
    default String defaultMethod() {
        return &quot;MyInterface1-defaultMethod&quot;;
    }
}

public class MyInterfaceImpl1 implements MyInterface,MyInterface1{
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译器会提示你有这个错误：</p><p><img src="`+E+`" alt="img"></p><p>这个时候就需要 MyInterfaceImpl1 重写 <code>defaultMethod()</code>：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class MyInterfaceImpl1 implements MyInterface,MyInterface1{
    @Override
    public String defaultMethod() {
        // return MyInterface.super.defaultMethod(); or
        return &quot;MyInterfaceImpl1-defaultMethod()&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口静态方法" tabindex="-1"><a class="header-anchor" href="#接口静态方法" aria-hidden="true">#</a> 接口静态方法</h3><p>Java 8 引入了接口静态方法，该特性允许在接口中定义静态方法。</p><p>接口静态方法允许在接口中定义静态实用性工具类方法，这些方法与接口的功能相关，但是不依赖于实例，这对于提供该接口的通用方法或工具方法非常有用，可以减少代码重复性，提高代码的可维护性。</p><p>接口静态方法的使用和我们平常调用工具类一样的。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public interface MyInterface {    
    static String staticMethod() {
        return &quot;MyInterface-staticMethod&quot;;
    }
}

@Test
public void test() {
  System.out.println(MyInterface.staticMethod());
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是我们是无法在实现类重写接口静态方法的。</p><h2 id="java-8-新特性—stream-api-对元素流进行函数式操作" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—stream-api-对元素流进行函数式操作" aria-hidden="true">#</a> Java 8 新特性—Stream API 对元素流进行函数式操作</h2>`,245),Fe={href:"https://www.skjava.com/series/article/1747461365",target:"_blank",rel:"noopener noreferrer"},Le=e("code",null,"Stream API",-1),Ce=e("code",null,"Stream API",-1),Ae=d('<p><img src="'+j+`" alt="img"></p><h3 id="什么是-stream-api" tabindex="-1"><a class="header-anchor" href="#什么是-stream-api" aria-hidden="true">#</a> 什么是 Stream API</h3><p><code>Stream API</code> 是 Java 8 引入的一个用于对集合数据进行函数式编程操作的强大的库。它允许我们以一种更简洁、易读、高效的方式来处理集合数据，可以极大提高 Java 程序员的生产力，是目前为止对 Java 类库最好的补充。</p><p><code>Stream API </code>的核心思想是将数据处理操作以函数式的方式链式连接，以便于执行各种操作，如过滤、映射、排序、归约等，而无需显式编写传统的循环代码。</p><p>下面是 <code>Stream API</code> 的一些重要概念和操作：</p><ol><li><p><code>Stream</code>****（流）</p><p>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Stream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>是 Java 8 中处理集合的关键抽象概念，它是数据渠道，用于操作数据源所生成的元素序列。这些数据源可以来自集合（</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Collection
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>）、数组、</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>I/O
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>操作等等。它具有如下几个特点：</p><ol><li><code>Stream</code> 不会存储数据。</li><li><code>Stream</code> 不会改变源数据对象，它返回一个持有结果的新的 <code>Stream</code>。</li><li><code>Stream</code> 操作是延迟执行的，这就意味着他们要等到需要结果的时候才会去执行。</li></ol></li><li><p><strong>中间操作</strong>：这些操作允许您在 <code>Stream</code> 上执行一系列的数据处理。常见的中间操作有 <code>filter</code>（过滤）、<code>map</code>（映射）、<code>distinct</code>（去重）、<code>sorted</code>（排序）、<code>limit</code>（截断）、<code>skip</code>（跳过）等。这些操作返回的仍然是一个 Stream。</p></li><li><p><strong>终端操作</strong>：终端操作是对流进行最终处理的操作。当调用终端操作时，流将被消费，不能再进行进一步的中间操作。常见的终端操作包括 <code>forEach</code>（遍历元素）、<code>collect</code>（将元素收集到集合中）、<code>reduce</code>（归约操作，如求和、求最大值）、<code>count</code>（计数）等。</p></li><li><p><strong>惰性求值</strong>：Stream 操作是惰性的，只有在调用终端操作时才会执行中间操作。这可以提高性能，因为只处理需要的数据。</p></li></ol><h3 id="为什么要用-stream-api" tabindex="-1"><a class="header-anchor" href="#为什么要用-stream-api" aria-hidden="true">#</a> 为什么要用 Stream API</h3><p>作为一个 CRUD Boy ，在实际开发中，我们的数据来源大多数都是基于数据库、文件等等，一般情况下这些数据都需要我们用 Java 程序来处理。这时有小伙伴就说，我用 for 循环就能很好的处理集合数据了，为什么偏要用 <code>Stream API</code> 呢？其实相比传统集合处理方式，Stream API 有很多优点：</p><ol><li><strong>简洁和可读性</strong>：Stream API 的链式操作使代码更加简洁、可读。</li><li><strong>不可变性</strong>：Stream 操作不会修改原始数据，而是创建一个新的 Stream，确保了原始数据的不可变性，有助于并发编程。</li><li><strong>惰性求值</strong>：Stream 操作是惰性的，只有在调用终端操作时才会触发中间操作的执行，提高了性能，因为只处理需要的数据。</li><li><strong>并行处理</strong>：Stream API 支持并行处理数据，可以充分利用多核处理器，提高性能。</li><li><strong>更高的效率</strong>：使用 Stream API 可以更快速地编写代码，因为它减少了样板代码的编写，同时提供了丰富的操作。</li></ol><blockquote><p><strong>Stream 与集合的差异是：Stream 讲的是计算，而集合讲的是数据。</strong></p></blockquote><h3 id="stream-操作三部曲" tabindex="-1"><a class="header-anchor" href="#stream-操作三部曲" aria-hidden="true">#</a> Stream 操作三部曲</h3><p>一个完整的 Stream 操作包括三步</p><h4 id="创建-stream" tabindex="-1"><a class="header-anchor" href="#创建-stream" aria-hidden="true">#</a> <strong>创建 Stream</strong></h4><p>首先我们需要一个 Stream 对象，常见的创建方式有：</p><ul><li>使用集合的 <code>stream()</code> 方法</li></ul><p>在集合中有两个方法可以创建 Stream 对象：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>default Stream&lt;E&gt; stream()：返回一个顺序流
default Stream&lt;E&gt; parallelStream()：返回一个并行流
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过数组</li></ul><p><code>Arrays.stream(T[] array)</code>，将数组转换为 Stream 对象：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String[] array = {&quot;死磕 Java&quot;,&quot;死磕 Java 并发&quot;,&quot;死磕 Java 新特性&quot;,&quot;死磕 Netty&quot;};
Stream&lt;String&gt; stream = Arrays.stream(array);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用<code>Stream.of(T... values)</code>方法</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Stream&lt;String&gt; stream = Stream.of(&quot;死磕 Java&quot;,&quot;死磕 Java 并发&quot;,&quot;死磕 Java 新特性&quot;,&quot;死磕 Netty&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种方式适用于直接提供一组元素来创建Stream。</p><ul><li>使用<code>Stream.builder()</code>方法</li></ul><p>Stream 提供了一个 <code>builder()</code> 方法来提供构建 Stream 的构造器：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Stream.Builder&lt;String&gt; builder = Stream.builder();
builder.accept(&quot;死磕 Java&quot;);
builder.accept(&quot;死磕 Java 并发&quot;);
builder.accept(&quot;死磕 Java 新特性&quot;);
builder.accept(&quot;死磕 Netty&quot;);
Stream&lt;String&gt; stream = builder.build();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式适用于需要逐个添加元素到Stream中的情况。</p><ul><li><code>Stream.generate()</code> or <code>Stream.iterate(T seed, UnaryOperator&lt;T&gt; f)</code></li></ul><p>这两个方法都是用于生成无限元素的Stream，需要通过<code>limit()</code>方法来限制元素数量。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Stream&lt;String&gt; stream = Stream.generate(() -&gt; &quot;a&quot;).limit(3);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这两个方法使用比较少。</p><h4 id="中间操作" tabindex="-1"><a class="header-anchor" href="#中间操作" aria-hidden="true">#</a> <strong>中间操作</strong></h4><p>有了 Stream 对象，就可以在 Stream 上应用中间操作。</p><p>中间操作是一系列的操作，对数据源的数据进行处理，例如过滤、映射、排序、去重等等。注意这些操作不会立即执行，而是构建一个操作链。下表是 Stream 中常用中间操作方法。</p><table><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>filter(Predicate&lt;T&gt; predicate)</code></td><td>根据给定的谓词条件过滤元素。</td></tr><tr><td><code>map(Function&lt;T, R&gt; mapper)</code></td><td>将元素通过给定的函数映射为另一个类型的元素。</td></tr><tr><td><code>flatMap(Function&lt;T, Stream&lt;R&gt;&gt; mapper)</code></td><td>将每个元素映射为一个流，然后将这些流合并为一个流。</td></tr><tr><td><code>distinct()</code></td><td>去除流中的重复元素。</td></tr><tr><td><code>sorted()</code></td><td>对元素进行排序，默认按自然顺序排序。</td></tr><tr><td><code>sorted(Comparator&lt;T&gt; comparator)</code></td><td>使用自定义比较器对元素进行排序。</td></tr><tr><td><code>limit(long maxSize)</code></td><td>截取流中的前 maxSize 个元素。</td></tr><tr><td><code>skip(long n)</code></td><td>跳过流中的前N个元素。</td></tr></tbody></table><h4 id="终端操作" tabindex="-1"><a class="header-anchor" href="#终端操作" aria-hidden="true">#</a> <strong>终端操作</strong></h4><p>做完中间操作后，我们需要调用一个终端操作来触发实际的数据处理。终端操作会遍历 Stream 并执行中间操作并产生结果。下表是一些常见的终端操作方法：</p><table><thead><tr><th>方法名</th><th>方法描述</th></tr></thead><tbody><tr><td><code>forEach()</code></td><td>对流中的每个元素执行指定的操作。</td></tr><tr><td><code>forEachOrdered()</code></td><td>与forEach类似，但保留了元素的顺序。</td></tr><tr><td><code>toArray()</code></td><td>将流中的元素收集到数组中。</td></tr><tr><td><code>reduce(accumulator)</code></td><td>通过累积操作将流中的元素归约为单个结果。</td></tr><tr><td><code>reduce(identity, accumulator)</code></td><td>使用初始值和累积操作将流中的元素归约为单个结果。</td></tr><tr><td><code>reduce(identity, accumulator, combiner)</code></td><td>使用初始值、累积操作和组合操作将流中的元素归约为单个结果。</td></tr><tr><td><code>collect()</code></td><td>将流中的元素收集到集合或映射中，可以指定收集器来定制收集行为。</td></tr><tr><td><code>min(comparator)</code></td><td>使用指定的比较器找到流中的最小元素。</td></tr><tr><td><code>max(comparator)</code></td><td>使用指定的比较器找到流中的最大元素。</td></tr><tr><td><code>count()</code></td><td>计算流中元素的数量。</td></tr><tr><td><code>anyMatch()</code></td><td>检查流中是否有任何元素匹配指定的条件。</td></tr><tr><td><code>allMatch()</code></td><td>检查流中的所有元素是否都匹配指定的条件。</td></tr><tr><td><code>noneMatch()</code></td><td>检查流中是否没有元素匹配指定的条件。</td></tr><tr><td><code>findFirst()</code></td><td>返回流中的第一个元素（如果存在），通常与filter操作一起使用。</td></tr><tr><td><code>findAny()</code></td><td>返回流中的任意元素（如果存在），通常与filter操作一起使用。</td></tr></tbody></table><h3 id="stream-api-介绍" tabindex="-1"><a class="header-anchor" href="#stream-api-介绍" aria-hidden="true">#</a> Stream API 介绍</h3><h4 id="中间操作-1" tabindex="-1"><a class="header-anchor" href="#中间操作-1" aria-hidden="true">#</a> 中间操作</h4><h5 id="筛选与切片" tabindex="-1"><a class="header-anchor" href="#筛选与切片" aria-hidden="true">#</a> 筛选与切片</h5><blockquote><p><code>filter(Predicate&lt;T&gt; predicate)</code>：根据给定的谓词条件过滤元素。</p></blockquote><p><code>filter()</code> 接受一个谓词函数作为参数，该函数用于对流中的每个元素进行验证，只有满足谓词条件的元素才会被保留在新的流中，而不满足条件的元素将被过滤掉。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void filterTest() {
        Stream&lt;String&gt; stream = Stream.of(&quot;死磕 Java&quot;,&quot;死磕 Java 并发&quot;,&quot;死磕 Java 新特性&quot;,&quot;死磕 Netty&quot;);
        stream.filter(x -&gt; x.endsWith(&quot;Netty&quot;))
                .forEach(System.out::println);
    }
// 结果......
死磕 Netty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>skip(long n)</code>：跳过流中的前N个元素。</p></blockquote><p><code>skip()</code> 通常用于分页或忽略前几个元素的场景。若流中元素不足 N 个，则返回空流。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void skipTest() {
        Stream&lt;String&gt; stream = Stream.of(&quot;死磕 Java&quot;,&quot;死磕 Java 并发&quot;,&quot;死磕 Java 新特性&quot;,&quot;死磕 Netty&quot;);
        stream.skip(2)
                .forEach(System.out::println);
    }
// 结果......
死磕 Java 新特性
死磕 Netty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>limit(long maxSize)</code>：截取流中的前 maxSize个元素。</p></blockquote><p><code>limit()</code> 通常用于对流进行限制，以获取一定数量的元素，比如分页或筛选操作。如果 <code>maxSize</code> 大于流中元素的总数，那么 <code>limit</code> 方法将返回包含所有元素的新流，不会有任何元素被丢弃。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void limitTest() {
        Stream&lt;String&gt; stream = Stream.of(&quot;死磕 Java&quot;,&quot;死磕 Java 并发&quot;,&quot;死磕 Java 新特性&quot;,&quot;死磕 Netty&quot;);
        stream.limit(3)
                .forEach(System.out::println);
    }
// 结果......
死磕 Java
死磕 Java 并发
死磕 Java 新特性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>distinct()</code>：去除流中的重复元素。</p></blockquote><p><code>distinct()</code> 依赖于元素的 <code>equals()</code> 来检查是否重复，因此对于自定义对象，需要确保正确实现了 <code>equals()</code> 和 <code>hashCode()</code> 方法以实现正确的去重功能。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void distinctTest() {
        Stream&lt;String&gt; stream = Stream.of(&quot;死磕 Java&quot;,&quot;死磕 Java 并发&quot;,&quot;死磕 Java 新特性&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java&quot;,&quot;死磕 Java 新特性&quot;);
        stream.distinct()
                .forEach(System.out::println);
    }
    
// 结果......
死磕 Java
死磕 Java 并发
死磕 Java 新特性
死磕 Netty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="映射" tabindex="-1"><a class="header-anchor" href="#映射" aria-hidden="true">#</a> 映射</h5><blockquote><p><code>map(Function&lt;T, R&gt; mapper)</code>：将元素通过给定的函数映射为另一个类型的元素。</p></blockquote><p><code>map()</code> 会对流中的每个元素执行一个函数操作，将每个元素映射为另一个类型的元素，然后将映射后的元素作为新的流返回，通常用于数据转换和提取元素的属性。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void mapTest() {
        Stream&lt;String&gt; stream = Stream.of(&quot;死磕 Java&quot;,&quot;死磕 Java 并发&quot;,&quot;死磕 Java 新特性&quot;,&quot;死磕 Netty&quot;);
        stream.map(String::toUpperCase)
                .forEach(System.out::println);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如这个例子，将所有的元素全部转换为大写形式。</p><p>再比如，我们有一批学生列表，要获取年龄小于 6 岁所有小朋友的名字，去重：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void mapTest() {
        Stream&lt;Student&gt; stream = Stream.&lt;Student&gt;builder()
                .add(new Student(&quot;梓涵&quot;,5))
                .add(new Student(&quot;子涵&quot;,4))
                .add(new Student(&quot;紫涵&quot;,5))
                .add(new Student(&quot;子晗&quot;,6))
                .add(new Student(&quot;梓晗&quot;,7))
                .add(new Student(&quot;梓涵&quot;,5))
                .add(new Student(&quot;紫晗&quot;,6))
                .build();

        stream.filter(x -&gt; x.getAge() &lt; 6)  // 过滤年龄小于6岁
                .map(Student::getName)      // 拿到所有学生的名字
                .distinct()                 // 去重
                .forEach(System.out::println);
    }
 // 结果......
梓涵
子涵
紫涵
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>map()</code> 是非常有用的，它允许我们对流中的元素执行各种转换操作，如类型转换、属性提取等等，这使得在流处理中进行数据转换变得非常方便。</p><blockquote><p><code>flatMap(Function&lt;T, Stream&lt;R&gt;&gt; mapper)</code>：将每个元素映射为一个流，然后将这些流合并为一个流。</p></blockquote><p><code>flatMap()</code> 通常用于将嵌套的集合结构扁平化，或者将元素进行扁平映射以进行处理。例如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void flatMapTest() {
        List&lt;List&lt;String&gt;&gt; list = Arrays.asList(
                Arrays.asList(&quot;死磕 Java&quot;,&quot;死磕 Java 并发&quot;),
                Arrays.asList(&quot;死磕 Java 基础&quot;),
                Arrays.asList(&quot;死磕 Java NIO&quot;,&quot;死磕 Netty&quot;),
                Arrays.asList(&quot;死磕 Redis&quot;,&quot;死磕 Spring&quot;),
                Arrays.asList(&quot;死磕 Java 新特性&quot;)
        );

        list.stream()
                .flatMap(List::stream)
                .forEach(System.out::println);
    }
// 结果......
死磕 Java
死磕 Java 并发
死磕 Java 基础
死磕 Java NIO
死磕 Netty
死磕 Redis
死磕 Spring
死磕 Java 新特性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，flatMap() 接受一个 函数 <code>List::stream</code>，该函数将每个嵌套的集合转换为一个流，然后 <code>flatMap()</code> 将所有流合并成一个单一的流。</p><p>我们再来一个稍微复杂点的：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
@AllArgsConstructor
public class User {
    private String name;

    private List&lt;Order&gt; orderList;
}

@Data
@AllArgsConstructor
public class Order {
    private Integer id;
    private String name;
}

    
    
@Test
public void flatMapTest1() {
  List&lt;User&gt; users = Arrays.asList(
        new User(&quot;张三&quot;, Arrays.asList(new Order(1, &quot;iPhone 13&quot;), new Order(2, &quot;iPhone 14&quot;))),
        new User(&quot;李四&quot;, Arrays.asList(new Order(3, &quot;MacBook Pro&quot;))),
        new User(&quot;王五&quot;, Arrays.asList(new Order(4, &quot;iPad&quot;), new Order(5, &quot;MacBook Air&quot;)))
  );

  users.stream()
       .flatMap(u -&gt; u.getOrderList().stream())
       .map(Order::getName)
       .forEach(System.out::println);
}
// 结果......
iPhone 13
iPhone 14
MacBook Pro
iPad
MacBook Air
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code>flatMap()</code> 首先将每个 User的 OrderList转换为一个流，然后使用 <code>map()</code> 提取订单的名称，最终将所有订单名称打印出来。</p><h5 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h5><blockquote><p><code>sorted()</code>：对元素进行排序，默认按自然顺序排序。</p></blockquote><p><code>sorted()</code> 用于对流中的元素进行自然排序，要求流中的元素必须实现 <code>Comparable</code> 接口。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void sortedTest() {
        Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .sorted()
                .forEach(System.out::println);
    }
// 结果......
死磕 Java
死磕 Java 并发
死磕 Java 新特性
死磕 Netty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void sortedTest1() {
        Stream&lt;Student&gt; stream = Stream.&lt;Student&gt;builder()
                .add(new Student(&quot;梓涵&quot;,5))
                .add(new Student(&quot;子涵&quot;,4))
                .add(new Student(&quot;紫涵&quot;,5))
                .add(new Student(&quot;子晗&quot;,6))
                .add(new Student(&quot;梓晗&quot;,7))
                .add(new Student(&quot;梓涵&quot;,5))
                .add(new Student(&quot;紫晗&quot;,6))
                .build();
        // 排序
        stream.sorted().forEach(System.out::println);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候执行就会报错：</p><p><img src="`+P+`" alt="img"></p><p>告诉你没有实现 <code>java.lang.Comparable</code> 接口。</p><blockquote><p><code>sorted(Comparator&lt;? super T&gt; comparator)</code>：使用自定义比较器对元素进行排序。</p></blockquote><p>该方法接受一个自定义的比较器<code>Comparator</code>，允许我们根据自定义规则对流中的元素进行排序。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void sortedTest1() {
        Stream&lt;Student&gt; stream = Stream.&lt;Student&gt;builder()
                .add(new Student(&quot;梓涵&quot;,5))
                .add(new Student(&quot;子涵&quot;,4))
                .add(new Student(&quot;紫涵&quot;,5))
                .add(new Student(&quot;子晗&quot;,6))
                .add(new Student(&quot;梓晗&quot;,7))
                .add(new Student(&quot;梓涵&quot;,5))
                .add(new Student(&quot;紫晗&quot;,6))
                .build();
        // 排序
        stream.sorted(Comparator.comparing(Student::getAge)).forEach(System.out::println);
    }
// 结果......
Student(name=子涵, age=4)
Student(name=梓涵, age=5)
Student(name=紫涵, age=5)
Student(name=梓涵, age=5)
Student(name=子晗, age=6)
Student(name=紫晗, age=6)
Student(name=梓晗, age=7)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="终端操作-1" tabindex="-1"><a class="header-anchor" href="#终端操作-1" aria-hidden="true">#</a> 终端操作</h4><h5 id="匹配与查找" tabindex="-1"><a class="header-anchor" href="#匹配与查找" aria-hidden="true">#</a> 匹配与查找</h5><blockquote><p><code>allMatch()</code>：检查流中的所有元素是否都匹配指定的条件。</p></blockquote><p><code>allMatch()</code> 会遍历流中的每一个元素，检查每一个元素是否符合条件，如果全都符合条件，则返回 true，否则返回 false。如果流为空，则返回 true 。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void allMatchTest() {
        boolean result = Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .allMatch(x -&gt; x.startsWith(&quot;死磕&quot;));
        System.out.println(result);
    }
// 结果......
true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>anyMatch()</code>：检查流中是否有任何元素匹配指定的条件。</p></blockquote><p><code>anyMatch()</code> 遍历流中的每一个元素，检查每个元素是否符合条件，如果有一个满足条件则返回 true，否则返回 false。如果流为空，返回 false。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void anyMatchTest() {
        boolean result = Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .anyMatch(x -&gt; x.indexOf(&quot;Spring&quot;) &gt; 0);
        System.out.println(result);
    }
// 结果......
false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>noneMatch()</code>：检查流中是否没有元素匹配指定的条件。</p></blockquote><p><code>noneMatch()</code> 检查流中每个元素是否都不满足条件，如果都不满足返回 true，否则返回 false，如果为空，则返回 true。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void noneMatchTest() {
        boolean result = Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .noneMatch(x -&gt; x.indexOf(&quot;Spring&quot;) &gt; 0);
        System.out.println(result);
    }
// 结果......
true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>findFirst()</code>：返回流中的第一个元素（如果存在）</p></blockquote><p><code>findFirst()</code> 结果为Optional，如果流为空，<code>findFirst()</code> 返回的是一个包含null的<code>Optional</code>，否则包含第一个元素。</p><p>由于流有可能为无限流，所以 <code>findFirst()</code> 一般都会与其他操作一起使用，例如 <code>filter()</code>，找满足条件的第一个元素。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void findFirstTest() {
        Optional&lt;String&gt; result = Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .filter(x -&gt; x.indexOf(&quot;Java&quot;) &gt; 0)
                .findFirst();
        System.out.println(result.orElse(&quot;&quot;));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>findAny()</code>：返回流中的任意元素（如果存在）</p></blockquote><p><code>findAny()</code> 与 <code>findFirst()</code> 相似，不同的是 <code>findAny</code> 不保证返回流中的第一个元素，而是返回任意一个满足条件的元素。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void findAnyTest() {
        Optional&lt;String&gt; result = Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .filter(x -&gt; x.contains(&quot;死磕&quot;))
                .findAny();
        System.out.println(result.orElse(&quot;&quot;));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>min()</code>：找到流中的最小元素</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void minTest() {
        Optional&lt;String&gt; result = Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .min(String::compareTo);
        System.out.println(result.orElse(&quot;&quot;));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>max()</code>：找到流中的最大元素</p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void maxTest() {
        Optional&lt;String&gt; result = Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .max(String::compareTo);
        System.out.println(result.orElse(&quot;&quot;));
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>count()</code>：计算流中元素的数量。</p></blockquote><p><code>count()</code> 通常用于获取流中元素的数量，以便在需要时进行统计、计数或其他操作。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void countTest() {
        long result = Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .filter(x -&gt; x.contains(&quot;Java&quot;))
                .count();
        System.out.println(result);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>forEach()</code>：对流中的每个元素执行指定的操作。</p></blockquote><p><code>forEach()</code> 主要用于遍历流中的每个元素，并对每个元素应用指定的操作。这可以用于执行各种自定义操作，例如打印元素、将元素存储到集合中等。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void forEachTest() {
      Stream.of(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;)
                .forEach(x -&gt; System.out.println(x + &quot; 就是牛...&quot;));
    }
// 结果......
死磕 Java 新特性 就是牛...
死磕 Java 就是牛...
死磕 Netty 就是牛...
死磕 Java 并发 就是牛...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>forEachOrdered()</code>：与forEach类似，但保留了元素的顺序。</p></blockquote><p><code>forEachOrdered()</code> 会保证元素的顺序不会发生变化 ，输出将按原始顺序产生。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void forEachOrderedTest() {
        List&lt;String&gt; list = Arrays.asList(&quot;死磕 Java 新特性&quot;,&quot;死磕 Java&quot;,&quot;死磕 Netty&quot;,&quot;死磕 Java 并发&quot;);
        System.out.println(&quot;================ forEach  结果 ================ &quot;);
        list.parallelStream().forEach(System.out::println);
        System.out.println(&quot;================ forEachOrdered  结果 ================ &quot;);
        list.parallelStream().forEachOrdered(System.out::println);
    }
// 结果......
================ forEach  结果 ================ 
死磕 Netty
死磕 Java 并发
死磕 Java 新特性
死磕 Java
================ forEachOrdered  结果 ================ 
死磕 Java 新特性
死磕 Java
死磕 Netty
死磕 Java 并发
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这个输出结果就可以看出两者的差异了吧？如果我们将 <code>list.parallelStream().forEach(System.out::println);</code> 调整为 <code>list.stream().forEach(System.out::println);</code> 则两个输出结果是一样的，因为 <code>stream()</code> 产生的是一个顺序流。</p><p><code>forEachOrdered()</code> 通常在需要保持元素处理顺序的情况下使用，特别是在使用并行流时，以确保元素按照原始顺序进行处理。</p><h5 id="归约" tabindex="-1"><a class="header-anchor" href="#归约" aria-hidden="true">#</a> 归约</h5><blockquote><p><code>reduce(BinaryOperator&lt;T&gt; accumulator)</code>：归约为一个值（无初始值）</p></blockquote><ul><li><code>accumulator</code> 是一个<code>BinaryOperator</code>函数，用于定义归约操作，接受两个参数，合并它们并返回一个结果。比如我们要求 <code>1 ~ 10</code> 的和：</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void reduceTest() {
        List&lt;Integer&gt; list = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
        Optional&lt;Integer&gt; optional = list.stream().reduce((a,b) -&gt; a + b);
        System.out.println(optional.orElse(0));
    }
// 结果......
55
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>reduce(T identity, BinaryOperator&lt;T&gt; accumulator)</code>：归约为一个值，有初始值</p></blockquote><ul><li><code>identity</code> 是一个初始值，用作归约的起始值。</li></ul><p>该方法从 <code>identity</code> 开始，将 <code>accumulator</code> 函数应用于流中的第一个元素和 <code>identity</code>，然后将结果作为下一个元素的 <code>identity</code> 继续，如此重复，直到所有元素都被处理，最后返回归约后的结果。如果流为空，则返回 <code>identity</code>作为最终结果。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void reduceTest() {
        List&lt;Integer&gt; list = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
        Integer reduce = list.stream().reduce(10,(a,b) -&gt; a + b);
        System.out.println(reduce);
    }
// 结果......
65
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>T reduce(T identity, BinaryOperator&lt;T&gt; accumulator, BinaryOperator&lt;T&gt; combiner)</code>：归约为一个值（有初始值），并提供并行执行时的并行归约操作。</p></blockquote><ul><li><code>combiner</code> 是一个<code>BinaryOperator</code>函数，用于定义并行执行时如何合并归约的部分结果。</li></ul><p>该方法用于在并行流的情况下执行归约操作。<code>identity</code>用作初始值，<code>accumulator</code>函数应用于流中的各个部分，然后<code>combiner</code>函数用于合并这些部分结果，最终得到一个归约后的结果。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void reduceTest() {
        List&lt;Integer&gt; list = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
        Integer reduce = list.parallelStream().reduce(0,(a,b) -&gt; a + b,(a,b) -&gt; a + b);
        System.out.println(reduce);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="收集" tabindex="-1"><a class="header-anchor" href="#收集" aria-hidden="true">#</a> 收集</h5><blockquote><p><code>collect()</code>：将流中的元素收集到集合或映射中，可以指定收集器来定制收集行为。</p></blockquote><p>方法定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>&lt;R, A&gt; R collect(Collector&lt;? super T, A, R&gt; collector)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><code>R</code> 是收集操作的最终结果类型。</li><li><code>A</code> 是中间累积类型，通常由<code>Collector</code>定义的累积器类型。</li><li><code>Collector&lt;? super T, A, R&gt;</code> 是一个用于收集元素的<code>Collector</code>，它包含了四种操作：创建累积器、累积元素、合并中间结果和完成收集。它通常由 <code>Collectors</code> 工具类提供，用于执行常见的收集操作，例如收集到<code>List</code>、<code>Set</code>、<code>Map</code>等容器中，当然我们也可以使用自定义的<code>Collector</code>来执行复杂的收集操作。</li></ul><p>另外，Java 8 提供了一个工具类：<code>Collectors</code>，它提供了一系列预定义的静态方法，这些方法可以用于执行各种常见的收集操作，包括将元素收集到列表、集合、映射、分组、统计等等，不需要我们编写复杂的自定义逻辑，是不是很人性化？静态方法如下：</p><table><thead><tr><th>方法名</th><th>描述</th></tr></thead><tbody><tr><td><code>toList()</code></td><td>将元素收集到一个<code>List</code>中。</td></tr><tr><td><code>toSet()</code></td><td>将元素收集到一个<code>Set</code>中，去除重复元素。</td></tr><tr><td><code>toCollection(Supplier&lt;C&gt; collectionFactory)</code></td><td>将元素收集到指定类型的集合，使用提供的工厂函数创建集合。</td></tr><tr><td><code>toMap(keyMapper, valueMapper)</code></td><td>将元素收集到一个<code>Map</code>中，指定键和值的映射方式。</td></tr><tr><td><code>toMap(keyMapper, valueMapper, mergeFunction)</code></td><td>将元素收集到一个<code>Map</code>中，指定键和值的映射方式，并提供冲突解决策略。</td></tr><tr><td><code>toConcurrentMap(keyMapper, valueMapper)</code></td><td>将元素收集到一个并发<code>ConcurrentMap</code>中，指定键和值的映射方式。</td></tr><tr><td><code>toConcurrentMap(keyMapper, valueMapper, mergeFunction)</code></td><td>将元素收集到一个并发<code>ConcurrentMap</code>中，指定键和值的映射方式，并提供冲突解决策略。</td></tr><tr><td><code>counting()</code></td><td>计算元素的数量，并返回一个<code>Long</code>。</td></tr><tr><td><code>summingInt()</code></td><td>对<code>Integer</code>属性进行求和。</td></tr><tr><td><code>summingLong()</code></td><td>对<code>Long</code>属性进行求和。</td></tr><tr><td><code>summingDouble()</code></td><td>对<code>Double</code>属性进行求和。</td></tr><tr><td><code>averagingInt()</code></td><td>计算<code>Integer</code>属性的平均值。</td></tr><tr><td><code>averagingLong()</code></td><td>计算<code>Long</code>属性的平均值。</td></tr><tr><td><code>averagingDouble()</code></td><td>计算<code>Double</code>属性的平均值。</td></tr><tr><td><code>maxBy(comparator)</code></td><td>找到最大元素，使用指定的比较器。</td></tr><tr><td><code>minBy(comparator)</code></td><td>找到最小元素，使用指定的比较器。</td></tr><tr><td><code>joining()</code></td><td>将元素拼接成一个字符串，可以指定分隔符、前缀和后缀。</td></tr><tr><td><code>mapping()</code></td><td>对元素进行映射操作，然后将结果收集。</td></tr><tr><td><code>partitioningBy(predicate)</code></td><td>将元素根据给定条件分成两个部分，返回一个<code>Map&lt;Boolean, List&lt;T&gt;&gt;</code>。</td></tr><tr><td><code>partitioningBy(predicate, downstream)</code></td><td>将元素根据给定条件分成两个部分，并对每个部分应用另一个收集器。</td></tr><tr><td><code>groupingBy(classifier)</code></td><td>将元素按照给定的分类器分组，返回一个<code>Map&lt;K, List&lt;T&gt;&gt;</code>。</td></tr><tr><td><code>groupingBy(classifier, downstream)</code></td><td>将元素按照给定的分类器分组，并对每个组应用另一个收集器。</td></tr></tbody></table><p><code>collect()</code> 配合 <code>Collectors</code> 使对流中的元素进行灵活的收集和处理变得非常方便，适用于各种数据处理需求。使用技巧很多，大明哥就不列举了，在下篇文章大明哥会列举一些常见使用技巧。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>上面大明哥对 Stream 做了一个非常详细的介绍，几乎每个方法都做了说明和举例了，但是这些例子都是比较简单的，而且 API 都是单独使用，然而在实际开发过程中，我们大部分都需要用 Stream 来处理一些复杂的场景，所以下面大明哥用几个复杂点的示例来教你如何正确使用 Stream，玩转集合 的筛选、归约、分组、聚合等操作。</p><h4 id="案例使用的基础数据" tabindex="-1"><a class="header-anchor" href="#案例使用的基础数据" aria-hidden="true">#</a> 案例使用的基础数据</h4><p>定义两个类。</p><ul><li>班级类</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
@AllArgsConstructor
public class Class {

    /**
     * 班级名称
     */
    private String name;

    /**
     * 学生
     */
    private List&lt;Student&gt; students;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>学生</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Data
@AllArgsConstructor
public class Student {
    /**
     * 姓名
     */
    private String name;

    /**
     * 年龄
     */
    private Integer age;

    /**
     * 性别
     */
    private String gender;

    /**
     * 成绩
     */
    private Integer grade;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>样例数据</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    public List&lt;Class&gt; getClassList() {
        List&lt;Student&gt; students1 = Arrays.asList(
                new Student(&quot;张三&quot;, 18, &quot;男&quot;, 456),
                new Student(&quot;李四&quot;, 17, &quot;女&quot;, 432),
                new Student(&quot;王五&quot;, 16, &quot;男&quot;, 368),
                new Student(&quot;小红&quot;, 18, &quot;女&quot;, 511),
                new Student(&quot;小明&quot;, 17, &quot;男&quot;, 517)
        );

        List&lt;Student&gt; students2 = Arrays.asList(
                new Student(&quot;小丽&quot;, 16, &quot;女&quot;, 554),
                new Student(&quot;刘六&quot;, 18, &quot;男&quot;, 587),
                new Student(&quot;陈七&quot;, 17, &quot;男&quot;, 502),
                new Student(&quot;赵八&quot;, 16, &quot;男&quot;, 498)
        );

        List&lt;Student&gt; students3 = Arrays.asList(
                new Student(&quot;林九&quot;, 18, &quot;女&quot;, 356),
                new Student(&quot;郑十&quot;, 17, &quot;男&quot;, 411),
                new Student(&quot;孙十一&quot;, 16, &quot;男&quot;, 435),
                new Student(&quot;吴十二&quot;, 18, &quot;女&quot;, 389),
                new Student(&quot;朱十三&quot;, 17, &quot;女&quot;, 490),
                new Student(&quot;许十四&quot;, 16, &quot;男&quot;, 543)
        );

        List&lt;Student&gt; students4 = Arrays.asList(
                new Student(&quot;何十五&quot;, 18, &quot;女&quot;, 612),
                new Student(&quot;胡十六&quot;, 17, &quot;男&quot;, 698) ,
                new Student(&quot;王十七&quot;, 16, &quot;女&quot;, 687),
                new Student(&quot;黄十八&quot;, 18, &quot;男&quot;, 665),
                new Student(&quot;马十九&quot;, 17, &quot;男&quot;, 701),
                new Student(&quot;周二十&quot;, 16, &quot;女&quot;, 711),
                new Student(&quot;郭二一&quot;, 18, &quot;男&quot;, 689)
        );

        List&lt;Student&gt; students5 = Arrays.asList(
                new Student(&quot;林二二&quot;, 17, &quot;男&quot;, 567),
                new Student(&quot;吴二三&quot;, 16, &quot;男&quot;, 587),
                new Student(&quot;谢二四&quot;, 18, &quot;女&quot;, 687),
                new Student(&quot;胡二五&quot;, 17, &quot;女&quot;, 598),
                new Student(&quot;何二六&quot;, 16, &quot;男&quot;, 654),
                new Student(&quot;王二七&quot;, 18, &quot;女&quot;, 512),
                new Student(&quot;徐二八&quot;, 17, &quot;男&quot;, 633),
                new Student(&quot;刘二九&quot;, 16, &quot;女&quot;, 632)
        );

        return Arrays.asList(
                new Class(&quot;一班&quot;,students1),
                new Class(&quot;二班&quot;,students2),
                new Class(&quot;三班&quot;,students3),
                new Class(&quot;四班&quot;,students4),
                new Class(&quot;五班&quot;,students5)
        );
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_01、获取一班中学生的平均年龄" tabindex="-1"><a class="header-anchor" href="#_01、获取一班中学生的平均年龄" aria-hidden="true">#</a> 01、获取一班中学生的平均年龄</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test1() {
       double age = getClassList().stream()
                .filter(x -&gt; x.getName().equals(&quot;一班&quot;))          // 过滤一班
                .flatMap(cl -&gt; cl.getStudents().stream())       // 获取一班的学生    
                .mapToInt(Student::getAge)                      // 拿到一班学生的年龄
                .average()                                      // 求平均值
                .orElse(0);
        System.out.println(age);
    }
// 结果......
17.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先通过 <code>filter()</code> 将“一班”过滤出来，然后通过 <code>flatMap()</code> 获取“一班”的学生列表，最后 <code>average()</code> 求平均值，由于 <code>average()</code> 返回的 <code>OptionalDouble</code>，利用 <code>orElse(0)</code> 转换下就可以了</p><h4 id="_02、找出所有班级中的学生中的最高分数" tabindex="-1"><a class="header-anchor" href="#_02、找出所有班级中的学生中的最高分数" aria-hidden="true">#</a> 02、找出所有班级中的学生中的最高分数</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test2() {
        Integer maxGrade = getClassList().parallelStream()
                .flatMap(cl -&gt; cl.getStudents().stream())       //获取所有班级的所有学生列表
                .max(Comparator.comparing(Student::getGrade))   //获取成绩最高的学生
                .map(Student::getGrade)                         // 得到该成绩
                .orElse(0);
        System.out.println(maxGrade);
    }
// 结果......
711
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里创建 <code>Stream</code> 使用的是 <code>parallelStream()</code>。利用 <code>flatMap()</code> 获取所有班级的所有学生，<code>max()</code> 得到分数最高的学生，最后利用 <code>map()</code> 提取这个最高分。</p><h4 id="_03、获取所有班级中的学生的数量" tabindex="-1"><a class="header-anchor" href="#_03、获取所有班级中的学生的数量" aria-hidden="true">#</a> 03、获取所有班级中的学生的数量</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test3() {
        long count = getClassList().stream()
                .flatMap(cl -&gt; cl.getStudents().stream())
                .count();
        System.out.println(count);
    }
// 结果......
30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以改成这种方式：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test3() {
        long count = getClassList().stream()
                .mapToLong(cl -&gt; cl.getStudents().size())
                .sum();
        System.out.println(count);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_04、获取所有学生中的男女数量" tabindex="-1"><a class="header-anchor" href="#_04、获取所有学生中的男女数量" aria-hidden="true">#</a> 04、获取所有学生中的男女数量</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test4() {
        Map&lt;String,Long&gt; genderMap = getClassList().stream()
                .flatMap(cl -&gt; cl.getStudents().stream())
                .collect(Collectors.groupingBy(Student::getGender,Collectors.counting()));
        System.out.println(genderMap);
    }
// 结果......
{女=13, 男=17}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>采用 <code>Collectors.groupingBy()</code> 根据性别分组，然后再利用<code> collect()</code> 收集。</p><h4 id="_05、统计每个班级的男女数量" tabindex="-1"><a class="header-anchor" href="#_05、统计每个班级的男女数量" aria-hidden="true">#</a> 05、统计每个班级的男女数量</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test5() {
        Map&lt;String,Map&lt;String,Long&gt;&gt; genderMap = getClassList().stream()
                .collect(Collectors.toMap(Class::getName,
                        cl -&gt; cl.getStudents().stream()
                                .collect(Collectors.groupingBy(Student::getGender,Collectors.counting()))));
        System.out.println(genderMap);
    }
// 结果......
{五班={女=4, 男=4}, 一班={女=2, 男=3}, 四班={女=3, 男=4}, 二班={女=1, 男=3}, 三班={女=3, 男=3}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子稍微有点儿复杂，要分两次分组，第一次按班级来，第二次按性别来。</p><h4 id="_06、找出所有班级中成绩前10名的学生" tabindex="-1"><a class="header-anchor" href="#_06、找出所有班级中成绩前10名的学生" aria-hidden="true">#</a> 06、找出所有班级中成绩前10名的学生</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test6() {
        List&lt;Student&gt; students = getClassList().stream()
                .flatMap(cl -&gt; cl.getStudents().stream())
                .sorted(Comparator.comparing(Student::getGrade).reversed())     // 根据成绩排序
                .limit(10)                                              // 获取前 10 名
                .collect(Collectors.toList());
        System.out.println(students);
    }
// 结果......
[Student(name=周二十, age=16, gender=女, grade=711), Student(name=马十九, age=17, gender=男, grade=701), Student(name=胡十六, age=17, gender=男, grade=698), Student(name=郭二一, age=18, gender=男, grade=689), Student(name=王十七, age=16, gender=女, grade=687), Student(name=谢二四, age=18, gender=女, grade=687), Student(name=黄十八, age=18, gender=男, grade=665), Student(name=何二六, age=16, gender=男, grade=654), Student(name=徐二八, age=17, gender=男, grade=633), Student(name=刘二九, age=16, gender=女, grade=632)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>sorted()</code> 按照成绩排序，要倒序，所以使用 <code>reversed()</code> 来逆序下，最后 <code>limit()</code> 获取前 10 个用户。</p><h4 id="_07、找出每个班级成绩前-3-名的学生" tabindex="-1"><a class="header-anchor" href="#_07、找出每个班级成绩前-3-名的学生" aria-hidden="true">#</a> 07、找出每个班级成绩前 3 名的学生</h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test7() {
        Map&lt;String,List&lt;Student&gt;&gt; result = getClassList().stream()
                .collect(Collectors.toMap(Class::getName,
                        cl -&gt; cl.getStudents().stream()
                                .sorted(Comparator.comparing(Student::getGrade).reversed())
                                .limit(3)
                                .collect(Collectors.toList())));
        System.out.println(result);
    }
// 结果......
{五班=[Student(name=谢二四, age=18, gender=女, grade=687), Student(name=何二六, age=16, gender=男, grade=654), Student(name=徐二八, age=17, gender=男, grade=633)], 一班=[Student(name=小明, age=17, gender=男, grade=517), Student(name=小红, age=18, gender=女, grade=511), Student(name=张三, age=18, gender=男, grade=456)], 四班=[Student(name=周二十, age=16, gender=女, grade=711), Student(name=马十九, age=17, gender=男, grade=701), Student(name=胡十六, age=17, gender=男, grade=698)], 二班=[Student(name=刘六, age=18, gender=男, grade=587), Student(name=小丽, age=16, gender=女, grade=554), Student(name=陈七, age=17, gender=男, grade=502)], 三班=[Student(name=许十四, age=16, gender=男, grade=543), Student(name=朱十三, age=17, gender=女, grade=490), Student(name=孙十一, age=16, gender=男, grade=435)]}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-8-新特性—类型注解" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—类型注解" aria-hidden="true">#</a> Java 8 新特性—类型注解</h2><p>注解，我相信小伙伴应该都使用过，Java 从 Java 5 开始引入该特性，发展到现在已经是遍地开花了，且在很多框架都得到了广泛的使用，用来简化程序中的配置。</p><p>但是，在 Java 8 之前，注解仅能用于声明（如方法、类、字段）。这意味着注解无法直接应用于类型本身（例如，方法的返回类型、变量的类型等等）。这种限制减少了注解在代码分析、检查及处理中的潜在用途（虽然不会产生什么问题）。为了提升注解的功能，使其能够更全面地支持各种编程场景（如增强静态代码分析、提供更丰富的编译时检查等等），Java 8 引入了类型注解。</p><h3 id="类型注解可以用在哪些地方" tabindex="-1"><a class="header-anchor" href="#类型注解可以用在哪些地方" aria-hidden="true">#</a> 类型注解可以用在哪些地方？</h3><p>类型注解扩展了注解的应用范围，使其不仅能应用于声明，还能应用于任何使用类型的地方，包括：</p><blockquote><p>1、<strong>泛型类型参数</strong></p></blockquote><p>可以在泛型类型中使用注解，如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;@NonNull String&gt; strings = new ArrayList&lt;&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>@NonNull</code> 注解表示列表中的字符串不应该为 <code>null</code>。</p><blockquote><p>2、<strong>类型转换</strong></p></blockquote><p>在类型转换表达式中使用注解，如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Object obj = &quot;skjava.com&quot;;
String str = (@NonNull String) obj;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将一个对象转换为字符串，并通过 <code>@NonNull</code> 注解标明转换后的字符串不能为 <code>null</code>。</p><blockquote><p><strong>实现语句</strong></p></blockquote><p>在实现接口或扩展类时使用注解，如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>class CustomList implements @ReadOnly List&lt;String&gt; {
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@ReadOnly</code> 表示这个实现<code>List</code>接口的 <code>CustomList</code> 是只读的。</p><blockquote><p><strong>方法或构造器的返回类型</strong></p></blockquote><p>方法声明的返回类型前可以添加注解，如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public @Positive int getPositiveNumber() {
    return 42;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Positive</code> 注解表示这个方法应该返回一个正数。</p><blockquote><p><strong>异常声明</strong></p></blockquote><p>在方法抛出的异常类型上也可以添加注解，如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void readFile(String path) throws @Critical IOException {
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Critical</code> 注解被用于标记抛出的 <code>IOException</code> 是关键的，可能需要特别处理。</p><blockquote><p><strong>局部变量</strong></p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@NonNull String skjava = &quot;死磕 Java 新特性&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>@NonNull</code> 注解声明局部变量 <code>skjava</code> 不会为 null。</p><blockquote><p><strong>方法或构造器的参数</strong></p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public void doSomething(@NonEmpty List&lt;String&gt; list) {
    // ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@NonEmpty</code> 注解表明方法参数 <code>list</code> 应该是一个非空的列表。</p><blockquote><p><strong>类的实例化</strong></p></blockquote><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>MyObject myObject = new @Interned MyObject();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>@Interned</code> 注解可以用来指示 <code>MyObject</code> 的这个实例应该被内部化（interning）处理。</p><h3 id="类型注解有什么作用" tabindex="-1"><a class="header-anchor" href="#类型注解有什么作用" aria-hidden="true">#</a> 类型注解有什么作用？</h3><p>Java 8 引入类型注解的主要目的是增强 Java 的类型检查能力，提供更加丰富的代码分析工具，同时帮助避免常见的错误。它的作用包括但不限于数据校验、类型检查、代码分析等等。例如下面一个例子利用类型注解来避免空指针异常：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void test() {
        printLength(&quot;skjava.com&quot;);
        printLength(null);
    }

    public void printLength(@NonNull String str) {
        System.out.println(str.length());
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>printLength()</code> 的参数 <code>str</code>被标记为 <code>@NonNull</code>。这意味着在编译时，编译器会检查是否有可能传入一个 <code>null</code> 值。如果有这样的可能性，编译器可以生成一个警告或错误，从而防止可能的 <code>NullPointerException</code>，例如在 idea 中会有这个告警：</p><p><img src="`+N+`" alt="img"></p><p>通过使用类型注解，我们可以在编写代码的时候就避免潜在的运行时错误，增强代码的健壮性。</p><p>虽然使用类型注解有这些优点，但是它会增加代码的复杂度，如果过度使用或使用不当，类型注解可能会使代码变得更加复杂和难以理解，不如这段代码：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@NotEmpty List&lt;@NonNull String&gt; strings = new ArrayList&lt;@NonNull String&gt;()&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看着就脑袋痛，所以该特性我们需要适当使用，但是在一些核心场景，容易出错的地方，尤其是参数类型检查，大明哥还是推荐使用，可以带来很大的便利。</p><h2 id="java-8-新特性—类型推断优化" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—类型推断优化" aria-hidden="true">#</a> Java 8 新特性—类型推断优化</h2><p><img src="`+B+`" alt="img"></p><h3 id="理解泛型" tabindex="-1"><a class="header-anchor" href="#理解泛型" aria-hidden="true">#</a> 理解泛型</h3><p>在讨论类型推断之间，我们有必要先理解下泛型。</p><p>泛型是 Java 1.5 引入的特性，主要目的是增强 Java 程序的类型安全性，同时提高代码的重用性和可读性。比如，在泛型引入之前，所有的集合都是保存 <code>Object</code> 类型的，很容易意外地将错误类型的对象放入集合中，这可能导致运行时异常。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List list = new ArrayList();
list.add(&quot;skjava.com&quot;);
list.add(1234);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，从集合中取出的对象也是 <code>Object</code> 类型的，需要我们显式强制转换为适当的类型：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String str = (String) list.get(0);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过引入泛型可以解决这两个问题：</p><ul><li>泛型通过在编译时提供类型检查，能够减少因为存放错误类型的错误。比如：</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; list = new ArrayList&lt;String&gt;();
list.add(&quot;skjava.com&quot;);
list.add(1234);    // 这是错误的，1234 不为 String 类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>泛型消除显示的强制类型转换，因为编译器能够自动地处理类型转换的细节，比如：</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>String str = list.get(0);     //不需要再强制类型转换了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然，除了集合外，泛型还能够泛化方法和类，我们可以创建泛型类或泛型方法，它们可以使用多种类型而不是单一的类型。这样就增加了代码的灵活性和可重用性。</p><p>泛型虽好，但是它有一个坑，就是每次定义时都要写明泛型的类型，显得非常冗余，比如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; list = new ArrayList&lt;String&gt;();
list.add(&quot;skjava.com&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我明明在定义变量的时候就已经指明了参数类型，为什么在初始化的时候还要我指定呢？这不显得多余吗？</p><h3 id="java-7-类型推断优化" tabindex="-1"><a class="header-anchor" href="#java-7-类型推断优化" aria-hidden="true">#</a> Java 7 类型推断优化</h3><p>Java 7 为了解决这个冗余的问题，引入“钻石操作符”（即 <code>&lt;&gt;</code>）用来简化泛型实例的创建过程。钻石操作符 <code>&lt;&gt;</code> 允许编译器根据上下文推断出泛型的类型，从而避免了重复的类型声明。比如：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; list = new ArrayList&lt;String&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以优化为：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这里，<code>new ArrayList&lt;&gt;</code> 中的 <code>&lt;&gt;</code> 操作符使得编译器能够自动推断出其类型为 <code>String</code>。</p><p>一定要注意<code>new ArrayList</code> 后面的“<code>&lt;&gt;</code>”，只有加上这个“<code>&lt;&gt;</code>”才表示是自动类型推断，否则就是非泛型类型的 ArrayList，并且在使用编译器编译源代码时会给出一个警告提示。</p><p>但是 Java 7 的类型推断还是有缺陷：</p><ul><li>只有构造器的参数化类型在上下文中被显著的声明了，才可以使用类型推断，否则不行，例如：</li></ul><p><img src="`+U+`" alt="img"></p><p>这里 <code>new ArrayList&lt;&gt;()</code> 需要明确指定类型：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add(&quot;skjava.com&quot;);
list.addAll(new ArrayList&lt;String&gt;());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-8-类型推断优化" tabindex="-1"><a class="header-anchor" href="#java-8-类型推断优化" aria-hidden="true">#</a> Java 8 类型推断优化</h3><p>为了简化代码的编写，减少冗余信息以及 Lambda 表达式，Java 8 对类型推断进行进一步的优化，主要内容有：</p><ol><li>与 Lambda 表达式和方法引用的协同</li><li>Stream API 中的应用</li></ol><h4 id="与-lambda-表达式和方法引用的协同" tabindex="-1"><a class="header-anchor" href="#与-lambda-表达式和方法引用的协同" aria-hidden="true">#</a> <strong>与 Lambda 表达式和方法引用的协同</strong></h4><p>Java 8 引入 Lambda 表达式极大地简化代码代码量和代码结构，标志着 Java 向函数式编程迈出了重要的第一步。而简写 Lambda 表示的一个依据就是类型推断，它允许编译器根据上下文自动推断 Lambda 表达式的参数类型，它分为目标类型推断和参数类型推断。</p>`,241),we={href:"https://www.skjava.com/series/article/www.skjava.com",target:"_blank",rel:"noopener noreferrer"},Ie=d(`<h4 id="stream-api-中的应用" tabindex="-1"><a class="header-anchor" href="#stream-api-中的应用" aria-hidden="true">#</a> Stream API 中的应用</h4><p>Java 8 引入 Stream API 极大地提高了 Java 对集合的操作能力，类型推断使得在使用 Stream API 时让代码更加简介和阅读，比如，不使用类型推断：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>Stream&lt;String&gt; stream = list.stream();
stream.filter((String s) -&gt; s.startsWith(&quot;sike&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用类型推断的写法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>list.stream().filter(s -&gt; s.startsWith(&quot;sike&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在这里，编译器能够从上下文推断出 <code>s</code> 的类型是 <code>String</code>。</p><p>Stream API 支持的链式操作，类型推断在这里也发挥着重要作用，使得这些链式调用更加简洁：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>List&lt;String&gt; filteredList = list.stream()
                                .filter(s -&gt; s.startsWith(&quot;sike&quot;))
                                .map(String::toUpperCase)
                                .collect(Collectors.toList());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>filter</code>、<code>map</code> 和 <code>collect</code> 操作形成了一个操作链，每个操作的输出类型自动成为下一个操作的输入类型，无需显式指定。你说，如果这里需要强制转换得要多麻烦？</p><h2 id="java-8-新特性—全新的、标准的-base64-api" tabindex="-1"><a class="header-anchor" href="#java-8-新特性—全新的、标准的-base64-api" aria-hidden="true">#</a> Java 8 新特性—全新的、标准的 Base64 API</h2><p><img src="`+R+`" alt="img"></p><h3 id="引言-1" tabindex="-1"><a class="header-anchor" href="#引言-1" aria-hidden="true">#</a> 引言</h3><p>Base64编码是一种用64个字符表示二进制数据的方法，它使用一组64个可打印字符来表示二进制数据，每6个比特位为一个单元，对应某个可打印字符。<strong>注意它并不是一种加密算法</strong>，所以Base64常用于在不支持二进制数据的系统间传输二进制数据。</p><p>但是，Java 8 之前并不支持 Base64，我们需要依赖第三方库如<code>Apache Commons Codec</code>或者在JDK内部类<code>sun.misc.BASE64Encoder</code>和<code>sun.misc.BASE64Decoder</code>等不推荐使用的方式来实现Base64编码解码。</p><p>为了能够提供一个更加标准的、更加安全的方法来进行Base64的编码和解码操作，使得开发者们不再需要依赖外部库，Java 8 引入全新的 Base64，同时为了提供更好的性能，Java 为 Base64 的实现做了专门的性能优化。</p><h3 id="base64-的核心原理" tabindex="-1"><a class="header-anchor" href="#base64-的核心原理" aria-hidden="true">#</a> Base64 的核心原理</h3><p>在了解 Java 8 中 Base64 API 之前，我们先看 Base64 的实现原理。</p><p>Base64 的核心思想是将数据流的每三个字节划分为一组，总共24位，再将这24位分为4组，每组6位。由于每组现在只有6位，因此它可以表示的最大数值是 <code>2^6 - 1 = 63</code>，Base64编码正是利用这64个数字（从0到63）对应到可打印字符的映射关系来工作的。</p><p>Base64 编码的步骤如下：</p><ol><li><strong>分组</strong>：输入数据被分成每组3字节（24位）。如果最后一组不足3字节，则用0填充至3字节。</li><li><strong>映射</strong>：每组24位被进一步划分为4个6位的小组。每个6位小组将被映射为一个0-63之间的数字。</li><li><strong>编码表</strong>：这些数字用作Base64编码表中的索引，该表由64个字符组成，包括大小写英文字母、数字和两个额外符号（通常是<code>+</code>和<code>/</code>），还有一个用于填充的<code>=</code>符号，以确保输出的字符数为4的倍数。</li><li><strong>转换</strong>：每个6位的分组对应的数字转换成相应的Base64字符。</li><li><strong>填充</strong>：如果原始数据字节长度不是3的倍数，最终的编码可能会用<code>=</code>字符填充至4的倍数长度，这样接收方在解码时能够恢复原始数据。</li></ol><p>编码表如下：</p><table><thead><tr><th>数值</th><th>字符</th><th>数值</th><th>字符</th><th>数值</th><th>字符</th><th>数值</th><th>字符</th></tr></thead><tbody><tr><td>0</td><td>A</td><td>16</td><td>Q</td><td>32</td><td>g</td><td>48</td><td>w</td></tr><tr><td>1</td><td>B</td><td>17</td><td>R</td><td>33</td><td>h</td><td>49</td><td>x</td></tr><tr><td>2</td><td>C</td><td>18</td><td>S</td><td>34</td><td>i</td><td>50</td><td>y</td></tr><tr><td>3</td><td>D</td><td>19</td><td>T</td><td>35</td><td>j</td><td>51</td><td>z</td></tr><tr><td>4</td><td>E</td><td>20</td><td>U</td><td>36</td><td>k</td><td>52</td><td>0</td></tr><tr><td>5</td><td>F</td><td>21</td><td>V</td><td>37</td><td>l</td><td>53</td><td>1</td></tr><tr><td>6</td><td>G</td><td>22</td><td>W</td><td>38</td><td>m</td><td>54</td><td>2</td></tr><tr><td>7</td><td>H</td><td>23</td><td>X</td><td>39</td><td>n</td><td>55</td><td>3</td></tr><tr><td>8</td><td>I</td><td>24</td><td>Y</td><td>40</td><td>o</td><td>56</td><td>4</td></tr><tr><td>9</td><td>J</td><td>25</td><td>Z</td><td>41</td><td>p</td><td>57</td><td>5</td></tr><tr><td>10</td><td>K</td><td>26</td><td>a</td><td>42</td><td>q</td><td>58</td><td>6</td></tr><tr><td>11</td><td>L</td><td>27</td><td>b</td><td>43</td><td>r</td><td>59</td><td>7</td></tr><tr><td>12</td><td>M</td><td>28</td><td>c</td><td>44</td><td>s</td><td>60</td><td>8</td></tr><tr><td>13</td><td>N</td><td>29</td><td>d</td><td>45</td><td>t</td><td>61</td><td>9</td></tr><tr><td>14</td><td>O</td><td>30</td><td>e</td><td>46</td><td>u</td><td>62</td><td>+</td></tr><tr><td>15</td><td>P</td><td>31</td><td>f</td><td>47</td><td>v</td><td>63</td><td>/</td></tr></tbody></table><p>有了这个映射表我们就把任意的二进制转换成Base64的编码了，下面大明哥举个例子给大家演示下转换过程。我们将 <code>sikejava</code> 字符串转换为 Base64 编码</p><blockquote><p><strong>步骤1：将字符转换为ASCII值</strong></p></blockquote><p>将每个字符转换为对应一个ASCII值。</p><ul><li><code>s</code> -&gt; <code>115</code></li><li><code>i</code> -&gt; <code>105</code></li><li><code>k</code> -&gt; <code>107</code></li><li><code>e</code> -&gt; <code>101</code></li><li><code>j</code> -&gt; <code>106</code></li><li><code>a</code> -&gt; <code>97</code></li><li><code>v</code> -&gt; <code>118</code></li><li><code>a</code> -&gt; <code>97</code></li></ul><blockquote><p><strong>步骤2：将ASCII值转换为二进制</strong></p></blockquote><p>将每个ASCII值转换为8位二进制数。</p><ul><li><code>115</code> -&gt; <code>01110011</code></li><li><code>105</code> -&gt; <code>01101001</code></li><li><code>107</code> -&gt; <code>01101011</code></li><li><code>101</code> -&gt; <code>01100101</code></li><li><code>106</code> -&gt; <code>01101010</code></li><li><code>97</code> -&gt; <code>01100001</code></li><li><code>118</code> -&gt; <code>01110110</code></li><li><code>97</code> -&gt; <code>01100001</code></li></ul><p>串连起来就是：<code>01110011 01101001 01101011 01100101 01101010 01100001 01110110 01100001</code></p><blockquote><p><strong>步骤3：将二进制数据划分为6位一组</strong></p></blockquote><p>将连续的二进制位分成6位一组的小块。如果最后一组不足6位，需要用0填充。</p><p>上面二进制分为 6 位一组：<code>011100 110110 100101 101011 011001 010110 101001 100001 011101 100110 000100</code></p><blockquote><p><strong>步骤 4：将6位二进制数转换为十进制</strong></p></blockquote><p>每组6位的二进制数将被转换成十进制数。</p><ul><li><code>011100</code> -&gt; <code>28</code></li><li><code>110110</code> -&gt; <code>54</code></li><li><code>100101</code> -&gt; <code>37</code></li><li><code>101011</code> -&gt; <code>43</code></li><li><code>011001</code> -&gt; <code>25</code></li><li><code>010110</code> -&gt; <code>22</code></li><li><code>101001</code> -&gt; <code>41</code></li><li><code>100001</code> -&gt; <code>33</code></li><li><code>011101</code> -&gt; <code>29</code></li><li><code>100110</code> -&gt; <code>38</code></li><li><code>000100</code> -&gt; <code>4</code></li></ul><blockquote><p><strong>步骤5：将十进制数映射到Base64字符</strong></p></blockquote><ul><li><code>28</code> -&gt; <code>c</code></li><li><code>54</code> -&gt; <code>2</code></li><li><code>37</code> -&gt; <code>l</code></li><li><code>43</code> -&gt; <code>r</code></li><li><code>25</code> -&gt; <code>Z</code></li><li><code>22</code> -&gt; <code>W</code></li><li><code>41</code> -&gt; <code>p</code></li><li><code>33</code> -&gt; <code>h</code></li><li><code>29</code> -&gt; <code>d</code></li><li><code>38</code> -&gt; <code>m</code></li><li><code>4</code> -&gt; <code>E</code></li></ul><p>所以，&quot;<code>sikejava</code>&quot;对应的Base64编码是 <code>c2lrZWphdmE=</code>。最后的<code>=</code>符号用于填充，因为Base64编码的输出应该是4的倍数。</p><p>我们用代码验证下 ：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>System.out.println(Base64.getEncoder().encodeToString(&quot;sikejava&quot;.getBytes()));
// 结果......
c2lrZWphdmE=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-8-中的base64-api" tabindex="-1"><a class="header-anchor" href="#java-8-中的base64-api" aria-hidden="true">#</a> Java 8 中的Base64 API</h3><p>Java 8 中的 Base64 API 提供了三种主要类型的 Base64 编码和解码，他们分别适用于不同的场景和需求。</p><blockquote><p><strong>基本 Base64 编码和解码</strong></p></blockquote><ul><li><strong>编码器</strong>: 使用 <code>Base64.getEncoder()</code> 获取。</li><li><strong>解码器</strong>: 使用 <code>Base64.getDecoder()</code> 获取。</li></ul><p>它们提供了基本的 Base64 编码和解码功能，适用于所有需要 Base64 编码的场景。其特点是输出编码字符串不会包含用于换行的字符。</p><blockquote><p><strong>URL 和文件名安全 Base64 编码和解码</strong></p></blockquote><ul><li><strong>编码器</strong>: 使用 <code>Base64.getUrlEncoder()</code> 获取。</li><li><strong>解码器</strong>: 使用 <code>Base64.getUrlDecoder()</code> 获取。</li></ul><p>该编解码器适用于 URL 和文件名的 Base64 编码。由于 URL 中的某些字符（如 <code>+</code> 和 <code>/</code>）有特殊含义，所以需要使用这种编码方式来替换这些字符。使用该编码器，编码输出中的 <code>+</code> 和 <code>/</code> 字符分别被替换为 <code>-</code> 和 <code>_</code>，使得编码后的字符串可以安全地用在 URL 和文件名中。</p><blockquote><p><strong>MIME 类型 Base64 编码和解码</strong></p></blockquote><ul><li><strong>编码器</strong>: 使用 <code>Base64.getMimeEncoder()</code> 获取。</li><li><strong>解码器</strong>: 使用 <code>Base64.getMimeDecoder()</code> 获取。</li></ul><p>该编码器适用于 MIME 类型（如电子邮件）的内容，其中可能需要支持多行输出。特点是持按照 MIME 类型的要求将输出格式化为每行固定长度的多行字符串。默认每行长度不超过 76 个字符，并在每行后插入 <code>\\r\\n</code>。</p>`,52),ke={href:"https://www.skjava.com/series/article/www.skjava.com",target:"_blank",rel:"noopener noreferrer"},Me=d(`<ul><li><code>encode(byte[] src)</code>: 将给定的字节数组编码为 Base64 字符串。</li><li><code>encodeToString(byte[] src)</code>: 将给定的字节数组编码为一个 Base64 字符串，并将其直接转换为字符串格式。</li><li><code>decode(String src)</code>: 将给定的 Base64 字符串解码为字节数组。</li><li><code>decode(byte[] src)</code>: 将给定的 Base64 编码的字节数组解码为原始字节数组。</li></ul><h3 id="base64示例" tabindex="-1"><a class="header-anchor" href="#base64示例" aria-hidden="true">#</a> Base64示例</h3><h4 id="基本-base64-编码" tabindex="-1"><a class="header-anchor" href="#基本-base64-编码" aria-hidden="true">#</a> 基本 Base64 编码</h4><p>基本编码是最常见的类型，适用于大多数需要 Base64 编码的场景。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void base64BasicTest() {
        String skStr = &quot;skjava&quot;;

        // 编码
        String encodingStr = Base64.getEncoder().encodeToString(skStr.getBytes());
        System.out.println(&quot;encodingStr = &quot; + encodingStr);

        // 解码
        String decodeStr = new String(Base64.getDecoder().decode(encodingStr));
        System.out.println(&quot;decodeStr = &quot; + decodeStr);
    }
// 结果......
encodingStr = c2tqYXZh
decodeStr = skjava
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="url-和文件名安全-base64-编码" tabindex="-1"><a class="header-anchor" href="#url-和文件名安全-base64-编码" aria-hidden="true">#</a> URL 和文件名安全 Base64 编码</h4><p>URL和文件名安全编码会替换掉一些在 URL 中可能会引起问题的字符，比如 <code>+</code> 和 <code>/</code>。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void base64UrlTest() {
        String skStr = &quot;https://skjava.com/?series=skjava&quot;;

        // 编码
        String encodingStr = Base64.getUrlEncoder().encodeToString(skStr.getBytes());
        System.out.println(&quot;encodingStr = &quot; + encodingStr);

        // 解码
        String decodeStr = new String(Base64.getUrlDecoder().decode(encodingStr));
        System.out.println(&quot;decodeStr = &quot; + decodeStr);
    }
// 结果......
encodingStr = aHR0cHM6Ly9za2phdmEuY29tLz9zZXJpZXM9c2tqYXZh
decodeStr = https://skjava.com/?series=skjava
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mime-类型-base64-编码" tabindex="-1"><a class="header-anchor" href="#mime-类型-base64-编码" aria-hidden="true">#</a> MIME 类型 Base64 编码</h4><p>MIME 类型编码适用于电子邮件或其他 MIME 类型的内容，它支持多行输出。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>    @Test
    public void base64MimeTest() {
        String skStr = &quot;Hello, MIME-Type Example。\\r\\n&quot; +
                &quot;sike-java,sike-java-feature;&quot; +
                &quot;sike-javanio,sike-netty&quot;;

        // 编码
        String encodingStr = Base64.getMimeEncoder().encodeToString(skStr.getBytes());
        System.out.println(&quot;encodingStr = &quot; + encodingStr);

        // 解码
        String decodeStr = new String(Base64.getMimeDecoder().decode(encodingStr));
        System.out.println(&quot;decodeStr = &quot; + decodeStr);
    }
// 结果......
encodingStr = SGVsbG8sIE1JTUUtVHlwZSBFeGFtcGxl44CCDQpzaWtlLWphdmEsc2lrZS1qYXZhLWZlYXR1cmU7
c2lrZS1qYXZhbmlvLHNpa2UtbmV0dHk=
decodeStr = Hello, MIME-Type Example。
sike-java,sike-java-feature;sike-javanio,sike-netty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文章标签：[Java 新特性](https://www.skjava.com/label?labelName=Java 新特性)[Java 8 新特性](https://www.skjava.com/label?labelName=Java 8 新特性)</p>`,12);function De(Oe,_e){const i=l("ExternalLinkIcon");return s(),r("div",null,[H,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",Y,[a("Java 8 新特性— Lambda 表达式"),n(i)])])]),G,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",V,[a("Java 8 新特性—函数式接口"),n(i)])])]),W,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",z,[a("Java 8 新特性—方法引用和构造器引用"),n(i)])])]),X,K,Q,$,ee,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",ae,[a("Java 8 新特性—接口默认方法和静态方法"),n(i)])])]),ie,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",ne,[a("Java 8 新特性—Stream API 对元素流进行函数式操作"),n(i)])])]),de,te,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",le,[a("Java 8 新特性— 利用 Optional 解决NullPointerException"),n(i)])])]),se,e("blockquote",null,[e("p",null,[a("更多阅读： "),e("a",re,[a("Java 8 新特性—日期时间 API"),n(i)]),a(),e("a",oe,[a("Java 8 新特性—日期时间格式化"),n(i)])])]),ue,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",ce,[a("Java 8 新特性—重复注解@Repeatable"),n(i)])])]),ve,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",me,[a("Java 8 新特性—全新的、标准的Base 64 API"),n(i)])])]),pe,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",be,[a("Java 8 新特性—类型注解"),n(i)])])]),ge,e("blockquote",null,[e("p",null,[a("更多阅读："),e("a",he,[a("Java 8 新特性—类型推断优化"),n(i)])])]),qe,e("p",null,[a("在文章 "),e("a",Je,[a("Lambda 表达式"),n(i)]),a(" 提过，Lambda 能够简化的一个依据就是函数式接口，这篇文章我们就来深入了解函数式接口。")]),Se,e("p",null,[a("在前面我们了解了 "),e("a",fe,[a("Lambda 表达式"),n(i)]),a("，它能够简化我们的程序，但是它还不是最简单的，Java 8 引入了方法引用可以对 Lambda 表达式再进一步简化。")]),ye,e("p",null,[a("通过前一篇文章（"),e("a",xe,[a("日期时间 API"),n(i)]),a("）我们知道如何在 Java 8 中得到我们需要的日期和时间，但是有时候我们需要将日期和时间对象转换为字符串又或者将字符串解析为日期时间对象，这个时候我们需要用到 Java 8 提供的日期时间格式化工具：DateTimeFormatter。")]),Te,e("p",null,[a("Java 8 中两个最为重要的的更新：第一个是 "),e("a",Fe,[a("Lambda 表达式"),n(i)]),a("，另外一个就是 "),Le,a("，这篇文章就来跟随大明哥彻底了解强大的 "),Ce,a("。")]),Ae,e("p",null,[a("更多关于 Lambda 表达式的请阅读："),e("a",we,[a("Java 8 新特性—Lambda 表达式"),n(i)])]),Ie,e("p",null,[a("Base64 提供了多种编解码的方法，"),e("a",ke,[a("大明哥"),n(i)]),a("这里列举几个最常用的：")]),Me])}const Pe=t(Z,[["render",De],["__file","java-8-feature.html.vue"]]);export{Pe as default};
