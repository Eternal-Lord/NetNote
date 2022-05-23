import{_ as p,r as c,o as l,c as r,a as n,b as e,F as i,d as s,e as t}from"./app.bef272a2.js";const o={},u=n("h1",{id:"\u4EA4\u6362\u673A\u914D\u7F6E",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4EA4\u6362\u673A\u914D\u7F6E","aria-hidden":"true"},"#"),s(" \u4EA4\u6362\u673A\u914D\u7F6E")],-1),b=n("h2",{id:"\u4F7F\u7528\u8BBE\u5907",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u8BBE\u5907","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u8BBE\u5907")],-1),m={href:"http://www.dcnetworks.com.cn/goods/43.html",target:"_blank",rel:"noopener noreferrer"},d=s("DCN S4600 \u7CFB\u5217\u5168\u5343\u5146\u7EFF\u8272\u667A\u80FD\u5B89\u5168\u63A5\u5165\u4EA4\u6362\u673A"),f={href:"http://www.dcnetworks.com.cn/goods/24.html",target:"_blank",rel:"noopener noreferrer"},g=s("DCN S5750E \u7CFB\u5217\u7EFF\u8272\u667A\u80FD\u4E07\u5146\u5B89\u5168\u6C47\u805A\u63A5\u5165\u4EA4\u6362\u673A"),h=t(`<h2 id="\u795E\u5DDE\u6570\u7801\u4E8C\u5C42\u4EA4\u6362\u673A\u5212\u5206vlan\u5982\u4E0B\u6240\u793A" tabindex="-1"><a class="header-anchor" href="#\u795E\u5DDE\u6570\u7801\u4E8C\u5C42\u4EA4\u6362\u673A\u5212\u5206vlan\u5982\u4E0B\u6240\u793A" aria-hidden="true">#</a> \u795E\u5DDE\u6570\u7801\u4E8C\u5C42\u4EA4\u6362\u673A\u5212\u5206vlan\u5982\u4E0B\u6240\u793A:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>S4600-28P-SI&gt;enable
S4600-28P-SI#config
S4600-28P-SI(config)#vlan 10
S4600-28P-SI(config-vlan10)#interface ethernet 1/0/1-4
S4600-28P-SI(config-if-port-range)#switchport access vlan 10
Set the port Ethernet1/0/1 access vlan 10 successfully
Set the port Ethernet1/0/2 access vlan 10 successfully
Set the port Ethernet1/0/3 access vlan 10 successfully
Set the port Ethernet1/0/4 access vlan 10 successfully
S4600-28P-SI(config-if-port-range)#exit
S4600-28P-SI(config)#
\u5982\u679C\u8FD8\u8981\u6539\u5176\u4ED6vlan\u548C\u7AEF\u53E3\u628A\u4E0A\u9762\u7684\u6570\u5B57\u6539\u4E00\u4E0B\u5C31\u884C\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u795E\u5DDE\u6570\u7801\u4EA4\u6362\u673A\u6539\u540D\u5982\u4E0B\u6240\u793A" tabindex="-1"><a class="header-anchor" href="#\u795E\u5DDE\u6570\u7801\u4EA4\u6362\u673A\u6539\u540D\u5982\u4E0B\u6240\u793A" aria-hidden="true">#</a> \u795E\u5DDE\u6570\u7801\u4EA4\u6362\u673A\u6539\u540D\u5982\u4E0B\u6240\u793A:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>S4600-28P-SI<span class="token comment">#config</span>
S4600-28P-SI<span class="token comment">#hostname xxx </span>
xxx<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#exit</span>
xxx<span class="token comment">#</span>
\u540D\u5B57\u5728xxx\u91CC\u6539
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="telnet\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#telnet\u7BA1\u7406" aria-hidden="true">#</a> telnet\u7BA1\u7406:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span>config
<span class="token comment">#enable  \u7279\u6743</span>
<span class="token comment">#config   \u5168\u5C40</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#username li password admin  \u7528\u6237\u540D\u4E3Ali \u5BC6\u7801\u4E3Aadmin</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#enable</span>

 password admin  \u8BBE\u7F6E\u7279\u6743\u5BC6\u7801admin 
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#interface vlan 1   \u7F51\u7EDC vlan1</span>
<span class="token punctuation">(</span>config-if-vlan1<span class="token punctuation">)</span><span class="token comment">#ip address 192.168.10.200 255.255.255.0   \u8BBE\u7F6EVLAN1\u7684IP\u4EE5\u53CA\u5B50\u7F51\u63A9\u7801</span>
<span class="token punctuation">(</span>config-if-vlan1<span class="token punctuation">)</span><span class="token comment">#no shutdown   \u6253\u5F00vlan1</span>
<span class="token comment">#exit</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#telnet-server enable (\u542F\u7528telnet\u670D\u52A1\uFF09</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#exit \u9000\u51FA</span>
<span class="token comment">#write  \u4FDD\u5B58</span>
<span class="token comment">#set default \u6062\u590D\u51FA\u5382\u8BBE\u7F6E</span>
<span class="token comment">#reload      \u91CD\u542F\u4EA4\u6362\u673A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u521B\u5EFAvlan-\u5206\u914D\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAvlan-\u5206\u914D\u7AEF\u53E3" aria-hidden="true">#</a> \u521B\u5EFAvlan\uFF0C\u5206\u914D\u7AEF\u53E3:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65B9\u6CD5\u4E00\uFF1A
(config)#vlan 10          \u521B\u5EFAvlan10
(config-vlan10)#exit      \u9000\u51FA
(config)#interface1/0/1-2     \u8FDB\u51651-2\u7AEF\u53E3
(config-if-port-range)#switchport access vlan 10  \u5206\u914D1-2\u7AEF\u53E3\u5230vlan10
(config-if-port-range)#exit \u9000\u51FA
(config\uFF09#interface vlan 10     \u8FDB\u5165vlan10
(config-if-vlan10\uFF09ip address 192.168.10.1 255.255.255.0     \u8BBE\u7F6Evlan10\u7684\u7F51\u5173\u4E3A192.168.10.1

\u65B9\u6CD5\u4E8C\uFF1A
(config\uFF09#vlan 10          \u521B\u5EFAvlan10
(config-if-vlan10)switchport e1/0/1-2   \u5206\u914D1-2\u7AEF\u53E3\u5230vlan10
(config\uFF09#interface vlan 10     \u8FDB\u5165vlan10
(config-if-vlan10)ip address 192.168.10.1 255.255.255.0   \u8BBE\u7F6Evlan10\u7684\u7F51\u5173\u4E3A192.168.10.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u4E09\u5C42\u4EA4\u6362\u673A\u4E0E\u8DEF\u7531\u4E92\u901A" tabindex="-1"><a class="header-anchor" href="#\u4E09\u5C42\u4EA4\u6362\u673A\u4E0E\u8DEF\u7531\u4E92\u901A" aria-hidden="true">#</a> \u4E09\u5C42\u4EA4\u6362\u673A\u4E0E\u8DEF\u7531\u4E92\u901A:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E09\u5C42\u4EA4\u6362\u673Afa0/1\u63A5\u53E3\u8FDE\u63A5\u8DEF\u7531fa0/0\u63A5\u53E3
\u4E09\u5C42\u4EA4\u6362\u673A
(config)#ip routing
(config)#interface e0/1
(config)#no switchport
(config)#ip address 192.168.1.253 255.255.255.0
\u8DEF\u7531
(config)#interface fa0/0
(config)#ip address 192.168.1.254 255.255.255.0
(config)#ip route 0.0.0.0 0.0.0.0 192.168.1.253
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="vrrp" tabindex="-1"><a class="header-anchor" href="#vrrp" aria-hidden="true">#</a> VRRP:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(config)#router vrrp 10           /* \u521B\u5EFA\u4E00\u4E2Avrrp\u534F\u8BAE\uFF0C\u6807\u8BC6\u4E3A10 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E8C\u5C42\u9694\u79BB" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u5C42\u9694\u79BB" aria-hidden="true">#</a> \u4E8C\u5C42\u9694\u79BB:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(config)#isolate-port group 1          /*\u521B\u5EFA\u9694\u79BB\u7EC41*/
(config#)vlan 10
(config-vlan30)#isolate-port group 1 switchport access e1/0/1-2       /* \u5C061-2\u7AEF\u53E3\u52A0\u5165\u9694\u79BB\u7EC4*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u73AF\u8DEF\u68C0\u6D4B" tabindex="-1"><a class="header-anchor" href="#\u73AF\u8DEF\u68C0\u6D4B" aria-hidden="true">#</a> \u73AF\u8DEF\u68C0\u6D4B:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(config)#loopback-detection interval-time 10 10    /*\u914D\u7F6E\u73AF\u8DEF\u68C0\u6D4B\u7684\u65F6\u95F4\u95F4\u9694\u4E3A10s*/
(config)#loopback-detection control-recovery timeout 1800      /* \u73AF\u8DEF\u6062\u590D\u65F6\u95F4\u4E3A1800s */
(config)#interface e1/0/1                                            /*\u8FDB\u5165\u9700\u8981\u914D\u7F6E\u73AF\u8DEF\u68C0\u6D4B\u7684\u7AEF\u53E3/*
(config-if-ethernet1/0/1)#loopback-detection control block     /* \u914D\u7F6E\u53D1\u73B0\u73AF\u8DEF\u540E\u7684\u65B9\u5F0F\u4E3A\u963B\u585E\u8BE5\u7AEF\u53E3 */
(config-if-ethernet1/0/1)#loopback-detection specified-vlan 10     /*\u6307\u5B9A\u73AF\u8DEF\u68C0\u6D4Bvlan*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="vsf" tabindex="-1"><a class="header-anchor" href="#vsf" aria-hidden="true">#</a> vsf:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(config)#vsf domain 1   /* \u914D\u7F6Evsf\u57DF\u53F7\u4E3A1(\u57DF\u53F7\u4E00\u81F4)*/
(config)#vsf member 1   /* \u914D\u7F6E\u6210\u5458\u7AEF\u53E3\u53F7\u4E3A1\uFF08\u53E6\u4E00\u53F0\u4E3A2\uFF09*/
(config)#vsf port-group 1   /*\u521B\u5EFA\u5806\u53E0\u53E3*/
(config-vsf-port1)#vsf port-group interface1/0/25    /*\u5C0625\u7AEF\u53E3\u52A0\u5165\u5806\u53E0*/
(config-vsf-port1)#vsf port-group interface1/0/26    /*\u5C0626\u7AEF\u53E3\u52A0\u5165\u5806\u53E0*/
(config-vsf-port1)#exit
(config\uFF09#vsf priority 1             /* \u914D\u7F6Evsf\u4F18\u5148\u7EA7\u4E3A1\uFF08\u8D8A\u5927\u8D8A\u4F18\uFF09*/
(config\uFF09#switchport convert mode vsf      /* \u4FEE\u6539\u4EA4\u6362\u673A\u4E3Avsf\u6A21\u5F0F */

vsf LACP MAD\u5206\u88C2\u68C0\u6D4B(vsf\u6210\u5458\u90FD\u9700\u914D\u7F6E)
(config\uFF09#port-group 1           /*\u521B\u5EFA\u805A\u5408\u7EC41*/
(config\uFF09#interfaceport-channel 1     /*\u8FDB\u5165\u805A\u5408\u7EC41*/
(config-if-port-channel1)#vsf mad lacp enable    /*\u5F00\u542Fvsf lacp\u51B2\u7A81\u68C0\u6D4B*/
(config\uFF09#exit
(config\uFF09#vsf link delay 2000   /* \u914D\u7F6E\u94FE\u8DEF\u5EF6\u8FDF\u4E0A\u62A5\u4E3A2000\u6BEB\u79D2 */
(config\uFF09#vsf mac-address persistent timer  /* \u6253\u5F00vsf\u7684mac\u8BA1\u65F6 */
(config\uFF09#interfacee1/0/23;2/0/23     /*\u8FDB\u5165lacp\u68C0\u6D4B\u7AEF\u53E3\uFF08\u4E8C\u5C42\u65B9\u5411\uFF09*/
(config-if-port-range\uFF09#swi mode trunk    /* \u914D\u7F6E\u5E72\u9053 */
(config-if-port-range\uFF09#port-group 1 mode active   /* \u5C06\u7AEF\u53E3\u52A0\u5165\u805A\u5408\u7EC41\uFF0C\u65B9\u5F0F\u4E3A\u4E3B\u52A8 */
(config-if-port-range\uFF09#lacp timeout short  /* \u914D\u7F6Elacp\u5FEB\u901F\u68C0\u6D4B */

vsf BFD MAD\u5206\u88C2\u68C0\u6D4B(vsf\u6210\u5458\u90FD\u9700\u914D\u7F6E)
(config\uFF09#vlan 111        /* \u521B\u5EFA\u7528\u4E8Ebfd mad\u68C0\u6D4B\u7684vlan */
(config-vlan111)#switch interface1/0/24      /* \u5C06\u4E24\u53F0\u4E09\u5C42\u4E4B\u95F4\u7528\u4E8E\u68C0\u6D4B\u7684\u7AEF\u53E3\u52A0\u5165\u68C0\u6D4Bvlan\uFF08\u9700\u7269\u7406\u8FDE\u7EBF\uFF09 */
(config-vlan111)#exit
(config\uFF09#int vlan 111     /* \u8FDB\u5165vlan111*/
(config-if-vlan111)#vsf mad ip address 192.168.1.1 255.255.255.0 member 1   /* \u914D\u7F6Ebfd\u7684\u68C0\u6D4Bvlan ip\uFF08\u53E6\u4E00\u53F0\u9700\u540C\u4E00\u7F51\u6BB5\uFF09 */
(config-if-vlan111)#vsf mad bfd enable   /*\u5F00\u542Fbfd mad\u68C0\u6D4B*/

\u5220\u9664vsf
(config\uFF09#switch convert mode stand-alone    /* \u914D\u7F6E\u4EA4\u6362\u673A\u4E3A\u72EC\u7ACB\u6A21\u5F0F */
(config\uFF09#exit
(config)#dir                 /* \u67E5\u770B\u914D\u7F6E\u6587\u4EF6*/
(config)#delete vsf.cfg
(config)#delete vsf_startup.cfg 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="pbr" tabindex="-1"><a class="header-anchor" href="#pbr" aria-hidden="true">#</a> pbr:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip access-list extended internet  /* \u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\u201Cinternet\u201D\u7684\u6269\u5C55\u63A7\u5236\u5217\u8868 */</span>
<span class="token punctuation">(</span>config-ip-ext-nacl-internet<span class="token punctuation">)</span><span class="token comment">#permit ip 10.10.0.0 0.0.255.255 202.99.192.0 0.0.0.15   /* \u5141\u8BB810.10.0.0/16\u8BBF\u95EE202.99.192.0/20 */</span>
<span class="token punctuation">(</span>config-ip-ext-nacl-internet<span class="token punctuation">)</span><span class="token comment">#permit ip 10.100.100.0 0.0.0.255 202.99.192.0 0.0.0.15  /* \u5141\u8BB810.100.100.0/24\u8BBF\u95EE202.99.192.0/20 */</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#class-map 1        /* \u521B\u5EFA\u5206\u7C7B\u5339\u914D\u88681 */</span>
<span class="token punctuation">(</span>config-classmap-1<span class="token punctuation">)</span><span class="token comment">#match access-group internet     /*\u5728\u5206\u7C7B\u5339\u914D\u8868\u4E2D\u6DFB\u52A0\u201Cinternet\u201DACL\u5217\u8868 */</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#policy-map 1       /* \u521B\u5EFA\u7B56\u7565\u88681 */</span>
<span class="token punctuation">(</span>config-policymap-1<span class="token punctuation">)</span><span class="token comment">#class 1       /* \u7B56\u7565\u88681\u5339\u914D\u5206\u7C7B\u88681 */</span>
<span class="token punctuation">(</span>config-policymap-1-class-1<span class="token punctuation">)</span><span class="token comment">#set ip nexthop 10.10.255.2      /*\u8BBE\u7F6Eqos\u6D41\u91CF\u4E0B\u4E00\u8DF3\u7684IP\u5730\u574010.10.255.2\uFF08\u8BBE\u7F6E\u6570\u636E\u6D41\u9700\u8981\u7ECF\u8FC7\u54EA\u4E2Aip\uFF09*/</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int e1/0/23       /*\u8FDB\u5165\u9700\u8981\u63A7\u5236\u7684ip\u7684\u5165\u63A5\u53E3 */</span>
<span class="token punctuation">(</span>config-if-ethernet1/0/23<span class="token punctuation">)</span><span class="token comment">#service-policy input 1      /* \u6302\u8F7D\u5165\u53E3\u7B56\u75651 */</span>

\u4E09\u6B65\uFF0C\u4E00\u6302\u8F7D
\u7B2C\u4E00\u6B65\uFF0C\u521B\u5EFAacl
\u7B2C\u4E8C\u6B65\uFF0C\u521B\u5EFA\u5206\u7C7B\u5339\u914D\u8868\uFF0C\u5339\u914Dacl
\u7B2C\u4E09\u6B65\uFF0C\u521B\u5EFA\u7B56\u7565\uFF0C\u5339\u914D\u5206\u7C7B\u5339\u914D\u8868\uFF0C\u8BBE\u7F6E\u4E0B\u4E00\u8DF3
\u6302\u8F7D\uFF0C\u5C06\u7B56\u7565\u8868\u6302\u8F7D\u5230\u8BBF\u95EE\u7AEF\u53E3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u53D1\u9001\u514D\u8D39arp\u62A5\u6587" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u514D\u8D39arp\u62A5\u6587" aria-hidden="true">#</a> \u53D1\u9001\u514D\u8D39arp\u62A5\u6587:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#ip gratuitous-arp 400  /*\u8BBE\u7F6E\u514D\u8D39\u53D1\u9001arp\u62A5\u6587\uFF0C\u95F4\u9694\u4E3A400s*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="sflow\u91C7\u6837" tabindex="-1"><a class="header-anchor" href="#sflow\u91C7\u6837" aria-hidden="true">#</a> sflow\u91C7\u6837:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#sflow agent-address 10.10.200.254     /*\u8BBE\u7F6E\u91C7\u6837\u7684\u4EE3\u7406\uFF08\u6E90\uFF09\u5730\u5740\u4E3A10.10.200.254*/</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#sflow destination 10.10.200.50        /*\u91C7\u6837\u540E\u53D1\u9001\u5230\u5206\u6790\u566810.10.200.50*/</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#sflow priority 1                      /*\u8BBE\u7F6E\u6536\u62A5\u6587\u7684\u4F18\u5148\u7EA7\u4E3A1\uFF08\u8D8A\u5927\u8D8A\u4F18\u5148\uFF0C\u5C3D\u91CF\u914D\u5C0F\uFF09*/</span>
<span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token comment">#int e1/0/1</span>
<span class="token punctuation">(</span>config-if-ethernet1/0/1<span class="token punctuation">)</span><span class="token comment">#sflow rate input 1000 /*\u8BBE\u7F6E\u91C7\u6837\u7684\u8F93\u5165\u901F\u7387\u4E3A1000pps*/</span>
<span class="token punctuation">(</span>config-if-ethernet1/0/1<span class="token punctuation">)</span><span class="token comment">#sflow rate output 1000 /*\u8BBE\u7F6E\u91C7\u6837\u7684\u8F93\u51FA\u901F\u7387\u4E3A1000pps*/</span>
<span class="token punctuation">(</span>config-if-ethernet1/0/1<span class="token punctuation">)</span><span class="token comment">#sflow counter-interval 60   /*\u8BBE\u7F6E\u91C7\u6837\u7684\u6700\u5927\u95F4\u9694\u4E3A60s*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="\u914D\u7F6E\u663E\u793A\u7684\u5E2E\u52A9\u4FE1\u606F\u7684\u8BED\u8A00\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u663E\u793A\u7684\u5E2E\u52A9\u4FE1\u606F\u7684\u8BED\u8A00\u7C7B\u578B" aria-hidden="true">#</a> \u914D\u7F6E\u663E\u793A\u7684\u5E2E\u52A9\u4FE1\u606F\u7684\u8BED\u8A00\u7C7B\u578B:</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>SWITCH<span class="token comment">#language ?</span>
   chinese Set language Chinese
   english <span class="token builtin class-name">set</span> language English
SWITCH<span class="token comment">#language chinese</span>
SWITCH<span class="token comment">#language ?     !\u8BF7\u6CE8\u610F\u4F7F\u7528\u201C\uFF1F\u201D\u65F6\uFF0C\u5E2E\u52A9\u4FE1\u606F\u5DF2\u7ECF\u6210\u4E3A\u4E86\u4E2D\u6587</span>
   chinese \u8BBE\u7F6E\u8BED\u8A00\u4E3A\u4E2D\u6587
   english \u8BBE\u7F6E\u8BED\u8A00\u4E3A\u82F1\u6587
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,26);function v(k,x){const a=c("ExternalLinkIcon");return l(),r(i,null,[u,b,n("ul",null,[n("li",null,[n("a",m,[d,e(a)])]),n("li",null,[n("a",f,[g,e(a)])])]),h],64)}var w=p(o,[["render",v],["__file","index.html.vue"]]);export{w as default};
