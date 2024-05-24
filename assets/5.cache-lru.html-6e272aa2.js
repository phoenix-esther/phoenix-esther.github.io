const l=JSON.parse('{"key":"v-98de9f1c","path":"/quality/operating-system/3.memory-manage/5.cache-lru.html","title":"如何避免预读失效和缓存污染的问题？","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"#Linux 和 MySQL 的缓存","slug":"linux-和-mysql-的缓存","link":"#linux-和-mysql-的缓存","children":[{"level":3,"title":"#Linux 操作系统的缓存","slug":"linux-操作系统的缓存","link":"#linux-操作系统的缓存","children":[]},{"level":3,"title":"#MySQL 的缓存","slug":"mysql-的缓存","link":"#mysql-的缓存","children":[]}]},{"level":2,"title":"#传统 LRU 是如何管理内存数据的？","slug":"传统-lru-是如何管理内存数据的","link":"#传统-lru-是如何管理内存数据的","children":[]},{"level":2,"title":"#预读失效，怎么办？","slug":"预读失效-怎么办","link":"#预读失效-怎么办","children":[{"level":3,"title":"#什么是预读机制？","slug":"什么是预读机制","link":"#什么是预读机制","children":[]},{"level":3,"title":"#预读失效会带来什么问题？","slug":"预读失效会带来什么问题","link":"#预读失效会带来什么问题","children":[]},{"level":3,"title":"#如何避免预读失效造成的影响？","slug":"如何避免预读失效造成的影响","link":"#如何避免预读失效造成的影响","children":[]}]},{"level":2,"title":"#缓存污染，怎么办？","slug":"缓存污染-怎么办","link":"#缓存污染-怎么办","children":[{"level":3,"title":"#什么是缓存污染？","slug":"什么是缓存污染","link":"#什么是缓存污染","children":[]},{"level":3,"title":"#缓存污染会带来什么问题？","slug":"缓存污染会带来什么问题","link":"#缓存污染会带来什么问题","children":[]},{"level":3,"title":"#怎么避免缓存污染造成的影响？","slug":"怎么避免缓存污染造成的影响","link":"#怎么避免缓存污染造成的影响","children":[]}]},{"level":2,"title":"#总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1696924078000,"updatedTime":1702194193000,"contributors":[{"name":"诗人都藏在水底","email":"895252461@qq.com","commits":2}]},"readingTime":{"minutes":15.99,"words":4798},"filePathRelative":"quality/operating-system/3.memory-manage/5.cache-lru.md","localizedDate":"2023年10月10日","excerpt":"<h1> 如何避免预读失效和缓存污染的问题？</h1>\\n<p>大家好，我是小林。</p>\\n<p>上周群里看到有位小伙伴面试时，被问到这两个问题：</p>\\n<p></p>\\n<p>咋一看，以为是在问操作系统的问题，其实这两个题目都是在问<strong>如何改进 LRU 算法</strong>。</p>\\n<p>因为传统的 LRU 算法存在这两个问题：</p>\\n<ul>\\n<li><strong>「预读失效」导致缓存命中率下降（对应第一个题目）</strong></li>\\n<li><strong>「缓存污染」导致缓存命中率下降（对应第二个题目）</strong></li>\\n</ul>\\n<p>Redis 的缓存淘汰算法则是通过<strong>实现 LFU 算法</strong>来避免「缓存污染」而导致缓存命中率下降的问题（Redis 没有预读机制）。</p>"}');export{l as data};