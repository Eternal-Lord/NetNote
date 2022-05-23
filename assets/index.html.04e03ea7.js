import{_ as c,r,o as i,c as o,a as n,b as a,w as t,F as b,d as s,e as p}from"./app.bef272a2.js";var u="/assets/image-20200829152047933.cac443be.png",m="/assets/image-20200831151237356.026a1271.png",d="/assets/image-20200831151510910.aa8b183e.png",k="/assets/image-20200905151633382.74baf9d2.png",h="/assets/image-20200905151712408.e3dd5ef8.png",g="/assets/image-20200905151751996.2ef4c40b.png",A="/assets/image-20200905151824378.3b832e56.png",_="/assets/image-20200905151839976.62505f2c.png",f="/assets/image-20200827201728771.acd5ee02.png",v="/assets/01.9b0821f5.png",x="/assets/02.259d24c9.jpg",y="/assets/03.82136066.png",E="/assets/04.9f6dce9d.png",S="/assets/05.4f4cfe56.png",P="/assets/06.6b3b0cff.png";const M={},C=n("h1",{id:"centos-\u57FA\u7840",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#centos-\u57FA\u7840","aria-hidden":"true"},"#"),s(" CentOS \u57FA\u7840")],-1),w=n("p",null,"\u672C\u7AE0\u6559\u7A0B\u4F7F\u7528 CentOS 6.5/7 \u7CFB\u7EDF\u3002",-1),B=n("p",null,"\u76F8\u5173\u94FE\u63A5\uFF1A",-1),L={href:"https://www.centos.org/download/",target:"_blank",rel:"noopener noreferrer"},I=s("CentOS \u5B98\u7F51"),N={href:"https://www.runoob.com/linux/linux-tutorial.html",target:"_blank",rel:"noopener noreferrer"},T=s("Linux \u6559\u7A0B | \u83DC\u9E1F\u6559\u7A0B"),O={href:"http://linux.vbird.org/",target:"_blank",rel:"noopener noreferrer"},D=s("\u9CE5\u54E5\u7684 Linux \u79C1\u623F\u83DC"),q=s("\u81F3\u5C11\u770B\u770B\u5230 "),j={href:"http://linux.vbird.org/linux_basic/0320bash.php",target:"_blank",rel:"noopener noreferrer"},R=s("\u7B2C\u5341\u7AE0\u3001\u8A8D\u8B58\u8207\u5B78\u7FD2BASH"),V={href:"https://www.w3cschool.cn/linuxprobe/",target:"_blank",rel:"noopener noreferrer"},K=s("Linux \u5C31\u8BE5\u8FD9\u4E48\u5B66_w3cschool"),G={href:"https://www.runoob.com/linux/linux-vim.html",target:"_blank",rel:"noopener noreferrer"},z=s("vi/vim \u6587\u672C\u7F16\u8F91\u5668"),Y=p(`<h2 id="\u6302\u8F7D\u8F6F\u4EF6\u6E90\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u6302\u8F7D\u8F6F\u4EF6\u6E90\u955C\u50CF" aria-hidden="true">#</a> \u6302\u8F7D\u8F6F\u4EF6\u6E90\u955C\u50CF</h2><p>\u521B\u5EFA\u6302\u8F7D\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /mnt/iso
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6302\u8F7D ISO \u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mount</span> -t iso9660 -o loop /opt/CentOS-7-x86_64-Everything-1503-01.iso /mnt/iso
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u8F6F\u4EF6\u6E90</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/yum.repos.d
<span class="token function">mv</span> CentOS-Base.repo CentOS-Base.repo.bak
<span class="token function">vi</span> CentOS-Media.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7F16\u8F91 <code>CentOS-Media.repo</code> \u6587\u4EF6\uFF1A</p><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"># CentOS-Media.repo
</span><span class="token prefix unchanged"> </span><span class="token line">#
</span><span class="token prefix unchanged"> </span><span class="token line"># This repo is used to mount the default locations for a CDROM / DVD on
</span><span class="token prefix unchanged"> </span><span class="token line">#  CentOS-6.  You can use this repo and yum to install items directly off the
</span><span class="token prefix unchanged"> </span><span class="token line">#  DVD ISO that we release.
</span><span class="token prefix unchanged"> </span><span class="token line">#
</span><span class="token prefix unchanged"> </span><span class="token line"># To use this repo, put in your DVD and use it with the other repos too:
</span><span class="token prefix unchanged"> </span><span class="token line">#  yum --enablerepo=c6-media [command]
</span><span class="token prefix unchanged"> </span><span class="token line">#
</span><span class="token prefix unchanged"> </span><span class="token line"># or for ONLY the media repo, do this:
</span><span class="token prefix unchanged"> </span><span class="token line">#
</span><span class="token prefix unchanged"> </span><span class="token line">#  yum --disablerepo=\\* --enablerepo=c6-media [command]
</span><span class="token prefix unchanged"> </span><span class="token line">
</span><span class="token prefix unchanged"> </span><span class="token line">[c6-media]
</span><span class="token prefix unchanged"> </span><span class="token line">name=CentOS-$releasever - Media
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">baseurl=file:///mnt/iso/
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">baseurl=file:///media/CentOS/
</span><span class="token prefix deleted">-</span><span class="token line">        file:///media/cdrom/
</span><span class="token prefix deleted">-</span><span class="token line">        file:///media/cdrecorder/
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">gpgcheck=0
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">gpgcheck=1
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">enabled=1
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">enabled=0
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-6
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u66F4\u65B0\u8F6F\u4EF6\u6E90\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum update
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="selinux" tabindex="-1"><a class="header-anchor" href="#selinux" aria-hidden="true">#</a> SELinux</h2><p>CentOS \u4E2D SELinux \u9ED8\u8BA4\u5F00\u542F\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u6307\u4EE4\u67E5\u770B\u72B6\u6001\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-10-20-70-107 ~<span class="token punctuation">]</span><span class="token comment"># sestatus -v</span>
SELinux status:                 enabled
SELinuxfs mount:                /sys/fs/selinux
SELinux root directory:         /etc/selinux
Loaded policy name:             targeted
Current mode:                   enforcing
Mode from config file:          enforcing
Policy MLS status:              enabled
Policy deny_unknown status:     allowed
Max kernel policy version:      <span class="token number">28</span>

Process contexts:
Current context:                unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
Init context:                   system_u:system_r:init_t:s0
/usr/sbin/sshd                  system_u:system_r:sshd_t:s0-s0:c0.c1023

File contexts:
Controlling terminal:           unconfined_u:object_r:user_devpts_t:s0
/etc/passwd                     system_u:object_r:passwd_file_t:s0
/etc/shadow                     system_u:object_r:shadow_t:s0
/bin/bash                       system_u:object_r:shell_exec_t:s0
/bin/login                      system_u:object_r:login_exec_t:s0
/bin/sh                         system_u:object_r:bin_t:s0 -<span class="token operator">&gt;</span> system_u:object_r:shell_exec_t:s0
/sbin/agetty                    system_u:object_r:getty_exec_t:s0
/sbin/init                      system_u:object_r:bin_t:s0 -<span class="token operator">&gt;</span> system_u:object_r:init_exec_t:s0
/usr/sbin/sshd                  system_u:object_r:sshd_exec_t:s0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="\u8BBE\u7F6E\u65F6\u533A" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u65F6\u533A" aria-hidden="true">#</a> \u8BBE\u7F6E\u65F6\u533A</h2><p>CentOS \u53EF\u4EE5\u4F7F\u7528 <code>timedatectl</code> \u6307\u4EE4\u8BBE\u7F6E\u65F6\u533A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@host-10-20-70-107 ~<span class="token punctuation">]</span><span class="token comment"># timedatectl -h</span>
timedatectl <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">..</span>.<span class="token punctuation">]</span> COMMAND <span class="token punctuation">..</span>.

\u67E5\u8BE2\u6216\u66F4\u6539\u7CFB\u7EDF\u65F6\u95F4\u548C\u65E5\u671F\u8BBE\u7F6E\u3002

  -h --help                \u663E\u793A\u5F53\u524D\u5E2E\u52A9\u4FE1\u606F
     --version             \u663E\u793A\u8F6F\u4EF6\u5305\u7248\u672C
     --no-pager            \u4E0D\u8981\u5C06\u8F93\u51FA\u901A\u8FC7\u7BA1\u9053\u4F20\u7ED9\u5BFB\u547C\u673A
     --no-ask-password     \u4E0D\u63D0\u793A\u8F93\u5165\u5BC6\u7801
  -H --host<span class="token operator">=</span><span class="token punctuation">[</span><span class="token environment constant">USER</span>@<span class="token punctuation">]</span>HOST    \u5728\u8FDC\u7A0B\u4E3B\u673A\u4E0A\u64CD\u4F5C
  -M --machine<span class="token operator">=</span>CONTAINER   \u5728\u672C\u5730\u5BB9\u5668\u4E0A\u64CD\u4F5C
     --adjust-system-clock \u66F4\u6539\u672C\u5730 RTC \u6A21\u5F0F\u65F6\u8C03\u6574\u7CFB\u7EDF\u65F6\u949F

Commands:
  status                   \u663E\u793A\u5F53\u524D\u65F6\u95F4\u8BBE\u7F6E
  set-time TIME            \u8BBE\u7F6E\u7CFB\u7EDF\u65F6\u95F4
  set-timezone ZONE        \u8BBE\u7F6E\u7CFB\u7EDF\u65F6\u533A
  list-timezones           \u663E\u793A\u5DF2\u77E5\u65F6\u533A
  set-local-rtc BOOL       \u63A7\u5236 RTC \u662F\u5426\u5728\u5F53\u5730\u65F6\u95F4
  set-ntp BOOL             \u63A7\u5236\u662F\u5426\u542F\u7528 NTP
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h3><p>\u5C06\u65F6\u533A\u8BBE\u7F6E\u4E3A\u4E9A\u6D32\u4E0A\u6D77\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>timedatectl set-timezone Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u6240\u6709\u65F6\u533A" tabindex="-1"><a class="header-anchor" href="#\u6240\u6709\u65F6\u533A" aria-hidden="true">#</a> \u6240\u6709\u65F6\u533A</h3><details class="custom-container details"><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
Africa/Algiers
Africa/Asmara
Africa/Bamako
Africa/Bangui
Africa/Banjul
Africa/Bissau
Africa/Blantyre
Africa/Brazzaville
Africa/Bujumbura
Africa/Cairo
Africa/Casablanca
Africa/Ceuta
Africa/Conakry
Africa/Dakar
Africa/Dar_es_Salaam
Africa/Djibouti
Africa/Douala
Africa/El_Aaiun
Africa/Freetown
Africa/Gaborone
Africa/Harare
Africa/Johannesburg
Africa/Juba
Africa/Kampala
Africa/Khartoum
Africa/Kigali
Africa/Kinshasa
Africa/Lagos
Africa/Libreville
Africa/Lome
Africa/Luanda
Africa/Lubumbashi
Africa/Lusaka
Africa/Malabo
Africa/Maputo
Africa/Maseru
Africa/Mbabane
Africa/Mogadishu
Africa/Monrovia
Africa/Nairobi
Africa/Ndjamena
Africa/Niamey
Africa/Nouakchott
Africa/Ouagadougou
Africa/Porto-Novo
Africa/Sao_Tome
Africa/Tripoli
Africa/Tunis
Africa/Windhoek
America/Adak
America/Anchorage
America/Anguilla
America/Antigua
America/Araguaina
America/Argentina/Buenos_Aires
America/Argentina/Catamarca
America/Argentina/Cordoba
America/Argentina/Jujuy
America/Argentina/La_Rioja
America/Argentina/Mendoza
America/Argentina/Rio_Gallegos
America/Argentina/Salta
America/Argentina/San_Juan
America/Argentina/San_Luis
America/Argentina/Tucuman
America/Argentina/Ushuaia
America/Aruba
America/Asuncion
America/Atikokan
America/Bahia
America/Bahia_Banderas
America/Barbados
America/Belem
America/Belize
America/Blanc-Sablon
America/Boa_Vista
America/Bogota
America/Boise
America/Cambridge_Bay
America/Campo_Grande
America/Cancun
America/Caracas
America/Cayenne
America/Cayman
America/Chicago
America/Chihuahua
America/Costa_Rica
America/Creston
America/Cuiaba
America/Curacao
America/Danmarkshavn
America/Dawson
America/Dawson_Creek
America/Denver
America/Detroit
America/Dominica
America/Edmonton
America/Eirunepe
America/El_Salvador
America/Fort_Nelson
America/Fortaleza
America/Glace_Bay
America/Godthab
America/Goose_Bay
America/Grand_Turk
America/Grenada
America/Guadeloupe
America/Guatemala
America/Guayaquil
America/Guyana
America/Halifax
America/Havana
America/Hermosillo
America/Indiana/Indianapolis
America/Indiana/Knox
America/Indiana/Marengo
America/Indiana/Petersburg
America/Indiana/Tell_City
America/Indiana/Vevay
America/Indiana/Vincennes
America/Indiana/Winamac
America/Inuvik
America/Iqaluit
America/Jamaica
America/Juneau
America/Kentucky/Louisville
America/Kentucky/Monticello
America/Kralendijk
America/La_Paz
America/Lima
America/Los_Angeles
America/Lower_Princes
America/Maceio
America/Managua
America/Manaus
America/Marigot
America/Martinique
America/Matamoros
America/Mazatlan
America/Menominee
America/Merida
America/Metlakatla
America/Mexico_City
America/Miquelon
America/Moncton
America/Monterrey
America/Montevideo
America/Montserrat
America/Nassau
America/New_York
America/Nipigon
America/Nome
America/Noronha
America/North_Dakota/Beulah
America/North_Dakota/Center
America/North_Dakota/New_Salem
America/Ojinaga
America/Panama
America/Pangnirtung
America/Paramaribo
America/Phoenix
America/Port-au-Prince
America/Port_of_Spain
America/Porto_Velho
America/Puerto_Rico
America/Punta_Arenas
America/Rainy_River
America/Rankin_Inlet
America/Recife
America/Regina
America/Resolute
America/Rio_Branco
America/Santarem
America/Santiago
America/Santo_Domingo
America/Sao_Paulo
America/Scoresbysund
America/Sitka
America/St_Barthelemy
America/St_Johns
America/St_Kitts
America/St_Lucia
America/St_Thomas
America/St_Vincent
America/Swift_Current
America/Tegucigalpa
America/Thule
America/Thunder_Bay
America/Tijuana
America/Toronto
America/Tortola
America/Vancouver
America/Whitehorse
America/Winnipeg
America/Yakutat
America/Yellowknife
Antarctica/Casey
Antarctica/Davis
Antarctica/DumontDUrville
Antarctica/Macquarie
Antarctica/Mawson
Antarctica/McMurdo
Antarctica/Palmer
Antarctica/Rothera
Antarctica/Syowa
Antarctica/Troll
Antarctica/Vostok
Arctic/Longyearbyen
Asia/Aden
Asia/Almaty
Asia/Amman
Asia/Anadyr
Asia/Aqtau
Asia/Aqtobe
Asia/Ashgabat
Asia/Atyrau
Asia/Baghdad
Asia/Bahrain
Asia/Baku
Asia/Bangkok
Asia/Barnaul
Asia/Beirut
Asia/Bishkek
Asia/Brunei
Asia/Chita
Asia/Choibalsan
Asia/Colombo
Asia/Damascus
Asia/Dhaka
Asia/Dili
Asia/Dubai
Asia/Dushanbe
Asia/Famagusta
Asia/Gaza
Asia/Hebron
Asia/Ho_Chi_Minh
Asia/Hong_Kong
Asia/Hovd
Asia/Irkutsk
Asia/Jakarta
Asia/Jayapura
Asia/Jerusalem
Asia/Kabul
Asia/Kamchatka
Asia/Karachi
Asia/Kathmandu
Asia/Khandyga
Asia/Kolkata
Asia/Krasnoyarsk
Asia/Kuala_Lumpur
Asia/Kuching
Asia/Kuwait
Asia/Macau
Asia/Magadan
Asia/Makassar
Asia/Manila
Asia/Muscat
Asia/Nicosia
Asia/Novokuznetsk
Asia/Novosibirsk
Asia/Omsk
Asia/Oral
Asia/Phnom_Penh
Asia/Pontianak
Asia/Pyongyang
Asia/Qatar
Asia/Qyzylorda
Asia/Riyadh
Asia/Sakhalin
Asia/Samarkand
Asia/Seoul
Asia/Shanghai
Asia/Singapore
Asia/Srednekolymsk
Asia/Taipei
Asia/Tashkent
Asia/Tbilisi
Asia/Tehran
Asia/Thimphu
Asia/Tokyo
Asia/Tomsk
Asia/Ulaanbaatar
Asia/Urumqi
Asia/Ust-Nera
Asia/Vientiane
Asia/Vladivostok
Asia/Yakutsk
Asia/Yangon
Asia/Yekaterinburg
Asia/Yerevan
Atlantic/Azores
Atlantic/Bermuda
Atlantic/Canary
Atlantic/Cape_Verde
Atlantic/Faroe
Atlantic/Madeira
Atlantic/Reykjavik
Atlantic/South_Georgia
Atlantic/St_Helena
Atlantic/Stanley
Australia/Adelaide
Australia/Brisbane
Australia/Broken_Hill
Australia/Currie
Australia/Darwin
Australia/Eucla
Australia/Hobart
Australia/Lindeman
Australia/Lord_Howe
Australia/Melbourne
Australia/Perth
Australia/Sydney
Europe/Amsterdam
Europe/Andorra
Europe/Astrakhan
Europe/Athens
Europe/Belgrade
Europe/Berlin
Europe/Bratislava
Europe/Brussels
Europe/Bucharest
Europe/Budapest
Europe/Busingen
Europe/Chisinau
Europe/Copenhagen
Europe/Dublin
Europe/Gibraltar
Europe/Guernsey
Europe/Helsinki
Europe/Isle_of_Man
Europe/Istanbul
Europe/Jersey
Europe/Kaliningrad
Europe/Kiev
Europe/Kirov
Europe/Lisbon
Europe/Ljubljana
Europe/London
Europe/Luxembourg
Europe/Madrid
Europe/Malta
Europe/Mariehamn
Europe/Minsk
Europe/Monaco
Europe/Moscow
Europe/Oslo
Europe/Paris
Europe/Podgorica
Europe/Prague
Europe/Riga
Europe/Rome
Europe/Samara
Europe/San_Marino
Europe/Sarajevo
Europe/Saratov
Europe/Simferopol
Europe/Skopje
Europe/Sofia
Europe/Stockholm
Europe/Tallinn
Europe/Tirane
Europe/Ulyanovsk
Europe/Uzhgorod
Europe/Vaduz
Europe/Vatican
Europe/Vienna
Europe/Vilnius
Europe/Volgograd
Europe/Warsaw
Europe/Zagreb
Europe/Zaporozhye
Europe/Zurich
Indian/Antananarivo
Indian/Chagos
Indian/Christmas
Indian/Cocos
Indian/Comoro
Indian/Kerguelen
Indian/Mahe
Indian/Maldives
Indian/Mauritius
Indian/Mayotte
Indian/Reunion
Pacific/Apia
Pacific/Auckland
Pacific/Bougainville
Pacific/Chatham
Pacific/Chuuk
Pacific/Easter
Pacific/Efate
Pacific/Enderbury
Pacific/Fakaofo
Pacific/Fiji
Pacific/Funafuti
Pacific/Galapagos
Pacific/Gambier
Pacific/Guadalcanal
Pacific/Guam
Pacific/Honolulu
Pacific/Kiritimati
Pacific/Kosrae
Pacific/Kwajalein
Pacific/Majuro
Pacific/Marquesas
Pacific/Midway
Pacific/Nauru
Pacific/Niue
Pacific/Norfolk
Pacific/Noumea
Pacific/Pago_Pago
Pacific/Palau
Pacific/Pitcairn
Pacific/Pohnpei
Pacific/Port_Moresby
Pacific/Rarotonga
Pacific/Saipan
Pacific/Tahiti
Pacific/Tarawa
Pacific/Tongatapu
Pacific/Wake
Pacific/Wallis
UTC
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br><span class="line-number">349</span><br><span class="line-number">350</span><br><span class="line-number">351</span><br><span class="line-number">352</span><br><span class="line-number">353</span><br><span class="line-number">354</span><br><span class="line-number">355</span><br><span class="line-number">356</span><br><span class="line-number">357</span><br><span class="line-number">358</span><br><span class="line-number">359</span><br><span class="line-number">360</span><br><span class="line-number">361</span><br><span class="line-number">362</span><br><span class="line-number">363</span><br><span class="line-number">364</span><br><span class="line-number">365</span><br><span class="line-number">366</span><br><span class="line-number">367</span><br><span class="line-number">368</span><br><span class="line-number">369</span><br><span class="line-number">370</span><br><span class="line-number">371</span><br><span class="line-number">372</span><br><span class="line-number">373</span><br><span class="line-number">374</span><br><span class="line-number">375</span><br><span class="line-number">376</span><br><span class="line-number">377</span><br><span class="line-number">378</span><br><span class="line-number">379</span><br><span class="line-number">380</span><br><span class="line-number">381</span><br><span class="line-number">382</span><br><span class="line-number">383</span><br><span class="line-number">384</span><br><span class="line-number">385</span><br><span class="line-number">386</span><br><span class="line-number">387</span><br><span class="line-number">388</span><br><span class="line-number">389</span><br><span class="line-number">390</span><br><span class="line-number">391</span><br><span class="line-number">392</span><br><span class="line-number">393</span><br><span class="line-number">394</span><br><span class="line-number">395</span><br><span class="line-number">396</span><br><span class="line-number">397</span><br><span class="line-number">398</span><br><span class="line-number">399</span><br><span class="line-number">400</span><br><span class="line-number">401</span><br><span class="line-number">402</span><br><span class="line-number">403</span><br><span class="line-number">404</span><br><span class="line-number">405</span><br><span class="line-number">406</span><br><span class="line-number">407</span><br><span class="line-number">408</span><br><span class="line-number">409</span><br><span class="line-number">410</span><br><span class="line-number">411</span><br><span class="line-number">412</span><br><span class="line-number">413</span><br><span class="line-number">414</span><br><span class="line-number">415</span><br><span class="line-number">416</span><br><span class="line-number">417</span><br><span class="line-number">418</span><br><span class="line-number">419</span><br><span class="line-number">420</span><br><span class="line-number">421</span><br><span class="line-number">422</span><br><span class="line-number">423</span><br><span class="line-number">424</span><br><span class="line-number">425</span><br></div></div></details><h2 id="\u8054\u7F51" tabindex="-1"><a class="header-anchor" href="#\u8054\u7F51" aria-hidden="true">#</a> \u8054\u7F51</h2><p>\u70B9\u51FB\u53F3\u4E0A\u89D2\u7535\u6E90\u952E\u5904\u6253\u5F00\u7F51\u7EDC\u8FDE\u63A5\uFF1A</p><p><img src="`+u+'" alt="image-20200829152047933"></p><h2 id="\u624B\u52A8\u914D\u7F6E-ip-\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u914D\u7F6E-ip-\u5730\u5740" aria-hidden="true">#</a> \u624B\u52A8\u914D\u7F6E IP \u5730\u5740</h2><p><img src="'+m+'" alt="image-20200831151237356"></p><p><img src="'+d+'" alt="image-20200831151510910"></p><h2 id="\u6DFB\u52A0\u4E2D\u6587\u8F93\u5165\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E2D\u6587\u8F93\u5165\u6CD5" aria-hidden="true">#</a> \u6DFB\u52A0\u4E2D\u6587\u8F93\u5165\u6CD5</h2><p><img src="'+k+'" alt="image-20200905151633382"></p><p><img src="'+h+'" alt="image-20200905151712408"></p><p><img src="'+g+'" alt="image-20200905151751996"></p><p><img src="'+A+'" alt="image-20200905151824378"></p><p><img src="'+_+`" alt="image-20200905151839976"></p><h2 id="centos-\u8F6F\u4EF6\u5305\u5B89\u88C5\u6D41\u7A0B\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#centos-\u8F6F\u4EF6\u5305\u5B89\u88C5\u6D41\u7A0B\u793A\u4F8B" aria-hidden="true">#</a> CentOS \u8F6F\u4EF6\u5305\u5B89\u88C5\u6D41\u7A0B\u793A\u4F8B</h2><p>\u8F93\u5165\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum update <span class="token comment"># \u66F4\u65B0\u8F6F\u4EF6\u6E90</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> httpd <span class="token comment"># \u5B89\u88C5 Apache</span>
<span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> yueplus \u7684\u5BC6\u7801\uFF1A <span class="token comment"># \u8F93\u5165\u7BA1\u7406\u5458\u5BC6\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>sudo</code> - \u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u8FD0\u884C\uFF08\u53EF\u4EE5\u4F7F\u7528 <code>su root</code> \u5207\u6362\u5230 root \u7528\u6237\uFF0C\u5C31\u4E0D\u7528\u4E00\u76F4\u8F93 <code>sudo</code> \u4E86\uFF09\uFF1B</p></blockquote><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5DF2\u52A0\u8F7D\u63D2\u4EF6\uFF1Afastestmirror, langpacks
Loading mirror speeds from cached hostfile
 * base: mirrors.aliyun.com
 * extras: ftp.sjtu.edu.cn
 * updates: ftp.sjtu.edu.cn
\u6B63\u5728\u89E3\u51B3\u4F9D\u8D56\u5173\u7CFB
--<span class="token operator">&gt;</span> \u6B63\u5728\u68C0\u67E5\u4E8B\u52A1
---<span class="token operator">&gt;</span> \u8F6F\u4EF6\u5305 httpd.x86_64.0.2.4.6-93.el7.centos \u5C06\u88AB \u5B89\u88C5
--<span class="token operator">&gt;</span> \u6B63\u5728\u5904\u7406\u4F9D\u8D56\u5173\u7CFB httpd-tools <span class="token operator">=</span> <span class="token number">2.4</span>.6-93.el7.centos\uFF0C\u5B83\u88AB\u8F6F\u4EF6\u5305 httpd-2.4.6-93.el7.centos.x86_64 \u9700\u8981
--<span class="token operator">&gt;</span> \u6B63\u5728\u5904\u7406\u4F9D\u8D56\u5173\u7CFB /etc/mime.types\uFF0C\u5B83\u88AB\u8F6F\u4EF6\u5305 httpd-2.4.6-93.el7.centos.x86_64 \u9700\u8981
--<span class="token operator">&gt;</span> \u6B63\u5728\u5904\u7406\u4F9D\u8D56\u5173\u7CFB libaprutil-1.so.0<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span>\uFF0C\u5B83\u88AB\u8F6F\u4EF6\u5305 httpd-2.4.6-93.el7.centos.x86_64 \u9700\u8981
--<span class="token operator">&gt;</span> \u6B63\u5728\u5904\u7406\u4F9D\u8D56\u5173\u7CFB libapr-1.so.0<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>64bit<span class="token punctuation">)</span>\uFF0C\u5B83\u88AB\u8F6F\u4EF6\u5305 httpd-2.4.6-93.el7.centos.x86_64 \u9700\u8981
--<span class="token operator">&gt;</span> \u6B63\u5728\u68C0\u67E5\u4E8B\u52A1
---<span class="token operator">&gt;</span> \u8F6F\u4EF6\u5305 apr.x86_64.0.1.4.8-5.el7 \u5C06\u88AB \u5B89\u88C5
---<span class="token operator">&gt;</span> \u8F6F\u4EF6\u5305 apr-util.x86_64.0.1.5.2-6.el7 \u5C06\u88AB \u5B89\u88C5
---<span class="token operator">&gt;</span> \u8F6F\u4EF6\u5305 httpd-tools.x86_64.0.2.4.6-93.el7.centos \u5C06\u88AB \u5B89\u88C5
---<span class="token operator">&gt;</span> \u8F6F\u4EF6\u5305 mailcap.noarch.0.2.1.41-2.el7 \u5C06\u88AB \u5B89\u88C5
--<span class="token operator">&gt;</span> \u89E3\u51B3\u4F9D\u8D56\u5173\u7CFB\u5B8C\u6210

\u4F9D\u8D56\u5173\u7CFB\u89E3\u51B3

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
 Package                                             \u67B6\u6784                                           \u7248\u672C                                                        \u6E90                                            \u5927\u5C0F
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
\u6B63\u5728\u5B89\u88C5:
 httpd                                               x86_64                                         <span class="token number">2.4</span>.6-93.el7.centos                                         base                                         <span class="token number">2.7</span> M
\u4E3A\u4F9D\u8D56\u800C\u5B89\u88C5:
 apr                                                 x86_64                                         <span class="token number">1.4</span>.8-5.el7                                                 base                                         <span class="token number">103</span> k
 apr-util                                            x86_64                                         <span class="token number">1.5</span>.2-6.el7                                                 base                                          <span class="token number">92</span> k
 httpd-tools                                         x86_64                                         <span class="token number">2.4</span>.6-93.el7.centos                                         base                                          <span class="token number">92</span> k
 mailcap                                             noarch                                         <span class="token number">2.1</span>.41-2.el7                                                base                                          <span class="token number">31</span> k

\u4E8B\u52A1\u6982\u8981
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
\u5B89\u88C5  <span class="token number">1</span> \u8F6F\u4EF6\u5305 <span class="token punctuation">(</span>+4 \u4F9D\u8D56\u8F6F\u4EF6\u5305<span class="token punctuation">)</span>

\u603B\u4E0B\u8F7D\u91CF\uFF1A3.0 M
\u5B89\u88C5\u5927\u5C0F\uFF1A10 M
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>\u8F93\u5165\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Is this ok <span class="token punctuation">[</span>y/d/N<span class="token punctuation">]</span>: Y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><ul><li>Y - Yes \u4E0B\u8F7D\u5E76\u5B89\u88C5</li><li>D - Dowonload \u4EC5\u4E0B\u8F7D</li><li>N - No \u4E0D\u505A\u4EFB\u4F55\u4E8B</li></ul></blockquote><p>\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Downloading packages:
<span class="token punctuation">(</span><span class="token number">1</span>/5<span class="token punctuation">)</span>: apr-1.4.8-5.el7.x86_64.rpm                                                                                                                                                           <span class="token operator">|</span> <span class="token number">103</span> kB  00:00:00     
<span class="token punctuation">(</span><span class="token number">2</span>/5<span class="token punctuation">)</span>: apr-util-1.5.2-6.el7.x86_64.rpm                                                                                                                                                      <span class="token operator">|</span>  <span class="token number">92</span> kB  00:00:00     
<span class="token punctuation">(</span><span class="token number">3</span>/5<span class="token punctuation">)</span>: mailcap-2.1.41-2.el7.noarch.rpm                                                                                                                                                      <span class="token operator">|</span>  <span class="token number">31</span> kB  00:00:00     
<span class="token punctuation">(</span><span class="token number">4</span>/5<span class="token punctuation">)</span>: httpd-tools-2.4.6-93.el7.centos.x86_64.rpm                                                                                                                                           <span class="token operator">|</span>  <span class="token number">92</span> kB  00:00:00     
<span class="token punctuation">(</span><span class="token number">5</span>/5<span class="token punctuation">)</span>: httpd-2.4.6-93.el7.centos.x86_64.rpm                                                                                                                                                 <span class="token operator">|</span> <span class="token number">2.7</span> MB  00:00:02     
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
\u603B\u8BA1                                                                                                                                                                               <span class="token number">1.3</span> MB/s <span class="token operator">|</span> <span class="token number">3.0</span> MB  00:00:02     
Running transaction check
Running transaction <span class="token builtin class-name">test</span>
Transaction <span class="token builtin class-name">test</span> succeeded
Running transaction
  \u6B63\u5728\u5B89\u88C5    <span class="token builtin class-name">:</span> apr-1.4.8-5.el7.x86_64                                                                                                                                                                         <span class="token number">1</span>/5 
  \u6B63\u5728\u5B89\u88C5    <span class="token builtin class-name">:</span> apr-util-1.5.2-6.el7.x86_64                                                                                                                                                                    <span class="token number">2</span>/5 
  \u6B63\u5728\u5B89\u88C5    <span class="token builtin class-name">:</span> httpd-tools-2.4.6-93.el7.centos.x86_64                                                                                                                                                         <span class="token number">3</span>/5 
  \u6B63\u5728\u5B89\u88C5    <span class="token builtin class-name">:</span> mailcap-2.1.41-2.el7.noarch                                                                                                                                                                    <span class="token number">4</span>/5 
  \u6B63\u5728\u5B89\u88C5    <span class="token builtin class-name">:</span> httpd-2.4.6-93.el7.centos.x86_64                                                                                                                                                               <span class="token number">5</span>/5 
  \u9A8C\u8BC1\u4E2D      <span class="token builtin class-name">:</span> apr-1.4.8-5.el7.x86_64                                                                                                                                                                         <span class="token number">1</span>/5 
  \u9A8C\u8BC1\u4E2D      <span class="token builtin class-name">:</span> httpd-tools-2.4.6-93.el7.centos.x86_64                                                                                                                                                         <span class="token number">2</span>/5 
  \u9A8C\u8BC1\u4E2D      <span class="token builtin class-name">:</span> mailcap-2.1.41-2.el7.noarch                                                                                                                                                                    <span class="token number">3</span>/5 
  \u9A8C\u8BC1\u4E2D      <span class="token builtin class-name">:</span> httpd-2.4.6-93.el7.centos.x86_64                                                                                                                                                               <span class="token number">4</span>/5 
  \u9A8C\u8BC1\u4E2D      <span class="token builtin class-name">:</span> apr-util-1.5.2-6.el7.x86_64                                                                                                                                                                    <span class="token number">5</span>/5 

\u5DF2\u5B89\u88C5:
  httpd.x86_64 <span class="token number">0</span>:2.4.6-93.el7.centos                                                                                                                                                                               

\u4F5C\u4E3A\u4F9D\u8D56\u88AB\u5B89\u88C5:
  apr.x86_64 <span class="token number">0</span>:1.4.8-5.el7                      apr-util.x86_64 <span class="token number">0</span>:1.5.2-6.el7                      httpd-tools.x86_64 <span class="token number">0</span>:2.4.6-93.el7.centos                      mailcap.noarch <span class="token number">0</span>:2.1.41-2.el7                     

\u5B8C\u6BD5\uFF01
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="systemctl-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#systemctl-\u547D\u4EE4" aria-hidden="true">#</a> <code>systemctl</code> \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u7ACB\u5373\u542F\u52A8\u4E00\u4E2A\u670D\u52A1</span>
$ <span class="token function">sudo</span> systemctl start apache.service

<span class="token comment"># \u7ACB\u5373\u505C\u6B62\u4E00\u4E2A\u670D\u52A1</span>
$ <span class="token function">sudo</span> systemctl stop apache.service

<span class="token comment"># \u91CD\u542F\u4E00\u4E2A\u670D\u52A1</span>
$ <span class="token function">sudo</span> systemctl restart apache.service

<span class="token comment"># \u6740\u6B7B\u4E00\u4E2A\u670D\u52A1\u7684\u6240\u6709\u5B50\u8FDB\u7A0B</span>
$ <span class="token function">sudo</span> systemctl <span class="token function">kill</span> apache.service

<span class="token comment"># \u91CD\u65B0\u52A0\u8F7D\u4E00\u4E2A\u670D\u52A1\u7684\u914D\u7F6E\u6587\u4EF6</span>
$ <span class="token function">sudo</span> systemctl reload apache.service

<span class="token comment"># \u91CD\u8F7D\u6240\u6709\u4FEE\u6539\u8FC7\u7684\u914D\u7F6E\u6587\u4EF6</span>
$ <span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># \u663E\u793A\u67D0\u4E2A Unit \u7684\u6240\u6709\u5E95\u5C42\u53C2\u6570</span>
$ systemctl show httpd.service

<span class="token comment"># \u663E\u793A\u67D0\u4E2A Unit \u7684\u6307\u5B9A\u5C5E\u6027\u7684\u503C</span>
$ systemctl show -p CPUShares httpd.service

<span class="token comment"># \u8BBE\u7F6E\u67D0\u4E2A Unit \u7684\u6307\u5B9A\u5C5E\u6027</span>
$ <span class="token function">sudo</span> systemctl set-property httpd.service <span class="token assign-left variable">CPUShares</span><span class="token operator">=</span><span class="token number">500</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,47),H={href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",target:"_blank",rel:"noopener noreferrer"},U=s("Systemd \u5165\u95E8\u6559\u7A0B\uFF1A\u547D\u4EE4\u7BC7"),F=p('<h2 id="\u89E3\u51B3-selinux-\u62A5\u8B66" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3-selinux-\u62A5\u8B66" aria-hidden="true">#</a> \u89E3\u51B3 SELinux \u62A5\u8B66</h2><p><img src="'+f+`" alt="SELinux \u62A5\u8B66"></p><ul><li><p>\u76F4\u63A5\u5173\u95ED SELinux\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>setenforce <span class="token number">0</span> <span class="token comment"># \u5173\u95ED SELinux\uFF08\u7ACB\u5373\u751F\u6548\uFF0C\u91CD\u542F\u5931\u6548\uFF09\uFF1B0-\u5173\uFF1B1-\u5F00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5C06 <code>/etc/selinux/config</code> \u6587\u4EF6\u7684\u7B2C7\u884C\uFF1A<code>SELINUX=enforcing</code> \u4FEE\u6539\u6210\uFF1A<code>SELINUX=disabled</code>\uFF08\u91CD\u542F\u751F\u6548\uFF0C\u91CD\u542F\u6709\u6548\uFF09</p></li><li><p>\u6DFB\u52A0\u6B63\u786E\u7684\u6587\u4EF6\u7C7B\u578B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>semanage fcontext -a -t httpd_sys_content_t <span class="token string">&#39;/skillschina/market/index.html&#39;</span>
restorecon -v <span class="token string">&#39;/skillschina/market/index.html&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul>`,3),J={href:"http://linux.vbird.org/linux_basic/0440processcontrol.php#selinux",target:"_blank",rel:"noopener noreferrer"},W=s("\u9E1F\u54E5\u7684 Linux \u79C1\u623F\u83DC - 16.5 SELinux \u521D\u63A2"),$=p(`<h2 id="smbclient-\u547D\u4EE4\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#smbclient-\u547D\u4EE4\u8BE6\u89E3" aria-hidden="true">#</a> <code>smbclient</code> \u547D\u4EE4\u8BE6\u89E3</h2><p>\u8BED\u6CD5\uFF1A<code>smbclient [\u7F51\u7EDC\u8D44\u6E90][\u5BC6\u7801][-EhLN][-B&lt;IP\u5730\u5740&gt;][-d&lt;\u6392\u9519\u5C42\u7EA7&gt;][-i&lt;\u8303\u56F4&gt;][-I&lt;IP\u5730\u5740&gt;][-l&lt;\u8BB0\u5F55\u6587\u4EF6&gt;][-M&lt;NetBIOS\u540D\u79F0&gt;][-n&lt;NetBIOS\u540D\u79F0&gt;][-O&lt;\u8FDE\u63A5\u69FD\u9009\u9879&gt;][-p&lt;TCP\u8FDE\u63A5\u7AEF\u53E3&gt;][-R&lt;\u540D\u79F0\u89E3\u6790\u987A\u5E8F&gt;][-s&lt;\u76EE\u5F55&gt;][-t&lt;\u670D\u52A1\u5668\u5B57\u7801&gt;][-T&lt;tar\u9009\u9879&gt;][-U&lt;\u7528\u6237\u540D\u79F0&gt;][-W&lt;\u5DE5\u4F5C\u7FA4\u7EC4&gt;]</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[\u7F51\u7EDC\u8D44\u6E90] [\u7F51\u7EDC\u8D44\u6E90]\u7684\u683C\u5F0F\u4E3A//\u670D\u52A1\u5668\u540D\u79F0/\u8D44\u6E90\u5206\u4EAB\u540D\u79F0\u3002
[\u5BC6\u7801] \u8F93\u5165\u5B58\u53D6\u7F51\u7EDC\u8D44\u6E90\u6240\u9700\u7684\u5BC6\u7801\u3002
-B&lt;IP\u5730\u5740&gt; \u4F20\u9001\u5E7F\u64AD\u6570\u636E\u5305\u65F6\u6240\u7528\u7684IP\u5730\u5740\u3002
-d&lt;\u6392\u9519\u5C42\u7EA7&gt; \u6307\u5B9A\u8BB0\u5F55\u6587\u4EF6\u6240\u8BB0\u8F7D\u4E8B\u4EF6\u7684\u8BE6\u7EC6\u7A0B\u5EA6\u3002
-E \u5C06\u4FE1\u606F\u9001\u5230\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u8BBE\u5907\u3002
-h \u663E\u793A\u5E2E\u52A9\u3002
-i&lt;\u8303\u56F4&gt; \u8BBE\u7F6ENetBIOS\u540D\u79F0\u8303\u56F4\u3002
-I&lt;IP\u5730\u5740&gt; \u6307\u5B9A\u670D\u52A1\u5668\u7684IP\u5730\u5740\u3002
-l&lt;\u8BB0\u5F55\u6587\u4EF6&gt; \u6307\u5B9A\u8BB0\u5F55\u6587\u4EF6\u7684\u540D\u79F0\u3002
-L \u663E\u793A\u670D\u52A1\u5668\u7AEF\u6240\u5206\u4EAB\u51FA\u6765\u7684\u6240\u6709\u8D44\u6E90\u3002
-M&lt;NetBIOS\u540D\u79F0&gt; \u53EF\u5229\u7528WinPopup\u534F\u8BAE\uFF0C\u5C06\u4FE1\u606F\u9001\u7ED9\u9009\u9879\u4E2D\u6240\u6307\u5B9A\u7684\u4E3B\u673A\u3002
-n&lt;NetBIOS\u540D\u79F0&gt; \u6307\u5B9A\u7528\u6237\u7AEF\u6240\u8981\u4F7F\u7528\u7684NetBIOS\u540D\u79F0\u3002
-N \u4E0D\u7528\u8BE2\u95EE\u5BC6\u7801\u3002
-O&lt;\u8FDE\u63A5\u69FD\u9009\u9879&gt; \u8BBE\u7F6E\u7528\u6237\u7AEFTCP\u8FDE\u63A5\u69FD\u7684\u9009\u9879\u3002
-p&lt;TCP\u8FDE\u63A5\u7AEF\u53E3&gt; \u6307\u5B9A\u670D\u52A1\u5668\u7AEFTCP\u8FDE\u63A5\u7AEF\u53E3\u7F16\u53F7\u3002
-R&lt;\u540D\u79F0\u89E3\u6790\u987A\u5E8F&gt; \u8BBE\u7F6ENetBIOS\u540D\u79F0\u89E3\u6790\u7684\u987A\u5E8F\u3002
-s&lt;\u76EE\u5F55&gt; \u6307\u5B9Asmb.conf\u6240\u5728\u7684\u76EE\u5F55\u3002
-t&lt;\u670D\u52A1\u5668\u5B57\u7801&gt; \u8BBE\u7F6E\u7528\u4F55\u79CD\u5B57\u7B26\u7801\u6765\u89E3\u6790\u670D\u52A1\u5668\u7AEF\u7684\u6587\u4EF6\u540D\u79F0\u3002
-T&lt;tar\u9009\u9879&gt; \u5907\u4EFD\u670D\u52A1\u5668\u7AEF\u5206\u4EAB\u7684\u5168\u90E8\u6587\u4EF6\uFF0C\u5E76\u6253\u5305\u6210tar\u683C\u5F0F\u7684\u6587\u4EF6\u3002
-U&lt;\u7528\u6237\u540D\u79F0&gt; \u6307\u5B9A\u7528\u6237\u540D\u79F0\u3002
-W&lt;\u5DE5\u4F5C\u7FA4\u7EC4&gt; \u6307\u5B9A\u5DE5\u4F5C\u7FA4\u7EC4\u540D\u79F0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="\u8BA1\u5212\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u5212\u4EFB\u52A1" aria-hidden="true">#</a> \u8BA1\u5212\u4EFB\u52A1</h2><h3 id="\u4F7F\u7528-at-\u8BBE\u7F6E\u5B9A\u65F6\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-at-\u8BBE\u7F6E\u5B9A\u65F6\u4EFB\u52A1" aria-hidden="true">#</a> \u4F7F\u7528 <code>at</code> \u8BBE\u7F6E\u5B9A\u65F6\u4EFB\u52A1</h3>`,5),Z=s("\u53C2\u8003 "),X={href:"http://linux.vbird.org/linux_basic/0430cron.php#atjob",target:"_blank",rel:"noopener noreferrer"},Q=s("\u9CE5\u54E5\u7684 Linux \u79C1\u623F\u83DC -- \u7B2C\u5341\u4E94\u7AE0\u3001\u4F8B\u884C\u6027\u5DE5\u4F5C\u6392\u7A0B(crontab)"),nn=p(`<h4 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> atd      <span class="token comment"># \u5B89\u88C5 at</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> atd <span class="token comment"># \u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</span>
<span class="token function">sudo</span> systemctl start atd  <span class="token comment"># \u7ACB\u5373\u542F\u52A8</span>
<span class="token function">sudo</span> systemctl status atd <span class="token comment"># \u67E5\u770B\u72B6\u6001</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="manpages" tabindex="-1"><a class="header-anchor" href="#manpages" aria-hidden="true">#</a> manpages</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>AT(1)                      Linux Programmer&#39;s Manual                     AT(1)

NAME
       at, batch, atq, atrm - \u6392\u961F\u3001\u68C0\u67E5\u6216\u5220\u9664\u4EE5\u540E\u8981\u6267\u884C\u7684\u4F5C\u4E1A\u3002

\u603B\u89C8
       at  [-V]  [-q  \u961F\u5217]  [-f \u6587\u4EF6] [-mldbv] \u65F6\u95F4 at -c \u4F5C\u4E1A [\u4F5C\u4E1A...]  atq
       [-V] [-q \u961F\u5217] [-v]
       atrm [-V] \u4F5C\u4E1A [\u4F5C\u4E1A...]
       batch [-V] [-q \u961F\u5217] [-f \u6587\u4EF6] [-mv] [\u65F6\u95F4]
\u63CF\u8FF0
       at \u548C batch  \u4ECE\u6807\u51C6\u8F93\u5165\u6216\u4E00\u4E2A\u6307\u5B9A\u7684\u6587\u4EF6\u8BFB\u53D6\u547D\u4EE4\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u5728\u4EE5\u540E\u67D0\u4E2A\u65F6\u95F4
       \u7528 /bin/sh \u6267\u884C\u3002

       at      \u5728\u6307\u5B9A\u7684\u65F6\u95F4\u6267\u884C\u547D\u4EE4\u3002

       atq     \u5217\u51FA\u7528\u6237\u7684\u7B49\u5F85\u6267\u884C\u7684\u4F5C\u4E1A\uFF1B\u5728\u7528\u6237\u662F\u8D85\u7EA7\u7528\u6237\u7684\u60C5\u51B5\u4E0B\uFF0C\u5217\u51FA\u6240\u6709\u4EBA
               \u7684\u4F5C\u4E1A\u3002

       atrm    \u5220\u9664\u4F5C\u4E1A\u3002

       batch   \u5728\u7CFB\u7EDF\u8D1F\u8F7D\u6C34\u5E73\u5141\u8BB8\u7684\u65F6\u5019\u6267\u884C\u547D\u4EE4\uFF1B\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5F53\u5E73\u5747\u8D1F   \u8F7D\u964D\u5230\u4F4E
               \u4E8E0.8\uFF0C\u6216\u964D\u5230\u4E86\u5728  atrun \u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u671F\u671B\u503C\u65F6\u8FD0\u884C\u3002 \u8BD1\u6CE8\uFF1Aatrun
               \u6587\u4EF6\u53C2\u89C1 atd \u624B\u518C\u9875\u3002

       At \u5141\u8BB8\u76F8\u5F53\u590D\u6742\u7684\u65F6\u95F4\u6307\u5B9A\uFF0C\u5B83\u6269\u5C55\u4E86 POSIX.2 \u6807\u51C6\u3002\u5B83\u63A5\u53D7 HH:MM \u7684\u65F6\u95F4\u5F0F
       \u6837\uFF0C\u7528\u6765\u6307\u5B9A\u5728\u4E00\u5929\u7684\u67D0\u4E2A\u65F6\u95F4\u8FD0\u884C\u4E00\u4E2A\u4F5C\u4E1A\u3002  (\u5982\u679C\u65F6\u95F4\u5DF2\u7ECF\u8FC7\u4E86\u5219\u5047\u5B9A\u4E3A\u7B2C
       \u4E8C\u5929\u3002)\u4F60\u53EF\u4EE5\u6307\u5B9A  midnight  (\u5348\u591C)\u3001  noon  (\u4E2D\u5348)  \u6216   teatime   (\u4E0B
       \u53484\u70B9)\uFF0C\u4F60\u53EF\u4EE5\u7528  AM  \u6216 PM \u540E\u7F00\u6307\u5B9A\u4E00\u5929\u7684\u4E0A\u5348\u6216\u4E0B\u5348\u3002\u4F60\u53EF\u4EE5\u7ED9\u51FA month-
       name day \u52A0\u4E0A\u53EF\u9009 \u7684\u5E74\u4EFD\u7684\u5F0F\u6837\u7528\u6765\u6307\u5B9A\u8FD0\u884C at  \u7684\u65E5\u671F\uFF0C\u6216\u8005\u7ED9\u51FA  MMDDYY
       \u3001 MM/DD/YY \u6216 DD.MM.YY \u5F0F\u6837\u7528\u6765\u6307\u5B9A\u8FD0\u884C at \u7684\u65E5\u671F\u3002\u65E5\u671F\u7684\u6307\u5B9A \u5FC5\u987B\u8DDF\u5728
       \u65F6\u95F4\u6307\u5B9A\u7684\u540E\u9762\u3002\u4F60\u4E5F\u53EF\u4EE5\u7ED9\u51FA\u8C61 now + \u8BA1\u6570 \u65F6\u95F4\u5355\u4F4D \u7684\u5F0F\u6837\uFF0C\u8FD9\u91CC\u7684\u65F6\u95F4\u5355
       \u4F4D\u53EF\u4EE5\u662F  minutes  \u3001 hours \u3001 days \u6216 weeks\uFF0C \u4F60\u53EF\u4EE5\u7ED9\u65F6\u95F4\u52A0\u4E00\u4E2A today
       \u540E\u7F00\u6765\u6307\u5B9A at \u4ECA\u5929\u8FD0\u884C\u4F5C\u4E1A\uFF0C\u53EF\u4EE5 \u7ED9\u65F6\u95F4\u52A0\u4E00\u4E2A tomorrow \u540E\u7F00\u6765\u6307\u5B9A at \u660E
       \u5929\u8FD0\u884C\u4F5C\u4E1A\u3002

       \u4F8B\u5982\uFF0C\u8981\u5728\u4E09\u5929\u4EE5\u540E\u7684\u4E0B\u5348 4 \u70B9\u8FD0\u884C\u4E00\u4E2A\u4F5C\u4E1A\uFF0Cat \u65F6\u95F4\u53C2\u6570\u53EF\u4EE5 \u6307\u5B9A\u4E3A 4pm +
       3 days\u3002 \u8981\u57287\u670831\u65E5\u4E0A\u534810:00\u8FD0\u884C\u4E00\u4E2A\u4F5C\u4E1A\uFF0C at \u65F6\u95F4\u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u4E3A  10am
       Jul   31\uFF0C   \u8981\u5728\u660E\u5929\u4E0A\u53481\u70B9\u8FD0\u884C\u4E00\u4E2A  \u4F5C\u4E1A\uFF0Cat  \u65F6\u95F4\u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u4E3A  1am
       tomorrow\u3002

       \u65F6\u95F4\u6307\u5B9A\u7684\u7CBE\u786E\u7684\u5B9A\u4E49\u53EF\u4EE5\u5728 /usr/share/doc/at/timespec \u627E\u5230\u3002

       \u5BF9\u4E8E at \u548C batch \u4E24\u8005\uFF0C\u4ECE\u6807\u51C6\u8F93\u5165\u6216\u4EE5 -f \u9009\u9879\u6307\u5B9A\u7684\u6587\u4EF6\u4E2D  \u8BFB\u53D6\u547D\u4EE4\u5E76\u6267
       \u884C\u4E4B\u3002\u5DE5\u4F5C\u8DEF\u5F84\u3001\u73AF\u5883\u53D8\u91CF(\u9664\u4E86 TERM\u3001 DISPLAY \u548C _)\u3001 umask \u4ECE\u6240\u671F\u671B\u7684\u65F6
       \u95F4\u8D77\u4FDD\u6301\u4E0D\u53D8\u3002\u4ECE\u4E00\u4E2A\u4ECE\u6267\u884C su(1) \u547D\u4EE4\u5F97\u5230\u7684 shell  \u4E2D\u8C03\u7528\u7684  at   -  \u6216
       batch  - \u547D\u4EE4\u5C06\u4FDD\u6301\u5F53\u524D\u7684 userid\u3002 \u7528\u6237\u7684\u547D\u4EE4\u7684\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u548C\u6807\u51C6\u8F93\u51FA\u5C06
       \u7528\u90AE\u4EF6\u53D1\u7ED9\u7528\u6237\u3002\u53D1\u9001\u90AE\u4EF6  \u4F7F\u7528\u547D\u4EE4  /usr/sbin/sendmail\u3002   \u4ECE\u4E00\u4E2A\u4ECE\u6267\u884C
       su(1)\u547D\u4EE4\u5F97\u5230\u7684  shell \u4E2D\u6267\u884C\u4E86 at \uFF0C\u767B\u5F55 shell \u7684\u6240\u6709\u8005\u5C06\u63A5\u5230\u90AE\u4EF6\u3002 \u8BD1
       \u6CE8\uFF1Auserid \u662F\u7528\u6237\u6807\u8BC6\u7684\u610F\u601D\u3002umask \u662F\u4E0E\u6BCF\u4E2A\u8FDB\u7A0B\u76F8\u5173\u8054\u7684\u6587\u4EF6  \u65B9\u5F0F\u521B\u5EFA\u5C4F
       \u853D\u5B57\u3002

       \u8D85\u7EA7\u7528\u6237\u53EF\u4EE5\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u4F7F\u7528\u8FD9\u4E9B\u547D\u4EE4\u3002\u5BF9\u4E8E\u5176\u4ED6\u7528\u6237\uFF0C\u4F7F\u7528  at \u7684\u6743\u9650\u7531\u6587
       \u4EF6 /etc/at.allow \u548C /etc/at.deny \u786E\u5B9A\u3002

       \u5982\u679C\u6587\u4EF6 /etc/at.allow \u5B58\u5728\uFF0C\u5728\u5176\u4E2D\u63D0\u53CA\u7684\u7528\u6237\u540D\u88AB\u5141\u8BB8\u4F7F\u7528 at \u547D\u4EE4\u3002

       \u5982\u679C /etc/at.allow \u4E0D\u5B58\u5728\uFF0C\u800C /etc/at.deny \u5B58\u5728\uFF0C\u6240\u6709\u5728 /etc/at.deny \u4E2D
       \u672A\u63D0\u53CA\u7684\u7528\u6237\u88AB\u5141\u8BB8\u4F7F\u7528 at \u547D\u4EE4\u3002

       \u5982\u679C\u4E24\u8005\u5747\u4E0D\u5B58\u5728\uFF0C\u53EA\u7528\u8D85\u7EA7\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 at \u547D\u4EE4\u3002

       \u4E00\u4E2A\u7A7A\u7684 /etc/at.deny \u610F\u5473\u7740\u6240\u6709\u7528\u6237\u5747\u88AB\u5141\u8BB8\u4F7F\u7528\u8FD9\u4E9B\u547D\u4EE4\uFF0C \u8FD9\u662F\u7F3A\u7701\u7684\u914D
       \u7F6E\u3002
\u9009\u9879
       -V      \u5728\u6807\u51C6\u9519\u8BEF\u4E0A\u8F93\u51FA\u7248\u672C\u53F7\u3002

       -q queue
               \u4F7F\u7528\u6307\u5B9A\u7684\u961F\u5217\u3002\u4E00\u4E2A\u961F\u5217\u7528\u4E00\u4E2A\u5B57\u6BCD\u6807\u5B9A\uFF0C\u6709\u6548\u7684\u7684\u961F\u5217\u6807\u5B9A\u7684 \u8303\u56F4
               \u662F\u4ECEa\u5230z\u548C\u4ECEA\u5230Z\u3002at  \u7684\u7F3A\u7701\u961F\u5217\u662F a,batch \u7684\u7F3A\u7701\u961F\u5217\u662F b\u3002\u961F\u5217
               \u7684\u5B57\u6BCD\u987A\u5E8F\u8D8A\u9AD8\uFF0C\u5219\u961F\u5217\u8FD0\u884C\u65F6\u8D8A\u8C26\u8BA9(\u8FD0\u884C\u7EA7\u522B\u8D8A\u4F4E)\u3002   \u6307\u5B9A\u7684\u961F\u5217
               &quot;=&quot; \u4FDD\u7559\u7ED9\u5F53\u524D\u8FD0\u884C\u7684\u4F5C\u4E1A\u6240\u5728\u7684\u961F\u5217\u3002

       \u5982\u679C\u4E00\u4E2A\u4F5C\u4E1A\u88AB\u63D0\u4EA4\u5230\u4E00\u4E2A\u4EE5\u5927\u5199\u5B57\u6BCD\u6807\u5B9A\u7684\u961F\u5217\uFF0C\u5219\u4E0E\u63D0\u4EA4\u5230  batch  \u540C\u6837\u5BF9
       \u5F85\u3002\u5982\u679C\u7ED9 atq \u6307\u5B9A\u4E00\u4E2A\u961F\u5217\uFF0C\u5219\u53EA\u663E\u793A\u5728\u6B64\u6307\u5B9A \u961F\u5217\u4E2D\u7684\u4F5C\u4E1A\u3002

       -m      \u5F53\u4F5C\u4E1A\u5B8C\u6210\u65F6\u5373\u4F7F\u6CA1\u6709\u8F93\u51FA\u4E5F\u7ED9\u7528\u6237\u53D1\u90AE\u4EF6\u3002

       -f file \u4ECE\u6587\u4EF6\u800C\u4E0D\u662F\u6807\u51C6\u8F93\u5165\u4E2D\u8BFB\u53D6\u4F5C\u4E1A\u4FE1\u606F\u3002

       -l      \u662F atq \u7684\u522B\u540D\u3002

       -d      \u662F atrm \u7684\u522B\u540D\u3002

       -v      \u5BF9\u4E8E atq\uFF0C \u663E\u793A\u5B8C\u6574\u7684\u5728\u961F\u5217\u4E2D\u672A\u88AB\u5220\u9664\u7684\u4F5C\u4E1A\uFF0C\u5BF9\u4E8E\u5176\u4ED6  \u547D\u4EE4\uFF0C\u663E
               \u793A\u4F5C\u4E1A\u5C06\u8981\u6267\u884C\u7684\u65F6\u95F4\u3002

       \u663E\u793A\u7684\u65F6\u95F4\u7684\u683C\u5F0F\u7C7B\u4F3C\u4E8E&quot;1997-02-20  14:50&quot;\uFF0C\u4F46\u5982\u679C\u8BBE\u7F6E\u4E86 POSIXLY_CORRECT
       \u73AF\u5883\u53D8\u91CF\u4E4B\u540E\uFF0C\u683C\u5F0F\u7C7B\u4F3C\u4E8E&quot;Thu Feb 20 14:50:00 1996&quot;\u3002

       -c      \u8FDE\u63A5\u547D\u4EE4\u884C\u4E2D\u5217\u51FA\u7684\u4F5C\u4E1A\u5E76\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u3002

\u76F8\u5173\u6587\u4EF6
       /var/spool/at
       /var/spool/at/spool
       /proc/loadavg
       /var/run/utmp
       /etc/at.allow
       /etc/at.deny

\u53C2\u89C1
       cron(1), nice(1), sh(1), umask(2), atd(8)

\u7F3A\u9677
       \u5728 Linux \u4E0B\u6B63\u786E\u7684\u6279\u5904\u7406\u64CD\u4F5C\u4F9D\u8D56\u4E8E\u6302\u88C5\u5728/proc \u4E0A\u7684\u4E00\u4E2A proc-  \u7C7B\u578B\u7684\u76EE\u5F55
       \u7684\u5B58\u5728\u3002

       \u5982\u679C\u6587\u4EF6  /var/run/utmp \u4E0D\u53EF\u83B7\u5F97\u6216\u5DF2\u7ECF\u635F\u574F\uFF0C\u6216\u8005\u5728 at \u6240\u671F \u5F85\u7684\u65F6\u95F4\u7528\u6237
       \u6CA1\u6709\u767B\u5F55\uFF0C\u5411\u5728\u73AF\u5883\u53D8\u91CF LOGNAME \u4E2D\u627E\u5230\u7684 userid \u53D1\u9001\u90AE\u4EF6\u3002\u5982\u679C LOGNAME\u672A
       \u5B9A\u4E49\u6216\u662F\u7A7A\u7684\uFF0C\u5047\u5B9A\u4E3A\u5F53\u524D\u7684userid\u3002

       \u5F53\u524D\u5B9E\u73B0\u7684  at \u548C batch \u5728\u7528\u6237\u7ADE\u4E89\u8D44\u6E90\u7684\u65F6\u5019\u662F\u4E0D\u9002\u5408\u7684\u3002 \u5982\u679C\u4F60\u7684\u7AD9\u70B9\u662F
       \u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u5176\u4ED6\u7684\u6279\u5904\u7406\u7CFB\u7EDF\uFF0C \u4F8B\u5982 nqs\u3002

\u8457\u4F5C\u8005
       AT \u5927\u90E8\u5206\u662F\u7531Thomas Koenig\u5199\u7684\u3002ig25@rz.uni-karlsruhe.de.

[\u4E2D\u6587\u7248\u7EF4\u62A4\u4EBA]
       mhss &lt;jijingzhisheng@up369.com&gt;
       \u4E3B\u8981\u53C2\u7167\u4E86\uFF1A  Linux\u5B9E\u7528\u5927\u5168  /  \u9648\u5411\u9633\uFF0C\u65B9\u6C49  \u7F16\u8457.  -\u5317\u4EAC\uFF1A   \u79D1\u5B66\u51FA\u7248
       \u793E\uFF0C1998.8

[\u4E2D\u6587\u7248\u6700\u65B0\u66F4\u65B0]
       2000/10/27

\u300A\u4E2D\u56FDlinux\u8BBA\u575Bman\u624B\u518C\u9875\u7FFB\u8BD1\u8BA1\u5212\u300B:
       http://cmpp.linuxforum.net

\u8DCB
       \u672C\u9875\u9762\u4E2D\u6587\u7248\u7531\u4E2D\u6587 man \u624B\u518C\u9875\u8BA1\u5212\u63D0\u4F9B\u3002
       \u4E2D\u6587 man \u624B\u518C\u9875\u8BA1\u5212\uFF1Ahttps://github.com/man-pages-zh/manpages-zh

local                              Nov 1996                              AT(1)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br></div></div><h4 id="\u793A\u4F8B-\u4E24\u5206\u949F\u540E\u5411\u5168\u4F53\u5DF2\u767B\u5165\u7528\u6237\u53D1\u9001\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-\u4E24\u5206\u949F\u540E\u5411\u5168\u4F53\u5DF2\u767B\u5165\u7528\u6237\u53D1\u9001\u6D88\u606F" aria-hidden="true">#</a> \u793A\u4F8B\uFF1A\u4E24\u5206\u949F\u540E\u5411\u5168\u4F53\u5DF2\u767B\u5165\u7528\u6237\u53D1\u9001\u6D88\u606F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>at now + 2minutes
wall hello
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><kbd>Ctrl</kbd> + <kbd>D</kbd> \u5B8C\u6210\u8F93\u5165\u3002</p><h4 id="\u793A\u4F8B-20-\u5206\u949F\u540E\u91CD\u542F\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-20-\u5206\u949F\u540E\u91CD\u542F\u7CFB\u7EDF" aria-hidden="true">#</a> \u793A\u4F8B\uFF1A20 \u5206\u949F\u540E\u91CD\u542F\u7CFB\u7EDF</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>at now + 20minutes
<span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><kbd>Ctrl</kbd> + <kbd>D</kbd> \u5B8C\u6210\u8F93\u5165\u3002</p><h3 id="\u4F7F\u7528-crontab-\u8BA1\u5212\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-crontab-\u8BA1\u5212\u4EFB\u52A1" aria-hidden="true">#</a> \u4F7F\u7528 <code>crontab</code> \u8BA1\u5212\u4EFB\u52A1</h3><p>\u4F7F\u7528 <code>crontab -e</code> \u6307\u4EE4\u7F16\u8F91\u8BA1\u5212\u4EFB\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ubuntu@VM-12-14-ubuntu:~$ <span class="token function">crontab</span> -e
no <span class="token function">crontab</span> <span class="token keyword">for</span> ubuntu - using an empty one

Select an editor.  To change later, run <span class="token string">&#39;select-editor&#39;</span><span class="token builtin class-name">.</span>
<span class="token number">1</span>. /bin/nano        <span class="token operator">&lt;</span>---- easiest
<span class="token number">2</span>. /usr/bin/vim.basic
<span class="token number">3</span>. /usr/bin/vim.tiny
<span class="token number">4</span>. /bin/ed

Choose <span class="token number">1</span>-4 <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>: <span class="token number">2</span>
No modification made
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@study ~<span class="token punctuation">]</span><span class="token comment"># crontab [-u username] [-l|-e|-r]</span>
\u9078\u9805\u8207\u53C3\u6578\uFF1A
-u  \uFF1A\u53EA\u6709 root \u624D\u80FD\u9032\u884C\u9019\u500B\u4EFB\u52D9\uFF0C\u4EA6\u5373\u5E6B\u5176\u4ED6\u4F7F\u7528\u8005\u5EFA\u7ACB/\u79FB\u9664 <span class="token function">crontab</span> \u5DE5\u4F5C\u6392\u7A0B\uFF1B
-e  \uFF1A\u7DE8\u8F2F <span class="token function">crontab</span> \u7684\u5DE5\u4F5C\u5167\u5BB9
-l  \uFF1A\u67E5\u95B1 <span class="token function">crontab</span> \u7684\u5DE5\u4F5C\u5167\u5BB9
-r  \uFF1A\u79FB\u9664\u6240\u6709\u7684 <span class="token function">crontab</span> \u7684\u5DE5\u4F5C\u5167\u5BB9\uFF0C\u82E5\u50C5\u8981\u79FB\u9664\u4E00\u9805\uFF0C\u8ACB\u7528 -e \u53BB\u7DE8\u8F2F\u3002

\u7BC4\u4F8B\u4E00\uFF1A\u7528 dmtsai \u7684\u8EAB\u4EFD\u5728\u6BCF\u5929\u7684 <span class="token number">12</span>:00 \u767C\u4FE1\u7D66\u81EA\u5DF1
<span class="token punctuation">[</span>dmtsai@study ~<span class="token punctuation">]</span>$ <span class="token function">crontab</span> -e
<span class="token comment"># \u6B64\u6642\u6703\u9032\u5165 vi \u7684\u7DE8\u8F2F\u756B\u9762\u8B93\u60A8\u7DE8\u8F2F\u5DE5\u4F5C\uFF01\u6CE8\u610F\u5230\uFF0C\u6BCF\u9805\u5DE5\u4F5C\u90FD\u662F\u4E00\u884C\u3002</span>
<span class="token number">0</span>   <span class="token number">12</span>  *  *  * mail -s <span class="token string">&quot;at 12:00&quot;</span> dmtsai <span class="token operator">&lt;</span> /home/dmtsai/.bashrc
<span class="token comment">#\u5206 \u6642  \u65E5 \u6708 \u9031 |&lt;==============\u6307\u4EE4\u4E32========================&gt;|</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,15),sn=s("\u53C2\u8003 "),an={href:"http://linux.vbird.org/linux_basic/0430cron.php#etc_crontab",target:"_blank",rel:"noopener noreferrer"},en=s("\u9CE5\u54E5\u7684 Linux \u79C1\u623F\u83DC -- \u7B2C\u5341\u4E94\u7AE0\u3001\u4F8B\u884C\u6027\u5DE5\u4F5C\u6392\u7A0B(crontab)"),pn=p(`<h4 id="\u793A\u4F8B-\u6BCF\u5929\u6BCF\u5C0F\u65F6\u7684-30-\u5206-\u5C06-home-\u76EE\u5F55\u5B9E\u65BD\u538B\u7F29\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B-\u6BCF\u5929\u6BCF\u5C0F\u65F6\u7684-30-\u5206-\u5C06-home-\u76EE\u5F55\u5B9E\u65BD\u538B\u7F29\u6253\u5305" aria-hidden="true">#</a> \u793A\u4F8B\uFF0C\u6BCF\u5929\u6BCF\u5C0F\u65F6\u7684 30 \u5206\uFF0C\u5C06 <code>/home</code> \u76EE\u5F55\u5B9E\u65BD\u538B\u7F29\u6253\u5305</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">30</span> * * * * <span class="token function">tar</span> -cvf /home.tar.xz /home
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,2),rn={href:"https://www.runoob.com/linux/linux-comm-tar.html",target:"_blank",rel:"noopener noreferrer"},ln=s("Linux tar \u547D\u4EE4 | \u83DC\u9E1F\u6559\u7A0B"),cn=n("h2",{id:"linux-\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-\u5B89\u88C5","aria-hidden":"true"},"#"),s(" Linux \u5B89\u88C5")],-1),on=s("\u53C2\u8003 "),tn=s("\u5B89\u88C5 VMware Workstation"),bn=s("\u524D\u5F80 "),un={href:"https://www.centos.org/download/",target:"_blank",rel:"noopener noreferrer"},mn=s("CentOS \u5B98\u7F51"),dn=s(" \u4E0B\u8F7D\u7CFB\u7EDF\u955C\u50CF "),kn=n("blockquote",null,[n("p",null,[s("\u57F9\u8BAD\u5BA4\u5185\u7F51\u5171\u4EAB\u6587\u4EF6\u5939\uFF1A"),n("code",null,"\\\\WS22\\Yue_plus \u7684\u5171\u4EAB\\LinuxOS")])],-1),hn=n("p",null,"\u53EF\u524D\u5F80bilbil\u7F51\u7AD9\u89C2\u770B\u7B2C\u4E09\u7AE0",-1),gn=n("iframe",{src:"//player.bilibili.com/player.html?aid=99111795&bvid=BV187411y7hF&cid=169181090&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",style:{width:"100%",height:"380px"}}," ",-1),An=p('<h2 id="vmware-\u865A\u62DF\u673A\u4EE5\u53CA\u955C\u50CF\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#vmware-\u865A\u62DF\u673A\u4EE5\u53CA\u955C\u50CF\u5B89\u88C5" aria-hidden="true">#</a> VMware \u865A\u62DF\u673A\u4EE5\u53CA\u955C\u50CF\u5B89\u88C5</h2><p>1.\u65B0\u5EFA\u4E00\u4E2A\u865A\u62DF\u673A</p><p><img src="'+v+'" alt="image-20200829152047933"></p><p>2.\u9009\u62E9\u5178\u578B\u70B9\u51FB\u4E0B\u4E00\u6B65</p><p><img src="'+x+'" alt="image-20200829152047933"></p><p>3.\u9009\u62E9\u81EA\u5DF1\u8981\u5B89\u88C5\u7684\u955C\u50CF\uFF0C\u9009\u62E9\u5B8C\u6BD5\u76F4\u63A5\u70B9\u51FB\u4E0B\u4E00\u6B65</p><p><img src="'+y+'" alt="image-20200829152047933"></p><p>4.\u6B64\u6B65\u9AA4\u662F\u6CA1\u6709\u955C\u50CF\u7684\u64CD\u4F5C\u3002\u5EFA\u8BAE\u4F7F\u7528\u955C\u50CF\u5B89\u88C5\uFF0C\u6709\u955C\u50CF\u53EF\u7701\u7565\u6B64\u6B65\u9AA4\u7136\u540E\u70B9\u51FB\u4E0B\u4E00\u6B65</p><p><img src="'+E+'" alt="image-20200829152047933"></p><p>5.\u865A\u62DF\u673A\u547D\u540D\u4EE5\u53CA\u9009\u62E9\u4ED6\u6240\u9700\u8981\u50A8\u5B58\u7684\u7684\u4F4D\u7F6E\uFF0C\u8BBE\u7F6E\u5B8C\u540E\u70B9\u51FB\u4E0B\u4E00\u6B65</p><p><img src="'+S+'" alt="image-20200829152047933"></p><p>6.\u6307\u5B9A\u78C1\u76D8\u5BB9\u91CF\u7684\u5927\u5C0F\uFF0C\u53EF\u9ED8\u8BA4\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u8BBE\u7F6E</p><p><img src="'+P+'" alt="image-20200829152047933"></p><p>7.\u505A\u5B8C\u4EE5\u4E0A\u6B65\u9AA4\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u5B89\u88C5\u865A\u62DF\u673A\u4E86\uFF0C\u70B9\u51FB\u5B8C\u6210\u5F00\u59CB\u5B89\u88C5</p>',14);function _n(fn,vn){const e=r("ExternalLinkIcon"),l=r("RouterLink");return i(),o(b,null,[C,w,B,n("ul",null,[n("li",null,[n("a",L,[I,a(e)])]),n("li",null,[n("a",N,[T,a(e)])]),n("li",null,[n("a",O,[D,a(e)]),n("ul",null,[n("li",null,[q,n("a",j,[R,a(e)])])])]),n("li",null,[n("a",V,[K,a(e)])]),n("li",null,[n("a",G,[z,a(e)])])]),Y,n("blockquote",null,[n("p",null,[n("a",H,[U,a(e)])])]),F,n("blockquote",null,[n("p",null,[n("a",J,[W,a(e)])])]),$,n("blockquote",null,[n("p",null,[Z,n("a",X,[Q,a(e)])])]),nn,n("blockquote",null,[n("p",null,[sn,n("a",an,[en,a(e)])])]),pn,n("blockquote",null,[n("p",null,[n("a",rn,[ln,a(e)])])]),cn,n("ol",null,[n("li",null,[on,a(l,{to:"/serve/VM/VMware/#%E5%AE%89%E8%A3%85-vmware"},{default:t(()=>[tn]),_:1})]),n("li",null,[bn,n("a",un,[mn,a(e)]),dn,kn])]),hn,gn,An],64)}var yn=c(M,[["render",_n],["__file","index.html.vue"]]);export{yn as default};
