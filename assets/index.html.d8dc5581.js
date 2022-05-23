import{_ as i,r as t,o as l,c,a as s,b as a,w as r,F as p,d as n,e as d}from"./app.bef272a2.js";const u={},h=s("h1",{id:"e-mail-\u7535\u5B50\u90AE\u4EF6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#e-mail-\u7535\u5B50\u90AE\u4EF6","aria-hidden":"true"},"#"),n(" E-Mail\uFF08\u7535\u5B50\u90AE\u4EF6\uFF09")],-1),b=s("h2",{id:"\u94FE\u63A5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u94FE\u63A5","aria-hidden":"true"},"#"),n(" \u94FE\u63A5")],-1),m={href:"https://wiki.archlinux.org/title/Virtual_user_mail_system_with_Postfix,_Dovecot_and_Roundcube_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},_=n("Virtual user mail system with Postfix, Dovecot and Roundcube (\u7B80\u4F53\u4E2D\u6587) - ArchWiki"),k={id:"postfix",tabindex:"-1"},w=s("a",{class:"header-anchor",href:"#postfix","aria-hidden":"true"},"#",-1),f=n(),g=n("Postfix"),v={id:"dovecot",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#dovecot","aria-hidden":"true"},"#",-1),D=n(),y=n("Dovecot"),E=d(`<h2 id="\u65B0\u5EFA\u90AE\u7BB1\u7528\u6237\u4E14\u4E0D\u5141\u8BB8\u672C\u5730\u767B\u5165" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u90AE\u7BB1\u7528\u6237\u4E14\u4E0D\u5141\u8BB8\u672C\u5730\u767B\u5165" aria-hidden="true">#</a> \u65B0\u5EFA\u90AE\u7BB1\u7528\u6237\u4E14\u4E0D\u5141\u8BB8\u672C\u5730\u767B\u5165</h2><p>\u65B0\u5EFA\u4E0D\u53EF\u767B\u5165\u7528\u6237\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">useradd</span> -s /sbin/nologin stu1
<span class="token function">useradd</span> -s /sbin/nologin stu2
<span class="token function">useradd</span> -s /sbin/nologin stu3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4FEE\u6539\u7528\u6237\u5BC6\u7801\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-192-168-30-101 ~<span class="token punctuation">]</span><span class="token comment"># passwd stu1</span>
Changing password <span class="token keyword">for</span> user stu1.
New password: 
BAD PASSWORD: The password is shorter than <span class="token number">8</span> characters
Retype new password: 
passwd: all authentication tokens updated successfully.
<span class="token punctuation">[</span>root@host-192-168-30-101 ~<span class="token punctuation">]</span><span class="token comment"># passwd stu2</span>
Changing password <span class="token keyword">for</span> user stu2.
New password: 
BAD PASSWORD: The password is shorter than <span class="token number">8</span> characters
Retype new password: 
passwd: all authentication tokens updated successfully.
<span class="token punctuation">[</span>root@host-192-168-30-101 ~<span class="token punctuation">]</span><span class="token comment"># passwd stu3</span>
Changing password <span class="token keyword">for</span> user stu3.
New password: 
BAD PASSWORD: The password is shorter than <span class="token number">8</span> characters
Retype new password: 
passwd: all authentication tokens updated successfully.
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,5);function R(A,S){const o=t("ExternalLinkIcon"),e=t("RouterLink");return l(),c(p,null,[h,b,s("ul",null,[s("li",null,[s("a",m,[_,a(o)])])]),s("h2",k,[w,f,a(e,{to:"/serve/CentOS/E-Mail/Postfix.html"},{default:r(()=>[g]),_:1})]),s("h2",v,[x,D,a(e,{to:"/serve/CentOS/E-Mail/Dovecot.html"},{default:r(()=>[y]),_:1})]),E],64)}var C=i(u,[["render",R],["__file","index.html.vue"]]);export{C as default};
