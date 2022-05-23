import{_ as t,r as o,o as l,c as i,a as s,b as a,F as p,d as n,e as r}from"./app.bef272a2.js";const c={},d=s("h1",{id:"mermaid-\u8BED\u6CD5",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mermaid-\u8BED\u6CD5","aria-hidden":"true"},"#"),n(" mermaid \u8BED\u6CD5")],-1),m=n("\u8BE5\u9879\u76EE\u901A\u8FC7 "),b={href:"https://github.com/eFrane/vuepress-plugin-mermaidjs",target:"_blank",rel:"noopener noreferrer"},u=n("vuepress-plugin-mermaidjs"),h=n(" \u63D2\u4EF6\u6765\u652F\u6301\u4F7F\u7528 "),g={href:"https://mermaid-js.github.io/mermaid/#/",target:"_blank",rel:"noopener noreferrer"},_=n("mermaid-js"),k=n("\uFF08"),f={href:"https://github.com/mermaid-js/mermaid",target:"_blank",rel:"noopener noreferrer"},v=n("GitHub"),x=n("\uFF09\u7ED8\u5236\u5404\u79CD\u56FE\u8868\u3002"),w=s("p",null,"\u652F\u6301\uFF1A",-1),D={href:"https://mermaid-js.github.io/mermaid/#/flowchart",target:"_blank",rel:"noopener noreferrer"},y=n("\u6D41\u7A0B\u56FE"),q={href:"https://mermaid-js.github.io/mermaid/#/sequenceDiagram",target:"_blank",rel:"noopener noreferrer"},M=n("\u5E8F\u5217\u56FE"),R={href:"https://mermaid-js.github.io/mermaid/#/classDiagram",target:"_blank",rel:"noopener noreferrer"},j=n("\u7C7B\u56FE"),A={href:"https://mermaid-js.github.io/mermaid/#/stateDiagram",target:"_blank",rel:"noopener noreferrer"},S=n("\u72B6\u6001\u56FE"),E={href:"https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram",target:"_blank",rel:"noopener noreferrer"},J=n("\u5B9E\u4F53\u5173\u7CFB\u56FE"),B={href:"https://mermaid-js.github.io/mermaid/#/user-journey",target:"_blank",rel:"noopener noreferrer"},C=n("\u7528\u6237\u65C5\u7A0B\u56FE"),L={href:"https://mermaid-js.github.io/mermaid/#/gantt",target:"_blank",rel:"noopener noreferrer"},I=n("\u7518\u7279\u56FE"),G={href:"http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/directives.html",target:"_blank",rel:"noopener noreferrer"},H=n("\u6307\u4EE4\u56FE"),T={href:"https://mermaid-js.github.io/mermaid/#/pie",target:"_blank",rel:"noopener noreferrer"},O=n("\u997C\u56FE"),Y={href:"https://baijiahao.baidu.com/s?id=1666117882411053133",target:"_blank",rel:"noopener noreferrer"},F=n("\u5173\u4E8E\u5199\u4F5C\u90A3\u4E9B\u4E8B\u4E4B\u5FEB\u901F\u4E0A\u624BMermaid\u6D41\u7A0B\u56FE"),N={id:"\u6D41\u7A0B\u56FE",tabindex:"-1"},P=s("a",{class:"header-anchor",href:"#\u6D41\u7A0B\u56FE","aria-hidden":"true"},"#",-1),V=n(),z={href:"https://mermaid-js.github.io/mermaid/#/flowchart",target:"_blank",rel:"noopener noreferrer"},K=n("\u6D41\u7A0B\u56FE"),U=r(`<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR
    A<span class="token text string">[Hard edge]</span> <span class="token arrow operator">--&gt;</span><span class="token label property">|Link text|</span> B<span class="token text string">(Round edge)</span>
    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">{Decision}</span>
    C <span class="token arrow operator">--&gt;</span><span class="token label property">|One|</span> D<span class="token text string">[Result one]</span>
    C <span class="token arrow operator">--&gt;</span><span class="token label property">|Two|</span> E<span class="token text string">[Result two]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>graph LR
    A[Hard edge] --&gt;|Link text| B(Round edge)
    B --&gt; C{Decision}
    C --&gt;|One| D[Result one]
    C --&gt;|Two| E[Result two]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,2),W={id:"\u5E8F\u5217\u56FE",tabindex:"-1"},X=s("a",{class:"header-anchor",href:"#\u5E8F\u5217\u56FE","aria-hidden":"true"},"#",-1),Q=n(),Z={href:"https://mermaid-js.github.io/mermaid/#/sequenceDiagram",target:"_blank",rel:"noopener noreferrer"},$=n("\u5E8F\u5217\u56FE"),ss=r(`<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">sequenceDiagram</span>
    <span class="token keyword">autonumber</span>
    Alice<span class="token arrow operator">-&gt;&gt;</span>John<span class="token operator">:</span> Hello John, how are you?
    <span class="token keyword">loop</span> Healthcheck
        John<span class="token arrow operator">-&gt;&gt;</span>John<span class="token operator">:</span> Fight against hypochondria
    <span class="token keyword">end</span>
    <span class="token keyword">Note right of</span> John<span class="token operator">:</span> Rational thoughts!
    John<span class="token arrow operator">--&gt;&gt;</span>Alice<span class="token operator">:</span> Great!
    John<span class="token arrow operator">-&gt;&gt;</span>Bob<span class="token operator">:</span> How about you?
    Bob<span class="token arrow operator">--&gt;&gt;</span>John<span class="token operator">:</span> Jolly good!
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sequenceDiagram
    autonumber
    Alice-&gt;&gt;John: Hello John, how are you?
    loop Healthcheck
        John-&gt;&gt;John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John--&gt;&gt;Alice: Great!
    John-&gt;&gt;Bob: How about you?
    Bob--&gt;&gt;John: Jolly good!
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,2),ns={id:"\u7C7B\u56FE",tabindex:"-1"},es=s("a",{class:"header-anchor",href:"#\u7C7B\u56FE","aria-hidden":"true"},"#",-1),as=n(),rs={href:"https://mermaid-js.github.io/mermaid/#/classDiagram",target:"_blank",rel:"noopener noreferrer"},ts=n("\u7C7B\u56FE"),os=r(`<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">classDiagram</span>
classA <span class="token arrow operator">--|&gt;</span> classB <span class="token operator">:</span> Inheritance
classC <span class="token arrow operator">--*</span> classD <span class="token operator">:</span> Composition
classE <span class="token arrow operator">--o</span> classF <span class="token operator">:</span> Aggregation
classG <span class="token arrow operator">--&gt;</span> classH <span class="token operator">:</span> Association
classI <span class="token arrow operator">--</span> classJ <span class="token operator">:</span> Link<span class="token text string">(Solid)</span>
classK <span class="token arrow operator">..&gt;</span> classL <span class="token operator">:</span> Dependency
classM <span class="token arrow operator">..|&gt;</span> classN <span class="token operator">:</span> Realization
classO <span class="token arrow operator">..</span> classP <span class="token operator">:</span> Link<span class="token text string">(Dashed)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>classDiagram
classA --|&gt; classB : Inheritance
classC --* classD : Composition
classE --o classF : Aggregation
classG --&gt; classH : Association
classI -- classJ : Link(Solid)
classK ..&gt; classL : Dependency
classM ..|&gt; classN : Realization
classO .. classP : Link(Dashed)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,2),ls={id:"\u72B6\u6001\u56FE",tabindex:"-1"},is=s("a",{class:"header-anchor",href:"#\u72B6\u6001\u56FE","aria-hidden":"true"},"#",-1),ps=n(),cs={href:"https://mermaid-js.github.io/mermaid/#/stateDiagram",target:"_blank",rel:"noopener noreferrer"},ds=n("\u72B6\u6001\u56FE"),ms=r(`<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code>    <span class="token keyword">stateDiagram-v2</span>
        State1<span class="token operator">:</span> The state with a note
        <span class="token keyword">note right of</span> State1
            Important information! You can write
            notes.
        <span class="token keyword">end note</span>
        State1 <span class="token arrow operator">--&gt;</span> State2
        <span class="token keyword">note left of</span> State2 <span class="token operator">:</span> This is the note to the left.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    stateDiagram-v2
        State1: The state with a note
        note right of State1
            Important information! You can write
            notes.
        end note
        State1 --&gt; State2
        note left of State2 : This is the note to the left.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,2),bs={id:"\u5B9E\u4F53\u5173\u7CFB\u56FE",tabindex:"-1"},us=s("a",{class:"header-anchor",href:"#\u5B9E\u4F53\u5173\u7CFB\u56FE","aria-hidden":"true"},"#",-1),hs=n(),gs={href:"https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram",target:"_blank",rel:"noopener noreferrer"},_s=n("\u5B9E\u4F53\u5173\u7CFB\u56FE"),ks=r(`<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">erDiagram</span>
    CUSTOMER <span class="token arrow operator">||--o{</span> ORDER <span class="token operator">:</span> places
    ORDER <span class="token arrow operator">||--|{</span> LINE-ITEM <span class="token operator">:</span> contains
    CUSTOMER <span class="token arrow operator">}|..|{</span> DELIVERY-ADDRESS <span class="token operator">:</span> uses
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    CUSTOMER }|..|{ DELIVERY-ADDRESS : uses
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,2),fs={id:"\u7528\u6237\u65C5\u7A0B\u56FE",tabindex:"-1"},vs=s("a",{class:"header-anchor",href:"#\u7528\u6237\u65C5\u7A0B\u56FE","aria-hidden":"true"},"#",-1),xs=n(),ws={href:"https://mermaid-js.github.io/mermaid/#/user-journey",target:"_blank",rel:"noopener noreferrer"},Ds=n("\u7528\u6237\u65C5\u7A0B\u56FE"),ys=r(`<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">journey</span>
    title My working day
    section Go to work
      Make tea<span class="token operator">:</span> 5<span class="token operator">:</span> Me
      Go upstairs<span class="token operator">:</span> 3<span class="token operator">:</span> Me
      Do work<span class="token operator">:</span> 1<span class="token operator">:</span> Me, Cat
    section Go home
      Go downstairs<span class="token operator">:</span> 5<span class="token operator">:</span> Me
      Sit down<span class="token operator">:</span> 5<span class="token operator">:</span> Me
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,2),qs={id:"\u7518\u7279\u56FE",tabindex:"-1"},Ms=s("a",{class:"header-anchor",href:"#\u7518\u7279\u56FE","aria-hidden":"true"},"#",-1),Rs=n(),js={href:"https://mermaid-js.github.io/mermaid/#/gantt",target:"_blank",rel:"noopener noreferrer"},As=n("\u7518\u7279\u56FE"),Ss=r(`<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">gantt</span>
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           <span class="token operator">:</span>a1, 2014-01-01, 30d
    Another task     <span class="token operator">:</span>after a1  , 20d
    section Another
    Task in sec      <span class="token operator">:</span>2014-01-12  , 12d
    another task      <span class="token operator">:</span> 24d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,2),Es={id:"\u6307\u4EE4\u56FE",tabindex:"-1"},Js=s("a",{class:"header-anchor",href:"#\u6307\u4EE4\u56FE","aria-hidden":"true"},"#",-1),Bs=n(),Cs={href:"http://mermaid-js.github.io/mermaid/diagrams-and-syntax-and-examples/directives.html",target:"_blank",rel:"noopener noreferrer"},Ls=n("\u6307\u4EE4\u56FE"),Is=r(`<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token comment">%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%</span>
<span class="token keyword">sequenceDiagram</span>
<span class="token comment">%%{config: { &#39;fontFamily&#39;: &#39;Menlo&#39;, &#39;fontSize&#39;: 18, &#39;fontWeight&#39;: 400} }%%</span>
Alice<span class="token arrow operator">-&gt;&gt;</span>Bob<span class="token operator">:</span> Hi Bob
Bob<span class="token arrow operator">-&gt;&gt;</span>Alice<span class="token operator">:</span> Hi Alice
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>%%{init: { &#39;logLevel&#39;: &#39;debug&#39;, &#39;theme&#39;: &#39;dark&#39; } }%%
sequenceDiagram
%%{config: { &#39;fontFamily&#39;: &#39;Menlo&#39;, &#39;fontSize&#39;: 18, &#39;fontWeight&#39;: 400} }%%
Alice-&gt;&gt;Bob: Hi Bob
Bob-&gt;&gt;Alice: Hi Alice
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,2),Gs={id:"\u997C\u56FE",tabindex:"-1"},Hs=s("a",{class:"header-anchor",href:"#\u997C\u56FE","aria-hidden":"true"},"#",-1),Ts=n(),Os={href:"https://mermaid-js.github.io/mermaid/#/pie",target:"_blank",rel:"noopener noreferrer"},Ys=n("\u997C\u56FE"),Fs=r(`<blockquote><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">pie</span>
    title Key elements in Product X
    <span class="token string">&quot;Calcium&quot;</span> <span class="token operator">:</span> 42.96
    <span class="token string">&quot;Potassium&quot;</span> <span class="token operator">:</span> 50.05
    <span class="token string">&quot;Magnesium&quot;</span> <span class="token operator">:</span> 10.01
    <span class="token string">&quot;Iron&quot;</span> <span class="token operator">:</span>  5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pie
    title Key elements in Product X
    &quot;Calcium&quot; : 42.96
    &quot;Potassium&quot; : 50.05
    &quot;Magnesium&quot; : 10.01
    &quot;Iron&quot; :  5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2);function Ns(Ps,Vs){const e=o("ExternalLinkIcon");return l(),i(p,null,[d,s("p",null,[m,s("a",b,[u,a(e)]),h,s("a",g,[_,a(e)]),k,s("a",f,[v,a(e)]),x]),w,s("ul",null,[s("li",null,[s("a",D,[y,a(e)])]),s("li",null,[s("a",q,[M,a(e)])]),s("li",null,[s("a",R,[j,a(e)])]),s("li",null,[s("a",A,[S,a(e)])]),s("li",null,[s("a",E,[J,a(e)])]),s("li",null,[s("a",B,[C,a(e)])]),s("li",null,[s("a",L,[I,a(e)])]),s("li",null,[s("a",G,[H,a(e)])]),s("li",null,[s("a",T,[O,a(e)])])]),s("blockquote",null,[s("p",null,[s("a",Y,[F,a(e)])])]),s("h2",N,[P,V,s("a",z,[K,a(e)])]),U,s("h2",W,[X,Q,s("a",Z,[$,a(e)])]),ss,s("h2",ns,[es,as,s("a",rs,[ts,a(e)])]),os,s("h2",ls,[is,ps,s("a",cs,[ds,a(e)])]),ms,s("h2",bs,[us,hs,s("a",gs,[_s,a(e)])]),ks,s("h2",fs,[vs,xs,s("a",ws,[Ds,a(e)])]),ys,s("h2",qs,[Ms,Rs,s("a",js,[As,a(e)])]),Ss,s("h2",Es,[Js,Bs,s("a",Cs,[Ls,a(e)])]),Is,s("h2",Gs,[Hs,Ts,s("a",Os,[Ys,a(e)])]),Fs],64)}var Ks=t(c,[["render",Ns],["__file","mermaid.html.vue"]]);export{Ks as default};
