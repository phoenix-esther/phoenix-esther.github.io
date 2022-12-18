import{_ as n,V as s,W as a,X as e}from"./framework-4ec38622.js";const i="/assets/image-b491e0da.png",t="/assets/ff021968-b6a7-423f-ba75-96e4483f53f2-294463dd.png",l="/assets/4993764c-03d1-489d-b3c4-3d65d19043d2-b10bdd24.png",c={},p=e('<h1 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h1><p>动态代理在Java中有着广泛的应用，比如Spring AOP、Hibernate数据查询、测试框架的后端mock、RPC远程调用、Java注解对象获取、日志、用户鉴权、全局性异常处理、性能监控，甚至事务处理等。</p><p>本文主要介绍Java中两种常见的动态代理方式：JDK原生动态代理和CGLIB动态代理。</p><h2 id="模式简介" tabindex="-1"><a class="header-anchor" href="#模式简介" aria-hidden="true">#</a> 模式简介</h2><p>在正式学习动态代理之前，先来学习一下设计模式中的代理模式</p><p><strong>代理模式</strong>：给某一个对象提供一个代理，并由代理对象来控制对真实对象的访问。代理模式是一种结构型设计模式。</p><p>代理模式角色分为 3 种：</p><p><strong>Subject :</strong> 定义代理类和真实主题的公共对外方法，也是代理类代理真实主题的方法；</p><p><strong>RealSubject :</strong> 真正实现业务逻辑的类；</p><p><strong>Proxy :</strong> 用来代理和封装真实主题；</p><p>代理模式的结构比较简单，其核心是代理类，为了让客户端能够<strong>一致性地对待</strong>真实对象和代理对象，在代理模式中引入了抽象层</p><p><img src="'+i+`" alt="image"></p><p>代理模式<strong>按照职责</strong>（使用场景）来分类，至少可以分为以下几类：1、远程代理。 2、虚拟代理。 3、Copy-on-Write 代理。 4、保护（Protect or Access）代理。 5、Cache代理。 6、防火墙（Firewall）代理。 7、同步化（Synchronization）代理。 8、智能引用（Smart Reference）代理等等。</p><p>如果<strong>根据字节码的创建时机</strong>来分类，可以分为静态代理和动态代理：</p><ul><li><p>所谓<strong>静态</strong>也就是在<strong>程序运行前</strong>就已经存在代理类的<strong>字节码文件</strong>，代理类和真实主题角色的关系在运行前就确定了。</p></li><li><p>而动态代理的源码是在程序运行期间由<strong>JVM</strong>根据反射等机制<strong>动态的生成</strong>，所以在运行前并不存在代理类的字节码文件</p></li></ul><h2 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h2><p>我们先通过实例来学习静态代理，然后理解静态代理的缺点，再来学习本文的主角：动态代理</p><p>编写一个接口 UserService ，以及该接口的一个实现类 UserServiceImpl</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>  
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;查询 selectById&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;更新 update&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将通过静态代理对 UserServiceImpl 进行功能增强，在调用 <code>select</code> 和 <code>update</code> 之前记录一些日志。写一个代理类 UserServiceProxy，代理类需要实现 UserService</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceProxy</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token comment">// 被代理的对象</span>
    <span class="token keyword">private</span> <span class="token class-name">UserService</span> target<span class="token punctuation">;</span> 

    <span class="token keyword">public</span> <span class="token class-name">UserServiceProxy</span><span class="token punctuation">(</span><span class="token class-name">UserService</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里才实际调用真实主题角色的方法</span>
        target<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
        <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里才实际调用真实主题角色的方法</span>
        target<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
        <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 在执行方法之前执行</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>     
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;log start time [%s] &quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 在执行方法之后执行</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>      
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;log end time [%s] &quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端测试</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserService</span> userServiceImpl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UserService</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceProxy</span><span class="token punctuation">(</span>userServiceImpl<span class="token punctuation">)</span><span class="token punctuation">;</span>

        proxy<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>log start time <span class="token punctuation">[</span><span class="token class-name">Thu</span> <span class="token class-name">Dec</span> <span class="token number">20</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">13</span><span class="token operator">:</span><span class="token number">25</span> <span class="token constant">CST</span> <span class="token number">2018</span><span class="token punctuation">]</span> 
查询 selectById
log end time <span class="token punctuation">[</span><span class="token class-name">Thu</span> <span class="token class-name">Dec</span> <span class="token number">20</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">13</span><span class="token operator">:</span><span class="token number">25</span> <span class="token constant">CST</span> <span class="token number">2018</span><span class="token punctuation">]</span> 
log start time <span class="token punctuation">[</span><span class="token class-name">Thu</span> <span class="token class-name">Dec</span> <span class="token number">20</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">13</span><span class="token operator">:</span><span class="token number">25</span> <span class="token constant">CST</span> <span class="token number">2018</span><span class="token punctuation">]</span> 
更新 update
log end time <span class="token punctuation">[</span><span class="token class-name">Thu</span> <span class="token class-name">Dec</span> <span class="token number">20</span> <span class="token number">14</span><span class="token operator">:</span><span class="token number">13</span><span class="token operator">:</span><span class="token number">25</span> <span class="token constant">CST</span> <span class="token number">2018</span><span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过静态代理，我们达到了功能增强的目的，而且没有侵入原代码，这是静态代理的一个优点。</p><h3 id="静态代理的缺点" tabindex="-1"><a class="header-anchor" href="#静态代理的缺点" aria-hidden="true">#</a> 静态代理的缺点</h3><p>虽然静态代理实现简单，且不侵入原代码，但是，当场景稍微复杂一些的时候，静态代理的缺点也会暴露出来。</p><p>1、 当需要代理多个类的时候，由于代理对象要实现与目标对象一致的接口，有两种方式：</p><ul><li><p>只维护一个代理类，由这个代理类实现多个接口，但是这样就导致<strong>代理类过于庞大</strong></p></li><li><p>新建多个代理类，每个目标对象对应一个代理类，但是这样会<strong>产生过多的代理类</strong></p></li></ul><p>2、 当接口需要增加、删除、修改方法的时候，目标对象与代理类都要同时修改，<strong>不易维护</strong>。</p><h3 id="如何改进" tabindex="-1"><a class="header-anchor" href="#如何改进" aria-hidden="true">#</a> 如何改进？</h3><p>当然是让代理类<strong>动态的生成</strong>啦，也就是动态代理。</p><p><strong>为什么类可以动态的生成？</strong></p><p>这就涉及到Java虚拟机的<strong>类加载机制</strong>了，推荐翻看《深入理解Java虚拟机》7.3节 类加载的过程。</p><p>Java虚拟机类加载过程主要分为五个阶段：加载、验证、准备、解析、初始化。其中加载阶段需要完成以下3件事情：</p><ol><li>通过一个类的全限定名来获取定义此类的二进制字节流</li><li>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构</li><li>在内存中生成一个代表这个类的 <code>java.lang.Class</code> 对象，作为方法区这个类的各种数据访问入口</li></ol><p>由于虚拟机规范对这3点要求并不具体，所以实际的实现是非常灵活的，关于第1点，<strong>获取类的二进制字节流</strong>（class字节码）就有很多途径：</p><ul><li><p>从ZIP包获取，这是JAR、EAR、WAR等格式的基础</p></li><li><p>从网络中获取，典型的应用是 Applet</p></li><li><p><strong>运行时计算生成</strong>，这种场景使用最多的是动态代理技术，在<code> java.lang.reflect.Proxy</code> 类中，就是用了 <code>ProxyGenerator.generateProxyClass</code> 来为特定接口生成形式为 <code>*$Proxy</code> 的代理类的二进制字节流</p></li><li><p>由其它文件生成，典型应用是JSP，即由JSP文件生成对应的Class类</p></li><li><p>从数据库中获取等等</p></li></ul><p>所以，动态代理就是想办法，根据接口或目标对象，计算出代理类的字节码，然后再加载到JVM中使用。但是如何计算？如何生成？情况也许比想象的复杂得多，我们需要借助现有的方案。</p><h2 id="常见的字节码操作类库" tabindex="-1"><a class="header-anchor" href="#常见的字节码操作类库" aria-hidden="true">#</a> 常见的字节码操作类库</h2><blockquote><p>这里有一些介绍：https://java-source.net/open-source/bytecode-libraries</p></blockquote><ul><li><p>Apache BCEL (Byte Code Engineering Library)：是Java classworking广泛使用的一种框架，它可以深入到JVM汇编语言进行类操作的细节。</p></li><li><p>ObjectWeb ASM：是一个Java字节码操作框架。它可以用于直接以二进制形式动态生成stub根类或其他代理类，或者在加载时动态修改类。</p></li><li><p>CGLIB(Code Generation Library)：是一个功能强大，高性能和高质量的代码生成库，用于扩展JAVA类并在运行时实现接口。</p></li><li><p>Javassist：是Java的加载时反射系统，它是一个用于在Java中编辑字节码的类库; 它使Java程序能够在运行时定义新类，并在JVM加载之前修改类文件。</p></li></ul><h3 id="实现动态代理的思考方向" tabindex="-1"><a class="header-anchor" href="#实现动态代理的思考方向" aria-hidden="true">#</a> 实现动态代理的思考方向</h3><p>为了让生成的代理类与目标对象（真实主题角色）保持一致性，从现在开始将介绍以下两种最常见的方式：</p><ol><li>通过实现接口的方式 -&gt; JDK动态代理</li><li>通过继承类的方式 -&gt; CGLIB动态代理</li></ol><p>注：使用ASM对使用者要求比较高，使用Javassist会比较麻烦</p><h2 id="jdk动态代理" tabindex="-1"><a class="header-anchor" href="#jdk动态代理" aria-hidden="true">#</a> JDK动态代理</h2><p>JDK动态代理主要涉及两个类：<code>java.lang.reflect.Proxy</code> 和 <code>java.lang.reflect.InvocationHandler</code>，我们仍然通过案例来学习</p><p>编写一个调用逻辑处理器 LogHandler 类，提供日志增强功能，并实现 InvocationHandler 接口；在 LogHandler 中维护一个目标对象，这个对象是被代理的对象（真实主题角色）；在 <code>invoke</code> 方法中编写方法调用的逻辑处理</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.Date;

public class LogHandler implements InvocationHandler {
    // 被代理的对象，实际的方法执行者
    Object target;  

    public LogHandler(Object target) {
        this.target = target;
    }
    @Override
    public Object invoke(Object proxy, Method method, Object[] args){
        before();
        // 调用 target 的 method 方法
        Object result = method.invoke(target, args);  
        after();
        // 返回方法的执行结果
        return result;  
    }
    // 调用invoke方法之前执行
    private void before() {
        System.out.println(String.format(&quot;log start time [%s] &quot;, new Date()));
    }
    // 调用invoke方法之后执行
    private void after() {
        System.out.println(String.format(&quot;log end time [%s] &quot;, new Date()));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写客户端，获取动态生成的代理类的对象须借助 Proxy 类的 newProxyInstance 方法，具体步骤可见代码和注释</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import proxy.UserService;
import proxy.UserServiceImpl;
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Proxy;

public class Client2 {
    public static void main(String[] args) throws IllegalAccessException, InstantiationException {
        // 设置变量可以保存动态代理类，默认名称以 $Proxy0 格式命名
        // System.getProperties().setProperty(&quot;sun.misc.ProxyGenerator.saveGeneratedFiles&quot;, &quot;true&quot;);
        // 1. 创建被代理的对象，UserService接口的实现类
        UserServiceImpl userServiceImpl = new UserServiceImpl();
        // 2. 获取对应的 ClassLoader
        ClassLoader classLoader = userServiceImpl.getClass().getClassLoader();
        // 3. 获取所有接口的Class，这里的UserServiceImpl只实现了一个接口UserService，
        Class[] interfaces = userServiceImpl.getClass().getInterfaces();
        // 4. 创建一个将传给代理类的调用请求处理器，处理所有的代理对象上的方法调用
        //  这里创建的是一个自定义的日志处理器，须传入实际的执行对象 userServiceImpl
        InvocationHandler logHandler = new LogHandler(userServiceImpl);
        /**
         * 5.根据上面提供的信息，创建代理对象 在这个过程中，
         *  a.JDK会通过根据传入的参数信息动态地在内存中创建和.class 文件等同的字节码
         *  b.然后根据相应的字节码转换成对应的class，
         *  c.然后调用newInstance()创建代理实例
         */
        UserService proxy = (UserService) Proxy.newProxyInstance(classLoader, interfaces, logHandler);
        // 调用代理的方法
        proxy.select();
        proxy.update();
        
        // 保存JDK动态代理生成的代理类，类名保存为 UserServiceProxy
        // ProxyUtils.generateClassFile(userServiceImpl.getClass(), &quot;UserServiceProxy&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>log start time [Thu Dec 20 16:55:19 CST 2018] 
查询 selectById
log end time [Thu Dec 20 16:55:19 CST 2018] 
log start time [Thu Dec 20 16:55:19 CST 2018] 
更新 update
log end time [Thu Dec 20 16:55:19 CST 2018] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>InvocationHandler 和 Proxy 的主要方法介绍如下：</p><p><strong>java.lang.reflect.InvocationHandler</strong></p><p><code>Object invoke(Object proxy, Method method, Object[] args)</code> 定义了代理对象调用方法时希望执行的动作，用于集中处理在动态代理类对象上的方法调用</p><p><strong>java.lang.reflect.Proxy</strong></p><p><code>static InvocationHandler getInvocationHandler(Object proxy)</code> 用于获取指定代理对象所关联的调用处理器</p><p><code>static Class&lt;?&gt; getProxyClass(ClassLoader loader, Class&lt;?&gt;... interfaces)</code> 返回指定接口的代理类</p><p><code>static Object newProxyInstance(ClassLoader loader, Class&lt;?&gt;[] interfaces, InvocationHandler h)</code> 构造实现指定接口的代理类的一个新实例，所有方法会调用给定处理器对象的 invoke 方法</p><p><code>static boolean isProxyClass(Class&lt;?&gt; cl)</code> 返回 cl 是否为一个代理类</p><h4 id="代理类的调用过程" tabindex="-1"><a class="header-anchor" href="#代理类的调用过程" aria-hidden="true">#</a> <strong>代理类的调用过程</strong></h4><p>生成的代理类到底长什么样子呢？借助下面的工具类，把代理类保存下来再探个究竟</p><p>（通过设置环境变量sun.misc.ProxyGenerator.saveGeneratedFiles=true也可以保存代理类）</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import sun.misc.ProxyGenerator;
import java.io.FileOutputStream;
import java.io.IOException;

public class ProxyUtils {
    /**
     * 将根据类信息动态生成的二进制字节码保存到硬盘中，默认的是clazz目录下
     * params: clazz 需要生成动态代理类的类
     * proxyName: 为动态生成的代理类的名称
     */
    public static void generateClassFile(Class clazz, String proxyName) {
        // 根据类信息和提供的代理类名称，生成字节码
        byte[] classFile = ProxyGenerator.generateProxyClass(proxyName, clazz.getInterfaces());
        String paths = clazz.getResource(&quot;.&quot;).getPath();
        System.out.println(paths);
        FileOutputStream out = null;
        try {
            //保留到硬盘中
            out = new FileOutputStream(paths + proxyName + &quot;.class&quot;);
            out.write(classFile);
            out.flush();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                out.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 Client2 测试类的main的最后面加入一行代码</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 保存JDK动态代理生成的代理类，类名保存为 UserServiceProxy
ProxyUtils.generateClassFile(userServiceImpl.getClass(), &quot;UserServiceProxy&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>IDEA 再次运行之后就可以在 target 的类路径下找到 UserServiceProxy.class，双击后IDEA的反编译插件会将该二进制class文件</p><p><img src="`+t+`" alt="ff021968-b6a7-423f-ba75-96e4483f53f2"></p><p>UserServiceProxy 的代码如下所示：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Proxy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">UndeclaredThrowableException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">proxy<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">UserServiceProxy</span> <span class="token keyword">extends</span> <span class="token class-name">Proxy</span> <span class="token keyword">implements</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Method</span> m1<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Method</span> m2<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Method</span> m4<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Method</span> m0<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Method</span> m3<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">UserServiceProxy</span><span class="token punctuation">(</span><span class="token class-name">InvocationHandler</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token punctuation">{</span>
        <span class="token comment">// 省略...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token punctuation">{</span>
        <span class="token comment">// 省略...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span>h<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> m4<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> <span class="token operator">|</span> <span class="token class-name">Error</span> var2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> var2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> var3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UndeclaredThrowableException</span><span class="token punctuation">(</span>var3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token punctuation">{</span>
        <span class="token comment">// 省略...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span>  <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span>h<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> m3<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> <span class="token operator">|</span> <span class="token class-name">Error</span> var2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> var2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> var3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UndeclaredThrowableException</span><span class="token punctuation">(</span>var3<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            m1 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;java.lang.Object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;equals&quot;</span><span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;java.lang.Object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            m2 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;java.lang.Object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;toString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            m4 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;proxy.UserService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;select&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            m0 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;java.lang.Object&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;hashCode&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            m3 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;proxy.UserService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token string">&quot;update&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NoSuchMethodException</span> var2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NoSuchMethodError</span><span class="token punctuation">(</span>var2<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> var3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NoClassDefFoundError</span><span class="token punctuation">(</span>var3<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 UserServiceProxy 的代码中我们可以发现：</p><ul><li><p>UserServiceProxy 继承了 Proxy 类，并且实现了被代理的所有接口，以及equals、hashCode、toString等方法</p></li><li><p>由于 UserServiceProxy 继承了 Proxy 类，所以每个代理类都会关联一个 InvocationHandler 方法调用处理器</p></li><li><p>类和所有方法都被 <code>public final</code> 修饰，所以代理类只可被使用，不可以再被继承</p></li><li><p>每个方法都有一个 Method 对象来描述，Method 对象在static静态代码块中创建，以 <code>m + 数字</code> 的格式命名</p></li><li><p>调用方法的时候通过 <code>super.h.invoke(this, m1, (Object[])null);</code> 调用，其中的 <code>super.h.invoke</code> 实际上是在创建代理的时候传递给 <code>Proxy.newProxyInstance</code> 的 LogHandler 对象，它继承 InvocationHandler 类，负责实际的调用处理逻辑</p></li></ul><p>而 LogHandler 的 invoke 方法接收到 method、args 等参数后，进行一些处理，然后通过反射让被代理的对象 target 执行方法</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>@Override
public Object invoke(Object proxy, Method method, Object[] args) {
    before();
     // 调用 target 的 method 方法
    Object result = method.invoke(target, args);      
    after();
    // 返回方法的执行结果
    return result;  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JDK动态代理执行方法调用的过程简图如下：</p><p><img src="`+l+`" alt="4993764c-03d1-489d-b3c4-3d65d19043d2"></p><p>代理类的调用过程相信大家都明了了，而关于Proxy的源码解析，还请大家另外查阅其他文章或者直接看源码</p><h2 id="cglib动态代理" tabindex="-1"><a class="header-anchor" href="#cglib动态代理" aria-hidden="true">#</a> CGLIB动态代理</h2><p>maven引入CGLIB包，然后编写一个UserDao类，它没有接口，只有两个方法，select() 和 update()</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class UserDao {
    public void select() {
        System.out.println(&quot;UserDao 查询 selectById&quot;);
    }
    public void update() {
        System.out.println(&quot;UserDao 更新 update&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写一个 LogInterceptor ，继承了 MethodInterceptor，用于方法的拦截回调</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import java.lang.reflect.Method;
import java.util.Date;

public class LogInterceptor implements MethodInterceptor {
    /**
     * @param object 表示要进行增强的对象
     * @param method 表示拦截的方法
     * @param objects 数组表示参数列表，基本数据类型需要传入其包装类型，如int--&gt;Integer、long-Long、double--&gt;Double
     * @param methodProxy 表示对方法的代理，invokeSuper方法表示对被代理对象方法的调用
     * @return 执行结果
     * @throws Throwable
     */
    @Override
    public Object intercept(Object object, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        before();
        // 注意这里是调用 invokeSuper 而不是 invoke，否则死循环，
        // methodProxy.invokesuper执行的是原始类的方法，
        // method.invoke执行的是子类的方法
        Object result = methodProxy.invokeSuper(object, objects);   
        after();
        return result;
    }
    private void before() {
        System.out.println(String.format(&quot;log start time [%s] &quot;, new Date()));
    }
    private void after() {
        System.out.println(String.format(&quot;log end time [%s] &quot;, new Date()));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import net.sf.cglib.proxy.Enhancer;

public class CglibTest {
    public static void main(String[] args) {
        DaoProxy daoProxy = new DaoProxy(); 
        Enhancer enhancer = new Enhancer();
        // 设置超类，cglib是通过继承来实现的
        enhancer.setSuperclass(Dao.class);  
        enhancer.setCallback(daoProxy);

        // 创建代理类
        Dao dao = (Dao)enhancer.create();   
        dao.update();
        dao.select();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-Plain%20Text line-numbers-mode" data-ext="Plain%20Text"><pre class="language-Plain%20Text"><code>log start time [Fri Dec 21 00:06:40 CST 2018] 
UserDao 查询 selectById
log end time [Fri Dec 21 00:06:40 CST 2018] 
log start time [Fri Dec 21 00:06:40 CST 2018] 
UserDao 更新 update
log end time [Fri Dec 21 00:06:40 CST 2018] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以进一步多个 MethodInterceptor 进行过滤筛选</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class LogInterceptor2 implements MethodInterceptor {
    @Override
    public Object intercept(Object object, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
        before();
        Object result = methodProxy.invokeSuper(object, objects);
        after();
        return result;
    }
    private void before() {
        System.out.println(String.format(&quot;log2 start time [%s] &quot;, new Date()));
    }
    private void after() {
        System.out.println(String.format(&quot;log2 end time [%s] &quot;, new Date()));
    }
}

// 回调过滤器: 在CGLib回调时可以设置对不同方法执行不同的回调逻辑，或者根本不执行回调。
public class DaoFilter implements CallbackFilter {
    @Override
    public int accept(Method method) {
        if (&quot;select&quot;.equals(method.getName())) {
            return 0;   // Callback 列表第1个拦截器
        }
        return 1;   // Callback 列表第2个拦截器，return 2 则为第3个，以此类推
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次测试</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class CglibTest2 {
    public static void main(String[] args) {
        LogInterceptor logInterceptor = new LogInterceptor();
        LogInterceptor2 logInterceptor2 = new LogInterceptor2();
        Enhancer enhancer = new Enhancer();
        // 设置超类，cglib是通过继承来实现的
        enhancer.setSuperclass(UserDao.class);   
        // 设置多个拦截器，NoOp.INSTANCE是一个空拦截器，不做任何处理
        enhancer.setCallbacks(new Callback[]{logInterceptor, logInterceptor2, NoOp.INSTANCE});   
        enhancer.setCallbackFilter(new DaoFilter());

        // 创建代理类
        UserDao proxy = (UserDao) enhancer.create();  
        proxy.select();
        proxy.update();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><div class="language-Plain%20Text line-numbers-mode" data-ext="Plain%20Text"><pre class="language-Plain%20Text"><code>log start time [Fri Dec 21 00:22:39 CST 2018] 
UserDao 查询 selectById
log end time [Fri Dec 21 00:22:39 CST 2018] 
log2 start time [Fri Dec 21 00:22:39 CST 2018] 
UserDao 更新 update
log2 end time [Fri Dec 21 00:22:39 CST 2018] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CGLIB 创建动态代理类的模式是：</p><ol><li>查找目标类上的所有非final 的public类型的方法定义；</li><li>将这些方法的定义转换成字节码；</li><li>将组成的字节码转换成相应的代理的class对象；</li><li>实现 MethodInterceptor接口，用来处理对代理类上所有方法的请求</li></ol><h3 id="jdk动态代理与cglib动态代理对比" tabindex="-1"><a class="header-anchor" href="#jdk动态代理与cglib动态代理对比" aria-hidden="true">#</a> <strong>JDK动态代理与CGLIB动态代理对比</strong></h3><p>JDK动态代理：基于Java反射机制实现，必须要实现了接口的业务类才能用这种办法生成代理对象。</p><p>cglib动态代理：基于ASM机制实现，通过生成业务类的子类作为代理类。</p><p>JDK Proxy 的优势：</p><ul><li><p>最小化依赖关系，减少依赖意味着简化开发和维护，JDK 本身的支持，可能比 cglib 更加可靠。</p></li><li><p>平滑进行 JDK 版本升级，而字节码类库通常需要进行更新以保证在新版 Java 上能够使用。</p></li><li><p>代码实现简单。</p></li></ul><p>基于类似 cglib 框架的优势：</p><ul><li><p>无需实现接口，达到代理类无侵入</p></li><li><p>只操作我们关心的类，而不必为其他相关类增加工作量。</p></li><li><p>高性能</p></li></ul><h3 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> <strong>面试题</strong></h3><blockquote><p>来源于网上，用于帮助理解和掌握，欢迎补充</p></blockquote><h4 id="描述动态代理的几种实现方式-分别说出相应的优缺点" tabindex="-1"><a class="header-anchor" href="#描述动态代理的几种实现方式-分别说出相应的优缺点" aria-hidden="true">#</a> <strong>描述动态代理的几种实现方式？分别说出相应的优缺点</strong></h4><p>代理可以分为 &quot;静态代理&quot; 和 &quot;动态代理&quot;，动态代理又分为 &quot;JDK动态代理&quot; 和 &quot;CGLIB动态代理&quot; 实现。</p><p><strong>静态代理</strong>：代理对象和实际对象都继承了同一个接口，在代理对象中指向的是实际对象的实例，这样对外暴露的是代理对象而真正调用的是 Real Object</p><ul><li><p><strong>优点</strong>：可以很好的保护实际对象的业务逻辑对外暴露，从而提高安全性。</p></li><li><p><strong>缺点</strong>：不同的接口要有不同的代理类实现，会很冗余</p></li></ul><p><strong>JDK 动态代理</strong>：</p><ul><li><p>为了解决静态代理中，生成大量的代理类造成的冗余；</p></li><li><p>JDK 动态代理只需要实现 InvocationHandler 接口，重写 invoke 方法便可以完成代理的实现，</p></li><li><p>jdk的代理是利用反射生成代理类 Proxyxx.class 代理类字节码，并生成对象</p></li><li><p>jdk动态代理之所以<strong>只能代理接口</strong>是因为<strong>代理类本身已经extends了Proxy，而java是不允许多重继承的</strong>，但是允许实现多个接口</p></li><li><p><strong>优点</strong>：解决了静态代理中冗余的代理实现类问题。</p></li><li><p><strong>缺点</strong>：JDK 动态代理是基于接口设计实现的，如果没有接口，会抛异常。</p></li></ul><p><strong>CGLIB 代理</strong>：</p><ul><li><p>由于 JDK 动态代理限制了只能基于接口设计，而对于没有接口的情况，JDK方式解决不了；</p></li><li><p>CGLib 采用了非常底层的字节码技术，其原理是通过字节码技术为一个类创建子类，并在子类中采用方法拦截的技术拦截所有父类方法的调用，顺势织入横切逻辑，来完成动态代理的实现。</p></li><li><p>实现方式实现 MethodInterceptor 接口，重写 intercept 方法，通过 Enhancer 类的回调方法来实现。</p></li><li><p>但是CGLib在创建代理对象时所花费的时间却比JDK多得多，所以对于单例的对象，因为无需频繁创建对象，用CGLib合适，反之，使用JDK方式要更为合适一些。</p></li><li><p>同时，由于CGLib由于是采用动态创建子类的方法，对于final方法，无法进行代理。</p></li><li><p><strong>优点</strong>：没有接口也能实现动态代理，而且采用字节码增强技术，性能也不错。</p></li><li><p><strong>缺点</strong>：技术实现相对难理解些。</p></li></ul><h4 id="cglib-对接口实现代理" tabindex="-1"><a class="header-anchor" href="#cglib-对接口实现代理" aria-hidden="true">#</a> <strong>CGlib 对接口实现代理？</strong></h4><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;
import proxy.UserService;
import java.lang.reflect.Method;

/**
 * 创建代理类的工厂 该类要实现 MethodInterceptor 接口。
 * 该类中完成三样工作：
 * （1）声明目标类的成员变量，并创建以目标类对象为参数的构造器。用于接收目标对象
 * （2）定义代理的生成方法，用于创建代理对象。方法名是任意的。代理对象即目标类的子类
 * （3）定义回调接口方法。对目标类的增强这在这里完成
 */
public class CGLibFactory implements MethodInterceptor {
    // 声明目标类的成员变量
    private UserService target;

    public CGLibFactory(UserService target) {
        this.target = target;
    }
    // 定义代理的生成方法,用于创建代理对象
    public UserService myCGLibCreator() {
        Enhancer enhancer = new Enhancer();
        // 为代理对象设置父类，即指定目标类
        enhancer.setSuperclass(UserService.class);
        /**
         * 设置回调接口对象 注意，只所以在setCallback()方法中可以写上this，
         * 是因为MethodIntecepter接口继承自Callback，是其子接口
         */
        enhancer.setCallback(this);
        // create用以生成CGLib代理对象
        return (UserService) enhancer.create();
    }
    @Override
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        System.out.println(&quot;start invoke &quot; + method.getName());
        Object result = method.invoke(target, args);
        System.out.println(&quot;end invoke &quot; + method.getName());
        return result;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,116),o=[p];function r(u,d){return s(),a("div",null,o)}const m=n(c,[["render",r],["__file","design-proxy.html.vue"]]);export{m as default};
