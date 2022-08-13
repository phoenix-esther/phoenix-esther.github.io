import{_ as a,o as s,c as n,a as e}from"./app.02d01547.js";var i="/assets/image-20220529154502287.868611de.png";const t={},d=e(`<h1 id="mysql-\u8FD0\u7EF4\u7BC7" tabindex="-1"><a class="header-anchor" href="#mysql-\u8FD0\u7EF4\u7BC7" aria-hidden="true">#</a> MySQL \u8FD0\u7EF4\u7BC7</h1><h2 id="mysql-\u6B7B\u9501\u53CA\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#mysql-\u6B7B\u9501\u53CA\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> mysql \u6B7B\u9501\u53CA\u89E3\u51B3\u529E\u6CD5</h2><h3 id="\u67E5\u8BE2\u6B7B\u9501" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6B7B\u9501" aria-hidden="true">#</a> \u67E5\u8BE2\u6B7B\u9501</h3><h4 id="\u9996\u5148\u6784\u5EFA\u4E00\u4E2A\u6B7B\u9501" tabindex="-1"><a class="header-anchor" href="#\u9996\u5148\u6784\u5EFA\u4E00\u4E2A\u6B7B\u9501" aria-hidden="true">#</a> \u9996\u5148\u6784\u5EFA\u4E00\u4E2A\u6B7B\u9501</h4><p>\u5F00\u542F\u4E24\u4E2A\u4E8B\u7269A\u3001B\u3002\u5728\u4E8B\u7269A\u4E2D\u66F4\u65B0id\u4E3A3\u7684\u884C\uFF0C\u5728\u4E8B\u7269B\u4E2D\u66F4\u65B0id\u4E3A4\u7684\u884C\u3002\u7136\u540E\u5728\u4E8B\u7269A\u4E2D\u66F4\u65B0id\u4E3A4\u7684\u884C\uFF0C\u5728\u4E8B\u7269B\u4E2D\u66F4\u65B0id\u4E3A3\u7684\u884C\u3002\u81F3\u6B64\uFF0C\u9501\u6210\u3002</p><h4 id="\u67E5\u770B\u6B63\u5728\u8FDB\u884C\u4E2D\u7684\u4E8B\u7269" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6B63\u5728\u8FDB\u884C\u4E2D\u7684\u4E8B\u7269" aria-hidden="true">#</a> \u67E5\u770B\u6B63\u5728\u8FDB\u884C\u4E2D\u7684\u4E8B\u7269</h4><p>\u6267\u884C\u5982\u4E0BSQL\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SELECT * FROM information_schema.INNODB_TRX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u8BE2\u7ED3\u679C\uFF1A</p><p><img src="`+i+`" alt="image-20220529154502287"></p><p>\u5B57\u6BB5\u8BF4\u660E\uFF1A</p><h4 id="\u67E5\u770B\u6B63\u5728\u9501\u7684\u4E8B\u7269" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6B63\u5728\u9501\u7684\u4E8B\u7269" aria-hidden="true">#</a> \u67E5\u770B\u6B63\u5728\u9501\u7684\u4E8B\u7269</h4><p>\u6267\u884C\u5982\u4E0BSQL\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># MYSQL 8.0 \u4EE5\u524D\u7248\u672C</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> INFORMATION_SCHEMA<span class="token punctuation">.</span>INNODB_LOCKS<span class="token punctuation">;</span>

<span class="token comment"># MYSQL 8.0 \u53CA\u4EE5\u540E\u7248\u672C</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>performance_schema<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>data_locks<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u770B\u7B49\u5F85\u9501\u7684\u4E8B\u52A1" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u7B49\u5F85\u9501\u7684\u4E8B\u52A1" aria-hidden="true">#</a> \u67E5\u770B\u7B49\u5F85\u9501\u7684\u4E8B\u52A1</h4><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment"># MYSQL 8.0 \u4EE5\u524D\u7248\u672C</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> INFORMATION_SCHEMA<span class="token punctuation">.</span>INNODB_LOCK_WAITS<span class="token punctuation">;</span>

<span class="token comment"># MYSQL 8.0 \u53CA\u4EE5\u540E\u7248\u672C</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>performance_schema<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>data_lock_waits<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u67E5\u8BE2\u662F\u5426\u9501\u8868" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u662F\u5426\u9501\u8868" aria-hidden="true">#</a> \u67E5\u8BE2\u662F\u5426\u9501\u8868</h4><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token keyword">OPEN</span> <span class="token keyword">TABLES</span> <span class="token keyword">where</span> In_use <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),c=[d];function l(r,p){return s(),n("div",null,c)}var u=a(t,[["render",l],["__file","mysql-devops.html.vue"]]);export{u as default};
