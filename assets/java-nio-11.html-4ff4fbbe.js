const e=JSON.parse('{"key":"v-febc8d32","path":"/java/java-io/java-nio-11.html","title":"NIO - 堆外内存 DirectByteBuffer & MappedByteBuffer","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"虚拟内存与物理内存","slug":"虚拟内存与物理内存","link":"#虚拟内存与物理内存","children":[]},{"level":2,"title":"内存映射","slug":"内存映射","link":"#内存映射","children":[]},{"level":2,"title":"MappedByteBuffer","slug":"mappedbytebuffer","link":"#mappedbytebuffer","children":[{"level":3,"title":"与传统 IO 性能对比","slug":"与传统-io-性能对比","link":"#与传统-io-性能对比","children":[]}]},{"level":2,"title":"DirectByteBuffer","slug":"directbytebuffer","link":"#directbytebuffer","children":[{"level":3,"title":"释放内存","slug":"释放内存","link":"#释放内存","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1716801999000,"updatedTime":1716801999000,"contributors":[{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":13.74,"words":4122},"filePathRelative":"java/java-io/java-nio-11.md","localizedDate":"2024年5月27日","excerpt":"<h1> NIO - 堆外内存 DirectByteBuffer &amp; MappedByteBuffer</h1>\\n<p></p>\\n<p>前面 9 篇文章我们已经深入了解了 NIO 的基本概念和核心原理，想必小伙伴们对 NIO 的三大组件已经了然于心了，对于 ByteBuffer 而言，其实还有两个较为特殊的类 DirectByteBuffer 和 MappedByteBuffer 没有分析，这两个类的原理都是基于内存文件映射的。</p>\\n<p>ByteBuffer 分为两种，一种是直接的，另外一种是间接的。</p>\\n<ul>\\n<li>直接缓冲：直接使用内存映射，对于 Java 而言就是直接在 JVM 之外分配虚拟内存地址空间，Java 中使用 DirectByteBuffer 来实现，也就是堆外内存。</li>\\n<li>间接缓冲：是在 JVM 堆上实现，Java 中使用 HeapByteBuffer 来实现，也就是堆内内存。</li>\\n</ul>"}');export{e as data};