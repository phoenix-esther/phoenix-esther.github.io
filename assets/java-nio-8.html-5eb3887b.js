import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c,a as i,b as e,d as l,e as d}from"./app-e53dd85b.js";const v="/assets/nio-202204161000001-38652a2e.png",t={},o=i("h1",{id:"selector-源码分析",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#selector-源码分析","aria-hidden":"true"},"#"),e(" Selector 源码分析")],-1),u={href:"https://www.skjava.com/series/article/4749020302",target:"_blank",rel:"noopener noreferrer"},m=i("code",null,"open()",-1),b=i("code",null,"register()",-1),p=i("code",null,"selector()",-1),h=d('<p><img src="'+v+`" alt="img"></p><h2 id="open" tabindex="-1"><a class="header-anchor" href="#open" aria-hidden="true">#</a> open()</h2><p>调用 <code>Selector.open()</code> 方法会创建一个 Selector 实例。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static Selector open() throws IOException {
    return SelectorProvider.provider().openSelector();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SelectorProvider 是一个抽象类，它提供了创建 Selector 、ServerSocketChannel、SocketChannel 的方法，采用 Java 的 SPI 方式实现。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public static SelectorProvider provider() {
    synchronized (lock) {
        // 这里保证了只有一个 SelectorProvider
        if (provider != null)
            return provider;
        return AccessController.doPrivileged(
            new PrivilegedAction&lt;SelectorProvider&gt;() {
                public SelectorProvider run() {
                        // 通过配置的 java.nio.channels.spi.SelectorProvider 值注入自定义的SelectorProvider
                        if (loadProviderFromProperty())
                            return provider;
                        // 通过 ServiceLoad 注入，然后获取配置的第一个服务
                        if (loadProviderAsService())
                            return provider;
                        // 默认
                        provider = sun.nio.ch.DefaultSelectorProvider.create();
                        return provider;
                    }
                });
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有特殊配置，我们一般都是使用默认方法 <code>sun.nio.ch.DefaultSelectorProvider.create()</code>。平台的不同 DefaultSelectorProvider 的实现就不同，大明哥这里是 MacBook，实现如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public class DefaultSelectorProvider {
    private DefaultSelectorProvider() {
    }

    public static SelectorProvider create() {
        return new KQueueSelectorProvider();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这里我们就可以看出，MacOS 使用的多路复用是 kqueue。对于 Windows 和 Linux 大明哥也找到了相对应的实现。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// Windows
public class DefaultSelectorProvider {
    private DefaultSelectorProvider() { }
    public static SelectorProvider create() {
        return new sun.nio.ch.WindowsSelectorProvider();
    }
}
// Linux
public class DefaultSelectorProvider {

    private DefaultSelectorProvider() { }

    @SuppressWarnings(&quot;unchecked&quot;)
    private static SelectorProvider createProvider(String cn) {
        Class&lt;SelectorProvider&gt; c;
        try {
            c = (Class&lt;SelectorProvider&gt;)Class.forName(cn);
        } catch (ClassNotFoundException x) {
            throw new AssertionError(x);
        }
        try {
            return c.newInstance();
        } catch (IllegalAccessException | InstantiationException x) {
            throw new AssertionError(x);
        }
    }

    public static SelectorProvider create() {
        String osname = AccessController
            .doPrivileged(new GetPropertyAction(&quot;os.name&quot;));
        if (osname.equals(&quot;SunOS&quot;))
            return createProvider(&quot;sun.nio.ch.DevPollSelectorProvider&quot;);
        if (osname.equals(&quot;Linux&quot;))
            return createProvider(&quot;sun.nio.ch.EPollSelectorProvider&quot;);
        return new sun.nio.ch.PollSelectorProvider();
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建完 SelectorProvider 后，调用 <code>openSelector()</code> 方法就创建了一个 Selector 实例，该方法是一个抽象方法，由具体的 SelectorProvider 类来实现，如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// macos
public class KQueueSelectorProvider extends SelectorProviderImpl {
    public AbstractSelector openSelector() throws IOException {
        return new KQueueSelectorImpl(this);
    }
}
    
//windows
public class WindowsSelectorProvider extends SelectorProviderImpl {

    public AbstractSelector openSelector() throws IOException {
        return new WindowsSelectorImpl(this);
    }
}

//linux
public class EPollSelectorProvider extends SelectorProviderImpl {
    public AbstractSelector openSelector() throws IOException {
        return new EPollSelectorImpl(this);
    }
    ...
}
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MacOS 下创建 <code>KQueueSelectorImpl</code> ，Windows下创建 <code>WindowsSelectorImpl</code> ， Linux 下创建 <code>EPollSelectorImpl</code> 。这三个类大明哥上传到百度云去了，链接如下：</p><blockquote><p>链接: https://pan.baidu.com/s/1ord6zDjcsnwTFDP2YMzfmA 提取码: r1w3</p></blockquote><p>三个系统的 <code>XxxSelectorImpl </code>都继承 SelectorImpl。在创建实体类时，都会调用 SelectorImpl 的构造方法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>protected SelectorImpl(SelectorProvider sp) {
    super(sp);
    // key 的初始化
    keys = new HashSet&lt;SelectionKey&gt;();
    selectedKeys = new HashSet&lt;SelectionKey&gt;();
    if (Util.atBugLevel(&quot;1.4&quot;)) {
        publicKeys = keys;
        publicSelectedKeys = selectedKeys;
    } else {
        // 创建一个不可修改的集合
        publicKeys = Collections.unmodifiableSet(keys);
        // 创建一个只能删除不能添加的集合
        publicSelectedKeys = Util.ungrowableSet(selectedKeys);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),g=i("code",null,"Util.atBugLevel",-1),S={href:"https://www.iteye.com/blog/donald-draper-2370519",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.oracle.com/cd/E19226-01/820-7688/6niu9p8i3/index.html",target:"_blank",rel:"noopener noreferrer"},k=i("code",null,"nio bugLevel= 1.4",-1),f=d(`<p>在 SelectorImpl 里面你会发现有四个 Set 集合</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// The set of keys with data ready for an operation
protected Set&lt;SelectionKey&gt; selectedKeys;

// The set of keys registered with this Selector
protected HashSet&lt;SelectionKey&gt; keys;

// Public views of the key sets
private Set&lt;SelectionKey&gt; publicKeys;             // Immutable
private Set&lt;SelectionKey&gt; publicSelectedKeys;     // Removal allowed, but not addition
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>selectedKeys：已经就绪的 key</li><li>keys：key 集合</li><li>publicKeys：key 集合的代理，不可变</li><li>publicSelectedKeys：已经就绪的 key 的代理，可删除，但不可新增</li></ul><p>对于我们 Java 程序员而言，最熟悉的莫过于 Linux 系统，所以以下部分的实现都是基于 <code>EPollSelectorImpl</code> 。</p><h2 id="register" tabindex="-1"><a class="header-anchor" href="#register" aria-hidden="true">#</a> register()</h2><p>调用 <code>open()</code> 方法创建 Selector 后，我们需要告诉它监控哪些 Channel，SelectableChannel 提供的 <code>register()</code> 方法可以将某个可选择的 Channel 注册到 Selector 中。方法的实现是在 AbstractSelectableChannel 中实现的。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public final SelectionKey register(Selector sel, int ops,Object att)
    throws ClosedChannelException
{
    synchronized (regLock) {
        if (!isOpen())
            throw new ClosedChannelException();
        // 是否支持该操作
        if ((ops &amp; ~validOps()) != 0)
            throw new IllegalArgumentException();
        // 阻塞不支持
        if (blocking)
            throw new IllegalBlockingModeException();
        // 根据 Selector 找到 SelectionKey
        SelectionKey k = findKey(sel);
        if (k != null) {
            // 存在
            // 注册相对应的操作
            k.interestOps(ops);
            // 保存参数
            k.attach(att);
        }
        if (k == null) {
            // New registration
            synchronized (keyLock) {
                if (!isOpen())
                    throw new ClosedChannelException();
                // 注册
                k = ((AbstractSelector)sel).register(this, ops, att);
                // 添加到缓存中
                addKey(k);
            }
        }
        return k;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>首先会对注册的 Channel 进行校验，这里再次强调，Selector 不支持阻塞模式。</li><li>调用 <code>findKey()</code> 方法找到该 Selector 对应的 SelectionKey</li><li>如果不为空，则将该操作注册上就可以了</li><li>如果为空，则需要调用 <code>AbstractSelector.register()</code> 创建 SelectionKey 并注册，然后将其添加到缓存中去。</li></ul><h3 id="findkey" tabindex="-1"><a class="header-anchor" href="#findkey" aria-hidden="true">#</a> findKey()</h3><p><code>findKey()</code> 用于根据 Selector 查找对应的 SelectionKey。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private SelectionKey findKey(Selector sel) {
    synchronized (keyLock) {
        if (keys == null)
            return null;
        for (int i = 0; i &lt; keys.length; i++)
            if ((keys[i] != null) &amp;&amp; (keys[i].selector() == sel))
                return keys[i];
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>逻辑就是从 keys 数组中获取。keys 数组定义如下：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private SelectionKey[] keys = null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该数组用于保存所有已创建的 SelectionKey，如果注册的 Channel 已关闭，它对应的 SelectionKey 需要从该数组中取消。</p><h3 id="abstractselector-register" tabindex="-1"><a class="header-anchor" href="#abstractselector-register" aria-hidden="true">#</a> AbstractSelector.register()</h3><p>如果从 keys 数组中没有找到对应的 SelectionKey ，就需要调用 <code>AbstractSelector.register()</code> 方法来创建相对应的 SelectionKey 。该方法在 SelectorImpl 中实现：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>protected final SelectionKey register(AbstractSelectableChannel ch,
                                      int ops,
                                      Object attachment)
{
    if (!(ch instanceof SelChImpl))
        throw new IllegalSelectorException();
    // 新建 SelectionKeyImpl 对象
    SelectionKeyImpl k = new SelectionKeyImpl((SelChImpl)ch, this);
    // 保存参数
    k.attach(attachment);
    // 注册到 Selector
    // 加锁 publicKeys 后面再介绍
    synchronized (publicKeys) {
        implRegister(k);
    }
    // 关注操作
    k.interestOps(ops);
    return k;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先创建 SelectionKeyImpl 对象，该对象是 SelectionKey 的实现，然后调用 <code>implRegister()</code> 注册，该方法的实现每个操作系统实现是不一样的，我们以 Linux 操作胸系统为准。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>protected void implRegister(SelectionKeyImpl ski) {
    if (closed)
        throw new ClosedSelectorException();
    SelChImpl ch = ski.channel;
    // 获取 Channel 的句柄
    int fd = Integer.valueOf(ch.getFDVal());
    // 加入到缓存中
    fdToKey.put(fd, ski);
    
    pollWrapper.add(fd);
    // 加入到数组缓存
    keys.add(ski);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>implRegister()</code> 中，先获取对应 Channel 的文件描述符句柄 fd，然后将文件描述符句柄 fd 和 SelectionKey 保存加入到 fdToKey，fdToKey 是一个 <code>HashMap（Map&lt;Integer,SelectionKeyImpl&gt;）</code>，它保存文件描述符句柄 fd 和的 SelectionKey 的映射关系，这样 Channel 与对应的 SelectionKey 就映射上了。</p><p>调用 <code>pollWrapper.add()</code>将文件描述符句柄 fd 加入到 <code>pollWrapper</code> 中，<code>pollWrapper</code> 是EPollArrayWrapper 对象， 它是调用底层 Epoll 算法的包装类，这里就不再延伸了。</p><h3 id="addkey" tabindex="-1"><a class="header-anchor" href="#addkey" aria-hidden="true">#</a> addKey()</h3><p>获取到 SelectionKey 后，调用 <code>addKey()</code>方法将该 SelectionKey 添加到 keys 数组中，若空间不够则进行扩容处理（2 倍）。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private void addKey(SelectionKey k) {
    assert Thread.holdsLock(keyLock);
    int i = 0;
    if ((keys != null) &amp;&amp; (keyCount &lt; keys.length)) {
        // 找第 i 个为 null 的位置
        for (i = 0; i &lt; keys.length; i++)
            if (keys[i] == null)
                break;
    } else if (keys == null) {
        // 默认 3 
        keys =  new SelectionKey[3];
    } else {
        // 扩容 2 倍
        int n = keys.length * 2;
        SelectionKey[] ks =  new SelectionKey[n];
        for (i = 0; i &lt; keys.length; i++)
            ks[i] = keys[i];
        keys = ks;
        i = keyCount;
    }
    // 保存 key
    keys[i] = k;
    keyCount++;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select()</h2><p><code>select()</code>有三个重载方法：</p><ul><li><p><code>select()</code>：阻塞到至少有一个通道在你注册的事件上就绪了。</p></li><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select(long timeout)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>：阻塞，最长会阻塞 timeout 毫秒(参数)。需要注意的是该方法并不能提供精准的时间保证。关于 timeout 说明如下：</p><ul><li>如果 timeout 为正，则 <code>select(long timeout)</code> 在等待有通道被选择时至多会阻塞 timeout 毫秒</li><li>如果 timeout 为零，则永远阻塞直到有至少一个通道准备就绪</li><li>timeout不能为负数，会抛出 IllegalArgumentException 异常</li></ul></li><li><p><code>selectNow()</code>：不阻塞，立刻返回，如果没有 Channel 准备好，则返回 0。</p></li></ul><p>我们以 <code>select()</code> 方法为入口进去看源码，该方法是一个抽象方法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public abstract int select() throws IOException;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 SelectorImpl 中实现：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public int select() throws IOException {
    return select(0);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里传入的 timeout 为 0，表示一直阻塞到有至少一个通道准备就绪。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>public int select(long timeout) throws IOException {
    // timeout 不能为 0，
    if (timeout &lt; 0)
        throw new IllegalArgumentException(&quot;Negative timeout&quot;);
    return lockAndDoSelect((timeout == 0) ? -1 : timeout);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code>lockAndDoSelect()</code> 方法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private int lockAndDoSelect(long timeout) throws IOException {
    synchronized (this) {
        if (!isOpen())
            throw new ClosedSelectorException();
        // 双重锁
        synchronized (publicKeys) {
            synchronized (publicSelectedKeys) {
                return doSelect(timeout);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终调用到 <code>lockAndDoSelect(long timeout)</code>，其实三个重载方法其实都是委托给 <code>lockAndDoSelect(long timeout)</code>，最终调用 <code>doSelect()</code> 方法。 <code>doSelect()</code> 方法由各个操作系统来实现：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>protected int doSelect(long timeout) throws IOException {
    if (closed)
        throw new ClosedSelectorException();
    // 删除取消的key
    processDeregisterQueue();
    try {
        begin();
        // 获取就绪文件描述符
        pollWrapper.poll(timeout);
    } finally {
        end();
    }
    // 再次删除取消的 key
    processDeregisterQueue();
    // 将已就绪的 key 加入到 selectedKeys 中
    int numKeysUpdated = updateSelectedKeys();
    
    if (pollWrapper.interrupted()) {
        // Clear the wakeup pipe
        pollWrapper.putEventOps(pollWrapper.interruptedIndex(), 0);
        synchronized (interruptLock) {
            pollWrapper.clearInterrupted();
            IOUtil.drain(fd0);
            interruptTriggered = false;
        }
    }
    return numKeysUpdated;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法就三个核心步骤</p><ol><li><code>processDeregisterQueue()</code>：删除已取消的 key</li><li><code>pollWrapper.poll(timeout)</code>：获取就绪文件描述符</li><li><code>updateSelectedKeys()</code>：将已就绪的 key 加入到 selectedKeys 中</li></ol><h3 id="processderegisterqueue" tabindex="-1"><a class="header-anchor" href="#processderegisterqueue" aria-hidden="true">#</a> processDeregisterQueue</h3><p>当通道 Channel 关闭后，对应的 key 就需要被取消掉，所有已取消的 key 都会添加到 <code>cancelledKeys</code> 中，该操作在 AbstractSelector 中完成。<code>processDeregisterQueue()</code> 会遍历 <code>cancelledKeys</code> 集合，然后依次删除：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>void processDeregisterQueue() throws IOException {
    // Precondition: Synchronized on this, keys, and selectedKeys
    Set&lt;SelectionKey&gt; cks = cancelledKeys();
    synchronized (cks) {
        if (!cks.isEmpty()) {
            Iterator&lt;SelectionKey&gt; i = cks.iterator();
            while (i.hasNext()) {
                SelectionKeyImpl ski = (SelectionKeyImpl)i.next();
                try {
                    implDereg(ski);
                } catch (SocketException se) {
                    throw new IOException(&quot;Error deregistering key&quot;, se);
                } finally {
                    i.remove();
                }
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就是遍历 <code>cancelledKeys</code> 集合，然后调用 <code>implDereg(ski)</code> 方法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>protected void implDereg(SelectionKeyImpl ski) throws IOException {
    assert (ski.getIndex() &gt;= 0);
    // channel
    SelChImpl ch = ski.channel;
    // 文件描述符
    int fd = ch.getFDVal();
    // 删除文件描述符和 SelectionKey 的对应关系
    fdToKey.remove(Integer.valueOf(fd));
    // 将句柄值设置为KILLED(-1)
    pollWrapper.remove(fd);
    ski.setIndex(-1);
    // 删除 key 的集合
    keys.remove(ski);
    selectedKeys.remove(ski);
    // 将key设置为无效
    deregister((AbstractSelectionKey)ski);
    SelectableChannel selch = ski.channel();
    if (!selch.isOpen() &amp;&amp; !selch.isRegistered())
        ((SelChImpl)selch).kill();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pollwrapper-poll-timeout" tabindex="-1"><a class="header-anchor" href="#pollwrapper-poll-timeout" aria-hidden="true">#</a> pollWrapper.poll(timeout)</h3><p>该方法用于获取已经准备就绪的文件描述符。</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>int poll(long timeout) throws IOException {
    updateRegistrations();
    //获取已就绪的文件句柄
    updated = epollWait(pollArrayAddress, NUM_EPOLLEVENTS, timeout, epfd);
    //如是唤醒文件句柄，则跳过，设置interrupted=true
    for (int i=0; i&lt;updated; i++) {
        if (getDescriptor(i) == incomingInterruptFD) {
            interruptedIndex = i;
            interrupted = true;
            break;
        }
    }
    return updated;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心方法是 <code>epollWait()</code>，该方法是用于获取已就绪的文件句柄，它是 native 方法：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private native int epollWait(long pollAddress, int numfds, long timeout,
                             int epfd) throws IOException;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="updateselectedkeys" tabindex="-1"><a class="header-anchor" href="#updateselectedkeys" aria-hidden="true">#</a> updateSelectedKeys()</h3><p>该方法是将已准备就绪的 key 加入到 selectedKeys 中：</p><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>private int updateSelectedKeys() {
    // 
    int entries = pollWrapper.updated;
    int numKeysUpdated = 0;
    for (int i=0; i&lt;entries; i++) {
        int nextFD = pollWrapper.getDescriptor(i);
        // 获取 SelectionKey
        SelectionKeyImpl ski = fdToKey.get(Integer.valueOf(nextFD));
        // ski is null in the case of an interrupt
        if (ski != null) {
            int rOps = pollWrapper.getEventOps(i);
            // 存在
            if (selectedKeys.contains(ski)) {
                if (ski.channel.translateAndSetReadyOps(rOps, ski)) {
                    numKeysUpdated++;
                }
            } else {
                // 不存在，加入
                ski.channel.translateAndSetReadyOps(rOps, ski);
                if ((ski.nioReadyOps() &amp; ski.nioInterestOps()) != 0) {
                    // 加入到 selectedKeys 中
                    selectedKeys.add(ski);
                    numKeysUpdated++;
                }
            }
        }
    }
    return numKeysUpdated;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52);function K(x,w){const n=r("ExternalLinkIcon");return a(),c("div",null,[o,i("p",null,[e("上篇文章（"),i("a",u,[e("【死磕 NIO】— 详解 Selector"),l(n)]),e("）详细介绍了 Selector 的核心原理和使用方法，这篇文章我们来深入了解 Selector 的源码，主要讲三个最常用的方法 "),m,e("，"),b,e(" 和 "),p,e("。")]),h,i("blockquote",null,[i("p",null,[e("关于"),g,e("找到"),i("a",S,[e("一篇文章"),l(n)]),e("有提到该方法。似乎是和"),i("a",y,[e("EPoll的一个空指针异常"),l(n)]),e("相关。这个 bug 在 "),k,e(" 版本引入，这个 bug 在jdk1.5 中存在，直到 jdk1.7 才修复。")])]),f])}const P=s(t,[["render",K],["__file","java-nio-8.html.vue"]]);export{P as default};
