import{_ as i,e}from"./app.bef272a2.js";const l={},o=e(`<h1 id="vsf-\u57FA\u672C\u914D\u7F6E\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#vsf-\u57FA\u672C\u914D\u7F6E\u547D\u4EE4" aria-hidden="true">#</a> VSF \u57FA\u672C\u914D\u7F6E\u547D\u4EE4</h1><h2 id="force-sync-software-version-enable-disable" tabindex="-1"><a class="header-anchor" href="#force-sync-software-version-enable-disable" aria-hidden="true">#</a> <code>force sync software-version (enable|disable)</code></h2><ul><li>\u547D\u4EE4\uFF1A<code>force sync software-version (enable|disable)</code></li><li>\u529F\u80FD\uFF1A\u5F3A\u5236\u5C06\u4E3B\u63A7\u8F6F\u4EF6\u677F\u672C\u4ECE active master \u5907\u4EFD\u5230 standby master\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A\u8BE5\u547D\u4EE4 <code>enable</code> \u4E4B\u540E\uFF0C<code>write</code> \u4FDD\u5B58\uFF0C\u91CD\u542F\u4E4B\u540E\u5C06\u9996\u5148\u68C0\u67E5AM \u548CSM \u7248\u672C\u53F7\uFF0C\u5982\u679C\u4E0D\u4E00\u81F4\u5219\u8FDB\u884C\u7248\u672C\u540C\u6B65\uFF08\u8BE5\u547D\u4EE4\u91CD\u542F\u540E\u751F\u6548\uFF09</li></ul><h2 id="switch-convert-mode" tabindex="-1"><a class="header-anchor" href="#switch-convert-mode" aria-hidden="true">#</a> <code>switch convert mode</code></h2><ul><li><p>\u547D\u4EE4\uFF1A<code>switch convert mode ( stand-alone | vsf )</code></p></li><li><p>\u529F\u80FD\uFF1A\u4EE4\u8BBE\u5907\u7531\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u8F6C\u6362\u5230 VSF \u6A21\u5F0F\uFF0C\u6216\u7531 VSF \u6A21\u5F0F\u8F6C\u5230\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u3002</p></li><li><p>\u53C2\u6570\uFF1A <code>&lt;stand-alone&gt;</code>\uFF1A\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\uFF0C<code>&lt;vsf&gt;\uFF1AVSF</code> \u6A21\u5F0F\u3002</p></li><li><p>\u7F3A\u7701\u60C5\u51B5\uFF1A\u542F\u52A8\u65F6\u6839\u636E VSF \u914D\u7F6E\u6587\u4EF6 <code>vsf.cfg</code> \u5224\u65AD\u8BBE\u5907\u5E94\u8FDB\u5165\u7684\u6A21\u5F0F\u3002</p></li><li><p>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</p></li><li><p>\u8FD0\u884C\u6A21\u5F0F\uFF1A\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\uFF0CVSF \u8FD0\u884C\u6A21\u5F0F\u3002</p></li><li><p>VSF \u89D2\u8272\uFF1AVSF \u4E3B\u63A7\u3002</p></li><li><p>\u4F7F\u7528\u6307\u5357\uFF1A\u8BBE\u5907\u652F\u6301\u4E24\u79CD\u8FD0\u884C\u6A21\u5F0F\uFF1A\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u3001VSF \u6A21\u5F0F\u3002\u5904\u4E8E\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u4E0B\u7684\u8BBE\u5907\u53EA\u80FD\u5355\u673A\u8FD0\u884C\uFF0C\u5904\u4E8EVSF \u6A21\u5F0F\u4E0B\u7684\u8BBE\u5907\u53EF\u4EE5\u4E0E\u5176\u4ED6\u8BBE\u5907\u5F62\u6210VSF\u3002 \u4E24\u79CD\u6A21\u5F0F\u901A\u8FC7\u547D\u4EE4\u884C\u8FDB\u884C\u5207\u6362\u3002</p></li><li><p>\u4E3E\u4F8B\uFF1A\u8BBE\u5907\u5904\u4E8E\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u65F6\uFF0C\u914D\u7F6E\u8BBE\u5907\u8FDB\u5165 VSF \u6A21\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch#config
Switch(config)#switch convert mode vsf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="vsf-port-group" tabindex="-1"><a class="header-anchor" href="#vsf-port-group" aria-hidden="true">#</a> <code>vsf port-group </code></h2><ul><li>\u547D\u4EE4\uFF1A <ul><li><code>vsf port-group &lt;port-number&gt;</code></li><li><code>no vsf port-group &lt;port-number&gt;</code></li></ul></li><li>\u529F\u80FD\uFF1A\u914D\u7F6E\u903B\u8F91 VSF \u53E3\u3002no \u547D\u4EE4\u4E3A\u5220\u9664 VSF \u53E3\u3002</li><li>\u53C2\u6570\uFF1A<code>&lt;port-number&gt;</code>\uFF1A\u903B\u8F91 VSF \u53E3\u7F16\u53F7\uFF0C\u53D6\u503C 1-2\u3002</li><li>\u7F3A\u7701\u60C5\u51B5\uFF1A\u672A\u914D\u7F6E\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li></ul><h2 id="vsf-port-group-interface-ethernet" tabindex="-1"><a class="header-anchor" href="#vsf-port-group-interface-ethernet" aria-hidden="true">#</a> <code>vsf port-group interface ethernet</code></h2><ul><li><p>\u547D\u4EE4\uFF1A</p><ul><li><code>vsf port-group interface Ethernet &lt;interface-list&gt;</code></li><li><code>no vsf port-group interface Ethernet &lt;interface-list&gt;</code></li></ul></li><li><p>\u529F\u80FD\uFF1A\u5EFA\u7ACB\u903B\u8F91 VSF \u53E3\u540E\uFF0C\u5728 VSF \u53E3\u6A21\u5F0F\u4E0B\uFF0C\u7ED1\u5B9A\u5B9E\u9645\u7269\u7406\u7AEF\u53E3\u3002No \u547D\u4EE4\u662F\u53BB\u9664\u7269\u7406\u7AEF\u53E3\u4E0E\u903B\u8F91 VSF \u53E3\u7684\u7ED1\u5B9A\u3002</p></li><li><p>\u53C2\u6570\uFF1A<code>&lt;interface-list&gt;</code>\uFF1A\u7269\u7406\u7AEF\u53E3\u53F7\u3002</p></li><li><p>\u7F3A\u7701\u60C5\u51B5\uFF1A\u7F3A\u7701\u672A\u7ED1\u5B9A\u7269\u7406\u7AEF\u53E3\u3002</p></li><li><p>\u547D\u4EE4\u6A21\u5F0F\uFF1AVSF \u53E3\u6A21\u5F0F\u3002</p></li><li><p>\u8FD0\u884C\u6A21\u5F0F\uFF1A\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\uFF0CVSF \u8FD0\u884C\u6A21\u5F0F\u3002</p></li><li><p>VSF \u89D2\u8272\uFF1AVSF \u4E3B\u63A7\u3002</p></li><li><p>\u4F7F\u7528\u6307\u5357\uFF1A \u4E00\u4E2A <code>vsf port-group</code> \u6700\u591A\u7ED1\u5B9A 8 \u4E2A\u7269\u7406\u7AEF\u53E3\uFF0C\u7AEF\u53E3\u52A0\u5165 <code>vsf port-group</code> \u6A21\u5F0F\u4E3A <code>on</code>\u3002 \u5F53\u591A\u4E8E 8 \u4E2A\u7AEF\u53E3\u8FDB\u884C\u7ED1\u5B9A\u7684\u65F6\u5019\uFF0C\u63D0\u793A\u7528\u6237\u4E0D\u80FD\u7ED1\u5B9A\u3002 \u652F\u6301\u8DE8\u677F\u7ED1\u5B9A\u7269\u7406\u7AEF\u53E3\u3002 \u76EE\u524D\u53EA\u652F\u6301\u4E07\u5146\u53E3\u4E0E\u903B\u8F91 VSF \u53E3\u8FDB\u884C\u7ED1\u5B9A\u3002</p></li><li><p>\u4E3E\u4F8B\uFF1A\u5EFA\u7ACB\u903B\u8F91 VSF \u53E3\uFF0C\u5E76\u8FDB\u5165 VSF \u53E3\u914D\u7F6E\u6A21\u5F0F\uFF0C\u5C06\u7269\u7406\u7AEF\u53E3 <code>1/0/1</code> \u4E0E\u903B\u8F91 VSF \u53E3\u7ED1\u5B9A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Switch(config)# vsf port-group 1
Switch(config)# vsf port-group interface ethernet 1/0/1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="vsf-domain" tabindex="-1"><a class="header-anchor" href="#vsf-domain" aria-hidden="true">#</a> <code>vsf domain</code></h2><ul><li>\u547D\u4EE4\uFF1A <ul><li><code>vsf domain &lt;domain-id&gt;</code></li><li><code>no vsf domain</code></li></ul></li><li>\u529F\u80FD\uFF1A \u914D\u7F6E VSF \u6240\u5728\u903B\u8F91\u57DF\uFF0Cno \u547D\u4EE4\u4E3A\u6062\u590D\u9ED8\u8BA4\u57DF\u53F7\uFF0C\u9ED8\u8BA4\u57DF\u53F7\u4E3A 1\u3002\u8BBE\u5907\u5904\u4E8E\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u65F6\uFF0Cvsf \u57DF\u7684\u914D\u7F6E\u7ACB\u5373\u751F\u6548\uFF0C\u8BBE\u5907\u5904\u4E8E VSF \u6A21\u5F0F\u65F6\uFF0C\u914D\u7F6E vsf domain \u540E\uFF0C<code>running-config</code> \u4E2D\u663E\u793A\u4E3A\u6700\u65B0\u7684\u914D\u7F6E\uFF0C\u4F46\u8BE5\u914D\u7F6E\u5728\u4FDD\u5B58\u5E76\u91CD\u542F\u540E\u751F\u6548\u3002</li><li>\u53C2\u6570\uFF1A<code>&lt;domain-id&gt;</code>\uFF1A\u57DF\u53F7\uFF0C\u53D6\u503C\u8303\u56F4 1-32\u3002</li><li>\u7F3A\u7701\u60C5\u51B5\uFF1A\u8BBE\u5907\u5904\u4E8E domain 1 \u4E2D\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li><li>\u8FD0\u884C\u6A21\u5F0F\uFF1A\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\uFF0CVSF \u8FD0\u884C\u6A21\u5F0F\u3002</li><li>VSF \u89D2\u8272\uFF1AVSF \u4E3B\u63A7\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A \u57DF\u662F\u4E00\u4E2A\u903B\u8F91\u6982\u5FF5\uFF0C\u8BBE\u5907\u901A\u8FC7 VSF \u94FE\u8DEF\u8FDE\u63A5\u5728\u4E00\u8D77\u5C31\u7EC4\u6210\u4E00\u4E2A VSF\uFF0C\u8FD9\u4E9B\u6210\u5458\u8BBE\u5907\u7684\u96C6\u5408\u5C31\u662F\u4E00\u4E2A VSF \u57DF\u3002 \u4E3A\u4E86\u9002\u5E94\u5404\u79CD\u7EC4\u7F51\u5E94\u7528\uFF0C\u540C\u4E00\u4E2A\u7F51\u7EDC\u91CC\u53EF\u4EE5\u90E8\u7F72\u591A\u4E2A VSF\uFF0CVSF \u4E4B\u95F4\u4F7F\u7528\u57DF\u7F16\u53F7\u6765\u4EE5\u793A\u533A\u522B\u3002 \u540C\u4E00\u57DF\u5185\u7684\u8BBE\u5907\u53EF\u4EE5\u5F62\u6210 VSF\uFF0C\u4E0D\u540C\u57DF\u7684\u8BBE\u5907\u6216 VSF \u7EC4\u4E0D\u80FD\u5F62\u6210 VSF\uFF0C\u5728\u5F62\u6210 VSF \u524D\u8981\u8FDB\u884C\u57DF\u53F7\u7684\u51B2\u7A81\u5224\u65AD\u3002 \u57DF\u53F7\u7684\u9ED8\u8BA4\u503C\u4E3A 1\u3002</li></ul><h2 id="vsf-member" tabindex="-1"><a class="header-anchor" href="#vsf-member" aria-hidden="true">#</a> <code>vsf member</code></h2><ul><li>\u547D\u4EE4\uFF1A <ul><li><code>vsf member &lt;member-id&gt;</code></li><li><code>no vsf member &lt;member-id&gt;</code></li></ul></li><li>\u529F\u80FD\uFF1A\u8BBE\u7F6EVSF \u6210\u5458\u7F16\u53F7\uFF0Cno \u547D\u4EE4\u4E3A\u5220\u9664\u8BBE\u5907VSF \u6210\u5458\u7F16\u53F7\u3002</li><li>\u53C2\u6570\uFF1A <code>&lt;member-id&gt;</code>\uFF1A\u6210\u5458\u7F16\u53F7\uFF0C\u53D6\u503C\u8303\u56F4\u662F <code>&lt;1-16&gt;</code>\u3002</li><li>\u7F3A\u7701\u60C5\u51B5\uFF1A\u8BBE\u5907\u6CA1\u6709\u6210\u5458\u7F16\u53F7\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li><li>\u8FD0\u884C\u6A21\u5F0F\uFF1A\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A \u6210\u5458\u7F16\u53F7\u6807\u8BC6\u6BCF\u53F0\u8BBE\u5907\uFF0CVSF \u7EC4\u4E2D\uFF0C\u6BCF\u53F0\u8BBE\u5907\u90FD\u62E5\u6709\u552F\u4E00\u7684\u6210\u5458\u7F16\u53F7\u3002 \u914D\u7F6E\u8BE5\u7F16\u53F7\u540E\u624D\u80FD\u8FDB\u5165 VSF \u6A21\u5F0F\uFF0C\u914D\u7F6E\u591A\u6B21\u8BE5\u547D\u4EE4\uFF0C\u6700\u540E\u4E00\u6B21\u751F\u6548\u3002 \u521D\u59CB\u5316\u72B6\u6001\uFF0C\u6CA1\u6709\u6210\u5458\u7F16\u53F7\u3002 \u8BBE\u5907\u8FDB\u5165 VSF \u6A21\u5F0F\u540E\uFF0C\u7AEF\u53E3\u683C\u5F0F\u6839\u636E\u6210\u5458\u7F16\u53F7\u8FDB\u884C\u4FEE\u6539\u3002 \u6210\u5458\u7F16\u53F7\u7684\u51B2\u7A81\uFF0C\u4E0D\u80FD\u5F62\u6210 VSF\u3002</li></ul><h2 id="vsf-non-wait-port-inactive" tabindex="-1"><a class="header-anchor" href="#vsf-non-wait-port-inactive" aria-hidden="true">#</a> <code>vsf non-wait port-inactive</code></h2><ul><li>\u547D\u4EE4\uFF1A <ul><li><code>vsf non-wait port-inactive</code></li><li><code>no vsf non-wait port-inactive</code></li></ul></li><li>\u529F\u80FD\uFF1A\u5FEB\u901F\u68C0\u6D4B VSF \u94FE\u8DEF\u72B6\u6001\u53D8\u5316\uFF0C\u7528\u4E8E\u9700\u8981\u5FEB\u901F\u53D1\u73B0 vsf \u5206\u88C2\u7684\u573A\u666F\u3002\u8BE5\u547D\u4EE4\u7684 no \u547D\u4EE4</li><li>\u5C06\u6062\u590D\u68C0\u6D4B VSF \u94FE\u8DEF\u72B6\u6001\u4E3A\u9ED8\u8BA4\u65B9\u5F0F\u3002</li><li>\u53C2\u6570\uFF1A\u65E0\u3002</li><li>\u7F3A\u7701\u60C5\u51B5\uFF1A\u672A\u914D\u7F6E\u5FEB\u901F\u68C0\u6D4B VSF \u94FE\u8DEF\u72B6\u6001\u529F\u80FD\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li><li>\u8FD0\u884C\u6A21\u5F0F\uFF1AVSF \u8FD0\u884C\u6A21\u5F0F\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A \u914D\u7F6E\u8BE5\u547D\u4EE4\u540E\uFF0C\u5982\u679C VSF \u94FE\u8DEF\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u7CFB\u7EDF\u4F1A\u7ACB\u523B\u6536\u5230\u5E76\u786E\u8BA4VSF \u94FE\u8DEF\u72B6\u6001\uFF0C\u5FEB\u901F\u68C0\u6D4BVSF \u62D3\u6251\u53D8\u5316\u3002 \u8BE5\u547D\u4EE4\u914D\u7F6E\u540E\u7ACB\u5373\u751F\u6548\uFF0C\u5EFA\u8BAE\u5728VSF \u7269\u7406\u94FE\u8DEF\u7A33\u5B9A\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u3002</li></ul><h2 id="vsf-priority" tabindex="-1"><a class="header-anchor" href="#vsf-priority" aria-hidden="true">#</a> <code>vsf priority</code></h2><ul><li>\u547D\u4EE4\uFF1A <ul><li><code>vsf priority &lt;priority&gt;</code></li><li><code>no vsf priority</code></li></ul></li><li>\u529F\u80FD\uFF1A \u914D\u7F6E VSF \u6210\u5458\u5728 VSF \u7EC4\u4E2D\u7684\u4F18\u5148\u7EA7\uFF0C\u8BE5\u547D\u4EE4\u7684 no \u547D\u4EE4\u4E3A\u6062\u590D\u4E3A\u9ED8\u8BA4\u4F18\u5148\u7EA7\uFF0C\u9ED8\u8BA4\u4F18\u5148\u7EA7\u4E3A 1\u3002 \u8BBE\u5907\u5904\u4E8E\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u65F6\uFF0Cvsf \u6210\u5458\u4F18\u5148\u7EA7\u7684\u914D\u7F6E\u7ACB\u5373\u751F\u6548\uFF0C\u8BBE\u5907\u5904\u4E8E VSF \u6A21\u5F0F\u65F6\uFF0C\u914D\u7F6E vsf \u6210\u5458\u4F18\u5148\u7EA7\u540E\uFF0C<code>running-config</code> \u4E2D\u663E\u793A\u4E3A\u6700\u65B0\u7684\u914D\u7F6E\uFF0C\u4F46\u8BE5\u914D\u7F6E\u5728\u4FDD\u5B58\u5E76\u91CD\u542F\u540E\u751F\u6548\u3002</li><li>\u53C2\u6570\uFF1A<code>&lt;priority&gt;</code>\uFF1AVSF \u6210\u5458\u4F18\u5148\u7EA7\u503C\uFF0C\u53D6\u503C\u8303\u56F4 1~32\u3002</li><li>\u7F3A\u7701\u60C5\u51B5\uFF1A\u8BBE\u5907\u9ED8\u8BA4\u4F18\u5148\u7EA7\u4E3A 1\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li><li>\u8FD0\u884C\u6A21\u5F0F\uFF1A\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\uFF0CVSF \u8FD0\u884C\u6A21\u5F0F\u3002</li><li>VSF \u89D2\u8272\uFF1AVSF \u4E3B\u63A7\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A \u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u4E0B\uFF0C\u914D\u7F6E\u6210\u5458\u4F18\u5148\u7EA7\u3002\u6210\u5458\u4F18\u5148\u7EA7\u7528\u4E8E\u89D2\u8272\u9009\u4E3E\uFF0C\u6210\u5458\u4F18\u5148\u7EA7\u503C\u8D8A\u5927\u8868\u793A\u4F18\u5148\u7EA7\u8D8A\u9AD8\uFF0C\u4F18\u5148\u7EA7\u9AD8\u7684\u8BBE\u5907\u7ADE\u9009\u65F6\uFF0C\u6210\u4E3A Master \u7684\u53EF\u80FD\u6027\u8D8A\u5927\u3002 \u901A\u8FC7\u7ED9\u4E0D\u540C\u7684\u8BBE\u5907\u914D\u7F6E\u4E0D\u540C\u7684\u4F18\u5148\u7EA7\uFF0C\u53EF\u4EE5\u6307\u5B9A\u67D0\u4E00\u8BBE\u5907\u4F5C\u4E3A VSF \u7684 Master\u3002</li></ul><h2 id="vsf-auto-merge-enable" tabindex="-1"><a class="header-anchor" href="#vsf-auto-merge-enable" aria-hidden="true">#</a> <code>vsf auto-merge enable</code></h2><ul><li>\u547D\u4EE4\uFF1A <ul><li><code>vsf auto-merge enable</code></li><li><code>no vsf auto-merge enable</code></li></ul></li><li>\u529F\u80FD\uFF1A\u4F7F\u80FD VSF \u7EC4\u81EA\u52A8\u5408\u5E76\u529F\u80FD\uFF0C\u8BE5\u547D\u4EE4\u7684 no \u547D\u4EE4\u53BB\u9664\u81EA\u52A8\u5408\u5E76\u529F\u80FD\u3002</li><li>\u53C2\u6570\uFF1A\u65E0</li><li>\u7F3A\u7701\u60C5\u51B5\uFF1A\u9ED8\u8BA4\u6CA1\u6709\u5F00\u542F\u81EA\u52A8\u5408\u5E76\u529F\u80FD\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li><li>\u8FD0\u884C\u6A21\u5F0F\uFF1AVSF \u8FD0\u884C\u6A21\u5F0F\u3002</li><li>VSF \u89D2\u8272\uFF1AVSF \u4E3B\u63A7\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A \u5F53\u4E24 VSF \u7EC4\u7531\u4E8E\u67D0\u79CD\u539F\u56E0\u5177\u5907\u4E86\u6B63\u786E\u7684\u7269\u7406\u8FDE\u63A5\uFF0C\u4E14\u8FDE\u63A5\u65B9\u5F0F\u4E3A\u4F7F\u7528\u5404\u81EA\u7684 VSF \u53E3\u8FDB\u884C\u8FDE\u63A5\uFF0C\u5E76\u4E14\u672A\u51FA\u73B0 <code>vsf domain</code>\u3001<code>vsf member id</code> \u51B2\u7A81\uFF0C\u5219\u8FDE\u63A5\u8FC7\u7A0B\u4E2D\uFF0C\u7AEF\u53E3\u7684 up\u3001VSF \u53E3\u7684\u5EFA\u7ACB\u548C\u7ED1\u5B9A\u7B49\u64CD\u4F5C\uFF0C\u4F1A\u89E6\u53D1\u4E24VSF \u7EC4\u8FDB\u884C\u81EA\u52A8\u5408\u5E76\u3002 \u5408\u5E76\u8FC7\u7A0B\u4E2D\uFF0C\u901A\u8FC7\u4F18\u5148\u7EA7\u548C <code>member id</code> \u7684\u6BD4\u8F83\uFF0C\u7ADE\u9009\u5931\u8D25\u7684 VSF \u7EC4\u5C06\u4F1A\u8FDB\u884C\u91CD\u542F\uFF0C\u91CD\u542F\u540E\u52A0\u5165\u5230\u7ADE\u9009\u80DC\u5229\u7684 VSF \u7EC4\u4E2D\u3002</li></ul><h2 id="vsf-member-description" tabindex="-1"><a class="header-anchor" href="#vsf-member-description" aria-hidden="true">#</a> \`vsf member description</h2><ul><li>\u547D\u4EE4\uFF1A <ul><li><code>vsf member &lt;member-id&gt; description &lt;text&gt;</code></li><li><code>no vsf member &lt;member-id&gt; description</code></li></ul></li><li>\u529F\u80FD\uFF1A\u5BF9 VSF \u6210\u5458\u8FDB\u884C\u63CF\u8FF0\uFF0C\u6B64\u63CF\u8FF0\u4FE1\u606F\u53EA\u5199\u5165 VSF \u4E3B\u63A7\u914D\u7F6E\u6587\u4EF6\u4E2D\u3002\u8BE5\u547D\u4EE4\u7684 no \u547D\u4EE4\u4E3A\u5220\u9664\u5BF9\u5E94 VSF \u6210\u5458\u7684\u63CF\u8FF0\u4FE1\u606F\u3002</li><li>\u53C2\u6570\uFF1A<code>&lt;member-id&gt;</code>\uFF1AVSF \u6210\u5458\u7F16\u53F7\uFF0C<code>&lt;text&gt;</code>\uFF1A\u7528\u6237\u81EA\u5B9A\u4E49\u63CF\u8FF0\u4FE1\u606F\u3002</li><li>\u7F3A\u7701\u60C5\u51B5\uFF1AVSF \u6210\u5458\u6CA1\u6709\u4EFB\u4F55\u63CF\u8FF0\u4FE1\u606F\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li><li>\u8FD0\u884C\u6A21\u5F0F\uFF1AVSF \u8FD0\u884C\u6A21\u5F0F\u3002</li><li>VSF \u89D2\u8272\uFF1AVSF \u4E3B\u63A7\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A \u5728 VSF \u6A21\u5F0F\u4E0B\uFF0C\u6DFB\u52A0\u5BF9\u8BBE\u5907\u7684\u63CF\u8FF0\u4FE1\u606F\u3002 \u65B9\u4FBF\u5BF9\u8BBE\u5907\u8FDB\u884C\u7BA1\u7406\uFF0C\u6BD4\u5982\uFF0C\u4E00\u4E2A\u7F51\u7EDC\u4E2D\u5B58\u5728\u591A\u4E2A VSF\uFF0C\u6216\u8005\u4E00\u4E2A VSF \u7684\u6210\u5458\u7269\u7406\u4F4D\u7F6E\u6BD4\u8F83\u5206\u6563\u65F6\uFF0C\u5219\u53EF\u901A\u8FC7\u6DFB\u52A0\u63CF\u8FF0\u7684\u65B9\u6CD5</li></ul><h2 id="vsf-link-delay" tabindex="-1"><a class="header-anchor" href="#vsf-link-delay" aria-hidden="true">#</a> <code>vsf link delay </code></h2><ul><li>\u547D\u4EE4\uFF1A <ul><li><code>vsf link delay&lt;interval&gt;</code></li><li><code>no vsf link delay</code></li></ul></li><li>\u529F\u80FD\uFF1A \u914D\u7F6E VSF \u94FE\u8DEF down \u5EF6\u8FDF\u4E0A\u62A5\u529F\u80FD\uFF0C\u7528\u4E8E\u907F\u514D\u56E0\u7AEF\u53E3\u94FE\u8DEF\u5C42\u72B6\u6001\u5728\u77ED\u65F6\u95F4\u5185\u9891\u7E41\u6539\u53D8\uFF0C\u5BFC\u81F4VSF \u5206\u88C2\u3001\u5408\u5E76\u7684\u9891\u7E41\u53D1\u751F\u3002 \u8BE5\u547D\u4EE4\u7684 no \u547D\u4EE4\u4E3A\u5C06\u5EF6\u8FDF\u4E0A\u62A5\u65F6\u95F4\u503C\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u3002</li><li>\u53C2\u6570\uFF1A<code>&lt;interval&gt;</code>\uFF1AVSF \u94FE\u8DEF down \u5EF6\u8FDF\u4E0A\u62A5\u65F6\u95F4\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u5373\u7ACB\u5373\u4E0A\u62A5\u3002</li><li>\u7F3A\u7701\u60C5\u51B5\uFF1A\u7F3A\u7701\u672A\u914D\u7F6E\u5EF6\u8FDF\u4E0A\u62A5\u65F6\u95F4\u503C\uFF0C\u8BE5\u503C\u4E3A 0\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li><li>\u8FD0\u884C\u6A21\u5F0F\uFF1AVSF \u8FD0\u884C\u6A21\u5F0F\u3002</li><li>VSF \u89D2\u8272\uFF1AVSF \u4E3B\u63A7\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A \u914D\u7F6E <code>vsf link delay</code> \u540E\uFF0C\u5982\u679C VSF \u94FE\u8DEF\u72B6\u6001\u4ECE up \u53D8\u4E3A down\uFF0C\u7AEF\u53E3\u4E0D\u4F1A\u7ACB\u5373\u5411\u7CFB\u7EDF\u62A5\u544A\u94FE\u8DEF\u72B6\u6001\u53D8\u5316\u3002 \u7ECF\u8FC7\u914D\u7F6E\u7684\u65F6\u95F4\u95F4\u9694\u540E\uFF0C\u5982\u679C VSF \u94FE\u8DEF\u4ECD\u7136\u5904\u4E8E down \u72B6\u6001\uFF0C\u7AEF\u53E3\u624D\u5411\u7CFB\u7EDF\u62A5\u544A\u94FE\u8DEF\u72B6\u6001\u7684\u53D8\u5316\uFF0C\u7CFB\u7EDF\u518D\u4F5C\u51FA\u76F8\u5E94\u7684\u5904\u7406\u3002 \u5982\u679C VSF \u94FE\u8DEF\u72B6\u6001\u4ECE down \u53D8\u4E3A up\uFF0C\u94FE\u8DEF\u5C42\u4F1A\u7ACB\u5373\u5411\u7CFB\u7EDF\u62A5\u544A\u3002 \u8BE5\u547D\u4EE4\u914D\u7F6E\u540E\u7ACB\u5373\u751F\u6548\u3002</li></ul><h2 id="vsf-mac-address-persistent" tabindex="-1"><a class="header-anchor" href="#vsf-mac-address-persistent" aria-hidden="true">#</a> <code>vsf mac-address persistent</code></h2><ul><li>\u547D\u4EE4\uFF1A <ul><li><code>vsf mac-address persistent &lt;timer | always&gt;</code></li><li><code>no vsf mac-address persistent</code></li></ul></li><li>\u529F\u80FD\uFF1A \u914D\u7F6E VSF \u5206\u88C2\u540E VSF \u7EC4 MAC \u5730\u5740\u4FDD\u7559\u65F6\u95F4\u3002 \u8BE5\u547D\u4EE4\u7684 no \u547D\u4EE4\u4E3A\u5220\u9664 VSF \u7EC4 MAC \u5730\u5740\u4FDD\u7559\u65F6\u95F4\u7684\u914D\u7F6E\uFF0C\u5373\u4E0D\u4FDD\u7559\u3002</li><li>\u53C2\u6570\uFF1A <ul><li><code>&lt;timer&gt;</code>\uFF1A\u914D\u7F6E VSF \u6865 MAC \u4FDD\u7559\u65F6\u95F4\u4E3A6 \u5206\u949F\uFF0C\u5373\u5F53 Master \u79BB\u5F00 VSF \u65F6\uFF0CVSF \u6865 MAC \u5730\u5740 6 \u5206\u949F\u5185\u4FDD\u6301\u4E0D\u53D8\uFF0C\u5982\u679C 6 \u5206\u949F\u540E Master \u6CA1\u6709\u56DE\u5230VSF\uFF0C\u5219\u4F7F\u7528\u65B0\u9009\u4E3E\u7684 Master \u7684\u6865 MAC \u4F5C\u4E3A VSF \u6865 MAC</li><li><code>&lt;always&gt;</code>\uFF1Aalways \u914D\u7F6E\u6865 MAC \u5730\u5740\u4FDD\u7559\u65F6\u95F4\u4E3A\u6C38\u4E45\uFF0C\u5219\u4E0D\u7BA1 Master \u8BBE\u5907\u662F\u5426\u79BB\u5F00 VSF\uFF0CVSF \u6865 MAC \u59CB\u7EC8\u4FDD\u6301\u4E0D\u53D8\u3002</li></ul></li><li>\u7F3A\u7701\u60C5\u51B5\uFF1A\u9ED8\u8BA4\u6CA1\u6709\u914D\u7F6E\u6865 MAC \u4FDD\u7559\u65F6\u95F4\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u5168\u5C40\u914D\u7F6E\u6A21\u5F0F\u3002</li><li>\u8FD0\u884C\u6A21\u5F0F\uFF1AVSF \u8FD0\u884C\u6A21\u5F0F\u3002</li><li>VSF \u89D2\u8272\uFF1AVSF \u4E3B\u63A7\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A <ul><li>VSF \u4F5C\u4E3A\u4E00\u53F0\u865A\u62DF\u8BBE\u5907\u4E0E\u5916\u754C\u901A\u4FE1\uFF0C\u4E5F\u5177\u6709\u552F\u4E00\u7684\u6865 MAC\uFF0C\u6210\u4E3A VSF \u6865 MAC\u3002</li><li>\u901A\u5E38\u60C5\u51B5\u4E0B\u4F7F\u7528 Master \u8BBE\u5907\u7684\u6865 MAC \u4F5C\u4E3A VSF \u6865 MAC\u3002</li><li>\u6865 MAC \u51B2\u7A81\u4F1A\u5BFC\u81F4\u901A\u4FE1\u6545\u969C\uFF0C\u6865 MAC \u5207\u6362\u4E5F\u4F1A\u5BFC\u81F4\u6D41\u91CF\u4E2D\u65AD\uFF0C\u56E0\u6B64\u9700\u8981\u914D\u7F6E\u6865 MAC \u7684\u4FDD\u7559\u65F6\u95F4\uFF0C\u4EE5\u4FBF\u5728 VSF \u7EC4\u53D1\u751F\u5206\u88C2\u540E\uFF0C\u4E0D\u5305\u542B\u539F VSF \u4E3B\u63A7\u7684\u90A3\u90E8\u5206\uFF0C\u6309\u7167\u7528\u6237\u914D\u7F6E\u6765\u51B3\u5B9A\u662F\u5426\u4FDD\u7559\u539F VSF \u7EC4\u6865 MAC\uFF0C\u4EE5\u53CA\u4FDD\u7559\u65F6\u95F4\u3002</li><li>\u914D\u7F6E\u4E86 timer\uFF0CVSF \u4E3B\u63A7\u79BB\u5F00\u4E86 VSF\uFF0C6 \u5206\u949F\u540E VSF \u539F\u4E3B\u63A7\u6CA1\u6709\u56DE\u5230 VSF \u7EC4\uFF0CVSF \u91CD\u542F\uFF0CVSF \u6865 MAC \u4F7F\u7528\u65B0\u9009\u4E3E\u51FA\u6765\u7684 VSF \u4E3B\u63A7\u7684 CPU-MAC \u4F5C\u4E3A VSF \u6865MAC\uFF1B</li><li>6 \u5206\u949F\u4E4B\u5185 VSF \u539F\u4E3B\u63A7\u56DE\u5230 VSF \u7EC4\uFF0C\u7EE7\u7EED\u4F7F\u7528 VSF \u539F\u4E3B\u63A7\u7684 CPU-MAC \u4F5C\u4E3A VSF \u7684\u6865 MAC\u3002</li><li>\u914D\u7F6E\u4E86always\uFF0CVSF \u4E3B\u63A7\u79BB\u5F00\u4E86 VSF\uFF0CVSF \u4E0D\u91CD\u542F\uFF0C\u4E00\u76F4\u4F7F\u7528\u539F\u6709 VSF \u4E3B\u63A7\u7684 CPU-MAC \u4F5C\u4E3A VSF \u7684\u6865 MAC\uFF0C\u82E5 VSF \u91CD\u542F\uFF0C\u5219\u4F7F\u7528\u65B0\u9009\u4E3E\u51FA\u6765\u7684 VSF \u4E3B\u63A7\u7684CPU-MAC \u4F5C\u4E3A VSF \u6865 MAC\u3002</li><li>\u8BBE\u5907\u91CD\u542F\u540E\uFF0C\u8BE5\u547D\u4EE4\u4E0D\u5728\u751F\u6548\uFF0C\u9700\u91CD\u65B0\u914D\u7F6E\u3002</li></ul></li></ul><h2 id="write" tabindex="-1"><a class="header-anchor" href="#write" aria-hidden="true">#</a> <code>write </code></h2><ul><li>\u547D\u4EE4\uFF1A<code>write</code></li><li>\u529F\u80FD\uFF1A \u8BBE\u5907\u5904\u4E8E\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\u65F6\uFF0C<code>write</code> \u547D\u4EE4\u9664\u5177\u6709\u4FDD\u5B58\u5F53\u524D running-config \u7684\u529F\u80FD\u5916\uFF0C\u8FD8\u5C06\u5F53\u524D VSF \u76F8\u5173\u914D\u7F6E\u5199\u5165 <code>vsf.cfg</code>\uFF1B \u82E5\u8BBE\u5907\u5904\u4E8E VSF \u6A21\u5F0F\uFF0C\u5219 write \u64CD\u4F5C\u4F1A\u5C06\u5F53\u524D running-config \u4FDD\u5B58\u5728 <code>vsf_startup.cfg</code> \u4E2D\uFF0C\u5E76\u5C06\u5F53\u524D VSF \u76F8\u5173\u914D\u7F6E\u4FDD\u5B58\u5230 <code>vsf.cfg</code> \u4E2D\u3002</li><li>\u53C2\u6570\uFF1A\u65E0\u3002</li><li>\u7F3A\u7701\u60C5\u51B5\uFF1Arunning-config \u548C vsf \u76F8\u5173\u914D\u7F6E\u672A\u4FDD\u5B58\u3002</li><li>\u547D\u4EE4\u6A21\u5F0F\uFF1A\u7279\u6743\u6A21\u5F0F\u3002</li><li>\u8FD0\u884C\u6A21\u5F0F\uFF1A\u72EC\u7ACB\u8FD0\u884C\u6A21\u5F0F\uFF0CVSF \u8FD0\u884C\u6A21\u5F0F\u3002</li><li>VSF \u89D2\u8272\uFF1AVSF \u4E3B\u63A7\u3002</li><li>\u4F7F\u7528\u6307\u5357\uFF1A\u5177\u5907VSF \u529F\u80FD\u7684\u8BBE\u5907\uFF0C\u8FDB\u884C\u914D\u7F6E\u4FDD\u5B58\u65F6\uFF0C\u5C06\u5F53\u524D\u914D\u7F6E\u4FE1\u606F\u5206\u522B\u5199\u5165 <code>startup.cfg</code> \u548C <code>vsf.cfg</code>\u3002</li><li>\u4E3E\u4F8B\uFF1A\u4FDD\u5B58\u914D\u7F6E\u3002 <ul><li><code>Switch#write</code></li></ul></li></ul>`,27);function d(r,c){return o}var t=i(l,[["render",d],["__file","16-1_VSF-base.html.vue"]]);export{t as default};
