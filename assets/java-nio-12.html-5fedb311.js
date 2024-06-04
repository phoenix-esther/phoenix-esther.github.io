import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,e as r}from"./app-e53dd85b.js";const t="/assets/nio-202205091000003-415fbaa8.png",n="/assets/nio-202205091000001-7e08eb7b.png",l={},s=r('<h1 id="nio-heapbytebuffer" tabindex="-1"><a class="header-anchor" href="#nio-heapbytebuffer" aria-hidden="true">#</a> NIO - HeapByteBuffer</h1><p><img src="'+t+`" alt="img"></p><p>上篇文章介绍了堆外内存 DirectByteBuffer，我们知道了 DirectByteBuffer 是分配在 JVM 堆外的 ByteBuffer，这篇文章来了解堆内内存 HeapByteBuffer。</p><h2 id="heapbytebuffer" tabindex="-1"><a class="header-anchor" href="#heapbytebuffer" aria-hidden="true">#</a> HeapByteBuffer</h2><p>HeapByteBuffer，即分配在 JVM 中的 heap 堆中的 ByteBuffer，调用 <code>ByteBuffer#allocate()</code> 即可生成一个 HeapByteBuffer 对象。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static ByteBuffer allocate(int capacity) {
    if (capacity &lt; 0)
        throw new IllegalArgumentException();
    return new HeapByteBuffer(capacity, capacity);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们可以看到它是直接 new 一个 HeapByteBuffer 对象。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// package 级别
HeapByteBuffer(int cap, int lim) {
  super(-1, 0, lim, cap, new byte[cap], 0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接调用父类构造函数：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>ByteBuffer(int mark, int pos, int lim, int cap,byte[] hb, int offset){
    super(mark, pos, lim, cap);
    this.hb = hb;
    this.offset = offset;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从构造函数中我们可以看到它是构造一个 <code>position = 0、capacity = cap、limit = cap </code>的 ByteBuffer 对象，如下图：</p><p><img src="`+n+`" alt="img"></p><p>HeapByteBuffer 的底层实现就是一个 byte 数组，所有的操作都是基于该数组的，如 put 和 get 操作。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// put
public ByteBuffer put(byte x) {
  hb[ix(nextPutIndex())] = x;
  return this;
}

// get   
public byte get() {
  return hb[ix(nextGetIndex())];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至于回收，那就是 JVM 的事情了。</p><h2 id="directbytebuffer-vs-heapbytebuffer" tabindex="-1"><a class="header-anchor" href="#directbytebuffer-vs-heapbytebuffer" aria-hidden="true">#</a> DirectByteBuffer VS HeapByteBuffer</h2><ul><li>DirectByteBuffer 相比 HeapByteBuffer 的优势在于 IO 操作时能够节省一次数据拷贝，同时对于一些 NIO 框架而言，也会选择 DirectByteBuffer，原因在于尽管 HeapByteBuffer 是在 JVM Heap 上分配，但是Java NIO 在读写相对应的 Channel 时，会先将 Java Heap 的 buffer 内容拷贝到直接内存 — Direct Memory 中，这样就让 DirectByteBuffer 的 IO 性能明显强于 HeapByteBuffer，因为它省去了临时 Buffer 的拷贝开销。</li><li>对于磁盘 IO（文件），DirectByteBuffer 依然可以使用内存映射来提升性能，所以对于 IO 场景而言，DirectByteBuffer 的性能是优于 HeapByteBuffer 的。</li><li>同时，DirectByteBuffer 对 GC 也有一些改善，使应用的 GC 压力更小。因为堆外内存不归 JVM 管，它直接受操作系统管理，这就会让 JVM 能够保持一个较小的堆内存，减少 GC 操作对应用的影响。由于 DirectByteBuffer 不归 JVM 管，所以它的回收只能依靠 full gc 了，当然我们也可以手动释放 DirectByteBuffer： <ul><li>反射。通过反射的方式调用 DirectByteBuffer 中的 Cleaner 的 <code>clean() </code>方法。</li></ul></li><li>DirectByteBuffer 的创建会比 HeapByteBuffer 慢些，因为 HeapByteBuffer 直接在 JVM 堆上分配内存就可以了，速度杠杠的，但是 DirectByteBuffer 还需要调用 native 的 malloc 来分配内存，效率肯定会差些。</li></ul><p>在后面的【死磕 Netty】专栏，大明哥还会继续深入分析堆外内存和堆内内存。</p>`,18),c=[s];function d(u,f){return a(),i("div",null,c)}const B=e(l,[["render",d],["__file","java-nio-12.html.vue"]]);export{B as default};
