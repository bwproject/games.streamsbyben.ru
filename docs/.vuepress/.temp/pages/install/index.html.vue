<template><div><h1 id="установка-launchserver" tabindex="-1"><a class="header-anchor" href="#установка-launchserver" aria-hidden="true">#</a> Установка LaunchServer</h1>
<h2 id="выбор-хостинга" tabindex="-1"><a class="header-anchor" href="#выбор-хостинга" aria-hidden="true">#</a> Выбор хостинга</h2>
<p>Для работы лаунчсервера необходим  <strong>виртуальный (VDS/VPS)</strong>  или  <strong>выделенный (Dedicated)</strong>  сервер на дистрибутиве Linux (Для <RouterLink to="/install/#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BD%D0%B0-windows-%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F">Windows</RouterLink>) , а так же:</p>
<ul>
<li>Один из актуальных дистрибутивов: <strong>Ubuntu 22.04</strong>, <strong>Debian 11</strong>, <strong>CentOS 8</strong>, <strong>ArchLinux</strong> и другие</li>
<li>Веб-сервер  <strong>Nginx</strong>  для раздачи статического контента</li>
<li>Минимум  <strong>300Мб свободной оперативной памяти</strong>  для работы лаунчсервера</li>
<li>При сборке лаунчсервера из исходников прямо на машине может потребоваться до 1 Гб свободной оперативной памяти для работы Gradle</li>
</ul>
<p><em>Опционально:</em></p>
<ul>
<li>Веб-сайт, CMS или личный кабинет с поддерживаемым алгоритмом хеширования</li>
<li>База данных  <strong>MySQL/MariaDB</strong>  или  <strong>PostgreSQL</strong></li>
</ul>
<p><em>Рекомендации:</em></p>
<ul>
<li>Не размещайте сайт на shared хостинге, так как это может привести к проблемам с подключением к базе данных, производительностью и стабильностью работы</li>
<li>Хостинги, предоставляющие VDS/VPS на основе виртуализации OpenVZ не позволяют использовать некоторые программы и нагружать процессор выше определенного уровня длительное время</li>
<li>Старые версии дистрибутивов могут содержать уязвимости или слишком старые версии ПО с большим количеством багов. В таком случае рекомендуется обновиться до последней версии или сменить хостинг провайдера</li>
</ul>
<p>Если вы хотите установить лаунчсервер на Windows для локального тестирования следуйте <RouterLink to="/install/#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BD%D0%B0-windows-%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F">этой</RouterLink> инструкции.</p>
<h2 id="настроика-хостинга" tabindex="-1"><a class="header-anchor" href="#настроика-хостинга" aria-hidden="true">#</a> Настройка хостинга</h2>
<p>Первым шагом необходимо подготовить окружение - создать пользователя, установить firewall, Java</p>
<p>Для запуска LaunchServer необходима Java 17. Она так же подходит для запуска майнкрафт сервера 1.18+
Для запуска майнкрафт сервера 1.17.x необходима - Java 16.
Для запуска майнкрафт сервера 1.16.5 и ниже - Java 8.
Необходимо установить их все, если вы собираетесь держать лаунчсервер и сервера на одной машине.</p>
<CodeGroup>
<CodeGroupItem title="DEBIAN / UBUNTU">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gnupg2 <span class="token function">wget</span> apt-transport-https <span class="token parameter variable">-y</span>
<span class="token function">wget</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-O</span> - https://download.bell-sw.com/pki/GPG-KEY-bellsoft <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> - 
<span class="token builtin class-name">echo</span> <span class="token string">"deb [arch=amd64] https://apt.bell-sw.com/ stable main"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/bellsoft.list
<span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> bellsoft-java17-full
<span class="token function">sudo</span> update-alternatives <span class="token parameter variable">--config</span> <span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Целевые архитектуры процессоров: <Badge type="warning" text="Важно" vertical="top" /></summary>
<div class="custom-container warning"><p class="custom-container-title">Описание:</p>
<ul>
<li><strong>amd64</strong> является более распространённой архитектурой на текущее время</li>
<li>Если <strong>amd64</strong> не является целевой архитектурой, замените его в скрипте выше в поле <strong>[arch=amd64]</strong></li>
</ul>
<p>Список возможных архитектур:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>amd64, i386, arm64, armhf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Сопоставление:
<ul>
<li><strong>amd64</strong> - x86 (64 бит)</li>
<li><strong>i386</strong> - x86 (32 бит)</li>
<li><strong>arm64</strong> - aarch64</li>
</ul>
</li>
</ul>
</div>
<div class="custom-container warning"><p class="custom-container-title">Примечание:</p>
<ul>
<li>Такие архитектуры как <strong>arm64</strong> и <strong>armhf</strong> не поддерживают сборку EXE - бинарного файла лаунчера, через launch4j</li>
</ul>
<hr>
<ul>
<li>Если ваша архитектура <strong>amd64</strong> или <strong>i386</strong>, включите сборку EXE в конфигурации <code v-pre>LaunchServer.json</code>:
<ul>
<li>launch4j:
<ul>
<li>enabled: true</li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">Узнать архитектуру ядра:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">uname</span> <span class="token parameter variable">-m</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print(substr($0,0,3))}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">Узнать битность ядра:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>getconf LONG_BIT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">Удалить из sources.list</p>
<ul>
<li>Необходимо, если ошибочно добавили неправильную архитектуру
<ul>
<li>Ошибка в консоли: <code v-pre>E: Unable to locate package bellsoft-java17-full</code></li>
</ul>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/apt/sources.list.d/bellsoft.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Измените архитектуру в скрипте и повторите добавление и установку</li>
</ul>
</div>
</details>
<details class="custom-container details"><summary>Команда одной строкой:</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gnupg2 <span class="token function">wget</span> apt-transport-https <span class="token parameter variable">-y</span> <span class="token punctuation">;</span> <span class="token function">wget</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-O</span> - https://download.bell-sw.com/pki/GPG-KEY-bellsoft <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> - <span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token string">"deb [arch=amd64] https://apt.bell-sw.com/ stable main"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/bellsoft.list <span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> bellsoft-java17-full <span class="token punctuation">;</span> <span class="token function">sudo</span> update-alternatives <span class="token parameter variable">--config</span> <span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<details class="custom-container details"><summary>Смена Java по умолчанию:</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> update-alternatives <span class="token parameter variable">--config</span> <span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
</CodeGroupItem>
<CodeGroupItem title="CENTOS">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token operator">|</span> <span class="token function">tee</span> /etc/yum.repos.d/bellsoft.repo <span class="token operator">></span> /dev/null <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
[BellSoft]
name=BellSoft Repository
baseurl=https://yum.bell-sw.com
enabled=1
gpgcheck=1
gpgkey=https://download.bell-sw.com/pki/GPG-KEY-bellsoft
priority=1
EOF</span>
yum update
yum <span class="token function">install</span> bellsoft-java17-full
alternatives <span class="token parameter variable">--config</span> <span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Смена Java по умолчанию:</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> alternatives <span class="token parameter variable">--config</span> <span class="token function">java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
</CodeGroupItem>
<CodeGroupItem title="OTHER">
<p>Посетите <a href="https://bell-sw.com/pages/liberica_install_guide-17.0.5/" target="_blank" rel="noopener noreferrer">BELLSOFT Installation Guide<ExternalLinkIcon/></a></p>
</CodeGroupItem>
</CodeGroup>
<h2 id="создание-пользователя-launcher" tabindex="-1"><a class="header-anchor" href="#создание-пользователя-launcher" aria-hidden="true">#</a> Создание пользователя launcher</h2>
<p>Создание пользователя <strong>launcher</strong>:
(Актуально для Ubuntu, Debian, CentOS, ArchLinux)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token parameter variable">-s</span> /bin/bash launcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details class="custom-container details"><summary>Инструкции по работе с su:</summary>
<div class="custom-container tip"><p class="custom-container-title">Выполнение команд от имени пользователя launcher и переход в домашнюю папку:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">su</span> - launcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">Выполнение команд от имени пользователя launcher без смены каталога:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">su</span> launcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<div class="custom-container tip"><p class="custom-container-title">Выход обратно в root:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
</details>
<h2 id="установка-launchserver-1" tabindex="-1"><a class="header-anchor" href="#установка-launchserver-1" aria-hidden="true">#</a> Установка LaunchServer</h2>
<p>Перейдите в пользователя <strong>launcher</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">su</span> - launcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Выполнить установку <strong>LaunchServer</strong>'a скриптом:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> - https://mirror.gravitlauncher.com/scripts/setup-master.sh <span class="token operator">|</span> <span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">cat</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span>/dev/tty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>После завершения установки запустите лаунчсервер для начальной настройки:</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./start.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Укажите ваш ДОМЕН или IP, на котором будет работать лаунчсервер</li>
<li>Укажите название вашего проекта, которое будет отображаться в лаунчере и в папке AppData</li>
<li>После первого запуска закройте лаунчсервер командой <strong>stop</strong></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details class="custom-container details"><summary>Описание папок и файлов установленных скриптом</summary>
<div class="custom-container tip"><p class="custom-container-title">Список папок SRC и git:</p>
<ul>
<li><strong>src/</strong>  - исходный код лаунчсервера, API, модулей, лаунчера</li>
<li><strong>srcRuntime/</strong>  - исходный код графической части лаунчера (рантайм)</li>
<li><strong>compat/</strong>  - дополнительные важные файлы: библиотека авторизации, ServerWrapper, модули для лаунчера и лаунчсервера и т.д.</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">Установщик так же собирает все модули, готовые модули можно найти по путям:</p>
<ul>
<li><strong>src/modules/&lt;НазваниеМодуля&gt;_module/build/libs/&lt;НазваниеМодуля&gt;_module.jar</strong> - собранный модуль для лаунчсервера.</li>
<li><strong>src/modules/&lt;НазваниеМодуля&gt;_lmodule/build/libs/&lt;НазваниеМодуля&gt;_lmodule.jar</strong> - собранный модуль для лаунчера.</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">Готовые скрипты, созданные установщиком:</p>
<ul>
<li><strong>./start.sh</strong>  - запуск лаунчсервера для тестирования и начальной настройки</li>
<li><strong>./startscreen.sh</strong>  - запуск лаунчсервера на постоянной основе с помощью утилиты screen. Не запускайте два лаунчсервера одновременно!</li>
<li><strong>./update.sh</strong>  - обновляет лаунчсервер, лаунчер и рантайм до последней релизной версии</li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">Список папок лаунчсервера:</p>
<ul>
<li><strong>libraries/</strong>  - библиотеки для лаунчсервера</li>
<li><strong>modules/</strong>  - модули для лаунчсервера (оканчивающиеся на _module.jar)</li>
<li><strong>profiles/</strong>  - папка профилей для запуска MineCraft</li>
<li><strong>updates/</strong>  - папка обновлений</li>
<li><strong>logs/</strong>  - папка с логами (журналом) лаунчсервера</li>
<li><strong>runtime/</strong>  - папка с дизайном лаунчера</li>
<li><strong>launcher-modules/</strong>  - модули для лаунчера (оканчивающиеся на _lmodule.jar)</li>
<li><strong>launcher-libraries/</strong>  - библиотеки для лаунчера</li>
<li><strong>launcher-compile-libraries/</strong>  - вспомогательные библиотеки для лаунчера</li>
<li><strong>launcher-pack</strong> - файлы, которые будут включены в jar лаунчера без изменений</li>
<li><strong>config/</strong>  - настройка конфигурации модулей</li>
<li><strong>proguard/</strong>  - настройки Proguard (обфускация кода)</li>
<li><strong>guard/</strong>  - нативная защита (по умолчанию отсутствует)</li>
</ul>
</div>
</details>
<h2 id="настроика-nginx" tabindex="-1"><a class="header-anchor" href="#настроика-nginx" aria-hidden="true">#</a> Настройка Nginx</h2>
<p>Для достижения оптимальной производительности отдачи файлов нужно настроить Nginx</p>
<ul>
<li>
<p>Посетите сайт <a href="https://nginx.org/en/linux_packages.html" target="_blank" rel="noopener noreferrer">[NGINX]<ExternalLinkIcon/></a> и установите Nginx в соответствии с вашей системой</p>
</li>
<li>
<p>Создайте в пространстве имён своего домена <strong>A</strong> запись, вида <code v-pre>launcher.ДОМЕН.ru</code>, с вашим <strong>IP</strong> машины с лаунчсервером</p>
</li>
</ul>
<details class="custom-container details"><summary>Путь к конфигурации Nginx:</summary>
<p>Предпочтительно создавать отдельный файл конфигурации для каждого домена отдельно:
(Воспользуйтесь SFTP клиентом)</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/etc/nginx/conf.d/launcher.ДОМЕН.ru.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Если у вас на машине будет только одна настройка, можете отредактировать конфигурацию по умолчанию:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">nano</span> /etc/nginx/conf.d/default.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<CodeGroup>
<CodeGroupItem title="На DNS имени">
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> gravitlauncher</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:9274</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">map</span> <span class="token variable">$http_upgrade</span> <span class="token variable">$connection_upgrade</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">default</span> upgrade</span><span class="token punctuation">;</span>
    ''      <span class="token directive"><span class="token keyword">close</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> launcher.ВАШДОМЕН.ru</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
    <span class="token comment">#access_log  /var/log/nginx/launcher.ВАШДОМЕН.ru.access.log main;</span>
    <span class="token comment">#error_log  /var/log/nginx/launcher.ВАШДОМЕН.ru.error.log notice;</span>
    
    <span class="token directive"><span class="token keyword">root</span> /путь/до/updates</span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://gravitlauncher</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token variable">$connection_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /webapi/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:9274/webapi/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> ~ /\.(?!well-known).*</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="На IP">
<div class="language-nginx ext-nginx line-numbers-mode"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> gravitlauncher</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:9274</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">map</span> <span class="token variable">$http_upgrade</span> <span class="token variable">$connection_upgrade</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">default</span> upgrade</span><span class="token punctuation">;</span>
    ''      <span class="token directive"><span class="token keyword">close</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">charset</span> utf-8</span><span class="token punctuation">;</span>
    <span class="token comment">#access_log  /var/log/nginx/launcher.access.log main;</span>
    <span class="token comment">#error_log  /var/log/nginx/launcher.error.log notice;</span>
    
    <span class="token directive"><span class="token keyword">root</span> /путь/до/updates</span><span class="token punctuation">;</span>
    
    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /api</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://gravitlauncher</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_http_version</span> 1.1</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Upgrade <span class="token variable">$http_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Connection <span class="token variable">$connection_upgrade</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> /webapi/</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:9274/webapi/</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token directive"><span class="token keyword">location</span> ~ /\.(?!well-known).*</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">deny</span> all</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">Проверить конфигурацию и перезагрузить Nginx:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nginx <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Должны увидеть:</p>
<div class="language-log ext-log line-numbers-mode"><pre v-pre class="language-log"><code><span class="token property">nginx:</span> the configuration file <span class="token file-path string">/etc/nginx/nginx.conf</span> syntax is ok
<span class="token property">nginx:</span> configuration file <span class="token file-path string">/etc/nginx/nginx.conf</span> test is successful
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Включить Nginx как службу Systemd:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Перезагрузка сервиса:</p>
<CodeGroup>
<CodeGroupItem title="Systemd">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl restart nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="init.d">
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">service</span> nginx restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<ul>
<li>Без доменного имени перенос лаунчера на другую машину привёдёт к отказу самообновления.</li>
<li>Так же SSL сертификат невозможно выдать на IP. В последствии соединение будет незащищённым и может быть скомпрометировано.</li>
</ul>
</div>
<details class="custom-container details"><summary>Заметки по правам: <Badge type="warning" text="Важно" vertical="top" /></summary>
<p>Если у nginx нет прав для чтения директорий, выдайте:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">chmod</span> +x /home/launcher <span class="token operator">&amp;&amp;</span>
<span class="token function">find</span> /home/launcher/updates <span class="token parameter variable">-type</span> d <span class="token parameter variable">-exec</span> <span class="token function">chmod</span> <span class="token number">755</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\</span><span class="token punctuation">;</span> <span class="token operator">&amp;&amp;</span>
<span class="token function">find</span> /home/launcher/updates <span class="token parameter variable">-type</span> f <span class="token parameter variable">-exec</span> <span class="token function">chmod</span> <span class="token number">644</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Изменить группу и пользователя на всё содержимое домашней директории <strong>launcher</strong>:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">chown</span> <span class="token parameter variable">-R</span> launcher:launcher /home/launcher
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h2 id="настроика-безопасного-подключения" tabindex="-1"><a class="header-anchor" href="#настроика-безопасного-подключения" aria-hidden="true">#</a> Настройка безопасного подключения</h2>
<p>Для обеспечения безопасности передаваемых паролей, защиты от внедрения в процесс обмена данными нужно подключить к своему домену SSL сертификат. На данный момент его можно купить или получить бесплатно (Let's Encrypt/Cloudflare). Вы должны будете установить его на домен с лаунчсервером <code v-pre>ВАШДОМЕН.ru</code> и немного изменить настройки лаунчсервера:</p>
<ul>
<li>Откройте файл LaunchServer.json и найдите там секцию netty</li>
<li>Измените ссылки формата <code v-pre>http://ДОМЕН ИЛИ IP:9274/ЧТО-ТО</code> на <code v-pre>https://ВАШДОМЕН.ru/ЧТО-ТО</code></li>
<li>Измените ссылку на websocket лаунчера с <code v-pre>ws://ДОМЕН ИЛИ IP:9274/api</code> на <code v-pre>wss://ВАШДОМЕН.ru/api</code></li>
<li>Соберите лаунчер командой <code v-pre>build</code> и проверьте работоспособность</li>
<li>Закройте порт 9274 (если он был открыт), так как теперь лаунчсервер будет получать и передавать данные через nginx по портам 80 и 443</li>
</ul>
<p>В качестве дополнительных мер безопасности можно настроить сертификат подписи кода (CodeSign), который помогает уменьшить ложноположительные срабатывания антивирусов на Launch4J обертку (для .exe файла). Установите модуль  <a href="https://github.com/GravitLauncher/LauncherModules/tree/master/OpenSSLSignCode_module" target="_blank" rel="noopener noreferrer">OSSLCodeSignModule<ExternalLinkIcon/></a>  для подписи. Получить сертификат подписи кода можно несколькими способами:</p>
<ul>
<li>Сгенерировать самоподписанный сертификат с помощью модуля  <a href="https://github.com/GravitLauncher/LauncherModules/tree/master/GenerateCertificate_module" target="_blank" rel="noopener noreferrer">GenerateCertificateModule<ExternalLinkIcon/></a></li>
<li>Создать себе самоподписанные сертификаты с помощью утилиты  <a href="https://github.com/chris2511/xca/releases" target="_blank" rel="noopener noreferrer">XCA<ExternalLinkIcon/></a></li>
<li>Купить полноценный сертификат подписи кода (дорого)</li>
<li>Отдать сборки лаунчера другому человеку, который подпишет .exe файлы за денежное вознаграждение</li>
</ul>
<p>Для большинства проектов (кроме достаточно крупных) рекомендуется первый вариант. По ссылке вы можете найти инструкцию по установке модуля и генерации сертификата.</p>
<p>Если вы не крупный проект, то скорее всего столкнетесь с защитником  <a href="https://docs.microsoft.com/ru-ru/windows/security/threat-protection/microsoft-defender-smartscreen/microsoft-defender-smartscreen-overview" target="_blank" rel="noopener noreferrer">SmartScreen<ExternalLinkIcon/></a>, который ведет статистику скачиваний и на файлы с низким числом скачиваний выдает предупреждение. Чтобы его не было, вам необходимо отправить файл на проверку:</p>
<ul>
<li>Зарегистрируйтесь или войдите в аккаунт Microsoft</li>
<li>Отправьте файл на проверку, заполнив  <a href="https://www.microsoft.com/en-us/wdsi/filesubmission/" target="_blank" rel="noopener noreferrer">эту форму<ExternalLinkIcon/></a></li>
<li>Ждите результата</li>
</ul>
<p>При достижении определенного числа скачиваний проблема уйдет &quot;сама собой&quot;, а некоторые пользователи могут её вовсе не заметить.</p>
<h2 id="установка-на-windows-только-для-тестирования" tabindex="-1"><a class="header-anchor" href="#установка-на-windows-только-для-тестирования" aria-hidden="true">#</a> Установка на Windows (ТОЛЬКО ДЛЯ ТЕСТИРОВАНИЯ)</h2>
<p>Настройте окружение:</p>
<ul>
<li>Скачиваем и устанавливаем сборку OpenJDK 17 от  <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer">AdoptJDK<ExternalLinkIcon/></a>  (JDK 17 Windows x64 Hotspot) или  <a href="https://libericajdk.ru/pages/liberica-jdk/" target="_blank" rel="noopener noreferrer">LibericaJDK<ExternalLinkIcon/></a>.  <strong>Запомните или запишите путь к установленной JDK</strong></li>
<li>Если вы установили AdoptJDK или любую другую сборку OpenJDK без OpenJFX, скачайте  <a href="https://download2.gluonhq.com/openjfx/17.0.0.1/openjfx-17.0.0.1_windows-x64_bin-jmods.zip" target="_blank" rel="noopener noreferrer">jmods<ExternalLinkIcon/></a>  и  <a href="https://download2.gluonhq.com/openjfx/17.0.0.1/openjfx-17.0.0.1_windows-x64_bin-sdk.zip" target="_blank" rel="noopener noreferrer">sdk<ExternalLinkIcon/></a>  и скопируйте содержимое архивов  <strong>с заменой</strong>  в папку установки JDK, полученную на первом этапе</li>
<li>Скачиваем сборку JDK 8 от  <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer">AdoptJDK<ExternalLinkIcon/></a>  (JDK 8 Windows x64 Hotspot),  <a href="https://libericajdk.ru/pages/liberica-jdk/" target="_blank" rel="noopener noreferrer">LibericaJDK<ExternalLinkIcon/></a>  или  <a href="https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html" target="_blank" rel="noopener noreferrer">Oracle<ExternalLinkIcon/></a>  и устанавливаем</li>
<li>Всё!</li>
</ul>
<p>Далее вам необходимо установить лаунчсервер ВРУЧНУЮ, без использования скрипта установки</p>
<ul>
<li>
<p>На странице  <a href="https://github.com/GravitLauncher/Launcher/releases" target="_blank" rel="noopener noreferrer">Launcher releases<ExternalLinkIcon/></a>  найдите последний релиз и скачайте его</p>
</li>
<li>
<p>Распакуйте библиотеки и LaunchServer.jar из архива</p>
</li>
<li>
<p>Создайте <code v-pre>start.bat</code> с таким содержимым:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>@ECHO OFF
<span class="token string">"ПУТЬ_ДО_JDK_17/bin/java.exe"</span> <span class="token parameter variable">-javaagent:LaunchServer.jar</span> <span class="token parameter variable">-jar</span> LaunchServer.jar
PAUSE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Запустите <code v-pre>start.bat</code> и при первом запуске укажите свой projectName и localhost в качестве адреса</p>
</li>
<li>
<p>Скачайте рантайм для вашей версии лаунчера:  <a href="https://github.com/GravitLauncher/LauncherRuntime/releases" target="_blank" rel="noopener noreferrer">LauncherRuntime releases<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Скопируйте папку runtime в папку с установленным лаунчсервером, а .jar файл модуля в папку launcher-modules</p>
</li>
<li>
<p>Запустите лаунчсервер и выполните команду build для запуска сборки. После окончания готовый лаунчер появится в папке <code v-pre>updates</code></p>
</li>
</ul>
<h2 id="установка-dev-версии-лаунчсервера" tabindex="-1"><a class="header-anchor" href="#установка-dev-версии-лаунчсервера" aria-hidden="true">#</a> Установка dev версий лаунчсервера</h2>
<p>DEV версии лаунчсервера содержат самый новый функционал и исправления, которые ещё не попали в релиз. Они могут быть нестабильны( вызывать проблемы), иметь расхождение с официальной вики. Настоятельно рекомендуется проверять работоспособность dev версий в тестовом окружении, прежде чем давать игрокам.</p>
<ul>
<li><strong>Первый способ: Установка скриптом.</strong>  Следуйте  <RouterLink to="/install/#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-launchserver-1">этой</RouterLink>  инструкции, используя скрипт установки DEV версии: <code v-pre>https://mirror.gravitlauncher.com/scripts/setup-dev.sh</code></li>
<li><strong>Второй способ: Установка через GitHub Actions.</strong>
<ul>
<li>Зарегистрируйтесь или войдите на  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></li>
<li>Скачайте архивы с  <a href="https://github.com/GravitLauncher/Launcher/actions?query=event%3Apush+branch%3Adev" target="_blank" rel="noopener noreferrer">лаунчером<ExternalLinkIcon/></a>  и  <a href="https://github.com/GravitLauncher/LauncherRuntime/actions?query=event%3Apush+branch%3Adev" target="_blank" rel="noopener noreferrer">рантаймом<ExternalLinkIcon/></a>  с GitHub Actions.</li>
<li>Действуйте аналогично установке  <RouterLink to="/install/#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BD%D0%B0-windows-%D1%82%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F">stable версии</RouterLink> на Windows, используя архивы, скачанные на предыдущем этапе</li>
</ul>
</li>
</ul>
</div></template>


