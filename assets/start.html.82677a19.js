import{_ as l,r as p,o as i,c,a as n,b as a,w as r,F as d,e as o,d as s}from"./app.bef272a2.js";var u="/assets/system_info.4b719047.jpg",b="/assets/01.9104cc32.png",h="/assets/02.930974b4.png",m="/assets/gitee_add_ssh-key.a40531fd.jpg",_="/assets/03.ebe08a88.png",g="/assets/gitlab-login.67483c9b.jpg",k="/assets/gitlab-signup.10ef6e4e.jpg",f="/assets/gitlab-config.331fcb9b.jpg",v="/assets/PS_error.09638296.png",x="/assets/no_telnet.51b569b0.jpg",y="/assets/add_win10_telnet.1431692a.jpg",S="/assets/add_WS_telnet.92c4f2fa.jpg";const w={},E=o('<h1 id="\u5F00\u59CB\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u9879\u76EE" aria-hidden="true">#</a> \u5F00\u59CB\u9879\u76EE</h1><h2 id="\u5728\u5F00\u59CB\u4E4B\u524D" tabindex="-1"><a class="header-anchor" href="#\u5728\u5F00\u59CB\u4E4B\u524D" aria-hidden="true">#</a> \u5728\u5F00\u59CB\u4E4B\u524D</h2><p>\u786E\u4FDD\u81EA\u5DF1\u7684\u7CFB\u7EDF\u4E3A <strong>Windows 10 \u4E13\u4E1A\u7248</strong></p><p><img src="'+u+'" alt="\u7CFB\u7EDF\u7248\u672C"></p>',4),N=s("\u5982\u679C\u662F "),A=n("strong",null,"\u5BB6\u5EAD\u4E2D\u6587\u7248",-1),D=s(" \u8BF7\u53C2\u8003 "),B=s("\u7CFB\u7EDF\u5B89\u88C5"),C=s(" \u91CD\u88C5\u7CFB\u7EDF\u3002"),G=s("\u7136\u540E\u53EF\u4EE5\u53C2\u8003 "),H=s("\u914D\u7F6E\u8212\u9002\u7684\u684C\u9762\u73AF\u5883"),P=s(" \u3002"),j=n("h2",{id:"\u672C\u5730\u5B89\u88C5-git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u672C\u5730\u5B89\u88C5-git","aria-hidden":"true"},"#"),s(" \u672C\u5730\u5B89\u88C5 Git")],-1),R=n("iframe",{src:"//player.bilibili.com/player.html?aid=98007542&bvid=BV1FE411P7B3&cid=167296411&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%",height:"380px"}}," ",-1),L=s("\u524D\u5F80 "),V={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},F=s("Git \u5B98\u7F51"),I=s(" \u4E0B\u8F7D\u5B89\u88C5\u5305\uFF0C\u4E0B\u4E00\u6B65\u5230\u5E95\u3002"),W={href:"https://git-scm.com/book/zh/v2",target:"_blank",rel:"noopener noreferrer"},Y=s("Git - Book\uFF08\u5B98\u65B9\u6559\u7A0B\uFF09"),M={href:"https://www.runoob.com/git/git-tutorial.html",target:"_blank",rel:"noopener noreferrer"},T=s("Git - \u83DC\u9E1F\u6559\u7A0B"),U=o(`<h3 id="\u914D\u7F6E-git" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-git" aria-hidden="true">#</a> \u914D\u7F6E Git</h3><p>\u684C\u9762\u53F3\u952E\u70B9\u51FB [Git Bash Here]\uFF0C\u8F93\u5165\u4EE5\u4E0B\u6307\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># &quot;username&quot; \u4E3A GitHub \u8D26\u53F7\uFF0C\u7528\u6237\u540D</span>
<span class="token function">git</span> config --global user.name <span class="token string">&quot;username&quot;</span>

<span class="token comment"># xxxxxxxxxx@mail.com \u4E3A GitHub \u8D26\u53F7\uFF0C\u6CE8\u518C\u65F6\u7684\u7528\u7684\u90AE\u7BB1</span>
<span class="token function">git</span> config --global user.email xxxxxxxxxx@mail.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u751F\u6210\u81EA\u5DF1\u7684-ssh-key" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u81EA\u5DF1\u7684-ssh-key" aria-hidden="true">#</a> \u751F\u6210\u81EA\u5DF1\u7684 SSH Key</h3><p>Git Bash \u7EC8\u7AEF\u4E2D\uFF0C\u8F93\u5165 <code>ssh-keygen</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ ssh-keygen
Generating public/private rsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/c/Users/Yue_p/.ssh/id_rsa<span class="token punctuation">)</span>: <span class="token comment"># \u76F4\u63A5\u56DE\u8F66</span>
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>:    <span class="token comment"># \u76F4\u63A5\u56DE\u8F66</span>
Enter same passphrase again:                   <span class="token comment"># \u76F4\u63A5\u56DE\u8F66</span>
Your identification has been saved <span class="token keyword">in</span> <span class="token function">yes</span>
Your public key has been saved <span class="token keyword">in</span> yes.pub
The key fingerprint is:
SHA256:xuvPaGeJuufX6k4oiufALDHD7PCfZxkfXQxjCBElkCA Yue_p@DESKTOP-SQLFD1T
The key&#39;s randomart image is:
+---<span class="token punctuation">[</span>RSA <span class="token number">3072</span><span class="token punctuation">]</span>----+
<span class="token operator">|</span>E <span class="token punctuation">..</span>.o<span class="token operator">==</span><span class="token punctuation">..</span>       <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token builtin class-name">.</span>  <span class="token builtin class-name">.</span>  <span class="token punctuation">..</span> +      <span class="token operator">|</span>
<span class="token operator">|</span>         <span class="token builtin class-name">.</span> +     <span class="token operator">|</span>
<span class="token operator">|</span>o      <span class="token builtin class-name">.</span>    o    <span class="token operator">|</span>
<span class="token operator">|</span><span class="token operator">=</span>o      S. <span class="token builtin class-name">.</span>     <span class="token operator">|</span>
<span class="token operator">|</span>oB    <span class="token punctuation">..</span>.o.      <span class="token operator">|</span>
<span class="token operator">|</span><span class="token punctuation">..</span><span class="token operator">=</span>   .+oo.o     <span class="token operator">|</span>
<span class="token operator">|</span> <span class="token builtin class-name">.</span> +.o+o<span class="token operator">=</span><span class="token operator">+=</span> <span class="token builtin class-name">.</span>    <span class="token operator">|</span>
<span class="token operator">|</span>  .o<span class="token operator">=</span>oo*+B*.     <span class="token operator">|</span>
+----<span class="token punctuation">[</span>SHA256<span class="token punctuation">]</span>-----+
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u73B0\u5728\uFF0C<code>&lt;\u4E2A\u4EBA\u6587\u4EF6\u5939&gt;/.ssh/</code> \u4E2D\u5E94\u8BE5\u6709 <code>id_rsa</code>\uFF08\u79C1\u94A5\uFF09\u4E0E <code>id_rsa.pub</code>\uFF08\u516C\u94A5\uFF09\u4E24\u4E2A\u6587\u4EF6\u3002</p><h2 id="\u6CE8\u518C-github-gitee-\u8D26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C-github-gitee-\u8D26\u53F7" aria-hidden="true">#</a> \u6CE8\u518C GitHub/Gitee \u8D26\u53F7</h2>`,8),K=s("\u524D\u5F80"),q=n("span",{style:{color:"black","background-color":"black"}},[n("s",null,"\u5168\u7403\u6700\u5927\u7684\u540C\u6027\u4EA4\u53CB\u7F51\u7AD9")],-1),z=s("\u9762\u5411\u5F00\u6E90\u53CA\u79C1\u6709\u8F6F\u4EF6\u9879\u76EE\u7684\u6258\u7BA1\u5E73\u53F0 "),J={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},O=s("GitHub"),Q=s(" \u6CE8\u518C\u5E76\u767B\u5165\u8D26\u53F7\u3002"),X=s("\u524D\u5F80"),$=n("span",{style:{color:"black","background-color":"black"}},[n("s",null,"\u5168\u56FD\u6700\u5927\u7684\u540C\u6027\u4EA4\u53CB\u7F51\u7AD9")],-1),Z=s("\u4E91\u7AEF\u8F6F\u4EF6\u5F00\u53D1\u534F\u4F5C\u5E73\u53F0 "),nn={href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"},sn=s("Gitee"),an=s(" \u6CE8\u518C\u5E76\u767B\u5165\u8D26\u53F7\u3002"),en=n("p",null,"\u524D\u5F80\u672C\u9879\u76EE\uFF1A",-1),tn=s("GitHub \u5730\u5740 "),rn={href:"https://github.com/Yue-plus/NetNote",target:"_blank",rel:"noopener noreferrer"},on=s("https://github.com/Yue-plus/NetNote"),pn=s("\uFF0C\u70B9\u51FB Watch\u3001Star\u3001Fork\u3002"),ln=s("Gitee \u5730\u5740 "),cn={href:"https://gitee.com/yue_plus/NetNote",target:"_blank",rel:"noopener noreferrer"},dn=s("https://gitee.com/yue_plus/NetNote"),un=s("\uFF0C\u70B9\u51FB Watch\u3001Star\u3001Fork\u3002"),bn=n("h2",{id:"\u6DFB\u52A0-ssh-key",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6DFB\u52A0-ssh-key","aria-hidden":"true"},"#"),s(" \u6DFB\u52A0 SSH Key")],-1),hn=n("p",null,[s("\u7528 "),n("strong",null,"\u8BB0\u4E8B\u672C\u6253\u5F00"),s(),n("code",null,"<\u4E2A\u4EBA\u6587\u4EF6\u5939>/.ssh/id_rsa.pub"),s(" \u6587\u4EF6\u3002")],-1),mn=n("h3",{id:"github",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),s(" GitHub")],-1),_n=s("\u6253\u5F00 "),gn={href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},kn=s("GitHub.com"),fn=s(" \u53C2\u7167\u4EE5\u4E0B\u622A\u56FE\u6DFB\u52A0 SSH Key\uFF1A"),vn=n("p",null,[n("img",{src:b,alt:"\u6DFB\u52A0 SSH Key 01"})],-1),xn=n("p",null,[n("img",{src:h,alt:"\u6DFB\u52A0 SSH Key 02"})],-1),yn=n("p",null,[s("\u6700\u540E\u70B9\u51FB "),n("strong",null,"[Add SSH Key]")],-1),Sn=n("h3",{id:"gitee",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#gitee","aria-hidden":"true"},"#"),s(" Gitee")],-1),wn=s("\u6253\u5F00 "),En={href:"https://gitee.com/profile/sshkeys",target:"_blank",rel:"noopener noreferrer"},Nn=s("\u8BBE\u7F6E -> SSH \u516C\u94A5"),An=n("p",null,[n("img",{src:m,alt:"\u6DFB\u52A0 SSH Key"})],-1),Dn=n("h2",{id:"\u672C\u5730\u5B89\u88C5-nodejs",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u672C\u5730\u5B89\u88C5-nodejs","aria-hidden":"true"},"#"),s(" \u672C\u5730\u5B89\u88C5 NodeJS")],-1),Bn=s("\u524D\u5F80 "),Cn={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},Gn=s("NodeJS \u5B98\u7F51"),Hn=s(" \u4E0B\u8F7D\u5B89\u88C5\u5305\uFF0C\u4E0B\u4E00\u6B65\u5230\u5E95\u3002"),Pn=o(`<h3 id="\u5B89\u88C5-cnpm" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-cnpm" aria-hidden="true">#</a> \u5B89\u88C5 <code>cnpm</code></h3><p>\u7531\u4E8E\u56FD\u5185\u4F17\u6240\u5468\u77E5\u7684\u7F51\u7EDC\u539F\u56E0\uFF0C\u63A8\u8350\u5B89\u88C5 <code>cnpm</code>\uFF0C\u5728\u5B89\u88C5\u4F9D\u8D56\u65F6\u4EE3\u66FF <code>npm</code> \u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">npm</span> <span class="token function">install</span> -g cnpm --registry<span class="token operator">=</span>https://registry.npmmirror.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u540E\u53EF\u4F7F\u7528 <code>cnpm -v</code> \u9A8C\u8BC1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ cnpm -v
cnpm@7.0.0 <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Yue_p<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>npm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>cnpm<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>parse_argv.js<span class="token punctuation">)</span>
npm@6.14.15 <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Yue_p<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>npm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>cnpm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>npm<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>npm.js<span class="token punctuation">)</span>
node@16.8.0 <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs<span class="token punctuation">\\</span>node.exe<span class="token punctuation">)</span>
npminstall@5.0.2 <span class="token punctuation">(</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Yue_p<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>npm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>cnpm<span class="token punctuation">\\</span>node_modules<span class="token punctuation">\\</span>npminstall<span class="token punctuation">\\</span>lib<span class="token punctuation">\\</span>index.js<span class="token punctuation">)</span>
<span class="token assign-left variable">prefix</span><span class="token operator">=</span>C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>Yue_p<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>npm
win32 x64 <span class="token number">10.0</span>.19043
<span class="token assign-left variable">registry</span><span class="token operator">=</span>https://registry.nlark.com
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u672C\u5730\u5B89\u88C5-yarn" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u5B89\u88C5-yarn" aria-hidden="true">#</a> \u672C\u5730\u5B89\u88C5 Yarn</h2>`,6),jn=s("\u53EF\u53C2\u8003 "),Rn={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},Ln=s("Yarn \u5B98\u7F51"),Vn=s("\u3002"),Fn=o(`<p>\u5728 <a href="#%E6%9C%AC%E5%9C%B0%E5%AE%89%E8%A3%85-nodejs">\u672C\u5730\u5B89\u88C5 NodeJS</a> \u540E\uFF0C\u5728\u7EC8\u7AEF\u8F93\u5165\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> -g <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53EF\u4F7F\u7528 <code>yarn -v</code> \u9A8C\u8BC1\u5B89\u88C5\uFF0C\u5982\u679C\u8F93\u51FA\u7248\u672C\u53F7\u5219\u5B89\u88C5\u6210\u529F\u3002</p><h3 id="\u5B89\u88C5-tyarn" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-tyarn" aria-hidden="true">#</a> \u5B89\u88C5 <code>tyarn</code></h3><p>\u7531\u4E8E\u56FD\u5185\u4F17\u6240\u5468\u77E5\u7684\u7F51\u7EDC\u539F\u56E0\uFF0C\u63A8\u8350\u5B89\u88C5 <code>tyarn</code>\uFF0C\u5728\u5B89\u88C5\u4F9D\u8D56\u65F6\u4EE3\u66FF <code>yarn</code> \u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token function">yarn</span> tyarn -g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u62C9\u53D6\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6\u9879\u76EE" aria-hidden="true">#</a> \u62C9\u53D6\u9879\u76EE</h2><p>\u627E\u4E00\u4E2A\u5408\u9002\u7684\u8DEF\u5F84\uFF0C\u6267\u884C\u4EE5\u4E0B\u6307\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># GitHub \u514B\u9686\u4ED3\u5E93\uFF08\u6CE8\u610F\u66FF\u6362\u4E3A\u81EA\u5DF1\u7684\u7528\u6237\u540D\uFF1A&lt;username&gt;\uFF09</span>
<span class="token function">git</span> clone git@github.com:<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/NetNote.git

<span class="token comment"># Gitee \u514B\u9686\u4ED3\u5E93\uFF08\u6CE8\u610F\u66FF\u6362\u4E3A\u81EA\u5DF1\u7684\u7528\u6237\u540D\uFF1A&lt;username&gt;\uFF09</span>
<span class="token function">git</span> clone git@gitee.com:<span class="token operator">&lt;</span>username<span class="token operator">&gt;</span>/NetNote.git

<span class="token builtin class-name">cd</span> NetNote

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u8FD0\u884C\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a> \u8FD0\u884C\u9879\u76EE</h2><p>\u5728\u9879\u76EE\u8DEF\u5F84\u4E0B\u6267\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yarn docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,12),In=s("\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF1A"),Wn={href:"http://127.0.0.1:8080/",target:"_blank",rel:"noopener noreferrer"},Yn=s("http://127.0.0.1:8080/"),Mn=s("\u66F4\u591A\u914D\u7F6E\u53EF\u53C2\u8003 "),Tn={href:"https://vuepress2.netlify.app/zh/guide/",target:"_blank",rel:"noopener noreferrer"},Un=s("VuePress2 \u4ECB\u7ECD"),Kn=n("h2",{id:"\u53C2\u4E0E\u9879\u76EE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u4E0E\u9879\u76EE","aria-hidden":"true"},"#"),s(" \u53C2\u4E0E\u9879\u76EE")],-1),qn=s("\u672C\u9879\u76EE\u4F7F\u7528\u4E86 "),zn={href:"https://vuepress2.netlify.app/zh/",target:"_blank",rel:"noopener noreferrer"},Jn=s("VuePress2"),On=s(" \u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\uFF0C\u53C2\u8003 "),Qn=n("a",{href:"#%E9%99%84-%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84"},"\u9879\u76EE\u76EE\u5F55\u7ED3\u6784",-1),Xn=s(" \u4F7F\u7528 "),$n=s("Markdown \u8BED\u6CD5"),Zn=s(" \u6765\u7F16\u5199/\u4FEE\u6539 "),ns=n("code",null,".md",-1),ss=s(" \u6587\u4EF6\u3002"),as=s("\u65B0\u5EFA\u9875\u9762\u8BF7\u53C2\u8003 "),es={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#%E5%9F%BA%E7%A1%80%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},ts=s("\u9ED8\u8BA4\u4E3B\u9898\u914D\u7F6E"),rs=s(" \u4FEE\u6539\u9879\u76EE\u5185\u7684 "),os=n("code",null,"/docs/.vuepress/config.ts",-1),ps=s(" \u6587\u4EF6\u3002"),ls=s("\u53C2\u8003 "),is={href:"https://mazhuang.org/wiki/chinese-copywriting-guidelines/",target:"_blank",rel:"noopener noreferrer"},cs=s("\u4E2D\u6587\u6587\u6848\u6392\u7248\u6307\u5317\uFF08\u7B80\u4F53\u4E2D\u6587\u7248\uFF09"),ds=n("p",null,"\u5F53\u524D\u8BA1\u5212\u4EFB\u52A1\uFF1A",-1),us=s("\u7F51\u7EDC\u642D\u5EFA "),bs=s("\u64CD\u4F5C\u624B\u518C"),hs=s("\u547D\u4EE4\u624B\u518C"),ms=s("\u7CFB\u7EDF\u670D\u52A1 "),_s=s("\u4E91\u5E73\u53F0\u4E0E\u865A\u62DF\u673A "),gs=s("Hyper-V"),ks=s("Windows Server"),fs=s("Linux"),vs=o('<h2 id="\u83B7\u53D6\u8D44\u6E90" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u8D44\u6E90" aria-hidden="true">#</a> \u83B7\u53D6\u8D44\u6E90</h2><h3 id="\u5171\u4EAB\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u5171\u4EAB\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u5171\u4EAB\u6587\u4EF6\u5939</h3><p>\u5728\u57F9\u8BAD\u5BA4\u5185\u7F51\u73AF\u5883\uFF0C\u8BA1\u7B97\u673A\u53F3\u952E\uFF0C<strong>\u6DFB\u52A0\u7F51\u7EDC\u4F4D\u7F6E</strong>\uFF1A</p><ul><li><code>\\\\ws22\\Yue_plus \u7684\u5171\u4EAB</code></li><li><code>\\\\ws22\\\u516C\u5171\u6587\u4EF6\u5939</code></li></ul><p><img src="'+_+'" alt="\u6DFB\u52A0\u7F51\u7EDC\u4F4D\u7F6E\u5411\u5BFC"></p><p>\u7528\u6237\u540D\uFF1A<code>Administrator</code></p><p>\u5BC6\u7801\uFF1A<span style="color:black;background-color:black;">Abcd1234</span></p><h3 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> GitLab</h3>',8),xs=s("\u8BBF\u95EE\uFF1A"),ys={href:"https://gitlab.ws22/",target:"_blank",rel:"noopener noreferrer"},Ss=s("https://gitlab.ws22/"),ws=o('<p><img src="'+g+'" alt=""><img src="'+k+'" alt=""></p><p>\u901A\u77E5 @Yue_plus \u6279\u51C6\u7533\u8BF7\u540E\u5373\u53EF\u767B\u5165\u3002</p><p>\u70B9\u51FB\u53F3\u4E0A\u89D2\u5934\u50CF\uFF0C\u4FEE\u6539 <strong>\u504F\u597D\u8BBE\u7F6E</strong>\uFF0C\u8BBE\u7F6E\u672C\u5730\u5316\u8BED\u8A00\uFF0C\u9009\u62E9\u5B8C\u6BD5\u540E\u5237\u65B0\u6D4F\u89C8\u5668\u751F\u6548\uFF1A</p><p><img src="'+f+`" alt=""></p><h2 id="\u90E8\u7F72\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72\u9879\u76EE" aria-hidden="true">#</a> \u90E8\u7F72\u9879\u76EE</h2><p>\u590D\u5236 <code>deploy.sh.examples</code> \u6587\u4EF6\uFF0C\u5E76\u91CD\u547D\u540D\u4E3A <code>deploy.sh</code> \u5E76\u9002\u5F53\u4FEE\u6539 <code>&lt;USERNAME&gt;/&lt;REPO&gt;</code>\u3002</p><h2 id="\u9644-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9644-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u9644\uFF1A\u9879\u76EE\u76EE\u5F55\u7ED3\u6784</h2><p>\u5F53\u524D\u6240\u6709\u6587\u6863\u90FD\u4FDD\u5B58\u5728 <code>NetNote\\docs\\</code> \u6587\u4EF6\u5939\u5185\u3002</p><p>\u65B0\u5EFA\u76EE\u5F55\u9700\u4FEE\u6539 <code>NetNote\\docs\\.vuepress\\config.ts</code> \u6587\u4EF6\u3002</p><p>\u516C\u5171\u56FE\u7247\u7EDF\u4E00\u653E\u5728 <code>NetNote\\docs\\.vuepress\\public\\img</code> \u6587\u4EF6\u5939\u5185\u3002</p><p>\u6BCF\u4E2A\u6587\u6863\u90FD\u53EF\u4EE5\u653E\u5728\u72EC\u7ACB\u7684\u6587\u4EF6\u5939\u4E0B\uFF0C\u7EF4\u62A4\u81EA\u5DF1\u7684 <code>img</code> \u6587\u4EF6\u5939\u3002</p><details class="custom-container details"><summary>\u76EE\u5F55\u7ED3\u6784</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5377\u5E8F\u5217\u53F7\u4E3A 6010-F505
D:.
\u251C\u2500.vuepress/
\u251C\u2500coding
\u2502  \u251C\u2500Docker/
\u2502  \u251C\u2500Java
\u2502  \u2502  \u251C\u2500Gradle/
\u2502  \u251C\u2500MariaDB/
\u2502  \u251C\u2500PostgreSQL/
\u2502  \u251C\u2500Python/
\u2502  \u251C\u2500RabbitMQ/
\u2502  \u251C\u2500Redis/
\u2502  \u251C\u2500Spring
\u2502  \u2502  \u2514\u2500Framework
\u2502  \u2502      \u2514\u2500WebServlet/
\u2502  \u2514\u2500Web/
\u251C\u2500game/
\u251C\u2500hack
\u2502  \u2514\u2500base/
\u251C\u2500net
\u2502  \u251C\u250000-Abbreviation/
\u2502  \u251C\u250001-base/
\u2502  \u251C\u2500acap/
\u2502  \u251C\u2500manual
\u2502  \u2502  \u251C\u2500command/
\u2502  \u2502  \u2514\u2500operate/
\u2502  \u251C\u2500router/
\u2502  \u251C\u2500security/
\u2502  \u251C\u2500switch/
\u2502  \u2514\u2500wan/
\u251C\u2500serve
\u2502  \u251C\u2500base
\u2502  \u2502  \u251C\u2500sys_config/
\u2502  \u2502  \u2514\u2500sys_install/
\u2502  \u251C\u2500CentOS
\u2502  \u2502  \u251C\u2500Apache/
\u2502  \u2502  \u251C\u2500Base/
\u2502  \u2502  \u251C\u2500CA/
\u2502  \u2502  \u251C\u2500Chrony/
\u2502  \u2502  \u251C\u2500E-Mail/
\u2502  \u2502  \u251C\u2500firewalld/
\u2502  \u2502  \u251C\u2500MariaDB/
\u2502  \u2502  \u251C\u2500NFS/
\u2502  \u2502  \u251C\u2500NIS/
\u2502  \u2502  \u251C\u2500Pacemaker/
\u2502  \u2502  \u251C\u2500Samba/
\u2502  \u2502  \u251C\u2500Tomcat/
\u2502  \u2502  \u2514\u2500Unbound/
\u2502  \u251C\u2500VM
\u2502  \u2502  \u251C\u2500DCC-CRL1000/
\u2502  \u2502  \u251C\u2500Hyper-V/
\u2502  \u2502  \u251C\u2500VirtualBox/
\u2502  \u2502  \u2514\u2500VMware/
\u2502  \u2514\u2500WS
\u2502      \u251C\u2500AD-CS/
\u2502      \u251C\u2500AD-DS/
\u2502      \u251C\u2500AD-RMS/
\u2502      \u251C\u2500CommonRequirements/
\u2502      \u251C\u2500DFS/
\u2502      \u251C\u2500DNS/
\u2502      \u251C\u2500FailoverCluster/
\u2502      \u251C\u2500FS/
\u2502      \u251C\u2500IIS/
\u2502      \u251C\u2500iSCSI/
\u2502      \u251C\u2500MPIO/
\u2502      \u251C\u2500NLB/
\u2502      \u251C\u2500PS/
\u2502      \u2514\u2500WDS/
\u2514\u2500start
    \u251C\u2500img
    \u251C\u2500use_GitHub/
    \u251C\u2500use_IDEA/
    \u2514\u2500use_VScode/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div></details><h2 id="\u9644-\u7EC8\u7AEF\u8BBE\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u9644-\u7EC8\u7AEF\u8BBE\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> \u9644\uFF1A\u7EC8\u7AEF\u8BBE\u7F6E\u4EE3\u7406</h2><h3 id="git-bash" tabindex="-1"><a class="header-anchor" href="#git-bash" aria-hidden="true">#</a> Git Bash</h3><h4 id="\u8BBE\u7F6E\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u4EE3\u7406" aria-hidden="true">#</a> \u8BBE\u7F6E\u4EE3\u7406</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># http</span>
<span class="token function">git</span> config --global http.proxy http://127.0.0.1:1080
<span class="token function">git</span> config --global https.proxy https://127.0.0.1:1080

<span class="token comment"># socks5</span>
<span class="token function">git</span> config --global http.proxy <span class="token string">&#39;socks5://127.0.0.1:1080&#39;</span>
<span class="token function">git</span> config --global https.proxy <span class="token string">&#39;socks5://127.0.0.1:1080&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u53D6\u6D88\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u4EE3\u7406" aria-hidden="true">#</a> \u53D6\u6D88\u4EE3\u7406</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global --unset http.proxy
<span class="token function">git</span> config --global --unset https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="powershell" tabindex="-1"><a class="header-anchor" href="#powershell" aria-hidden="true">#</a> PowerShell</h3><h4 id="\u8BBE\u7F6E\u4EE3\u7406-1" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u4EE3\u7406-1" aria-hidden="true">#</a> \u8BBE\u7F6E\u4EE3\u7406</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>netsh winhttp <span class="token builtin class-name">set</span> proxy <span class="token number">127.0</span>.0.1:1080
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u53D6\u6D88\u4EE3\u7406-1" tabindex="-1"><a class="header-anchor" href="#\u53D6\u6D88\u4EE3\u7406-1" aria-hidden="true">#</a> \u53D6\u6D88\u4EE3\u7406</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>netsh winhttp reset proxy
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u67E5\u770B\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u4EE3\u7406" aria-hidden="true">#</a> \u67E5\u770B\u4EE3\u7406</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>netsh winhttp show proxy
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u9644-windows-powershell-\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6-\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u884C\u811A\u672C\u3002" tabindex="-1"><a class="header-anchor" href="#\u9644-windows-powershell-\u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6-\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u884C\u811A\u672C\u3002" aria-hidden="true">#</a> \u9644\uFF1AWindows PowerShell \u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u884C\u811A\u672C\u3002</h2><div class="language-ps ext-ps line-numbers-mode"><pre class="language-ps"><code>cnpm : \u65E0\u6CD5\u52A0\u8F7D\u6587\u4EF6 C:\\Users\\Yue_plus\\AppData\\Roaming\\npm\\cnpm.ps1\uFF0C\u56E0\u4E3A\u5728\u6B64\u7CFB\u7EDF\u4E0A\u7981\u6B62\u8FD0\u811A\u672C\u3002
\u6709\u5173\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u9605 https:/go.microsoft.com/fwlink/?LinkID=135170 \u4E2D\u7684 about_Execution_Policies\u3002
\u6240\u5728\u4F4D\u7F6E \u884C:1 \u5B57\u7B26: 1
+ cnpm install
+ ~~~~
    + CategoryInfo          : SecurityError: (:) []\uFF0CPSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="`+v+`" alt="PowerShell \u62A5\u9519"></p><p>\u53C2\u9605 <a href="https:/go.microsoft.com/fwlink/?LinkID=135170">https:/go.microsoft.com/fwlink/?LinkID=135170</a></p><h3 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5\uFF1A</h3><p>\u5148\u4EE5 <strong>\u7BA1\u7406\u5458\u8EAB\u4EFD</strong> \u5728 PowerShell \u4E2D\u8FD0\u884C\u4E00\u4E0B\u6307\u4EE4\uFF1A</p><div class="language-ps ext-ps line-numbers-mode"><pre class="language-ps"><code>set-ExecutionPolicy RemoteSigned
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u5C31\u4E0D\u4F1A\u62A5\u9519\u4E86\u3002</p><h2 id="\u9644-\u6CA1\u6709-telnet-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u9644-\u6CA1\u6709-telnet-\u6307\u4EE4" aria-hidden="true">#</a> \u9644\uFF1A\u6CA1\u6709 <code>telnet</code> \u6307\u4EE4</h2><p><img src="`+x+'" alt="\u6CA1\u6709  \u6307\u4EE4"></p><h3 id="windows-10" tabindex="-1"><a class="header-anchor" href="#windows-10" aria-hidden="true">#</a> Windows 10</h3><p>\u5728 <strong>\u63A7\u5236\u9762\u7248</strong> -&gt; <strong>\u7A0B\u5E8F</strong> -&gt; <strong>\u7A0B\u5E8F\u548C\u529F\u80FD</strong> -&gt; <strong>\u542F\u7528\u6216\u5173\u95ED Windows \u529F\u80FD</strong> \u4E2D\uFF0C\u52FE\u9009 <strong>Telnet \u5BA2\u6237\u7AEF</strong>\uFF1A</p><p><img src="'+y+'" alt="\u542F\u7528\u6216\u5173\u95ED Windows \u529F\u80FD"></p><h3 id="windows-server" tabindex="-1"><a class="header-anchor" href="#windows-server" aria-hidden="true">#</a> Windows Server</h3><p>\u5728 <strong>\u670D\u52A1\u5668\u7BA1\u7406\u5668</strong> -&gt; <strong>\u6DFB\u52A0\u89D2\u8272\u548C\u529F\u80FD</strong> \u4E2D\uFF0C\u6DFB\u52A0 <strong>Telnet Client</strong> \u529F\u80FD\uFF1A</p><p><img src="'+S+`" alt="\u6DFB\u52A0\u670D\u52A1\u5668\u529F\u80FD"></p><h3 id="telnet-\u6307\u4EE4\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#telnet-\u6307\u4EE4\u5E2E\u52A9" aria-hidden="true">#</a> <code>telnet</code> \u6307\u4EE4\u5E2E\u52A9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>telnet [-a][-e escape char][-f log file][-l user][-t term][host [port]]
 -a      \u4F01\u56FE\u81EA\u52A8\u767B\u5F55\u3002\u9664\u4E86\u7528\u5F53\u524D\u5DF2\u767B\u9646\u7684\u7528\u6237\u540D\u4EE5\u5916\uFF0C\u4E0E -l \u9009\u9879\u76F8\u540C\u3002
 -e      \u8DF3\u8FC7\u5B57\u7B26\u6765\u8FDB\u5165 telnet \u5BA2\u6237\u7AEF\u63D0\u793A\u3002
 -f      \u5BA2\u6237\u7AEF\u767B\u5F55\u7684\u6587\u4EF6\u540D
 -l      \u6307\u5B9A\u8FDC\u7A0B\u7CFB\u7EDF\u4E0A\u767B\u5F55\u7528\u7684\u7528\u6237\u540D\u3002
         \u8981\u6C42\u8FDC\u7A0B\u7CFB\u7EDF\u652F\u6301 TELNET ENVIRON \u9009\u9879\u3002
 -t      \u6307\u5B9A\u7EC8\u7AEF\u7C7B\u578B\u3002
         \u652F\u6301\u7684\u7EC8\u7AEF\u7C7B\u578B\u4EC5\u662F: vt100, vt52, ansi \u548C vtnt\u3002
 host    \u6307\u5B9A\u8981\u8FDE\u63A5\u7684\u8FDC\u7A0B\u8BA1\u7B97\u673A\u7684\u4E3B\u673A\u540D\u6216 IP \u5730\u5740\u3002
 port    \u6307\u5B9A\u7AEF\u53E3\u53F7\u6216\u670D\u52A1\u540D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u9644-\u6253\u4E0D\u5F00\u5FAE\u8F6F\u5546\u5E97-\u65E0\u6CD5\u7CFB\u7EDF\u767B\u5165\u5FAE\u8F6F\u8D26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u9644-\u6253\u4E0D\u5F00\u5FAE\u8F6F\u5546\u5E97-\u65E0\u6CD5\u7CFB\u7EDF\u767B\u5165\u5FAE\u8F6F\u8D26\u53F7" aria-hidden="true">#</a> \u9644\uFF1A\u6253\u4E0D\u5F00\u5FAE\u8F6F\u5546\u5E97 / \u65E0\u6CD5\u7CFB\u7EDF\u767B\u5165\u5FAE\u8F6F\u8D26\u53F7</h2><p>\u6253\u4E0D\u5F00\u5FAE\u8F6F\u5546\u5E97\u53EF\u4EE5\u8BD5\u8BD5\u5C06 DNS \u8BBE\u4E3A <code>4.2.2.1</code> \u548C <code>4.2.2.2</code></p>`,45);function Es(Ns,As){const t=p("RouterLink"),e=p("ExternalLinkIcon");return i(),c(d,null,[E,n("p",null,[N,A,D,a(t,{to:"/serve/base/sys_install/"},{default:r(()=>[B]),_:1}),C]),n("p",null,[G,a(t,{to:"/serve/base/sys_config/"},{default:r(()=>[H]),_:1}),P]),j,R,n("p",null,[L,n("a",V,[F,a(e)]),I]),n("blockquote",null,[n("p",null,[n("a",W,[Y,a(e)]),n("a",M,[T,a(e)])])]),U,n("p",null,[K,q,z,n("a",J,[O,a(e)]),Q]),n("p",null,[X,$,Z,n("a",nn,[sn,a(e)]),an]),en,n("ul",null,[n("li",null,[tn,n("a",rn,[on,a(e)]),pn]),n("li",null,[ln,n("a",cn,[dn,a(e)]),un])]),bn,hn,mn,n("p",null,[_n,n("a",gn,[kn,a(e)]),fn]),vn,xn,yn,Sn,n("p",null,[wn,n("a",En,[Nn,a(e)])]),An,Dn,n("p",null,[Bn,n("a",Cn,[Gn,a(e)]),Hn]),Pn,n("p",null,[jn,n("a",Rn,[Ln,a(e)]),Vn]),Fn,n("p",null,[In,n("a",Wn,[Yn,a(e)])]),n("blockquote",null,[n("p",null,[Mn,n("strong",null,[n("a",Tn,[Un,a(e)])])])]),Kn,n("p",null,[qn,n("a",zn,[Jn,a(e)]),On,Qn,Xn,a(t,{to:"/start/markdown.html"},{default:r(()=>[$n]),_:1}),Zn,ns,ss]),n("p",null,[as,n("a",es,[ts,a(e)]),rs,os,ps]),n("p",null,[ls,n("a",is,[cs,a(e)])]),ds,n("ul",null,[n("li",null,[us,n("ul",null,[n("li",null,[a(t,{to:"/net/manual/operate/"},{default:r(()=>[bs]),_:1})]),n("li",null,[a(t,{to:"/net/manual/command/"},{default:r(()=>[hs]),_:1})])])]),n("li",null,[ms,n("ul",null,[n("li",null,[_s,n("ul",null,[n("li",null,[a(t,{to:"/serve/VM/Hyper-V/"},{default:r(()=>[gs]),_:1})])])]),n("li",null,[a(t,{to:"/serve/WS/"},{default:r(()=>[ks]),_:1})]),n("li",null,[a(t,{to:"/serve/Linux/"},{default:r(()=>[fs]),_:1})])])])]),vs,n("p",null,[xs,n("a",ys,[Ss,a(e)])]),ws],64)}var Bs=l(w,[["render",Es],["__file","start.html.vue"]]);export{Bs as default};
