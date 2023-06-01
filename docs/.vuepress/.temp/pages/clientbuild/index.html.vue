<template><div><h1 id="настроика-клиента" tabindex="-1"><a class="header-anchor" href="#настроика-клиента" aria-hidden="true">#</a> Настройка клиента</h1>
<h2 id="совместимость" tabindex="-1"><a class="header-anchor" href="#совместимость" aria-hidden="true">#</a> Совместимость</h2>
<p>На текущий момент поддерживается запуск:</p>
<ul>
<li>Любой Vanilla версии с 1.7.10 до 1.19.2</li>
<li>Любой Forge версии с 1.7.10 до 1.16.5</li>
<li>Любой Fabric версии с 1.13 до 1.19.2</li>
</ul>
<h2 id="рекомендации" tabindex="-1"><a class="header-anchor" href="#рекомендации" aria-hidden="true">#</a> Рекомендации</h2>
<ul>
<li>При создании проекта используйте самую новую версию Minecraft, доступную для ключевых модов в вашей сборке</li>
<li>Используйте <strong>Fabric</strong> вместо Forge для проектов на minecraft 1.16.5 и выше</li>
<li>Используйте <a href="https://github.com/CaffeineMC/sodium-fabric" target="_blank" rel="noopener noreferrer">Sodium<ExternalLinkIcon/></a> и <a href="https://github.com/IrisShaders/Iris" target="_blank" rel="noopener noreferrer">Iris<ExternalLinkIcon/></a> вместо Optifine начиная с Minecraft 1.16.5<br>
Избегайте использования Optifabric - он создает в корне клиента скрытую папку с .jar внутри, которая не будет проверяться лаунчером</li>
<li>Избегайте использования модов из непроверенных источников. Скачивайте моды с <a href="https://www.curseforge.com/minecraft/mc-mods?filter-sort=5" target="_blank" rel="noopener noreferrer">Curseforge<ExternalLinkIcon/></a> или напрямую с GitHub разработчика</li>
</ul>
<h2 id="скачивание-ассетов" tabindex="-1"><a class="header-anchor" href="#скачивание-ассетов" aria-hidden="true">#</a> Скачивание ассетов</h2>
<p>Есть два варианта расположения ассетов в папке updates:</p>
<ul>
<li>Классический (по одной папке на версию)</li>
<li>Общие ассеты (все ассеты хранятся в папке <code v-pre>assets</code>)</li>
</ul>
<p>Для скачивания ассетов в общую папку выполните команду <code v-pre>downloadasset ВЕРСИЯ assets</code><br>ПРИМЕР: <code v-pre>downloadasset 1.19.2 assets</code></p>
<p>При скачивании нескольких версий ассетов в одну папку будут скачаны только недостающие</p>
<h2 id="скачивание-клиента-с-зеркала" tabindex="-1"><a class="header-anchor" href="#скачивание-клиента-с-зеркала" aria-hidden="true">#</a> Скачивание клиента с зеркала</h2>
<p>Список клиентов, доступных на нашем зеркале можно посмотреть тут: <a href="https://mirror.gravitlauncher.com/5.3.x/clients/" target="_blank" rel="noopener noreferrer">Клиенты<ExternalLinkIcon/></a></p>
<p>Выполните команду <code v-pre>downloadclient ВЕРСИЯ НАЗВАНИЕ</code> для скачки клиента<br>ПРИМЕР: <code v-pre>downloadclient 1.7.10-forge 1.7.10-forge</code></p>
<div class="custom-container tip"><p class="custom-container-title">Примечания:</p>
<ul>
<li>Для скачивания версии c Forge/Fabric допишите в конец версии <code v-pre>-forge</code>/<code v-pre>-fabric</code>, например <code v-pre>1.16.5-fabric</code></li>
<li>Для скачки клиента с стороннего зеркала вместе с профилем вам нужно использовать такую команду: <code v-pre>downloadclient ВЕРСИЯ НАЗВАНИЕ mirror</code></li>
<li>Название папки ассетов как правило записывается в виде <code v-pre>assetВЕРСИЯ</code>, например:  <strong>asset1.7.10</strong>,  <strong>asset1.17.1</strong></li>
<li>По умолчанию все клиенты содержат в себе пропатченую <strong>AuthLib</strong></li>
</ul>
</div>
<h2 id="сборка-authlib" tabindex="-1"><a class="header-anchor" href="#сборка-authlib" aria-hidden="true">#</a> Сборка AuthLib</h2>
<p>Для сборки <strong>AuthLib</strong> следуйте инструкции:</p>
<CodeGroup>
<CodeGroupItem title="[ MineCraft до 1.16.4 ]">
<CodeGroup>
<CodeGroupItem title="[ Сборка ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<ul>
<li>Скачайте файл <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/1/LauncherAuthlib1.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib1.jar<ExternalLinkIcon/></a></li>
<li>Откройте его архиватором и распакуйте папку com в отдельную папку</li>
<li>Откройте ваш <strong>AuthLib</strong> файл архиватором по пути <code v-pre>libraries/com/mojang/authlib/1.x.xx/authlib-1.x.xx.jar</code> и вставьте все файлы с заменой, распакованные на предыдущем этапе</li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ Переименование ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<ul>
<li>Скачайте файл <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/1/LauncherAuthlib1.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib1.jar<ExternalLinkIcon/></a></li>
<li>Переименуйте его в &quot;0-launcher-authlib.jar&quot; и скопируйте его в папку <code v-pre>libraries/com/mojang/authlib/1.x.xx/</code> вашего клиента</li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
</CodeGroup>
<details class="custom-container details"><summary>Примечания:</summary>
<ul>
<li>В файле <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/1/LauncherAuthlib1.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib1.jar<ExternalLinkIcon/></a> содержаться изменённые классы оригинальной <strong>AuthLib</strong> 1.x.xx, которые предоставляют обработку AuthCoreProvider для GravitLauncher</li>
<li>Если вы воспользовались методом сборки, при замене файлов <code v-pre>.class</code>, остальные файлы не трогайте</li>
</ul>
</details>
</CodeGroupItem>
<CodeGroupItem title="[ MineCraft с 1.16.5-1.17.x ]">
<CodeGroup>
<CodeGroupItem title="[ Сборка ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<ul>
<li>Скачайте файл <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/2/LauncherAuthlib2.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib2.jar<ExternalLinkIcon/></a></li>
<li>Откройте его архиватором и распакуйте папку com в отдельную папку</li>
<li>Откройте ваш <strong>AuthLib</strong> файл архиватором по пути <code v-pre>libraries/com/mojang/authlib/2.x.xx/authlib-2.x.xx.jar</code> и вставьте все файлы с заменой, распакованные на предыдущем этапе</li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ Переименование ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<ul>
<li>Скачайте файл <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/2/LauncherAuthlib2.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib2.jar<ExternalLinkIcon/></a></li>
<li>Переименуйте его в &quot;0-launcher-authlib.jar&quot; и скопируйте его в папку <code v-pre>libraries/com/mojang/authlib/2.x.xx/</code> вашего клиента</li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
</CodeGroup>
<details class="custom-container details"><summary>Примечания:</summary>
<ul>
<li>В файле <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/2/LauncherAuthlib2.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib2.jar<ExternalLinkIcon/></a> содержаться изменённые классы оригинальной <strong>AuthLib</strong> 2.x.xx, которые предоставляют обработку AuthCoreProvider для GravitLauncher</li>
<li>Если вы воспользовались методом сборки, при замене файлов <code v-pre>.class</code>, остальные файлы не трогайте</li>
</ul>
</details>
</CodeGroupItem>
<CodeGroupItem title="[ MineCraft 1.18.x ]">
<CodeGroup>
<CodeGroupItem title="[ Сборка ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<ul>
<li>Скачайте файл <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/3/LauncherAuthlib3.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib3.jar<ExternalLinkIcon/></a></li>
<li>Откройте его архиватором и распакуйте папку com в отдельную папку</li>
<li>Откройте ваш <strong>AuthLib</strong> файл архиватором по пути <code v-pre>libraries/com/mojang/authlib/3.x.xx/authlib-3.x.xx.jar</code> и вставьте все файлы с заменой, распакованные на предыдущем этапе</li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ Переименование ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<ul>
<li>Скачайте файл <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/3/LauncherAuthlib3.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib3.jar<ExternalLinkIcon/></a></li>
<li>Переименуйте его в &quot;0-launcher-authlib.jar&quot; и скопируйте его в папку <code v-pre>libraries/com/mojang/authlib/3.x.xx/</code> вашего клиента</li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
</CodeGroup>
<details class="custom-container details"><summary>Примечания:</summary>
<ul>
<li>В файле <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/3/LauncherAuthlib3.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib3.jar<ExternalLinkIcon/></a> содержаться изменённые классы оригинальной <strong>AuthLib</strong> 3.x.xx, которые предоставляют обработку AuthCoreProvider для GravitLauncher</li>
<li>Если вы воспользовались методом сборки, при замене файлов <code v-pre>.class</code>, остальные файлы не трогайте</li>
</ul>
</details>
</CodeGroupItem>
<CodeGroupItem title="[ MineCraft с 1.19 ]">
<CodeGroup>
<CodeGroupItem title="[ Сборка ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<ul>
<li>Скачайте файл <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/3/LauncherAuthlib3-1.19.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib3.jar<ExternalLinkIcon/></a></li>
<li>Откройте его архиватором и распакуйте папку com в отдельную папку</li>
<li>Откройте ваш <strong>AuthLib</strong> файл архиватором по пути <code v-pre>libraries/com/mojang/authlib/3.x.xx/authlib-3.x.xx.jar</code> и вставьте все файлы с заменой, распакованные на предыдущем этапе</li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
<CodeGroupItem title="[ Переименование ]">
<div class="custom-container tip"><p class="custom-container-title">Информация:</p>
<ul>
<li>Скачайте файл <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/3/LauncherAuthlib3-1.19.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib3.jar<ExternalLinkIcon/></a></li>
<li>Переименуйте его в &quot;0-launcher-authlib.jar&quot; и скопируйте его в папку <code v-pre>libraries/com/mojang/authlib/3.x.xx/</code> вашего клиента</li>
</ul>
</div>
</CodeGroupItem>
<p>:::</p>
</CodeGroup>
<details class="custom-container details"><summary>Примечания:</summary>
<ul>
<li>В файле <a href="https://mirror.gravitlauncher.com/5.3.x/compat/authlib/3/LauncherAuthlib3.jar" target="_blank" rel="noopener noreferrer">LauncherAuthlib3.jar<ExternalLinkIcon/></a> содержаться изменённые классы оригинальной <strong>AuthLib</strong> 3.x.xx, которые предоставляют обработку AuthCoreProvider для GravitLauncher</li>
<li>Если вы воспользовались методом сборки, при замене файлов <code v-pre>.class</code>, остальные файлы не трогайте</li>
</ul>
</details>
</CodeGroupItem>
</CodeGroup>
<h2 id="применение-патчеи-fabric-loader" tabindex="-1"><a class="header-anchor" href="#применение-патчеи-fabric-loader" aria-hidden="true">#</a> Применение патчей Fabric-Loader</h2>
<p>Для клиентов Fabric с версией fabric-loader 0.14.X и выше необходимо применить следующий <a href="https://mirror.gravitlauncher.com/5.2.x/compat/FabricLoader.patch" target="_blank" rel="noopener noreferrer">патч<ExternalLinkIcon/></a><br>
Клиенты зеркала <strong>уже содержат в себе патченый fabric-loader</strong></p>
<h2 id="настроика-профиля" tabindex="-1"><a class="header-anchor" href="#настроика-профиля" aria-hidden="true">#</a> Настройка профиля</h2>
<p>Список параметров профиля с пояснениями:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"Vanilla1.17"</span><span class="token punctuation">,</span> <span class="token comment">// Заголовок профиля</span>
  <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"fa9c1a52-6fa9-4da6-a488-9fc80250095c"</span><span class="token punctuation">,</span> <span class="token comment">// UUID профиля (profileUUID)</span>
  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.17"</span><span class="token punctuation">,</span> <span class="token comment">// Версия майнкрафта</span>
  <span class="token property">"info"</span><span class="token operator">:</span> <span class="token string">"Информация о сервере"</span><span class="token punctuation">,</span> <span class="token comment">// Информация о сервере в окне выбора серверов</span>
  <span class="token property">"dir"</span><span class="token operator">:</span> <span class="token string">"Vanilla1.17"</span><span class="token punctuation">,</span> <span class="token comment">// Папка клиента в updates</span>
  <span class="token property">"sortIndex"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Порядковый номер в окне выбора серверов</span>
  <span class="token property">"assetIndex"</span><span class="token operator">:</span> <span class="token string">"1.17"</span><span class="token punctuation">,</span> <span class="token comment">// Название используемого индекса в ассетах</span>
  <span class="token property">"assetDir"</span><span class="token operator">:</span> <span class="token string">"asset1.17"</span><span class="token punctuation">,</span> <span class="token comment">// Папка с ассетами</span>
  <span class="token property">"update"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// Список файлов и папок, которые будут перекачиваться при старте клиента</span>
    <span class="token string">"servers.dat"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"updateExclusions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Список файлов и папок, которые не надо проверять</span>
  <span class="token property">"updateVerify"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// Список файлов и папок, которые будут перекачиваться при старте клиента и  во время работы</span>
    <span class="token string">"libraries"</span><span class="token punctuation">,</span>
    <span class="token string">"natives"</span><span class="token punctuation">,</span>
    <span class="token string">"minecraft.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"forge.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"liteloader.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"mods"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"updateOptional"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Список опциональных модов и дополнительных аргументов</span>
  <span class="token property">"jvmArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// Аргументы JVM</span>
    <span class="token string">"-XX:+DisableAttachMechanism"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:+UseG1GC"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:+UnlockExperimentalVMOptions"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:G1NewSizePercent\u003d20"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:MaxGCPauseMillis\u003d50"</span><span class="token punctuation">,</span>
    <span class="token string">"-XX:G1HeapRegionSize\u003d32M"</span><span class="token punctuation">,</span>
    <span class="token string">"-Djava.library.path\u003dnatives"</span><span class="token punctuation">,</span>
    <span class="token string">"-Dfml.ignorePatchDiscrepancies\u003dtrue"</span><span class="token punctuation">,</span>
    <span class="token string">"-Dfml.ignoreInvalidMinecraftCertificates\u003dtrue"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"classPath"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// Список файлов и библиотек, загружаемых при запуске выбранным загрузчиком классов</span>
    <span class="token string">"libraries"</span><span class="token punctuation">,</span>
    <span class="token string">"minecraft.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"forge.jar"</span><span class="token punctuation">,</span>
    <span class="token string">"liteloader.jar"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"altClassPath"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Список файлов и библиотек, загружаемых при запуске системным загрузчиком классов</span>
  <span class="token property">"clientArgs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Дополнительные аргументы клиента</span>
  <span class="token property">"compatClasses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Список дополнительных MainClass, которые будут запущены перед основным</span>
  <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// Кастомная информация о профиле</span>
  <span class="token property">"servers"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// Список серверов</span>
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Vanilla1.17"</span><span class="token punctuation">,</span> <span class="token comment">// Название (serverName)</span>
      <span class="token property">"serverAddress"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token comment">// Адрес сервера</span>
      <span class="token property">"serverPort"</span><span class="token operator">:</span> <span class="token number">25535</span><span class="token punctuation">,</span> <span class="token comment">// Порт сервера</span>
      <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// По умолчанию</span>
      <span class="token property">"socketPing"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Прямой пинг для получения онлайна</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"classLoaderConfig"</span><span class="token operator">:</span> <span class="token string">"LAUNCHER"</span><span class="token punctuation">,</span> <span class="token comment">// Тип загрузчика классов (LAUNCHER, AGENT, SYSTEM_ARGS)</span>
  <span class="token property">"runtimeInClientConfig"</span><span class="token operator">:</span> <span class="token string">"NONE"</span><span class="token punctuation">,</span> <span class="token comment">// Запуск GUI рантайма при старте клиента (NONE, BASIC, FULL)</span>
  <span class="token property">"recommendJavaVersion"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token comment">// Рекомендуемая версия Java</span>
  <span class="token property">"minJavaVersion"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token comment">// Минимальная версия Java</span>
  <span class="token property">"maxJavaVersion"</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span> <span class="token comment">// Максимальная версия Java</span>
  <span class="token property">"warnMissJavaVersion"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Предупреждение о несоответствии Java требованиям для запуска</span>
  <span class="token property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// Настройки по умолчанию</span>
    <span class="token property">"ram"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Количество ОЗУ (в мегабайтах), 0 - автоматически</span>
    <span class="token property">"autoEnter"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//Авто—вход, может крашиться</span>
    <span class="token property">"fullScreen"</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// Полноэкранный режим</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"limited"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Ограничен permissions</span>
  <span class="token property">"mainClass"</span><span class="token operator">:</span> <span class="token string">"net.minecraft.client.main.Main"</span> <span class="token comment">// MainClass клиента</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Примечание:</p>
<ul>
<li><code v-pre>limited</code> так-же должен быть <code v-pre>true</code>, для работы <code v-pre>profileWhitelist</code></li>
</ul>
</div>
<h2 id="опциональные-моды" tabindex="-1"><a class="header-anchor" href="#опциональные-моды" aria-hidden="true">#</a> Опциональные моды</h2>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"updateOptional"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
       <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">//Список действий опционального мода</span>
        <span class="token punctuation">{</span> <span class="token comment">//Первое действие</span>
          <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"mods/1.7.10/NotEnoughItems-1.7.10-1.0.5.118-universal.jar"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">//Простое добавление файла без переименований</span>
            <span class="token property">"mods/SuperStrangeMod0.jar"</span><span class="token operator">:</span> <span class="token string">"mods/SuperStrangeMod.jar"</span><span class="token punctuation">,</span> <span class="token comment">//Добавление файла с перемещением. на стороне лаунчсервера файл находится по пути "mods/SuperStrangeMod0.jar", а в клиент он попадет сюда "mods/SuperStrangeMod.jar"</span>
            <span class="token property">"mods2/LowStrangeMod.jar"</span><span class="token operator">:</span> <span class="token string">"mods/LowStrangeMod.jar"</span><span class="token punctuation">,</span> <span class="token comment">//Между папками перемещение тоже работает</span>
            <span class="token property">"config2/ic2"</span><span class="token operator">:</span> <span class="token string">"config/ic2"</span> <span class="token comment">//Перемещение папок тоже работает</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"file"</span> <span class="token comment">//Тип действия - обработка файлов</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token property">"info"</span><span class="token operator">:</span> <span class="token string">"Мод, показывающий рецепты"</span><span class="token punctuation">,</span> <span class="token comment">//Описание</span>
       <span class="token property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//Видимость</span>
       <span class="token property">"mark"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//Включен по умолчанию</span>
       <span class="token property">"limited"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//Ограничен permissions</span>
       <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"NotEnoughItems"</span> <span class="token comment">//Имя</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
       <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"mods/Waila_1.5.10_1.7.10.jar"</span><span class="token operator">:</span> <span class="token string">""</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"file"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token property">"info"</span><span class="token operator">:</span> <span class="token string">"Мод, показывающий дополнительную информацию при наведении на блок"</span><span class="token punctuation">,</span>
       <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Walia"</span><span class="token punctuation">,</span>
       <span class="token property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
       <span class="token property">"dependenciesFile"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"NotEnoughItems"</span><span class="token comment">/* Имя зависимого мода */</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token property">"conflictFile"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"ClientFixer"</span><span class="token comment">/* Имя конфликтующего мода */</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token property">"subTreeLevel"</span><span class="token operator">:</span> <span class="token number">2</span>  <span class="token comment">//Смещение относительно первого мода. Используется для создания визуального отображения дерева зависимостей</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
       <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token punctuation">{</span>
           <span class="token property">"args"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
             <span class="token string">"--add-modules"</span><span class="token punctuation">,</span>
             <span class="token string">"jdk.unsupported"</span>
           <span class="token punctuation">]</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"jvmArgs"</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token property">"triggers"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//Триггеры, о них ниже</span>
       <span class="token property">"info"</span><span class="token operator">:</span> <span class="token string">"Аргументы Java 9+"</span><span class="token punctuation">,</span>
       <span class="token property">"visible"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
       <span class="token property">"permissions"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
       <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"Java9Args"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
       <span class="token property">"actions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"mods/1.7.10/OptiFine_1.7.10_HD_U_E7.jar"</span><span class="token operator">:</span> <span class="token string">""</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"file"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token property">"info"</span><span class="token operator">:</span> <span class="token string">"Улучшение производительности"</span><span class="token punctuation">,</span>
       <span class="token property">"visible"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
       <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"OptiFine HD"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Триггеры - возможность включать опциональный мод при выполнении некоторых условий</p>
<CodeGroup>
<CodeGroupItem title="[ Тип OS ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"triggersList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
  <span class="token property">"os"</span><span class="token operator">:</span> <span class="token string">"MACOSX"</span><span class="token punctuation">,</span> <span class="token comment">// ОС: LINUX, MUSTDIE (Это Windows), MACOSX</span>
  <span class="token property">"required"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"inverted"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"os"</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="[ Тип Java ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"triggersList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"java"</span><span class="token punctuation">,</span>
    <span class="token property">"minVersion"</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token comment">//Минимальная версия Java для срабатывания триггера</span>
    <span class="token property">"maxVersion"</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token comment">//Максимальная версия Java для срабатывания триггера</span>
    <span class="token property">"required"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//Показывает, что без этого триггера включение опционального мода не имеет смысла</span>
    <span class="token property">"inverted"</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//Инвертировать триггер</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>:::</p>
<CodeGroupItem title="[ Тип Arch ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"triggersList"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"arch"</span><span class="token punctuation">,</span>
    <span class="token property">"arch"</span><span class="token operator">:</span> <span class="token string">"X86_64"</span><span class="token punctuation">,</span> <span class="token comment">//Архитектура для срабатывания триггера</span>
    <span class="token property">"required"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"inverted"</span><span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<p>::::</p>
</div></template>


