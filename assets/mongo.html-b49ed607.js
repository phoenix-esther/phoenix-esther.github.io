import{_ as o,V as i,W as p,X as n,Y as t,Z as a,a0 as e,D as l}from"./framework-5dde3bca.js";const u="/assets/image-20210224171756418-f59a593a.png",r="/assets/image-20210224165802775-7e4114ba.png",c="/assets/image-20210224170818625-6836d22f.png",d="/assets/image-20210224170932317-a12f06aa.png",v="/assets/map-reduce.bakedsvg-861f1b66.svg",m="/assets/image-20210224112302614-446b3b7e.png",b="/assets/2019092521124393-29085d09.png",q="/assets/1-10f0c988.jpg",k="/assets/2-2cd94cea.jpg",g="/assets/sharded-cluster-production-architecture.bakedsvg-7bc23549.svg",h="/assets/20160919130723606-6501f594.png",y="/assets/285763-20190418161324100-576146571-7cc6f590.png",x="/assets/285763-20190418161413324-957658228-cec38d6c.png",f="/assets/285763-20190418162312653-1231291425-94f596a4.png",_="/assets/285763-20190418162325618-2139414121-78c6c233.png",$={},S=e('<h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><h3 id="mongodb是什么" tabindex="-1"><a class="header-anchor" href="#mongodb是什么" aria-hidden="true">#</a> mongodb是什么</h3>',3),D={href:"https://baike.baidu.com/item/C%2B%2B",target:"_blank",rel:"noopener noreferrer"},M={href:"https://baike.baidu.com/item/%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93",target:"_blank",rel:"noopener noreferrer"},w={href:"https://baike.baidu.com/item/json",target:"_blank",rel:"noopener noreferrer"},O={href:"https://baike.baidu.com/item/bson",target:"_blank",rel:"noopener noreferrer"},B={href:"https://baike.baidu.com/item/%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"},C=e('<p><strong>一句话概括：mongodb是noSQL类型的文档数据库</strong></p><p><img src="'+u+'" alt="image-20210224171756418"></p><h3 id="mongodb的优缺点" tabindex="-1"><a class="header-anchor" href="#mongodb的优缺点" aria-hidden="true">#</a> mongodb的优缺点</h3><p>优点：</p><p>1.基于 JSON 的数据模型最接近开发者的面向对象的设计思维；</p><p>2.灵活动态的模型意味着在需求多变的时候极大简化数据库设计流程；</p><p>3.不需分库分表地实现自动分片、多节点自动同步和跨中心能力支持各种现代化复杂部署需求。</p><p>4.在大数据量级，高并发场景下有优势。</p><p>5.原生支持地理空间数据的存储，查询</p><p>从4.0开始支持事务，从4.2版本开始支持分布式事务，</p><p>当前最新版本为4.4版本，发布于2020.9</p><p>4.0版本发布于2018.8，4.2版本发布于2019.10。网上关于分布式事务的相关资料几乎没有，基本只能参考官方文档。</p><h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3><ul><li><p>网站数据：Mongo 非常适合实时的插入，更新与查询，并具备网站实时数据存储所需的复制及高度伸缩性。</p></li><li><p>缓存：由于性能很高，Mongo 也适合作为信息基础设施的缓存层。在系统重启之后，由Mongo 搭建的持久化缓存层可以避免下层的数据源过载。</p></li><li><p>大尺寸、低价值的数据：使用传统的关系型数据库存储一些数据时可能会比较昂贵，在此之前，很多时候程序员往往会选择传统的文件进行存储。</p></li><li><p>高伸缩性的场景：Mongo 非常适合由数十或数百台服务器组成的数据库，Mongo 的路线图中已经包含对MapReduce 引擎的内置支持。</p></li><li><p>用于对象及JSON 数据的存储：Mongo 的BSON 数据格式非常适合文档化格式的存储及查询。</p></li></ul><h3 id="案例分析" tabindex="-1"><a class="header-anchor" href="#案例分析" aria-hidden="true">#</a> 案例分析</h3><p>国内客户：</p><ul><li><p>亚信科技：数据中台产品，实时的数据分析</p></li><li><p>咪咕视频：嵌套文档的便利性</p></li><li><p>东方航空： 在线售票项目，为用户提供个性化的航班搜索服务，支持多目的地搜索、基于预算范围的搜索、城市主题的搜索、灵感语义的搜索、实时的低价日历搜索等。同时，灵活组合中转路径，提高OD航线覆盖率。（2016年的数据）</p></li></ul><p><img src="'+r+'" alt="image-20210224165802775"></p><ul><li><p>泰康保险：支撑互联网产品的客户中心和订单中心</p><p><img src="'+c+'" alt="image-20210224170818625"></p></li><li><p>招商银行</p><p><img src="'+d+`" alt="image-20210224170932317"></p></li></ul><p>百度百科上列举的数据：</p><ul><li>Craiglist上使用MongoDB的存档数十亿条记录。</li><li>FourSquare，基于位置的社交网站，在Amazon EC2的服务器上使用MongoDB分享数据。</li><li>Shutterfly，以互联网为基础的社会和个人出版服务，使用MongoDB的各种持久性数据存储的要求。</li><li>bit.ly, 一个基于Web的网址缩短服务，使用MongoDB的存储自己的数据。</li><li>spike.com，一个MTV网络的联营公司， spike.com使用MongoDB的。</li><li>Intuit公司，一个为小企业和个人的软件和服务提供商，为小型企业使用MongoDB的跟踪用户的数据。</li><li>sourceforge.net，资源网站查找，创建和发布开源软件免费，使用MongoDB的后端存储。</li><li>etsy.com ，一个购买和出售手工制作物品网站，使用MongoDB。</li><li>纽约时报，领先的在线新闻门户网站之一，使用MongoDB。</li><li>CERN，著名的粒子物理研究所，欧洲核子研究中心大型强子对撞机的数据使用MongoDB。</li></ul><h2 id="mongodb基础" tabindex="-1"><a class="header-anchor" href="#mongodb基础" aria-hidden="true">#</a> mongodb基础</h2><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><p>与mysql对比理解</p><table><thead><tr><th>mysql</th><th>mongodb</th></tr></thead><tbody><tr><td>database</td><td>database</td></tr><tr><td>table（表）</td><td>collection（集合）</td></tr><tr><td>row（行）</td><td>document（文档）</td></tr><tr><td>column（列）</td><td>field（字段）</td></tr></tbody></table><h3 id="mongodb的基本使用" tabindex="-1"><a class="header-anchor" href="#mongodb的基本使用" aria-hidden="true">#</a> MongoDB的基本使用</h3><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><p>下载windowns的二进制包解压即可</p><p>配置数据的存储目录（配置文件使用yml格式）</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">storage</span><span class="token punctuation">:</span>
  <span class="token key atrule">dbPath</span><span class="token punctuation">:</span> D<span class="token punctuation">:</span>\\developer\\env\\mongodb<span class="token punctuation">-</span>4.2.11\\data\\db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务指定配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin/mongod.exe <span class="token parameter variable">-f</span> conf/mongo.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>连接客户端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin/mongo.exe
// 指定远程地址
bin/mongo.exe  <span class="token number">192.168</span>.0.5:9999/foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mongdb新版配置文件说明</p><p>https://www.cnblogs.com/lxf1117/p/14267004.html</p><h4 id="数据库管理" tabindex="-1"><a class="header-anchor" href="#数据库管理" aria-hidden="true">#</a> 数据库管理</h4><p>使用 <code>show dbs</code>可以查看数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show dbs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用use切换数据库，如果数据库不存在，会直接创建。如果在使用时不指定数据库，mongodb默认使用test数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use database_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,41),N={href:"https://blog.csdn.net/qq_42979842/article/details/107105017",target:"_blank",rel:"noopener noreferrer"},A=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>admin   0.000GB
config  0.000GB
local   0.000GB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>admin库用于存储用户、角色等信息</p><p>local库主要存储副本集的元数据信息</p><p>config库主要存储分片集群基础信息</p><p>删除数据库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.dropDatabase()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除数据库的时候，先使用use切换到指定的库，在执行<code>db.dropDatabase()</code></p><h4 id="创建集合" tabindex="-1"><a class="header-anchor" href="#创建集合" aria-hidden="true">#</a> 创建集合</h4><p>mongodb数据库是无模式的，如果没有特殊要求，不需要提前常见集合。mongodb会根据需要自动创建。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.createCollection(name, options)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>options中都是可选参数，具体如下：</p><table><thead><tr><th>字段</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>capped</td><td>bool</td><td>如果为 true，则创建固定集合。固定集合是指有着固定大小的集合，当达到最大值时，它会自动覆盖最早的文档。<br><strong>当该值为 true 时，必须指定 size 参数。</strong></td></tr><tr><td>size</td><td>数值</td><td>为固定集合指定一个最大值，即字节数。<br><strong>如果 capped 为 true，也需要指定该字段。</strong></td></tr><tr><td>max</td><td>数值</td><td>指定固定集合中包含文档的最大数量。</td></tr></tbody></table><h5 id="固定集合" tabindex="-1"><a class="header-anchor" href="#固定集合" aria-hidden="true">#</a> 固定集合</h5><p>固定集合指的是事先创建，并且大小固定的集合。</p><p>固定集合特性：固定集合很像环形队列，如果空间不足，最早的文档就会被删除，为新的文档腾出空间。一般来说，固定集合适用于任何想要自动淘汰过期属性的场景。</p><p>创建固定集合</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.createCollection(name, {capped:true,size:1000,max:100})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>当集合的大小超过size时，会删除较早的数据。</li><li>当集合的条数超过max时，会删除较早的数据。</li></ul><h4 id="查看集合" tabindex="-1"><a class="header-anchor" href="#查看集合" aria-hidden="true">#</a> 查看集合</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>show collections
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除集合" tabindex="-1"><a class="header-anchor" href="#删除集合" aria-hidden="true">#</a> 删除集合</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.drop()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="bson" tabindex="-1"><a class="header-anchor" href="#bson" aria-hidden="true">#</a> BSON</h3><p>bson是以json格式为基础进行改造，使用二进制形式进行存储，增强了数据遍历速度（保存了元素的长度），增加了数据类型。</p><p>这里完全可以把bson看成是支持多数据类型的json</p><h4 id="json的数据类型" tabindex="-1"><a class="header-anchor" href="#json的数据类型" aria-hidden="true">#</a> json的数据类型：</h4><p>字符串、数字、对象、数组、布尔、Null</p><h4 id="bson的数据类型" tabindex="-1"><a class="header-anchor" href="#bson的数据类型" aria-hidden="true">#</a> bson的数据类型</h4><table><thead><tr><th style="text-align:left;">类型 Type</th><th style="text-align:left;">对应数字 Number</th><th style="text-align:left;">别名 Alias</th><th style="text-align:left;">备注 Notes</th></tr></thead><tbody><tr><td style="text-align:left;">双精度浮点型Double</td><td style="text-align:left;">1</td><td style="text-align:left;">“double”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">字符串String</td><td style="text-align:left;">2</td><td style="text-align:left;">“string”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">对象Object</td><td style="text-align:left;">3</td><td style="text-align:left;">“object”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">数组Array</td><td style="text-align:left;">4</td><td style="text-align:left;">“array”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">二进制数据Binary data</td><td style="text-align:left;">5</td><td style="text-align:left;">“binData”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">未定义Undefined</td><td style="text-align:left;">6</td><td style="text-align:left;">“undefined”</td><td style="text-align:left;">不推荐使用。</td></tr><tr><td style="text-align:left;">对象编号ObjectId</td><td style="text-align:left;">7</td><td style="text-align:left;">“objectId”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">布尔型Boolean</td><td style="text-align:left;">8</td><td style="text-align:left;">“bool”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">日期Date</td><td style="text-align:left;">9</td><td style="text-align:left;">“date”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">空值Null</td><td style="text-align:left;">10</td><td style="text-align:left;">“null”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">正则表达式Regular Expression</td><td style="text-align:left;">11</td><td style="text-align:left;">“regex”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">DBPointer</td><td style="text-align:left;">12</td><td style="text-align:left;">“dbPointer”</td><td style="text-align:left;">不推荐使用。</td></tr><tr><td style="text-align:left;">JavaScript</td><td style="text-align:left;">13</td><td style="text-align:left;">“javascript”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Symbol</td><td style="text-align:left;">14</td><td style="text-align:left;">“symbol”</td><td style="text-align:left;">不推荐使用。</td></tr><tr><td style="text-align:left;">JavaScript (带范围)</td><td style="text-align:left;">15</td><td style="text-align:left;">“javascriptWithScope”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">32位整数 32-bit integer</td><td style="text-align:left;">16</td><td style="text-align:left;">“int”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">时间戳 Timestamp</td><td style="text-align:left;">17</td><td style="text-align:left;">“timestamp”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">64位整数 64-bit integer</td><td style="text-align:left;">18</td><td style="text-align:left;">“long”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">小数128 Decimal128</td><td style="text-align:left;">19</td><td style="text-align:left;">“decimal”</td><td style="text-align:left;">3.4版的新功能。</td></tr><tr><td style="text-align:left;">最小键 Min key</td><td style="text-align:left;">-1</td><td style="text-align:left;">“minKey”</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">最大键 Max key</td><td style="text-align:left;">127</td><td style="text-align:left;">“maxKey”</td><td style="text-align:left;"></td></tr></tbody></table><h2 id="基本操作-crud" tabindex="-1"><a class="header-anchor" href="#基本操作-crud" aria-hidden="true">#</a> 基本操作（CRUD）</h2><h3 id="create" tabindex="-1"><a class="header-anchor" href="#create" aria-hidden="true">#</a> Create</h3><p>插入文档时，如果指定集合不存在，则创建集合</p><p>插入文档时，如果没有设置<code>_id</code>字段，mongo会自动生成一个<code>ObjectId</code></p><p>mongodb提供的插入文档的api</p><table><thead><tr><th>函数</th><th>说明</th></tr></thead><tbody><tr><td>db.collection.insertOne()</td><td>将单个文档插入到集合中。</td></tr><tr><td>db.collection.insertMany()</td><td>将多个文件插入集合中。</td></tr><tr><td>db.collection.insert()</td><td>将单个文档或多个文档插入到集合中。</td></tr></tbody></table><p>使用示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.insert({name:&quot;user1&quot;,age:10})

db.users.insert([
	{name:&quot;user2&quot;,age:20},
	{name:&quot;user3&quot;,age:30}
])

db.users.insertOne({&quot;name&quot;:&quot;user4&quot;,age:40})

db.users.insertMany([
	{name:&quot;user5&quot;,age:50},
	{name:&quot;user6&quot;,age:60}
])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.find({&quot;name&quot;:&quot;user1&quot;})

db.users.find({&quot;name&quot;:{&quot;$in&quot;:[&quot;user2&quot;,&quot;user3&quot;]}})

db.users.find({&quot;name&quot;:&quot;user4&quot;})

db.users.find({&quot;name&quot;:{&quot;$in&quot;:[&quot;user5&quot;,&quot;user6&quot;]}})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h3><table><thead><tr><th>方法</th><th>说明</th></tr></thead><tbody><tr><td>db.collection.deleteOne()</td><td>即使多个文档可能与指定过滤器匹配，也最多删除一个与指定过滤器匹配的文档。</td></tr><tr><td>db.collection.deleteMany()</td><td>删除所有与指定过滤器匹配的文档。</td></tr><tr><td>db.collection.remove()</td><td>删除单个文档或与指定过滤器匹配的所有文档。</td></tr></tbody></table><p>使用示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.remove({&quot;name&quot;:&quot;user1&quot;})

db.users.remove({&quot;name&quot;:{&quot;$in&quot;:[&quot;user2&quot;,&quot;user3&quot;]}})

db.users.deleteOne({&quot;name&quot;:{&quot;$in&quot;:[&quot;user5&quot;,&quot;user6&quot;]}})

db.users.deleteMany({&quot;name&quot;:{&quot;$in&quot;:[&quot;user5&quot;,&quot;user6&quot;]}})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h3><h4 id="方法列表" tabindex="-1"><a class="header-anchor" href="#方法列表" aria-hidden="true">#</a> 方法列表</h4><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">db.collection.updateOne()</td><td style="text-align:left;">即使多个文档可能与指定的过滤器匹配，最多更新与指定的过滤器匹配的单个文档。</td></tr><tr><td style="text-align:left;">db.collection.updateMany()</td><td style="text-align:left;">更新所有与指定过滤器匹配的文档。</td></tr><tr><td style="text-align:left;">db.collection.replaceOne()</td><td style="text-align:left;">即使多个文档可能与指定过滤器匹配，也最多替换一个与指定过滤器匹配的文档。</td></tr><tr><td style="text-align:left;">db.collection.update()</td><td style="text-align:left;">更新或替换与指定过滤器匹配的单个文档，或更新与指定过滤器匹配的所有文档。 默认情况下，db.collection.update()方法更新单个文档。 要更新多个文档，请使用<strong>multi</strong>选项。</td></tr></tbody></table><h4 id="语法说明" tabindex="-1"><a class="header-anchor" href="#语法说明" aria-hidden="true">#</a> 语法说明</h4><p>update()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.update(
   &lt;query&gt;,
   &lt;update&gt;,
   {
     upsert: &lt;boolean&gt;,
     multi: &lt;boolean&gt;,
     writeConcern: &lt;document&gt;,
     collation: &lt;document&gt;,
     arrayFilters: [ &lt;filterdocument1&gt;, ... ],
     hint:  &lt;document|string&gt;        // Available starting in MongoDB 4.2
   }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>updateOne()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.updateOne(
   &lt;filter&gt;,
   &lt;update&gt;,
   {
     upsert: &lt;boolean&gt;,
     writeConcern: &lt;document&gt;,
     collation: &lt;document&gt;,
     arrayFilters: [ &lt;filterdocument1&gt;, ... ],
     hint:  &lt;document|string&gt;        // Available starting in MongoDB 4.2.1
   }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>updateMany()</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.updateMany(
   &lt;filter&gt;,
   &lt;update&gt;,
   {
     upsert: &lt;boolean&gt;,
     writeConcern: &lt;document&gt;,
     collation: &lt;document&gt;,
     arrayFilters: [ &lt;filterdocument1&gt;, ... ],
     hint:  &lt;document|string&gt;        // Available starting in MongoDB 4.2.1
   }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>options</strong></em><strong>参数说明</strong></p><p>options中的参数都是可选的，下面列出参数的功能：</p><table><thead><tr><th>option</th><th>说明</th></tr></thead><tbody><tr><td>upsert <code>boolean</code></td><td>默认为<strong>false</strong><br>当upsert为<strong>true</strong>时，如果filter没有匹配到文档，则将<code>update</code>中的参数保存起来。如果<code>filter</code>中参数中指定了id，在保存时使用指定的id，没指定就自动生成一个id。<br>当upsert为<strong>false</strong>时，filter匹配上就更新文档，没匹配上不做任何操作</td></tr><tr><td>multi <code>boolean</code></td><td>默认为false<br>当multi为true时，update操作会更新集合中所有匹配到的文档，<br>当multi为false时，update操作默认只更新集合中匹配到的第一个文档</td></tr><tr><td>writeConcern</td><td></td></tr><tr><td>collation</td><td></td></tr><tr><td>arrayFilters</td><td></td></tr><tr><td>hint</td><td>指定查询时使用的索引</td></tr></tbody></table><h4 id="更新运算符" tabindex="-1"><a class="header-anchor" href="#更新运算符" aria-hidden="true">#</a> 更新运算符</h4><h5 id="字段更新运算符" tabindex="-1"><a class="header-anchor" href="#字段更新运算符" aria-hidden="true">#</a> 字段更新运算符</h5><table><thead><tr><th>operator</th><th>说明</th></tr></thead><tbody><tr><td>$currentDate</td><td>将字段的值设置为当前日期，即日期或时间戳。</td></tr><tr><td>$inc</td><td>将字段的值增加指定的数量。</td></tr><tr><td>$min</td><td>仅当指定值小于现有字段值时才更新该字段。</td></tr><tr><td>$max</td><td>仅当指定值大于现有字段值时才更新该字段。</td></tr><tr><td>$mul</td><td>将字段的值乘以指定的数量。</td></tr><tr><td>$rename</td><td>重命名字段。</td></tr><tr><td>$set</td><td>设置文档中字段的值。</td></tr><tr><td>$setOnInsert</td><td>如果更新导致插入文档，则设置字段的值。对修改现有文档的更新操作没有影响。</td></tr><tr><td>$unset</td><td>从文档中删除指定的字段。</td></tr></tbody></table><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 不使用操作符，只会简单的替换整个文档</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user4&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;addr&quot;</span><span class="token operator">:</span><span class="token string">&quot;beijing&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
    	<span class="token string-property property">&quot;$currentDate&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;pron&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token string-property property">&quot;test.date&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$type&quot;</span><span class="token operator">:</span><span class="token number">17</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;$set&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;test.desc&quot;</span><span class="token operator">:</span><span class="token string">&quot;test desc&quot;</span><span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token literal-property property">$set</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;pron&quot;</span><span class="token operator">:</span><span class="token string">&quot;$$NOW&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;test.date&quot;</span><span class="token operator">:</span><span class="token string">&quot;$$CLUSTER_TIME&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$inc&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$min&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$max&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$mul&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$rename&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token string">&quot;agee&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$set&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span><span class="token string">&quot;user111&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$set&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string-property property">&quot;$setOnInsert&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;pron&quot;</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user111&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$set&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string-property property">&quot;$setOnInsert&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;pron&quot;</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;upsert&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$unset&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;agee&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="数组更新运算符" tabindex="-1"><a class="header-anchor" href="#数组更新运算符" aria-hidden="true">#</a> 数组更新运算符</h5><table><thead><tr><th>operator</th><th>说明</th></tr></thead><tbody><tr><td>$</td><td>充当占位符，以更新与查询条件匹配的第一个元素。</td></tr><tr><td>$[]</td><td>充当占位符，以更新匹配查询条件的文档的数组中的所有元素。</td></tr><tr><td>$[<code>identifier</code>]</td><td>充当占位符，以更新<code>arrayFilters</code>与查询条件匹配的文档中所有与条件匹配的元素。</td></tr><tr><td>$addToSet</td><td>仅当元素不存在于集合中时才将它们添加到数组中。</td></tr><tr><td>$pop</td><td>删除数组的第一项或最后一项。</td></tr><tr><td>$pull</td><td>删除与指定查询匹配的所有数组元素。</td></tr><tr><td>$push</td><td>将项目添加到数组。</td></tr><tr><td>$pullAll</td><td>从数组中删除所有匹配的值。</td></tr></tbody></table><p>更新修饰符</p><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>$each</td><td>修改<code>$push</code>和<code>$addToSet</code>运算符以附加多个项以进行数组更新。</td></tr><tr><td>$position</td><td>修改<code>$push</code>运算符以指定要添加元素的数组中的位置。</td></tr><tr><td>$slice</td><td>修改<code>$push</code>运算符以限制更新数组的大小。</td></tr><tr><td>$sort</td><td>修改<code>$push</code>运算符以对存储在数组中的文档重新排序。</td></tr></tbody></table><p><strong>语法</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$
<span class="token comment">// 针对数组中是元素的情况</span>
db<span class="token punctuation">.</span>collection<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
   <span class="token punctuation">{</span> <span class="token operator">&lt;</span>array<span class="token operator">&gt;</span><span class="token operator">:</span> value <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token operator">&lt;</span>update operator<span class="token operator">&gt;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;&lt;array&gt;.$&quot;</span> <span class="token operator">:</span> value <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">// 针对数组中是文档的情况</span>
db<span class="token punctuation">.</span>collection<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
   <span class="token punctuation">{</span> <span class="token operator">&lt;</span>query selector<span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token operator">&lt;</span>update operator<span class="token operator">&gt;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;array.$.field&quot;</span> <span class="token operator">:</span> value <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

$<span class="token punctuation">[</span><span class="token punctuation">]</span>
db<span class="token punctuation">.</span>collection<span class="token punctuation">.</span><span class="token function">updateMany</span><span class="token punctuation">(</span>
   <span class="token punctuation">{</span> <span class="token operator">&lt;</span>query conditions<span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token operator">&lt;</span>update operator<span class="token operator">&gt;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;&lt;array&gt;.$[]&quot;</span> <span class="token operator">:</span> value <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
db<span class="token punctuation">.</span>collection<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
   <span class="token punctuation">{</span> <span class="token operator">&lt;</span>query selector<span class="token operator">&gt;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token operator">&lt;</span>update operator<span class="token operator">&gt;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">&quot;array.$[].field&quot;</span> <span class="token operator">:</span> value <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

$addToSet

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建数据</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>
	<span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">{</span><span class="token string-property property">&quot;$set&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">item</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">book</span><span class="token operator">:</span><span class="token punctuation">[</span>
        	<span class="token punctuation">{</span><span class="token literal-property property">bid</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;aaa&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">page</span><span class="token operator">:</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token literal-property property">date</span><span class="token operator">:</span><span class="token number">2018</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">bid</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;bbb&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">page</span><span class="token operator">:</span><span class="token number">400</span><span class="token punctuation">,</span><span class="token literal-property property">date</span><span class="token operator">:</span><span class="token number">2019</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span><span class="token literal-property property">bid</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">page</span><span class="token operator">:</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token literal-property property">date</span><span class="token operator">:</span><span class="token number">2020</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// 匹配单一元素（filter匹配多个时，只会更新第一个）</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">,</span><span class="token literal-property property">item</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$set</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;item.$&quot;</span><span class="token operator">:</span><span class="token number">40</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;book.bid&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string-property property">&quot;$set&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;book.$.page&quot;</span><span class="token operator">:</span><span class="token number">480</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;book&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$elemMatch</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">page</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$gte</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$set</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;book.$.std&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// $[] 默认匹配全部元素，可使用arrayFilters进行过滤</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$inc</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;item.$[]&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$inc</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;book.$[].page&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$inc</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;book.$[bok].page&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span><span class="token literal-property property">arrayFilters</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string-property property">&quot;bok.date&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$lte</span><span class="token operator">:</span><span class="token number">2019</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// $addToSet(添加多元素时，要用$each修饰一下)</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$addToSet</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">item</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$addToSet</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">item</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">$each</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// $pop 从数组头或尾删除一个元素</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$pop</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;item&quot;</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//$pull 把所有匹配的都删除</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$pull</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">item</span><span class="token operator">:</span><span class="token number">11</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$pull</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">item</span><span class="token operator">:</span><span class="token punctuation">{</span>$<span class="token keyword">in</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$pullAll</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">item</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// $push</span>
db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;user1&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">$push</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">item</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">$each</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$sort</span><span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">$slice</span><span class="token operator">:</span><span class="token number">10</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="按位更新运算符" tabindex="-1"><a class="header-anchor" href="#按位更新运算符" aria-hidden="true">#</a> 按位更新运算符</h5><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>$bit</td><td>执行按位<code>AND</code>，<code>OR</code>和<code>XOR</code>整数值的更新。</td></tr></tbody></table><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ $bit: { &lt;field&gt;: { &lt;and|or|xor&gt;: &lt;int&gt; } } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ _id: 1, expdata: NumberInt(13) }
===============================================
db.switches.update(
   { _id: 1 },
   { $bit: { expdata: { and: NumberInt(10) } } }
)
================================================
1101
1010
----
1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="retrieve" tabindex="-1"><a class="header-anchor" href="#retrieve" aria-hidden="true">#</a> Retrieve</h3><h4 id="方法列表-1" tabindex="-1"><a class="header-anchor" href="#方法列表-1" aria-hidden="true">#</a> 方法列表</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.find()               
db.users.findOne()            
db.users.findOneAndReplace()
db.users.findAndModify()     
db.users.findOneAndDelete() 
db.users.findOneAndUpdate()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="语法说明-1" tabindex="-1"><a class="header-anchor" href="#语法说明-1" aria-hidden="true">#</a> 语法说明</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collections.find(
	&lt;query&gt;,
	&lt;projection&gt;
) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数说明：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;"><code>query</code></td><td style="text-align:left;">document</td><td style="text-align:left;">可选的。使用query operators指定选择过滤器。要 return 集合中的所有文档，请省略此参数或传递空文档(<code>{}</code>)。</td></tr><tr><td style="text-align:left;"><code>projection</code></td><td style="text-align:left;">document</td><td style="text-align:left;">可选的。指定_retch 查询过滤器的文档中的 return 字段。要_retret 匹配文档中的所有字段，请省略此参数。有关详细信息，请参阅投影。</td></tr></tbody></table><h4 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符" aria-hidden="true">#</a> 运算符</h4><h5 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符" aria-hidden="true">#</a> 比较运算符</h5><table><thead><tr><th>名称</th><th>结果</th></tr></thead><tbody><tr><td>$eq</td><td>匹配等于指定值的值。</td></tr><tr><td>$ne</td><td>匹配所有不等于指定值的值。</td></tr><tr><td>$gt</td><td>匹配大于指定值的值</td></tr><tr><td>$gte</td><td>匹配大于或等于指定值的值。</td></tr><tr><td>$lt</td><td>匹配小于指定值的值。</td></tr><tr><td>$lte</td><td>匹配小于或等于指定值的值。</td></tr><tr><td>$in</td><td>匹配数组中指定的任何值。</td></tr><tr><td>$nin</td><td>不匹配数组中指定的任何值。</td></tr></tbody></table><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.find({&quot;name&quot;:{&quot;$eq&quot;:&quot;user1&quot;}})

db.users.find({&quot;age&quot;:{&quot;$lt&quot;:50,&quot;$gte&quot;:20}})

....
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h5><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>$and</td><td>使用逻辑<code>AND</code>连接查询子句，返回与这两个子句条件匹配的所有文档。</td></tr><tr><td>$not</td><td>反转查询表达式的效果，并返回与查询表达式<em>不</em>匹配的文档。</td></tr><tr><td>$nor</td><td>用逻辑<code>NOR</code>连接查询子句，返回所有不能匹配这两个子句的文档。</td></tr><tr><td>$or</td><td>用逻辑<code>OR</code>连接查询子句，返回与任一子句条件匹配的所有文档。</td></tr></tbody></table><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.find({&quot;$and&quot;:[{&quot;name&quot;:{&quot;$ne&quot;:&quot;user1&quot;}},{&quot;age&quot;:{&quot;$lte&quot;:60}}]})

// not的参数只能使用正则或者document
db.users.find({&quot;name&quot;:{&quot;$not&quot;:{$eq:&quot;user1&quot;}}})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="元素" tabindex="-1"><a class="header-anchor" href="#元素" aria-hidden="true">#</a> 元素</h5><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>$exists</td><td>匹配具有指定字段的文档。</td></tr><tr><td>$type</td><td>如果字段是指定类型，则选择文档。</td></tr></tbody></table><h5 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h5><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>$all</td><td>匹配包含查询中指定的所有元素的数组。</td></tr><tr><td>$elemMatch</td><td>如果array字段中的元素符合所有指定<code>$elemMatch</code>条件，则选择文档。</td></tr><tr><td>$size</td><td>如果数组字段为指定大小，则选择文档。</td></tr></tbody></table><h5 id="按位" tabindex="-1"><a class="header-anchor" href="#按位" aria-hidden="true">#</a> 按位</h5><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>$bitsAllClear</td><td>匹配数字或二进制值，其中一组位的<em>所有</em>值均为<code>0</code>。</td></tr><tr><td>$bitsAllSet</td><td>匹配数字或二进制值，其中一组位的<em>所有</em>值均为<code>1</code>。</td></tr><tr><td>$bigsAnyClear</td><td>匹配数值或二进制值，在这些数值或二进制值中，一组位的位置中<em>任何</em>位的值为<code>0</code>。</td></tr><tr><td>$bigsAnySet</td><td>匹配数值或二进制值，在这些数值或二进制值中，一组位的位置中<em>任何</em>位的值为<code>1</code>。</td></tr></tbody></table><h5 id="映射运算符" tabindex="-1"><a class="header-anchor" href="#映射运算符" aria-hidden="true">#</a> 映射运算符</h5><table><thead><tr><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>$</td><td>数组中匹配查询条件的第一个元素。</td></tr><tr><td>$elemMatch</td><td>符合指定$elemMatch条件的数组中的第一个元素。</td></tr><tr><td>$meta</td><td>项目在$text操作期间分配的文档分数。</td></tr><tr><td>$slice</td><td>限制从数组中投影的元素数量。支持<code>limit</code>和<code>skip</code>。</td></tr></tbody></table><h4 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询" aria-hidden="true">#</a> 基本查询</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 通过条件过滤
db.inventory.find({qty:25})

// 指定多个条件
db.inventory.find({qty:25, item: &quot;journal&quot;})

// 多条件查询
db.inventory.find( { status: &quot;A&quot;, qty: { $lt: 30 } } )

// 使用逻辑运算符：$in
db.inventory.find({item: {$in : [&quot;canvas&quot;,&quot;mat&quot;] }})

// 使用逻辑运算符：$or
db.inventory.find({$or :[{qty: 25}, {item: &quot;mat&quot;}]})

// 复合条件查询，支持正则
db.inventory.find( {
     status: &quot;A&quot;,
     $or: [ { qty: { $lt: 30 } }, { item: /^p/ } ]
} )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="限制返回的字段" tabindex="-1"><a class="header-anchor" href="#限制返回的字段" aria-hidden="true">#</a> 限制返回的字段</h4><p>可以通过第二个参数来限制返回的字段</p><ul><li>1：标识包含，0：标识排除</li><li>_id字段默认包含，要排除需要显示指定</li><li>可以使用包含方式，或者排除方式</li></ul><p>测试数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.inventory.insertMany( [ 
    { item: &quot;journal&quot;, status: &quot;A&quot;, size: { h: 14, w: 21, uom: &quot;cm&quot; }, instock: [ { warehouse: &quot;A&quot;, qty: 5 } ] },
    { item: &quot;notebook&quot;, status: &quot;A&quot;,  size: { h: 8.5, w: 11, uom: &quot;in&quot; }, instock: [ { warehouse: &quot;C&quot;, qty: 5 } ] },
    { item: &quot;paper&quot;, status: &quot;D&quot;, size: { h: 8.5, w: 11, uom: &quot;in&quot; }, instock: [ { warehouse: &quot;A&quot;, qty: 60 } ] },
    { item: &quot;planner&quot;, status: &quot;D&quot;, size: { h: 22.85, w: 30, uom: &quot;cm&quot; }, instock: [ { warehouse: &quot;A&quot;, qty: 40 } ] },
    { item: &quot;postcard&quot;, status: &quot;A&quot;, size: { h: 10, w: 15.25, uom: &quot;cm&quot; }, instock: [ { warehouse: &quot;B&quot;, qty: 15 }, { warehouse: &quot;C&quot;, qty: 35 } ] }
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 通过第二个参数来限制返回的字段，1：返回，0：不返回，_id字段时默认返回的，若要禁止需要显示设置
db.inventory.find({&quot;instock.qty&quot;:25}, {item:1,&quot;instock.qty&quot;:1})
// 禁止_id字段
db.inventory.find({qty:25}, {item:1,qty:1,_id:0})

// 指定嵌套的字段
db.inventory.find( { status: &quot;A&quot; }, { item: 1, status: 1, &quot;size.uom&quot;: 1 })

// 返回除了被排除的字段之外的所有字段
db.inventory.find( { status: &quot;A&quot; }, { status: 0, instock: 0 } )

// 禁止嵌入文档中的特定字段
db.inventory.find( { status: &quot;A&quot; },{ &quot;size.uom&quot;: 0 })

// 数组中嵌入式文档的
db.inventory.find( { status: &quot;A&quot; }, { item: 1, status: 1, &quot;instock.qty&quot;: 1 } )

/**
 * 数组切片
 * $slice: 1  正序返回一个，负数表示倒序返回
 * $slice: [20, 10]  从第20个开始，返回10个元素
 */
db.inventory.find( { status: &quot;A&quot; }, { item: 1, status: 1, instock: { $slice: -1 } } )

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询空字段" tabindex="-1"><a class="header-anchor" href="#查询空字段" aria-hidden="true">#</a> 查询空字段</h4><p>测试数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.inventory.insertMany([
   { _id: 1, item: null },
   { _id: 2 }
])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// {item：null}查询匹配包含值是null的item字段或不包含item字段的文档。
db.inventory.find( { item: null } )

// {item：{$ type：10}}查询只匹配包含item字段值为null的文档； 即item字段的值为BSON Type为Null（类型编号10）
db.inventory.find( { item : { $type: 10 } } )

// {item：{$ exists：false}}查询与不包含item字段的文档匹配：
db.inventory.find( { item : { $exists: false } } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询数组-数组元素是值的情况" tabindex="-1"><a class="header-anchor" href="#查询数组-数组元素是值的情况" aria-hidden="true">#</a> 查询数组（数组元素是值的情况）</h4><p>测试数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.inventory.insertMany([
    { item: &quot;journal&quot;, qty: 25, tags: [&quot;blank&quot;, &quot;red&quot;], dim_cm: [ 14, 21 ] }, 
    { item: &quot;notebook&quot;, qty: 50, tags: [&quot;red&quot;, &quot;blank&quot;], dim_cm: [ 14, 21 ] },
    { item: &quot;paper&quot;, qty: 100, tags: [&quot;red&quot;, &quot;blank&quot;, &quot;plain&quot;], dim_cm: [ 14, 21 ] },
    { item: &quot;planner&quot;, qty: 75, tags: [&quot;blank&quot;, &quot;red&quot;], dim_cm: [ 22.85, 30 ] },  
    { item: &quot;postcard&quot;, qty: 45, tags: [&quot;blue&quot;], dim_cm: [ 10, 15.25 ] }
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 顺序必须完全一致
db.inventory.find( { tags: [&quot;red&quot;, &quot;blank&quot;] } )
// 找到一个同时包含元素“ red”和“ blank”的数组
db.inventory.find( { tags: { $all: [&quot;red&quot;, &quot;blank&quot;] } } )
// tag是一个包含字符串“ red”作为其元素之一的数组
db.inventory.find( { tags: &quot;red&quot; } )
// 查询数组dim_cm包含至少一个值大于25的元素的所有文档。
db.inventory.find( { dim_cm: { $gt: 25 } } )

// 只要存在元素大于15，小于20即可，不一定是同一个
db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } )
//查询在dim_cm数组中包含至少一个同时大于($gt)22和小于 ($lt) 30的元素的文档
db.inventory.find( { dim_cm: { $elemMatch: { $gt: 22, $lt: 30 } } } )
// 指定数组的索引
db.inventory.find( { &quot;dim_cm.1&quot;: { $gt: 25 } } )
// 选择数组tags具有3个元素的文档
db.inventory.find( { &quot;tags&quot;: { $size: 3 } } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询数组-数组元素是文档的情况" tabindex="-1"><a class="header-anchor" href="#查询数组-数组元素是文档的情况" aria-hidden="true">#</a> 查询数组（数组元素是文档的情况）</h4><p>创建测试数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.inventory.insertMany( [
    { item: &quot;journal&quot;, instock: [ { warehouse: &quot;A&quot;, qty: 5 }, { warehouse: &quot;C&quot;, qty: 15 } ] },  
    { item: &quot;notebook&quot;, instock: [ { warehouse: &quot;C&quot;, qty: 5 } ] },
    { item: &quot;paper&quot;, instock: [ { warehouse: &quot;A&quot;, qty: 60 }, { warehouse: &quot;B&quot;, qty: 15 } ] },
    { item: &quot;planner&quot;, instock: [ { warehouse: &quot;A&quot;, qty: 40 }, { warehouse: &quot;B&quot;, qty: 5 } ] }, 
    { item: &quot;postcard&quot;, instock: [ { warehouse: &quot;B&quot;, qty: 15 }, { warehouse: &quot;C&quot;, qty: 35 } ] }
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查询数组中的元素与指定文档匹配的所有文档（要求完全匹配，包括顺序）
db.inventory.find( { &quot;instock&quot;: { warehouse: &quot;A&quot;, qty: 5 } } )
// 错误示例， 顺序不对时查询不到的
db.inventory.find( { &quot;instock&quot;: { qty: 5, warehouse: &quot;A&quot; } } )

// 指定查询条件(数组内只有由一条数据符合就可以)
db.inventory.find( {&#39;instock.qty&#39;: { $lte: 20 }}, {instock:1} )

// 可以指定数组索引
db.inventory.find( {&#39;instock.0.qty&#39;: { $lte: 20 }}, {instock:1})

// $elemMatch  指定多条件
db.inventory.find( { &quot;instock&quot;: { $elemMatch: { qty: 5, warehouse: &quot;A&quot; } } } )
db.inventory.find( { &quot;instock&quot;: { $elemMatch: { qty: { $gt: 10, $lte: 20 } } } } )

//元素组合满足标准
db.inventory.find( { &quot;instock.qty&quot;: { $gt: 10,  $lte: 20 } } )
db.inventory.find( { &quot;instock.qty&quot;: 5, &quot;instock.warehouse&quot;: &quot;A&quot; } )

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询嵌套文档" tabindex="-1"><a class="header-anchor" href="#查询嵌套文档" aria-hidden="true">#</a> 查询嵌套文档</h4><p>测试数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.inventory.insertMany( [
    { item: &quot;journal&quot;, qty: 25, size: { h: 14, w: 21, uom: &quot;cm&quot; }, status: &quot;A&quot; },
    { item: &quot;notebook&quot;, qty: 50, size: { h: 8.5, w: 11, uom: &quot;in&quot; }, status: &quot;A&quot; },
    { item: &quot;paper&quot;, qty: 100, size: { h: 8.5, w: 11, uom: &quot;in&quot; }, status: &quot;D&quot; },
    { item: &quot;planner&quot;, qty: 75, size: { h: 22.85, w: 30, uom: &quot;cm&quot; }, status: &quot;D&quot; },
    { item: &quot;postcard&quot;, qty: 45, size: { h: 10, w: 15.25, uom: &quot;cm&quot; }, status: &quot;A&quot; }
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 查询字段size等于文档{h：14，w：21，uom：“ cm”}的所有文档,包括字段顺序
db.inventory.find( { size: { h: 14, w: 21, uom: &quot;cm&quot; } } )

db.inventory.find( { &quot;size.uom&quot;: &quot;in&quot; } )

db.inventory.find( { &quot;size.h&quot;: { $lt: 15 } } )

db.inventory.find( { &quot;size.h&quot;: { $lt: 15 }, &quot;size.uom&quot;: &quot;in&quot;, status: &quot;D&quot; } )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb-聚合" tabindex="-1"><a class="header-anchor" href="#mongodb-聚合" aria-hidden="true">#</a> MongoDB 聚合</h2><p>聚合操作处理数据记录和 return 计算结果。聚合操作将来自多个文档的值组合在一起，并且可以对分组数据执行各种操作以返回单个结果。 MongoDB 提供了三种执行聚合的方法：聚合管道，map-reduce function和单一目的聚合方法</p><h3 id="聚合管道" tabindex="-1"><a class="header-anchor" href="#聚合管道" aria-hidden="true">#</a> 聚合管道</h3><p>聚合管道是用于数据聚合的框架，其模型基于数据处理管道的概念。文档进入多阶段管道，将文档转换为聚合结果。</p><p>下面给出一个简单的例子</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.aggregate([
	{$match:{&quot;gender&quot;:0}},
	{$group:{_id:&quot;$age&quot;,count:{$sum:1}}}
])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以将聚合管道类比为Java中的流计算</p><h3 id="管道操作符" tabindex="-1"><a class="header-anchor" href="#管道操作符" aria-hidden="true">#</a> 管道操作符</h3><h4 id="match" tabindex="-1"><a class="header-anchor" href="#match" aria-hidden="true">#</a> $match</h4><p>$match主要用于对集合中文档的筛选</p><h4 id="project" tabindex="-1"><a class="header-anchor" href="#project" aria-hidden="true">#</a> $project</h4><p>$project可以提取字段，重命名字段，包含或排除字段，还可以组合和嵌套操作符，是一个很强大的操作符。</p><p><strong>管道表达式</strong></p><p>简单的包含和排除字段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.aggregate({
	$project:{&quot;userId&quot;:&quot;$_id&quot;, &quot;_id&quot;:0, &quot;name&quot;:1}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>数学表达式</strong></p><ul><li>$add:[expr1,[expr2...exprN]]</li></ul><p>接收多个参数，求和</p><ul><li>$subtract:[expr1,expr2]</li></ul><p>接收两个参数，expr1-expr2</p><ul><li>$multiply:[expr1,[expr2...exprN]]</li></ul><p>接收多个参数，相乘</p><ul><li>$divide:[expr1,expr2]</li></ul><p>接收两个参数，求商</p><ul><li>$mod:[expr1,expr2]</li></ul><p>接收两个参数，取余</p><p><strong>日期表达式</strong></p><p>表达式可以从日期类型的字段中提取日期</p><p>$year</p><p>$month</p><p>$week</p><p>$dayOfMonth</p><p>$dayOfWeek</p><p>$dayOfYear</p><p>$hour</p><p>$minute</p><p>$second</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.aggregate({
	$project:{&quot;day&quot;:{$month:new Date(&quot;2021-04-01&quot;)}}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字符串表达式</strong></p><ul><li>$substr: [expr, startOffset, numToReturn]</li></ul><p>expr必须是字符串，从startOffset字节开始，numToReturn个字节返回。</p><ul><li>$concat: [expr1, [expr2, ..., exprN]]</li></ul><p>连接字符串</p><ul><li>$toLower: expr</li></ul><p>转小写</p><ul><li>$toUpper: epxr</li></ul><p>转大写</p><p><strong>逻辑表达式</strong></p><p>$cmp: [expr1, expr2]</p><p>比较expr1与expr2，expr1=expr2 返回0，expr1&lt;expr2 返回负数，expr1&gt;expr2 返回正数，</p><p>$strcasecmp: [string1, string2]</p><p>$eq/$ne/$gt/$gte/$lt/$lte/ : [expr1, expr2]</p><p>比较expr1与expr2，返回true或false</p><p>$and: [expr1, [expr2, ..., exprN]] 与</p><p>$or: [expr1, [expr2, ..., exprN]] 或</p><p>$not: epxr 取反</p><p>$cond: [booleanExpr, trueExpr, falseExpr] 类似三目运算</p><p>$ifNull: [expr, replacementExpr] 如果expr为空，返回replacementExpr，否则返回expr</p><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 测试数据
{
  &quot;_id&quot; : 1,
  title: &quot;abc123&quot;,
  isbn: &quot;0001122223334&quot;,
  author: { last: &quot;zzz&quot;, first: &quot;aaa&quot; },
  copies: 5,
  lastModified: &quot;2016-07-28&quot;
}
{
  &quot;_id&quot; : 2,
  title: &quot;Baked Goods&quot;,
  isbn: &quot;9999999999999&quot;,
  author: { last: &quot;xyz&quot;, first: &quot;abc&quot;, middle: &quot;&quot; },
  copies: 2,
  lastModified: &quot;2017-07-21&quot;
}
{
  &quot;_id&quot; : 3,
  title: &quot;Ice Cream Cakes&quot;,
  isbn: &quot;8888888888888&quot;,
  author: { last: &quot;xyz&quot;, first: &quot;abc&quot;, middle: &quot;mmm&quot; },
  copies: 5,
  lastModified: &quot;2017-07-22&quot;
}

// 示例
db.books.aggregate( [
   {
      $project: {
         title: 1,
         &quot;author.first&quot;: 1,
         &quot;author.last&quot; : 1,
         &quot;author.middle&quot;: {
            $cond: {
               if: { $eq: [ &quot;&quot;, &quot;$author.middle&quot; ] },
               then: &quot;$$REMOVE&quot;,
               else: &quot;$author.middle&quot;
            }
         }
      }
   }
] )

// 示例
db.books.aggregate(
   [
      {
         $project: {
            title: 1,
            isbn: {
               prefix: { $substr: [ &quot;$isbn&quot;, 0, 3 ] },
               group: { $substr: [ &quot;$isbn&quot;, 3, 2 ] },
               publisher: { $substr: [ &quot;$isbn&quot;, 5, 4 ] },
               title: { $substr: [ &quot;$isbn&quot;, 9, 3 ] },
               checkDigit: { $substr: [ &quot;$isbn&quot;, 12, 1] }
            },
            lastName: &quot;$author.last&quot;,
            copiesSold: &quot;$copies&quot;
         }
      }
   ]
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="group" tabindex="-1"><a class="header-anchor" href="#group" aria-hidden="true">#</a> $group</h4><p>分组函数</p><p>$group阶段限制的内存大小为100MB，如果数据超过100MB就会报错，可以通过修改allowdiskuse选项来允许处理大型数据集</p><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  $group:
    {
      _id: &lt;expression&gt;, // Group By Expression
      &lt;field1&gt;: { &lt;accumulator1&gt; : &lt;expression1&gt; },
      ...
    }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_id 字段可以是字段或文档</p><p>参数列表：</p>`,194),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Name"),n("th",{style:{"text-align":"left"}},"Description")])],-1),j={style:{"text-align":"left"}},z={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/accumulator/#grp._S_accumulator",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"$accumulator",-1),E=n("td",{style:{"text-align":"left"}},"返回用户定义的累加器函数的结果（类似UDAF函数）",-1),R={style:{"text-align":"left"}},P={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/addToSet/#grp._S_addToSet",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"$addToSet",-1),F=n("td",{style:{"text-align":"left"}},[t("Returns an array of "),n("em",null,"unique"),t(" expression values for each group. Order of the array elements is undefined.")],-1),K={style:{"text-align":"left"}},G={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/avg/#grp._S_avg",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"$avg",-1),W=n("td",{style:{"text-align":"left"}},"计算平均值，忽略非数值元素",-1),J={style:{"text-align":"left"}},V={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/first/#grp._S_first",target:"_blank",rel:"noopener noreferrer"},Y=n("code",null,"$first",-1),Q=n("td",{style:{"text-align":"left"}},"返回数组中的第一个值，通常情况下先排序。",-1),Z={style:{"text-align":"left"}},H={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/last/#grp._S_last",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"$last",-1),nn=n("td",{style:{"text-align":"left"}},"返回数组中的最后一个值，通常情况下先排序",-1),sn={style:{"text-align":"left"}},an={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/max/#grp._S_max",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"$max",-1),en=n("td",{style:{"text-align":"left"}},"返回group中的最大值",-1),on={style:{"text-align":"left"}},pn={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/mergeObjects/#exp._S_mergeObjects",target:"_blank",rel:"noopener noreferrer"},ln=n("code",null,"$mergeObjects",-1),un=n("td",{style:{"text-align":"left"}},"Returns a document created by combining the input documents for each group.",-1),rn={style:{"text-align":"left"}},cn={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/min/#grp._S_min",target:"_blank",rel:"noopener noreferrer"},dn=n("code",null,"$min",-1),vn=n("td",{style:{"text-align":"left"}},"返回group中的最小值",-1),mn={style:{"text-align":"left"}},bn={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/push/#grp._S_push",target:"_blank",rel:"noopener noreferrer"},qn=n("code",null,"$push",-1),kn=n("td",{style:{"text-align":"left"}},"Returns an array of expression values for each group.",-1),gn={style:{"text-align":"left"}},hn={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/stdDevPop/#grp._S_stdDevPop",target:"_blank",rel:"noopener noreferrer"},yn=n("code",null,"$stdDevPop",-1),xn=n("td",{style:{"text-align":"left"}},"Returns the population standard deviation of the input values.",-1),fn={style:{"text-align":"left"}},_n={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/stdDevSamp/#grp._S_stdDevSamp",target:"_blank",rel:"noopener noreferrer"},$n=n("code",null,"$stdDevSamp",-1),Sn=n("td",{style:{"text-align":"left"}},"Returns the sample standard deviation of the input values.",-1),Dn={style:{"text-align":"left"}},Mn={href:"https://docs.mongodb.com/manual/reference/operator/aggregation/sum/#grp._S_sum",target:"_blank",rel:"noopener noreferrer"},wn=n("code",null,"$sum",-1),On=n("td",{style:{"text-align":"left"}},"对group中的所有元素求和，忽略非数值元素",-1),Bn=e(`<p>$group示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 测试数据
db.sales.insertMany([
  { &quot;_id&quot; : 1, &quot;item&quot; : &quot;abc&quot;, &quot;price&quot; : NumberDecimal(&quot;10&quot;), &quot;quantity&quot; : NumberInt(&quot;2&quot;), &quot;date&quot; : ISODate(&quot;2014-03-01T08:00:00Z&quot;) },
  { &quot;_id&quot; : 2, &quot;item&quot; : &quot;jkl&quot;, &quot;price&quot; : NumberDecimal(&quot;20&quot;), &quot;quantity&quot; : NumberInt(&quot;1&quot;), &quot;date&quot; : ISODate(&quot;2014-03-01T09:00:00Z&quot;) },
  { &quot;_id&quot; : 3, &quot;item&quot; : &quot;xyz&quot;, &quot;price&quot; : NumberDecimal(&quot;5&quot;), &quot;quantity&quot; : NumberInt( &quot;10&quot;), &quot;date&quot; : ISODate(&quot;2014-03-15T09:00:00Z&quot;) },
  { &quot;_id&quot; : 4, &quot;item&quot; : &quot;xyz&quot;, &quot;price&quot; : NumberDecimal(&quot;5&quot;), &quot;quantity&quot; :  NumberInt(&quot;20&quot;) , &quot;date&quot; : ISODate(&quot;2014-04-04T11:21:39.736Z&quot;) },
  { &quot;_id&quot; : 5, &quot;item&quot; : &quot;abc&quot;, &quot;price&quot; : NumberDecimal(&quot;10&quot;), &quot;quantity&quot; : NumberInt(&quot;10&quot;) , &quot;date&quot; : ISODate(&quot;2014-04-04T21:23:13.331Z&quot;) },
  { &quot;_id&quot; : 6, &quot;item&quot; : &quot;def&quot;, &quot;price&quot; : NumberDecimal(&quot;7.5&quot;), &quot;quantity&quot;: NumberInt(&quot;5&quot; ) , &quot;date&quot; : ISODate(&quot;2015-06-04T05:08:13Z&quot;) },
  { &quot;_id&quot; : 7, &quot;item&quot; : &quot;def&quot;, &quot;price&quot; : NumberDecimal(&quot;7.5&quot;), &quot;quantity&quot;: NumberInt(&quot;10&quot;) , &quot;date&quot; : ISODate(&quot;2015-09-10T08:43:00Z&quot;) },
  { &quot;_id&quot; : 8, &quot;item&quot; : &quot;abc&quot;, &quot;price&quot; : NumberDecimal(&quot;10&quot;), &quot;quantity&quot; : NumberInt(&quot;5&quot; ) , &quot;date&quot; : ISODate(&quot;2016-02-06T20:20:13Z&quot;) },
])

// 计算文档总数
db.sales.aggregate( [
  {
    $group: {
       _id: null,
       count: { $sum: 1 }
    }
  }
] )
// 计算销售个总量大于100的item
db.sales.aggregate(
  [
    // First Stage
    {
      $group :
        {
          _id : &quot;$item&quot;,
          totalSaleAmount: { $sum: { $multiply: [ &quot;$price&quot;, &quot;$quantity&quot; ] } }
        }
     },
     // Second Stage
     {
       $match: { &quot;totalSaleAmount&quot;: { $gte: 100 } }
     }
   ]
 )

// 按日期分组
db.sales.aggregate([
  // First Stage
  {
    $match : { &quot;date&quot;: { $gte: new ISODate(&quot;2014-01-01&quot;), $lt: new ISODate(&quot;2015-01-01&quot;) } }
  },
  // Second Stage
  {
    $group : {
       _id : { $dateToString: { format: &quot;%Y-%m-%d&quot;, date: &quot;$date&quot; } },
       totalSaleAmount: { $sum: { $multiply: [ &quot;$price&quot;, &quot;$quantity&quot; ] } },
       averageQuantity: { $avg: &quot;$quantity&quot; },
       count: { $sum: 1 }
    }
  },
  // Third Stage
  {
    $sort : { totalSaleAmount: -1 }
  }
 ])

// 结果
{ &quot;_id&quot; : &quot;2014-04-04&quot;, &quot;totalSaleAmount&quot; : NumberDecimal(&quot;200&quot;), &quot;averageQuantity&quot; : 15, &quot;count&quot; : 2 }
{ &quot;_id&quot; : &quot;2014-03-15&quot;, &quot;totalSaleAmount&quot; : NumberDecimal(&quot;50&quot;), &quot;averageQuantity&quot; : 10, &quot;count&quot; : 1 }
{ &quot;_id&quot; : &quot;2014-03-01&quot;, &quot;totalSaleAmount&quot; : NumberDecimal(&quot;40&quot;), &quot;averageQuantity&quot; : 1.5, &quot;count&quot; : 2 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="unwind" tabindex="-1"><a class="header-anchor" href="#unwind" aria-hidden="true">#</a> $unwind</h4><p>将数组中的每一个值拆分为独立的文档。</p><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  $unwind:
    {
      path: &lt;field path&gt;,
      includeArrayIndex: &lt;string&gt;,  // 添加数组索引
      preserveNullAndEmptyArrays: &lt;boolean&gt; // 保留不包含path，或path为null的值
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 插入数据
db.inventory.insertOne({ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC1&quot;, sizes: [ &quot;S&quot;, &quot;M&quot;, &quot;L&quot;] })
// 拆分
db.inventory.aggregate( [ { $unwind : &quot;$sizes&quot; } ] )
db.inventory2.aggregate( [ { $unwind: { path: &quot;$sizes&quot; } } ] )

// 结果
{ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC1&quot;, &quot;sizes&quot; : &quot;S&quot; }
{ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC1&quot;, &quot;sizes&quot; : &quot;M&quot; }
{ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC1&quot;, &quot;sizes&quot; : &quot;L&quot; }


db.inventory2.insertMany([
  { &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC&quot;, price: NumberDecimal(&quot;80&quot;), &quot;sizes&quot;: [ &quot;S&quot;, &quot;M&quot;, &quot;L&quot;] },
  { &quot;_id&quot; : 2, &quot;item&quot; : &quot;EFG&quot;, price: NumberDecimal(&quot;120&quot;), &quot;sizes&quot; : [ ] },
  { &quot;_id&quot; : 3, &quot;item&quot; : &quot;IJK&quot;, price: NumberDecimal(&quot;160&quot;), &quot;sizes&quot;: &quot;M&quot; },
  { &quot;_id&quot; : 4, &quot;item&quot; : &quot;LMN&quot; , price: NumberDecimal(&quot;10&quot;) },
  { &quot;_id&quot; : 5, &quot;item&quot; : &quot;XYZ&quot;, price: NumberDecimal(&quot;5.75&quot;), &quot;sizes&quot; : null }
])

// 添加数组索引
db.inventory2.aggregate( [
  {
    $unwind:
      {
        path: &quot;$sizes&quot;,
        includeArrayIndex: &quot;arrayIndex&quot;
      }
   }
])

{ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC&quot;, &quot;price&quot; : NumberDecimal(&quot;80&quot;), &quot;sizes&quot; : &quot;S&quot;, &quot;arrayIndex&quot; : NumberLong(0) }
{ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC&quot;, &quot;price&quot; : NumberDecimal(&quot;80&quot;), &quot;sizes&quot; : &quot;M&quot;, &quot;arrayIndex&quot; : NumberLong(1) }
{ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC&quot;, &quot;price&quot; : NumberDecimal(&quot;80&quot;), &quot;sizes&quot; : &quot;L&quot;, &quot;arrayIndex&quot; : NumberLong(2) }
{ &quot;_id&quot; : 3, &quot;item&quot; : &quot;IJK&quot;, &quot;price&quot; : NumberDecimal(&quot;160&quot;), &quot;sizes&quot; : &quot;M&quot;, &quot;arrayIndex&quot; : null }


// 保留空值
db.inventory2.aggregate( [
   { $unwind: { path: &quot;$sizes&quot;, preserveNullAndEmptyArrays: true } }
] )

{ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC&quot;, &quot;price&quot; : NumberDecimal(&quot;80&quot;), &quot;sizes&quot; : &quot;S&quot; }
{ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC&quot;, &quot;price&quot; : NumberDecimal(&quot;80&quot;), &quot;sizes&quot; : &quot;M&quot; }
{ &quot;_id&quot; : 1, &quot;item&quot; : &quot;ABC&quot;, &quot;price&quot; : NumberDecimal(&quot;80&quot;), &quot;sizes&quot; : &quot;L&quot; }
{ &quot;_id&quot; : 2, &quot;item&quot; : &quot;EFG&quot;, &quot;price&quot; : NumberDecimal(&quot;120&quot;) }
{ &quot;_id&quot; : 3, &quot;item&quot; : &quot;IJK&quot;, &quot;price&quot; : NumberDecimal(&quot;160&quot;), &quot;sizes&quot; : &quot;M&quot; }
{ &quot;_id&quot; : 4, &quot;item&quot; : &quot;LMN&quot;, &quot;price&quot; : NumberDecimal(&quot;10&quot;) }
{ &quot;_id&quot; : 5, &quot;item&quot; : &quot;XYZ&quot;, &quot;price&quot; : NumberDecimal(&quot;5.75&quot;), &quot;sizes&quot; : null }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> $sort</h4><p>根据字段排序</p><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ $sort: { &lt;field1&gt;: &lt;sort order&gt;, &lt;field2&gt;: &lt;sort order&gt; ... } }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.insertMany( [
   { &quot;_id&quot; : 1, &quot;name&quot; : &quot;Central Park Cafe&quot;, &quot;borough&quot; : &quot;Manhattan&quot;},
   { &quot;_id&quot; : 2, &quot;name&quot; : &quot;Rock A Feller Bar and Grill&quot;, &quot;borough&quot; : &quot;Queens&quot;},
   { &quot;_id&quot; : 3, &quot;name&quot; : &quot;Empire State Pub&quot;, &quot;borough&quot; : &quot;Brooklyn&quot;},
   { &quot;_id&quot; : 4, &quot;name&quot; : &quot;Stan&#39;s Pizzaria&quot;, &quot;borough&quot; : &quot;Manhattan&quot;},
   { &quot;_id&quot; : 5, &quot;name&quot; : &quot;Jane&#39;s Deli&quot;, &quot;borough&quot; : &quot;Brooklyn&quot;},
] );

db.restaurants.aggregate(
   [
     { $sort : { borough : 1 } }
   ]
)
// 注意， 当两条数据具有相同值时，排序可能不同
{ &quot;_id&quot; : 3, &quot;name&quot; : &quot;Empire State Pub&quot;, &quot;borough&quot; : &quot;Brooklyn&quot; }
{ &quot;_id&quot; : 5, &quot;name&quot; : &quot;Jane&#39;s Deli&quot;, &quot;borough&quot; : &quot;Brooklyn&quot; }
{ &quot;_id&quot; : 1, &quot;name&quot; : &quot;Central Park Cafe&quot;, &quot;borough&quot; : &quot;Manhattan&quot; }
{ &quot;_id&quot; : 4, &quot;name&quot; : &quot;Stan&#39;s Pizzaria&quot;, &quot;borough&quot; : &quot;Manhattan&quot; }
{ &quot;_id&quot; : 2, &quot;name&quot; : &quot;Rock A Feller Bar and Grill&quot;, &quot;borough&quot; : &quot;Queens&quot; }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="limit" tabindex="-1"><a class="header-anchor" href="#limit" aria-hidden="true">#</a> $limit</h4><p>返回结果集中的前n个文档</p><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ $limit: &lt;positive integer&gt; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.aggregate([
   { $limit : 2 }
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="skip" tabindex="-1"><a class="header-anchor" href="#skip" aria-hidden="true">#</a> $skip</h4><p>跳过结果集中的前n个文档</p><p>语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{ $skip: &lt;positive integer&gt; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.restaurants.aggregate([
   { $skip : 2 }
]);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb-map-reduce" tabindex="-1"><a class="header-anchor" href="#mongodb-map-reduce" aria-hidden="true">#</a> MongoDB Map-Reduce</h2><p>基本语法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.mapReduce(
   function() {emit(key,value);},  //map 函数
   function(key,values) {return reduceFunction},   //reduce 函数
   {
      out: collection,
      query: document,
      sort: document,
      limit: number
   }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 MapReduce 要实现两个函数 Map 函数和 Reduce 函数,Map 函数调用 emit(key, value), 遍历 collection 中所有的记录, 将 key 与 value 传递给 Reduce 函数进行处理。</p><p>Map 函数必须调用 emit(key, value) 返回键值对。</p><p>参数说明</p><ul><li><strong>map</strong> ：映射函数 (生成键值对序列,作为 reduce 函数参数)。</li><li><strong>reduce</strong> 统计函数，reduce函数的任务就是将key-values变成key-value，也就是把values数组变成一个单一的值value。。</li><li><strong>out</strong> 统计结果存放集合 (不指定则使用临时集合,在客户端断开后自动删除)。</li><li><strong>query</strong> 一个筛选条件，只有满足条件的文档才会调用map函数。（query。limit，sort可以随意组合）</li><li><strong>sort</strong> 和limit结合的sort排序参数（也是在发往map函数前给文档排序），可以优化分组机制</li><li><strong>limit</strong> 发往map函数的文档数量的上限（要是没有limit，单独使用sort的用处不大）</li></ul><p>示例：</p><p><img src="`+v+`" alt="img"></p><h2 id="mongodb-gridfs" tabindex="-1"><a class="header-anchor" href="#mongodb-gridfs" aria-hidden="true">#</a> MongoDB GridFS</h2><p>GridFS会将文件切分为一个个的小块(chunk)，并单独的保存到集合中。块儿的大小默认为255K</p><p>GridFS使用两个集合存储文件</p><ul><li>chunks：存储二进制块</li><li>files：存储文件的元数据信息</li></ul><h3 id="chunks" tabindex="-1"><a class="header-anchor" href="#chunks" aria-hidden="true">#</a> chunks</h3><p>chunks中存储的schema</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_id&quot; : &lt;ObjectId&gt;,
  &quot;files_id&quot; : &lt;ObjectId&gt;,
  &quot;n&quot; : &lt;num&gt;,
  &quot;data&quot; : &lt;binary&gt;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>chunks._id</li></ul><p>The unique ObjectId of the chunk.</p><ul><li>chunks.files_id</li></ul><p>The _id of the “parent” document, as specified in the files collection.</p><ul><li>chunks.n</li></ul><p>The sequence number of the chunk. GridFS numbers all chunks, starting with 0.</p><ul><li>chunks.data</li></ul><p>The chunk’s payload as a BSON Binary type.</p><h3 id="files" tabindex="-1"><a class="header-anchor" href="#files" aria-hidden="true">#</a> files</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_id&quot; : &lt;ObjectId&gt;,
  &quot;length&quot; : &lt;num&gt;,
  &quot;chunkSize&quot; : &lt;num&gt;,
  &quot;uploadDate&quot; : &lt;timestamp&gt;,
  &quot;md5&quot; : &lt;hash&gt;,
  &quot;filename&quot; : &lt;string&gt;,
  &quot;contentType&quot; : &lt;string&gt;,
  &quot;aliases&quot; : &lt;string array&gt;,
  &quot;metadata&quot; : &lt;any&gt;,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb-安全" tabindex="-1"><a class="header-anchor" href="#mongodb-安全" aria-hidden="true">#</a> MongoDB 安全</h2><p><img src="`+m+`" alt="image-20210224112302614"></p><h2 id="mongodb-索引" tabindex="-1"><a class="header-anchor" href="#mongodb-索引" aria-hidden="true">#</a> MongoDB 索引</h2><p>建立测试数据</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">100000</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	db<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>
    	<span class="token punctuation">{</span>
            <span class="token string-property property">&quot;i&quot;</span><span class="token operator">:</span>i<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span><span class="token string">&quot;user&quot;</span><span class="token operator">+</span>i<span class="token punctuation">,</span>
            <span class="token string-property property">&quot;gender&quot;</span><span class="token operator">:</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;age&quot;</span><span class="token operator">:</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">120</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;created&quot;</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有索引，mongodb在查询时需要执行集合扫描，当数据量过大时会带来性能问题。建立有效的索引，会提升查询性能。</p><h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3><h4 id="默认索引" tabindex="-1"><a class="header-anchor" href="#默认索引" aria-hidden="true">#</a> 默认索引</h4><p>mongodb默认在_id字段上创建索引，并且不能删除。</p><h4 id="索引管理" tabindex="-1"><a class="header-anchor" href="#索引管理" aria-hidden="true">#</a> 索引管理</h4><p><strong>创建索引</strong></p><p>创建索引时可以指定排序规则：1：升序排序，-1：降序排序</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.createIndex({&quot;username&quot;:1,&quot;age&quot;:-1})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>索引名称</strong></p><p>索引名称默认使用key+valye形式，多字段索引使用<code>_</code>链接</p><p>上面创建的索引默认为：<code>username1_age-1</code></p><p>可以通过参数的形式指定索引名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.createIndex({&quot;username&quot;:1,&quot;age&quot;:-1}, {&quot;name&quot;:&quot;special&quot;})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>删除索引</strong></p><p>_id字段上的索引不能删除</p><p>不加参数时删除集合上的全部索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.dropIndexes()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数可以时索引文档或索引名称或字符数组，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.dropIndexes({&quot;username&quot;:1,&quot;age&quot;:-1})
db.collection.dropIndexes(&quot;username1_age-1&quot;)
// 删除索引时使用数组指定
db.collection.dropIndexes([&quot;username1_age-1&quot;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>获取索引</strong></p><p>获取文档的全部索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.getIndexes()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>重建索引</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.reIndex()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="索引类型" tabindex="-1"><a class="header-anchor" href="#索引类型" aria-hidden="true">#</a> 索引类型</h4><h5 id="单值索引" tabindex="-1"><a class="header-anchor" href="#单值索引" aria-hidden="true">#</a> 单值索引</h5><p>在创建索引时，指定单个字段，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.createIndex({&quot;username&quot;:1})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在单个字段上进行索引。对单个索引的排序顺序并不重要，因为Mongodb可以从任何方向上进行遍历索引</p><h5 id="复合索引" tabindex="-1"><a class="header-anchor" href="#复合索引" aria-hidden="true">#</a> 复合索引</h5><p>在创建索引时，指定多个字段，例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.createIndex({&quot;username&quot;:1,&quot;age&quot;:-1})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>复合索引的数据结构如下：</p><img src="`+b+`" alt="在这里插入图片描述" style="zoom:50%;alert:left;"><p>所以，在创建复合索引时，索引字段的顺序，以及字段的排序顺序都是需要考虑的。不过mongoDB在遍历索引时可以正序遍历，也可以倒叙遍历，所以{&quot;username&quot;:1,&quot;age&quot;:-1}和{&quot;username&quot;:-1,&quot;age&quot;:1}的顺序可以看作时相同的索引。</p><p><strong>索引前缀</strong></p><p>索引前缀时复合索引的开始子集，例如由如下索引：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.collection.createIndex({&quot;username&quot;:1,&quot;age&quot;:-1,&quot;created&quot;:1})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>包含以下索引前缀：</p><ul><li>{&quot;username&quot;:1}</li><li>{&quot;username&quot;:1,&quot;age&quot;:-1}</li><li>{&quot;username&quot;:1,&quot;age&quot;:-1,&quot;created&quot;:1}</li></ul><p>在查询username字段、username and age 字段以及 username and age and created 字段时，可以使用这个索引。</p><p>在查询username and created 字段时，也可以使用这个索引，但是性能没有前面的查询高。</p><p>在查询age、created、age and created 字段时无法使用这个索引。</p><h5 id="多键索引" tabindex="-1"><a class="header-anchor" href="#多键索引" aria-hidden="true">#</a> 多键索引</h5><h5 id="地理空间索引" tabindex="-1"><a class="header-anchor" href="#地理空间索引" aria-hidden="true">#</a> 地理空间索引</h5><h5 id="文本索引" tabindex="-1"><a class="header-anchor" href="#文本索引" aria-hidden="true">#</a> 文本索引</h5><h5 id="hashed索引" tabindex="-1"><a class="header-anchor" href="#hashed索引" aria-hidden="true">#</a> Hashed索引</h5><h4 id="索引交集" tabindex="-1"><a class="header-anchor" href="#索引交集" aria-hidden="true">#</a> 索引交集</h4><p>mongodb可以使用索引的交集来完成查询。例如users集合有以下索引：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;username&quot;:1}
{&quot;age&quot;:&quot;1&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>mongodb可以用来支持一下的查询：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.find({&quot;username&quot;:&quot;user1&quot;,age:{&quot;$gt&quot;:20}})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>索引前缀交集</p><p>索引交集和复合索引</p></blockquote><p><strong>索引交集和排序</strong></p><p>当索引和查询谓词完全分开时，索引交集不适用</p><h3 id="单值索引-1" tabindex="-1"><a class="header-anchor" href="#单值索引-1" aria-hidden="true">#</a> 单值索引</h3><p>建立索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.createIndex({&quot;username&quot;:1})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询语句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.find({&quot;username&quot;:&quot;user101&quot;}).explain(&quot;executionStats&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询分析</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
    &quot;queryPlanner&quot; : {
        &quot;plannerVersion&quot; : 1,
        &quot;namespace&quot; : &quot;test.users&quot;,
        &quot;indexFilterSet&quot; : false,
        &quot;parsedQuery&quot; : {
            &quot;username&quot; : {
                &quot;$eq&quot; : &quot;user101&quot;
            }
        },
        &quot;winningPlan&quot; : {
            &quot;stage&quot; : &quot;FETCH&quot;,
            // 子阶段
            &quot;inputStage&quot; : {
                // 索引扫描
                &quot;stage&quot; : &quot;IXSCAN&quot;,
                // 该执行计划扫描的索引
                &quot;keyPattern&quot; : {
                    &quot;username&quot; : 1
                },
                // 索引名称
                &quot;indexName&quot; : &quot;username_1&quot;,
                // 是否为Multikey，如果索引建立在array字段上，返回true
                &quot;isMultiKey&quot; : false,
                &quot;multiKeyPaths&quot; : {
                    &quot;username&quot; : [ ]
                },
                &quot;isUnique&quot; : false,
                &quot;isSparse&quot; : false,
                &quot;isPartial&quot; : false,
                &quot;indexVersion&quot; : 2,
                &quot;direction&quot; : &quot;forward&quot;,
                // 扫描的索引范围
                &quot;indexBounds&quot; : {
                    &quot;username&quot; : [
                        &quot;[\\&quot;user101\\&quot;, \\&quot;user101\\&quot;]&quot;
                    ]
                }
            }
        },
        &quot;rejectedPlans&quot; : [ ]
    },
    &quot;executionStats&quot; : {
        &quot;executionSuccess&quot; : true,
        &quot;nReturned&quot; : 1,
        &quot;executionTimeMillis&quot; : 0,
        &quot;totalKeysExamined&quot; : 1,
        &quot;totalDocsExamined&quot; : 1,
        &quot;executionStages&quot; : {
            &quot;stage&quot; : &quot;FETCH&quot;,
            &quot;nReturned&quot; : 1,
            &quot;executionTimeMillisEstimate&quot; : 0,
            &quot;works&quot; : 2,
            &quot;advanced&quot; : 1,
            &quot;needTime&quot; : 0,
            &quot;needYield&quot; : 0,
            &quot;saveState&quot; : 0,
            &quot;restoreState&quot; : 0,
            &quot;isEOF&quot; : 1,
            &quot;docsExamined&quot; : 1,
            &quot;alreadyHasObj&quot; : 0,
            &quot;inputStage&quot; : {
                &quot;stage&quot; : &quot;IXSCAN&quot;,
                &quot;nReturned&quot; : 1,
                &quot;executionTimeMillisEstimate&quot; : 0,
                &quot;works&quot; : 2,
                &quot;advanced&quot; : 1,
                &quot;needTime&quot; : 0,
                &quot;needYield&quot; : 0,
                &quot;saveState&quot; : 0,
                &quot;restoreState&quot; : 0,
                &quot;isEOF&quot; : 1,
                &quot;keyPattern&quot; : {
                    &quot;username&quot; : 1
                },
                &quot;indexName&quot; : &quot;username_1&quot;,
                &quot;isMultiKey&quot; : false,
                &quot;multiKeyPaths&quot; : {
                    &quot;username&quot; : [ ]
                },
                &quot;isUnique&quot; : false,
                &quot;isSparse&quot; : false,
                &quot;isPartial&quot; : false,
                &quot;indexVersion&quot; : 2,
                &quot;direction&quot; : &quot;forward&quot;,
                &quot;indexBounds&quot; : {
                    &quot;username&quot; : [
                        &quot;[\\&quot;user101\\&quot;, \\&quot;user101\\&quot;]&quot;
                    ]
                },
                &quot;keysExamined&quot; : 1,
                &quot;seeks&quot; : 1,
                &quot;dupsTested&quot; : 0,
                &quot;dupsDropped&quot; : 0
            }
        }
    },
    &quot;serverInfo&quot; : {
        &quot;host&quot; : &quot;xuliang&quot;,
        &quot;port&quot; : 27017,
        &quot;version&quot; : &quot;4.2.11&quot;,
        &quot;gitVersion&quot; : &quot;ea38428f0c6742c7c2c7f677e73d79e17a2aab96&quot;
    },
    &quot;ok&quot; : 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复合索引-1" tabindex="-1"><a class="header-anchor" href="#复合索引-1" aria-hidden="true">#</a> 复合索引</h3><p>在建立两个单值索引执行查询</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.createIndex({&quot;username&quot;:1})
db.users.createIndex({&quot;age&quot;:1})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查询语句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.find().sort({&quot;age&quot;:1, &quot;username&quot;:1}).explain(&quot;executionStats&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>过程分析</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;queryPlanner&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;plannerVersion&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;namespace&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;test.users&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;indexFilterSet&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parsedQuery&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;winningPlan&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;stage&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;SORT&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sortPattern&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;username&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inputStage&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;stage&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;SORT_KEY_GENERATOR&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;inputStage&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;stage&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;COLLSCAN&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;direction&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;forward&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rejectedPlans&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;executionStats&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;executionSuccess&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;nReturned&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;executionTimeMillis&quot;</span> <span class="token operator">:</span> <span class="token number">437</span><span class="token punctuation">,</span>
        <span class="token comment">// 没有使用索引</span>
        <span class="token property">&quot;totalKeysExamined&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;totalDocsExamined&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;executionStages&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;stage&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;SORT&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nReturned&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;executionTimeMillisEstimate&quot;</span> <span class="token operator">:</span> <span class="token number">197</span><span class="token punctuation">,</span>
            <span class="token property">&quot;works&quot;</span> <span class="token operator">:</span> <span class="token number">200004</span><span class="token punctuation">,</span>
            <span class="token property">&quot;advanced&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;needTime&quot;</span> <span class="token operator">:</span> <span class="token number">100003</span><span class="token punctuation">,</span>
            <span class="token property">&quot;needYield&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;saveState&quot;</span> <span class="token operator">:</span> <span class="token number">1563</span><span class="token punctuation">,</span>
            <span class="token property">&quot;restoreState&quot;</span> <span class="token operator">:</span> <span class="token number">1563</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isEOF&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;sortPattern&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;username&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;memUsage&quot;</span> <span class="token operator">:</span> <span class="token number">9488890</span><span class="token punctuation">,</span>
            <span class="token property">&quot;memLimit&quot;</span> <span class="token operator">:</span> <span class="token number">33554432</span><span class="token punctuation">,</span>
            <span class="token property">&quot;inputStage&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;stage&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;SORT_KEY_GENERATOR&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;nReturned&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
                <span class="token property">&quot;executionTimeMillisEstimate&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;works&quot;</span> <span class="token operator">:</span> <span class="token number">100003</span><span class="token punctuation">,</span>
                <span class="token property">&quot;advanced&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
                <span class="token property">&quot;needTime&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;needYield&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;saveState&quot;</span> <span class="token operator">:</span> <span class="token number">1563</span><span class="token punctuation">,</span>
                <span class="token property">&quot;restoreState&quot;</span> <span class="token operator">:</span> <span class="token number">1563</span><span class="token punctuation">,</span>
                <span class="token property">&quot;isEOF&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;inputStage&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;stage&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;COLLSCAN&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;nReturned&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;executionTimeMillisEstimate&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;works&quot;</span> <span class="token operator">:</span> <span class="token number">100002</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;advanced&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;needTime&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;needYield&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;saveState&quot;</span> <span class="token operator">:</span> <span class="token number">1563</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;restoreState&quot;</span> <span class="token operator">:</span> <span class="token number">1563</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;isEOF&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;direction&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;forward&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;docsExamined&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;serverInfo&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;xuliang&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span> <span class="token operator">:</span> <span class="token number">27017</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;4.2.11&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gitVersion&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ea38428f0c6742c7c2c7f677e73d79e17a2aab96&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ok&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建立复合索引</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.createIndex({&quot;username&quot;:1,&quot;sort&quot;:1})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询语句</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.find({},{&quot;username&quot;:1,&quot;age&quot;:1}).sort({&quot;username&quot;:1,&quot;age&quot;:1}).limit(100)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>过程分析</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="性能分析" tabindex="-1"><a class="header-anchor" href="#性能分析" aria-hidden="true">#</a> 性能分析</h2><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><h4 id="explain-函数" tabindex="-1"><a class="header-anchor" href="#explain-函数" aria-hidden="true">#</a> explain()函数</h4><p>explain()函数可以就收不同的参数：</p><ul><li>queryPlanner：queryPlanner是默认参数；</li><li>executionStats：会返回执行计划的一些统计信息</li><li>allPlansExecution：用来获取所有的执行计划，结果参数基本相同</li></ul><p>在查询的函数后直接追加explain()函数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// queryPlanner是默认参数
db.users.find({&quot;username&quot;:&quot;user1000&quot;}).explain()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查询结果</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 没有建立索引的查询分析</span>
<span class="token punctuation">{</span>
    <span class="token comment">// queryPlanner:查询计划</span>
    <span class="token property">&quot;queryPlanner&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 查询计划版本</span>
        <span class="token property">&quot;plannerVersion&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// 要查询的集合</span>
        <span class="token property">&quot;namespace&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;test.users&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 针对该query是否有indexfilter</span>
        <span class="token property">&quot;indexFilterSet&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token comment">// 查询条件</span>
        <span class="token property">&quot;parsedQuery&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;username&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;$eq&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;user101&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;queryHash&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;379E82C5&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;planCacheKey&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;379E82C5&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 最佳执行计划</span>
        <span class="token property">&quot;winningPlan&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 查询方式：COLLSCAN：全表扫描，IXSCAN：索引扫描，</span>
            <span class="token property">&quot;stage&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;COLLSCAN&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">// 过滤条件</span>
            <span class="token property">&quot;filter&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;username&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;$eq&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;user101&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// 标识query的查询顺序</span>
            <span class="token property">&quot;direction&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;forward&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token comment">// 拒绝的执行计划</span>
        <span class="token property">&quot;rejectedPlans&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 展示服务的基本信息</span>
    <span class="token property">&quot;serverInfo&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;xuliang&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span> <span class="token operator">:</span> <span class="token number">27017</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;4.2.11&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gitVersion&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ea38428f0c6742c7c2c7f677e73d79e17a2aab96&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ok&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>stage类型列举</p><ul><li><p>COLLSCAN：全表扫描</p></li><li><p>IXSCAN：索引扫描</p></li><li><p>FETCH：根据索引检索指定document</p></li><li><p>SHARD_MERGE：将各个分片返回数据进行merge</p></li><li><p>SORT：表明在内存中进行了排序</p></li><li><p>LIMIT：使用limit限制返回数</p></li><li><p>SKIP：使用skip进行跳过</p></li><li><p>IDKACH：针对_id进行查询</p></li><li><p>SHARDING_FILTER：通过mongos对分片数据进行查询</p></li><li><p>COUNT：利用db.coll.explain().count()之类进行count运算</p></li><li><p>COUNTSCAN：count不使用Index进行count时的stage返回</p></li><li><p>COUNT_SCAN：count使用了Index进行count时的stage返回</p></li><li><p>SUBPLA：未使用到索引的$or查询的stage返回</p></li><li><p>TEXT：使用全文索引进行查询时候的stage返回</p></li><li><p>PROJECTION：限定返回字段时候stage的返回</p></li></ul><p>使用executionStats参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>db.users.find({&quot;username&quot;:&quot;user1000&quot;}).explain(&quot;executionStats&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回参数：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;queryPlanner&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;plannerVersion&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;namespace&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;test.users&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;indexFilterSet&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;parsedQuery&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;username&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;$eq&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;user101&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;winningPlan&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;stage&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;COLLSCAN&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;filter&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;username&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;$eq&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;user101&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;direction&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;forward&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rejectedPlans&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 统计信息</span>
    <span class="token property">&quot;executionStats&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 是否执行成功</span>
        <span class="token property">&quot;executionSuccess&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// query返回的结果数</span>
        <span class="token property">&quot;nReturned&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token comment">// query执行耗时</span>
        <span class="token property">&quot;executionTimeMillis&quot;</span> <span class="token operator">:</span> <span class="token number">67</span><span class="token punctuation">,</span>
        <span class="token comment">// 索引扫描次数</span>
        <span class="token property">&quot;totalKeysExamined&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token comment">// 总的文档扫描条目</span>
        <span class="token property">&quot;totalDocsExamined&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
        <span class="token comment">// 执行计划</span>
        <span class="token property">&quot;executionStages&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// 扫描方式：全表扫描</span>
            <span class="token property">&quot;stage&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;COLLSCAN&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;filter&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;username&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;$eq&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;user101&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;nReturned&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token comment">// 根据索引查询数据所用的时间（当前没有索引）</span>
            <span class="token property">&quot;executionTimeMillisEstimate&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token comment">// 工作单元数</span>
            <span class="token property">&quot;works&quot;</span> <span class="token operator">:</span> <span class="token number">100002</span><span class="token punctuation">,</span>
            <span class="token comment">// 优先返回的结果数目</span>
            <span class="token property">&quot;advanced&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;needTime&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;needYield&quot;</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;saveState&quot;</span> <span class="token operator">:</span> <span class="token number">781</span><span class="token punctuation">,</span>
            <span class="token property">&quot;restoreState&quot;</span> <span class="token operator">:</span> <span class="token number">781</span><span class="token punctuation">,</span>
            <span class="token property">&quot;isEOF&quot;</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token comment">// 执行方向</span>
            <span class="token property">&quot;direction&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;forward&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;docsExamined&quot;</span> <span class="token operator">:</span> <span class="token number">100000</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;serverInfo&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;host&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;xuliang&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;port&quot;</span> <span class="token operator">:</span> <span class="token number">27017</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;4.2.11&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;gitVersion&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ea38428f0c6742c7c2c7f677e73d79e17a2aab96&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ok&quot;</span> <span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建索引后</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 使用exectionStats参数</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb-事务" tabindex="-1"><a class="header-anchor" href="#mongodb-事务" aria-hidden="true">#</a> MongoDB 事务</h2><h3 id="单文档事物" tabindex="-1"><a class="header-anchor" href="#单文档事物" aria-hidden="true">#</a> 单文档事物</h3><p><strong>在MongoDB中所有对单文档的操作都是原子性的。</strong>，在实际的使用中，可以通过合理的设计嵌入式文档来利用这一特性。</p><h3 id="多文档事物" tabindex="-1"><a class="header-anchor" href="#多文档事物" aria-hidden="true">#</a> 多文档事物</h3><p>从4.0版本开始支持副本集上的多文档事务</p><p>从4.2版本开始支持分布式事务（支持分片集群上的多文档事务，并集成了副本集的多文档事务）</p><p>版本时间线：</p><p>4.4版本：2020.9</p><p>4.2版本：2019.10</p><p>4.0版本：2018.8</p><p>https://docs.mongodb.com/master/release-notes/4.4/</p><p>WiredTiger事务实现解析</p><p>https://blog.csdn.net/daaikuaichuan/article/details/97893552</p><h4 id="使用中的注意点" tabindex="-1"><a class="header-anchor" href="#使用中的注意点" aria-hidden="true">#</a> 使用中的注意点</h4><p>这里只列出了部分</p><ul><li>在现有集合上指定读/写(CRUD)操作。集合可以在不同的数据库中。</li><li>不能写capped集合（固定集合）</li><li>无法在<code>config</code>，<code>admin</code>或<code>local</code>数据库中读取/写入集合</li><li>无法写入<code>system.*</code>集合。（system.*集合主要存在与config、admin、local集合中）</li><li>在事务中可以创建集合和索引（在4.4版本中开始支持，之前版本不可用）</li><li>在事务中创建的游标，无法在事务之外使用</li><li>在事务之外创建的游标，无法在事务中使用</li></ul><h4 id="官网给出的一个例子" tabindex="-1"><a class="header-anchor" href="#官网给出的一个例子" aria-hidden="true">#</a> 官网给出的一个例子</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">MongoClient</span> client <span class="token operator">=</span> <span class="token class-name">MongoClients</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>

client<span class="token punctuation">.</span><span class="token function">getDatabase</span><span class="token punctuation">(</span><span class="token string">&quot;mydb1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">withWriteConcern</span><span class="token punctuation">(</span><span class="token class-name">WriteConcern</span><span class="token punctuation">.</span><span class="token constant">MAJORITY</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
client<span class="token punctuation">.</span><span class="token function">getDatabase</span><span class="token punctuation">(</span><span class="token string">&quot;mydb2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">withWriteConcern</span><span class="token punctuation">(</span><span class="token class-name">WriteConcern</span><span class="token punctuation">.</span><span class="token constant">MAJORITY</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token string">&quot;xyz&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* Step 1: Start a client session. */</span>

<span class="token keyword">final</span> <span class="token class-name">ClientSession</span> clientSession <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">startSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* Step 2: Optional. Define options to use for the transaction. */</span>

<span class="token class-name">TransactionOptions</span> txnOptions <span class="token operator">=</span> <span class="token class-name">TransactionOptions</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">readPreference</span><span class="token punctuation">(</span><span class="token class-name">ReadPreference</span><span class="token punctuation">.</span><span class="token function">primary</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">readConcern</span><span class="token punctuation">(</span><span class="token class-name">ReadConcern</span><span class="token punctuation">.</span><span class="token constant">LOCAL</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">writeConcern</span><span class="token punctuation">(</span><span class="token class-name">WriteConcern</span><span class="token punctuation">.</span><span class="token constant">MAJORITY</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* Step 3: Define the sequence of operations to perform inside the transactions. */</span>

<span class="token class-name">TransactionBody</span> txnBody <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TransactionBody</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MongoCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> coll1 <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">getDatabase</span><span class="token punctuation">(</span><span class="token string">&quot;mydb1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MongoCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> coll2 <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">getDatabase</span><span class="token punctuation">(</span><span class="token string">&quot;mydb2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;bar&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">/*
           Important:: You must pass the session to the operations.
         */</span>
        coll1<span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span>clientSession<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        coll2<span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span>clientSession<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token string">&quot;xyz&quot;</span><span class="token punctuation">,</span> <span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Inserted into collections in different databases&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
       Step 4: Use .withTransaction() to start a transaction,
       execute the callback, and commit (or abort on error).
    */</span>

    clientSession<span class="token punctuation">.</span><span class="token function">withTransaction</span><span class="token punctuation">(</span>txnBody<span class="token punctuation">,</span> txnOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// some error handling</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    clientSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读偏好-read-preference" tabindex="-1"><a class="header-anchor" href="#读偏好-read-preference" aria-hidden="true">#</a> 读偏好（Read Preference）</h4><p>默认情况下，client时从副本集中的Primary来读取数据</p><p>可以通过设置读偏好（Read Preference）主要用来控制client从Primary读取数据，还是从Secondary读取数据</p><table><thead><tr><th>模式</th><th>描述</th></tr></thead><tbody><tr><td>primary</td><td>默认模式，所有的读取操作都从副本集中的primary读取<br>在多文档事务中的读操作，都偏好必须设置为primary，在一个事务中，所有的操作必须路由到一个成员上</td></tr><tr><td>primaryPreferred</td><td>默认在primary上读取，如果primary不可用，则从secondary读取</td></tr><tr><td>secondary</td><td>从secondary上读取数据</td></tr><tr><td>secondaryPreferred</td><td>默认在secondary上读取数据，如果secondary不可用，从primary上读取数据</td></tr><tr><td>nearest</td><td>从距离最近的节点读取数据（多个复合，随机选取）</td></tr></tbody></table><h4 id="读关注-read-concern" tabindex="-1"><a class="header-anchor" href="#读关注-read-concern" aria-hidden="true">#</a> 读关注（Read Concern）</h4><p>读关注是用来控制从副本集和分片中读取数据的一致性和隔离性</p><p>在事务中使用事务级别的读关注，会忽略在集合或数据库级别设置的读关注</p><p>在事务中支持如下的读取关注：</p><table><thead><tr><th>level</th><th>描述</th></tr></thead><tbody><tr><td>local</td><td>从local节点获取最新的数据返回，但是数据可能会回滚</td></tr><tr><td>majority</td><td>会返回被集群中多数节点承认的数据（数据不会回滚），前提是事务提交时使用写关注majority</td></tr><tr><td>snapshot</td><td>从大多数已提交数据的快照中返回数据，前提是事务提交时使用写关注majority</td></tr></tbody></table><h4 id="写关注-write-concern" tabindex="-1"><a class="header-anchor" href="#写关注-write-concern" aria-hidden="true">#</a> 写关注（Write Concern）</h4><p>写关注是用来控制对副本集或分片写操作的确认级别</p><p>在事务中支持的value：</p><table><thead><tr><th>value</th><th>说明</th></tr></thead><tbody><tr><td>w: 1</td><td>提交在primary节点执行完成后立即返回</td></tr><tr><td>w: &quot;majority&quot;</td><td>提交在集群中的多数节点保存后返回</td></tr></tbody></table><h2 id="mongodb-replication-复制" tabindex="-1"><a class="header-anchor" href="#mongodb-replication-复制" aria-hidden="true">#</a> MongoDB Replication（复制）</h2><h3 id="简单介绍" tabindex="-1"><a class="header-anchor" href="#简单介绍" aria-hidden="true">#</a> 简单介绍</h3><p>MongoDB副本集有Primary、Secondary、Arbiter三种角色</p><ul><li><p>Primary是主节点，接受所有的写操作</p></li><li><p>Secondary是从节点，通过复制主节点的操作来维护一个相同的数据集</p></li><li><p>Arbiter是仲裁节点，仲裁节点参与选举但不持有数据。</p></li></ul><p>MongoDB副本集架构如下所示：</p><p><img src="`+q+`" alt="1"></p><h3 id="简单配置" tabindex="-1"><a class="header-anchor" href="#简单配置" aria-hidden="true">#</a> 简单配置</h3><p>启动三个服务(这里使用指定配置文件的方式)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongod.exe -f conf/mongo.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mongo.conf</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">net</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">27017</span>
<span class="token key atrule">storage</span><span class="token punctuation">:</span>
  <span class="token key atrule">dbPath</span><span class="token punctuation">:</span> D<span class="token punctuation">:</span>\\developer\\env\\mongodb<span class="token punctuation">-</span>4.2.11\\data\\db
<span class="token key atrule">replication</span><span class="token punctuation">:</span>
  <span class="token comment"># 指定复制集的名称（同一个副本集，必须有相同的名称）</span>
  <span class="token key atrule">replSetName</span><span class="token punctuation">:</span> rs0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongod.exe -f conf/slave01.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>slave01.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>net:
  port: 27018
storage:
  dbPath: D:\\developer\\env\\mongodb-4.2.11\\data\\slave01
replication:
  replSetName: rs0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mongod.exe -f conf/slave02.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>slave02.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>net:
  port: 27019
storage:
  dbPath: D:\\developer\\env\\mongodb-4.2.11\\data\\slave02
replication:
  replSetName: rs0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化副本集</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 初始化完成之后，当前节点就会变成主节点，可以通过 db.isMaster() 查看节点状态
rs.initiate()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加从节点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rs.add(&quot;localhost:27018&quot;)
rs.add(&quot;localhost:27019&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mongodb-oplog" tabindex="-1"><a class="header-anchor" href="#mongodb-oplog" aria-hidden="true">#</a> MongoDB Oplog</h3><p>MongoDB Oplog是MongoDB Primary和Secondary在复制建立期间和建立完成之后的复制介质，就是Primary中所有的写入操作都会记录到MongoDB Oplog中，然后从库会来主库一直拉取Oplog并应用到自己的数据库中。这里的Oplog是MongoDB local数据库的一个集合，它是Capped collection，通俗意思就是它是固定大小，循环使用的。如下图：</p><p><img src="`+k+`" alt="2"></p><p>MongoDB Oplog中的内容及字段介绍：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
<span class="token property">&quot;ts&quot;</span> <span class="token operator">:</span> Timestamp(<span class="token number">1446011584</span><span class="token punctuation">,</span> <span class="token number">2</span>)<span class="token punctuation">,</span>
<span class="token property">&quot;h&quot;</span> <span class="token operator">:</span> NumberLong(<span class="token string">&quot;1687359108795812092&quot;</span>)<span class="token punctuation">,</span>
<span class="token property">&quot;v&quot;</span> <span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
<span class="token property">&quot;op&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;i&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;ns&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;test.nosql&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;o&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span> <span class="token operator">:</span> ObjectId(<span class="token string">&quot;563062c0b085733f34ab4129&quot;</span>)<span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;mongodb&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;score&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;100&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ts： 操作时间，当前timestamp + 计数器，计数器每秒都被重置
h：操作的全局唯一标识
v：oplog版本信息
op：操作类型
    i：插入操作
    u：更新操作
    d：删除操作
    c：执行命令（如createDatabase，dropDatabase）
n：空操作，特殊用途
ns：操作针对的集合
o：操作内容，如果是更新操作
o2：操作查询条件，仅update操作包含该字段
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="副本集的高可用" tabindex="-1"><a class="header-anchor" href="#副本集的高可用" aria-hidden="true">#</a> 副本集的高可用</h3><p>当副本集中的主节点出现一些突发情况时，会执行主从切换逻辑，来保证集群的高可用。</p><h4 id="触发场景" tabindex="-1"><a class="header-anchor" href="#触发场景" aria-hidden="true">#</a> 触发场景</h4><p>1、 新初始化一套副本集</p><p>2、 从库不能连接到主库（默认超过10s，可通过heartbeatTimeoutSecs参数控制），从库发起选举</p><p>3、 主库主动放弃primary 角色</p><p>4、 移除从库的时候</p><h4 id="切换逻辑" tabindex="-1"><a class="header-anchor" href="#切换逻辑" aria-hidden="true">#</a> 切换逻辑</h4><p>1、从库无法连接到主库，或者主库放弃Primary角色。</p><p>2、从库会根据心跳消息获取当前该节点的角色并与之前进行对比</p><p>3、如果角色发生改变就开始执行msgCheckNewState方法</p><p>4、在msgCheckNewState 方法中最终调用electSelf 方法（会有一些判断来决定是否最终调用electSelf方法）</p><p>5、electSelf 方法最终向副本集其他节点发送replSetElect命令来请求投票。</p><p>6、其他副本集收到replSetElect会对比cfgver信息，会确认发送该命令的节点是否在副本集中，确认该节点的优先级是否是该副本集所有节点中优先级最大的。最后满足条件才会给该节点发送投票信息。</p><p>7、发起投票的节点最后会统计所得票数大于副本集可参与投票数量的一半，则抢占成功，成为新的Primary。</p><p>8、其他从库如果发现自己的同步源角色发生变化，则会触发重新选取同步源。</p><h2 id="mongodb-sharding-分片" tabindex="-1"><a class="header-anchor" href="#mongodb-sharding-分片" aria-hidden="true">#</a> MongoDB Sharding（分片）</h2><p>mongdb副本集虽然解决了数据的单点问题，并提供了读写分离，但还是存在数据容量的瓶颈（所有数都存在一台机器上）。所以出现了分片功能</p><p>分片功能和mysql的分区功能类比来理解，不过mysql分区后期的维护需要手动完成，但mongodb的分片几乎是自动完成所有事情。</p><h3 id="分片的目的" tabindex="-1"><a class="header-anchor" href="#分片的目的" aria-hidden="true">#</a> 分片的目的</h3><p>高数据量和吞吐量的数据库应用会对单机的性能造成较大压力,大的查询量会将单机的CPU耗尽,大的数据量对单机的存储压力较大,最终会耗尽系统的内存而将压力转移到磁盘IO上。</p><p>为了解决这些问题,有两个基本的方法: 垂直扩展和水平扩展。</p><ul><li><p>垂直扩展：增加更多的CPU和存储资源来扩展容量。</p></li><li><p>水平扩展：将数据集分布在多个服务器上。水平扩展即分片。</p></li></ul><h3 id="分片集群组件" tabindex="-1"><a class="header-anchor" href="#分片集群组件" aria-hidden="true">#</a> 分片集群组件</h3><ul><li><p>分片：每个shard（分片）包含被分片的数据集中的一个子集。每个分片可以被部署为副本集架构。</p></li><li><p>mongos：<code>mongos</code>充当查询路由器，在客户端应用程序和分片集群之间提供接口。</p></li><li><p>config server：config servers存储了分片集群的元数据和配置信息。</p></li></ul><p>如图：</p><p><img src="`+g+'" alt="sharded-cluster-production-architecture.bakedsvg"></p><p>集群的整体结构：</p><p><img src="'+h+'" alt="img"></p><h3 id="数据在集群中的分布" tabindex="-1"><a class="header-anchor" href="#数据在集群中的分布" aria-hidden="true">#</a> 数据在集群中的分布</h3><h4 id="chunk" tabindex="-1"><a class="header-anchor" href="#chunk" aria-hidden="true">#</a> Chunk</h4><p>chunk是shard server内部保存数据的最小单位，默认64M，当chunk的大小超过64M后，mongo会自动切分，避免形成过大的chunk。</p><p>在mongo中还会有一个balancer进程，主要负责chunk在shard server间的迁移，从而均衡shard server的负载。</p><blockquote><p>（1）使用chunk来存储数据</p><p>（2）集群搭建完成之后，默认开启一个chunk，大小是64M，</p><p>（3）存储需求超过64M，chunk会进行分裂，如果单位时间存储需求很大，设置更大的chunk</p><p>（4）chunk会被自动均衡迁移。</p></blockquote><h4 id="chunksize的选择" tabindex="-1"><a class="header-anchor" href="#chunksize的选择" aria-hidden="true">#</a> ChunkSize的选择</h4><p>chunksize过小：数据分布更均匀，分裂更频繁，迁移速度更快。分裂和迁移过程中会消耗IO资源</p><p>chunksize过大：数据分裂少，消耗IO资源比较集中</p><h4 id="chunk分裂迁移" tabindex="-1"><a class="header-anchor" href="#chunk分裂迁移" aria-hidden="true">#</a> chunk分裂迁移</h4><p>随着数据的增长，其中的数据大小超过了配置的chunk size，默认是64M，则这个chunk就会分裂成两个。数据的增长会让chunk分裂得越来越多。</p><img src="'+y+'" alt="img" style="zoom:50%;"><p>这时候，各个shard 上的chunk数量就会不平衡。这时候，mongos中的一个组件balancer 就会执行自动平衡。把chunk从chunk数量最多的shard节点挪动到数量最少的节点。</p><img src="'+x+'" alt="img" style="zoom:50%;"><h4 id="chunksize对分裂和迁移的影响" tabindex="-1"><a class="header-anchor" href="#chunksize对分裂和迁移的影响" aria-hidden="true">#</a> chunkSize对分裂和迁移的影响</h4><p>MongoDB 默认的 chunkSize 为64MB，如无特殊需求，建议保持默认值；chunkSize 会直接影响到 chunk 分裂、迁移的行为。</p><p>chunkSize 越小，chunk 分裂及迁移越多，数据分布越均衡；反之，chunkSize 越大，chunk 分裂及迁移会更少，但可能导致数据分布不均。可能造成热点数据问题</p><p>chunkSize 太小，容易出现 jumbo chunk（即shardKey 的某个取值出现频率很高，这些文档只能放到一个 chunk 里，无法再分裂）而无法迁移；chunkSize 越大，则可能出现 chunk 内文档数太多（chunk 内文档数不能超过 250000 ）而无法迁移。</p><p>chunk 自动分裂只会在数据写入时触发，所以如果将 chunkSize 改小，系统需要一定的时间来将 chunk 分裂到指定的大小。</p><p>chunk 只会分裂，不会合并，所以即使将 chunkSize 改大，现有的 chunk 数量不会减少，但 chunk 大小会随着写入不断增长，直到达到目标大小。</p><h3 id="数据分区" tabindex="-1"><a class="header-anchor" href="#数据分区" aria-hidden="true">#</a> 数据分区</h3><h4 id="分片键shard-key" tabindex="-1"><a class="header-anchor" href="#分片键shard-key" aria-hidden="true">#</a> 分片键shard key</h4><p>MongoDB中数据的分片是以集合为基本单位的，集合中的数据通过片键（Shard key）被分成多部分。其实片键就是在集合中选一个键，用该键的值作为数据拆分的依据。</p><p>所以一个好的片键对分片至关重要。<strong>片键必须是一个索引</strong>，通过sh.shardCollection加会自动创建索引（前提是此集合不存在的情况下）。一个自增的片键对写入和数据均匀分布就不是很好，因为自增的片键总会在一个分片上写入，后续达到某个阀值可能会写到别的分片。但是按照片键查询会非常高效。</p><p>随机片键对数据的均匀分布效果很好。注意尽量避免在多个分片上进行查询。在所有分片上查询，mongos会对结果进行归并排序。</p><p>对集合进行分片时，你需要选择一个片键，<strong>片键是每条记录都必须包含的</strong>，且建立了索引的单个字段或复合字段，MongoDB按照片键将数据划分到不同的数据块中，并将数据块均衡地分布到所有分片中。</p><p>为了按照片键划分数据块，MongoDB使用基于<strong>范围的分片</strong>方式或者 基于<strong>哈希的分片</strong>方式。</p><blockquote><p>分片键是不可变。</p><p>分片键必须有索引。</p><p>分片键大小限制512bytes。</p><p>分片键用于路由查询。</p><p>MongoDB不接受已进行collection级分片的collection上插入无分片键的文档（也不支持空值插入）</p></blockquote><h4 id="基于范围的分片" tabindex="-1"><a class="header-anchor" href="#基于范围的分片" aria-hidden="true">#</a> 基于范围的分片</h4><p>Sharded Cluster支持将单个集合的数据分散存储在多shard上，用户可以指定根据集合内文档的某个字段即shard key来进行范围分片（range sharding）</p><p><img src="'+f+'" alt="img"></p><p>对于基于范围的分片，MongoDB按照片键的范围把数据分成不同部分。</p><p>假设有一个数字的片键:想象一个从负无穷到正无穷的直线，每一个片键的值都在直线上画了一个点。MongoDB把这条直线划分为更短的不重叠的片段，并称之为数据块，每个数据块包含了片键在一定范围内的数据。在使用片键做范围划分的系统中，拥有”相近”片键的文档很可能存储在同一个数据块中，因此也会存储在同一个分片中。</p><h4 id="基于哈希的分片" tabindex="-1"><a class="header-anchor" href="#基于哈希的分片" aria-hidden="true">#</a> 基于哈希的分片</h4><p>分片过程中利用哈希索引作为分片的单个键，且哈希分片的片键只能使用一个字段，而基于哈希片键最大的好处就是保证数据在各个节点分布基本均匀。</p><p><img src="'+_+'" alt="img"></p><p>对于基于哈希的分片，MongoDB计算一个字段的哈希值，并用这个哈希值来创建数据块。在使用基于哈希分片的系统中，拥有”相近”片键的文档很可能不会存储在同一个数据块中，因此数据的分离性更好一些。</p><p>Hash分片与范围分片互补，能将文档随机的分散到各个chunk，充分的扩展写能力，弥补了范围分片的不足，但不能高效的服务范围查询，所有的范围查询要分发到后端所有的Shard才能找出满足条件的文档。</p><h4 id="分片键选择建议" tabindex="-1"><a class="header-anchor" href="#分片键选择建议" aria-hidden="true">#</a> 分片键选择建议</h4><p>选择合适的片键，影响片键效率的主要因素：</p><ul><li>取值基数（cardinality）</li><li>取值分布</li><li>分散写，集中读</li><li>被尽可能多的业务场景用到</li><li>避免单调递增或递减的片键</li></ul><h5 id="_1、递增的sharding-key" tabindex="-1"><a class="header-anchor" href="#_1、递增的sharding-key" aria-hidden="true">#</a> 1、递增的sharding key</h5><p>数据文件挪动小。（优势）</p><p>因为数据文件递增，所以会把insert的写IO永久放在最后一片上，造成最后一片的写热点。同时，随着最后一片的数据量增大，将不断的发生迁移至之前的片上。</p><h5 id="_2、随机的sharding-key" tabindex="-1"><a class="header-anchor" href="#_2、随机的sharding-key" aria-hidden="true">#</a> 2、随机的sharding key</h5><p>数据分布均匀，insert的写IO均匀分布在多个片上。（优势）</p><p>大量的随机IO，磁盘不堪重荷。</p><h5 id="_3、混合型key" tabindex="-1"><a class="header-anchor" href="#_3、混合型key" aria-hidden="true">#</a> 3、混合型key</h5><p>大方向随机递增，小范围随机分布。</p><p>为了防止出现大量的chunk均衡迁移，可能造成的IO压力。我们需要设置合理分片使用策略（片键的选择、分片算法（range、hash））</p><h2 id="mongodb-存储" tabindex="-1"><a class="header-anchor" href="#mongodb-存储" aria-hidden="true">#</a> MongoDB 存储</h2><h3 id="wiredtiger-storage-engine" tabindex="-1"><a class="header-anchor" href="#wiredtiger-storage-engine" aria-hidden="true">#</a> WiredTiger Storage Engine</h3><p>从Mongodb3.2版本以后，WiredTiger 将作为默认的存储引擎。</p><h4 id="文档级并发" tabindex="-1"><a class="header-anchor" href="#文档级并发" aria-hidden="true">#</a> 文档级并发</h4><p>WiredTiger使用document-level 并发来控制写操作，因此，允许多client同时修改统一集合中的不同文档。</p><h4 id="snapshots、checkpoints、journal" tabindex="-1"><a class="header-anchor" href="#snapshots、checkpoints、journal" aria-hidden="true">#</a> Snapshots、Checkpoints、Journal</h4><p>snapshot：mongodb使用多版本并发控制，snapshot则是一个基于内存的时间点快照。operation就是在这个快照上完成的。</p><p>checkpoint： 每个60秒创建一个checkpoint，新的checkpoint创建期间，旧的checkpoint仍然可用，知道mongo将引用更新(原子更新)到新的checkpoint上。</p><p>Journal：是Mongodb的一个写日志的功能，其实就是预写日志功能（Write-ahead logging， 缩写WAL）mongodb宕机后的数据恢复就是通过checkpoint和Journal来实现的。</p><h4 id="内存使用" tabindex="-1"><a class="header-anchor" href="#内存使用" aria-hidden="true">#</a> 内存使用</h4><p>mongo利用缓存大小的计算方式是一下两种方式的最大者</p><p>50% of (RAM – 1 GB) or 256 MB.</p><h4 id="数据压缩" tabindex="-1"><a class="header-anchor" href="#数据压缩" aria-hidden="true">#</a> 数据压缩</h4><p>支持对collections和index的压缩，默认使用snappy库进行压缩</p><p>对于collections，还提供一下压缩算法</p><ul><li>zlib</li><li>zstd（从mongodb4.2版本开始）</li></ul>',299);function Cn(Nn,An){const s=l("ExternalLinkIcon");return i(),p("div",null,[S,n("p",null,[t("MongoDB是一个基于分布式文件存储 [1] 的数据库。由"),n("a",D,[t("C++"),a(s)]),t("语言编写。旨在为WEB应用提供可扩展的高性能数据存储解决方案。")]),n("p",null,[t("MongoDB是一个介于"),n("a",M,[t("关系数据库"),a(s)]),t("和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。它支持的数据结构非常松散，是类似"),n("a",w,[t("json"),a(s)]),t("的"),n("a",O,[t("bson"),a(s)]),t("格式，因此可以存储比较复杂的数据类型。Mongo最大的特点是它支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立"),n("a",B,[t("索引"),a(s)]),t("。")]),C,n("p",null,[t("mongodb会默认带"),n("a",N,[t("三个库"),a(s)]),t("：")]),A,n("table",null,[I,n("tbody",null,[n("tr",null,[n("td",j,[n("a",z,[T,a(s)])]),E]),n("tr",null,[n("td",R,[n("a",P,[L,a(s)])]),F]),n("tr",null,[n("td",K,[n("a",G,[U,a(s)])]),W]),n("tr",null,[n("td",J,[n("a",V,[Y,a(s)])]),Q]),n("tr",null,[n("td",Z,[n("a",H,[X,a(s)])]),nn]),n("tr",null,[n("td",sn,[n("a",an,[tn,a(s)])]),en]),n("tr",null,[n("td",on,[n("a",pn,[ln,a(s)])]),un]),n("tr",null,[n("td",rn,[n("a",cn,[dn,a(s)])]),vn]),n("tr",null,[n("td",mn,[n("a",bn,[qn,a(s)])]),kn]),n("tr",null,[n("td",gn,[n("a",hn,[yn,a(s)])]),xn]),n("tr",null,[n("td",fn,[n("a",_n,[$n,a(s)])]),Sn]),n("tr",null,[n("td",Dn,[n("a",Mn,[wn,a(s)])]),On])])]),Bn])}const jn=o($,[["render",Cn],["__file","mongo.html.vue"]]);export{jn as default};
