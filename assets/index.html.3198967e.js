import{_ as n,e as s}from"./app.bef272a2.js";const a={},e=s(`<h1 id="\u8DEF\u7531\u5668\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668\u914D\u7F6E" aria-hidden="true">#</a> \u8DEF\u7531\u5668\u914D\u7F6E</h1><p>##\u8DEF\u7531\u5668\u57FA\u672C\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Router<span class="token operator">&gt;</span> <span class="token builtin class-name">enable</span>
Router<span class="token comment"># config</span>
Router_config<span class="token comment"># int f 0/0</span>
Router_config_f0/0<span class="token comment"># ip address 10.1.1.1 255.255.255.0  /*\u914D\u7F6E\u8DEF\u7531\u5668\u7AEF\u53E3\u5730\u5740*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u8DEF\u7531\u5668telnet\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668telnet\u767B\u5F55" aria-hidden="true">#</a> \u8DEF\u7531\u5668Telnet\u767B\u5F55\uFF1A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Router_config<span class="token comment"># ip telnet access-class [\u7B56\u7565\u540D] /*\u8BBE\u5B9Atelnet\u4F7F\u7528ACL\u8FC7\u6EE4*/</span>
Router_config<span class="token comment"># username admin password 0 admin /*\u521B\u5EFA\u7528\u6237\u540D\u4E0E\u5BC6\u7801*/</span>
Router_config<span class="token comment"># enable password 0 enable /*\u8BBE\u5B9Aenable\u5BC6\u7801*/</span>
Router_config<span class="token comment"># aaa authen enable def enable /*\u8BBE\u5B9Aenable\u5BC6\u7801\u9A8C\u8BC1\u65B9\u5F0F*/</span>
Router_config<span class="token comment"># aaa authen login def local /*\u8BBE\u5B9A\u7528\u6237\u540D\u672C\u5730\u8BA4\u8BC1*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u8DEF\u7531\u5668ssh\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668ssh\u767B\u5F55" aria-hidden="true">#</a> \u8DEF\u7531\u5668SSH\u767B\u5F55:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Router_config<span class="token comment"># ip sshd enable  /*\u5F00\u542FSSH\u767B\u5F55*/</span>
Router_config<span class="token comment"># ip sshd access-class [\u7B56\u7565\u540D]  /*\u8BBE\u5B9ASSH\u4F7F\u7528ACL\u8FC7\u6EE4*/</span>
Router_config<span class="token comment"># username admin password 0 admin  /*\u521B\u5EFA\u7528\u6237\u540D\u4E0E\u5BC6\u7801*/</span>
Router_config<span class="token comment"># enable password 0 enable  /*\u8BBE\u5B9Aenable\u5BC6\u7801*/</span>
Router_config<span class="token comment"># aaa authen enable def enable  /*\u8BBE\u5B9Aenable\u5BC6\u7801\u9A8C\u8BC1\u65B9\u5F0F*/</span>
Router_config<span class="token comment"># aaa authen login def local  /*\u8BBE\u5B9A\u7528\u6237\u540D\u672C\u5730\u8BA4\u8BC1*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u8DEF\u7531\u5668\u9759\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668\u9759\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531\u5668\u9759\u6001\u8DEF\u7531\uFF1A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Router_config<span class="token comment"># ip route 10.1.2.0  (\u76EE\u6807\u7F51\u6BB5) 255.255.255.0\uFF08\u5B50\u7F51\u63A9\u7801\uFF09 10.1.1.2\uFF08\u8F6C\u53D1\u5730\u5740\uFF09</span>
Router_config<span class="token comment"># ip route 0.0.0.0 (\u76EE\u6807\u7F51\u6BB5) 0.0.0.0\uFF08\u5B50\u7F51\u63A9\u7801\uFF09 10.1.1.2\uFF08\u8F6C\u53D1\u5730\u5740\uFF09/*\u9ED8\u8BA4\u9759\u6001\u8DEF\u7531*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u8DEF\u7531\u5668rip\u52A8\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668rip\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531\u5668RIP\u52A8\u6001\u8DEF\u7531:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Router_config<span class="token comment"># router rip  /*\u521B\u5EFA\u5E76\u542F\u7528 RIP\u8DEF\u7531*/</span>
Router_config_rip<span class="token comment"># version 2  /*\u8BBE\u7F6ERIP\u8DEF\u7531\u7248\u672C\u53F7 2*/</span>
Router_config_rip<span class="token comment"># no auto-summary  /*\u5173\u95ED\u8DEF\u7531\u81EA\u52A8\u6C47\u603B\u529F\u80FD*/</span>
Router_config_rip<span class="token comment"># network 10.1.1.0 255.255.255.0  /*\u5BA3\u544A\u7F51\u6BB5*/</span>
Router_config_rip<span class="token comment"># network 10.1.2.0 255.255.255.0</span>
Router_config_rip<span class="token comment"># redistribute connect  /*\u5F15\u5165\u76F4\u8FDE\u8DEF\u7531*/</span>
Routter_config_rip<span class="token comment"># default-information originate  /*\u4E0B\u53D1\u9ED8\u8BA4\u8DEF\u7531*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u8DEF\u7531\u5668ospf\u52A8\u6001\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668ospf\u52A8\u6001\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531\u5668OSPF\u52A8\u6001\u8DEF\u7531\uFF1A</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Router_config<span class="token comment"># router ospf 1  /*\u542F\u52A8 ospf\u8FDB\u7A0B \u8FDB\u7A0B\u53F7\u4E3A 1*/</span>
Router_config_ospf_1<span class="token comment"># router-id 1.1.1.1   /*\u8BBE\u7F6E\u8DEF\u7531router-id*/</span>
Router_config_ospf_1<span class="token comment"># netword 10.1.1.0 255.255.255.0 ar 0  /*\u5BA3\u544A\u7F51\u6BB5*/</span>
Router_config_ospf_1<span class="token comment"># network 10.1.2.0 255.255.255.0 ar 0  /*\u533A\u57DF\u53F7\u4E3A 0 */</span>
Router_config_ospf<span class="token comment"># redistribute connect  /*\u5F15\u5165\u76F4\u8FDE\u8DEF\u7531*/</span>
Router_config_ospf<span class="token comment"># default-information originate  /*\u4E0B\u53D1\u9ED8\u8BA4\u8DEF\u7531*/</span>
Router_config<span class="token comment"># int g 0/3   /*\u8FDB\u5165G0/3\u7AEF\u53E3*/</span>
Router_config_ospf<span class="token comment"># area X[\u533A\u57DF\u53F7] virtual-link X.X.X.X[\u5BF9\u7AEF\u8DEF\u7531ID]  /*\u8BBE\u5B9A\u865A\u94FE\u8DEF*/</span>
Router_config_g0/3<span class="token comment"># ip ospf priority 0  /*\u8BBE\u7F6E\u4E0D\u53C2\u4E0EOSPF\u9009\u4E3E*/</span>
Router_config_g0/3<span class="token comment"># ip ospf passive  /*\u8BBE\u7F6E\u4E3A\u88AB\u52A8\u63A5\u53E3,\u4E0D\u53D1\u9001\u66F4\u65B0\u62A5\u6587*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u8DEF\u7531\u5668\u5355\u81C2\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668\u5355\u81C2\u8DEF\u7531" aria-hidden="true">#</a> \u8DEF\u7531\u5668\u5355\u81C2\u8DEF\u7531:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Router_config<span class="token comment"># int g 0/3.1  /*\u8FDB\u5165G0/3\u7684\u5B50\u7AEF\u53E31*/</span>
Router_config_g0/3.1<span class="token comment"># encapsulation dot1q 10  /*\u914D\u7F6E\u4E3A802.1Q\u5C40\u57DF\u7F51*/</span>
Router_config_g0/3.1<span class="token comment"># ip address 192.168.10.1 255.255.255.0  /*\u7ED1\u5B9AIP\u5730\u5740*/</span>
Router_config_g0/3.1<span class="token comment"># no shut   /*\u975E\u5173\u95ED*/</span>
Router_config<span class="token comment"># int g 0/3.2   /*\u8FDB\u5165G0/3\u7684\u5B50\u7AEF\u53E32*/</span>
Router_config_g0/3.2<span class="token comment"># encapsulation dot1q 20   /*\u914D\u7F6E\u4E3A802.1Q\u5C40\u57DF\u7F51*/</span>
Router_config_g0/3.2<span class="token comment"># ip address 192.168.20.1 255.255.255.0   /*\u7ED1\u5B9AIP\u5730\u5740*/</span>
Router_config_g0/3.2<span class="token comment"># no shut   /*\u975E\u5173\u95ED*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u8DEF\u7531\u5668\u80CC\u9760\u80CC\u7EBF\u7F06" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668\u80CC\u9760\u80CC\u7EBF\u7F06" aria-hidden="true">#</a> \u8DEF\u7531\u5668\u80CC\u9760\u80CC\u7EBF\u7F06:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>RT1_config<span class="token comment">#int multilink 1  /*\u8FDB\u5165Multilink 1*/</span>
RT1_config_m1<span class="token comment">#ip add 10.10.255.21 255.255.255.252   /*\u914D\u7F6EMultilink1\u7684ip\u4E3A10.10.255.21/30*/</span>
RT1_config_m1<span class="token comment">#ppp multilink   /*\u542F\u7528\u591A\u94FE\u8DEFppp*/</span>
RT1_config_m1<span class="token comment">#multilink-group 1  /*\u5C06Multilink 1\u52A0\u5165\u5230Multilink\u805A\u5408\u7EC41 */</span>
RT1_config_s0/1<span class="token comment">#exi       </span>
RT1_config<span class="token comment">#int se0/1             /*\u8FDB\u5165\u4E32\u53E30/1*/</span>
RT1_config_s0/1<span class="token comment">#enc ppp          /*\u6307\u5B9A\u5C01\u88C5\u534F\u8BAE\u4E3Appp*/</span>
RT1_config_s0/1<span class="token comment">#ppp multilink    /*\u542F\u7528\u591A\u94FE\u8DEFppp*/</span>
RT1_config_s0/1<span class="token comment">#multilink-group 1   /*\u5C06\u63A5\u53E3\u8FDB\u5165\u5230\u805A\u54081*/</span>
RT1_config_s0/1<span class="token comment">#exi</span>
RT1_config<span class="token comment">#int se0/2             /*\u8FDB\u5165\u4E32\u53E30/2*/</span>
RT1_config_s0/2<span class="token comment">#enc ppp         /*\u6307\u5B9A\u5C01\u88C5\u534F\u8BAE\u4E3Appp*/</span>
RT1_config_s0/2<span class="token comment">#ppp multilink        /*\u542F\u7528\u591A\u94FE\u8DEFppp*/</span>
RT1_config_s0/2<span class="token comment">#multilink-group 1   /*\u5C06\u63A5\u53E3\u8FDB\u5165\u5230\u805A\u54081*/</span>
RT1_config_s0/2<span class="token comment">#physical-layer speed 2048000   /*\u914D\u7F6Ese0/2\u7684\u7269\u7406\u5C42\u7684\u6CE2\u7279\u7387\u4E3A2048000\uFF08\u4E0E\u5BF9\u7AEF0/2\u63A5\u53E3\u7684\u6CE2\u7279\u7387\u8981\u4E00\u81F4\uFF09*/</span>

RT2
RT2_config<span class="token comment">#int multilink 1      /*\u8FDB\u5165Multilink 1*/</span>
RT2_config_m1<span class="token comment">#ip add 10.10.255.22 255.255.255.252   /*\u914D\u7F6EMultilink1\u7684ip\u4E3A10.10.255.22/30*/</span>
RT2_config_m1<span class="token comment">#ppp multilink   /*\u542F\u7528\u591A\u94FE\u8DEFppp*/</span>
RT2_config_m1<span class="token comment">#multilink-group 1    /*\u5C06Multilink 1\u52A0\u5165\u5230Multilink\u805A\u5408\u7EC41*/</span>
RT2_config_m1<span class="token comment">#exit </span>
RT2_config_m1<span class="token comment">#int se0/1         /*\u8FDB\u5165\u4E32\u53E30/1*/</span>
RT2_config_s0/1<span class="token comment">#enc ppp         /*\u6307\u5B9A\u5C01\u88C5\u534F\u8BAE\u4E3Appp*/</span>
RT2_config_s0/1<span class="token comment">#ppp multilink   /*\u542F\u7528\u591A\u94FE\u8DEFppp*/</span>
RT2_config_s0/1<span class="token comment">#multilink-group 1   /*\u5C06\u63A5\u53E3\u8FDB\u5165\u5230\u805A\u54081*/</span>
RT2_config_s0/1<span class="token comment">#exi</span>
RT2_config<span class="token comment">#int se0/2            /*\u8FDB\u5165\u4E32\u53E30/2*/</span>
RT2_config_s0/2<span class="token comment">#enc ppp         /*\u6307\u5B9A\u5C01\u88C5\u534F\u8BAE\u4E3Appp*/</span>
RT2_config_s0/2<span class="token comment">#ppp multilink        /*\u542F\u7528\u591A\u94FE\u8DEFppp*/</span>
RT2_config_s0/2<span class="token comment">#multilink-group 1    /*\u5C06\u63A5\u53E3\u8FDB\u5165\u5230\u805A\u54081*/</span>
RT2_config_s0/2<span class="token comment">#phy spee 2048000     /*\u914D\u7F6Ese0/2\u7684\u7269\u7406\u5C42\u7684\u6CE2\u7279\u7387\u4E3A2048000*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="\u8DEF\u7531\u5668bai\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5668bai\u914D\u7F6E" aria-hidden="true">#</a> \u8DEF\u7531\u5668bai\u914D\u7F6E:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int s0/0 \uFF1B\u8FDB\u5165Serail\u63A5\u53E3bai</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#no shutdown \uFF1B\u6FC0\u6D3B\u5F53\u524D\u63A5bai\u53E3</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#clock rate 64000 \uFF1B\u8BBE\u7F6E\u540C\u6B65\u65F6\u949F</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip address \uFF1B\u8BBE\u7F6EIP\u5730\u5740bai</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#ip address second \uFF1B\u8BBE\u7F6E\u7B2C\u4E8C\u4E2AIP</span>
router<span class="token punctuation">(</span>config-if<span class="token punctuation">)</span><span class="token comment">#int f0/0.1 \uFF1B\u8FDB\u5165\u5B50\u63A5\u53E3</span>
router<span class="token punctuation">(</span>config-subif.1<span class="token punctuation">)</span><span class="token comment">#ip address \uFF1B\u8BBE\u7F6E\u5B50\u63A5\u53E3IP</span>
router<span class="token punctuation">(</span>config-subif.1<span class="token punctuation">)</span><span class="token comment">#encapsulation dot1q \uFF1B\u7ED1\u5B9Avlan\u4E2D\u7EE7\u534F\u8BAE</span>
router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#config-register 0x2142 \uFF1B\u8DF3\u8FC7\u914D\u7F6E\u6587\u4EF6</span>
router<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#config-register 0x2102 \uFF1B\u6B63\u5E38\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6</span>
router<span class="token comment">#reload :\u91CD\u65B0\u5F15\u5BFC</span>
Address pool range:\u5730\u5740\u6C60\u8303
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u795E\u5DDE\u6570\u7801\u8DEF\u7531\u5668\u6E05\u7A7A\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u795E\u5DDE\u6570\u7801\u8DEF\u7531\u5668\u6E05\u7A7A\u6570\u636E" aria-hidden="true">#</a> \u795E\u5DDE\u6570\u7801\u8DEF\u7531\u5668\u6E05\u7A7A\u6570\u636E:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Ctrl+Break
monitor<span class="token comment">#del</span>
this <span class="token function">file</span> will be erased,are you sure?<span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>y
monitor<span class="token comment">#reboot</span>
Do you want to <span class="token function">reboot</span> the router<span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>?y
Please wait<span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,21);function p(c,o){return e}var i=n(a,[["render",p],["__file","index.html.vue"]]);export{i as default};
