import{_ as i,r,o as c,c as p,a as s,b as e,F as b,e as l,d as n}from"./app.bef272a2.js";const o={},d=l(`<h1 id="samba-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#samba-\u670D\u52A1" aria-hidden="true">#</a> Samba \u670D\u52A1</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> samba samba-client <span class="token comment"># \u5B89\u88C5</span>
<span class="token function">sudo</span> systemctl start smb.service <span class="token comment"># \u542F\u52A8</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> smb.service <span class="token comment"># \u5F00\u673A\u542F\u52A8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u672C\u5730\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u914D\u7F6E" aria-hidden="true">#</a> \u672C\u5730\u914D\u7F6E</h3><ol><li><p>\u521B\u5EFA\u672C\u5730\u7528\u6237\u5E10\u6237</p><ul><li><p>\u4E34\u65F6\u5207\u6362\u5230 root \u8D26\u53F7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">su</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u6DFB\u52A0 Linux \u4E3B\u673A\u7528\u6237\u7EC4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">groupadd</span> samba
<span class="token function">groupadd</span> jwc
<span class="token function">groupadd</span> zsb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p>\u6DFB\u52A0 Linux \u4E3B\u673A\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">useradd</span> -M -g samba -s /sbin/nologin smb
<span class="token function">useradd</span> -M -g jwc -G samba -s /sbin/nologin cici
<span class="token function">useradd</span> -M -g jwc -G samba -s /sbin/nologin vega
<span class="token function">useradd</span> -M -g zsb -G samba -s /sbin/nologin lily
<span class="token function">useradd</span> -M -g zsb -G samba -s /sbin/nologin lisa
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>\u5C06\u8D26\u6237\u6DFB\u52A0\u5230 Samba \u6570\u636E\u5E93\uFF1B\u5BC6\u7801\u8BBE\u4E3A <code>2020Netw@rk</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>smbpasswd -a smb
smbpasswd -a cici
smbpasswd -a vega
smbpasswd -a lily
smbpasswd -a lisa
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ul></li><li><p>\u5EFA\u7ACB\u5171\u4EAB\u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> -p /share/public /share/jwc /share/zsb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u4FEE\u6539\u5171\u4EAB\u76EE\u5F55\u7EC4\u6743\u9650\uFF1A</p><ul><li><p>\u4FEE\u6539\u6587\u4EF6\u5939\u6240\u6709\u7EC4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chgrp</span> -R samba /share/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u4FEE\u6539\u6587\u4EF6\u5939\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">2775</span> /share/public/
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">2770</span> /share/jwc/ /share/zsb/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul></li></ol><h3 id="samba-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#samba-\u914D\u7F6E" aria-hidden="true">#</a> Samba \u914D\u7F6E</h3><ol><li><p>\u5907\u4EFD\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/samba/
<span class="token function">sudo</span> <span class="token function">mv</span> smb.conf smb.conf.bak
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6</p><ul><li><p>\u5728 <code>/etc/samba/</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>smb.conf</code> \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>[global]
        workgroup = WORKGROUP
        security = user
        include = /etc/samba/%G.smb.conf

        passdb backend = tdbsam

[public]
        comment = \u516C\u5171\u6587\u4EF6\u5939
        path = /share/public
        public = yes
        read only = yes
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p>\u5728 <code>/etc/samba/</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>jwc.smb.conf</code> \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>[jwc]
      comment = \u6559\u52A1\u5904
      path = /share/jwc
      browseable = yes
      vaild users = @jwc
      write list = @jwc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>\u5728 <code>/etc/samba/</code> \u76EE\u5F55\u4E0B\u65B0\u5EFA <code>zsb.smb.conf</code> \u6587\u4EF6\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>[zsb]
        comment = \u62DB\u751F\u529E
        path = /share/zsb
        browseable = yes
        vaild users = @zsb
        write list = @zsb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul></li><li><p>\u91CD\u542F Samba \u670D\u52A1\u4F7F\u914D\u7F6E\u751F\u6548\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart smb.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol>`,8),t=s("p",null,"\u53C2\u8003\uFF1A",-1),u=s("li",null,[n("\u53EF\u4EE5\u4F7F\u7528 "),s("code",null,"man smb.conf"),n(" \u6307\u4EE4\u67E5\u770B\u8BE6\u7EC6\u914D\u7F6E\u65B9\u6CD5")],-1),m={href:"https://wiki.samba.org/index.php/Main_Page",target:"_blank",rel:"noopener noreferrer"},h=n("Smaba Wiki (en)"),g={href:"https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Standalone_Server",target:"_blank",rel:"noopener noreferrer"},v=n("\u5C06 Samba \u8BBE\u7F6E\u4E3A\u72EC\u7ACB\u670D\u52A1\u5668 (en)"),k={href:"https://wiki.samba.org/index.php/Setting_up_a_Share_Using_Windows_ACLs",target:"_blank",rel:"noopener noreferrer"},f=n("\u4F7F\u7528 Windows ACL \u8BBE\u7F6E\u5171\u4EAB (en)"),_={href:"https://www.cnblogs.com/kevingrace/p/8662088.html",target:"_blank",rel:"noopener noreferrer"},x=n("Samba\u670D\u52A1\u7684\u914D\u7F6E\u603B\u7ED3 - \u6563\u5C3D\u6D6E\u534E - \u535A\u5BA2\u56ED"),w={href:"https://www.cnblogs.com/fatt/p/5856892.html",target:"_blank",rel:"noopener noreferrer"},S=n("Linux Samba\u670D\u52A1\u4E3B\u914D\u6587\u4EF6smb.conf\u4E2D\u6587\u8BE6\u89E3"),y={href:"http://linux.vbird.org/linux_basic/0410accountmanager.php",target:"_blank",rel:"noopener noreferrer"},C=n("\u9CE5\u54E5\u7684 Linux \u79C1\u623F\u83DC -- \u7B2C\u5341\u4E09\u7AE0\u3001Linux \u5E33\u865F\u7BA1\u7406\u8207 ACL \u6B0A\u9650\u8A2D\u5B9A"),j=l(`<h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><ul><li><p>\u5728\u7528\u6237\u76EE\u5F55\u4E0B\u5EFA\u7ACB\u4E00\u4E2A <code>putTest.txt</code> \u6D4B\u8BD5\u6587\u4EF6</p></li><li><p>\u4F7F\u7528\u4EE5\u4E0B\u6307\u4EE4\u67E5\u770B\u670D\u52A1\u5668\u8D44\u6E90</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient -U <span class="token string">&#39;&lt;\u7528\u6237\u540D&gt;&#39;</span>%<span class="token string">&#39;&lt;\u5BC6\u7801&gt;&#39;</span> -L //127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u4F7F\u7528\u4EE5\u4E0B\u6307\u4EE4\u8BBF\u95EE\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient -U <span class="token string">&#39;&lt;\u7528\u6237\u540D&gt;&#39;</span>%<span class="token string">&#39;&lt;\u5BC6\u7801&gt;&#39;</span> //127.0.0.1/<span class="token string">&#39;&lt;\u76EE\u5F55&gt;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><code>smb</code>\uFF08\u666E\u901A\u7528\u6237\uFF09\u7528\u6237\u6D4B\u8BD5\uFF1A</p><ul><li><p>\u53EA\u80FD\u770B\u89C1 <code>public</code> \u6587\u4EF6\u5939\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient -U smb%2020Netw@rk -L //127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> yueplus \u7684\u5BC6\u7801\uFF1A

	Sharename       Type      Comment
	---------       ----      -------
	public          Disk      \u516C\u5171\u6587\u4EF6\u5939
	IPC$            IPC       IPC Service <span class="token punctuation">(</span>Samba <span class="token number">4.10</span>.4<span class="token punctuation">)</span>
Reconnecting with SMB1 <span class="token keyword">for</span> workgroup listing.

	Server               Comment
	---------            -------

	Workgroup            Master
	---------            -------
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li><li><p>\u6D4B\u8BD5\u4E0A\u4F20\u6587\u4EF6\uFF1A</p><p>\u8FDE\u63A5 <code>public</code> \u6587\u4EF6\u5939\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient -U smb%2020Netw@rk //127.0.0.1/public
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8BD5\u56FE\u4E0A\u4F20\u6587\u4EF6\uFF08\u6CA1\u6709\u6743\u9650\u6240\u4EE5\u4E0A\u4F20\u5931\u8D25\uFF0C\u6D4B\u8BD5\u6210\u529F\uFF09\uFF1A</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>smb: \\&gt; put putTest.txt 
NT_STATUS_ACCESS_DENIED opening remote file \\putTest.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul></li><li><p><code>cici</code>\uFF08<code>jwc</code> \u7EC4\uFF09\u7528\u6237\u6D4B\u8BD5\uFF1A</p><ul><li><p>\u80FD\u770B\u89C1 <code>public</code> \u4E0E <code>jwc</code> \u6587\u4EF6\u5939\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient -U cici%2020Netw@rk -L //127.0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	Sharename       Type      Comment
 	---------       ----      -------
 	public          Disk      \u516C\u5171\u6587\u4EF6\u5939
 	IPC$            IPC       IPC Service <span class="token punctuation">(</span>Samba <span class="token number">4.10</span>.4<span class="token punctuation">)</span>
 	jwc             Disk      \u6559\u52A1\u5904
 Reconnecting with SMB1 <span class="token keyword">for</span> workgroup listing.
 
 	Server               Comment
 	---------            -------
 
 	Workgroup            Master
 	---------            -------
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p>\u6D4B\u8BD5\u4E0A\u4F20\u6587\u4EF6\uFF1A</p><p>\u8FDE\u63A5 <code>jwc</code> \u6587\u4EF6\u5939\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> smbclient -U cici%2020Netw@rk //127.0.0.1/jwc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u4F20\u6587\u4EF6\u6D4B\u8BD5\uFF1A</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>smb: \\&gt; put putTest.txt 
putting file putTest.txt as \\putTest.txt (0.0 kb/s) (average 0.0 kb/s)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4F7F\u7528 <code>ls</code> \u6307\u4EE4\u67E5\u770B\u5F53\u524D\u76EE\u5F55\u6587\u4EF6\uFF1A</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>smb: \\&gt; ls
  .                                   D        0  Wed Sep  2 19:41:56 2020
  ..                                  D        0  Sun Aug 30 16:22:03 2020
  putTest.txt                         A        0  Wed Sep  2 19:41:56 2020

		52403200 blocks of size 1024. 48121024 blocks available
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul></li><li><p>\u4F7F\u7528 <code>lily</code> \u6216 <code>lisa</code> \u91CD\u590D\u4EE5\u4E0A\u6D4B\u8BD5\uFF08\u6D4B\u8BD5 <code>zsb</code> \u7EC4\uFF09</p></li></ul>`,2);function L(T,z){const a=r("ExternalLinkIcon");return c(),p(b,null,[d,s("blockquote",null,[t,s("ul",null,[u,s("li",null,[s("a",m,[h,e(a)]),s("ul",null,[s("li",null,[s("a",g,[v,e(a)])]),s("li",null,[s("a",k,[f,e(a)])])])]),s("li",null,[s("a",_,[x,e(a)])]),s("li",null,[s("a",w,[S,e(a)])]),s("li",null,[s("a",y,[C,e(a)])])])]),j],64)}var M=i(o,[["render",L],["__file","index.html.vue"]]);export{M as default};
