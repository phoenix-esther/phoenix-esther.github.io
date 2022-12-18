import{_ as n,V as s,W as a,X as t}from"./framework-4ec38622.js";const e={},p=t(`<h1 id="java-基础" tabindex="-1"><a class="header-anchor" href="#java-基础" aria-hidden="true">#</a> Java 基础</h1><h2 id="深拷贝与浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝与浅拷贝" aria-hidden="true">#</a> 深拷贝与浅拷贝</h2><p>一句话，深拷贝是值传递，浅拷贝是引用传递。</p><h2 id="this-与-类名-this的区别" tabindex="-1"><a class="header-anchor" href="#this-与-类名-this的区别" aria-hidden="true">#</a> this 与 类名.this的区别</h2><ul><li>this： 是指当前这段代码所在的类的对象</li><li>类名.this：是指类名的对象，一般用在匿名类或内部类中使用，用来调用外部类的方法和属性的</li></ul><p>下面给出一个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> method（）<span class="token punctuation">{</span>
        <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token keyword">this</span>  <span class="token comment">//这里的&quot;A.this&quot;就是表示类&quot;A&quot;的对象。。在这种情况下&quot;A.this&quot;和&quot;this&quot;是一样的</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span>  <span class="token class-name">B</span> <span class="token punctuation">{</span>  
        <span class="token comment">// &quot;class A&quot;中的一个内部类&quot;B&quot;(内部类也可以是使用关键字&quot;new&quot; 所新实例出来的一个匿名类或者接口,</span>
        <span class="token comment">// 比如&quot;new OnClickListener()&quot;)</span>
        <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 这里的&quot;A.this&quot;还是表示类&quot;A&quot;的对象。。但是这里是在内部类里面。。</span>
            <span class="token comment">// 所以这里如果使用的是&quot;this&quot;那就是内部类B的对象了。。</span>
            <span class="token comment">// 但是我们经常会在内部类里面调用外部的东西。。所以就用&quot;A.this&quot;这种方式就行了</span>
            <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token keyword">this</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bigdecimal" tabindex="-1"><a class="header-anchor" href="#bigdecimal" aria-hidden="true">#</a> BigDecimal</h2><h3 id="一-简介" tabindex="-1"><a class="header-anchor" href="#一-简介" aria-hidden="true">#</a> 一：简介</h3><p>Java在java.math包中提供的API类BigDecimal，用来对超过16位有效位的数进行精确的运算。双精度浮点型变量double可以处理16位有效数。在实际应用中，需要对更大或者更小的数进行运算和处理。float和double只能用来做科学计算或者是工程计算，在商业计算中要用java.math.BigDecimal。BigDecimal所创建的是对象，我们不能使用传统的+、-、*、/等算术运算符直接对其对象进行数学运算，而必须调用其相对应的方法。方法中的参数也必须是BigDecimal的对象。构造器是类的特殊方法，专门用来创建对象，特别是带有参数的对象。</p><h3 id="二-构造器方法" tabindex="-1"><a class="header-anchor" href="#二-构造器方法" aria-hidden="true">#</a> 二：构造器方法</h3><p>BigDecimal在进行初始化对象时，建议使用字符串或整形进行初始化，但是不要使用浮点型进行初始化，会造成数值精度偏差。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 创建一个具有参数所指定整数值的对象</span>
<span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 创建一个具有参数所指定双精度值的对象</span>
<span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 创建一个具有参数所指定长整数值的对象</span>
<span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 创建一个具有参数所指定以字符串表示的数值的对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三-方法" tabindex="-1"><a class="header-anchor" href="#三-方法" aria-hidden="true">#</a> 三：方法</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>bigDecimal1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>bigDecimal2<span class="token punctuation">)</span><span class="token punctuation">;</span>           <span class="token comment">// bigDecimal1 加 bigDecimal2</span>
bigDecimal1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>bigDecimal2<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// bigDecimal1 减 bigDecimal2</span>
bigDecimal1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>bigDecimal2<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// bigDecimal1 乘以 bigDecimal2</span>
bigDecimal1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>bigDecimal2<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// bigDecimal1 除以 bigDecimal2</span>
bigDecimal<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// 将bigDecimal对象的数值转换成字符串</span>
bigDecimal<span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>               <span class="token comment">// 将bigDecimal对象中的值以双精度数返回</span>
bigDecimal<span class="token punctuation">.</span><span class="token function">floatValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                <span class="token comment">// 将bigDecimal对象中的值以单精度数返回</span>
bigDecimal<span class="token punctuation">.</span><span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">// 将bigDecimal对象中的值以长整数返回</span>
bigDecimal<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// 将bigDecimal对象中的值以整数返回</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四-常用方法" tabindex="-1"><a class="header-anchor" href="#四-常用方法" aria-hidden="true">#</a> 四：常用方法</h3><p>1、BigDecimal比较</p><p>BigDecimal是通过使用compareTo(BigDecimal)来比较的，具体比较情况如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigDecimalTest</span> <span class="token punctuation">{</span>
 
    <span class="token doc-comment comment">/**
     * 注意不能使用equals方法来比较大小。
     *
     * compareTo比较结果为：-1、0、1
     * 如：a.a.compareTo(b)，结果为-1表示a小于b，为0表示a等于b 为1表示a大于b
     *
     * 使用BigDecimal的坏处是性能比double和float差，在处理庞大，复杂的运算时尤为明显，因根据实际需求决定使用哪种类型。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result1 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result2 <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> result3 <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result1<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// -1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 0</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result3<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、保留两位小数</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">DecimalFormat</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigDecimalTest</span> <span class="token punctuation">{</span>
 
    <span class="token doc-comment comment">/**
     * 保留两位小数
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">formatTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">double</span> num <span class="token operator">=</span> <span class="token number">13.154215</span><span class="token punctuation">;</span>
 
        <span class="token comment">//方式一</span>
        <span class="token class-name">DecimalFormat</span> df1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DecimalFormat</span><span class="token punctuation">(</span><span class="token string">&quot;0.00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str <span class="token operator">=</span> df1<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//13.15</span>
 
        <span class="token comment">//方式二</span>
        <span class="token comment">// #.00 表示两位小数 #.0000四位小数</span>
        <span class="token class-name">DecimalFormat</span> df2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DecimalFormat</span><span class="token punctuation">(</span><span class="token string">&quot;#.00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> str2 <span class="token operator">=</span> df2<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//13.15</span>
 
        <span class="token comment">//方式三</span>
        <span class="token comment">//%.2f %. 表示 小数点前任意位数   2 表示两位小数 格式后的结果为f 表示浮点型</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;%.2f&quot;</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//13.15</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、String.formate用法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigDecimalTest</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//4.1541483776749997E9</span>
        <span class="token keyword">double</span> a <span class="token operator">=</span> <span class="token number">4887233385.5</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> b <span class="token operator">=</span> <span class="token number">0.85</span><span class="token punctuation">;</span>
 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result1--&gt;&quot;</span> <span class="token operator">+</span> a <span class="token operator">*</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// result1--&gt;4.1541483776749997E9</span>
 
        <span class="token class-name">BigDecimal</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
 		<span class="token comment">//result2--&gt;4154148377.674999891481619无限不循环</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result2--&gt;&quot;</span> <span class="token operator">+</span> a1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token class-name">BigDecimal</span> aBigDecimal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> bBigDecimal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">// 或者下面这种写法</span>
        <span class="token comment">// BigDecimal aBigDecimal = new BigDecimal(Double.toString(a));</span>
        <span class="token comment">// BigDecimal bBigDecimal = new BigDecimal(Double.toString(b));</span>
 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result3--&gt;&quot;</span> <span class="token operator">+</span> aBigDecimal<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>bBigDecimal<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//result3--&gt;4154148377.675</span>
 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、四舍五入</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// BigDecimal.setScale()方法用于格式化小数点</span>
     
<span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 表示保留一位小数，默认用四舍五入方式 </span>
 
<span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直接删除多余的小数位，如2.35会变成2.3 </span>
 
<span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 进位处理，2.35变成2.4 </span>
 
<span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_HALF_UP</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 四舍五入，2.35变成2.4</span>
 
<span class="token function">setScaler</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_HALF_DOWN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 四舍五入，2.35变成2.3，如果是5则向下舍</span>
 
<span class="token function">setScaler</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_CEILING</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 接近正无穷大的舍入</span>
 
<span class="token function">setScaler</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_FLOOR</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 接近负无穷大的舍入，数字&gt;0和ROUND_UP作用一样，数字&lt;0和ROUND_DOWN作用一样</span>
 
<span class="token function">setScaler</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token constant">ROUND_HALF_EVEN</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向最接近的数字舍入，如果与两个相邻数字的距离相等，则向相邻的偶数舍入。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、格式化</p><p>由于NumberFormat类的format()方法可以使用BigDecimal对象作为其参数，可以利用BigDecimal对超出16位有效数字的货币值，百分值，以及一般数值进行格式化控制。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">DecimalFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">NumberFormat</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigDecimalTest</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">NumberFormat</span> currency <span class="token operator">=</span> <span class="token class-name">NumberFormat</span><span class="token punctuation">.</span><span class="token function">getCurrencyInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//建立货币格式化引用</span>
        <span class="token class-name">NumberFormat</span> percent <span class="token operator">=</span> <span class="token class-name">NumberFormat</span><span class="token punctuation">.</span><span class="token function">getPercentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//建立百分比格式化引用</span>
        percent<span class="token punctuation">.</span><span class="token function">setMaximumFractionDigits</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//百分比小数点最多3位</span>
 
        <span class="token class-name">BigDecimal</span> loanAmount <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;150.48&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//贷款金额</span>
        <span class="token class-name">BigDecimal</span> interestRate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;0.008&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//利率</span>
        <span class="token class-name">BigDecimal</span> interest <span class="token operator">=</span> loanAmount<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>interestRate<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//相乘</span>
 
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;贷款金额:\\t&quot;</span> <span class="token operator">+</span> currency<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>loanAmount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//贷款金额: ￥150.48</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;利率:\\t&quot;</span> <span class="token operator">+</span> percent<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>interestRate<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//利率: 0.8%</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;利息:\\t&quot;</span> <span class="token operator">+</span> currency<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>interest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//利息: ￥1.20</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DecimalFormat</span> df <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DecimalFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">double</span> data <span class="token operator">=</span> <span class="token number">1234.56789</span><span class="token punctuation">;</span> <span class="token comment">//格式化之前的数字</span>
 
        <span class="token comment">//1、定义要显示的数字的格式（这种方式会四舍五入）</span>
        <span class="token class-name">String</span> style <span class="token operator">=</span> <span class="token string">&quot;0.0&quot;</span><span class="token punctuation">;</span>
        df<span class="token punctuation">.</span><span class="token function">applyPattern</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;1--&gt;&quot;</span> <span class="token operator">+</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//1234.6</span>
 
        <span class="token comment">//2、在格式后添加诸如单位等字符</span>
        style <span class="token operator">=</span> <span class="token string">&quot;00000.000 kg&quot;</span><span class="token punctuation">;</span>
        df<span class="token punctuation">.</span><span class="token function">applyPattern</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;2--&gt;&quot;</span> <span class="token operator">+</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//01234.568 kg</span>
 
 
        <span class="token comment">//3、 模式中的&quot;#&quot;表示如果该位存在字符，则显示字符，如果不存在，则不显示。</span>
        style <span class="token operator">=</span> <span class="token string">&quot;##000.000 kg&quot;</span><span class="token punctuation">;</span>
        df<span class="token punctuation">.</span><span class="token function">applyPattern</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;3--&gt;&quot;</span> <span class="token operator">+</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//1234.568 kg</span>
 
        <span class="token comment">//4、 模式中的&quot;-&quot;表示输出为负数，要放在最前面</span>
        style <span class="token operator">=</span> <span class="token string">&quot;-000.000&quot;</span><span class="token punctuation">;</span>
        df<span class="token punctuation">.</span><span class="token function">applyPattern</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;4--&gt;&quot;</span> <span class="token operator">+</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//-1234.568</span>
 
 
        <span class="token comment">//5、 模式中的&quot;,&quot;在数字中添加逗号，方便读数字</span>
        style <span class="token operator">=</span> <span class="token string">&quot;-0,000.0#&quot;</span><span class="token punctuation">;</span>
        df<span class="token punctuation">.</span><span class="token function">applyPattern</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;5--&gt;&quot;</span> <span class="token operator">+</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//5--&gt;-1,234.57</span>
 
 
        <span class="token comment">//6、模式中的&quot;E&quot;表示输出为指数，&quot;E&quot;之前的字符串是底数的格式，</span>
        <span class="token comment">// &quot;E&quot;之后的是字符串是指数的格式</span>
        style <span class="token operator">=</span> <span class="token string">&quot;0.00E000&quot;</span><span class="token punctuation">;</span>
        df<span class="token punctuation">.</span><span class="token function">applyPattern</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;6--&gt;&quot;</span> <span class="token operator">+</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//6--&gt;1.23E003</span>
 
 
        <span class="token comment">//7、 模式中的&quot;%&quot;表示乘以100并显示为百分数，要放在最后。</span>
        style <span class="token operator">=</span> <span class="token string">&quot;0.00%&quot;</span><span class="token punctuation">;</span>
        df<span class="token punctuation">.</span><span class="token function">applyPattern</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;7--&gt;&quot;</span> <span class="token operator">+</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//7--&gt;123456.79%</span>
 
 
        <span class="token comment">//8、 模式中的&quot;\\u2030&quot;表示乘以1000并显示为千分数，要放在最后。</span>
        style <span class="token operator">=</span> <span class="token string">&quot;0.00\\u2030&quot;</span><span class="token punctuation">;</span>
        <span class="token comment">//在构造函数中设置数字格式</span>
        <span class="token class-name">DecimalFormat</span> df1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DecimalFormat</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//df.applyPattern(style);</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;8--&gt;&quot;</span> <span class="token operator">+</span> df1<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//8--&gt;1234567.89‰</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、科学计数法</p><p>有些项目可能会涉及到从Excel导入数据，但如果Excel里单元格类型为数值，但内容数据太长时（如银行账号），导入时，会默认读取为科学计数法，用以下代码便轻松解决。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigDecimalTest</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> bd <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;3.40256010353E11&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> bd<span class="token punctuation">.</span><span class="token function">toPlainString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//340256010353</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、java中价格的数字中间有逗号的处理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.util.StringTokenizer;
 
public class BigDecimalTest {
 
    public void test1() {
        StringTokenizer st = new StringTokenizer( &quot;123,456,789&quot;, &quot;,&quot;);
        StringBuffer sb = new StringBuffer();
        while(st.hasMoreTokens())   {
            sb.append(st.nextToken());
        }
        System.out.println(sb);  //123456789
    }
 
    public void test2() {
        String str = &quot;123,456,789&quot;;
        str = str.replace(&quot;,&quot;, &quot;&quot;);
        System.out.println(str);  //123456789
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、精确计算</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>double value1=1.00;
String value2 = &quot;1.00&quot;;
BigDecimal b1 = new BigDecimal(Double.valueOf(value1));
BigDecimal b1 = new BigDecimal(String.valueOf(value2));
 
public BigDecimal add(BigDecimal value);                        //加法
public BigDecimal subtract(BigDecimal value);                   //减法
public BigDecimal multiply(BigDecimal value);                   //乘法
public BigDecimal divide(BigDecimal value);                     //除法
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个工具类，该工具类提供加，减，乘，除运算。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import java.math.BigDecimal;
 
public class BigDecimalUtil {
 
    /**
     * 提供精确加法计算的add方法
     * @param value1 被加数
     * @param value2 加数
     * @return 两个参数的和
     */
    public static double add(double value1,double value2){
        BigDecimal b1 = new BigDecimal(Double.valueOf(value1));
        BigDecimal b2 = new BigDecimal(Double.valueOf(value2));
        return b1.add(b2).doubleValue();
    }
 
    /**
     * 提供精确减法运算的sub方法
     * @param value1 被减数
     * @param value2 减数
     * @return 两个参数的差
     */
    public static double sub(double value1,double value2){
        BigDecimal b1 = new BigDecimal(Double.valueOf(value1));
        BigDecimal b2 = new BigDecimal(Double.valueOf(value2));
        return b1.subtract(b2).doubleValue();
    }
 
    /**
     * 提供精确乘法运算的mul方法
     * @param value1 被乘数
     * @param value2 乘数
     * @return 两个参数的积
     */
    public static double mul(double value1,double value2){
        BigDecimal b1 = new BigDecimal(Double.valueOf(value1));
        BigDecimal b2 = new BigDecimal(Double.valueOf(value2));
        return b1.multiply(b2).doubleValue();
    }
 
    /**
     * 提供精确的除法运算方法div
     * @param value1 被除数
     * @param value2 除数
     * @param scale 精确范围
     * @return 两个参数的商
     * @throws IllegalAccessException
     */
    public static double div(double value1,double value2,int scale) throws IllegalAccessException{
        //如果精确范围小于0，抛出异常信息
        if(scale&lt;0){
            throw new IllegalAccessException(&quot;精确度不能小于0&quot;);
        }
        BigDecimal b1 = new BigDecimal(Double.valueOf(value1));
        BigDecimal b2 = new BigDecimal(Double.valueOf(value2));
        return b1.divide(b2, scale).doubleValue();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),c=[p];function l(i,o){return s(),a("div",null,c)}const k=n(e,[["render",l],["__file","java-base.html.vue"]]);export{k as default};
