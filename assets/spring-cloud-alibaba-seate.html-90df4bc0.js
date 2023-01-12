const e=JSON.parse('{"key":"v-00fcb2c8","path":"/spring-cloud/spring-cloud-seate/spring-cloud-alibaba-seate.html","title":"Spring Cloud Alibaba Seate","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"分布式事务问题","slug":"分布式事务问题","link":"#分布式事务问题","children":[{"level":3,"title":"1.1.本地事务","slug":"_1-1-本地事务","link":"#_1-1-本地事务","children":[]},{"level":3,"title":"1.2.分布式事务","slug":"_1-2-分布式事务","link":"#_1-2-分布式事务","children":[]}]},{"level":2,"title":"理论基础","slug":"理论基础","link":"#理论基础","children":[{"level":3,"title":"CAP定理","slug":"cap定理","link":"#cap定理","children":[]},{"level":3,"title":"BASE理论","slug":"base理论","link":"#base理论","children":[]},{"level":3,"title":"解决分布式事务的思路","slug":"解决分布式事务的思路","link":"#解决分布式事务的思路","children":[]}]},{"level":2,"title":"初识Seate","slug":"初识seate","link":"#初识seate","children":[{"level":3,"title":"Seata的架构","slug":"seata的架构","link":"#seata的架构","children":[]}]},{"level":2,"title":"Seate的部署和集成","slug":"seate的部署和集成","link":"#seate的部署和集成","children":[{"level":3,"title":"部署TC服务","slug":"部署tc服务","link":"#部署tc服务","children":[]},{"level":3,"title":"集成Seate","slug":"集成seate","link":"#集成seate","children":[]}]},{"level":2,"title":"Seate中的事物模型","slug":"seate中的事物模型","link":"#seate中的事物模型","children":[{"level":3,"title":"XA模式","slug":"xa模式","link":"#xa模式","children":[]},{"level":3,"title":"4.1.2.Seata的XA模型","slug":"_4-1-2-seata的xa模型","link":"#_4-1-2-seata的xa模型","children":[]},{"level":3,"title":"4.1.3.优缺点","slug":"_4-1-3-优缺点","link":"#_4-1-3-优缺点","children":[]}]}],"git":{"createdTime":1671455256000,"updatedTime":1671455256000,"contributors":[{"name":"xuliang","email":"895252461@qq.com","commits":1}]},"readingTime":{"minutes":7.83,"words":2348},"filePathRelative":"spring-cloud/spring-cloud-seate/spring-cloud-alibaba-seate.md","localizedDate":"2022年12月19日","excerpt":"<h1> Spring Cloud Alibaba Seate</h1>\\n<h2> 分布式事务问题</h2>\\n<h3> 1.1.本地事务</h3>\\n<p>本地事务，也就是传统的<strong>单机事务</strong>。在传统数据库事务中，必须要满足四个原则：</p>\\n\\n<h3> 1.2.分布式事务</h3>\\n<p><strong>分布式事务</strong>，就是指不是在单个服务或单个数据库架构下，产生的事务，例如：</p>\\n<ul>\\n<li>跨数据源的分布式事务</li>\\n<li>跨服务的分布式事务</li>\\n<li>综合情况</li>\\n</ul>\\n<p>在数据库水平拆分、服务垂直拆分之后，一个业务操作通常要跨多个数据库、服务才能完成。例如电商行业中比较常见的下单付款案例，包括下面几个行为：</p>"}');export{e as data};
