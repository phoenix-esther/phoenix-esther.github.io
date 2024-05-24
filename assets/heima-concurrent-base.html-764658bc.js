const n=JSON.parse('{"key":"v-436af000","path":"/java/java-concurrent/heima-concurrent-base.html","title":"并发编程","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"一、进程与线程","slug":"一、进程与线程","link":"#一、进程与线程","children":[{"level":3,"title":"1.1 进程与线程","slug":"_1-1-进程与线程","link":"#_1-1-进程与线程","children":[]},{"level":3,"title":"1.2 并发与并行","slug":"_1-2-并发与并行","link":"#_1-2-并发与并行","children":[]},{"level":3,"title":"1.3 应用","slug":"_1-3-应用","link":"#_1-3-应用","children":[]}]},{"level":2,"title":"二、Java线程","slug":"二、java线程","link":"#二、java线程","children":[{"level":3,"title":"2.1 创建和运行线程的方法","slug":"_2-1-创建和运行线程的方法","link":"#_2-1-创建和运行线程的方法","children":[]},{"level":3,"title":"2.2 观察多个线程的运行","slug":"_2-2-观察多个线程的运行","link":"#_2-2-观察多个线程的运行","children":[]},{"level":3,"title":"2.3 查看进程线程的方法","slug":"_2-3-查看进程线程的方法","link":"#_2-3-查看进程线程的方法","children":[]},{"level":3,"title":"2.4 线程运行的原理","slug":"_2-4-线程运行的原理","link":"#_2-4-线程运行的原理","children":[]},{"level":3,"title":"2.5 常见方法","slug":"_2-5-常见方法","link":"#_2-5-常见方法","children":[]},{"level":3,"title":"2.6 start 与 run","slug":"_2-6-start-与-run","link":"#_2-6-start-与-run","children":[]},{"level":3,"title":"2.7 sleep 与 yield","slug":"_2-7-sleep-与-yield","link":"#_2-7-sleep-与-yield","children":[]},{"level":3,"title":"2.8 join方法详解","slug":"_2-8-join方法详解","link":"#_2-8-join方法详解","children":[]},{"level":3,"title":"2.9 interrupt 方法详解","slug":"_2-9-interrupt-方法详解","link":"#_2-9-interrupt-方法详解","children":[]},{"level":3,"title":"2.10  不推荐的方法","slug":"_2-10-不推荐的方法","link":"#_2-10-不推荐的方法","children":[]},{"level":3,"title":"2.11 主线程与守护线程","slug":"_2-11-主线程与守护线程","link":"#_2-11-主线程与守护线程","children":[]},{"level":3,"title":"2.12 五种状态","slug":"_2-12-五种状态","link":"#_2-12-五种状态","children":[]},{"level":3,"title":"2.13 六种状态","slug":"_2-13-六种状态","link":"#_2-13-六种状态","children":[]}]},{"level":2,"title":"三、共享模型之管程","slug":"三、共享模型之管程","link":"#三、共享模型之管程","children":[{"level":3,"title":"3.1 共享存在的问题","slug":"_3-1-共享存在的问题","link":"#_3-1-共享存在的问题","children":[]},{"level":3,"title":"3.2  synchronized 解决方案","slug":"_3-2-synchronized-解决方案","link":"#_3-2-synchronized-解决方案","children":[]},{"level":3,"title":"3.3 方法上的 synchronized","slug":"_3-3-方法上的-synchronized","link":"#_3-3-方法上的-synchronized","children":[]},{"level":3,"title":"3.4 变量的线程安全分析","slug":"_3-4-变量的线程安全分析","link":"#_3-4-变量的线程安全分析","children":[]},{"level":3,"title":"3.5 练习","slug":"_3-5-练习","link":"#_3-5-练习","children":[]},{"level":3,"title":"3.6 Monitor 概念","slug":"_3-6-monitor-概念","link":"#_3-6-monitor-概念","children":[]},{"level":3,"title":"3.7 wait notify","slug":"_3-7-wait-notify","link":"#_3-7-wait-notify","children":[]},{"level":3,"title":"3.8 wait notify 的正确姿势","slug":"_3-8-wait-notify-的正确姿势","link":"#_3-8-wait-notify-的正确姿势","children":[]},{"level":3,"title":"3.9 Park & Unpark","slug":"_3-9-park-unpark","link":"#_3-9-park-unpark","children":[]},{"level":3,"title":"3.10 重新理解线程状态转换","slug":"_3-10-重新理解线程状态转换","link":"#_3-10-重新理解线程状态转换","children":[]},{"level":3,"title":"3.11 多把锁","slug":"_3-11-多把锁","link":"#_3-11-多把锁","children":[]},{"level":3,"title":"3.12 活跃性","slug":"_3-12-活跃性","link":"#_3-12-活跃性","children":[]},{"level":3,"title":"3.13 ReentrantLock","slug":"_3-13-reentrantlock","link":"#_3-13-reentrantlock","children":[]}]},{"level":2,"title":"四、共享模型之内存","slug":"四、共享模型之内存","link":"#四、共享模型之内存","children":[]},{"level":2,"title":"五、共享模型之无锁","slug":"五、共享模型之无锁","link":"#五、共享模型之无锁","children":[]},{"level":2,"title":"六、共享模型之不可变","slug":"六、共享模型之不可变","link":"#六、共享模型之不可变","children":[]},{"level":2,"title":"七、共享模型之工具","slug":"七、共享模型之工具","link":"#七、共享模型之工具","children":[]}],"git":{"createdTime":1697355560000,"updatedTime":1697461088000,"contributors":[{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":2},{"name":"xuliang","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":55.46,"words":16637},"filePathRelative":"java/java-concurrent/heima-concurrent-base.md","localizedDate":"2023年10月15日","excerpt":"<h1> 并发编程</h1>\\n<p>项目提前准备：</p>\\n<p>pom.xm依赖：</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>properties</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>maven.compiler.source</span><span class=\\"token punctuation\\">&gt;</span></span>1.8<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>maven.compiler.source</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>maven.compiler.target</span><span class=\\"token punctuation\\">&gt;</span></span>1.8<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>maven.compiler.target</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>properties</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>org.projectlombok<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>lombok<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>1.18.10<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>ch.qos.logback<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>groupId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>logback-classic<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>artifactId</span><span class=\\"token punctuation\\">&gt;</span></span>\\n        <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>1.2.3<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>version</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependency</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>dependencies</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};