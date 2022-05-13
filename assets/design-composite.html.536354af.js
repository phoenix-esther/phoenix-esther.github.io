import{_ as e,c as t}from"./app.3f0ca793.js";const a={},r=t('<h1 id="\u7EC4\u5408\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u6A21\u5F0F" aria-hidden="true">#</a> \u7EC4\u5408\u6A21\u5F0F</h1><p>\u7EC4\u5408\u6A21\u5F0F\uFF08Composite Pattern\uFF09\uFF0C\u53C8\u53EB\u90E8\u5206\u6574\u4F53\u6A21\u5F0F\uFF0C\u662F\u7528\u4E8E\u628A\u4E00\u7EC4\u76F8\u4F3C\u7684\u5BF9\u8C61\u5F53\u4F5C\u4E00\u4E2A\u5355\u4E00\u7684\u5BF9\u8C61\u3002\u7EC4\u5408\u6A21\u5F0F\u4F9D\u636E\u6811\u5F62\u7ED3\u6784\u6765\u7EC4\u5408\u5BF9\u8C61\uFF0C\u7528\u6765\u8868\u793A\u90E8\u5206\u4EE5\u53CA\u6574\u4F53\u5C42\u6B21\u3002\u8FD9\u79CD\u7C7B\u578B\u7684\u8BBE\u8BA1\u6A21\u5F0F\u5C5E\u4E8E\u7ED3\u6784\u578B\u6A21\u5F0F\uFF0C\u5B83\u521B\u5EFA\u4E86\u5BF9\u8C61\u7EC4\u7684\u6811\u5F62\u7ED3\u6784\u3002</p><p>\u8FD9\u79CD\u6A21\u5F0F\u521B\u5EFA\u4E86\u4E00\u4E2A\u5305\u542B\u81EA\u5DF1\u5BF9\u8C61\u7EC4\u7684\u7C7B\u3002\u8BE5\u7C7B\u63D0\u4F9B\u4E86\u4FEE\u6539\u76F8\u540C\u5BF9\u8C61\u7EC4\u7684\u65B9\u5F0F\u3002</p><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>**\u610F\u56FE\uFF1A**\u5C06\u5BF9\u8C61\u7EC4\u5408\u6210\u6811\u5F62\u7ED3\u6784\u4EE5\u8868\u793A&quot;\u90E8\u5206-\u6574\u4F53&quot;\u7684\u5C42\u6B21\u7ED3\u6784\u3002\u7EC4\u5408\u6A21\u5F0F\u4F7F\u5F97\u7528\u6237\u5BF9\u5355\u4E2A\u5BF9\u8C61\u548C\u7EC4\u5408\u5BF9\u8C61\u7684\u4F7F\u7528\u5177\u6709\u4E00\u81F4\u6027\u3002</p><p>**\u4E3B\u8981\u89E3\u51B3\uFF1A**\u5B83\u5728\u6211\u4EEC\u6811\u578B\u7ED3\u6784\u7684\u95EE\u9898\u4E2D\uFF0C\u6A21\u7CCA\u4E86\u7B80\u5355\u5143\u7D20\u548C\u590D\u6742\u5143\u7D20\u7684\u6982\u5FF5\uFF0C\u5BA2\u6237\u7A0B\u5E8F\u53EF\u4EE5\u50CF\u5904\u7406\u7B80\u5355\u5143\u7D20\u4E00\u6837\u6765\u5904\u7406\u590D\u6742\u5143\u7D20\uFF0C\u4ECE\u800C\u4F7F\u5F97\u5BA2\u6237\u7A0B\u5E8F\u4E0E\u590D\u6742\u5143\u7D20\u7684\u5185\u90E8\u7ED3\u6784\u89E3\u8026\u3002</p><p><strong>\u4F55\u65F6\u4F7F\u7528\uFF1A</strong> 1\u3001\u60A8\u60F3\u8868\u793A\u5BF9\u8C61\u7684\u90E8\u5206-\u6574\u4F53\u5C42\u6B21\u7ED3\u6784\uFF08\u6811\u5F62\u7ED3\u6784\uFF09\u3002 2\u3001\u60A8\u5E0C\u671B\u7528\u6237\u5FFD\u7565\u7EC4\u5408\u5BF9\u8C61\u4E0E\u5355\u4E2A\u5BF9\u8C61\u7684\u4E0D\u540C\uFF0C\u7528\u6237\u5C06\u7EDF\u4E00\u5730\u4F7F\u7528\u7EC4\u5408\u7ED3\u6784\u4E2D\u7684\u6240\u6709\u5BF9\u8C61\u3002</p><p>**\u5982\u4F55\u89E3\u51B3\uFF1A**\u6811\u679D\u548C\u53F6\u5B50\u5B9E\u73B0\u7EDF\u4E00\u63A5\u53E3\uFF0C\u6811\u679D\u5185\u90E8\u7EC4\u5408\u8BE5\u63A5\u53E3\u3002</p><p>**\u5173\u952E\u4EE3\u7801\uFF1A**\u6811\u679D\u5185\u90E8\u7EC4\u5408\u8BE5\u63A5\u53E3\uFF0C\u5E76\u4E14\u542B\u6709\u5185\u90E8\u5C5E\u6027 List\uFF0C\u91CC\u9762\u653E Component\u3002</p><p><strong>\u5E94\u7528\u5B9E\u4F8B\uFF1A</strong> 1\u3001\u7B97\u672F\u8868\u8FBE\u5F0F\u5305\u62EC\u64CD\u4F5C\u6570\u3001\u64CD\u4F5C\u7B26\u548C\u53E6\u4E00\u4E2A\u64CD\u4F5C\u6570\uFF0C\u5176\u4E2D\uFF0C\u53E6\u4E00\u4E2A\u64CD\u4F5C\u6570\u4E5F\u53EF\u4EE5\u662F\u64CD\u4F5C\u6570\u3001\u64CD\u4F5C\u7B26\u548C\u53E6\u4E00\u4E2A\u64CD\u4F5C\u6570\u3002 2\u3001\u5728 JAVA AWT \u548C SWING \u4E2D\uFF0C\u5BF9\u4E8E Button \u548C Checkbox \u662F\u6811\u53F6\uFF0CContainer \u662F\u6811\u679D\u3002</p><p><strong>\u4F18\u70B9\uFF1A</strong> 1\u3001\u9AD8\u5C42\u6A21\u5757\u8C03\u7528\u7B80\u5355\u3002 2\u3001\u8282\u70B9\u81EA\u7531\u589E\u52A0\u3002</p><p>**\u7F3A\u70B9\uFF1A**\u5728\u4F7F\u7528\u7EC4\u5408\u6A21\u5F0F\u65F6\uFF0C\u5176\u53F6\u5B50\u548C\u6811\u679D\u7684\u58F0\u660E\u90FD\u662F\u5B9E\u73B0\u7C7B\uFF0C\u800C\u4E0D\u662F\u63A5\u53E3\uFF0C\u8FDD\u53CD\u4E86\u4F9D\u8D56\u5012\u7F6E\u539F\u5219\u3002</p><p>**\u4F7F\u7528\u573A\u666F\uFF1A**\u90E8\u5206\u3001\u6574\u4F53\u573A\u666F\uFF0C\u5982\u6811\u5F62\u83DC\u5355\uFF0C\u6587\u4EF6\u3001\u6587\u4EF6\u5939\u7684\u7BA1\u7406\u3002</p><p>**\u6CE8\u610F\u4E8B\u9879\uFF1A**\u5B9A\u4E49\u65F6\u4E3A\u5177\u4F53\u7C7B\u3002</p><h2 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h2><p>TODO \u4F8B\u5B50\u4E0D\u592A\u597D</p>',16);function p(n,o){return r}var i=e(a,[["render",p],["__file","design-composite.html.vue"]]);export{i as default};
