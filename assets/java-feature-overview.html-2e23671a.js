import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as n,c as o,a as e,b as a,d as t,e as r}from"./app-e53dd85b.js";const c="/assets/202311181000002-4b59094f.png",_="/assets/2023112521000002-6992dcd5.png",h="/assets/202311271000001-daef4e61.png",d="/assets/202311272000001-20c076e0.png",J="/assets/202311273000001-8047634b.png",P="/assets/202311274000001-9178103f.png",u="/assets/202311275000001-ce7e24cd.png",p="/assets/202311211000001-8d39557e.png",v="/assets/202311276000001-a768fdd6.png",E="/assets/202311277000001-ef80a88e.png",w="/assets/202311282000001-f2fcc74b.png",f="/assets/202311292000001-2195784a.png",m="/assets/202311301000001-a77374f4.png",k="/assets/202311302000001-4365eb73.png",g={},b=r('<h1 id="java-8-新特性知识体系" tabindex="-1"><a class="header-anchor" href="#java-8-新特性知识体系" aria-hidden="true">#</a> Java 8+ 新特性知识体系</h1><blockquote><p>Java 现在发布的版本很快，每年两个，但是真正会被大规模使用的是 3 年一个的 LTS 版本。</p></blockquote><ul><li>每 3 年发布一个 LTS（Long-Term Support），长期维护版本。意味着只有<strong>Java 8 ，Java 11， Java 17，Java 21 才可能被大规模使用</strong>。</li><li>每年发布两个正式版本，分别是 3 月份和 9 月份。</li></ul><p>在 Java 版本中，一个特性的发布都会经历孵化阶段、预览阶段和正式版本。其中孵化和预览可能会跨越多个 Java 版本。所以大明哥在介绍 Java 新特性时采用如下这种策略：</p><ol><li>每个版本的新特性，大明哥都会做一个简单的概述。</li><li>单独出文介绍跟编码相关的新特性，一些如 JVM、性能优化的新特性不单独出文介绍。</li><li>孵化阶段的新特性不出文介绍。</li><li>首次引入为预览特性、新特性增强、首次引入的正式特性，单独出文做详细介绍。</li><li>影响比较大的新特性如果在现阶段没有转正的新特性不单独出文介绍，单独出文的重大特性一般都在 Java 21 版本之前已转为正式特性，例如： <ol><li>虚拟线程，Java 19 引入的，在 Java 21 转正，所以大明哥会在 Java 19 单独出文做详细介绍</li><li>作用域值，Java 20 引入的，但是在 Java 21 还处于预览阶段，所以不做介绍，等将来转正后会详细介绍</li></ol></li></ol><h2 id="java-8-新特性" tabindex="-1"><a class="header-anchor" href="#java-8-新特性" aria-hidden="true">#</a> Java 8 新特性</h2><p><img src="'+c+'" alt="img"></p>',7),j={href:"https://www.skjava.com/series/article/1747461365",target:"_blank",rel:"noopener noreferrer"},A={href:"https://www.skjava.com/series/article/1841959591",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.skjava.com/series/article/1019158498",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.skjava.com/series/article/9298099860",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.skjava.com/series/article/6972779809",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.skjava.com/series/article/1810194665",target:"_blank",rel:"noopener noreferrer"},R={href:"https://www.skjava.com/series/article/1658730277",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.skjava.com/series/article/1765935055",target:"_blank",rel:"noopener noreferrer"},F={href:"https://www.skjava.com/series/article/8453320489",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.skjava.com/series/article/1066055319",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.skjava.com/series/article/2019475189",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.skjava.com/series/article/6176475946",target:"_blank",rel:"noopener noreferrer"},D=e("li",null,"JEP 174：Nashorn JavaScript 引擎",-1),L=e("li",null,"JEP 122：移除Permgen",-1),M=e("h2",{id:"java-9-新特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-9-新特性","aria-hidden":"true"},"#"),a(" Java 9 新特性")],-1),H=e("p",null,[e("img",{src:_,alt:"img"})],-1),V={href:"https://www.skjava.com/series/article/2044128092",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.skjava.com/series/article/6358413511",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.skjava.com/series/article/2132633297",target:"_blank",rel:"noopener noreferrer"},K={href:"https://www.skjava.com/series/article/4535468349",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.skjava.com/series/article/2547807010",target:"_blank",rel:"noopener noreferrer"},W={href:"https://www.skjava.com/series/article/1624717282",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.skjava.com/series/article/1487108972",target:"_blank",rel:"noopener noreferrer"},y=e("li",null,"JEP 102：Process API",-1),z=e("li",null,"JEP 264：平台日志 API 和 服务",-1),Q=e("li",null,"JEP 266: 反应式流（Reactive Streams）",-1),X=e("li",null,"JEP 224: HTML5 Javadoc",-1),Y=e("li",null,"JEP 238: 多版本兼容 JAR 文件",-1),$=e("li",null,"JEP 277：改进的弃用注解 @Deprecated",-1),ee=e("li",null,"JEP 213：改进钻石操作符(Diamond Operator)",-1),ae={href:"https://www.skjava.com/series/article/1843207164",target:"_blank",rel:"noopener noreferrer"},le=e("h2",{id:"java-10-新特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-10-新特性","aria-hidden":"true"},"#"),a(" Java 10 新特性")],-1),te=e("p",null,[e("img",{src:h,alt:"img"})],-1),re={href:"https://www.skjava.com/series/article/1075067951",target:"_blank",rel:"noopener noreferrer"},ie=r("<li>JEP 304：统一的垃圾回收接口</li><li>JEP 307：并行全垃圾回收器 G1</li><li>JEP 310：应用程序类数据共享</li><li>JEP 312：线程-局部变量管控</li><li>JEP 313：移除 Native-Header 自动生成工具</li><li>JEP 314：额外的 Unicode 语言标签扩展</li><li>JEP 316：备用存储装置上的堆分配</li><li>JEP 317：基于 Java 的 实验性 JIT 编译器</li><li>JEP 319：根证书认证</li><li>JEP 322：基于时间的版本发布模式</li><li>新增 API</li>",11),se=e("h2",{id:"java-11-新特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-11-新特性","aria-hidden":"true"},"#"),a(" Java 11 新特性")],-1),ne=e("p",null,[e("img",{src:d,alt:"img"})],-1),oe=e("li",null,"JEP 181: 基于嵌套的访问控制",-1),ce={href:"https://www.skjava.com/series/article/9457186945",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://www.skjava.com/series/article/1131244380",target:"_blank",rel:"noopener noreferrer"},he={href:"https://www.skjava.com/series/article/1501251408",target:"_blank",rel:"noopener noreferrer"},de=e("li",null,"JEP 318：Epsilon—低开销垃圾回收器",-1),Je=e("li",null,"ZGC：可伸缩低延迟垃圾收集器",-1),Pe=e("li",null,"JEP 335：废弃 Nashorn JavaScript 引擎",-1),ue={href:"https://www.skjava.com/series/article/8589000958",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://www.skjava.com/series/article/1414447929",target:"_blank",rel:"noopener noreferrer"},ve=e("li",null,"JEP 328：飞行记录器（Flight Recorder）",-1),Ee=e("li",null,"JEP 330：运行单文件源码程序",-1),we=e("li",null,"JEP 320：删除 Java EE 和 corba 模块",-1),fe=e("h2",{id:"java-12-新特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-12-新特性","aria-hidden":"true"},"#"),a(" Java 12 新特性")],-1),me=e("p",null,[e("img",{src:J,alt:"img"})],-1),ke=e("li",null,"JEP 189：Shenandoah 垃圾收集器（预览特性）",-1),ge={href:"https://www.skjava.com/series/article/5782529848",target:"_blank",rel:"noopener noreferrer"},be=e("li",null,"JEP 334：JVM 常量 API",-1),je=e("li",null,"JEP 230：微基准测试套件（JMH）的支持",-1),Ae={href:"https://www.skjava.com/series/article/6401260394",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://www.skjava.com/series/article/2000691792",target:"_blank",rel:"noopener noreferrer"},Se={href:"https://www.skjava.com/series/article/1940664105",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://www.skjava.com/series/article/2901979956",target:"_blank",rel:"noopener noreferrer"},Ce=e("li",null,"JEP 340：移除多余ARM64实现",-1),Re=e("li",null,"JEP 341：默认CDS归档",-1),Ne=e("li",null,"JEP 344：G1的可中断 mixed GC",-1),Fe=e("h2",{id:"java-13-新特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-13-新特性","aria-hidden":"true"},"#"),a(" Java 13 新特性")],-1),Ge=e("p",null,[e("img",{src:P,alt:"img"})],-1),Oe={href:"https://www.skjava.com/series/article/9120322209",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://www.skjava.com/series/article/7430445828",target:"_blank",rel:"noopener noreferrer"},De=e("li",null,"JEP 353：重构 Socket API",-1),Le=e("li",null,"JEP 350：动态 CDS",-1),Me=e("li",null,"JEP 351：增强 ZGC 释放未使用内存",-1),He=e("h2",{id:"java-14-新特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-14-新特性","aria-hidden":"true"},"#"),a(" Java 14 新特性")],-1),Ve=e("p",null,[e("img",{src:u,alt:"img"})],-1),Ze=e("li",null,"JEP 361： 表达式（正式特性）",-1),Be=e("li",null,"JEP 368：增强文本块（第二次预览）",-1),Ke={href:"https://www.skjava.com/series/article/8932587293",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://www.skjava.com/series/article/3436282193",target:"_blank",rel:"noopener noreferrer"},We={href:"https://www.skjava.com/series/article/1662953266",target:"_blank",rel:"noopener noreferrer"},qe=e("li",null,"JEP 343：打包工具（孵化）",-1),ye=e("li",null,"JEP 345：NUMA-Aware 内存分配",-1),ze=e("li",null,"JEP 349：JFR Event Streaming",-1),Qe=e("li",null,"JEP 364：macOS 上的 ZGC（实验性）",-1),Xe=e("li",null,"JEP 365：Windows 上的 ZGC（实验性）",-1),Ye=e("li",null,"JEP 366：弃用 ParallelScavenge + SerialOld GC 组合",-1),$e=e("li",null,"JEP 367：删除 Pack200 工具和 API",-1),ea=e("li",null,"JEP 363： 删除 CMS 垃圾收集器",-1),aa=e("li",null,"JEP 370：外部存储器访问 API（孵化器版）",-1),la=e("h2",{id:"java-15-新特性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#java-15-新特性","aria-hidden":"true"},"#"),a(" Java 15 新特性")],-1),ta=e("p",null,[e("img",{src:p,alt:"img"})],-1),ra=e("li",null,"JEP 339：Edwards-Curve 数字签名算法 (EdDSA)",-1),ia={href:"https://www.skjava.com/series/article/1777232038",target:"_blank",rel:"noopener noreferrer"},sa={href:"https://www.skjava.com/series/article/1690418335",target:"_blank",rel:"noopener noreferrer"},na=r("<li>JEP 372：移除 Nashorn JavaScript 引擎</li><li>JEP 373：重新实现 DatagramSocket API</li><li>JEP 374：禁用偏向锁定</li><li>JEP 375：模式匹配的 instanceof（第二次预览）</li><li>JEP 377：ZGC—可伸缩低延迟垃圾收集器（正式特性）</li><li>JEP 378：文本块（正式特性）</li><li>JEP 379：Shenandoah—低暂停时间垃圾收集器（正式特性）</li><li>JEP 381：移除 Solaris 和 SPARC 支持</li><li>JEP 383：外部存储器访问 API （二次孵化器版）</li><li>JEP 384： Record (第二次预览)</li><li>JEP 385： 废除 RMI 激活</li>",11),oa=r('<h2 id="java-16-新特性" tabindex="-1"><a class="header-anchor" href="#java-16-新特性" aria-hidden="true">#</a> Java 16 新特性</h2><p><img src="'+v+'" alt="img"></p><ul><li>JEP 338：向量 API（孵化器）</li><li>JEP 347：启用 C++14 语言特性</li><li>JEP 357：将JDK的源代码库从Mercurial迁移到Git</li><li>JEP 369：将JDK的源代码库托管到GitHub</li><li>JEP 376：ZGC 并发线程处理</li><li>JEP 380：Unix-Domain 套接字通道</li><li>JEP 386：AlpineLinux 移植</li><li>JEP 387：弹性元空间</li><li>JEP 388：Windows/AArch64 移植</li><li>JEP 389：外部函数与内存 API（孵化器）</li><li>JEP 390：对基于值的类发出警告</li><li>JEP 392：打包工具（正式版）</li><li>JEP 393：外部存储器访问 API（第三次孵化）</li><li>JEP 394：instanceof 模式匹配（正式特性）</li><li>JEP 395：Records (正式特性)</li><li>JEP 396：默认强封装 JDK 内部元素</li><li>JEP 397：密封类（第二预览）</li></ul><h2 id="java-17-新特性" tabindex="-1"><a class="header-anchor" href="#java-17-新特性" aria-hidden="true">#</a> Java 17 新特性</h2><p><img src="'+E+'" alt="img"></p>',5),ca={href:"https://www.skjava.com/series/article/1777241237",target:"_blank",rel:"noopener noreferrer"},_a=e("li",null,"JEP 382：新的 macOS 渲染管线",-1),ha=e("li",null,"JEP 391：macOS/AArch64 端口",-1),da=e("li",null,"JEP 398：移除 Applet API",-1),Ja={href:"https://www.skjava.com/series/article/9479813794",target:"_blank",rel:"noopener noreferrer"},Pa=e("li",null,"JEP 407：删除 RMI 激活",-1),ua=e("li",null,"JEP 409：密封类（正式特性）",-1),pa=e("li",null,"JEP 410：移除实验性的 AOT 和 JIT 编译",-1),va=e("li",null,"JEP 411：废弃安全管理器",-1),Ea=e("li",null,"JEP 412：外部函数与内存 API（第二次孵化）",-1),wa=e("li",null,"JEP 414：向量 API（第二次孵化）",-1),fa=r('<h2 id="java-18-新特性" tabindex="-1"><a class="header-anchor" href="#java-18-新特性" aria-hidden="true">#</a> Java 18 新特性</h2><p><img src="'+w+'" alt="img"></p><ul><li>JEP 400：默认UTF-8编码</li><li>JEP 408：简易Web服务器</li><li>JEP 413：支持在 Java API 文档中加入代码片段</li><li>JEP 416：用方法句柄重新实现核心反射</li><li>JEP 417：向量 API（第三孵化器）</li><li>JEP 418：互联网地址解析 SPI</li><li>JEP 419：外部函数和内存 API（第三孵化器）</li><li>JEP 420： 模式匹配 Switch 表达式（预览）</li><li>JEP 421：弃用 Finalization 功能</li></ul><h2 id="java-19-新特性" tabindex="-1"><a class="header-anchor" href="#java-19-新特性" aria-hidden="true">#</a> Java 19 新特性</h2><p><img src="'+f+'" alt="img"></p>',5),ma={href:"https://www.skjava.com/series/article/9674439600",target:"_blank",rel:"noopener noreferrer"},ka=e("li",null,"JEP 422：JDK移植到Linux/RISC-V",-1),ga=e("li",null,"JEP 424：外部函数和内存API（预览）",-1),ba={href:"https://www.skjava.com/series/article/1865448759",target:"_blank",rel:"noopener noreferrer"},ja=e("li",null,"JEP 426：向量API（第四次孵化）",-1),Aa=e("li",null,"JEP 427：模式匹配的 Switch（第三次预览）",-1),Ia=e("li",null,"JEP 428：结构化并发（孵化功能）",-1),Sa=r('<h2 id="java-20-新特性" tabindex="-1"><a class="header-anchor" href="#java-20-新特性" aria-hidden="true">#</a> Java 20 新特性</h2><p><img src="'+m+'" alt="img"></p><ul><li>JEP 429：作用域值（第一次孵化）</li><li>JEP 432：Record 模式（第二次预览）</li><li>JEP 433：模式匹配的 Switch 表达式（第四次预览）</li><li>JEP 434：外部函数与内存 API（第二次预览）</li><li>JEP 436：虚拟线程（第二次预览）</li><li>JEP 437：结构化并发（第二次孵化）</li><li>JEP 438：向量 API（第五次孵化）</li></ul><h2 id="java-21-新特性" tabindex="-1"><a class="header-anchor" href="#java-21-新特性" aria-hidden="true">#</a> Java 21 新特性</h2><p><img src="'+k+'" alt="img"></p>',5),xa={href:"https://www.skjava.com/series/article/1880587197",target:"_blank",rel:"noopener noreferrer"},Ca={href:"https://www.skjava.com/series/article/1895017259",target:"_blank",rel:"noopener noreferrer"},Ra=e("li",null,"JEP 439：分代 ZGC",-1),Na=e("li",null,"JEP 440：Record 模式",-1),Fa=e("li",null,"JEP 441：switch 模式匹配",-1),Ga=e("li",null,"JEP 442：外部函数和内存 API （第三次预览）",-1),Oa={href:"https://www.skjava.com/series/article/1961861176",target:"_blank",rel:"noopener noreferrer"},Ta=e("li",null,"JEP 444：虚拟线程（正式特性）",-1),Da={href:"https://www.skjava.com/series/article/6780334511",target:"_blank",rel:"noopener noreferrer"},La=e("li",null,"JEP 446：作用域值 （预览）",-1),Ma=e("li",null,"JEP 448：向量 API（第六次孵化）",-1),Ha=e("li",null,"JEP 449：弃用 Windows 32 位 x86 端口",-1),Va=e("li",null,"JEP 451：准备禁止动态加载代理",-1),Za=e("li",null,"JEP 452：密钥封装机制 API 安全库",-1),Ba=e("li",null,"JEP 453：结构化并发（预览）",-1);function Ka(Ua,Wa){const l=s("ExternalLinkIcon");return n(),o("div",null,[b,e("ul",null,[e("li",null,[a("JEP 126：Lambda 表达式："),e("a",j,[a("Java 8 新特性—Lambda 表达式"),t(l)])]),e("li",null,[a("JEP 126：函数式接口："),e("a",A,[a("Java 8 新特性—函数式接口"),t(l)])]),e("li",null,[a("JEP 179：方法引用："),e("a",I,[a("Java 8 新特性—方法引用和构造器引用"),t(l)])]),e("li",null,[a("JEP 150：接口的默认方法："),e("a",S,[a("Java 8 新特性—接口默认方法和静态方法"),t(l)])]),e("li",null,[a("JEP 107：Stream API："),e("a",x,[a("Java 8 新特性—Stream API 对元素流进行函数式操作"),t(l)])]),e("li",null,[a("Optional 类："),e("a",C,[a("Java 8 新特性— 利用 Optional 解决NullPointerException"),t(l)])]),e("li",null,[a("JEP 170：新的日期时间 API："),e("a",R,[a("Java 8 新特性—日期时间 API"),t(l)]),a(" && "),e("a",N,[a("Java 8 新特性—日期时间格式化"),t(l)])]),e("li",null,[a("JEP 120：重复注解："),e("a",F,[a("Java 8 新特性—重复注解@Repeatable"),t(l)])]),e("li",null,[a("Base64 编码解码："),e("a",G,[a("Java 8 新特性—全新的、标准的 Base64 API"),t(l)])]),e("li",null,[a("JEP 104：类型注解："),e("a",O,[a("Java 8 新特性—类型注解"),t(l)])]),e("li",null,[a("JEP 101：类型推断优化："),e("a",T,[a("Java 8 新特性—类型推断优化"),t(l)])]),D,L]),M,H,e("ul",null,[e("li",null,[a("JEP 261: 模块系统："),e("a",V,[a("Java 9 新特性—模块化"),t(l)])]),e("li",null,[a("JEP 269: 集合工厂方法："),e("a",Z,[a("Java 9 新特性—新增只读集合和工厂方法"),t(l)])]),e("li",null,[a("JEP 222：Jshell："),e("a",B,[a("Java 9 新特性—REPL 工具：JSheel 命令"),t(l)])]),e("li",null,[a("JEP 213：接口支持私有方法："),e("a",K,[a("Java 9 新特性—接口支持私有方法"),t(l)])]),e("li",null,[a("Stream API 增强："),e("a",U,[a("Java 9 新特性—Stream API的增强"),t(l)])]),e("li",null,[a("Optional 的增强：J"),e("a",W,[a("ava 9 新特性—Optional 的增强"),t(l)])]),e("li",null,[a("改进 try-with-resources："),e("a",q,[a("Java 9 新特性—try-with-resources的升级"),t(l)])]),y,z,Q,X,Y,$,ee,e("li",null,[a("增强 CompletableFuture："),e("a",ae,[a("Java 9 新特性—改进CompletableFuture"),t(l)])])]),le,te,e("ul",null,[e("li",null,[a("JEP 286：局部变量类型推断："),e("a",re,[a("Java 10 新特性—局部变量类型推断"),t(l)])]),ie]),se,ne,e("ul",null,[oe,e("li",null,[a("新增 String API："),e("a",ce,[a("Java 11 新特性—新增 String API"),t(l)])]),e("li",null,[a("JEP 321：全新的 HTTP 客户端 API："),e("a",_e,[a("Java 11 新特性—全新的 HTTP 客户端 API"),t(l)])]),e("li",null,[a("JEP 323：局部变量类型推断的升级："),e("a",he,[a("Java 11 新特性—局部变量类型推断的增强"),t(l)])]),de,Je,Pe,e("li",null,[a("增加 Files API："),e("a",ue,[a("Java 11 新特性—新增 Files API"),t(l)])]),e("li",null,[a("Optional API 增强："),e("a",pe,[a("Java 11 新特性—Optional API 的增强"),t(l)])]),ve,Ee,we]),fe,me,e("ul",null,[ke,e("li",null,[a("JEP 325：Switch 表达式（预览特性）："),e("a",ge,[a("Java 12 新特性—Switch 表达式"),t(l)])]),be,je,e("li",null,[a("新增 String API："),e("a",Ae,[a("Java 12 新特性—新增 String API"),t(l)])]),e("li",null,[a("新增 Files API："),e("a",Ie,[a("Java 12 新特性—新增 Files API"),t(l)])]),e("li",null,[a("新增 NumberFormat API："),e("a",Se,[a("Java 12 新特性—新增 NumberFormat API"),t(l)])]),e("li",null,[a("新增 Collectors API："),e("a",xe,[a("Java 12 新特性—新增 Collectors API"),t(l)])]),Ce,Re,Ne]),Fe,Ge,e("ul",null,[e("li",null,[a("JEP 354：增强 Switch 表达式（第二次预览）："),e("a",Oe,[a("Java 13 新特性—增强 Switch 表达式"),t(l)])]),e("li",null,[a("JEP 355：文本块（预览特性）："),e("a",Te,[a("Java 13 新特性—文本块"),t(l)])]),De,Le,Me]),He,Ve,e("ul",null,[Ze,Be,e("li",null,[a("JEP 359：Records (预览) ："),e("a",Ke,[a("Java 14 新特性—新特性 Record 类型"),t(l)])]),e("li",null,[a("JEP 305：模式匹配的 instanceof（预览）："),e("a",Ue,[a("Java 14 新特性—模式匹配的 instanceof"),t(l)])]),e("li",null,[a("JEP 358：改进 NullPointerExceptions 提示信息："),e("a",We,[a("Java 14 新特性—改进 NullPointerExceptions 提示信息"),t(l)])]),qe,ye,ze,Qe,Xe,Ye,$e,ea,aa]),la,ta,e("ul",null,[ra,e("li",null,[a("JEP 360：密封的类和接口（预览）："),e("a",ia,[a("Java 15 新特性—密封的类与接口"),t(l)])]),e("li",null,[a("JEP 371：隐藏类 Hidden Classes："),e("a",sa,[a("Java 15 新特性—隐藏类"),t(l)])]),na]),oa,e("ul",null,[e("li",null,[a("JEP 356：增强型伪随机数生成器："),e("a",ca,[a("Java 17 新特性—增强型伪随机数生成器"),t(l)])]),_a,ha,da,e("li",null,[a("JEP 406：模式匹配的 Swith 表达式（预览）："),e("a",Ja,[a("Java 17 新特性—模式匹配的 Swith 表达式"),t(l)])]),Pa,ua,pa,va,Ea,wa]),fa,e("ul",null,[e("li",null,[a("JEP 405：Record模式（预览）："),e("a",ma,[a("Java 19 新特性—Record模式"),t(l)])]),ka,ga,e("li",null,[a("JEP 425：虚拟线程（预览）："),e("a",ba,[a("Java 19 新特性—虚拟线程"),t(l)])]),ja,Aa,Ia]),Sa,e("ul",null,[e("li",null,[a("JEP 430：字符串模板 （预览）："),e("a",xa,[a("Java 21 新特性—字符串模板"),t(l)])]),e("li",null,[a("JEP 431：有序集合："),e("a",Ca,[a("Java 21 新特性—有序集合"),t(l)])]),Ra,Na,Fa,Ga,e("li",null,[a("JEP 443：未命名模式和变量 （预览）："),e("a",Oa,[a("Java 21 新特性—未命名模式和变量"),t(l)])]),Ta,e("li",null,[a("JEP 445：未命名类和 main 方法 （预览）："),e("a",Da,[a("Java 21 新特性—未命名类和 main 方法"),t(l)])]),La,Ma,Ha,Va,Za,Ba])])}const za=i(g,[["render",Ka],["__file","java-feature-overview.html.vue"]]);export{za as default};
