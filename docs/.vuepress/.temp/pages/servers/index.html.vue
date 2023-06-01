<template><div><h1 id="привязка-сервера-minecraft" tabindex="-1"><a class="header-anchor" href="#привязка-сервера-minecraft" aria-hidden="true">#</a> Привязка сервера Minecraft</h1>
<h2 id="совместимость" tabindex="-1"><a class="header-anchor" href="#совместимость" aria-hidden="true">#</a> Совместимость</h2>
<p>В настоящий момент поддерживаются:</p>
<ul>
<li>Все оригинальные ядра: <code v-pre>Vanilla</code>, <code v-pre>Forge</code>, <code v-pre>Fabric</code>, <code v-pre>Bukkit</code>, <code v-pre>Sponge</code></li>
<li>Их форки: <code v-pre>Spigot</code>, <code v-pre>Paper</code> и другие</li>
<li>Связки: <code v-pre>Bukkit+Forge</code>, <code v-pre>Bukkit+Fabric</code>, если их авторы не внесли дополнительных ошибок, мешающих работе запуска</li>
<li>Прокси-сервера: <code v-pre>BungeeCord</code>, <code v-pre>Waterfall</code> <em>(форк BungeeCord)</em>, <code v-pre>Velocity</code></li>
</ul>
<h2 id="рекомендации" tabindex="-1"><a class="header-anchor" href="#рекомендации" aria-hidden="true">#</a> Рекомендации</h2>
<ul>
<li>При создании проекта используйте самую новую версию Minecraft, доступную для ключевых модов в вашей сборке</li>
<li>Используйте <strong>Fabric</strong> вместо Forge для проектов на minecraft 1.16.5 и выше</li>
<li>Избегайте использования модов и плагинов из непроверенных источников</li>
<li>Используйте <a href="https://velocitypowered.com" target="_blank" rel="noopener noreferrer">Velocity<ExternalLinkIcon/></a> вместо BungeeCord и Waterfall</li>
<li>Убедитесь что в вашем ядре установлена защита от уязвимости Log4J</li>
<li>Если ваш сервер находится за прокси(напр. velocity) его всё равно необходимо привязать к ServerWrapper с заменой authlib, так как в противном случае могут быть проблемы с скинами и плащами</li>
</ul>
<h2 id="рекомендуемые-ядра" tabindex="-1"><a class="header-anchor" href="#рекомендуемые-ядра" aria-hidden="true">#</a> Рекомендуемые ядра</h2>
<CodeGroup>
<CodeGroupItem title="[ 1.7.10 ]">
<div class="custom-container tip"><p class="custom-container-title">Список:</p>
<ul>
<li><a href="https://github.com/CrucibleMC/Crucible" target="_blank" rel="noopener noreferrer">Crucible<ExternalLinkIcon/></a></li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ 1.12.2]">
<div class="custom-container tip"><p class="custom-container-title">Список:</p>
<ul>
<li><a href="https://github.com/Luohuayu/CatServer/blob/1.12.2/docs/README_RU.md" target="_blank" rel="noopener noreferrer">CatServer<ExternalLinkIcon/></a></li>
<li><a href="https://www.spongepowered.org/downloads/spongeforge?minecraft=1.12.2" target="_blank" rel="noopener noreferrer">SpongeForge<ExternalLinkIcon/></a></li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ 1.16.5 ]">
<div class="custom-container tip"><p class="custom-container-title">Список:</p>
<ul>
<li><a href="https://fabricmc.net/" target="_blank" rel="noopener noreferrer">Fabric<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/Luohuayu/CatServer/blob/1.16.5/docs/README_EN.md" target="_blank" rel="noopener noreferrer">CatServer<ExternalLinkIcon/></a></li>
<li><a href="https://www.spongepowered.org/downloads/spongeforge?minecraft=1.16.5" target="_blank" rel="noopener noreferrer">SpongeForge<ExternalLinkIcon/></a></li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ 1.17.X ]">
<div class="custom-container tip"><p class="custom-container-title">Список:</p>
<ul>
<li><a href="https://fabricmc.net/" target="_blank" rel="noopener noreferrer">Fabric<ExternalLinkIcon/></a></li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ 1.18.2 ]">
<div class="custom-container tip"><p class="custom-container-title">Список:</p>
<ul>
<li><a href="https://fabricmc.net/" target="_blank" rel="noopener noreferrer">Fabric<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/Luohuayu/CatServer/blob/1.18.2/docs/README.md" target="_blank" rel="noopener noreferrer">CatServer<ExternalLinkIcon/></a></li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
</CodeGroup>
<h2 id="использование-serverwrapper" tabindex="-1"><a class="header-anchor" href="#использование-serverwrapper" aria-hidden="true">#</a> Использование ServerWrapper</h2>
<p>Для привязки ServerWrapper к вашему серверу выполните следующие действия:</p>
<ul>
<li>
<p>Откройте лаунчсервер и введите команду <code v-pre>token server HiTech</code>, где HiTech - название вашего сервера. Скопируйте получившийся токен.</p>
</li>
<li>
<p>Перейдите в папку с вашим сервером, скопируйте туда ServerWrapper.jar из артефактов сборки и выполните команду <code v-pre>java -jar ServerWrapper.jar setup</code></p>
</li>
<li>
<p>Укажите название jar файла вашего серверного ядра, название сервера, адрес лаунчсервера и токен, полученный на первом этапе</p>
</li>
<li>
<p>Обязательно включите <code v-pre>online-mode=true</code> в вашем <code v-pre>server.properties</code></p>
</li>
</ul>
<p>Дальнейшие действия зависят от вашего серверного ядра</p>
<div class="custom-container tip"><p class="custom-container-title">Примечания:</p>
<ul>
<li>Для привязки сервера с fabric-loader 0.14.X и выше не забудьте пропатчить или взять с клиента библиотеку fabric-loader</li>
<li>Правильно указывайте имя сервера при установке ServerWrapper. Имя сервера это название сервера в поле <code v-pre>servers</code> вашего полфиля. По умолчанию название первого сервера совпадает с <code v-pre>title</code> профиля</li>
<li>Привязка нескольких серверов по одному токену возможна только если эти сервера относятся к одному профилю</li>
<li>При смене ключей лаунчсервера(например при настройке заново на новом хостинге) или <code v-pre>authId</code> вам необходимо <strong>обязательно</strong> пересоздать токен сервера</li>
<li>Для запуска сервера 1.19.1 и выше нужно установить параметр <code v-pre>enforce-secure-profile</code> в <code v-pre>false</code> в файле <code v-pre>server.properties</code></li>
</ul>
</div>
<h2 id="привязка-прокси" tabindex="-1"><a class="header-anchor" href="#привязка-прокси" aria-hidden="true">#</a> Привязка прокси</h2>
<p>Прокси серверы напрямую обращаются к серверам Mojang, минуя authlib, поэтому вы должны пропатчить их</p>
<ul>
<li><strong>Waterfall</strong>  - Скачайте <a href="https://mirror.gravitlauncher.com/5.2.x/compat/patch/Waterfall.patch" target="_blank" rel="noopener noreferrer">патч<ExternalLinkIcon/></a>, переименуйте его в 0099-Waterfall.patch и скопируйте его в папку BungeeCord-Patches. Соберите waterfall командой <code v-pre>./waterfall build</code></li>
<li><strong>BungeeCord</strong>  - Скачайте <a href="https://mirror.gravitlauncher.com/5.2.x/compat/patch/BungeeCord.patch" target="_blank" rel="noopener noreferrer">патч<ExternalLinkIcon/></a>, скопируйте его в папку с репозиторием, примените его командой <code v-pre>git am BungeeCord.patch</code>. Соберите bungeecord командой <code v-pre>mvn package -Dcheckstyle.skip</code></li>
<li><strong>Velocity</strong>  (рекомендуется) - Скачайте <a href="https://mirror.gravitlauncher.com/5.3.x/compat/patch/Velocity.patch" target="_blank" rel="noopener noreferrer">патч<ExternalLinkIcon/></a>, скопируйте его в папку с репозиторием, примените его командой <code v-pre>git am Velocity.patch</code>. Соберите velocity командой <code v-pre>./gradlew assemble</code></li>
</ul>
<h2 id="привязка-дополнительных-средств" tabindex="-1"><a class="header-anchor" href="#привязка-дополнительных-средств" aria-hidden="true">#</a> Привязка дополнительных средств</h2>
<ul>
<li><strong>CloudNet</strong> - Скачайте <a href="https://mirror.gravitlauncher.com/5.3.x/compat/patch/CloudNet.patch" target="_blank" rel="noopener noreferrer">патч<ExternalLinkIcon/></a>, скопируйте его в папку с репозиторием, примените его командой <code v-pre>git apply CloudNet.patch</code>. Соберите CloudNet командой <code v-pre>./gradlew assemble</code>. Для привязки сервера выполните:
<ul>
<li>Скопируйте ServerWrapper.jar в папку с сервером/прокси</li>
<li>Привяжите с помощью ServerWrapper как обычно</li>
<li>Удалите mainclass из конфигурации ServerWrapper</li>
</ul>
</li>
</ul>
<h2 id="использование-installauthlib" tabindex="-1"><a class="header-anchor" href="#использование-installauthlib" aria-hidden="true">#</a> Использование installAuthlib</h2>
<p>Для привязки всех остальных ядер(в том числе находящихся за прокси) необходимо заменить authlib. Начиная с версии 5.2.13 вы можете привязать authlib к серверу одной командой:</p>
<CodeGroup>
<CodeGroupItem title="[ Локально ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<p>Скопируйте authlib с клиента в любое удобное для вас место и пропишите команду <code v-pre>java -jar ServerWrapper.jar installAuthlib ПутьКAuthlib</code></p>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ По ссылке ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<p>Скопируйте ссылку на LauncherAuthlib для вашей версии Minecraft и выполните команду <code v-pre>java -jar ServerWrapper.jar installAuthlib СсылкаНаLauncherAuthlib</code></p>
<p>Например для установки на сервер Minecraft 1.19: <code v-pre>java -jar ServerWrapper.jar installAuthlib https://mirror.gravitlauncher.com/5.2.x/compat/authlib/3/LauncherAuthlib3-1.19.jar</code></p>
</div>
</CodeGroupItem>
<p>:::</p>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">Примечание:</p>
<p>Рекомендуется перед привязкой запустить сервер хотя бы 1 раз</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">Для 1.12.2 forge/sponge дополнительно замените launchwrapper</p>
<p>Скопируйте <a href="https://mirror.gravitlauncher.com/5.2.x/compat/launchwrapper-1.12-5.0.x-fixed.jar" target="_blank" rel="noopener noreferrer">этот<ExternalLinkIcon/></a> файл в <code v-pre>libraries/net/minecraft/launchwrapper/1.12/launchwrapper-1.12.jar</code> с заменой</p>
<details class="custom-container details"><summary>Установка командой Wget</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> --show-progress <span class="token parameter variable">-q</span> <span class="token parameter variable">-O</span> ./libraries/net/minecraft/launchwrapper/1.12/launchwrapper-1.12.jar https://mirror.gravitlauncher.com/5.2.x/compat/launchwrapper-1.12-5.0.x-fixed.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
</div>
<h2 id="ручная-установка-authlib" tabindex="-1"><a class="header-anchor" href="#ручная-установка-authlib" aria-hidden="true">#</a> Ручная установка AuthLib</h2>
<p>Для привязки всех остальных ядер(в том числе находящихся за прокси) необходимо заменить authlib. Каждое ядро реализует процесс своего старта по своему, поэтому если одна инструкция не подходит, попробуйте другую.</p>
<CodeGroup>
<CodeGroupItem title="[ Classpath ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<p>Скопируйте authlib в папку с ServerWrapper'ом и измените ваш setup.sh: <code v-pre>-cp ServerWrapper.jar:server.jar pro.gravit.launcher.server.ServerWrapper</code> замените на <code v-pre>-cp authlib-XXXX.jar:ServerWrapper.jar:server.jar pro.gravit.launcher.server.ServerWrapper</code></p>
<p><strong>Примеры ядер:</strong> Forge 1.7.10, Vanilla до 1.18</p>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ Jar ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<p>Распакуйте содержимое authlib клиента в временную папку. Откройте <code v-pre>jar</code> файл вашего ядра или сервера minecraft(если разделены) архиватором и скопируйте с заменой файлы, распакованные на предыдущем этапе</p>
<p><strong>Примеры ядер:</strong> Forge/Sponge до 1.16.5, Fabric/Vanilla до 1.18</p>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ Library ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<p>Скопируйте файл вашего authlib по пути <code v-pre>libraries/com/mojang/ВЕРСИЯ/authlib-ВЕРСИЯ.jar</code> с заменой</p>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ MinecraftExtra ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<p>Распакуйте содержимое authlib клиента в временную папку. Откройте файл <code v-pre>libraries/net/minecraft/server/ВЕРСИЯ/server-ВЕРСИЯ-extra.jar</code> архиватором и скопируйте с заменой файлы, распакованные на предыдущем этапе</p>
<p><strong>Примеры ядер:</strong> Forge 1.16.5</p>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ Pack ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<p>Откройте файл вашего сервера и скопируйте <code v-pre>authlib-ВЕРСИЯ.jar</code> <strong>целиком</strong> в <code v-pre>META-INF/libraries/com/mojang/authlib/ВЕРСИЯ</code> с заменой</p>
<p><strong>Примеры ядер:</strong> Vanilla 1.18+</p>
</div>
</CodeGroupItem>
<p>:::</p>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">Для 1.12.2 forge/sponge дополнительно замените launchwrapper</p>
<p>Скопируйте <a href="https://mirror.gravitlauncher.com/5.2.x/compat/launchwrapper-1.12-5.0.x-fixed.jar" target="_blank" rel="noopener noreferrer">этот<ExternalLinkIcon/></a> файл в <code v-pre>libraries/net/minecraft/launchwrapper/1.12/launchwrapper-1.12.jar</code> с заменой</p>
<details class="custom-container details"><summary>Установка командой Wget</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">wget</span> --show-progress <span class="token parameter variable">-q</span> <span class="token parameter variable">-O</span> ./libraries/net/minecraft/launchwrapper/1.12/launchwrapper-1.12.jar https://mirror.gravitlauncher.com/5.2.x/compat/launchwrapper-1.12-5.0.x-fixed.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
</div>
<h2 id="конфигурация-serverwrapper" tabindex="-1"><a class="header-anchor" href="#конфигурация-serverwrapper" aria-hidden="true">#</a> Конфигурация ServerWrapper</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"projectname"</span><span class="token operator">:</span> <span class="token string">"MineCraft"</span><span class="token punctuation">,</span> <span class="token comment">// Название проекта</span>
  <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"ws://ADDRESS/api"</span><span class="token punctuation">,</span> <span class="token comment">// Адрес лаунчсервера</span>
  <span class="token property">"serverName"</span><span class="token operator">:</span> <span class="token string">"Vanilla1.19.2"</span><span class="token punctuation">,</span> <span class="token comment">// Название сервера в профиле</span>
  <span class="token property">"autoloadLibraries"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Автозагрузка библиотек из папки libraries</span>
  <span class="token property">"classpath"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Дополнительный classpath (1.18+)</span>
  <span class="token property">"classLoaderConfig"</span><span class="token operator">:</span> <span class="token string">"SYSTEM_ARGS"</span><span class="token punctuation">,</span> <span class="token comment">// Системные аргументы запуска</span>
  <span class="token property">"mainclass"</span><span class="token operator">:</span> <span class="token string">"io.papermc.paperclip.Paperclip"</span><span class="token punctuation">,</span> <span class="token comment">// Main-Class вашего ядра сервера</span>
  <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"nogui"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Аргументы запуска</span>
  <span class="token property">"oauthExpireTime"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">"extendedTokens"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// Токены доступа</span>
    <span class="token property">"checkServer"</span><span class="token operator">:</span> <span class="token string">"TOKEN"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"STD"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


