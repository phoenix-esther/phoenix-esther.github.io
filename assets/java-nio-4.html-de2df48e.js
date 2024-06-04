import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as a,a as i,b as e,d as c,e as r}from"./app-e53dd85b.js";const v="/assets/nio-2021121520002-5cd7c68d.jpg",o="/assets/nio-2021121520003-5ab402d9.png",t="/assets/nio-2021121520004-6940203c.png",u="/assets/nio-2021121520005-da45dc0f.png",m="/assets/nio-2021121520006-eb3a3501.png",b="/assets/nio-2021121520007-d9251ca6.png",p="/assets/nio-20211215200010-c717df31.png",h="/assets/nio-2021121520009-b17d224f.png",f={},g=i("h1",{id:"nio-跨进程文件锁-filelock",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#nio-跨进程文件锁-filelock","aria-hidden":"true"},"#"),e(" NIO - 跨进程文件锁：FileLock")],-1),k=i("p",null,[i("img",{src:v,alt:"img"})],-1),_={href:"https://www.skjava.com/series/article/1166024893",target:"_blank",rel:"noopener noreferrer"},L=r(`<p>说一个场景有多个进程同时操作某一个文件，并行往文件中写数据，请问如何保证写入文件的内容是正确的？可能有小伙伴说加分布式锁，可以解决问题，但是有点儿重了。</p><p>有没有更加轻量级的方案呢？ <strong>多进程文件锁：FileLock</strong>。</p><h2 id="filelock" tabindex="-1"><a class="header-anchor" href="#filelock" aria-hidden="true">#</a> <strong>FileLock</strong></h2><p>FileLock是文件锁，它能保证同一时间只有一个进程（程序）能够修改它，或者都只可以读，这样就解决了多进程间的同步文件，保证了安全性。但是需要注意的是，它进程级别的，不是线程级别的，他可以解决多个进程并发访问同一个文件的问题，但是它不适用于控制同一个进程中多个线程对一个文件的访问。这也是为什么它叫做 <strong>多进程文件锁</strong>，而不是 <strong>多线程文件锁</strong>。</p><p>FileLock一般都是从FileChannel 中获取，FileChannel 提供了三个方法用以获取 FileLock。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public abstract FileLock lock(long position, long size, boolean shared) throws IOException;

public final FileLock lock() throws IOException;

public abstract FileLock tryLock(long position, long size, boolean shared) throws IOException;

public final FileLock tryLock() throws IOException；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>lock()</strong> 是阻塞式的，它要阻塞进程直到锁可以获得，或调用<code>lock()</code>的线程中断，或调用<code>lock()</code>的通道关闭。</li><li>**tryLock()**是非阻塞式的，它设法获取锁，但如果不能获得，例如因为其他一些进程已经持有相同的锁，而且不共享时，它将直接从方法调用返回。</li></ul><p><code>lock()</code>和<code>tryLock()</code>方法有三个参数，如下：</p><ul><li>position：锁定文件中的开始位置</li><li>size：锁定文件中的内容长度</li><li>shared：是否使用共享锁。true为共享锁；false为独占锁。</li></ul><p>共享锁和独占锁的区别，大明哥就不解释了。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p><strong>不使用文件锁来读写文件</strong></p><p>首先我们不使用文件锁来进行多进程间文件读写，进程1往文件中写数据，进程2读取文件的大小。</p><ul><li>进程1</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>RandomAccessFile randomAccessFile = new RandomAccessFile(&quot;/Users/chenssy/Downloads/filelock.txt&quot;,&quot;rw&quot;);
FileChannel fileChannel = randomAccessFile.getChannel();
// 这里是独占锁
//FileLock fileLock = fileChannel.lock();
System.out.println(&quot;进程 1 开始写内容：&quot; + LocalTime.now());
for(int i = 1 ; i &lt;= 10 ; i++) {
    randomAccessFile.writeChars(&quot;chenssy_&quot; + i);
    // 等待两秒
    TimeUnit.SECONDS.sleep(2);
}
System.out.println(&quot;进程 1 完成写内容：&quot; + LocalTime.now());
// 完成后要释放掉锁
//fileLock.release();
fileChannel.close();
randomAccessFile.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>进程2</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>RandomAccessFile randomAccessFile = new RandomAccessFile(&quot;/Users/chenssy/Downloads/filelock.txt&quot;,&quot;rw&quot;);
FileChannel fileChannel = randomAccessFile.getChannel();
// 这里是独占锁
//FileLock fileLock = fileChannel.lock();
System.out.println(&quot;开始读文件的时间：&quot; + LocalTime.now());

for(int i = 0 ; i &lt; 10 ; i++) {
    // 这里直接读文件的大小
    System.out.println(&quot;文件大小为：&quot; + randomAccessFile.length());
    // 这里等待 1 秒
    TimeUnit.SECONDS.sleep(1);
}

System.out.println(&quot;结束读文件的时间：&quot; + LocalTime.now());
// 完成后要释放掉锁
//fileLock.release();
fileChannel.close();
randomAccessFile.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果</p><ul><li>进程1</li></ul><p><img src="`+o+'" alt="img"></p><ul><li>进程2</li></ul><p><img src="'+t+'" alt="img"></p><p>从这个结果可以非常清晰看到，进程1和进程2是同时执行的。进程1一边往文件中写，进程2是一边在读的</p><p><strong>使用文件锁读写文件</strong></p><p>这里我们使用文件锁来进行多进程间文件读写，依然使用上面的程序，只需要将对应的注释放开即可。执行结果</p><ul><li>进程1</li></ul><p><img src="'+u+'" alt="img"></p><ul><li>进程2</li></ul><p><img src="'+m+'" alt="img"></p><p>从这里可以看到，进程2是等进程1释放掉锁后才开始执行的。同时由于进程1已经将数据全部写入文件了，所以进程2读取文件的大小是一样的。从这里可以看出 ** FileLock确实是可以解决多进程访问同一个文件的并发安全问题。**</p><p><strong>同进程不同线程进行文件读写</strong></p><p>在开始就说到，FileLock是不适用同一进程不同线程之间文件的访问。因为你根本无法在一个进程中不同线程同时对一个文件进行加锁操作，如果线程1对文件进行了加锁操作，这时线程2也来进行加锁操作的话，则会直接抛出异常：<code>java.nio.channels.OverlappingFileLockException</code>。</p><p><img src="'+b+`" alt="img"></p><p>当然我们可以通过另外一种方式来规避，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>FileLock fileLock;
while (true){
    try{
        fileLock = fileChannel.tryLock();
        break;
    } catch (Exception e) {
        System.out.println(&quot;其他线程已经获取该文件锁了，当前线程休眠 2 秒再获取&quot;);
        TimeUnit.SECONDS.sleep(2);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将上面获取锁的部分用这段代码替换，执行结果又如下两种：</p><ul><li>线程1先获取文件锁</li></ul><p><img src="`+p+'" alt="img"></p><ul><li>线程2先获取文件锁</li></ul><p><img src="'+h+`" alt="img"></p><blockquote><p>这种方式虽然也可以实现多线程访问同一个文件，但是不建议这样操作！！！</p></blockquote><h2 id="源码分析" tabindex="-1"><a class="header-anchor" href="#源码分析" aria-hidden="true">#</a> 源码分析</h2><p>下面我们以 <code>FileLock lock(long position, long size, boolean shared)</code>为例简单分析下文件锁的源码。<code>lock()</code>方法是由FileChannel的子类 FileChannelImpl来实现的。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public FileLock lock(long position, long size, boolean shared) throws IOException {
        // 确认文件已经打开 , 即判断open标识位
        ensureOpen();
        if (shared &amp;&amp; !readable)
            throw new NonReadableChannelException();
        if (!shared &amp;&amp; !writable)
            throw new NonWritableChannelException();
        // 创建 FileLock 对象
        FileLockImpl fli = new FileLockImpl(this, position, size, shared);
        // 创建 FileLockTable 对象
        FileLockTable flt = fileLockTable();
        flt.add(fli);
        boolean completed = false;
        int ti = -1;
        try {
            // 标记开始IO操作 , 可能会导致阻塞
            begin();
            ti = threads.add();
            if (!isOpen())
                return null;
            int n;
            do {
                // 开始锁住文件
                n = nd.lock(fd, true, position, size, shared);
            } while ((n == FileDispatcher.INTERRUPTED) &amp;&amp; isOpen());
            if (isOpen()) {
                // 如果返回结果为RET_EX_LOCK的话
                if (n == FileDispatcher.RET_EX_LOCK) {
                    assert shared;
                    FileLockImpl fli2 = new FileLockImpl(this, position, size,
                                                         false);
                    flt.replace(fli, fli2);
                    fli = fli2;
                }
                completed = true;
            }
        } finally {
            // 释放锁
            if (!completed)
                flt.remove(fli);
            threads.remove(ti);
            try {
                end(completed);
            } catch (ClosedByInterruptException e) {
                throw new FileLockInterruptionException();
            }
        }
        return fli;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先会判断文件是否已打开，然后创建FileLock和FileLockTable 对象，其中FileLockTable是用于存放 FileLock的table。</p><ul><li>调用 <code>begin()</code>设置中断触发</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>protected final void begin() {
        if (interruptor == null) {
            interruptor = new Interruptible() {
                    public void interrupt(Thread target) {
                        synchronized (closeLock) {
                            if (!open)
                                return;
                            open = false;
                            interrupted = target;
                            try {
                                AbstractInterruptibleChannel.this.implCloseChannel();
                            } catch (IOException x) { }
                        }
                    }};
        }
        blockedOn(interruptor);
        Thread me = Thread.currentThread();
        if (me.isInterrupted())
            interruptor.interrupt(me);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>调用 <code>FileDispatcher.lock()</code>开始锁住文件</li></ul><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int lock(FileDescriptor fd, boolean blocking, long pos, long size,
             boolean shared) throws IOException
    {
        BlockGuard.getThreadPolicy().onWriteToDisk();
        return lock0(fd, blocking, pos, size, shared);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>lock0()</code>的实现是在 FileDispatcherImpl.c 中，源码如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>JNIEXPORT jint JNICALL
FileDispatcherImpl_lock0(JNIEnv *env, jobject this, jobject fdo,
                                      jboolean block, jlong pos, jlong size,
                                      jboolean shared)
{
    // 通过fdval函数找到fd
    jint fd = fdval(env, fdo);
    jint lockResult = 0;
    int cmd = 0;
    // 创建flock对象
    struct flock64 fl;

    fl.l_whence = SEEK_SET;
    // 从position位置开始
    if (size == (jlong)java_lang_Long_MAX_VALUE) {
        fl.l_len = (off64_t)0;
    } else {
        fl.l_len = (off64_t)size;
    }
    fl.l_start = (off64_t)pos;
    // 如果是共享锁 , 则只读
    if (shared == JNI_TRUE) {
        fl.l_type = F_RDLCK;
    } else {
        // 否则可读写
        fl.l_type = F_WRLCK;
    }
    // 设置锁参数
    // F_SETLK : 给当前文件上锁（非阻塞）。
    // F_SETLKW : 给当前文件上锁（阻塞，若当前文件正在被锁住，该函数一直阻塞）。
    if (block == JNI_TRUE) {
        cmd = F_SETLKW64;
    } else {
        cmd = F_SETLK64;
    }
    // 调用fcntl锁住文件
    lockResult = fcntl(fd, cmd, &amp;fl);
    if (lockResult &lt; 0) {
        if ((cmd == F_SETLK64) &amp;&amp; (errno == EAGAIN || errno == EACCES))
            // 如果出现错误 , 返回错误码
            return sun_nio_ch_FileDispatcherImpl_NO_LOCK;
        if (errno == EINTR)
            return sun_nio_ch_FileDispatcherImpl_INTERRUPTED;
        JNU_ThrowIOExceptionWithLastError(env, &quot;Lock failed&quot;);
    }
    return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>所以，其实文件锁的核心就是调用Linux的<code>fnctl</code>来从内核对文件进行加锁。</p></blockquote><p>关于Linux 文件锁，大明哥推荐这两篇博客，小伙伴可以了解下：</p><ul><li>linux文件锁flock：https://www.cnblogs.com/kex1n/p/7100107.html</li><li>Linux文件锁定：https://blog.csdn.net/zwz1984/article/details/44809017</li></ul>`,54);function F(E,x){const n=s("ExternalLinkIcon");return d(),a("div",null,[g,k,i("p",null,[e("上篇文章（"),i("a",_,[e("【死磕 NIO】— 深入分析Channel和FileChannel"),c(n)]),e("）已经详细介绍了 FileChannel的核心原理及相关API，了解了FileChannel是用来读写和映射一个系统文件的 Channel，其实他还有很牛逼的功能就是：跨进程文件锁。")]),L])}const I=l(f,[["render",F],["__file","java-nio-4.html.vue"]]);export{I as default};
