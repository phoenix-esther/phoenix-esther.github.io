import{_ as e,o as a,c as n,a as s}from"./app.02d01547.js";const i={},t=s(`<h1 id="git-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#git-\u4F7F\u7528" aria-hidden="true">#</a> Git \u4F7F\u7528</h1><h2 id="\u5F7B\u5E95\u5220\u9664\u5386\u53F2\u63D0\u4EA4\u7684\u5927\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F7B\u5E95\u5220\u9664\u5386\u53F2\u63D0\u4EA4\u7684\u5927\u6587\u4EF6" aria-hidden="true">#</a> \u5F7B\u5E95\u5220\u9664\u5386\u53F2\u63D0\u4EA4\u7684\u5927\u6587\u4EF6</h2><p>\u5220\u9664\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> filter-branch --force --index-filter <span class="token string">&quot;git rm -rf --cached --ignore-unmatch \u8DEF\u5F84&quot;</span> --prune-empty --tag-name-filter <span class="token function">cat</span> -- --all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56DE\u6536\u7A7A\u95F4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rm</span> -rf .git/refs/original <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> reflog expire --expire<span class="token operator">=</span>now --all
<span class="token function">git</span> gc --prune<span class="token operator">=</span>now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,6),r=[t];function c(o,l){return a(),n("div",null,r)}var p=e(i,[["render",c],["__file","git.html.vue"]]);export{p as default};
