import{_ as e,V as t,W as p,X as n,Y as s,Z as i,a0 as l,D as o}from"./framework-5dde3bca.js";const c="/assets/jvm-memory-bed16a7a.png",u="/assets/20190409182042686-bf327923.png",r="/assets/image-20220510230231970-167b5883.png",d="/assets/jvm-memory-method-constant-982e458a.png",k="/assets/image-20220511132237266-1b4f730d.png",v="/assets/image-20220511132330620-006325af.png",m={},b=n("h1",{id:"jvm-内存结构",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jvm-内存结构","aria-hidden":"true"},"#"),s(" JVM 内存结构")],-1),g=n("h2",{id:"运行时数据区",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#运行时数据区","aria-hidden":"true"},"#"),s(" 运行时数据区")],-1),f={href:"https://blog.csdn.net/xiaokanfuchen86/article/details/117625190",target:"_blank",rel:"noopener noreferrer"},h=l('<p>Java 虚拟机在执行 Java 程序的过程中会把它管理的内存划分为若干个不同的数据区域。每个区域都有各自的作用。JVM 的运行时数据区主要包括：<strong>堆、栈、方法区、程序计数器</strong>等。而 JVM 的优化问题主要在线程共享的数据区中：<strong>堆、方法区</strong>。</p><img src="'+c+`" alt="img" style="zoom:100%;"><h3 id="程序计数器" tabindex="-1"><a class="header-anchor" href="#程序计数器" aria-hidden="true">#</a> 程序计数器</h3><p>Program Counter Register 程序计数器（寄存器）</p><ul><li><p>作用，是记住下一条jvm指令的执行地址</p></li><li><p>特点</p><ul><li><p>是线程私有的</p></li><li><p>不会存在内存溢出</p></li></ul></li></ul><p>下面给出一个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">0</span><span class="token operator">:</span> getstatic #<span class="token number">20</span>              <span class="token comment">// PrintStream out = System.out; </span>
<span class="token number">3</span><span class="token operator">:</span> astore_1                   <span class="token comment">// -- </span>
<span class="token number">4</span><span class="token operator">:</span> aload_1                    <span class="token comment">// out.println(1); </span>
<span class="token number">5</span><span class="token operator">:</span> iconst_1                   <span class="token comment">// -- </span>
<span class="token number">6</span><span class="token operator">:</span> invokevirtual #<span class="token number">26</span>          <span class="token comment">// -- </span>
<span class="token number">9</span><span class="token operator">:</span> aload_1                    <span class="token comment">// out.println(2); </span>
<span class="token number">10</span><span class="token operator">:</span> iconst_2                  <span class="token comment">// -- </span>
<span class="token number">11</span><span class="token operator">:</span> invokevirtual #<span class="token number">26</span>         <span class="token comment">// -- </span>
<span class="token number">14</span><span class="token operator">:</span> aload_1                   <span class="token comment">// out.println(3); </span>
<span class="token number">15</span><span class="token operator">:</span> iconst_3                  <span class="token comment">// -- </span>
<span class="token number">16</span><span class="token operator">:</span> invokevirtual #<span class="token number">26</span>         <span class="token comment">// -- </span>
<span class="token number">19</span><span class="token operator">:</span> aload_1                   <span class="token comment">// out.println(4); </span>
<span class="token number">20</span><span class="token operator">:</span> iconst_4                  <span class="token comment">// -- </span>
<span class="token number">21</span><span class="token operator">:</span> invokevirtual #<span class="token number">26</span>         <span class="token comment">// -- </span>
<span class="token number">24</span><span class="token operator">:</span> aload_1                   <span class="token comment">// out.println(5); </span>
<span class="token number">25</span><span class="token operator">:</span> iconst_5                  <span class="token comment">// -- </span>
<span class="token number">26</span><span class="token operator">:</span> invokevirtual #<span class="token number">26</span>         <span class="token comment">// -- </span>
<span class="token number">29</span><span class="token operator">:</span> <span class="token keyword">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码的右侧是Java的源代码，左侧是二进制字节码，JVM的指令</p><p>JVM的执行流程：</p><p>JVM指令 -&gt; 解释器 -&gt; 机器码 -&gt; CPU</p><p><strong>程序计数器（Program Counter Register）<strong>是一块较小的内存空间，可以看作是</strong>当前线程</strong>所执行字节码的<strong>行号指示器</strong>，指向下一个将要执行的指令代码，由执行引擎来读取下一条指令。更确切的说，<strong>一个线程的执行，是通过字节码解释器改变当前线程的计数器的值，来获取下一条需要执行的字节码指令，从而确保线程的正确执行</strong>。</p><p>为了确保线程切换后（上下文切换）能恢复到正确的执行位置，<strong>每个线程都有一个独立的程序计数器</strong>，各个线程的计数器互不影响，独立存储。也就是说程序计数器是<strong>线程私有的内存</strong>。</p><p>如果线程执行 Java 方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；如果执行的是 Native 方法，计数器值为Undefined。</p><p><strong>程序计数器不会发生内存溢出（OutOfMemoryError即OOM）问题。</strong></p><h3 id="虚拟机栈" tabindex="-1"><a class="header-anchor" href="#虚拟机栈" aria-hidden="true">#</a> 虚拟机栈</h3><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4><p>Java Virtual Machine Stacks （Java 虚拟机栈）</p><ul><li>线程私有的</li><li>声明周期与线程相同</li><li>每个线程运行时所需要的内存，称为虚拟机栈</li><li>每个栈由多个栈帧（Frame）组成，对应着每次方法调用时所占用的内存</li><li>每个线程只能有一个活动栈帧，对应着当前正在执行的那个方法</li></ul><p>栈帧是栈的元素。每个方法在执行时都会创建一个栈帧。栈帧中存储了局部变量表、操作数栈、动态连接和方法出口等信息。每个方法从调用到运行结束的过程，就对应着一个栈帧在栈中压栈到出栈的过程。</p><p>局部变量表存放了编译期可知的Java基本数据类型、对象引用（可以理解为指针）和returnAddress 类型（指向了一条字节码指令的地址）。 局部变量表所需内存空间在编译器分配，在运行期间不会改变。</p><p><img src="`+u+`" alt="img"></p><h4 id="相关参数" tabindex="-1"><a class="header-anchor" href="#相关参数" aria-hidden="true">#</a> 相关参数</h4><p>JVM虚拟机栈的大小可以通过参数来指定 <strong>-Xss size</strong></p><p>默认的单位是字节，也可以指定单位，如KB(k,K)、MB(m,M)、GB(g,G)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xss1m
-Xss1024KB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>栈的大小决定了函数调用的最大深度，如果函数调用的深度大于设置的Xss大小，那么将会抛“java.lang.StackOverflowError“ 异常。</p><p>默认的情况下，栈的大小是1024KB（windows系统例外，大小依赖于虚拟内存）</p><blockquote><p>面试题：</p><ol><li><p>垃圾回收是否涉及栈内存？</p><p>不需要，栈内存随着栈针的出栈而自动回收掉，所以不需要垃圾回收器来管理。</p></li><li><p>占内存分配的越大越好么？</p><p>占内存过大会导致单线程占用的内存过大，总的线程数变少，不建议调整，使用默认即可。</p></li><li><p>方法的局部变量是否线程安全？</p><p>局部变量是线程私有的，不存在线程安全问题。</p></li><li><p>虚拟机栈和本地方法栈的区别？</p><p>Java 虚拟机栈为 JVM 执行 Java 方法服务，本地方法栈则为 JVM 使用到的 Native 方法服务。</p></li></ol></blockquote><h4 id="案例1-cpu占用过多" tabindex="-1"><a class="header-anchor" href="#案例1-cpu占用过多" aria-hidden="true">#</a> 案例1：CPU占用过多</h4><p>定位过程：</p><ul><li><p>用top定位哪个进程对cpu的占用过高</p></li><li><p>ps H -eo pid,tid,%cpu | grep 进程id （用ps命令进一步定位是哪个线程引起的cpu占用过高）</p></li><li><p>jstack 进程id。可以根据线程id 找到有问题的线程，进一步定位到问题代码的源码行号</p><p>这里注意一下，ps输出的线程号是十进制的，jstack输出的线程编号是十六进制的。</p></li></ul><h4 id="案例2-程序运行很长时间没有结果" tabindex="-1"><a class="header-anchor" href="#案例2-程序运行很长时间没有结果" aria-hidden="true">#</a> 案例2：程序运行很长时间没有结果</h4><h3 id="本地方法栈" tabindex="-1"><a class="header-anchor" href="#本地方法栈" aria-hidden="true">#</a> 本地方法栈</h3><p>本地方法栈（Native Method Stacks）与虚拟机栈的作用非常相似，其区别只是虚拟机栈为虚拟机执行Java方法（也就是字节码）服务，而本地方法栈则是为虚拟机使用到的本地（Native）方法服务。</p><h3 id="java堆" tabindex="-1"><a class="header-anchor" href="#java堆" aria-hidden="true">#</a> Java堆</h3><p><strong>几乎</strong>所有的对象实例以及数组都在堆里分配内存。通过new关键字创建的对象，都会使用堆内存。</p><p>特点：</p><ul><li>它是线程共享的，堆中的对象都需要考虑线程安全问题</li><li>有垃圾回收机制</li></ul><p>参数控制：</p><ul><li>-Xms设置堆的最小空间大小。-Xmx设置堆的最大空间大小。</li></ul><p>异常情况：</p><ul><li>如果在堆中没有内存完成实例分配，并且堆也无法再扩展时，将会抛出OutOfMemoryError 异常</li></ul><h3 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区" aria-hidden="true">#</a> 方法区</h3><p>方法区同 Java 堆一样是被所有线程共享的区间，用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码缓存等数据。</p><blockquote><p><strong>注</strong>：JDK1.8 使用元空间 MetaSpace 替代方法区，元空间并不在 JVM中，而是使用<strong>本地内存</strong>。元空间两个参数：</p><ol><li>MetaSpaceSize：初始化元空间大小，控制发生GC阈值</li><li>MaxMetaspaceSize ： 限制元空间大小上限，防止异常占用过多物理内存</li></ol><img src="`+r+'" alt="image-20220510230231970" style="zoom:50%;"></blockquote><h3 id="运行时常量池" tabindex="-1"><a class="header-anchor" href="#运行时常量池" aria-hidden="true">#</a> 运行时常量池</h3><p>Class文件中除了类的版本，字段，方法，接口等，还有常量池表。常量池表中用于存放编译期生成的各种字面量与符号引用，这部分内容将在类加载后存放到方法区的运行时常量池中。</p><p>当常量池无法再申请到内存时会抛出OutOfMemoryError异常。</p><p>注：JDK8以后，常量池保存在堆中。</p><img src="'+d+`" alt="img" style="zoom:100%;"><p>优点：</p><ul><li>常量池避免了频繁的创建和销毁对象而影响系统性能，其实现了对象的共享。</li></ul><h5 id="class常量池" tabindex="-1"><a class="header-anchor" href="#class常量池" aria-hidden="true">#</a> Class常量池</h5><p><strong>定义：<strong>Class常量池可以理解为是Class文件中的</strong>资源仓库</strong>。</p><p>**内容：**Class文件中除了包含类的版本、字段、方法、接口等描述信息外， 还有一项信息就是常量池，<strong>用于存放编译期生成的各种字面量和符号引用</strong>。</p><p>首先有如下类文件定义：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;hello world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们通过java提供的工具来查看编译后的Test.class文件的详细信息</p><p>查看命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>javap -v Test.class       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>详细信息如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Classfile /D:/developer/gitee/spring-demo/java-demo/data-structure/src/test/java/Test.class
  Last modified 2022-5-11; size 413 bytes
  MD5 checksum ae5ed4a0ee5b45fd449f77ade8d7bd24
  Compiled from &quot;Test.java&quot;
public class Test
  minor version: 0
  major version: 52
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:  这里就是这个类需要的常量，运行后，会保存到常量池中，#后面的数字也会变为真时的内存地址。
   #1 = Methodref          #6.#15         // java/lang/Object.&quot;&lt;init&gt;&quot;:()V
   #2 = Fieldref           #16.#17        // java/lang/System.out:Ljava/io/PrintStream;
   #3 = String             #18            // hello world
   #4 = Methodref          #19.#20        // java/io/PrintStream.println:(Ljava/lang/String;)V
   #5 = Class              #21            // Test
   #6 = Class              #22            // java/lang/Object
   #7 = Utf8               &lt;init&gt;
   #8 = Utf8               ()V
   #9 = Utf8               Code
  #10 = Utf8               LineNumberTable
  #11 = Utf8               main
  #12 = Utf8               ([Ljava/lang/String;)V
  #13 = Utf8               SourceFile
  #14 = Utf8               Test.java
  #15 = NameAndType        #7:#8          // &quot;&lt;init&gt;&quot;:()V
  #16 = Class              #23            // java/lang/System
  #17 = NameAndType        #24:#25        // out:Ljava/io/PrintStream;
  #18 = Utf8               hello world
  #19 = Class              #26            // java/io/PrintStream
  #20 = NameAndType        #27:#28        // println:(Ljava/lang/String;)V
  #21 = Utf8               Test
  #22 = Utf8               java/lang/Object
  #23 = Utf8               java/lang/System
  #24 = Utf8               out
  #25 = Utf8               Ljava/io/PrintStream;
  #26 = Utf8               java/io/PrintStream
  #27 = Utf8               println
  #28 = Utf8               (Ljava/lang/String;)V
{
  public Test();
    descriptor: ()V
    flags: ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V
         4: return
      LineNumberTable:
        line 1: 0

  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=2, locals=1, args_size=1
         0: getstatic     #2                  // Field java/lang/System.out:Ljava/io/PrintStream;
         3: ldc           #3                  // String hello world
         5: invokevirtual #4                  // Method java/io/PrintStream.println:(Ljava/lang/String;)V
         8: return
      LineNumberTable:
        line 4: 0
        line 5: 8
}
SourceFile: &quot;Test.java&quot;                                                                              
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字面量</strong></p><p><strong>定义：<strong>字面量就是指</strong>由字母、数字等构成的字符串或者数值常量</strong>。</p><p>**PS：**字面量只可以右值出现【等号右边的值】如：int a = 1 这里的a为左值，1为右值。在这个例子中1就是字面量。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">compute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//符号引用：a 字面量：1</span>
    <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">//符号引用：b 字面量：2</span>
    <span class="token class-name">String</span> c <span class="token operator">=</span> <span class="token string">&quot;有梦想的肥宅&quot;</span><span class="token punctuation">;</span><span class="token comment">//符号引用：c 字面量：有梦想的肥宅</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>符号引用</strong></p><p>符号引用是编译原理中的概念，是相对于直接引用来说的。主要包括了以下三类常量：</p><ul><li><strong>类和接口的全限定名</strong></li><li><strong>字段的名称和描述符</strong></li><li><strong>方法的名称和描述符</strong></li></ul><p><strong>符号引用只有到运行时被加载到内存后，这些符号才有对应的内存地址信息，这些常量池一旦被装入内存就变成运行时常量池</strong>，也就引出了下面动态链接的概念。</p><p>**动态链接：**对应的符号引用在程序加载或运行时会被转变为被加载到内存区域的代码的直接引用。</p><p>**例：**compute()这个符号引用在运行时就会被转变为compute()方法具体代码在内存中的地址，主要通过对象头里的类型指针去转换直接引用。</p><h5 id="字符串常量池" tabindex="-1"><a class="header-anchor" href="#字符串常量池" aria-hidden="true">#</a> 字符串常量池</h5><p>字符串的分配和其他的对象分配一样，耗费高昂的时间与空间代价，作为最基础的数据类型，大量频繁的创建字符串，极大程度地影响程序的性能。JVM为了提高性能和减少内存开销，在实例化字符串常量的时候进行了一些优化：</p><ul><li>为字符串<strong>开辟一个字符串常量池，类似于缓存区</strong></li><li>创建字符串常量时，首先查询字符串常量池是否存在该字符串</li><li>存在该字符串，返回引用实例，不存在，实例化该字符串并放入池中</li></ul><p>三种字符串操作(Jdk1.7 及以上版本)</p><ol><li><p><strong>直接赋值</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String s = &quot;有梦想的肥宅&quot;; // s ：指向常量池中的引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>**PS：**这种方式创建的字符串对象，<strong>只会在常量池中</strong>。</p><p>创建步骤：</p><p>JVM会先去常量池中通过 equals(key) 方法，判断是否有相同的对象：</p><ul><li><strong>有</strong>，则<strong>直接返回该对象在常量池中的引用</strong></li><li><strong>没有</strong>，则会在<strong>常量池中创建一个新对象，再返回引用</strong></li></ul></li><li><p><strong>new String()方法创建</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String s1 = new String(&quot;有梦想的肥宅&quot;); // s1指向内存中的对象引用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>PS：<strong>这种方式会保证</strong>字符串常量池和堆中都有这个对象</strong>，没有就创建，最后<strong>返回堆内存中的对象引用</strong>。</p><p><strong>创建步骤：</strong></p><p>因为有&quot;有梦想的肥宅&quot;这个字面量，所以会先检查字符串常量池中是否存在此字符串：</p><ul><li><strong>不存在</strong>，先在字符串常量池里创建一个字符串对象，再去堆内存中创建一个字符串对象&quot;有梦想的肥宅&quot;</li><li><strong>存在</strong>，就直接去堆内存中创建一个字符串对象&quot;有梦想的肥宅&quot;， 最后，将内存中的引用返回</li></ul></li><li><p><strong>intern()方法</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;有梦想的肥宅&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">String</span> s2 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//s1.intern()返回的串池中的对象，s1引用的是堆中的对象</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**PS：**这个方法是尝试将字符串对象放入串池，如果有则不放入，如果没有则放入串池，并把串池中的对象返回。</p><p><strong>创建步骤：</strong></p><p>还是会去常量池找看有没有&quot;有梦想的肥宅&quot;这个字符串：</p><ul><li><strong>存在</strong>，则返回串池中的对象引用</li><li><strong>不存在</strong>，把字符串放入串池，并返回串池中的对象 引用</li></ul><p>**PS：**jdk1.6版本需要将 s1 复制到字符串常量池里</p></li></ol><p></p><h5 id="八种基本类型的包装类和对象池" tabindex="-1"><a class="header-anchor" href="#八种基本类型的包装类和对象池" aria-hidden="true">#</a> 八种基本类型的包装类和对象池</h5><p>java中基本类型的包装类的大部分都实现了常量池技术（严格来说对象在堆上应该叫对象池），这些类是 Byte、Short、Integer、Long、Character、Boolean，另外两种浮点数类型的包装类则没有实现。</p><p>**PS：**Byte,Short,Integer,Long,Character这5种整型的包装类也只是在对应值小于等于127时才可使用对象池，因为一般这种比较小的数用到的概率相对较大。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1、5种整形的包装类Byte,Short,Integer,Long,Character的对象，在值小于127时可以使用对象池</span>
        <span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span> <span class="token comment">//PS：这种调用底层实际是执行的Integer.valueOf(127)，里面用到了IntegerCache对象池</span>
        <span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1 <span class="token operator">==</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出true</span>

        <span class="token comment">//2、当值大于127时，不会从对象池中取对象</span>
        <span class="token class-name">Integer</span> i3 <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> i4 <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i3 <span class="token operator">==</span> i4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出false</span>

        <span class="token comment">//3、用new关键词新生成对象不会使用对象池</span>
        <span class="token class-name">Integer</span> i5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">127</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> i6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">127</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i5 <span class="token operator">==</span> i6<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出false</span>

        <span class="token comment">//4、Boolean类也实现了对象池技术</span>
        <span class="token class-name">Boolean</span> bool1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token class-name">Boolean</span> bool2 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bool1 <span class="token operator">==</span> bool2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出true</span>

        <span class="token comment">//5、浮点类型的包装类没有实现对象池技术</span>
        <span class="token class-name">Double</span> d1 <span class="token operator">=</span> <span class="token number">1.0D</span><span class="token punctuation">;</span>
        <span class="token class-name">Double</span> d2 <span class="token operator">=</span> <span class="token number">1.0D</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1 <span class="token operator">==</span> d2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//输出false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stringtable详解-就是串池" tabindex="-1"><a class="header-anchor" href="#stringtable详解-就是串池" aria-hidden="true">#</a> StringTable详解(就是串池)</h3><p>首先来看一个代码示例：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// StringTable [ &quot;a&quot;, &quot;b&quot; ,&quot;ab&quot; ]  hashtable 结构，不能扩容</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo1_22</span> <span class="token punctuation">{</span>
    <span class="token comment">// 常量池中的信息，都会被加载到运行时常量池中， 这时 a b ab 都是常量池中的符号，还没有变为 java 字符串对象</span>
    <span class="token comment">// ldc #2 会把 a 符号变为 &quot;a&quot; 字符串对象</span>
    <span class="token comment">// ldc #3 会把 b 符号变为 &quot;b&quot; 字符串对象</span>
    <span class="token comment">// ldc #4 会把 ab 符号变为 &quot;ab&quot; 字符串对象</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 懒惰的</span>
        <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token string">&quot;ab&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> s4 <span class="token operator">=</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">;</span> <span class="token comment">// new StringBuilder().append(&quot;a&quot;).append(&quot;b&quot;).toString()  new String(&quot;ab&quot;)</span>
        <span class="token comment">// new String 会在常量池和堆内存中同时创建对象，但引用的是堆内存中的引用</span>
        <span class="token class-name">String</span> s5 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// javac 在编译期间的优化，结果已经在编译期确定为ab</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s5<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> ap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里注意一下，通过new 相加，这里a，b都会检查常量池，但是最后生成的结果&quot;ab&quot;不会保存到常量池</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译过程中遇到编码问题，可以通过-encoding来指定编码，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>javac <span class="token parameter variable">-encoding</span> utf-8 Demo1_22.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>来查看一下编译后文件的详细信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Classfile /D:/path/to/Demo1_22.class
  Last modified 2022-5-11; size 776 bytes
  MD5 checksum 141d5699097730cd03bba544e9b27e1c
  Compiled from &quot;Demo1_22.java&quot;
public class cn.itcast.jvm.t1.stringtable.Demo1_22
  minor version: 0
  major version: 52
  flags: ACC_PUBLIC, ACC_SUPER
Constant pool:
   #1 = Methodref          #12.#25        // java/lang/Object.&quot;&lt;init&gt;&quot;:()V
   #2 = String             #26            // a
   #3 = String             #27            // b
   #4 = String             #28            // ab
   #5 = Class              #29            // java/lang/StringBuilder
   #6 = Methodref          #5.#25         // java/lang/StringBuilder.&quot;&lt;init&gt;&quot;:()V
   #7 = Methodref          #5.#30         // java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
   #8 = Methodref          #5.#31         // java/lang/StringBuilder.toString:()Ljava/lang/String;
   #9 = Fieldref           #32.#33        // java/lang/System.out:Ljava/io/PrintStream;
  #10 = Methodref          #34.#35        // java/io/PrintStream.println:(Z)V
  #11 = Class              #36            // cn/itcast/jvm/t1/stringtable/Demo1_22
  #12 = Class              #37            // java/lang/Object
  #13 = Utf8               &lt;init&gt;
  #14 = Utf8               ()V
  #15 = Utf8               Code
  #16 = Utf8               LineNumberTable
  #17 = Utf8               main
  #18 = Utf8               ([Ljava/lang/String;)V
  #19 = Utf8               StackMapTable
  #20 = Class              #38            // &quot;[Ljava/lang/String;&quot;
  #21 = Class              #39            // java/lang/String
  #22 = Class              #40            // java/io/PrintStream
  #23 = Utf8               SourceFile
  #24 = Utf8               Demo1_22.java
  #25 = NameAndType        #13:#14        // &quot;&lt;init&gt;&quot;:()V
  #26 = Utf8               a
  #27 = Utf8               b
  #28 = Utf8               ab
  #29 = Utf8               java/lang/StringBuilder
  #30 = NameAndType        #41:#42        // append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
  #31 = NameAndType        #43:#44        // toString:()Ljava/lang/String;
  #32 = Class              #45            // java/lang/System
  #33 = NameAndType        #46:#47        // out:Ljava/io/PrintStream;
  #34 = Class              #40            // java/io/PrintStream
  #35 = NameAndType        #48:#49        // println:(Z)V
  #36 = Utf8               cn/itcast/jvm/t1/stringtable/Demo1_22
  #37 = Utf8               java/lang/Object
  #38 = Utf8               [Ljava/lang/String;
  #39 = Utf8               java/lang/String
  #40 = Utf8               java/io/PrintStream
  #41 = Utf8               append
  #42 = Utf8               (Ljava/lang/String;)Ljava/lang/StringBuilder;
  #43 = Utf8               toString
  #44 = Utf8               ()Ljava/lang/String;
  #45 = Utf8               java/lang/System
  #46 = Utf8               out
  #47 = Utf8               Ljava/io/PrintStream;
  #48 = Utf8               println
  #49 = Utf8               (Z)V
{
  public cn.itcast.jvm.t1.stringtable.Demo1_22();
    descriptor: ()V
    flags: ACC_PUBLIC
    Code:
      stack=1, locals=1, args_size=1
         0: aload_0
         1: invokespecial #1                  // Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V
         4: return
      LineNumberTable:
        line 4: 0

  public static void main(java.lang.String[]);
    descriptor: ([Ljava/lang/String;)V
    flags: ACC_PUBLIC, ACC_STATIC
    Code:
      stack=3, locals=6, args_size=1
         0: ldc           #2                  // String a
         2: astore_1
         3: ldc           #3                  // String b
         5: astore_2
         6: ldc           #4                  // String ab
         8: astore_3
         9: new           #5                  // class java/lang/StringBuilder
        12: dup
        13: invokespecial #6                  // Method java/lang/StringBuilder.&quot;&lt;init&gt;&quot;:()V
        16: aload_1
        17: invokevirtual #7                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
        20: aload_2
        21: invokevirtual #7                  // Method java/lang/StringBuilder.append:(Ljava/lang/String;)Ljava/lang/StringBuilder;
        24: invokevirtual #8                  // Method java/lang/StringBuilder.toString:()Ljava/lang/String;
        27: astore        4
        29: ldc           #4                  // String ab
        31: astore        5
        33: getstatic     #9                  // Field java/lang/System.out:Ljava/io/PrintStream;
        36: aload_3
        37: aload         5
        39: if_acmpne     46
        42: iconst_1
        43: goto          47
        46: iconst_0
        47: invokevirtual #10                 // Method java/io/PrintStream.println:(Z)V
        50: return
      LineNumberTable:
        line 11: 0
        line 12: 3
        line 13: 6
        line 14: 9
        line 15: 29
        line 17: 33
        line 21: 50
      StackMapTable: number_of_entries = 2
        frame_type = 255 /* full_frame */
          offset_delta = 46
          locals = [ class &quot;[Ljava/lang/String;&quot;, class java/lang/String, class java/lang/String, class java/lang/String, class java/lang/String, class java/lang/String ]
          stack = [ class java/io/PrintStream ]
        frame_type = 255 /* full_frame */
          offset_delta = 0
          locals = [ class &quot;[Ljava/lang/String;&quot;, class java/lang/String, class java/lang/String, class java/lang/String, class java/lang/String, class java/lang/String ]
          stack = [ class java/io/PrintStream, int ]
}
SourceFile: &quot;Demo1_22.java&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面来看几道面试题：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span> 
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span> 
<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">;</span> 
<span class="token class-name">String</span> s4 <span class="token operator">=</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">;</span> 
<span class="token class-name">String</span> s5 <span class="token operator">=</span> <span class="token string">&quot;ab&quot;</span><span class="token punctuation">;</span> 
<span class="token class-name">String</span> s6 <span class="token operator">=</span> s4<span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token comment">// 问 </span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s5<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s6<span class="token punctuation">)</span><span class="token punctuation">;</span> 

<span class="token class-name">String</span> x2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token class-name">String</span> x1 <span class="token operator">=</span> <span class="token string">&quot;cd&quot;</span><span class="token punctuation">;</span> 
x2<span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 问，如果调换了【最后两行代码】的位置呢，如果是jdk1.6呢 </span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x1 <span class="token operator">==</span> x2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stringtable存储位置" tabindex="-1"><a class="header-anchor" href="#stringtable存储位置" aria-hidden="true">#</a> StringTable存储位置</h4><p>Java 8 中的存储位置：</p><img src="`+k+'" alt="image-20220511132237266" style="zoom:40%;"><p>java 6 中的存储位置：</p><img src="'+v+`" alt="image-20220511132330620" style="zoom:40%;"><p>将串池转移到堆内存后，更有利于内存的回收</p><h4 id="stringtable的特性" tabindex="-1"><a class="header-anchor" href="#stringtable的特性" aria-hidden="true">#</a> StringTable的特性</h4><ul><li><p>常量池中的字符串仅是符号，第一次用到时才变为对象</p></li><li><p>利用串池的机制，来避免重复创建字符串对象</p></li><li><p>字符串变量拼接的原理是 StringBuilder （1.8）</p></li><li><p>字符串常量拼接的原理是编译期优化</p></li><li><p>可以使用 intern 方法，主动将串池中还没有的字符串对象放入串池</p><ul><li><p>1.8 将这个字符串对象尝试放入串池，如果有则并不会放入，如果没有则放入串池， 会把串池中的对象返回</p></li><li><p>1.6 将这个字符串对象尝试放入串池，如果有则并不会放入，如果没有会把此对象复制一份，放入串池， 会把串池中的对象返回</p></li></ul></li></ul><h4 id="stringtable调优" tabindex="-1"><a class="header-anchor" href="#stringtable调优" aria-hidden="true">#</a> StringTable调优</h4><p>StringTable的实现类似于Hash表，默认的桶大小是65535（在Java11中），可以使用参数-XX:StringTableSzie=655350 来进行调整。</p><p>当项目中字符串变量较多时，可以适当增加StringTable的大小，来提高运行效率。</p><h3 id="直接内存" tabindex="-1"><a class="header-anchor" href="#直接内存" aria-hidden="true">#</a> 直接内存</h3><p>优点：</p><ul><li><p>常见于 NIO 操作时，用于数据缓冲区</p></li><li><p>分配回收成本较高，但读写性能高</p></li><li><p>不受 JVM 内存回收管理</p></li></ul><p>首先来看一个例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 演示 ByteBuffer 作用
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo1_9</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">FROM</span> <span class="token operator">=</span> <span class="token string">&quot;E:\\\\path\\\\to\\\\big-file.mp4&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">TO</span> <span class="token operator">=</span> <span class="token string">&quot;E:\\\\a.mp4&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> _1Mb <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">io</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// io 用时：1535.586957 1766.963399 1359.240226</span>
        <span class="token function">directBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// directBuffer 用时：479.295165 702.291454 562.56592</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">directBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">FileChannel</span> from <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token constant">FROM</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">FileChannel</span> <span class="token keyword">to</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token constant">TO</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ByteBuffer</span> bb <span class="token operator">=</span> <span class="token class-name">ByteBuffer</span><span class="token punctuation">.</span><span class="token function">allocateDirect</span><span class="token punctuation">(</span>_1Mb<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> len <span class="token operator">=</span> from<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bb<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                bb<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">to</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bb<span class="token punctuation">)</span><span class="token punctuation">;</span>
                bb<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;directBuffer 用时：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000_000.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">io</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> start <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">FileInputStream</span> from <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token constant">FROM</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">FileOutputStream</span> <span class="token keyword">to</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token constant">TO</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span>_1Mb<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> len <span class="token operator">=</span> from<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">to</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> end <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;io 用时：&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>end <span class="token operator">-</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000_000.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>NIO会快很多</p><h4 id="文件读写流程" tabindex="-1"><a class="header-anchor" href="#文件读写流程" aria-hidden="true">#</a> 文件读写流程：</h4><p>直接内存溢出</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">Exception</span> <span class="token value attr-value">in thread &quot;main&quot; java.lang.OutOfMemoryError： Direct buffer memory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>禁用显示的垃圾回收</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:DisableExplicitGC  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="直接内存的申请释放" tabindex="-1"><a class="header-anchor" href="#直接内存的申请释放" aria-hidden="true">#</a> 直接内存的申请释放</h4><p>在Java中分配直接内存，大有如下三种主要方式：</p><ol><li>Unsafe.allocateMemory()</li><li>ByteBuffer.allocateDirect()</li><li>native方法</li></ol><h5 id="unsafe类" tabindex="-1"><a class="header-anchor" href="#unsafe类" aria-hidden="true">#</a> Unsafe类</h5><p>在unsafe类中，提供了两个方法来进行直接内存的分配和释放</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 申请直接内存内存</span>
<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">long</span> <span class="token function">allocateMemory</span><span class="token punctuation">(</span><span class="token keyword">long</span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 释放直接内存</span>
<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">freeMemory</span><span class="token punctuation">(</span><span class="token keyword">long</span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面给出一个使用的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> _1Gb <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Unsafe</span> unsafe <span class="token operator">=</span> <span class="token class-name">Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 分配内存</span>
    <span class="token keyword">long</span> base <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">allocateMemory</span><span class="token punctuation">(</span>_1Gb<span class="token punctuation">)</span><span class="token punctuation">;</span>
    unsafe<span class="token punctuation">.</span><span class="token function">setMemory</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> _1Gb<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 释放内存</span>
    unsafe<span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="bytebuffer类" tabindex="-1"><a class="header-anchor" href="#bytebuffer类" aria-hidden="true">#</a> ByteBuffer类</h5><p>Unsafe是一个十分原始的底层方法，不适合开发者使用。而ByteBuffer则是留给开发者使用的。下面来看一下其实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ByteBuffer</span> <span class="token function">allocateDirect</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DirectByteBuffer</span><span class="token punctuation">(</span>capacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，他创建了一个<code>DirectByteBuffer</code>对象</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">DirectByteBuffer</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>                   <span class="token comment">// package-private</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> cap<span class="token punctuation">,</span> cap<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 计算需要分配内存的大小</span>
    <span class="token keyword">boolean</span> pa <span class="token operator">=</span> <span class="token constant">VM</span><span class="token punctuation">.</span><span class="token function">isDirectMemoryPageAligned</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ps <span class="token operator">=</span> <span class="token class-name">Bits</span><span class="token punctuation">.</span><span class="token function">pageSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> size <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span>cap <span class="token operator">+</span> <span class="token punctuation">(</span>pa <span class="token operator">?</span> ps <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Bits</span><span class="token punctuation">.</span><span class="token function">reserveMemory</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> cap<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 分配直接内存</span>
    <span class="token keyword">long</span> base <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        base <span class="token operator">=</span> <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">allocateMemory</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">OutOfMemoryError</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Bits</span><span class="token punctuation">.</span><span class="token function">unreserveMemory</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> cap<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">setMemory</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> size<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 计算内存地址</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pa <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>base <span class="token operator">%</span> ps <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Round up to page boundary</span>
        address <span class="token operator">=</span> base <span class="token operator">+</span> ps <span class="token operator">-</span> <span class="token punctuation">(</span>base <span class="token operator">&amp;</span> <span class="token punctuation">(</span>ps <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        address <span class="token operator">=</span> base<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 创建cleaner</span>
    cleaner <span class="token operator">=</span> <span class="token class-name">Cleaner</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Deallocator</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> size<span class="token punctuation">,</span> cap<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    att <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，DirectByteBuffer也是通过<code>UNSAFE.allocateMemory(size)</code>来申请的直接内存空间。那么释放直接内存的在哪里呢？</p><p>可以看到这么一行代码：<code>cleaner = Cleaner.create(this, new Deallocator(base, size, cap));</code></p><p>Cleaner继承自<code>PhantomReference</code>，所以当垃圾回收器在回收<code>DirectByteBuffer</code>这个对象时，就会同步对cleaner进行回收工作；</p><p>TODO 补充一下虚引用</p><p>Deallocator的实现</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Deallocator</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> address<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">long</span> size<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> capacity<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Deallocator</span><span class="token punctuation">(</span><span class="token keyword">long</span> address<span class="token punctuation">,</span> <span class="token keyword">long</span> size<span class="token punctuation">,</span> <span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">assert</span> <span class="token punctuation">(</span>address <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>address <span class="token operator">=</span> address<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>address <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Paranoia</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token constant">UNSAFE</span><span class="token punctuation">.</span><span class="token function">freeMemory</span><span class="token punctuation">(</span>address<span class="token punctuation">)</span><span class="token punctuation">;</span>
        address <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">Bits</span><span class="token punctuation">.</span><span class="token function">unreserveMemory</span><span class="token punctuation">(</span>size<span class="token punctuation">,</span> capacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象的创建于存储" tabindex="-1"><a class="header-anchor" href="#对象的创建于存储" aria-hidden="true">#</a> 对象的创建于存储</h2><h3 id="对象的创建" tabindex="-1"><a class="header-anchor" href="#对象的创建" aria-hidden="true">#</a> 对象的创建</h3><ul><li><p>创建之前，先检查对象是否被加载。</p></li><li><p>类加载后，开始分配内存，分配内存的方式有一下几种</p><ul><li><p>指针碰撞：基于标记整理算法的垃圾回收器使用这种方式</p></li><li><p>空闲链表：基于标记清除算法的使用这种方式(CMS)</p></li></ul></li><li><p>内存分配的线程安全性</p><ul><li>CAS配合失败重试机制</li><li>本地线程分配缓冲（Thread Local Allocation Buffer，TLAB）：每个线程在堆中预先分配一块内存区域，使用完之后在加锁分配另一块。</li></ul></li><li><p>内存分配完成后，会初始化内存为零值。</p></li><li><p>设置对象头</p></li></ul><p>经过上面几部，一个新对象已经产生，但是，这个对象的构造方法还没有执行。</p><h3 id="对象的内存布局" tabindex="-1"><a class="header-anchor" href="#对象的内存布局" aria-hidden="true">#</a> 对象的内存布局</h3><p>一个对象在内存空间中分为三个部分：</p><ul><li><p>对象头：</p><p>32位虚拟机占32bit，64位虚拟机占64bit</p><p>对象头主要包含两类数据</p><ul><li>存储对象自身的运行时数据，包括哈希码（HashCode）、GC分代年龄、锁状态标志、线程持有的锁、偏向线程ID、偏向时间戳等</li><li>存储对象指向它的类型元数据的指针</li></ul></li><li><p>实例数据</p></li><li><p>对齐填充：仅是占位符的作用，对象起始地址必须是8字节的整数倍。</p></li><li></li></ul>`,139);function y(S,w){const a=o("ExternalLinkIcon");return t(),p("div",null,[b,g,n("p",null,[s("博客："),n("a",f,[s("(41条消息) 一文搞懂JVM内存结构_xiaokanfuchen86的博客-CSDN博客_jvm内存结构"),i(a)])]),h])}const q=e(m,[["render",y],["__file","JVM内存结构.html.vue"]]);export{q as default};
