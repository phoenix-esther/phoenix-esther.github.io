import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as d,a as e,b as i,d as a,e as u}from"./app-e53dd85b.js";const o="/assets/nio-20211114100001-fbf95a0d.jpg",c="/assets/202311031000001-68ac2977.png",l="/assets/nio-20211114100002-bab954a5.jpg",p="/assets/nio-20211114100003-87f52296.jpg",f="/assets/nio-20211114100004-12f9c812.jpg",v="/assets/nio-20211114100005-acf3ce5e.jpg",m="/assets/nio-20211114100006-52fac647.jpg",b="/assets/202311031000002-90fb2253.png",h={},g=e("h1",{id:"nio-buffer核心原理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nio-buffer核心原理","aria-hidden":"true"},"#"),i(" NIO - Buffer核心原理")],-1),B=e("p",null,"大家好，我是大明哥，今天我们来看看 Buffer。",-1),q=e("p",null,[e("img",{src:o,alt:"img"})],-1),y=e("p",null,"上面几篇文章详细介绍了 IO 相关的一些基本概念，如阻塞、非阻塞、同步、异步的区别，Reactor 模式、Proactor 模式。以下是这几篇文章的链接，有兴趣的同学可以阅读下：",-1),_={href:"https://www.skjava.com/series/article/7825517347",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.skjava.com/series/article/2218162706",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.skjava.com/series/article/4295744090",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.skjava.com/series/article/2128121655",target:"_blank",rel:"noopener noreferrer"},k=u('<p>从这篇文章开始，我们将回归 NIO 方面的相关知识，首先从 NIO 的三大核心组件说起。</p><ul><li>Buffer</li><li>Channel</li><li>Selector</li></ul><p>首先是 Buffer</p><h2 id="buffer" tabindex="-1"><a class="header-anchor" href="#buffer" aria-hidden="true">#</a> Buffer</h2><p>Buffer 是一个抽象类，主要用作缓冲区，其实质我们可以认为是一个可以写入数据，然后从中读取数据的内存块。这块内存被包装成 NIO Buffer 对象，并提供一系列的方法便于我们访问这块内存。</p><p>要理解 Buffer 的工作原理，首先就要理解它的 4 个索引：</p><ul><li>capacity：容量</li><li>position：位置</li><li>limit：界限</li><li>mark：标记</li></ul><p>capacity 则表示该 Buffer 的容量，而 position 和 limit 的含义取决于 Buffer 处于什么模式（读模式或者写模式），下图描述读写模式下这三种属性的含义</p><p><img src="'+c+`" alt="img"></p><ul><li><strong>capacity</strong></li></ul><p>capacity 表示容量，Buffer 是一个内存块，其存储数据的最大大小就是 capacity。我们不断地往 Buffer 中写入数据，当 Buffer 被写满后也就是存储的数据达到 capacity 了就需要将其清空，才能继续写入数据。</p><ul><li><strong>position</strong></li></ul><p>position 的含义取决于 Buffer 处于写模式还是读模式：</p><ul><li>如果是写模式，则写入的地方就是所谓的 position，其初始值是 0，最大值是 capacity - 1，当往 Buffer 中写入一个数据时，position 就会向前移动到下一个待写入的位置。</li><li>如果是读模式，则读取数据的地方就是 position。当执行 <code>flip()</code> 将 buffer 从写模式切换到读模式时，position 会被重置为 0，随着数据不断的读取，position 不断地向前移，直到 limit。</li><li><strong>limit</strong></li></ul><p>与 position 一样，limit 的含义也取决于 Buffer 处于何种模式：</p><ul><li>写模式：当 Buffer 处于写模式时，limit 是指能够往 Buffer 中写入多少数据，其值等于 capacity</li><li>读模式：当 Buffer 处于读模式时，limit 表示能够从 Buffer 中最多能够读取多少数据出来，所以当 Buffer 从写模式切换到读模式时，limit 会被设置写模式下的 position 的值</li><li><strong>mark</strong></li></ul><p>mark 仅仅只是一个标识，可以通过 <code>mark()</code> 方法进行设置，设置值为当前的 position</p><h2 id="buffer-方法" tabindex="-1"><a class="header-anchor" href="#buffer-方法" aria-hidden="true">#</a> Buffer 方法</h2><p>Buffer 提供了一系列的方法用来操作它，比如 <code>clear()</code> 用来清空缓冲区，<code>filp()</code> 用来读切换等等方法，下面将依次演示 Buffer 的主要方法，包含从 Buffer 获取实例、写入数据、读取数据、重置等等一个系列的操作流程，同时将 position、limit 两个参数打印出来，便于我们更好地理解 Buffer。</p><h3 id="allocate" tabindex="-1"><a class="header-anchor" href="#allocate" aria-hidden="true">#</a> allocate()</h3><p>要获取一个 Buffer 对象，首先就要为期分配内存空间，使用 <code>allocate()</code> 方法分配内存空间，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>DoubleBuffer buffer = DoubleBuffer.allocate(10);

System.out.println(&quot;================= allocate 10 后 =================&quot;);
System.out.println(&quot;capacity = &quot; + buffer.capacity());
System.out.println(&quot;position = &quot; + buffer.position());
System.out.println(&quot;limit = &quot; + buffer.limit());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里分配了 <code>10 * sikeof(double)</code> 字节的内存空间。需要注意的是 <code>allocate()</code> 里面参数并不是字节数，而是写入对象的数量，比如上面实例参数是 10 ，表明我们可以写 10 个 double 对象。</p><p>结果如下：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>================= allocate 10 后 =================
capacity = 10
position = 0
limit = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，Buffer 的情况如下：</p><p><img src="`+l+`" alt="img"></p><h3 id="put" tabindex="-1"><a class="header-anchor" href="#put" aria-hidden="true">#</a> put()</h3><p>调用 <code>allocate()</code> 分配内存后，得到 DoubleBuffer 实例对象，该对象目前处于写模式，我们可以通过 <code>put()</code> 方法向 Buffer 里面写入数据。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>buffer.put(1);
buffer.put(2);

System.out.println(&quot;================= put 1、2 后 =================&quot;);
System.out.println(&quot;capacity = &quot; + buffer.capacity());
System.out.println(&quot;position = &quot; + buffer.position());
System.out.println(&quot;limit = &quot; + buffer.limit());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code>put()</code> 往 DoubleBuffer 里面存放 2 个元素，此时，各自参数值如下：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>================= put 1、2 后 =================
capacity = 10
position = 2
limit = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看到 position 的值变成了 2 ，指向第三个可以写入元素的位置。这个时候我们再写入 3 个元素：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>buffer.put(3);
buffer.put(4);
buffer.put(5);

System.out.println(&quot;================= put 3、4、5 后 =================&quot;);
System.out.println(&quot;capacity = &quot; + buffer.capacity());
System.out.println(&quot;position = &quot; + buffer.position());
System.out.println(&quot;limit = &quot; + buffer.limit());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到结果如下：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>================= put 3、4、5 后 =================
capacity = 10
position = 5
limit = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，position 的值变成 5 ，指向第 6 个可以写入元素的位置。</p><p>该 Buffer 的情况如下：</p><p><img src="`+p+`" alt="img"></p><h3 id="flip" tabindex="-1"><a class="header-anchor" href="#flip" aria-hidden="true">#</a> flip()</h3><p>调用 <code>put()</code> 方法向 Buffer 中存储数据后，这时 Buffer 仍然处于写模式状态，在写模式状态下我们是不能直接从 Buffer 中读取数据的，需要调用 <code>flip()</code> 方法将 Buffer 从写模式切换为读模式。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>buffer.flip();
System.out.println(&quot;================= flip 后 =================&quot;);
System.out.println(&quot;capacity = &quot; + buffer.capacity());
System.out.println(&quot;position = &quot; + buffer.position());
System.out.println(&quot;limit = &quot; + buffer.limit());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>得到的结果如下：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>================= flip 后 =================
capacity = 10
position = 0
limit = 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code>flip()</code> 方法将 Buffer 从写模式切换为读模式后，Buffer 的参数发生了微秒的变化：position = 0，limit = 5。前面说过在读模式下，limit 代表是 Buffer 的可读长度，它等于写模式下的 position，而 position 则是读的位置。</p><p><code>flip()</code> 方法主要是将 Buffer 从写模式切换为读模式，其调整的规则如下：</p><ul><li>设置可读的长度 limit。将写模式写的 Buffer 中内容的最后位置 position 值变成读模式下的 limit 位置值，新的 limit 值作为读越界位置</li><li>设置读的起始位置。将 position 的值设置为 0 ，表示从 0 位置处开始读</li><li>如果之前有 mark 保存的标记位置，也需要消除，因为那是写模式下的 mark 标记</li></ul><p>调动 <code>flip()</code> 后，该 Buffer 情况如下：</p><p><img src="`+f+`" alt="img"></p><h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get()</h3><p>调用 <code>flip()</code> 将 Buffer 切换为读模式后，就可以调用 <code>get()</code> 方法读取 Buffer 中的数据了，<code>get()</code> 读取数据很简单，每次从 position 的位置读取一个数据，并且将 position 向前移动 1 位。如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>System.out.println(&quot;读取第 1 个位置的数据：&quot; + buffer.get());
System.out.println(&quot;读取第 2 个位置的数据：&quot; + buffer.get());
System.out.println(&quot;================= get 2 后 =================&quot;);
System.out.println(&quot;capacity = &quot; + buffer.capacity());
System.out.println(&quot;position = &quot; + buffer.position());
System.out.println(&quot;limit = &quot; + buffer.limit());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连续调用 2 次 <code>get()</code> 方法，输出结果：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>读取第 1 个位置的数据：1.0
读取第 2 个位置的数据：2.0
================= get 2 后 =================
capacity = 10
position = 2
limit = 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>position 的值变成了 2 ，表明它向前移动了 2 位，此时，Buffer 如下：</p><p><img src="`+v+`" alt="img"></p><p>我们知道 limit 表明当前 Buffer 最大可读位置，buffer 也是一边读，position 位置一边往前移动，那如果越界读取呢？</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>System.out.println(&quot;读取第 3 个位置的数据：&quot; + buffer.get());
System.out.println(&quot;读取第 4 个位置的数据：&quot; + buffer.get());
System.out.println(&quot;读取第 5 个位置的数据：&quot; + buffer.get());
System.out.println(&quot;读取第 6 个位置的数据：&quot; + buffer.get());
System.out.println(&quot;读取第 7 个位置的数据：&quot; + buffer.get());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>limit = 5，6 、7 位置明显越界了，如果越界读取，Buffer 会抛出 BufferUnderflowException，如下：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>读取第 3 个位置的数据：3.0
读取第 4 个位置的数据：4.0
读取第 5 个位置的数据：5.0
Exception in thread &quot;main&quot; java.nio.BufferUnderflowException
  at java.nio.Buffer.nextGetIndex(Buffer.java:500)
  at java.nio.HeapDoubleBuffer.get(HeapDoubleBuffer.java:135)
  at com.chenssy.study.nio.BufferTest.main(BufferTest.java:48)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rewind" tabindex="-1"><a class="header-anchor" href="#rewind" aria-hidden="true">#</a> rewind()</h3><p>position 是随着读取的进度一直往前移动的，那如果我想在读取一遍数据呢？使用 <code>rewind()</code> 方法，可以进行重复读。<code>rewind()</code> 也叫做倒带，就想播放磁带一样，倒回去重新读。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>buffer.rewind();
System.out.println(&quot;================= rewind 后 =================&quot;);
System.out.println(&quot;capacity = &quot; + buffer.capacity());
System.out.println(&quot;position = &quot; + buffer.position());
System.out.println(&quot;limit = &quot; + buffer.limit());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>================= rewind 后 =================
capacity = 10
position = 0
limit = 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，仅仅只是将 position 的值设置为了 0，limit 的值保持不变。</p><h3 id="clear-和-compact" tabindex="-1"><a class="header-anchor" href="#clear-和-compact" aria-hidden="true">#</a> clear() 和 compact()</h3><p><code>flip()</code> 方法用于将 Buffer 从写模式切换到读模式，那怎么将 Buffer 从读模式切换至写模式呢？可以调用 <code>clear()</code> 和 <code>compact()</code> 两个方法。</p><ul><li>clear()</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>buffer.clear();

System.out.println(&quot;================= clear 后 =================&quot;);
System.out.println(&quot;capacity = &quot; + buffer.capacity());
System.out.println(&quot;position = &quot; + buffer.position());
System.out.println(&quot;limit = &quot; + buffer.limit());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>================= clear 后 =================
capacity = 10
position = 0
limit = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code>clear()</code> 后，我们发现 position 的值变成了 0，limit 值变成了 10，也就是 Buffer 被清空了，回归到最初始状态。但是里面的数据仍然是存在的，只是没有标记哪些数据是已读，哪些为未读。</p><p><img src="`+l+`" alt="img"></p><ul><li>compact()</li></ul><p><code>compact()</code> 方法也可以将 Buffer 从读模式切换到写模式，它跟 <code>clear()</code> 有一些区别。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>buffer.compact();

System.out.println(&quot;================= compact 后 =================&quot;);
System.out.println(&quot;capacity = &quot; + buffer.capacity());
System.out.println(&quot;position = &quot; + buffer.position());
System.out.println(&quot;limit = &quot; + buffer.limit());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>================= compact 后 =================
capacity = 10
position = 3
limit = 10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 position 的值为 3，它与 <code>clear()</code> 区别就在于，它会将所有未读的数据全部复制到 Buffer 的前面（5次<code>put()</code>，两次 <code>get()</code>），将 position 设置到这些数据后面，所以此时是从未读的数据后面开始写入新的数据，Buffer 情况如下：</p><p><img src="`+m+'" alt="img"></p><h3 id="mark-和-reset" tabindex="-1"><a class="header-anchor" href="#mark-和-reset" aria-hidden="true">#</a> mark() 和 reset()</h3><p>调用 <code>mark()</code> 方法可以标志一个指定的位置（即设置 mark 的值），之后调用 <code>reset()</code> 时，position 又会回到之前标记的位置。</p><p>通过上面的步骤演示，我想小伙伴基本上已经掌握了 Buffer 的使用方法，这里简要总结下，使用 Buffer 的步骤如下：</p><ol><li>将数据写入 Buffer 中</li><li>调用 <code>flip()</code> 方法，将 Buffer 切换为读模式</li><li>从 Buffer 中读取数据</li><li>调用 <code>clear()</code> 或者 <code>compact()</code> 方法将 Buffer 切换为写模式</li></ol><h2 id="buffer-的类型" tabindex="-1"><a class="header-anchor" href="#buffer-的类型" aria-hidden="true">#</a> Buffer 的类型</h2><p>在 NIO 中主要有 8 中 Buffer，分别如下：</p><ul><li>ByteBuffer</li><li>CharBuffer</li><li>DoubleBuffer</li><li>FloatBuffer</li><li>IntBuffer</li><li>LongBuffer</li><li>ShortBuffer</li><li>MappedByteBuffer</li></ul><p>其 UML 类图如下：</p><p><img src="'+b+'" alt="img"></p><p>这些不同的 Buffer 类型代表了不同的数据类型，使得可以通过 Buffer 直接操作如 char、short 等类型的数据而不是字节数据。这些 Buffer 基本上覆盖了所有能从 IO 中传输的 Java 基本数据类型，其中 MappedByteBuffer 是专门用于内存映射的的一种 ByteBuffer，后续会专门介绍。</p><p>到这里 Buffer 也就介绍完毕了，下篇文章将介绍它的协作者 Channel。</p>',92);function w(I,j){const n=t("ExternalLinkIcon");return r(),d("div",null,[g,B,q,y,e("ul",null,[e("li",null,[e("a",_,[i("【死磕NIO】— 阻塞、非阻塞、同步、异步，傻傻分不清楚"),a(n)])]),e("li",null,[e("a",S,[i("【死磕NIO】— 阻塞IO，非阻塞IO，IO复用，信号驱动IO，异步IO，这你真的分的清楚吗？"),a(n)])]),e("li",null,[e("a",x,[i("【死磕 NIO】— Reactor 模式就一定意味着高性能吗？"),a(n)])]),e("li",null,[e("a",J,[i("【死磕 NIO】— Proactor模式是什么？很牛逼吗？"),a(n)])])]),k])}const D=s(h,[["render",w],["__file","java-nio-2.html.vue"]]);export{D as default};
