import{d as s,r as b,a as S,b as J,c as f,i as _,e as C,f as B,g as M,o as T,h as c,j as g,k as x,l as q,m as h,n as Z,R as H,p as N,q as F,S as Q,u as K,w as $,s as G,t as z,v as U}from"./framework-4ec38622.js";const W="modulepreload",X=function(n){return"/"+n},j={},a=function(e,o,t){if(!o||o.length===0)return e();const p=document.getElementsByTagName("link");return Promise.all(o.map(i=>{if(i=X(i),i in j)return;j[i]=!0;const l=i.endsWith(".css"),r=l?'[rel="stylesheet"]':"";if(!!t)for(let k=p.length-1;k>=0;k--){const y=p[k];if(y.href===i&&(!l||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${r}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":W,l||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),l)return new Promise((k,y)=>{d.addEventListener("load",k),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Y={"v-8daa1a0e":()=>a(()=>import("./index.html-4e1da2c4.js"),[]).then(({data:n})=>n),"v-a62d4dbe":()=>a(()=>import("./spring-cloud-alibaba-seate.html-df701e40.js"),[]).then(({data:n})=>n),"v-f3c5bf2e":()=>a(()=>import("./spring-cloud-overview.html-94372eca.js"),[]).then(({data:n})=>n),"v-1ad8d32a":()=>a(()=>import("./gitbook.html-432908fc.js"),[]).then(({data:n})=>n),"v-48dabcac":()=>a(()=>import("./mysql-advance.html-b6faea43.js"),[]).then(({data:n})=>n),"v-af44ba04":()=>a(()=>import("./mysql-apply.html-e0982e6c.js"),[]).then(({data:n})=>n),"v-43c7fd75":()=>a(()=>import("./mysql-base.html-15774da0.js"),[]).then(({data:n})=>n),"v-2aea8bee":()=>a(()=>import("./mysql-devops.html-5cee1349.js"),[]).then(({data:n})=>n),"v-6435f9e7":()=>a(()=>import("./redis-base.html-e17677ed.js"),[]).then(({data:n})=>n),"v-4dce8d00":()=>a(()=>import("./redis-cluster.html-8712f49e.js"),[]).then(({data:n})=>n),"v-143644bf":()=>a(()=>import("./redis-overview.html-1fca9f7e.js"),[]).then(({data:n})=>n),"v-1b991ef8":()=>a(()=>import("./java-base.html-ca97d2c7.js"),[]).then(({data:n})=>n),"v-358b6c6f":()=>a(()=>import("./java-sql.html-bbe6c4c2.js"),[]).then(({data:n})=>n),"v-60a74208":()=>a(()=>import("./java-time.html-ce7c9496.js"),[]).then(({data:n})=>n),"v-8d246506":()=>a(()=>import("./java-collection-list.html-8bbef8fd.js"),[]).then(({data:n})=>n),"v-00469b8a":()=>a(()=>import("./java-collection-map.html-9ee599cf.js"),[]).then(({data:n})=>n),"v-86d55efc":()=>a(()=>import("./java-collection-overview.html-31570b40.js"),[]).then(({data:n})=>n),"v-28f464dc":()=>a(()=>import("./java-concurrent-base.html-2e26c5a1.js"),[]).then(({data:n})=>n),"v-0b589964":()=>a(()=>import("./Java-concurrent-container.html-e5f75933.js"),[]).then(({data:n})=>n),"v-9844af78":()=>a(()=>import("./java-concurrent-interview.html-d289133d.js"),[]).then(({data:n})=>n),"v-5dca8ec2":()=>a(()=>import("./java-concurrent-lock.html-cbd95e38.js"),[]).then(({data:n})=>n),"v-2b5bea71":()=>a(()=>import("./java-concurrent-pool.html-a9ecee05.js"),[]).then(({data:n})=>n),"v-f86243ac":()=>a(()=>import("./java-concurrent-tools.html-76151b53.js"),[]).then(({data:n})=>n),"v-155dee6c":()=>a(()=>import("./java-bio.html-d706ae9b.js"),[]).then(({data:n})=>n),"v-19ecc83a":()=>a(()=>import("./java-io-base.html-bb263882.js"),[]).then(({data:n})=>n),"v-5841b984":()=>a(()=>import("./java-nio.html-2de47e3f.js"),[]).then(({data:n})=>n),"v-562db611":()=>a(()=>import("./Java内存模型.html-0e76463e.js"),[]).then(({data:n})=>n),"v-fa0b746a":()=>a(()=>import("./JVM内存结构.html-b17bcef0.js"),[]).then(({data:n})=>n),"v-55af59fc":()=>a(()=>import("./JVM垃圾回收.html-ee219a34.js"),[]).then(({data:n})=>n),"v-55d4ca16":()=>a(()=>import("./JVM概览.html-b4ce8fc6.js"),[]).then(({data:n})=>n),"v-45c37b14":()=>a(()=>import("./JVM类加载器.html-dd7f5a89.js"),[]).then(({data:n})=>n),"v-48e598f0":()=>a(()=>import("./JVM类文件结构.html-8859cd08.js"),[]).then(({data:n})=>n),"v-0e810160":()=>a(()=>import("./JVM调优.html-0d15b1ba.js"),[]).then(({data:n})=>n),"v-55a3ba3e":()=>a(()=>import("./java-servlet.html-c7a54ede.js"),[]).then(({data:n})=>n),"v-fcded982":()=>a(()=>import("./java-lambda.html-56b847d2.js"),[]).then(({data:n})=>n),"v-48060326":()=>a(()=>import("./java-stream.html-6167e062.js"),[]).then(({data:n})=>n),"v-1b3c75b4":()=>a(()=>import("./HikariCP-base.html-f5a4e8e5.js"),[]).then(({data:n})=>n),"v-79e07a9c":()=>a(()=>import("./HikariCP-source.html-7a2f3fac.js"),[]).then(({data:n})=>n),"v-cf02a2f4":()=>a(()=>import("./jackson-overview.html-57cfb768.js"),[]).then(({data:n})=>n),"v-6fa3390c":()=>a(()=>import("./kafka-broker.html-a30f3377.js"),[]).then(({data:n})=>n),"v-bfcc67e2":()=>a(()=>import("./kafka-consumer.html-2a1327ac.js"),[]).then(({data:n})=>n),"v-5de44728":()=>a(()=>import("./kafka-overview.html-698972bc.js"),[]).then(({data:n})=>n),"v-09a161f3":()=>a(()=>import("./kafka-producer.html-579ce0f8.js"),[]).then(({data:n})=>n),"v-14535c74":()=>a(()=>import("./spring-kafka.html-b1a1e4d1.js"),[]).then(({data:n})=>n),"v-6315cd33":()=>a(()=>import("./log-framework.html-98a12691.js"),[]).then(({data:n})=>n),"v-966d5f16":()=>a(()=>import("./1.Hello World.html-4b77eac1.js"),[]).then(({data:n})=>n),"v-e8f00d1a":()=>a(()=>import("./2.Global Config.html-bd544474.js"),[]).then(({data:n})=>n),"v-eafdfe00":()=>a(()=>import("./index.html-905c3f62.js"),[]).then(({data:n})=>n),"v-f451e740":()=>a(()=>import("./sharding-sphere.html-a30db686.js"),[]).then(({data:n})=>n),"v-30ff917c":()=>a(()=>import("./shiro-overview.html-fa31ba73.js"),[]).then(({data:n})=>n),"v-3fe0b90e":()=>a(()=>import("./tomcat.html-4ad2c770.js"),[]).then(({data:n})=>n),"v-5e4b5518":()=>a(()=>import("./data-structure-list.html-17b01002.js"),[]).then(({data:n})=>n),"v-8c01f60e":()=>a(()=>import("./data-structure-overview.html-44ed6838.js"),[]).then(({data:n})=>n),"v-1bb87274":()=>a(()=>import("./data-structure-tree.html-c806dd3b.js"),[]).then(({data:n})=>n),"v-20ffd333":()=>a(()=>import("./design-adapter.html-0e9d816d.js"),[]).then(({data:n})=>n),"v-51ad7541":()=>a(()=>import("./design-chain.html-bb17cabc.js"),[]).then(({data:n})=>n),"v-5d65d8bb":()=>a(()=>import("./design-composite.html-1d475fbf.js"),[]).then(({data:n})=>n),"v-00b98387":()=>a(()=>import("./design-decorator.html-4f27f10a.js"),[]).then(({data:n})=>n),"v-627fe3d7":()=>a(()=>import("./design-overview.html-0a940fb3.js"),[]).then(({data:n})=>n),"v-5ea7c5b4":()=>a(()=>import("./design-proxy.html-100e60b2.js"),[]).then(({data:n})=>n),"v-090dda1d":()=>a(()=>import("./design-strategy.html-a2df8a49.js"),[]).then(({data:n})=>n),"v-ee734362":()=>a(()=>import("./滑动窗口.html-86771022.js"),[]).then(({data:n})=>n),"v-e4c1693a":()=>a(()=>import("./linux-overview.html-2bd9af93.js"),[]).then(({data:n})=>n),"v-69bb4fdb":()=>a(()=>import("./encoding.html-304390cc.js"),[]).then(({data:n})=>n),"v-3dff1a49":()=>a(()=>import("./encryption-algorithm.html-fb0becaa.js"),[]).then(({data:n})=>n),"v-4063f995":()=>a(()=>import("./temp.html-ac4ce374.js"),[]).then(({data:n})=>n),"v-0080010e":()=>a(()=>import("./BeanPostProcessor-base.html-c6481b26.js"),[]).then(({data:n})=>n),"v-023f80b8":()=>a(()=>import("./BeanPostProcessor-ConfigurationClassPostProcessor.html-ba0c8ae7.js"),[]).then(({data:n})=>n),"v-2f948fd1":()=>a(()=>import("./spring-source-overview.html-9371e343.js"),[]).then(({data:n})=>n),"v-d237d66a":()=>a(()=>import("./spring-boot-condition.html-a415267e.js"),[]).then(({data:n})=>n),"v-4fe2e52e":()=>a(()=>import("./spring-cloud-commons-base.html-f75ee2c9.js"),[]).then(({data:n})=>n),"v-7ed6d04b":()=>a(()=>import("./spring-cloud-gateway.html-03291875.js"),[]).then(({data:n})=>n),"v-7328d921":()=>a(()=>import("./spring-cloud-loadbalancer.html-ccdc0547.js"),[]).then(({data:n})=>n),"v-ff7d10c0":()=>a(()=>import("./nacos-client-discovery.html-17a81d03.js"),[]).then(({data:n})=>n),"v-5f9e4035":()=>a(()=>import("./nacos-overview.html-539b7085.js"),[]).then(({data:n})=>n),"v-5786c3b4":()=>a(()=>import("./cloud-openfeign-action.html-7761387f.js"),[]).then(({data:n})=>n),"v-680b9feb":()=>a(()=>import("./spring-cloud-openfeign.html-10212321.js"),[]).then(({data:n})=>n),"v-20e24ead":()=>a(()=>import("./spring-cloud-ribbon.html-8669a44d.js"),[]).then(({data:n})=>n),"v-f1d7542e":()=>a(()=>import("./sentinel-source.html-dc297934.js"),[]).then(({data:n})=>n),"v-0843675e":()=>a(()=>import("./git.html-cb7e5449.js"),[]).then(({data:n})=>n),"v-5e5ed352":()=>a(()=>import("./gitlab.html-eb2126d8.js"),[]).then(({data:n})=>n),"v-14d94cb6":()=>a(()=>import("./junit4.html-6c786952.js"),[]).then(({data:n})=>n),"v-116f9b78":()=>a(()=>import("./junit5.html-e36d7d70.js"),[]).then(({data:n})=>n),"v-f19275c2":()=>a(()=>import("./maven.html-e0151a0f.js"),[]).then(({data:n})=>n),"v-6c942531":()=>a(()=>import("./reactor.html-cd44ff8d.js"),[]).then(({data:n})=>n),"v-8c95a318":()=>a(()=>import("./spring-source-web-init.html-b8105d34.js"),[]).then(({data:n})=>n),"v-119da7d0":()=>a(()=>import("./spring-source-web-listener.html-7b8c6479.js"),[]).then(({data:n})=>n),"v-3706649a":()=>a(()=>import("./404.html-f04ced3e.js"),[]).then(({data:n})=>n),"v-5bc93818":()=>a(()=>import("./index.html-62ca9f14.js"),[]).then(({data:n})=>n),"v-744d024e":()=>a(()=>import("./index.html-fc52137e.js"),[]).then(({data:n})=>n),"v-e52c881c":()=>a(()=>import("./index.html-ee301928.js"),[]).then(({data:n})=>n),"v-75ed4ea4":()=>a(()=>import("./index.html-d0c5f0f0.js"),[]).then(({data:n})=>n),"v-d804e652":()=>a(()=>import("./index.html-25bcd8c4.js"),[]).then(({data:n})=>n),"v-154dc4c4":()=>a(()=>import("./index.html-37f2094a.js"),[]).then(({data:n})=>n),"v-01560935":()=>a(()=>import("./index.html-50de9de4.js"),[]).then(({data:n})=>n),"v-02d70742":()=>a(()=>import("./index.html-a6bbb2fe.js"),[]).then(({data:n})=>n),"v-85d7f668":()=>a(()=>import("./index.html-afe963e2.js"),[]).then(({data:n})=>n),"v-040a2283":()=>a(()=>import("./index.html-e1231d43.js"),[]).then(({data:n})=>n),"v-2f9356b9":()=>a(()=>import("./index.html-c4d07d46.js"),[]).then(({data:n})=>n)},nn=JSON.parse('{"base":"/","lang":"en-US","title":"教程","description":"","head":[],"locales":{"/":{"lang":"zh-CN","title":"Java 成神之路","description":"这是我的第一个 VuePress 站点"}}}'),w={"v-8daa1a0e":s(()=>a(()=>import("./index.html-19c8c7e9.js"),["assets/index.html-19c8c7e9.js","assets/framework-4ec38622.js"])),"v-a62d4dbe":s(()=>a(()=>import("./spring-cloud-alibaba-seate.html-b5da756c.js"),["assets/spring-cloud-alibaba-seate.html-b5da756c.js","assets/framework-4ec38622.js"])),"v-f3c5bf2e":s(()=>a(()=>import("./spring-cloud-overview.html-ff9b794b.js"),["assets/spring-cloud-overview.html-ff9b794b.js","assets/framework-4ec38622.js"])),"v-1ad8d32a":s(()=>a(()=>import("./gitbook.html-5a50abf0.js"),["assets/gitbook.html-5a50abf0.js","assets/framework-4ec38622.js"])),"v-48dabcac":s(()=>a(()=>import("./mysql-advance.html-79a57a00.js"),["assets/mysql-advance.html-79a57a00.js","assets/framework-4ec38622.js"])),"v-af44ba04":s(()=>a(()=>import("./mysql-apply.html-b76d628d.js"),["assets/mysql-apply.html-b76d628d.js","assets/framework-4ec38622.js"])),"v-43c7fd75":s(()=>a(()=>import("./mysql-base.html-95625c2f.js"),["assets/mysql-base.html-95625c2f.js","assets/framework-4ec38622.js"])),"v-2aea8bee":s(()=>a(()=>import("./mysql-devops.html-74e24111.js"),["assets/mysql-devops.html-74e24111.js","assets/framework-4ec38622.js"])),"v-6435f9e7":s(()=>a(()=>import("./redis-base.html-0c64fcd1.js"),["assets/redis-base.html-0c64fcd1.js","assets/framework-4ec38622.js"])),"v-4dce8d00":s(()=>a(()=>import("./redis-cluster.html-d9e53ddd.js"),["assets/redis-cluster.html-d9e53ddd.js","assets/framework-4ec38622.js"])),"v-143644bf":s(()=>a(()=>import("./redis-overview.html-d8ed14d9.js"),["assets/redis-overview.html-d8ed14d9.js","assets/framework-4ec38622.js"])),"v-1b991ef8":s(()=>a(()=>import("./java-base.html-bb254e89.js"),["assets/java-base.html-bb254e89.js","assets/framework-4ec38622.js"])),"v-358b6c6f":s(()=>a(()=>import("./java-sql.html-98f87090.js"),["assets/java-sql.html-98f87090.js","assets/framework-4ec38622.js"])),"v-60a74208":s(()=>a(()=>import("./java-time.html-1149c2e2.js"),["assets/java-time.html-1149c2e2.js","assets/framework-4ec38622.js"])),"v-8d246506":s(()=>a(()=>import("./java-collection-list.html-dcb82f95.js"),["assets/java-collection-list.html-dcb82f95.js","assets/framework-4ec38622.js"])),"v-00469b8a":s(()=>a(()=>import("./java-collection-map.html-20b29455.js"),["assets/java-collection-map.html-20b29455.js","assets/framework-4ec38622.js"])),"v-86d55efc":s(()=>a(()=>import("./java-collection-overview.html-0153adc1.js"),["assets/java-collection-overview.html-0153adc1.js","assets/framework-4ec38622.js"])),"v-28f464dc":s(()=>a(()=>import("./java-concurrent-base.html-4092d51f.js"),["assets/java-concurrent-base.html-4092d51f.js","assets/framework-4ec38622.js"])),"v-0b589964":s(()=>a(()=>import("./Java-concurrent-container.html-f22d5109.js"),["assets/Java-concurrent-container.html-f22d5109.js","assets/framework-4ec38622.js"])),"v-9844af78":s(()=>a(()=>import("./java-concurrent-interview.html-02742a0a.js"),["assets/java-concurrent-interview.html-02742a0a.js","assets/framework-4ec38622.js"])),"v-5dca8ec2":s(()=>a(()=>import("./java-concurrent-lock.html-41872812.js"),["assets/java-concurrent-lock.html-41872812.js","assets/framework-4ec38622.js"])),"v-2b5bea71":s(()=>a(()=>import("./java-concurrent-pool.html-b7de958e.js"),["assets/java-concurrent-pool.html-b7de958e.js","assets/framework-4ec38622.js"])),"v-f86243ac":s(()=>a(()=>import("./java-concurrent-tools.html-b9ad45db.js"),["assets/java-concurrent-tools.html-b9ad45db.js","assets/framework-4ec38622.js"])),"v-155dee6c":s(()=>a(()=>import("./java-bio.html-a5769212.js"),["assets/java-bio.html-a5769212.js","assets/framework-4ec38622.js"])),"v-19ecc83a":s(()=>a(()=>import("./java-io-base.html-e3ef5e77.js"),["assets/java-io-base.html-e3ef5e77.js","assets/framework-4ec38622.js"])),"v-5841b984":s(()=>a(()=>import("./java-nio.html-a3fa4765.js"),["assets/java-nio.html-a3fa4765.js","assets/framework-4ec38622.js"])),"v-562db611":s(()=>a(()=>import("./Java内存模型.html-087adb9d.js"),["assets/Java内存模型.html-087adb9d.js","assets/framework-4ec38622.js"])),"v-fa0b746a":s(()=>a(()=>import("./JVM内存结构.html-4bc916e1.js"),["assets/JVM内存结构.html-4bc916e1.js","assets/framework-4ec38622.js"])),"v-55af59fc":s(()=>a(()=>import("./JVM垃圾回收.html-c6e0e3e0.js"),["assets/JVM垃圾回收.html-c6e0e3e0.js","assets/framework-4ec38622.js"])),"v-55d4ca16":s(()=>a(()=>import("./JVM概览.html-435f6ec8.js"),["assets/JVM概览.html-435f6ec8.js","assets/framework-4ec38622.js"])),"v-45c37b14":s(()=>a(()=>import("./JVM类加载器.html-0c7f8931.js"),["assets/JVM类加载器.html-0c7f8931.js","assets/framework-4ec38622.js"])),"v-48e598f0":s(()=>a(()=>import("./JVM类文件结构.html-5afd6d1d.js"),["assets/JVM类文件结构.html-5afd6d1d.js","assets/framework-4ec38622.js"])),"v-0e810160":s(()=>a(()=>import("./JVM调优.html-9a1a4154.js"),["assets/JVM调优.html-9a1a4154.js","assets/framework-4ec38622.js"])),"v-55a3ba3e":s(()=>a(()=>import("./java-servlet.html-f9646dd1.js"),["assets/java-servlet.html-f9646dd1.js","assets/framework-4ec38622.js"])),"v-fcded982":s(()=>a(()=>import("./java-lambda.html-1db83529.js"),["assets/java-lambda.html-1db83529.js","assets/framework-4ec38622.js"])),"v-48060326":s(()=>a(()=>import("./java-stream.html-8b490468.js"),["assets/java-stream.html-8b490468.js","assets/framework-4ec38622.js"])),"v-1b3c75b4":s(()=>a(()=>import("./HikariCP-base.html-d01cd368.js"),["assets/HikariCP-base.html-d01cd368.js","assets/framework-4ec38622.js"])),"v-79e07a9c":s(()=>a(()=>import("./HikariCP-source.html-27512376.js"),["assets/HikariCP-source.html-27512376.js","assets/framework-4ec38622.js"])),"v-cf02a2f4":s(()=>a(()=>import("./jackson-overview.html-ccca046f.js"),["assets/jackson-overview.html-ccca046f.js","assets/framework-4ec38622.js"])),"v-6fa3390c":s(()=>a(()=>import("./kafka-broker.html-7cc959b4.js"),["assets/kafka-broker.html-7cc959b4.js","assets/framework-4ec38622.js"])),"v-bfcc67e2":s(()=>a(()=>import("./kafka-consumer.html-35141192.js"),["assets/kafka-consumer.html-35141192.js","assets/framework-4ec38622.js"])),"v-5de44728":s(()=>a(()=>import("./kafka-overview.html-b243daf8.js"),["assets/kafka-overview.html-b243daf8.js","assets/framework-4ec38622.js"])),"v-09a161f3":s(()=>a(()=>import("./kafka-producer.html-93a69d00.js"),["assets/kafka-producer.html-93a69d00.js","assets/framework-4ec38622.js"])),"v-14535c74":s(()=>a(()=>import("./spring-kafka.html-0032d80c.js"),["assets/spring-kafka.html-0032d80c.js","assets/framework-4ec38622.js"])),"v-6315cd33":s(()=>a(()=>import("./log-framework.html-5769500e.js"),["assets/log-framework.html-5769500e.js","assets/framework-4ec38622.js"])),"v-966d5f16":s(()=>a(()=>import("./1.Hello World.html-78e7fc50.js"),["assets/1.Hello World.html-78e7fc50.js","assets/framework-4ec38622.js"])),"v-e8f00d1a":s(()=>a(()=>import("./2.Global Config.html-d3157ebb.js"),["assets/2.Global Config.html-d3157ebb.js","assets/framework-4ec38622.js"])),"v-eafdfe00":s(()=>a(()=>import("./index.html-44ddef87.js"),["assets/index.html-44ddef87.js","assets/framework-4ec38622.js"])),"v-f451e740":s(()=>a(()=>import("./sharding-sphere.html-2e54e4df.js"),["assets/sharding-sphere.html-2e54e4df.js","assets/framework-4ec38622.js"])),"v-30ff917c":s(()=>a(()=>import("./shiro-overview.html-e44b2286.js"),["assets/shiro-overview.html-e44b2286.js","assets/framework-4ec38622.js"])),"v-3fe0b90e":s(()=>a(()=>import("./tomcat.html-653f98cd.js"),["assets/tomcat.html-653f98cd.js","assets/framework-4ec38622.js"])),"v-5e4b5518":s(()=>a(()=>import("./data-structure-list.html-420dc821.js"),["assets/data-structure-list.html-420dc821.js","assets/framework-4ec38622.js"])),"v-8c01f60e":s(()=>a(()=>import("./data-structure-overview.html-e227421d.js"),["assets/data-structure-overview.html-e227421d.js","assets/framework-4ec38622.js"])),"v-1bb87274":s(()=>a(()=>import("./data-structure-tree.html-752ceeb1.js"),["assets/data-structure-tree.html-752ceeb1.js","assets/framework-4ec38622.js"])),"v-20ffd333":s(()=>a(()=>import("./design-adapter.html-41aa7652.js"),["assets/design-adapter.html-41aa7652.js","assets/framework-4ec38622.js"])),"v-51ad7541":s(()=>a(()=>import("./design-chain.html-8685e4e6.js"),["assets/design-chain.html-8685e4e6.js","assets/framework-4ec38622.js"])),"v-5d65d8bb":s(()=>a(()=>import("./design-composite.html-4375b033.js"),["assets/design-composite.html-4375b033.js","assets/framework-4ec38622.js"])),"v-00b98387":s(()=>a(()=>import("./design-decorator.html-2b2ae807.js"),["assets/design-decorator.html-2b2ae807.js","assets/framework-4ec38622.js"])),"v-627fe3d7":s(()=>a(()=>import("./design-overview.html-300948fd.js"),["assets/design-overview.html-300948fd.js","assets/framework-4ec38622.js"])),"v-5ea7c5b4":s(()=>a(()=>import("./design-proxy.html-e1813076.js"),["assets/design-proxy.html-e1813076.js","assets/framework-4ec38622.js"])),"v-090dda1d":s(()=>a(()=>import("./design-strategy.html-a31637dd.js"),["assets/design-strategy.html-a31637dd.js","assets/framework-4ec38622.js"])),"v-ee734362":s(()=>a(()=>import("./滑动窗口.html-ae330cc5.js"),["assets/滑动窗口.html-ae330cc5.js","assets/framework-4ec38622.js"])),"v-e4c1693a":s(()=>a(()=>import("./linux-overview.html-8ac20a5d.js"),["assets/linux-overview.html-8ac20a5d.js","assets/framework-4ec38622.js"])),"v-69bb4fdb":s(()=>a(()=>import("./encoding.html-f8e7f158.js"),["assets/encoding.html-f8e7f158.js","assets/framework-4ec38622.js"])),"v-3dff1a49":s(()=>a(()=>import("./encryption-algorithm.html-bfb3dc64.js"),["assets/encryption-algorithm.html-bfb3dc64.js","assets/framework-4ec38622.js"])),"v-4063f995":s(()=>a(()=>import("./temp.html-ec342781.js"),["assets/temp.html-ec342781.js","assets/framework-4ec38622.js"])),"v-0080010e":s(()=>a(()=>import("./BeanPostProcessor-base.html-a44c5c69.js"),["assets/BeanPostProcessor-base.html-a44c5c69.js","assets/framework-4ec38622.js"])),"v-023f80b8":s(()=>a(()=>import("./BeanPostProcessor-ConfigurationClassPostProcessor.html-edba8ecd.js"),["assets/BeanPostProcessor-ConfigurationClassPostProcessor.html-edba8ecd.js","assets/framework-4ec38622.js"])),"v-2f948fd1":s(()=>a(()=>import("./spring-source-overview.html-576738e8.js"),["assets/spring-source-overview.html-576738e8.js","assets/framework-4ec38622.js"])),"v-d237d66a":s(()=>a(()=>import("./spring-boot-condition.html-b4e4df1a.js"),["assets/spring-boot-condition.html-b4e4df1a.js","assets/framework-4ec38622.js"])),"v-4fe2e52e":s(()=>a(()=>import("./spring-cloud-commons-base.html-39238198.js"),["assets/spring-cloud-commons-base.html-39238198.js","assets/framework-4ec38622.js"])),"v-7ed6d04b":s(()=>a(()=>import("./spring-cloud-gateway.html-7a4e7b1f.js"),["assets/spring-cloud-gateway.html-7a4e7b1f.js","assets/framework-4ec38622.js"])),"v-7328d921":s(()=>a(()=>import("./spring-cloud-loadbalancer.html-7a202164.js"),["assets/spring-cloud-loadbalancer.html-7a202164.js","assets/framework-4ec38622.js"])),"v-ff7d10c0":s(()=>a(()=>import("./nacos-client-discovery.html-1f7ae7f3.js"),["assets/nacos-client-discovery.html-1f7ae7f3.js","assets/framework-4ec38622.js"])),"v-5f9e4035":s(()=>a(()=>import("./nacos-overview.html-43d7250d.js"),["assets/nacos-overview.html-43d7250d.js","assets/framework-4ec38622.js"])),"v-5786c3b4":s(()=>a(()=>import("./cloud-openfeign-action.html-7559bcf7.js"),["assets/cloud-openfeign-action.html-7559bcf7.js","assets/framework-4ec38622.js"])),"v-680b9feb":s(()=>a(()=>import("./spring-cloud-openfeign.html-47e8c26d.js"),["assets/spring-cloud-openfeign.html-47e8c26d.js","assets/framework-4ec38622.js"])),"v-20e24ead":s(()=>a(()=>import("./spring-cloud-ribbon.html-a27e5c44.js"),["assets/spring-cloud-ribbon.html-a27e5c44.js","assets/framework-4ec38622.js"])),"v-f1d7542e":s(()=>a(()=>import("./sentinel-source.html-dc357213.js"),["assets/sentinel-source.html-dc357213.js","assets/framework-4ec38622.js"])),"v-0843675e":s(()=>a(()=>import("./git.html-eefdc275.js"),["assets/git.html-eefdc275.js","assets/framework-4ec38622.js"])),"v-5e5ed352":s(()=>a(()=>import("./gitlab.html-65555382.js"),["assets/gitlab.html-65555382.js","assets/framework-4ec38622.js"])),"v-14d94cb6":s(()=>a(()=>import("./junit4.html-c35363b6.js"),["assets/junit4.html-c35363b6.js","assets/framework-4ec38622.js"])),"v-116f9b78":s(()=>a(()=>import("./junit5.html-bdf5716e.js"),["assets/junit5.html-bdf5716e.js","assets/framework-4ec38622.js"])),"v-f19275c2":s(()=>a(()=>import("./maven.html-7c434596.js"),["assets/maven.html-7c434596.js","assets/framework-4ec38622.js"])),"v-6c942531":s(()=>a(()=>import("./reactor.html-f20890c4.js"),["assets/reactor.html-f20890c4.js","assets/framework-4ec38622.js"])),"v-8c95a318":s(()=>a(()=>import("./spring-source-web-init.html-27ad7747.js"),["assets/spring-source-web-init.html-27ad7747.js","assets/framework-4ec38622.js"])),"v-119da7d0":s(()=>a(()=>import("./spring-source-web-listener.html-2166addd.js"),["assets/spring-source-web-listener.html-2166addd.js","assets/framework-4ec38622.js"])),"v-3706649a":s(()=>a(()=>import("./404.html-46b6c18e.js"),["assets/404.html-46b6c18e.js","assets/framework-4ec38622.js"])),"v-5bc93818":s(()=>a(()=>import("./index.html-ed68d2be.js"),["assets/index.html-ed68d2be.js","assets/framework-4ec38622.js"])),"v-744d024e":s(()=>a(()=>import("./index.html-398e9a2c.js"),["assets/index.html-398e9a2c.js","assets/framework-4ec38622.js"])),"v-e52c881c":s(()=>a(()=>import("./index.html-902245d5.js"),["assets/index.html-902245d5.js","assets/framework-4ec38622.js"])),"v-75ed4ea4":s(()=>a(()=>import("./index.html-93ba03a9.js"),["assets/index.html-93ba03a9.js","assets/framework-4ec38622.js"])),"v-d804e652":s(()=>a(()=>import("./index.html-70956359.js"),["assets/index.html-70956359.js","assets/framework-4ec38622.js"])),"v-154dc4c4":s(()=>a(()=>import("./index.html-f0a732cd.js"),["assets/index.html-f0a732cd.js","assets/framework-4ec38622.js"])),"v-01560935":s(()=>a(()=>import("./index.html-3344b751.js"),["assets/index.html-3344b751.js","assets/framework-4ec38622.js"])),"v-02d70742":s(()=>a(()=>import("./index.html-6d2a3ffd.js"),["assets/index.html-6d2a3ffd.js","assets/framework-4ec38622.js"])),"v-85d7f668":s(()=>a(()=>import("./index.html-a5787a89.js"),["assets/index.html-a5787a89.js","assets/framework-4ec38622.js"])),"v-040a2283":s(()=>a(()=>import("./index.html-440f50d2.js"),["assets/index.html-440f50d2.js","assets/framework-4ec38622.js"])),"v-2f9356b9":s(()=>a(()=>import("./index.html-a7274cc8.js"),["assets/index.html-a7274cc8.js","assets/framework-4ec38622.js"]))};var an=b(Y),P=S({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),v=b(P),A=()=>v,L=Symbol(""),Tn=()=>{const n=h(L);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},I=Symbol(""),sn=()=>{const n=h(I);if(!n)throw new Error("usePageHead() is called without provider.");return n},O=Symbol(""),wn=()=>{const n=h(O);if(!n)throw new Error("usePageHeadTitle() is called without provider.");return n},D=Symbol(""),en=()=>{const n=h(D);if(!n)throw new Error("usePageLang() is called without provider.");return n},V=Symbol(""),Pn=()=>{const n=h(V);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},m=b(nn),An=()=>m,R=Symbol(""),Ln=()=>{const n=h(R);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},tn=Symbol(""),u=J({resolvePageData:async n=>{const e=an.value[n];return await(e==null?void 0:e())??P},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,e,o)=>{const t=_(e.description)?e.description:o.description,p=[...C(e.head)?e.head:[],...o.head,["title",{},n],["meta",{name:"description",content:t}]];return B(p)},resolvePageHeadTitle:(n,e)=>`${n.title?`${n.title}`:""}${e.title?` | ${e.title}`:""}`,resolvePageLang:n=>n.lang||"en",resolveRouteLocale:(n,e)=>M(n,e),resolveSiteLocaleData:(n,e)=>({...n,...n.locales[e]})}),on=f({name:"ClientOnly",setup(n,e){const o=b(!1);return T(()=>{o.value=!0}),()=>{var t,p;return o.value?(p=(t=e.slots).default)==null?void 0:p.call(t):null}}}),pn=f({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const e=A(),o=c(()=>w[n.pageKey||e.value.key]);return()=>o.value?g(o.value):g("div","404 Not Found")}}),In=(n={})=>n,ln=n=>x(n)?n:`/${q(n)}`;const rn=[["v-8daa1a0e","/",{y:"h",d:"2022-05-13T12:27:10.000Z",r:{minutes:.26,words:79},title:""},["/index.html","/README.md"]],["v-a62d4dbe","/spring-cloud/spring-cloud-alibaba-seate.html",{y:"a",d:"2022-05-17T06:46:19.000Z",e:`<h1> Spring Cloud Alibaba Seate</h1>
<h2> 分布式事务问题</h2>
<h3> 1.1.本地事务</h3>
<p>本地事务，也就是传统的<strong>单机事务</strong>。在传统数据库事务中，必须要满足四个原则：</p>

<h3> 1.2.分布式事务</h3>
<p><strong>分布式事务</strong>，就是指不是在单个服务或单个数据库架构下，产生的事务，例如：</p>
<ul>
<li>跨数据源的分布式事务</li>
<li>跨服务的分布式事务</li>
<li>综合情况</li>
</ul>
<p>在数据库水平拆分、服务垂直拆分之后，一个业务操作通常要跨多个数据库、服务才能完成。例如电商行业中比较常见的下单付款案例，包括下面几个行为：</p>`,r:{minutes:7.93,words:2378},title:"Spring Cloud Alibaba Seate"},["/spring-cloud/spring-cloud-alibaba-seate","/spring-cloud/spring-cloud-alibaba-seate.md"]],["v-f3c5bf2e","/spring-cloud/spring-cloud-overview.html",{y:"a",d:"2022-05-17T06:46:19.000Z",e:`<h1> Spring Cloud</h1>
<h2> 系统架构演变</h2>
<p>随着互联网的发展，网站应用的规模也在不断的扩大，进而导致系统架构也在不断的进行变化。从互联网早起到现在，系统架构大体经历了下面几个过程: 单体应用架构—&gt;垂直应用架构—&gt;分布式架构—&gt;SOA架构—&gt;微服务架构，当然还有悄然兴起的Service Mesh(服务网格化)。</p>
<p>接下来我们就来了解一下每种系统架构是什么样子的， 以及各有什么优缺点。</p>
<h3> 单体应用架构</h3>
<p>互联网早期，一般的网站应用流量较小，只需一个应用，将所有功能代码都部署在一起就可以，这样可以减少开发、部署和维护的成本。</p>`,r:{minutes:44.35,words:13304},title:"Spring Cloud"},["/spring-cloud/spring-cloud-overview","/spring-cloud/spring-cloud-overview.md"]],["v-1ad8d32a","/tools/gitbook.html",{y:"a",d:"2022-05-18T02:16:48.000Z",e:`<h1> gitbook 安装及使用</h1>
<h3> gitbook的安装</h3>
<p>首先需要安装Nodejs，这里直接安装v12.22.1版本，其他版本在安装nodejs的过程中有错误，避免入坑</p>
<p><a href="https://nodejs.org/zh-cn/download/releases/" target="_blank" rel="noopener noreferrer">nodejs</a>的所有历史版本可以在这里下载</p>
<blockquote>
<p>https://nodejs.org/zh-cn/download/releases/</p>
</blockquote>`,r:{minutes:2.69,words:808},title:"gitbook 安装及使用"},["/tools/gitbook","/tools/gitbook.md"]],["v-48dabcac","/database/mysql/mysql-advance.html",{y:"a",d:"2022-05-18T01:27:36.000Z",e:`<h1> MySQL 进阶篇</h1>
<h2> 进阶篇-存储引擎</h2>
<h3> MySQL体系结构</h3>

<ul>
<li>连接层</li>
</ul>
<p>最上层是一些客户端和链接服务，包含本地sock 通信和大多数基于客户端/服务端工具实现的类似于TCP/IP的通信。主要完成一些类似于连接处理、授权认证、及相关的安全方案。在该层上引入了线程池的概念，为通过认证安全接入的客户端提供线程。同样在该层上可以实现基于SSL的安全链接。服务器也会为安全接入的每个客户端验证它所具有的操作权限。</p>
<ul>
<li>服务层</li>
</ul>
<p>第二层架构主要完成大多数的核心服务功能，如SQL接口，并完成缓存的查询，SQL的分析和优化，部分内置函数的执行。所有跨存储引擎的功能也在这一层实现，如 过程、函数等。在该层，服务器会解析查询并创建相应的内部解析树，并对其完成相应的优化如确定表的查询的顺序，是否利用索引等，最后生成相应的执行操作。如果是select语句，服务器还会查询内部的缓存，如果缓存空间足够大，这样在解决大量读操作的环境中能够很好的提升系统的性能。</p>`,r:{minutes:85.51,words:25654},title:"MySQL 进阶篇"},["/database/mysql/mysql-advance","/database/mysql/mysql-advance.md"]],["v-af44ba04","/database/mysql/mysql-apply.html",{y:"a",d:"2022-05-18T01:27:36.000Z",e:`<h1> MySQL 应用篇</h1>
`,r:{minutes:.01,words:4},title:"MySQL 应用篇"},["/database/mysql/mysql-apply","/database/mysql/mysql-apply.md"]],["v-43c7fd75","/database/mysql/mysql-base.html",{y:"a",d:"2022-05-18T01:27:36.000Z",e:`<h1> MySQL 基础篇</h1>
<h2> 一：MySQL概述</h2>
<p>在这一章节，我们主要介绍两个部分，数据库相关概念及MySQL数据库的介绍、下载、安装、启动及连接。</p>
<h3> 1.1 数据库相关概念</h3>
<p>在这一部分，我们先来讲解三个概念：数据库、数据库管理系统、SQL。</p>
<table>
<thead>
<tr>
<th>名称</th>
<th>全称</th>
<th>简称</th>
</tr>
</thead>
<tbody>
<tr>
<td>数据库</td>
<td>存储数据的仓库。数据是有组织的进行存储</td>
<td>Database</td>
</tr>
<tr>
<td>数据库管理系统</td>
<td>操纵和管理数据库的大型软件</td>
<td>Database Management System</td>
</tr>
<tr>
<td>SQL</td>
<td>操作关系型数据库的编程语言，定义了一套操作</td>
<td>Structured Query</td>
</tr>
</tbody>
</table>`,r:{minutes:36.49,words:10947},title:"MySQL 基础篇"},["/database/mysql/mysql-base","/database/mysql/mysql-base.md"]],["v-2aea8bee","/database/mysql/mysql-devops.html",{y:"a",d:"2022-05-18T01:27:36.000Z",e:`<h1> MySQL 运维篇</h1>
<h2> mysql  死锁及解决办法</h2>
<h3> 查询死锁</h3>
<h4> 首先构建一个死锁</h4>
<p>开启两个事物A、B。在事物A中更新id为3的行，在事物B中更新id为4的行。然后在事物A中更新id为4的行，在事物B中更新id为3的行。至此，锁成。</p>
<h4> 查看正在进行中的事物</h4>
<p>执行如下SQL：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SELECT * FROM information_schema.INNODB_TRX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.66,words:198},title:"MySQL 运维篇"},["/database/mysql/mysql-devops","/database/mysql/mysql-devops.md"]],["v-6435f9e7","/database/redis/redis-base.html",{y:"a",d:"2022-11-27T12:45:32.000Z",e:`<h1> Redis 基础</h1>
<h2> 一：Redis的基础数据结构</h2>
<h3> 1.1 Redis的安装</h3>
<h4> 下载源码</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> wget https://download.redis.io/redis-stable.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.96,words:287},title:"Redis 基础"},["/database/redis/redis-base","/database/redis/redis-base.md"]],["v-4dce8d00","/database/redis/redis-cluster.html",{y:"a",d:"2022-11-27T12:45:32.000Z",e:`<h1> Redis Cluster</h1>
<blockquote>
<p>最近在面试过程中被面试官问到 Redis 集群数据是如何复制的，由于之前没有准备直接懵了。</p>
<p>事后查了查这个问题其实也挺简单，如果你之前也不知道，没问题，赶紧浅尝辄止，速度3遍即可入门。</p>
</blockquote>
<p>阅读本文，你可能会有哪些收获呢？</p>
<ul>
<li>首先，你会知道有三种集群模式</li>
<li>然后对每种集群模式的原理有个大概了解</li>
<li>当然还能看到集群演变的影子</li>
<li>最后还会有手把手的实操</li>
</ul>
<p><strong>Redis 支持三种集群方案</strong></p>`,r:{minutes:17.99,words:5398},title:"Redis Cluster"},["/database/redis/redis-cluster","/database/redis/redis-cluster.md"]],["v-143644bf","/database/redis/redis-overview.html",{y:"a",d:"2022-11-27T12:45:32.000Z",e:`<h1> Redis</h1>
<h2> NoSQL概述</h2>
<p>NoSQL = Not Only Sql</p>
<p>关系型数据库：行+列 同一个表下数据的结构是一样的</p>
<p>非关系型数据库：数据存储没有固定的格式，并且可以横向进行扩展</p>
<p>传统RDBMS和NoSQL</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RDBMS
 - 组织化结构
 - 固定SQL
 - 数据和关系都存在单独的表中（行列）
 - DML（数据操作语言）、DDL（数据定义语言）等
 - 严格的一致性（ACID): 原子性、一致性、隔离性、持久性
 - 基础的事务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:64.82,words:19446},title:"Redis"},["/database/redis/redis-overview","/database/redis/redis-overview.md"]],["v-1b991ef8","/java/java-base/java-base.html",{y:"a",d:"2022-05-21T05:16:06.000Z",e:`<h1> Java 基础</h1>
<h2> 深拷贝与浅拷贝</h2>
<p>一句话，深拷贝是值传递，浅拷贝是引用传递。</p>
<h2> this 与 类名.this的区别</h2>
<ul>
<li>this： 是指当前这段代码所在的类的对象</li>
<li>类名.this：是指类名的对象，一般用在匿名类或内部类中使用，用来调用外部类的方法和属性的</li>
</ul>
<p>下面给出一个例子：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> method（）<span class="token punctuation">{</span>
        <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token keyword">this</span>  <span class="token comment">//这里的"A.this"就是表示类"A"的对象。。在这种情况下"A.this"和"this"是一样的</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">class</span>  <span class="token class-name">B</span> <span class="token punctuation">{</span>  
        <span class="token comment">// "class A"中的一个内部类"B"(内部类也可以是使用关键字"new" 所新实例出来的一个匿名类或者接口,</span>
        <span class="token comment">// 比如"new OnClickListener()")</span>
        <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 这里的"A.this"还是表示类"A"的对象。。但是这里是在内部类里面。。</span>
            <span class="token comment">// 所以这里如果使用的是"this"那就是内部类B的对象了。。</span>
            <span class="token comment">// 但是我们经常会在内部类里面调用外部的东西。。所以就用"A.this"这种方式就行了</span>
            <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token keyword">this</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.19,words:2158},title:"Java 基础"},["/java/java-base/java-base","/java/java-base/java-base.md"]],["v-358b6c6f","/java/java-base/java-sql.html",{y:"a",d:"2022-11-20T12:00:26.000Z",e:`<h1> Java SQL</h1>
<h2> 一：SQL包的接口设计</h2>
<h3> 1.1 java.sql包和javax.sql包</h3>
<p>Java提供的与数据库操作相关的包主要有两个，它们是java.sql包和javax.sql包。java.sql和javax.sql共同为Java提供了强大的JDBC能力。我们接下来会介绍几个日常工作中常接触到的类，它们都由java.sql或javax.sql提供。</p>
<h4> 1.1 java.sql包</h4>
<p>java.sql通常被称为JDBC核心API包，它为Java提供了访问数据源中数据的基础功能。基于该包能实现将SQL语句传递给数据库、从数据库中以表格的形式读写数据等功能。</p>`,r:{minutes:6.06,words:1817},title:"Java SQL"},["/java/java-base/java-sql","/java/java-base/java-sql.md"]],["v-60a74208","/java/java-base/java-time.html",{y:"a",d:"2022-10-31T04:31:01.000Z",e:`<h1> Java 时间操作</h1>
<h2> 一：正则校验</h2>
<h3> 匹配格式：yyyy-MM-dd HH:mm:ss</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> timeRegex <span class="token operator">=</span> <span class="token string">"^((([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29))\\\\s+([0-1]?[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$"</span><span class="token punctuation">;</span>
 
<span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>timeRegex<span class="token punctuation">,</span> <span class="token string">"2012-12-31 12:07:59"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.75,words:826},title:"Java 时间操作"},["/java/java-base/java-time","/java/java-base/java-time.md"]],["v-8d246506","/java/java-collection/java-collection-list.html",{y:"a",d:"2022-05-21T05:16:06.000Z",e:`<h1> Java 集合之List</h1>
<h2> ArrayList 源码分析(JDK8)</h2>
<h3> 集成体系</h3>
<p>首先来看类的定义：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
        <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.51,words:2254},title:"Java 集合之List"},["/java/java-collection/java-collection-list","/java/java-collection/java-collection-list.md"]],["v-00469b8a","/java/java-collection/java-collection-map.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h1> Java 集合之Map</h1>
<h3> Map集合</h3>
<p>Map是一种键值对(key-value)集合，Map集合中的每一个元素都包含一个键对象和一个值对象。其中，键对象不允许重复，而值对象可以重复。</p>
<h4> HashMap</h4>
<p>HashMap使用数组+链表+树来实现。</p>
<p>由于在实际使用场景中，Hash Map的size较小，在计算hash的时候，hash冲突的概率会很大，所以HashMap的主要工作就是解决hash冲突和扩缩容</p>
<h5> 如何解决hash冲突问题？</h5>
<p><strong>一：先聊聊HashMap的存储结构</strong></p>`,r:{minutes:7.34,words:2203},title:"Java 集合之Map"},["/java/java-collection/java-collection-map","/java/java-collection/java-collection-map.md"]],["v-86d55efc","/java/java-collection/java-collection-overview.html",{y:"a",d:"2022-05-21T05:16:06.000Z",e:`<h1> Java 集合总览</h1>
`,r:{minutes:.02,words:5},title:"Java 集合总览"},["/java/java-collection/java-collection-overview","/java/java-collection/java-collection-overview.md"]],["v-28f464dc","/java/java-concurrent/java-concurrent-base.html",{y:"a",d:"2022-05-17T06:46:19.000Z",e:`<h1> Java并发编程基础</h1>
<h2> 内存模型</h2>
<p>略</p>
<h2> 线程简介</h2>
<p>操作系统在执行一个程序是会创建一个进程，在进程内可以创建多个线程，线程也是操作系统能够调度的最小单元。在JVM虚拟机内，线程拥有自己的程序计数器，虚拟机栈和局部变量等属性，也能够访问共享变量。CPU在这些线程上高速切换，让使用者感觉这些线程是在同时执行的。</p>
<p>Java程序天生就是多线程的。</p>
<p>使用多线程主要原因有一些几点：</p>
<ul>
<li>更多的处理器核心：多线程可以释放多核处理器的性能</li>
<li>更快的响应时间：利用多线程处理复杂业务。</li>
<li>更好的编程模型：Java为分开发人员提供了良好的编程模型。</li>
</ul>`,r:{minutes:20.3,words:6091},title:"Java并发编程基础"},["/java/java-concurrent/java-concurrent-base","/java/java-concurrent/java-concurrent-base.md"]],["v-0b589964","/java/java-concurrent/Java-concurrent-container.html",{y:"a",d:"2022-05-17T06:46:19.000Z",e:`<h1> Java 并发容器</h1>
<h2> ConcurrentHashMap</h2>
<h3> HashMap的并发死链</h3>
<p>HashMap的并发死链仅出现在JDK1.7中，该问题在JDK1.8中得以解决。下面只针对JDK1.7进行讨论。</p>
<h4> 前置知识</h4>
<p>在 JDK1.7 中HashMap的底层数据实现是数组+链表的方式，如下图所示：</p>

<p>而<code>HashMap</code>在数据添加时使用的是头插入，如下图所示：</p>

<p><code>HashMap</code>正常情况下的扩容实现如下图所示：</p>

<p>总结一下，JDK1.7中的HashMap使用数组加链表的方式实现。使用头插法实现新数据的添加，在扩容时会导致链表顺序的反转。正是因为这些基础的实现逻辑，导致了最终的并发死链问题。</p>`,r:{minutes:10.59,words:3178},title:"Java 并发容器"},["/java/java-concurrent/Java-concurrent-container","/java/java-concurrent/Java-concurrent-container.md"]],["v-9844af78","/java/java-concurrent/java-concurrent-interview.html",{y:"a",d:"2022-08-16T09:23:54.000Z",e:`<h1> Java Concurrent Interview</h1>
<h2> 死锁问题</h2>
`,r:{minutes:.02,words:7},title:"Java Concurrent Interview"},["/java/java-concurrent/java-concurrent-interview","/java/java-concurrent/java-concurrent-interview.md"]],["v-5dca8ec2","/java/java-concurrent/java-concurrent-lock.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h1> Java中的锁</h1>
<h2> Lock接口</h2>
<p>Lock是在JDK1.5中添加的，于synchronized相比，Lock接口最大的有点就是对锁获取于释放的可操作性性。</p>
<p>Lock接口提供的synchronized不具备的功能。</p>
<table>
<thead>
<tr>
<th>特性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>尝试非阻塞的获取锁</td>
<td>当前线程尝试获取锁，如果这一时刻锁没有被其他线程获取到，则成功获取并持有锁。</td>
</tr>
<tr>
<td>能被中断的获取锁</td>
<td>于synchronized不同，获取到锁的线程能够响应中断，当获取到锁的线程被中断时，中断异常将会被抛出，同事所会被释放。</td>
</tr>
<tr>
<td>超时获取锁</td>
<td>在指定的截止时间之前获取锁，如果截止时间到了仍旧无法获取锁，则返回。</td>
</tr>
</tbody>
</table>`,r:{minutes:31.52,words:9457},title:"Java中的锁"},["/java/java-concurrent/java-concurrent-lock","/java/java-concurrent/java-concurrent-lock.md"]],["v-2b5bea71","/java/java-concurrent/java-concurrent-pool.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h1> Java  线程池</h1>
<h3> Java中的线程池</h3>
<p>在开发的过程中，合理的使用线程池能够带来三个好处。</p>
<ul>
<li>降低资源消耗：通过重复利用已创建的线程降低线程创建和销毁造成的消耗</li>
<li>提高响应速度：当任务到达时，任务可以不需要等到线程创建就能立即执行。</li>
<li>提高线程可管理性：线程是稀缺的资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一分配、调优和监控。</li>
</ul>
<h4> ThreadPoolExecutor</h4>
<p>ThreadPoolExecutor是Java对线程池的一个具体实现。</p>`,r:{minutes:6.83,words:2048},title:"Java  线程池"},["/java/java-concurrent/java-concurrent-pool","/java/java-concurrent/java-concurrent-pool.md"]],["v-f86243ac","/java/java-concurrent/java-concurrent-tools.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h1> Java 并发工具包</h1>
<h2> ThreadLocal</h2>
`,r:{minutes:.02,words:7},title:"Java 并发工具包"},["/java/java-concurrent/java-concurrent-tools","/java/java-concurrent/java-concurrent-tools.md"]],["v-155dee6c","/java/java-io/java-bio.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h1> Java BIO</h1>
<p>BIO（blocking IO） 即阻塞 IO。指的主要是传统的 <code>java.io</code> 包，它基于流模型实现。</p>
<h2> BIO 简介</h2>
<p><code>java.io</code> 包提供了我们最熟知的一些 IO 功能，比如 File 抽象、输入输出流等。交互方式是同步、阻塞的方式，也就是说，在读取输入流或者写入输出流时，在读、写动作完成之前，线程会一直阻塞在那里，它们之间的调用是可靠的线性顺序。</p>
<p>很多时候，人们也把 java.net 下面提供的部分网络 API，比如 <code>Socket</code>、<code>ServerSocket</code>、<code>HttpURLConnection</code> 也归类到同步阻塞 IO 类库，因为网络通信同样是 IO 行为。</p>`,r:{minutes:8.93,words:2678},title:"Java BIO"},["/java/java-io/java-bio","/java/java-io/java-bio.md"]],["v-19ecc83a","/java/java-io/java-io-base.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h1> Java IO 前置知识</h1>
<h2> 基本概念</h2>
<h3> 同步与异步</h3>
<p>什么是同步与异步呢？百度百科是这样定义的：</p>
<blockquote>
<p>同步指两个或两个以上随时间变化的量在变化过程中保持一定的相对关系。异步与同步相对（这解释让我无言相对）</p>
</blockquote>
<p>所以，我们需要明确的是**<code>同步与异步针对的是两个或者两个以上的事物</code>**。</p>
<p>对于同步而言，一个任务（调用者）的完成需要依赖另一个人任务（被调用者）的完成，只有等待被依赖的任务完成，依赖的任务才会继续进行，两者步调保持一致。</p>`,r:{minutes:16.13,words:4838},title:"Java IO 前置知识"},["/java/java-io/java-io-base","/java/java-io/java-io-base.md"]],["v-5841b984","/java/java-io/java-nio.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h1> NIO</h1>
<h4> Java NIO 简介</h4>
<p>​	Java NIO（New IO）是从Java 1.4版本开始引入的一个新的IO API，可以替代标准的Java IO API。NIO与原来的IO有同样的作用和目的，但是使用的方式完全不同，NIO支持面向缓冲区的、基于通道的IO操作。NIO将以更加高效的方式进行文件的读写操作。</p>
<h4> Java NIO 与IO的主要区别</h4>
<h5> <strong>IO</strong></h5>
<p>​		面向流(Stream Oriented)</p>
<p>​		阻塞IO(Blocking IO)</p>`,r:{minutes:16.11,words:4834},title:"NIO"},["/java/java-io/java-nio","/java/java-io/java-nio.md"]],["v-562db611","/java/java-jvm/Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.html",{y:"a",d:"2022-05-13T17:19:03.000Z",e:`<h1> Java 内存模型</h1>
<h2> Java 内存模型</h2>
`,r:{minutes:.03,words:10},title:"Java 内存模型"},["/java/java-jvm/Java内存模型.html","/java/java-jvm/Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B","/java/java-jvm/Java内存模型.md","/java/java-jvm/Java%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.md"]],["v-fa0b746a","/java/java-jvm/JVM%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84.html",{y:"a",d:"2022-05-13T17:19:03.000Z",e:`<h1> JVM 内存结构</h1>
<h2> 运行时数据区</h2>
<p>博客：<a href="https://blog.csdn.net/xiaokanfuchen86/article/details/117625190" target="_blank" rel="noopener noreferrer">(41条消息) 一文搞懂JVM内存结构_xiaokanfuchen86的博客-CSDN博客_jvm内存结构</a></p>
<p>Java 虚拟机在执行 Java 程序的过程中会把它管理的内存划分为若干个不同的数据区域。每个区域都有各自的作用。JVM 的运行时数据区主要包括：<strong>堆、栈、方法区、程序计数器</strong>等。而 JVM 的优化问题主要在线程共享的数据区中：<strong>堆、方法区</strong>。</p>`,r:{minutes:19.92,words:5977},title:"JVM 内存结构"},["/java/java-jvm/JVM内存结构.html","/java/java-jvm/JVM%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84","/java/java-jvm/JVM内存结构.md","/java/java-jvm/JVM%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84.md"]],["v-55af59fc","/java/java-jvm/JVM%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html",{y:"a",d:"2022-05-13T17:19:03.000Z",e:`<h1> 垃圾回收</h1>
<h1> JVM笔记</h1>
<h2> 介绍</h2>
<h3> 什么是JVM</h3>
<p>Java Virtual Machine Java程序的运行环境</p>
<h3> 学习路线</h3>
<p>类加载器 -&gt; JVM内存结构 -&gt; 执行引擎</p>
<p></p>
<h2> JVM内存结构</h2>
<p>博客：<a href="https://blog.csdn.net/xiaokanfuchen86/article/details/117625190" target="_blank" rel="noopener noreferrer">(41条消息) 一文搞懂JVM内存结构_xiaokanfuchen86的博客-CSDN博客_jvm内存结构</a></p>`,r:{minutes:65.81,words:19744},title:"垃圾回收"},["/java/java-jvm/JVM垃圾回收.html","/java/java-jvm/JVM%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6","/java/java-jvm/JVM垃圾回收.md","/java/java-jvm/JVM%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.md"]],["v-55d4ca16","/java/java-jvm/JVM%E6%A6%82%E8%A7%88.html",{y:"a",d:"2022-05-13T17:19:03.000Z",e:`<h1> JVM 概览</h1>
<h2> JVM 概览</h2>
`,r:{minutes:.02,words:6},title:"JVM 概览"},["/java/java-jvm/JVM概览.html","/java/java-jvm/JVM%E6%A6%82%E8%A7%88","/java/java-jvm/JVM概览.md","/java/java-jvm/JVM%E6%A6%82%E8%A7%88.md"]],["v-45c37b14","/java/java-jvm/JVM%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.html",{y:"a",d:"2022-05-13T17:19:03.000Z",e:`<h1> 虚拟机类加载机制</h1>
<h2> 类的加载时机</h2>
<p>略</p>
<h2> 类的加载流程</h2>
<h3> 加载</h3>
<p>在加载阶段，Java虚拟机需要完成以下三件事情：</p>
<ol>
<li>
<p>通过一个类的全限定名来获取定义此类的二进制字节流。</p>
</li>
<li>
<p>将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构。</p>
</li>
<li>
<p>在内存中生成一个代表这个类的java.lang.Class对象，作为方法区这个类的各种数据的访问入口。</p>
</li>
</ol>
<p>通俗点讲，就是JVM把class文件的信息读取到了内存的方法区中。</p>`,r:{minutes:3.37,words:1012},title:"虚拟机类加载机制"},["/java/java-jvm/JVM类加载器.html","/java/java-jvm/JVM%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8","/java/java-jvm/JVM类加载器.md","/java/java-jvm/JVM%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8.md"]],["v-48e598f0","/java/java-jvm/JVM%E7%B1%BB%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84.html",{y:"a",d:"2022-05-13T17:19:03.000Z",e:`<h1> 类文件结构</h1>
<h2> 类文件结构</h2>
`,r:{minutes:.03,words:10},title:"类文件结构"},["/java/java-jvm/JVM类文件结构.html","/java/java-jvm/JVM%E7%B1%BB%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84","/java/java-jvm/JVM类文件结构.md","/java/java-jvm/JVM%E7%B1%BB%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84.md"]],["v-0e810160","/java/java-jvm/JVM%E8%B0%83%E4%BC%98.html",{y:"a",d:"2022-05-17T06:46:19.000Z",e:`<h1> JVM调优</h1>
<h2> JVM参数总结</h2>
<h3> -Xmn</h3>
<p>设置年轻代堆的大小，单位为K、M、G，年轻代堆大小建议在总堆大小的25%~50%之间。如果太小，执行GC的频率会变高，如果太大，执行Full GC的时间会变长</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xmn256m
-Xmn262144k
-Xmn268435456
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.3,words:390},title:"JVM调优"},["/java/java-jvm/JVM调优.html","/java/java-jvm/JVM%E8%B0%83%E4%BC%98","/java/java-jvm/JVM调优.md","/java/java-jvm/JVM%E8%B0%83%E4%BC%98.md"]],["v-55a3ba3e","/java/java-servlet/java-servlet.html",{y:"a",d:"2022-11-29T13:09:28.000Z",e:`<h1> Java Servlet</h1>
<h2> 一、引言</h2>
<h3> 1.1 C/S架构和B/S架构</h3>
<blockquote>
<p>C/S和B/S是软件发展过程中出现的两种软件架构方式。</p>
</blockquote>
<h3> 1.2 c/s架构 (Client/Server)</h3>
<blockquote>
<ul>
<li>特点：必须在客户端安装特定软件</li>
<li>优点：图形效果显示较好（如：3D游戏》</li>
<li>缺点：服务器的软件和功能进行升级，客户端也必须升级、不利于维护</li>
<li>常见的C/S程序：QQ、微信等</li>
</ul>
</blockquote>`,r:{minutes:37.53,words:11260},title:"Java Servlet"},["/java/java-servlet/java-servlet","/java/java-servlet/java-servlet.md"]],["v-fcded982","/java/java-stream/java-lambda.html",{y:"a",d:"2022-06-29T08:24:47.000Z",e:`<h1> Java 8 Lamdba表达式</h1>
`,r:{minutes:.02,words:6},title:"Java 8 Lamdba表达式"},["/java/java-stream/java-lambda","/java/java-stream/java-lambda.md"]],["v-48060326","/java/java-stream/java-stream.html",{y:"a",d:"2022-06-29T08:24:47.000Z",title:""},["/java/java-stream/java-stream","/java/java-stream/java-stream.md"]],["v-1b3c75b4","/middleware/HikariCP/HikariCP-base.html",{y:"a",d:"2022-10-21T09:35:46.000Z",e:`<h1> HikariCP 基础</h1>
<h2> HikariCP简介</h2>
<h3> HikariCP是什么？</h3>
<p>HikariCP 本质上就是一个数据库连接池。创建和关闭数据库连接的开销很大，HikariCP 通过“池”来复用连接，减小开销。</p>
<h3> Why HikariCP？</h3>
<p>HikariCP 是目前最快的连接池。就连风靡一时的 boneCP 也停止维护，主动让位给它。SpringBoot 也把它设置为默认连接池。</p>
<p>HikariCP 非常轻量。本文用到的 4.0.3 版本的 jar 包仅仅只有 156 KB，它的源码真的非常精炼。</p>`,r:{minutes:5.22,words:1567},title:"HikariCP 基础"},["/middleware/HikariCP/HikariCP-base","/middleware/HikariCP/HikariCP-base.md"]],["v-79e07a9c","/middleware/HikariCP/HikariCP-source.html",{y:"a",d:"2022-10-21T09:35:46.000Z",e:`<h1> HikariCP 源码分析</h1>
`,r:{minutes:.02,words:5},title:"HikariCP 源码分析"},["/middleware/HikariCP/HikariCP-source","/middleware/HikariCP/HikariCP-source.md"]],["v-cf02a2f4","/middleware/jackson/jackson-overview.html",{y:"a",d:"2022-12-04T12:36:03.000Z",e:`<h1> Jackson  用法详解</h1>
<blockquote>
<p>Spring MVC 默认采用Jackson解析Json，尽管还有一些其它同样优秀的json解析工具，例如Fast Json、GSON，但是出于最小依赖的考虑，也许Json解析第一选择就应该是Jackson。</p>
</blockquote>
<h2> 一、简介</h2>
<p>Jackson 是当前用的比较广泛的，用来序列化和反序列化 json 的 Java 的开源框架。Jackson 社区相对比较活跃，更新速度也比较快， 从 Github 中的统计来看，Jackson 是最流行的 json 解析器之一 。 Spring MVC 的默认 json 解析器便是 Jackson。 Jackson 优点很多。 Jackson 所依赖的 jar 包较少 ，简单易用。与其他 Java 的 json 的框架 Gson 等相比， Jackson 解析大的 json 文件速度比较快；Jackson 运行时占用内存比较低，性能比较好；Jackson 有灵活的 API，可以很容易进行扩展和定制。</p>`,r:{minutes:34.4,words:10319},title:"Jackson  用法详解"},["/middleware/jackson/jackson-overview","/middleware/jackson/jackson-overview.md"]],["v-6fa3390c","/middleware/kafka/kafka-broker.html",{y:"a",d:"2022-07-28T08:12:20.000Z",e:`<h1> Kafka Broker</h1>
`,r:{minutes:.01,words:2},title:"Kafka Broker"},["/middleware/kafka/kafka-broker","/middleware/kafka/kafka-broker.md"]],["v-bfcc67e2","/middleware/kafka/kafka-consumer.html",{y:"a",d:"2022-07-28T08:12:20.000Z",e:`<h1> Kafka Consumer</h1>
`,r:{minutes:.01,words:2},title:"Kafka Consumer"},["/middleware/kafka/kafka-consumer","/middleware/kafka/kafka-consumer.md"]],["v-5de44728","/middleware/kafka/kafka-overview.html",{y:"a",d:"2022-07-28T08:12:20.000Z",e:`<h1> Kafka Overview</h1>
<h3> Kafka 入门介绍</h3>
<p>一个流处理平台，应该具备三个关键能力：</p>
<ul>
<li>发布和订阅消息（流）， 在这方面，他类似一个消息队列</li>
<li>以容错（故障转移）的方式处理存储消息（流）</li>
<li>在消息发生是处理他们</li>
</ul>
<p>kafka作为一个流处理平台，主要应用于两大类场景：</p>
<ul>
<li>构建实时的数据流管道，可靠的获取系统和应用程序之间的数据</li>
<li>构建实时流的应用程序，对数据流进行转换或反应</li>
</ul>
<h4> 几个概念</h4>`,r:{minutes:40.2,words:12059},title:"Kafka Overview"},["/middleware/kafka/kafka-overview","/middleware/kafka/kafka-overview.md"]],["v-09a161f3","/middleware/kafka/kafka-producer.html",{y:"a",d:"2022-08-10T09:21:50.000Z",e:`<h1> Kafka 生产者</h1>
<h2> 生产者发送消息的流程</h2>
<h3> 发送原理</h3>
<p>在消息发送的过程中，涉及到了<strong>两个线程——main 线程和 Sender 线程</strong>。在 main 线程中创建了<strong>一个双端队列 RecordAccumulator</strong>。main 线程将消息发送给 RecordAccumulator，Sender 线程不断从 RecordAccumulator 中拉取消息发送到 Kafka Broker。</p>
<p></p>
<h3> 生产者重要参数列表</h3>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>bootstrap.servers</td>
<td>生产者连接集群所需的 broker 地址清单。 例如 hadoop102:9092,hadoop103:9092,hadoop104:9092，可以设置 1 个或者多个，中间用逗号隔开。注意这里并非需要所有的 broker 地址，因为生产者从给定的 broker里查找到其他 broker 信息。</td>
</tr>
<tr>
<td>key.serializer 和 value.serializer</td>
<td>指定发送消息的 key 和 value 的序列化类型。一定要写全类名。</td>
</tr>
<tr>
<td>buffer.memory</td>
<td>RecordAccumulator 缓冲区总大小，默认 32m。</td>
</tr>
<tr>
<td>batch.size</td>
<td>缓冲区一批数据最大值，默认 16k。适当增加该值，可以提高吞吐量，但是如果该值设置太大，会导致数据传输延迟增加。</td>
</tr>
<tr>
<td>linger.ms</td>
<td>如果数据迟迟未达到 batch.size，sender 等待 linger.time之后就会发送数据。单位 ms，默认值是 0ms，表示没有延迟。生产环境建议该值大小为 5-100ms 之间。</td>
</tr>
<tr>
<td>acks</td>
<td>0：生产者发送过来的数据，不需要等数据落盘应答。1：生产者发送过来的数据，Leader 收到数据后应答。-1（all）：生产者发送过来的数据，Leader+和 isr 队列里面的所有节点收齐数据后应答。默认值是-1，-1 和all 是等价的。</td>
</tr>
<tr>
<td>max.in.flight.requests.per.connection</td>
<td>允许最多没有返回 ack 的次数，默认为 5，开启幂等性要保证该值是 1-5 的数字。</td>
</tr>
<tr>
<td>retries</td>
<td>当消息发送出现错误的时候，系统会重发消息。retries 表示重试次数。默认是 int 最大值，2147483647。如果设置了重试，还想保证消息的有序性，需要设置MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION=1否则在重试此失败消息的时候，其他的消息可能发送成功了。</td>
</tr>
<tr>
<td>retry.backoff.ms</td>
<td>两次重试之间的时间间隔，默认是 100ms。</td>
</tr>
<tr>
<td>enable.idempotence</td>
<td>是否开启幂等性，默认 true，开启幂等性。</td>
</tr>
<tr>
<td>compression.type</td>
<td>生产者发送的所有数据的压缩方式。默认是 none，也就是不压缩。支持压缩类型：none、gzip、snappy、lz4 和 zstd。</td>
</tr>
</tbody>
</table>`,r:{minutes:2,words:599},title:"Kafka 生产者"},["/middleware/kafka/kafka-producer","/middleware/kafka/kafka-producer.md"]],["v-14535c74","/middleware/kafka/spring-kafka.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h1> Spring Kafka</h1>
`,r:{minutes:.01,words:2},title:"Spring Kafka"},["/middleware/kafka/spring-kafka","/middleware/kafka/spring-kafka.md"]],["v-6315cd33","/middleware/log/log-framework.html",{y:"a",d:"2022-10-21T09:35:46.000Z",e:`<h1> Java 日志框架</h1>
<h2> 日志的概念</h2>
<h3> 日志文件</h3>
<p>日志文件是用于记录系统操作事件的文件集合，可分为事件日志和消息日志。具有处理历史数据、诊断问题的追踪以及理解系统的活动等重要作用。</p>
<p>在计算机中，日志文件是记录在操作系统或其他软件运行中发生的事件或在通信软件的不同用户之间的消息的文件。记录是保持日志的行为，在最简单的情况下，消息被写入单个日志文件。</p>
<p>许多操作系统，软件框架和程序包括日志系统。广泛使用的日志记录标准是在因特网工程任务组(IETE) RFC5424中定义的syslog。syslog标准使专用的标准化子系统能够生成，过滤，记录和分析日志消息。</p>`,r:{minutes:30.91,words:9272},title:"Java 日志框架"},["/middleware/log/log-framework","/middleware/log/log-framework.md"]],["v-966d5f16","/middleware/mybatis/1.Hello%20World.html",{y:"a",d:"2022-10-21T09:35:46.000Z",e:`<h1> Mybatis Hello World</h1>
<p>基于Spring Boot框架实现一个Mybatis的Hello World实例</p>
<p>关于spring boot的相关知识，这里不在赘述</p>
<p>首先引入Maven依赖，这里同时引入了mybatis的starter和mysql的驱动包</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.12,words:336},title:"Mybatis Hello World"},["/middleware/mybatis/1.Hello World.html","/middleware/mybatis/1.Hello%20World","/middleware/mybatis/1.Hello World.md","/middleware/mybatis/1.Hello%20World.md"]],["v-e8f00d1a","/middleware/mybatis/2.Global%20Config.html",{y:"a",d:"2022-10-21T09:35:46.000Z",e:`<h1> Mybatis 配置文件</h1>
<p>Mybatis配置文件包含了影响Mybatis行为甚深的设置(settings)和属性(properties)信息。</p>
<p>配置文件的整体结构如下：</p>
<ul>
<li>configuration（配置）
<ul>
<li>properties（属性）</li>
<li>settings（设置）</li>
<li>typeAliases（类型别名）</li>
<li>typeHandlers（类型处理器）</li>
<li>objectFactory（对象工厂）</li>
<li>plugins（插件）</li>
<li>environments（环境配置）
<ul>
<li>environment（环境变量）
<ul>
<li>transactionManager（事务管理器）</li>
<li>dataSource（数据源）</li>
</ul>
</li>
</ul>
</li>
<li>databaseIdProvider（数据库厂商标识）</li>
<li>mappers（映射器）</li>
</ul>
</li>
</ul>`,r:{minutes:8.08,words:2425},title:"Mybatis 配置文件"},["/middleware/mybatis/2.Global Config.html","/middleware/mybatis/2.Global%20Config","/middleware/mybatis/2.Global Config.md","/middleware/mybatis/2.Global%20Config.md"]],["v-eafdfe00","/middleware/mybatis/",{y:"a",d:"2022-10-21T09:35:46.000Z",e:`<h1> Mybatis 学习笔记</h1>
<p>mybatis 处理枚举类型</p>
<p><a href="https://www.jb51.net/article/161207.htm" target="_blank" rel="noopener noreferrer">mybatis处理枚举类的简单方法_java_脚本之家 (jb51.net)</a></p>
`,r:{minutes:.11,words:33},title:"Mybatis 学习笔记"},["/middleware/mybatis/index.html","/middleware/mybatis/README.md"]],["v-f451e740","/middleware/sharding-sphere/sharding-sphere.html",{y:"a",d:"2022-11-24T11:37:09.000Z",e:`<h1> Sharding-Sphere</h1>
<h2> 第01章 高性能架构模式</h2>
<p>互联网业务兴起之后，海量用户加上海量数据的特点，单个数据库服务器已经难以满足业务需要，必须考虑数据库集群的方式来提升性能。高性能数据库集群的<code>第一种方式是“读写分离”</code>，<code>第二种方式是“数据库分片”</code>。</p>
<h3> 1、读写分离架构</h3>
<p>**读写分离原理：**读写分离的基本原理是将数据库读写操作分散到不同的节点上，下面是其基本架构图：</p>
<p></p>
<p><strong>读写分离的基本实现：</strong></p>
<ul>
<li><code>主库负责处理事务性的增删改操作，从库负责处理查询操作</code>，能够有效的避免由数据更新导致的行锁，使得整个系统的查询性能得到极大的改善。</li>
<li>读写分离是<code>根据 SQL 语义的分析</code>，<code>将读操作和写操作分别路由至主库与从库</code>。</li>
<li>通过<code>一主多从</code>的配置方式，可以将查询请求均匀的分散到多个数据副本，能够进一步的提升系统的处理能力。</li>
<li>使用<code>多主多从</code>的方式，不但能够提升系统的吞吐量，还能够提升系统的可用性，可以达到在任何一个数据库宕机，甚至磁盘物理损坏的情况下仍然不影响系统的正常运行。</li>
</ul>`,r:{minutes:34.25,words:10275},title:"Sharding-Sphere"},["/middleware/sharding-sphere/sharding-sphere","/middleware/sharding-sphere/sharding-sphere.md"]],["v-30ff917c","/middleware/shiro/shiro-overview.html",{y:"a",d:"2022-10-11T05:51:12.000Z",e:`<h1> Shiro 实战</h1>
<h2> 第一章  权限概述</h2>
<h3> 1、什么是权限</h3>
<p>​		权限管理，一般指根据系统设置的安全策略或者安全规则，用户可以访问而且只能访问自己被授权的资源，不多不少。权限管理几乎出现在任何系统里面，只要有用户和密码的系统。</p>
<p>权限管理在系统中一般分为：</p>
<ul>
<li>
<p>访问权限</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>一般表示你能做什么样的操作，或者能够访问那些资源。例如：给张三赋予“店铺主管”角色，“店铺主管”具有“查询员工”、“添加员工”、“修改员工”和“删除员工”权限。此时张三能够进入系统，则可以进行这些操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>数据权限</p>
<div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>一般表示某些数据你是否属于你，或者属于你可以操作范围。例如：张三是"店铺主管"角色，他可以看他手下客服人员所有的服务的买家订单信息，他的手下只能看自己负责的订单信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>`,r:{minutes:25.45,words:7634},title:"Shiro 实战"},["/middleware/shiro/shiro-overview","/middleware/shiro/shiro-overview.md"]],["v-3fe0b90e","/middleware/tomcat/tomcat.html",{y:"a",d:"2022-05-19T07:19:37.000Z",e:`<h1> Tomcat专题</h1>
<h2> Tomcat基础</h2>
<h3> web概念</h3>
<ul>
<li>
<p>软件架构</p>
<ul>
<li>
<p>C/S： 客户端/服务器端 ‐‐‐‐‐‐‐‐‐‐‐‐&gt; QQ , 360 ....</p>
</li>
<li>
<p>B/S： 浏览器/服务器端 ‐‐‐‐‐‐‐‐‐‐‐‐&gt; 京东， 网易 ， 淘宝 ， 传智播客 官网</p>
</li>
</ul>
</li>
<li>
<p>资源分类</p>
<ul>
<li>
<p>静态资源： 所有用户访问后，得到的结果都是一样的，称为静态资源。静态资 源可以直接被浏览器解析。
* 如： html,css,JavaScript，jpg</p>
</li>
<li>
<p>动态资源: 每个用户访问相同资源后，得到的结果可能不一样 , 称为动态资 源。动态资源被访问后，需要先转换为静态资源，再返回给浏览器，通过浏览器进行解析。</p>
<ul>
<li>如：servlet/jsp,php,asp....</li>
</ul>
</li>
</ul>
</li>
<li>
<p>网络通信三要素</p>
<ul>
<li>IP：电子设备(计算机)在网络中的唯一标识。</li>
<li>端口：应用程序在计算机中的唯一标识。 0~65536</li>
<li>传输协议：规定了数据传输的规则
<ul>
<li>基础协议：
<ul>
<li>tcp : 安全协议，三次握手。 速度稍慢</li>
<li>udp：不安全协议。 速度快</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:26.64,words:7991},title:"Tomcat专题"},["/middleware/tomcat/tomcat","/middleware/tomcat/tomcat.md"]],["v-5e4b5518","/quality/data-structure/data-structure-list.html",{y:"a",d:"2022-06-10T14:45:24.000Z",e:`<h1> 表、栈和队列</h1>
<h2> 集合</h2>
<h3> Collection集合</h3>
<p>Collections API 在java.util包中，而Collection接口是Java对集合的抽象，他存储了一组类型相同的对象。下面是集合接口提供的一些重要的API：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">extends</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token comment">// 查询操作</span>
    <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 修改操作</span>
    <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 通用操作</span>
    <span class="token keyword">boolean</span> <span class="token function">containsAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">boolean</span> <span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">removeIf</span><span class="token punctuation">(</span><span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> filter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>filter<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> removed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> each <span class="token operator">=</span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>each<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>filter<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>each<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                each<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                removed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> removed<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">boolean</span> <span class="token function">retainAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// </span>
    <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 流操作</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">default</span> <span class="token class-name">Spliterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">spliterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Spliterators</span><span class="token punctuation">.</span><span class="token function">spliterator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">default</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StreamSupport</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token function">spliterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">default</span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span> <span class="token function">parallelStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">StreamSupport</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token function">spliterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.44,words:433},title:"表、栈和队列"},["/quality/data-structure/data-structure-list","/quality/data-structure/data-structure-list.md"]],["v-8c01f60e","/quality/data-structure/data-structure-overview.html",{y:"a",d:"2022-06-10T14:45:24.000Z",e:`<h1> 数据结构概览</h1>
`,r:{minutes:.02,words:6},title:"数据结构概览"},["/quality/data-structure/data-structure-overview","/quality/data-structure/data-structure-overview.md"]],["v-1bb87274","/quality/data-structure/data-structure-tree.html",{y:"a",d:"2022-06-11T14:36:26.000Z",e:`<h1> 树</h1>
<h2> 基础知识</h2>
<h3> 树的定义</h3>
<h3> 树的实现</h3>
<h3> 树的遍历</h3>
<p>先序遍历</p>
<p>中序遍历</p>
<p>后序遍历</p>
<h2> 二叉树</h2>
<p>二叉树（Binary tree）是树形结构的一个重要类型。许多实际问题抽象出来的数据结构往往是二叉树形式，即使是一般的树也能简单地转换为二叉树，而且二叉树的存储结构及其算法都较为简单，因此二叉树显得特别重要。二叉树特点是每个节点最多只能有两棵子树，且有左右之分 。</p>
<p>二叉树是n个有限元素的集合，该集合或者为空、或者由一个称为根（root）的元素及两个不相交的、被分别称为左子树和右子树的二叉树组成，是有序树。当集合为空时，称该二叉树为空二叉树。在二叉树中，一个元素也称作一个节点</p>`,r:{minutes:6.26,words:1879},title:"树"},["/quality/data-structure/data-structure-tree","/quality/data-structure/data-structure-tree.md"]],["v-20ffd333","/quality/design-mode/design-adapter.html",{y:"a",d:"2022-05-26T16:22:03.000Z",e:`<h1> 适配器模式</h1>
<p>适配器模式（Adapter Pattern）是作为两个不兼容的接口之间的桥梁。这种类型的设计模式属于结构型模式，它结合了两个独立接口的功能。</p>
<p>这种模式涉及到一个单一的类，该类负责加入独立的或不兼容的接口功能。举个真实的例子，读卡器是作为内存卡和笔记本之间的适配器。您将内存卡插入读卡器，再将读卡器插入笔记本，这样就可以通过笔记本来读取内存卡。</p>
<h2> 介绍</h2>
<p>**意图：**将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。</p>
<p>**主要解决：**主要解决在软件系统中，常常要将一些"现存的对象"放到新的环境中，而新环境要求的接口是现对象不能满足的。</p>`,r:{minutes:2.67,words:800},title:"适配器模式"},["/quality/design-mode/design-adapter","/quality/design-mode/design-adapter.md"]],["v-51ad7541","/quality/design-mode/design-chain.html",{y:"a",d:"2022-05-26T16:22:03.000Z",e:`<h1> 责任链模式</h1>
`,r:{minutes:.02,words:5},title:"责任链模式"},["/quality/design-mode/design-chain","/quality/design-mode/design-chain.md"]],["v-5d65d8bb","/quality/design-mode/design-composite.html",{y:"a",d:"2022-05-26T16:22:03.000Z",e:`<h1> 组合模式</h1>
<p>组合模式（Composite Pattern），又叫部分整体模式，是用于把一组相似的对象当作一个单一的对象。组合模式依据树形结构来组合对象，用来表示部分以及整体层次。这种类型的设计模式属于结构型模式，它创建了对象组的树形结构。</p>
<p>这种模式创建了一个包含自己对象组的类。该类提供了修改相同对象组的方式。</p>
<h2> 介绍</h2>
<p>**意图：**将对象组合成树形结构以表示"部分-整体"的层次结构。组合模式使得用户对单个对象和组合对象的使用具有一致性。</p>
<p>**主要解决：**它在我们树型结构的问题中，模糊了简单元素和复杂元素的概念，客户程序可以像处理简单元素一样来处理复杂元素，从而使得客户程序与复杂元素的内部结构解耦。</p>`,r:{minutes:1.77,words:530},title:"组合模式"},["/quality/design-mode/design-composite","/quality/design-mode/design-composite.md"]],["v-00b98387","/quality/design-mode/design-decorator.html",{y:"a",d:"2022-05-18T02:16:48.000Z",e:`<h1> 装饰器模式</h1>
<h2> 定义</h2>
<p>装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。</p>
<p>这种模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供了额外的功能。</p>
<h2> 介绍</h2>
<p><strong>意图：</strong>  动态地给一个对象添加一些额外的职责。就增加功能来说，装饰器模式相比生成子类更为灵活。</p>
<p>**主要解决：**一般的，我们为了扩展一个类经常使用继承方式实现，由于继承为类引入静态特征，并且随着扩展功能的增多，子类会很膨胀。</p>`,r:{minutes:3.38,words:1015},title:"装饰器模式"},["/quality/design-mode/design-decorator","/quality/design-mode/design-decorator.md"]],["v-627fe3d7","/quality/design-mode/design-overview.html",{y:"a",d:"2022-05-26T16:22:03.000Z",e:`<h1> 设计模式</h1>
<p>设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。</p>
<h2> 设计模式的六大原则</h2>
<p>略</p>
<h2> 设计模式分类</h2>
<p>设计模式总共有 23 种设计模式。这些模式可以分为三大类：创建型模式（Creational Patterns）、结构型模式（Structural Patterns）、行为型模式（Behavioral Patterns）。</p>`,r:{minutes:1.75,words:524},title:"设计模式"},["/quality/design-mode/design-overview","/quality/design-mode/design-overview.md"]],["v-5ea7c5b4","/quality/design-mode/design-proxy.html",{y:"a",d:"2022-05-18T02:16:48.000Z",e:`<h1> 代理模式</h1>
<p>动态代理在Java中有着广泛的应用，比如Spring AOP、Hibernate数据查询、测试框架的后端mock、RPC远程调用、Java注解对象获取、日志、用户鉴权、全局性异常处理、性能监控，甚至事务处理等。</p>
<p>本文主要介绍Java中两种常见的动态代理方式：JDK原生动态代理和CGLIB动态代理。</p>
<h2> 模式简介</h2>
<p>在正式学习动态代理之前，先来学习一下设计模式中的代理模式</p>
<p><strong>代理模式</strong>：给某一个对象提供一个代理，并由代理对象来控制对真实对象的访问。代理模式是一种结构型设计模式。</p>`,r:{minutes:17.57,words:5271},title:"代理模式"},["/quality/design-mode/design-proxy","/quality/design-mode/design-proxy.md"]],["v-090dda1d","/quality/design-mode/design-strategy.html",{y:"a",d:"2022-07-13T09:28:43.000Z",e:`<h1> 策略模式</h1>
<p>策略模式定义了算法族，分别封装起来，让他们之间可以户型替换，此模式让算法的变化独立于使用算法的客户。</p>
<p>在使用策略模式进行设计开发时需要注意一些几点：</p>
<ul>
<li>找出应用中可能需要变化之处，把他们独立出来，不要和那些不需要变化的代码混在一起。例如某一个功能在不同的场景中会有不同的实现，那么这个功能就可以独立出来。</li>
<li>针对接口编程，而不是针对实现变成。就是分离出来的功能先定义一个接口，使用接口来编写代码。有利于程序的扩展和代码服用。</li>
<li>多用组合，少用继承。</li>
</ul>
<h2> 适用的场景</h2>`,r:{minutes:1.25,words:375},title:"策略模式"},["/quality/design-mode/design-strategy","/quality/design-mode/design-strategy.md"]],["v-ee734362","/quality/leetcode/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3.html",{y:"a",d:"2022-07-28T08:12:20.000Z",e:`<h1> 滑动窗口问题</h1>
<h2> 3. 无重复字符的最长子串</h2>
<p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长子串</strong> 的长度。</p>
<h3> 我的实现</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lengthOfLongestSubstring</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> startIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">char</span> c <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>temp<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                maxLength <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> i <span class="token operator">-</span> startIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
                temp<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                startIndex<span class="token operator">++</span><span class="token punctuation">;</span>
                i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
                temp<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        maxLength <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> temp<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> maxLength<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.65,words:194},title:"滑动窗口问题"},["/quality/leetcode/滑动窗口.html","/quality/leetcode/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3","/quality/leetcode/滑动窗口.md","/quality/leetcode/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3.md"]],["v-e4c1693a","/quality/linux/linux-overview.html",{y:"a",d:"2022-08-10T09:21:50.000Z",e:`<h2> Linux之ps命令</h2>
<p>ps命令是Process Status的缩写。ps命令用来列出系统中当前运行的那些进程。ps命令列出的是当前那些进程的快照，就是执行ps命令的那个时刻的那些进程。</p>
<p>要对进程进行监测和控制，首先必须要了解当前进程的情况，也就是需要查看当前进程，而 ps 命令就是最基本同时也是非常强大的进程查看命令。使用该命令可以确定有哪些进程正在运行和运行的状态、进程是否结束、进程有没有僵死、哪些进程占用了过多的资源等等。总之大部分信息都是可以通过执行该命令得到的。</p>
<p>ps 为我们提供了进程的一次性的查看，它所提供的查看结果并不动态连续的；如果想对进程时间监控，应该用 top 工具。</p>`,r:{minutes:5.37,words:1612},title:""},["/quality/linux/linux-overview","/quality/linux/linux-overview.md"]],["v-69bb4fdb","/quality/operating-system/encoding.html",{y:"a",d:"2022-11-27T12:46:22.000Z",e:`<h1> 编码总结</h1>
<h2> 一、Base64编码</h2>
<h3> 1.1 初步认识</h3>
<p>下面的这段字符串，应该是大家都很常见的。通过这种固定的格式，来表示一张图片，并被浏览器识别，可以完整的展示出图片：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0c......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:15.6,words:4681},title:"编码总结"},["/quality/operating-system/encoding","/quality/operating-system/encoding.md"]],["v-3dff1a49","/quality/operating-system/encryption-algorithm.html",{y:"a",d:"2022-11-27T12:46:06.000Z",e:`<h1> 加密算法</h1>
<p>加密算法，是现在每个软件项目里必须用到的内容。广泛应用在包括了用户登入、数字签名、数据传输等多个场合。那大家都知道那些呢？今天我把常见的加密算法全部整理在这里，供大家学习参考。</p>
<p>首先，大家要知道加密算法能干什么，利用加密算法来对数据通信的过程进行加密传输是一种最常见的安全手段。利用该手段能够达到一下三个目的：</p>
<ol>
<li>
<p>数据保密性，防止用户数据被窃取或泄露；</p>
</li>
<li>
<p>数据完整性，防止用户传输的数据被篡改；</p>
</li>
<li>
<p>通信双方身份确认，确保数据来源合法；</p>
</li>
</ol>`,r:{minutes:10.66,words:3197},title:"加密算法"},["/quality/operating-system/encryption-algorithm","/quality/operating-system/encryption-algorithm.md"]],["v-4063f995","/spring/action/temp.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h2> Spring 事物</h2>
<p>事物：逻辑上的一组操作，组成这组操作的各个逻辑单元。要么一起成功，要么一起失败。</p>
<h3> 事物特性</h3>
<p>原子性 （atomicity）:强调事务的不可分割.</p>
<p>一致性 （consistency）:事务的执行的前后数据的完整性保持一致.</p>
<p>隔离性 （isolation）:一个事务执行的过程中,不应该受到其他事务的干扰</p>
<p>持久性（durability） :事务一旦结束,数据就持久到数据库</p>
<h3> 存在的问题</h3>
<p><strong>脏读:</strong> 指当一个事务正在访问数据，并且对数据进行了修改，而这种修改还没有提交到数据库中，这时，另外一个事务也访问这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据， 那么另外一个事务读到的这个数据是脏数据，依据脏数据所做的操作可能是不正确的。</p>`,r:{minutes:2.85,words:855},title:""},["/spring/action/temp","/spring/action/temp.md"]],["v-0080010e","/spring/spring-bean-post-processor/BeanPostProcessor-base.html",{y:"a",d:"2022-06-04T12:20:00.000Z",e:`<h1> 后置处理器</h1>
<p>spring的后置处理器主要分为两类，一类是BeanFactoryPostProcessor，这个用来处理BeanDefinition信息，另一类是BeanPostProcessor，这个用来处理Bean实例的。这篇文章主要来介绍一下后置处理器的类定义和继承体系。</p>
<h2> BeanFactoryPostProcessor</h2>
<h3> BeanFactoryPostProcessor</h3>
<p>这个是<code>BeanFactoryPostProcessor</code>类定义信息，里面只有一个接口，它的调用时机是在<code>BeanDefinition</code>加载完成之后，进行Bean实例化之前。</p>`,r:{minutes:5.45,words:1634},title:"后置处理器"},["/spring/spring-bean-post-processor/BeanPostProcessor-base","/spring/spring-bean-post-processor/BeanPostProcessor-base.md"]],["v-023f80b8","/spring/spring-bean-post-processor/BeanPostProcessor-ConfigurationClassPostProcessor.html",{y:"a",d:"2022-06-04T12:20:00.000Z",e:`<h1> ConfigurationClassPostProcessor</h1>
<p>这个是Spring中非常重要的一个后置处理器类，主要负责@Configuration注解的解析，</p>
`,r:{minutes:.1,words:29},title:"ConfigurationClassPostProcessor"},["/spring/spring-bean-post-processor/BeanPostProcessor-ConfigurationClassPostProcessor","/spring/spring-bean-post-processor/BeanPostProcessor-ConfigurationClassPostProcessor.md"]],["v-2f948fd1","/spring/spring-source/spring-source-overview.html",{y:"a",d:"2022-05-19T02:51:43.000Z",e:`<h1> Spring 源码解析</h1>
`,r:{minutes:.02,words:5},title:"Spring 源码解析"},["/spring/spring-source/spring-source-overview","/spring/spring-source/spring-source-overview.md"]],["v-d237d66a","/spring-boot/spring-boot-module/spring-boot-condition.html",{y:"a",d:"2022-06-11T14:36:26.000Z",e:`<h1> Spring Boot 条件装配</h1>
<h2> Spring中的条件装配</h2>
<p>条件装配在Spring中就已经定义过，但是应用不是很广泛，下面来看看Condition的定义：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>

	<span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.21,words:63},title:"Spring Boot 条件装配"},["/spring-boot/spring-boot-module/spring-boot-condition","/spring-boot/spring-boot-module/spring-boot-condition.md"]],["v-4fe2e52e","/spring-cloud/spring-cloud-commons/spring-cloud-commons-base.html",{y:"a",d:"2022-07-13T09:28:43.000Z",e:`<h1> 基础组件总结</h1>
`,r:{minutes:.02,words:6},title:"基础组件总结"},["/spring-cloud/spring-cloud-commons/spring-cloud-commons-base","/spring-cloud/spring-cloud-commons/spring-cloud-commons-base.md"]],["v-7ed6d04b","/spring-cloud/spring-cloud-gateway/spring-cloud-gateway.html",{y:"a",d:"2022-12-10T00:00:00.000Z",l:"2022年12月10日",c:["spring cloud","gateway"],g:["spring cloud","gateway"],u:!1,e:`<h1> Spring Cloud Gateway</h1>
<h2> 一、什么是 Spring Cloud Gateway</h2>
<p>Spring Cloud Gateway 作为 Spring Cloud 生态系统中的网关，目标是替代 Netflix Zuul，其不仅提供统一的路由方式，并且还基于 Filter 链的方式提供了网关基本的功能。目前最新版 Spring Cloud 中引用的还是 Zuul 1.x 版本，而这个版本是基于过滤器的，是阻塞 IO，不支持长连接。</p>
<p>Zuul 2.x 版本一直跳票，2019 年 5 月，Netflix 终于开源了支持异步调用模式的 Zuul 2.0 版本，真可谓千呼万唤始出来。但是 Spring Cloud 已经不再集成 Zuul 2.x 了，那么是时候了解一下 SpringCloud Gateway 了。</p>`,r:{minutes:11.85,words:3556},title:"Spring Cloud Gateway"},["/spring-cloud/spring-cloud-gateway/spring-cloud-gateway","/spring-cloud/spring-cloud-gateway/spring-cloud-gateway.md"]],["v-7328d921","/spring-cloud/spring-cloud-loadbalancer/spring-cloud-loadbalancer.html",{y:"a",d:"2022-07-28T09:28:13.000Z",e:`<h1> Spring Cloud 负载均衡</h1>
`,r:{minutes:.02,words:6},title:"Spring Cloud 负载均衡"},["/spring-cloud/spring-cloud-loadbalancer/spring-cloud-loadbalancer","/spring-cloud/spring-cloud-loadbalancer/spring-cloud-loadbalancer.md"]],["v-ff7d10c0","/spring-cloud/spring-cloud-nacos/nacos-client-discovery.html",{y:"a",d:"2022-06-10T14:45:24.000Z",e:`<h1> Nacos服务注册发现原理</h1>
<h2> 服务注册流程</h2>
<h3> Spring CLoud 中的接口抽象</h3>
<p>我们都知道，Nacos是基于Spring CLoud 来完成的服务注册发现，那么Spring Cloud又是如何定义的接口呢，下面我们来一探究竟</p>
<p>Spring CLoud 定义的抽象接口在<code>AbstractAutoServiceRegistration</code>中，它是通过监听<code>WebServerInitializedEvent</code>事件来完成接口的调用链。下面我们来看一看源码实现（这里只粘了注册流程相关的代码）：</p>`,r:{minutes:1.99,words:598},title:"Nacos服务注册发现原理"},["/spring-cloud/spring-cloud-nacos/nacos-client-discovery","/spring-cloud/spring-cloud-nacos/nacos-client-discovery.md"]],["v-5f9e4035","/spring-cloud/spring-cloud-nacos/nacos-overview.html",{y:"a",d:"2022-07-29T06:25:27.000Z",e:`<h1> Nacos</h1>
<p>Nacos是阿里的一个开源产品，它是针对微服务架构中的服务发现、配置管理、服务治理的综合型解决方案。</p>
<p>官方介绍是这样的：</p>
<p>Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您实现动态服务 发现、服务配置管理、服务及流量管理。 Nacos 帮助您更敏捷和容易地构建、交付和管理微服务平台。 Nacos 是构建以“服务”为中心的现代应用架构的服务基础设施。</p>
<p>Nacos主要提供以下四大功能：</p>
<ol>
<li><strong>服务发现与服务健康检查</strong></li>
</ol>`,r:{minutes:12.16,words:3647},title:"Nacos"},["/spring-cloud/spring-cloud-nacos/nacos-overview","/spring-cloud/spring-cloud-nacos/nacos-overview.md"]],["v-5786c3b4","/spring-cloud/spring-cloud-openfeign/cloud-openfeign-action.html",{y:"a",d:"2022-08-13T15:10:18.000Z",e:`<h1> Spring Cloud OpenFeign 实战</h1>
`,r:{minutes:.02,words:5},title:"Spring Cloud OpenFeign 实战"},["/spring-cloud/spring-cloud-openfeign/cloud-openfeign-action","/spring-cloud/spring-cloud-openfeign/cloud-openfeign-action.md"]],["v-680b9feb","/spring-cloud/spring-cloud-openfeign/spring-cloud-openfeign.html",{y:"a",d:"2022-06-19T08:10:57.000Z",e:`<h1> Spring Cloud OpenFeign 源码解析</h1>
<h2> Feign 简介</h2>
<h3> Feign是什么？</h3>
<p>Feign 的英文表意为“假装，伪装，变形”， 是一个http请求调用的轻量级框架，可以以Java接口注解的方式调用Http请求，而不用像Java中通过封装HTTP请求报文的方式直接调用。Feign通过处理注解，将请求模板化，当实际调用的时候，传入参数，根据参数再应用到请求上，进而转化成真正的请求，这种请求相对而言比较直观。</p>
<p>Feign被广泛应用在Spring Cloud 的解决方案中，是学习基于Spring Cloud 微服务架构不可或缺的重要组件。</p>`,r:{minutes:4.12,words:1237},title:"Spring Cloud OpenFeign 源码解析"},["/spring-cloud/spring-cloud-openfeign/spring-cloud-openfeign","/spring-cloud/spring-cloud-openfeign/spring-cloud-openfeign.md"]],["v-20e24ead","/spring-cloud/spring-cloud-ribbon/spring-cloud-ribbon.html",{y:"a",d:"2022-06-11T14:36:26.000Z",e:`<h1> Spring Cloud Ribbon 源码解析</h1>
<h2> 负载均衡简介</h2>
<p>负载均衡，英文名称为Load Balance，其含义就是指将负载（工作任务）进行平衡、分摊到多个操作单元上进行运行，例如FTP服务器、Web服务器、企业核心应用服务器和其它主要任务服务器等，从而协同完成工作任务。</p>
<p>负载均衡构建在原有网络结构之上，它提供了一种透明且廉价有效的方法扩展服务器和网络设备的带宽、加强网络数据处理能力、增加吞吐量、提高网络的可用性和灵活性。</p>
<h3> 服务器端负载均衡器</h3>
<p>传统上，Load Balancers（例如Nginx、F5）是放置在服务器端的组件。当请求来自 <strong>客户端</strong> 时，它们将转到负载均衡器，负载均衡器将为请求指定 <strong>服务器</strong>。负载均衡器使用的最简单的算法是随机指定。在这种情况下，大多数负载平衡器是用于控制负载平衡的硬件集成软件。</p>`,r:{minutes:38.57,words:11572},title:"Spring Cloud Ribbon 源码解析"},["/spring-cloud/spring-cloud-ribbon/spring-cloud-ribbon","/spring-cloud/spring-cloud-ribbon/spring-cloud-ribbon.md"]],["v-f1d7542e","/spring-cloud/spring-cloud-sentinel/sentinel-source.html",{y:"a",d:"2022-06-19T08:10:57.000Z",e:`<h1> Sentinel 源码分析</h1>
<p>非常好的文章  <a href="https://www.javadoop.com/post/sentinel" target="_blank" rel="noopener noreferrer">阿里 Sentinel 源码解析_Javadoop</a></p>
<p><a href="https://juejin.cn/post/6982479182672429063" target="_blank" rel="noopener noreferrer">Sentinel核心源码解析 - 掘金 (juejin.cn)</a></p>
<h2> 从自动装配开始</h2>`,r:{minutes:.15,words:44},title:"Sentinel 源码分析"},["/spring-cloud/spring-cloud-sentinel/sentinel-source","/spring-cloud/spring-cloud-sentinel/sentinel-source.md"]],["v-0843675e","/tools/git/git.html",{y:"a",d:"2022-07-19T13:41:07.000Z",e:`<h1> Git 使用</h1>
<h2> 一、 版本控制工具</h2>
<h3> 1.1. 什么是版本控制系统？</h3>
<p>版本控制系统（Version Control System）:是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。版本控制系统不仅可以应用于软件源代码的文本文件，而且可以对任何类型的文件进行版本控制。</p>
<p>常见的版本控制系统有：cvs、svn、git</p>
<h3> 1.2. 为什么要有版本控制系统?</h3>
<ol>
<li>在开发过程中，经常需要对一个文件进行修改甚至删除，但是我们又希望能够保存这个文件的历史记录，如果通过备份，那么管理起来会非常的复杂。</li>
<li>在多人开发时，如果需要多人合作开发一个页面，那么修改以及合并也会非常的棘手。容易出现冲突。</li>
</ol>`,r:{minutes:22.3,words:6691},title:"Git 使用"},["/tools/git/git","/tools/git/git.md"]],["v-5e5ed352","/tools/gitlab/gitlab.html",{y:"a",d:"2022-10-30T12:56:09.000Z",e:`<h1> Gitlab 自动发布流程构建</h1>
<h2> 一：CI/CD是什么？</h2>
<p>我们的开发模式经历了如下的转变：瀑布模型-&gt;敏捷开发→<a href="https://cloud.tencent.com/product/coding?from=10680" target="_blank" rel="noopener noreferrer">DevOps</a>(Development、Operations的组合词，是一组过程、方法与系统的统称)</p>
<p>后来随着DevOps的兴起，出现了持续集成（Continuous Integration）、持续交付（Continuous Delivery） 、<a href="https://cloud.tencent.com/product/coding-cd?from=10680" target="_blank" rel="noopener noreferrer">持续部署</a>（Continuous Deployment） 的新方法，关于持续集成、持续交付、持续部署，总结如下：</p>`,r:{minutes:21.28,words:6385},title:"Gitlab 自动发布流程构建"},["/tools/gitlab/gitlab","/tools/gitlab/gitlab.md"]],["v-14d94cb6","/tools/junit/junit4.html",{y:"a",d:"2022-11-19T10:45:38.000Z",e:`<h1> Junit 4</h1>
`,r:{minutes:.01,words:2},title:"Junit 4"},["/tools/junit/junit4","/tools/junit/junit4.md"]],["v-116f9b78","/tools/junit/junit5.html",{y:"a",d:"2022-07-19T13:41:07.000Z",e:`<h1> JUnit5使用</h1>
<h2> 概述</h2>
<p>JUnit5由三个不同的子项目组成：</p>
<p>JUnit 5 = JUnit Platform + JUnit Jupiter + JUnit Vintage</p>
<h3> 引入</h3>
<p>基于maven的引入：</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.junit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>junit-bom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.8.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.49,words:1646},title:"JUnit5使用"},["/tools/junit/junit5","/tools/junit/junit5.md"]],["v-f19275c2","/tools/maven/maven.html",{y:"a",d:"2022-07-19T13:41:07.000Z",e:`<h1> Maven</h1>
<h2> 一：何为Maven</h2>
<p>Maven是一个异常强大的构建工具，能够帮助我们自动化构建过程，从清理、编译、测试到生成报告，再到打包和部署。Maven在设计上最大化的消除了构建的重复、抽象了构建声明周期，并且为绝大部分的构建任务提供了以实现的插件。</p>
<p>一言以蔽之，Maven标准化了Java项目的构建过程。</p>
<h2> 二：Maven的安装和配置</h2>
<h3> 2.1 安装</h3>
<p>没啥好说的，下载、解压、配置环境变量就OK了。</p>
<h3> 2.2 Maven的目录分析</h3>
<p>首先来看一下目录结构</p>`,r:{minutes:37.39,words:11216},title:"Maven"},["/tools/maven/maven","/tools/maven/maven.md"]],["v-6c942531","/tools/reactor/reactor.html",{y:"a",d:"2022-07-19T13:41:07.000Z",title:""},["/tools/reactor/reactor","/tools/reactor/reactor.md"]],["v-8c95a318","/spring/spring-source/spring-source-web/spring-source-web-init.html",{y:"a",d:"2022-05-19T02:51:43.000Z",e:`<h1> 从启动流程说起</h1>
<p>提前声明，文中所粘贴代码均为核心流程，省略了日志和校验逻辑，try cache等</p>
<p>Servlet在在启动时首先会调用Listener接口，在调用init接口。在Spring中，最主要的接口就是ContextLoaderListener接口。下面先看看这个接口，然后在看init的初始化流程。</p>
<h2> ContextLoaderListener</h2>
<p>ContextLoaderListener继承自<code>ServeltContextListener</code>，他的主要作用就是用来监听ServeltContext声明周期的改变，其内部只定义了2个接口，如下：</p>`,r:{minutes:2.77,words:832},title:"从启动流程说起"},["/spring/spring-source/spring-source-web/spring-source-web-init","/spring/spring-source/spring-source-web/spring-source-web-init.md"]],["v-119da7d0","/spring/spring-source/spring-source-web/spring-source-web-listener.html",{y:"a",d:"2022-11-22T10:17:44.000Z",e:`<h1> Spring 事件监听</h1>
`,r:{minutes:.02,words:5},title:"Spring 事件监听"},["/spring/spring-source/spring-source-web/spring-source-web-listener","/spring/spring-source/spring-source-web/spring-source-web-listener.md"]],["v-3706649a","/404.html",{title:""},["/404"]],["v-5bc93818","/category/",{title:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{title:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{title:"文章"},["/article/index.html"]],["v-75ed4ea4","/encrypted/",{title:"加密"},["/encrypted/index.html"]],["v-d804e652","/slide/",{title:"幻灯片"},["/slide/index.html"]],["v-154dc4c4","/star/",{title:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{title:"时间轴"},["/timeline/index.html"]],["v-02d70742","/category/spring-cloud/",{title:"spring cloud 分类"},["/category/spring-cloud/index.html"]],["v-85d7f668","/tag/spring-cloud/",{title:"spring cloud 标签"},["/tag/spring-cloud/index.html"]],["v-040a2283","/category/gateway/",{title:"gateway 分类"},["/category/gateway/index.html"]],["v-2f9356b9","/tag/gateway/",{title:"gateway 标签"},["/tag/gateway/index.html"]]];var cn="Layout",dn="NotFound",un=async()=>{const{clientConfigs:n}=await a(()=>import("./clientConfigs-bdea5ab7.js"),["assets/clientConfigs-bdea5ab7.js","assets/framework-4ec38622.js"]),e=n.reduce((t,p)=>({...t,...p.layouts}),{});return f({name:"Vuepress",setup(){const t=A(),p=c(()=>{let i;if(t.value.path){const l=t.value.frontmatter.layout;_(l)?i=l:i=cn}else i=dn;return e[i]});return()=>g(p.value)}})},vn=async()=>{const n=await un();return rn.reduce((e,[o,t,p,i])=>(e.push({name:o,path:t,component:n,meta:p},...i.map(l=>({path:l,redirect:t}))),e),[{name:"404",path:"/:catchAll(.*)",component:n}])},mn=G,_n=async()=>{const n=N({history:mn(F("/")),routes:await vn(),scrollBehavior:(e,o,t)=>t||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,o)=>{var t;(e.path!==o.path||o===Q)&&([v.value]=await Promise.all([u.resolvePageData(e.name),(t=w[e.name])==null?void 0:t.__asyncLoader()]))}),n},hn=n=>{n.component("ClientOnly",on),n.component("Content",pn)},kn=(n,e)=>{const o=c(()=>u.resolveRouteLocale(m.value.locales,e.currentRoute.value.path)),t=c(()=>u.resolveSiteLocaleData(m.value,o.value)),p=c(()=>u.resolvePageFrontmatter(v.value)),i=c(()=>u.resolvePageHeadTitle(v.value,t.value)),l=c(()=>u.resolvePageHead(i.value,p.value,t.value)),r=c(()=>u.resolvePageLang(v.value));return n.provide(V,o),n.provide(R,t),n.provide(L,p),n.provide(O,i),n.provide(I,l),n.provide(D,r),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>p.value},$head:{get:()=>l.value},$headTitle:{get:()=>i.value},$lang:{get:()=>r.value},$page:{get:()=>v.value},$routeLocale:{get:()=>o.value},$site:{get:()=>m.value},$siteLocale:{get:()=>t.value},$withBase:{get:()=>ln}}),{pageData:v,pageFrontmatter:p,pageHead:l,pageHeadTitle:i,pageLang:r,routeLocale:o,siteData:m,siteLocaleData:t}},gn=()=>{const n=K(),e=sn(),o=en(),t=b([]),p=()=>{e.value.forEach(l=>{const r=bn(l);r&&t.value.push(r)})},i=()=>{document.documentElement.lang=o.value,t.value.forEach(l=>{l.parentNode===document.head&&document.head.removeChild(l)}),t.value.splice(0,t.value.length),e.value.forEach(l=>{const r=En(l);r!==null&&(document.head.appendChild(r),t.value.push(r))})};U(tn,i),T(()=>{p(),i(),$(()=>n.path,()=>i())})},bn=([n,e,o=""])=>{const t=Object.entries(e).map(([r,E])=>_(E)?`[${r}=${JSON.stringify(E)}]`:E===!0?`[${r}]`:"").join(""),p=`head > ${n}${t}`;return Array.from(document.querySelectorAll(p)).find(r=>r.innerText===o)||null},En=([n,e,o])=>{if(!_(n))return null;const t=document.createElement(n);return z(e)&&Object.entries(e).forEach(([p,i])=>{_(i)?t.setAttribute(p,i):i===!0&&t.setAttribute(p,"")}),_(o)&&t.appendChild(document.createTextNode(o)),t},yn=Z,fn=async()=>{var t;const{clientConfigs:n}=await a(()=>import("./clientConfigs-bdea5ab7.js"),["assets/clientConfigs-bdea5ab7.js","assets/framework-4ec38622.js"]),e=yn({name:"VuepressApp",setup(){var p;gn();for(const i of n)(p=i.setup)==null||p.call(i);return()=>[g(H),...n.flatMap(({rootComponents:i=[]})=>i.map(l=>g(l)))]}}),o=await _n();hn(e),kn(e,o);for(const p of n)await((t=p.enhance)==null?void 0:t.call(p,{app:e,router:o,siteData:m}));return e.use(o),{app:e,router:o}};fn().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{pn as C,a as _,Tn as a,A as b,An as c,fn as createVueApp,In as d,Ln as e,en as f,on as g,wn as h,V as r,Pn as u,ln as w};
