import{_ as t,r as l,o as b,c as i,a as n,b as e,F as p,d as s,e as r}from"./app.bef272a2.js";var o="/assets/login.0b498d53.jpg";const c={},m=n("h1",{id:"rabbitmq",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rabbitmq","aria-hidden":"true"},"#"),s(" RabbitMQ")],-1),u={class:"custom-container tip"},d=n("p",{class:"custom-container-title"},"TIP",-1),_=s("RabbitMQ \u662F\u5B9E\u73B0\u4E86\u9AD8\u7EA7\u6D88\u606F\u961F\u5217\u534F\u8BAE\uFF08AMQP\uFF09\u7684\u5F00\u6E90\u6D88\u606F\u4EE3\u7406\u8F6F\u4EF6\uFF08\u4EA6\u79F0\u9762\u5411\u6D88\u606F\u7684\u4E2D\u95F4\u4EF6\uFF09\u3002 RabbitMQ \u670D\u52A1\u5668\u662F\u7528 "),h={href:"https://www.erlang.org/",target:"_blank",rel:"noopener noreferrer"},g=s("Erlang"),q=s(" \u8BED\u8A00\u7F16\u5199\u7684\uFF0C\u800C\u96C6\u7FA4\u548C\u6545\u969C\u8F6C\u79FB\u662F\u6784\u5EFA\u5728"),f={href:"https://baike.baidu.com/item/%E5%BC%80%E6%94%BE%E7%94%B5%E4%BF%A1%E5%B9%B3%E5%8F%B0",target:"_blank",rel:"noopener noreferrer"},v=s("\u5F00\u653E\u7535\u4FE1\u5E73\u53F0"),k=s("\u6846\u67B6\u4E0A\u7684\u3002 \u6240\u6709\u4E3B\u8981\u7684\u7F16\u7A0B\u8BED\u8A00\u5747\u6709\u4E0E\u4EE3\u7406\u63A5\u53E3\u901A\u8BAF\u7684\u5BA2\u6237\u7AEF\u5E93\u3002"),w={href:"https://www.rabbitmq.com/",target:"_blank",rel:"noopener noreferrer"},x=s("RabbitMQ \u5B98\u65B9\u7F51\u7AD9"),E=n("iframe",{src:"//player.bilibili.com/player.html?aid=95396959&bvid=BV1dE411K7MG&cid=163004929&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%",height:"380px"}}," ",-1),M=n("h2",{id:"\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),s(" \u5B89\u88C5")],-1),y=n("p",null,"\u63A8\u8350\u53C2\u8003\u5B98\u65B9\u6559\u7A0B\uFF08\u82F1\u6587\uFF09\uFF1A",-1),Q={href:"https://www.rabbitmq.com/download.html",target:"_blank",rel:"noopener noreferrer"},B=s("\u4E0B\u8F7D\u4E0E\u5B89\u88C5 RabbitMQ"),R={href:"https://www.rabbitmq.com/install-debian.html",target:"_blank",rel:"noopener noreferrer"},S=s("\u5728 Debian \u6216 Ubuntu \u4E2D\u5B89\u88C5 RabbitMQ"),V=n("h3",{id:"debian",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#debian","aria-hidden":"true"},"#"),s(" Debian")],-1),I=n("p",null,"\u4E0B\u8F7D\u6700\u65B0 deb \u8F6F\u4EF6\u5305\uFF1A",-1),L={href:"https://www.erlang-solutions.com/resources/download.html#tabs-debian",target:"_blank",rel:"noopener noreferrer"},A=s("ErLang"),D={href:"https://packagecloud.io/rabbitmq/rabbitmq-server",target:"_blank",rel:"noopener noreferrer"},P=s("RabbitMQ"),T=r(`<p>\u5C06 <code>.deb</code> \u8F6F\u4EF6\u5305\u4E0A\u4F20\u5230 Debian \u4E3B\u673A\uFF0C\u6216\u5728\u4E3B\u673A\u4E0A\u4F7F\u7528 <code>wget</code> \u6307\u4EE4\u4E0B\u8F7D\u8F6F\u4EF6\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://packages.erlang-solutions.com/erlang/debian/pool/esl-erlang_23.2.1-1~debian~stretch_amd64.deb
<span class="token function">wget</span> --content-disposition https://packagecloud.io/rabbitmq/rabbitmq-server/packages/ubuntu/disco/rabbitmq-server_3.8.11-1_all.deb/download.deb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6267\u884C\u4EE5\u4E0B\u6307\u4EE4\u5B89\u88C5 ErLang \u4E0E RabbitMQ\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> dpkg --install esl-erlang_23.2.1-1~debian~stretch_amd64.deb
<span class="token function">sudo</span> dpkg --install rabbitmq-server_3.8.11-1_all.deb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u901A\u8FC7\u63D2\u4EF6\u5F00\u542F Web \u7BA1\u7406\u754C\u9762\uFF0C\u5E76\u91CD\u542F RabbitMQ \u670D\u52A1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management
<span class="token function">sudo</span> systemctl restart rabbitmq-server.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,6),C=s("\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE "),F={href:"http://localhost:15672",target:"_blank",rel:"noopener noreferrer"},N=s("http://localhost:15672"),j=s(" \u8BBF\u95EE Web \u7BA1\u7406\u754C\u9762\u3002"),O=r('<p><img src="'+o+'" alt="\u767B\u5165"></p><blockquote><p>\u73B0\u4EE3\u6D4F\u89C8\u5668\u53EF\u80FD\u4F1A\u5F3A\u5236\u4F7F\u7528 https \u94FE\u63A5\uFF0C\u53EF\u53C2\u8003 <a href="#%E9%85%8D%E7%BD%AE-ssl-https">\u914D\u7F6E &gt; \u914D\u7F6E SSL\uFF08https\uFF09</a>\u6216\u6682\u65F6\u4F7F\u7528 IE \u6D4F\u89C8\u5668\u3002</p></blockquote><p>\u53C2\u8003 <a href="#%E9%85%8D%E7%BD%AE%E7%AE%A1%E7%90%86%E5%91%98%E8%B4%A6%E6%88%B7">\u914D\u7F6E &gt; \u914D\u7F6E\u7BA1\u7406\u5458\u8D26\u6237</a></p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u914D\u7F6E\u7BA1\u7406\u5458\u8D26\u6237" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7BA1\u7406\u5458\u8D26\u6237" aria-hidden="true">#</a> \u914D\u7F6E\u7BA1\u7406\u5458\u8D26\u6237</h3>',5),U=r(`<p>\u6DFB\u52A0\u7528\u6237\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmqctl add_user <span class="token operator">&lt;</span>\u7528\u6237\u540D<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u5BC6\u7801<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),W={href:"https://www.rabbitmq.com/rabbitmqctl.8.html#add_user",target:"_blank",rel:"noopener noreferrer"},G=s("\u67E5\u770B "),H=n("code",null,"rabbitmqctl add_user",-1),K=s(" \u547D\u4EE4"),z=r(`<p>\u6DFB\u52A0\u7528\u6237\u6807\u7B7E\uFF1A</p><ul><li>none \u65E0\u6807\u7B7E</li><li>management \u7BA1\u7406\u5458</li><li>monitoring \u76D1\u63A7\u5458</li><li>administrator \u8D85\u7EA7\u7BA1\u7406\u5458</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmqctl set_user_tags <span class="token operator">&lt;</span>\u7528\u6237\u540D<span class="token operator">&gt;</span> administrator
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,3),J={href:"https://www.rabbitmq.com/rabbitmqctl.8.html#set_user_tags",target:"_blank",rel:"noopener noreferrer"},X=s("\u67E5\u770B "),Y=n("code",null,"rabbitmqctl set_user_tags",-1),Z=s(" \u547D\u4EE4"),$=r(`<p>\u8D4B\u4E88\u6240\u6709\u6743\u9650\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmqctl set_permissions -p / <span class="token operator">&lt;</span>\u7528\u6237\u540D<span class="token operator">&gt;</span> <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span> <span class="token string">&quot;.*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),nn={href:"https://www.rabbitmq.com/rabbitmqctl.8.html#add_user",target:"_blank",rel:"noopener noreferrer"},sn=s("\u67E5\u770B "),an=n("code",null,"rabbitmqctl set_permissions",-1),en=s(" \u547D\u4EE4"),rn=n("h2",{id:"\u914D\u7F6E-ssl-https",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u914D\u7F6E-ssl-https","aria-hidden":"true"},"#"),s(" \u914D\u7F6E SSL\uFF08https\uFF09")],-1),tn=s("\u5EFA\u8BAE\u53C2\u8003\u5B98\u65B9\u6587\u6863 "),ln={href:"https://www.rabbitmq.com/ssl.html",target:"_blank",rel:"noopener noreferrer"},bn=s("TLS \u652F\u6301\uFF08\u82F1\u6587\uFF09"),pn=n("h2",{id:"\u5E38\u7528\u6307\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5E38\u7528\u6307\u4EE4","aria-hidden":"true"},"#"),s(" \u5E38\u7528\u6307\u4EE4")],-1),on={class:"custom-container tip"},cn=n("p",{class:"custom-container-title"},"TIP",-1),mn={href:"https://www.rabbitmq.com/manpages.html",target:"_blank",rel:"noopener noreferrer"},un=s("RebbitMQ \u624B\u518C\u9875\u9762"),dn=r(`<h3 id="rabbitmqctl-status" tabindex="-1"><a class="header-anchor" href="#rabbitmqctl-status" aria-hidden="true">#</a> <code>rabbitmqctl status</code></h3><p>\u67E5\u8BE2\u5F53\u524D RabbitMQ \u72B6\u6001</p><div class="language-textStatus ext-textStatus line-numbers-mode"><pre class="language-textStatus"><code>Runtime

OS PID: 457
OS: Linux
Uptime (seconds): 178
Is under maintenance?: false
RabbitMQ version: 3.8.11
Node name: rabbit@VM-0-5-debian
Erlang configuration: Erlang/OTP 23 [erts-11.1.5] [source] [64-bit] [smp:1:1] [ds:1:1:10] [async-threads:1] [hipe]
Erlang processes: 441 used, 1048576 limit
Scheduler run queue: 1
Cluster heartbeat timeout (net_ticktime): 60

Plugins

Enabled plugin file: /etc/rabbitmq/enabled_plugins
Enabled plugins:

 * rabbitmq_management
 * amqp_client
 * rabbitmq_web_dispatch
 * cowboy
 * cowlib
 * rabbitmq_management_agent

Data directory

Node data directory: /var/lib/rabbitmq/mnesia/rabbit@VM-0-5-debian
Raft data directory: /var/lib/rabbitmq/mnesia/rabbit@VM-0-5-debian/quorum/rabbit@VM-0-5-debian

Config files


Log file(s)

 * /var/log/rabbitmq/rabbit@VM-0-5-debian.log
 * /var/log/rabbitmq/rabbit@VM-0-5-debian_upgrade.log

Alarms

(none)

Memory

Total memory used: 0.0965 gb
Calculation strategy: rss
Memory high watermark setting: 0.4 of available memory, computed to: 0.3642 gb

code: 0.033 gb (34.25 %)
other_proc: 0.0319 gb (33.06 %)
other_system: 0.0126 gb (13.05 %)
allocated_unused: 0.0066 gb (6.87 %)
reserved_unallocated: 0.0057 gb (5.93 %)
other_ets: 0.0033 gb (3.43 %)
atom: 0.0015 gb (1.51 %)
plugins: 0.0013 gb (1.39 %)
mgmt_db: 0.0002 gb (0.16 %)
binary: 0.0001 gb (0.14 %)
mnesia: 0.0001 gb (0.09 %)
metrics: 0.0001 gb (0.07 %)
msg_index: 0.0 gb (0.03 %)
quorum_ets: 0.0 gb (0.02 %)
connection_other: 0.0 gb (0.0 %)
connection_channels: 0.0 gb (0.0 %)
connection_readers: 0.0 gb (0.0 %)
connection_writers: 0.0 gb (0.0 %)
queue_procs: 0.0 gb (0.0 %)
queue_slave_procs: 0.0 gb (0.0 %)
quorum_queue_procs: 0.0 gb (0.0 %)

File Descriptors

Total: 2, limit: 32671
Sockets: 0, limit: 29401

Free Disk Space

Low free disk space watermark: 0.05 gb
Free disk space: 45.1227 gb

Totals

Connection count: 0
Queue count: 0
Virtual host count: 1

Listeners

Interface: [::], port: 15672, protocol: http, purpose: HTTP API
Interface: [::], port: 25672, protocol: clustering, purpose: inter-node and CLI tool communication
Interface: [::], port: 5672, protocol: amqp, purpose: AMQP 0-9-1 and AMQP 1.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h3 id="rabbitmq-plugins-list" tabindex="-1"><a class="header-anchor" href="#rabbitmq-plugins-list" aria-hidden="true">#</a> <code>rabbitmq-plugins list</code></h3><p>\u67E5\u8BE2\u5F53\u524D\u63D2\u4EF6\u914D\u7F6E/\u72B6\u6001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> \u914D\u7F6E\uFF1AE = \u663E\u793A\u542F\u7528\uFF1Be = \u9690\u5F0F\u542F\u7528
 | \u72B6\u6001\uFF1A* = \u8FD0\u884C\u4E8E rabbit@VM-0-5-debian
 |/
[e*] amqp_client                       3.6.6
[  ] cowboy                            1.0.3
[  ] cowlib                            1.0.1
[e*] mochiweb                          2.13.1
[  ] rabbitmq_amqp1_0                  3.6.6
[  ] rabbitmq_auth_backend_ldap        3.6.6
[  ] rabbitmq_auth_mechanism_ssl       3.6.6
[  ] rabbitmq_consistent_hash_exchange 3.6.6
[  ] rabbitmq_event_exchange           3.6.6
[  ] rabbitmq_federation               3.6.6
[  ] rabbitmq_federation_management    3.6.6
[  ] rabbitmq_jms_topic_exchange       3.6.6
[E*] rabbitmq_management               3.6.6
[e*] rabbitmq_management_agent         3.6.6
[  ] rabbitmq_management_visualiser    3.6.6
[  ] rabbitmq_mqtt                     3.6.6
[  ] rabbitmq_recent_history_exchange  1.2.1
[  ] rabbitmq_sharding                 0.1.0
[  ] rabbitmq_shovel                   3.6.6
[  ] rabbitmq_shovel_management        3.6.6
[  ] rabbitmq_stomp                    3.6.6
[  ] rabbitmq_top                      3.6.6
[  ] rabbitmq_tracing                  3.6.6
[  ] rabbitmq_trust_store              3.6.6
[e*] rabbitmq_web_dispatch             3.6.6
[  ] rabbitmq_web_stomp                3.6.6
[  ] rabbitmq_web_stomp_examples       3.6.6
[  ] sockjs                            0.3.4
[e*] webmachine                        1.10.3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,6);function _n(hn,gn){const a=l("ExternalLinkIcon");return b(),i(p,null,[m,n("div",u,[d,n("p",null,[_,n("a",h,[g,e(a)]),q,n("a",f,[v,e(a)]),k]),n("p",null,[n("a",w,[x,e(a)])])]),E,M,y,n("ul",null,[n("li",null,[n("a",Q,[B,e(a)])]),n("li",null,[n("a",R,[S,e(a)])])]),V,I,n("ul",null,[n("li",null,[n("a",L,[A,e(a)])]),n("li",null,[n("a",D,[P,e(a)])])]),T,n("p",null,[C,n("a",F,[N,e(a)]),j]),O,n("ol",null,[n("li",null,[U,n("p",null,[n("a",W,[G,H,K,e(a)])])]),n("li",null,[z,n("p",null,[n("a",J,[X,Y,Z,e(a)])])]),n("li",null,[$,n("p",null,[n("a",nn,[sn,an,en,e(a)])])])]),rn,n("p",null,[tn,n("a",ln,[bn,e(a)])]),pn,n("div",on,[cn,n("p",null,[n("a",mn,[un,e(a)])])]),dn],64)}var fn=t(c,[["render",_n],["__file","index.html.vue"]]);export{fn as default};
