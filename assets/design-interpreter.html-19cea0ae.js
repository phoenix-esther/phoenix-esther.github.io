import{_ as n,V as s,W as a,a0 as p}from"./framework-5dde3bca.js";const t="/assets/image-20200215220322641-4e6b4d73.png",e="/assets/image-20200215225227616-359d83aa.png",c="/assets/解释器模式-ed5e6290.png",o={},l=p('<h2 id="解释器模式" tabindex="-1"><a class="header-anchor" href="#解释器模式" aria-hidden="true">#</a> 解释器模式</h2><h3 id="_6-11-1-概述" tabindex="-1"><a class="header-anchor" href="#_6-11-1-概述" aria-hidden="true">#</a> 6.11.1 概述</h3><img src="'+t+`" style="zoom:60%;"><p>如上图，设计一个软件用来进行加减计算。我们第一想法就是使用工具类，提供对应的加法和减法的工具方法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//用于两个整数相加</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//用于两个整数相加</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> c<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//用于n个整数相加</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> i <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的形式比较单一、有限，如果形式变化非常多，这就不符合要求，因为加法和减法运算，两个运算符与数值可以有无限种组合方式。比如 1+2+3+4+5、1+2+3-4等等。</p><p>显然，现在需要一种翻译识别机器，能够解析由数字以及 + - 符号构成的合法的运算序列。如果把运算符和数字都看作节点的话，能够逐个节点的进行读取解析运算，这就是解释器模式的思维。</p><p><strong>定义：</strong></p><blockquote><p>给定一个语言，定义它的文法表示，并定义一个解释器，这个解释器使用该标识来解释语言中的句子。</p></blockquote><p>在解释器模式中，我们需要将待解决的问题，提取出规则，抽象为一种“语言”。比如加减法运算，规则为：由数值和+-符号组成的合法序列，“1+3-2” 就是这种语言的句子。</p><p>解释器就是要解析出来语句的含义。但是如何描述规则呢？</p><p><strong>文法（语法）规则：</strong></p><p>文法是用于描述语言的语法结构的形式规则。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>expression ::= value | plus | minus
plus ::= expression ‘+’ expression   
minus ::= expression ‘-’ expression  
value ::= integer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意： 这里的符号“::=”表示“定义为”的意思，竖线 | 表示或，左右的其中一个，引号内为字符本身，引号外为语法。</p></blockquote><p>上面规则描述为 ：</p><p>表达式可以是一个值，也可以是plus或者minus运算，而plus和minus又是由表达式结合运算符构成，值的类型为整型数。</p><p><strong>抽象语法树：</strong></p><p>在计算机科学中，抽象语法树（AbstractSyntaxTree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。</p><p>用树形来表示符合文法规则的句子。</p><img src="`+e+'" style="zoom:50%;"><h3 id="_6-11-2-结构" tabindex="-1"><a class="header-anchor" href="#_6-11-2-结构" aria-hidden="true">#</a> 6.11.2 结构</h3><p>解释器模式包含以下主要角色。</p><ul><li><p>抽象表达式（Abstract Expression）角色：定义解释器的接口，约定解释器的解释操作，主要包含解释方法 interpret()。</p></li><li><p>终结符表达式（Terminal Expression）角色：是抽象表达式的子类，用来实现文法中与终结符相关的操作，文法中的每一个终结符都有一个具体终结表达式与之相对应。</p></li><li><p>非终结符表达式（Nonterminal Expression）角色：也是抽象表达式的子类，用来实现文法中与非终结符相关的操作，文法中的每条规则都对应于一个非终结符表达式。</p></li><li><p>环境（Context）角色：通常包含各个解释器需要的数据或是公共的功能，一般用来传递被所有解释器共享的数据，后面的解释器可以从这里获取这些值。</p></li><li><p>客户端（Client）：主要任务是将需要分析的句子或表达式转换成使用解释器对象描述的抽象语法树，然后调用解释器的解释方法，当然也可以通过环境角色间接访问解释器的解释方法。</p></li></ul><h3 id="_6-11-3-案例实现" tabindex="-1"><a class="header-anchor" href="#_6-11-3-案例实现" aria-hidden="true">#</a> 6.11.3 案例实现</h3><p>【例】设计实现加减法的软件</p><img src="'+c+`" style="zoom:80%;"><p>代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//抽象角色AbstractExpression</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractExpression</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">int</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//终结符表达式角色</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Value</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractExpression</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Value</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//非终结符表达式角色  加法表达式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Plus</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractExpression</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AbstractExpression</span> left<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">AbstractExpression</span> right<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Plus</span><span class="token punctuation">(</span><span class="token class-name">AbstractExpression</span> left<span class="token punctuation">,</span> <span class="token class-name">AbstractExpression</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> left<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">+</span> right<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> left<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; + &quot;</span> <span class="token operator">+</span> right<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">///非终结符表达式角色 减法表达式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Minus</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractExpression</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AbstractExpression</span> left<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">AbstractExpression</span> right<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Minus</span><span class="token punctuation">(</span><span class="token class-name">AbstractExpression</span> left<span class="token punctuation">,</span> <span class="token class-name">AbstractExpression</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> left<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">-</span> right<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;(&quot;</span> <span class="token operator">+</span> left<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; - &quot;</span> <span class="token operator">+</span> right<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//终结符表达式角色 变量表达式</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Variable</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractExpression</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Variable</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">interpret</span><span class="token punctuation">(</span><span class="token class-name">Context</span> ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ctx<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//环境类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Context</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Variable</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Variable</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">assign</span><span class="token punctuation">(</span><span class="token class-name">Variable</span> <span class="token keyword">var</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">Variable</span> <span class="token keyword">var</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Integer</span> value <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">//测试类</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Context</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Variable</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Variable</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Variable</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Variable</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Variable</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Variable</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Variable</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Variable</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Variable</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Variable</span><span class="token punctuation">(</span><span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//Value v = new Value(1);</span>

        context<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        context<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">AbstractExpression</span> expression <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Minus</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Plus</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Plus</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Plus</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">,</span> d<span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>expression <span class="token operator">+</span> <span class="token string">&quot;= &quot;</span> <span class="token operator">+</span> expression<span class="token punctuation">.</span><span class="token function">interpret</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-11-4-优缺点" tabindex="-1"><a class="header-anchor" href="#_6-11-4-优缺点" aria-hidden="true">#</a> 6.11.4 优缺点</h3><p><strong>1，优点：</strong></p><ul><li><p>易于改变和扩展文法。</p><p>由于在解释器模式中使用类来表示语言的文法规则，因此可以通过继承等机制来改变或扩展文法。每一条文法规则都可以表示为一个类，因此可以方便地实现一个简单的语言。</p></li><li><p>实现文法较为容易。</p><p>在抽象语法树中每一个表达式节点类的实现方式都是相似的，这些类的代码编写都不会特别复杂。</p></li><li><p>增加新的解释表达式较为方便。</p><p>如果用户需要增加新的解释表达式只需要对应增加一个新的终结符表达式或非终结符表达式类，原有表达式类代码无须修改，符合 &quot;开闭原则&quot;。</p></li></ul><p><strong>2，缺点：</strong></p><ul><li><p>对于复杂文法难以维护。</p><p>在解释器模式中，每一条规则至少需要定义一个类，因此如果一个语言包含太多文法规则，类的个数将会急剧增加，导致系统难以管理和维护。</p></li></ul><ul><li><p>执行效率较低。</p><p>由于在解释器模式中使用了大量的循环和递归调用，因此在解释较为复杂的句子时其速度很慢，而且代码的调试过程也比较麻烦。</p></li></ul><h3 id="_6-11-5-使用场景" tabindex="-1"><a class="header-anchor" href="#_6-11-5-使用场景" aria-hidden="true">#</a> 6.11.5 使用场景</h3><ul><li><p>当语言的文法较为简单，且执行效率不是关键问题时。</p></li><li><p>当问题重复出现，且可以用一种简单的语言来进行表达时。</p></li><li><p>当一个语言需要解释执行，并且语言中的句子可以表示为一个抽象语法树的时候。</p></li></ul>`,37),i=[l];function u(k,r){return s(),a("div",null,i)}const v=n(o,[["render",u],["__file","design-interpreter.html.vue"]]);export{v as default};