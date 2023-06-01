<template><div><h1 id="настроика-рантаима" tabindex="-1"><a class="header-anchor" href="#настроика-рантаима" aria-hidden="true">#</a> Настройка рантайма</h1>
<h2 id="описание-рантаима" tabindex="-1"><a class="header-anchor" href="#описание-рантаима" aria-hidden="true">#</a> Описание рантайма</h2>
<p>Рантайм в лаунчере — это модуль для лаунчера и набор ресурсов (fxml/css/png), отвечающие за взаимодействие с пользователем. Рантайм основан на  <a href="https://openjfx.io/" target="_blank" rel="noopener noreferrer">JavaFX<ExternalLinkIcon/></a>.</p>
<div class="custom-container tip"><p class="custom-container-title">Полезные ссылки:</p>
<ul>
<li><a href="https://gluonhq.com/products/scene-builder/" target="_blank" rel="noopener noreferrer">Scene Builder<ExternalLinkIcon/></a>  — Редактор fxml файлов</li>
<li><a href="https://openjfx.io/javadoc/17/" target="_blank" rel="noopener noreferrer">OpenJFX API Docs<ExternalLinkIcon/></a>  — Документация JavaFX API</li>
<li><a href="https://openjfx.io/javadoc/17/javafx.graphics/javafx/scene/doc-files/cssref.html" target="_blank" rel="noopener noreferrer">JavaFX CSS Reference Guide<ExternalLinkIcon/></a>  — Документация JavaFX CSS</li>
</ul>
</div>
<h2 id="настроика-рантаима-1" tabindex="-1"><a class="header-anchor" href="#настроика-рантаима-1" aria-hidden="true">#</a> Настройка рантайма</h2>
<p>В этом разделе вы найдете полезные функции, входящие в рантайм &quot;из коробки&quot;, но не включенные по умолчанию</p>
<h2 id="шифрование-рантаима" tabindex="-1"><a class="header-anchor" href="#шифрование-рантаима" aria-hidden="true">#</a> Шифрование рантайма</h2>
<ul>
<li>Скачайте библиотеку  <a href="https://mirror.gravitlauncher.com/5.2.x/compat/EnFS-1.0.0.jar" target="_blank" rel="noopener noreferrer">EnFS<ExternalLinkIcon/></a>  и положите её в папку launcher-libraries</li>
<li>Включите опцию <code v-pre>runtimeEncrypt</code> в конфигурации лаунчсервера и сделайте <code v-pre>build</code></li>
<li>Проверьте правильность работы</li>
</ul>
<h2 id="скачивание-своеи-java" tabindex="-1"><a class="header-anchor" href="#скачивание-своеи-java" aria-hidden="true">#</a> Скачивание своей Java</h2>
<ul>
<li>Скачайте  <strong>архивы</strong>  с JRE/JDK с <a href="https://adoptium.net/" target="_blank" rel="noopener noreferrer">Adoptium<ExternalLinkIcon/></a> или другого поставщика сборок OpenJDK</li>
<li>Распакуйте архивы в папку updates и дайте им понятные названия: <code v-pre>java17-windows-x86-64</code>, <code v-pre>java17-windows-x86</code> и т.д.</li>
<li>По желанию удалите из сборок JRE/JDK необязательные компоненты для уменьшения объема скачиваемых данных</li>
<li>Откройте файл <code v-pre>config/JavaRuntime/Config.json</code> в текстовом редакторе, найдите строку <strong>&quot;javaList&quot;: {}</strong> и приведите её к такому виду:</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"javaList"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"java17-windows-x86-64"</span><span class="token operator">:</span> <span class="token string">"Java 17 b53 mustdie X86_64 javafx true"</span><span class="token punctuation">,</span>
    <span class="token property">"java17-windows-x86"</span><span class="token operator">:</span> <span class="token string">"Java 17 b53 mustdie X86 javafx true"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Формат записи:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Java {номер версии} b{номер сборки} {mustdie (это windows)/linux/macosx} {архитектура} javafx {наличие javafx}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Архитектуры:</p>
<ul>
<li>X86_64 (Intel/AMD 64 бит)</li>
<li>X86 (Intel/AMD 32 бит)</li>
<li>ARM32 (32 разрядные ARM)</li>
<li>ARM64 (64 разрядные ARM)</li>
</ul>
</div>
<ul>
<li>Добавьте названия ваших папок с JRE/JDK в <strong>&quot;protectHandler&quot;: {}</strong> конфигурации лаунчсервера LaunchServer.json</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"allowUpdates"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"java17-windows-64"</span><span class="token punctuation">,</span> <span class="token string">"java17-windows-32"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Выполните <code v-pre>syncup</code> и <code v-pre>build</code></li>
<li>Проверьте правильность работы</li>
</ul>
<h2 id="структура-рантаима" tabindex="-1"><a class="header-anchor" href="#структура-рантаима" aria-hidden="true">#</a> Структура рантайма</h2>
<p>Файловая структура:</p>
<ul>
<li><code v-pre>images</code> — папка, которая содержит все картинки</li>
<li><code v-pre>overlay</code> — папка, в которой находятся оверлеи. Каждому оверлею выдается отдельная папка, в которой должны лежать fxml и css файлы. Допускается рядом с fxml и css размещать картинки, специфичные для конкретного оверлея.</li>
<li><code v-pre>scenes</code> — папка, аналогичная по своей структуре папке overlay, но предназначена для сцен.</li>
<li><code v-pre>components</code> — папка, в которой находится дизайн отдельных частей (как serverButton и уведомления).</li>
<li><code v-pre>dialogs</code> — папка, в которой находится дизайн диалогов.</li>
<li><code v-pre>styles</code> — папка с css стилями.</li>
<li><code v-pre>runtime_*.properties</code> — собранные файлы локализации.</li>
</ul>
<p>Основные сущности:</p>
<ul>
<li><code v-pre>Stage</code> — окно. Эта сущность отвечает за иконку, параметры окна и его название</li>
<li><code v-pre>Scene</code> — содержимое окна. Является корнем всех объектов и не может быть встроена куда либо</li>
<li><code v-pre>Overlay</code> — кастомное содержимое, наложенное на сцену. При отображении оверлея сцена размывается и блокируется, пока открыт оверлей</li>
<li><code v-pre>Component</code> — содержимое, не привязанное к чему—либо. Компонент может существовать в нескольких экземплярах одновременно, чем и отличается от сцен и оверлеев</li>
</ul>
<p>Для редактирования файлов fxml вам понадобится программа JavaFX SceneBuilder, которую вы можете скачать с любого удобного для вас сайта<br>
После чего открываете интересующий вас fxml файл, заходите в Preview -&gt; Internationalization -&gt; Set Resourse и выбираете файл runtime_*.properties</p>
<p>Для редактирования текста вам понадобится папка compat, в которой находятся оригинальные .properties файлы.  <strong>Изменять напрямую файлы runtime_*.properties из папки runtime нельзя (не будет работать русский язык)</strong><br>
После того, как вы изменили текст в compat файлах, воспользуйтесь утилитой native2ascii для приведения в понятный рантайму вид, которая идет в любом JDK.</p>
<h2 id="объекты-рантаима" tabindex="-1"><a class="header-anchor" href="#объекты-рантаима" aria-hidden="true">#</a> Объекты рантайма</h2>
<p><code v-pre>JavaFXApplication</code>  — основной класс рантайма, точка доступа к всем компонентам и управлению приложением.</p>
<p><code v-pre>FXMLLoader</code>  — асинхронный многопоточный загрузчик fxml, обеспечивает ускорение запуска и поддержку мультиязычности</p>
<p><code v-pre>StateService</code>  — точка обмена данными и состоянием лаунчера</p>
<p><code v-pre>RuntimeSecurityService</code>  — выполняет обмен ключами с лаунчсервером, сбор HardwareInfo (HWID) и обновление лаунчера</p>
<p><code v-pre>MessageManager</code>  — отображает уведомления и диалоги</p>
<h2 id="работа-с-properties-и-перевод-на-другие-языки" tabindex="-1"><a class="header-anchor" href="#работа-с-properties-и-перевод-на-другие-языки" aria-hidden="true">#</a> Работа с .properties и перевод на другие языки</h2>
<p>Вы можете перевести лаунчер на любой другой язык, добавив его в список языков в файле RuntimeSettings.java. Для этого добавьте в enum LAUNCHER_LOCALE свой язык.</p>
<p>Первый параметр — 2–3 буквы страны, которые будут использоваться для поиска .properties файла.</p>
<p>Второй параметр — отображаемое имя в всплывающем окне выбора языков.</p>
<p>Помимо надписей .properties, файлы поддерживают изменение любых свойств JavaFX, в том числе размеры и расположение элементов, пути до картинок, параметры объектов и вообще любые свойства, которые вы можете указать в .fxml файле</p>
<h2 id="кастомные-serverbutton" tabindex="-1"><a class="header-anchor" href="#кастомные-serverbutton" aria-hidden="true">#</a> Кастомные serverButton</h2>
<p>Вы можете использовать под каждый профиль, собственные <code v-pre>serverButton</code>.</p>
<p>Для этого, в папке <code v-pre>components</code> создайте папку <code v-pre>serverButton</code> (регистр важен)</p>
<p>Cкопируйте туда файл <code v-pre>serverButton.fxml</code>, переименовав его в <code v-pre>PROFILE_UUID.fxml</code>,</p>
<p>где <code v-pre>PROFILE_UUID</code> - <code v-pre>UUID</code> вашего профиля, для которого вы делаете <code v-pre>serverButton</code></p>
<div class="custom-container warning"><p class="custom-container-title">Обратите внимание:</p>
<p>Так как папка теперь не <code v-pre>components</code>, а <code v-pre>components/serverButton</code>, в вашем fxml, необходимо изменить пути
к некоторым файлам/папкам:</p>
</div>
<p><code v-pre>&quot;@../../images/servers/example.png&quot;</code> вместо <code v-pre>&quot;@../images/servers/example.png&quot;</code></p>
<p>(где <code v-pre>example.png</code> - изображение на <code v-pre>serverButton</code>)</p>
<p><code v-pre>&quot;@../components.css&quot;</code> вместо <code v-pre>&quot;@components.css&quot;</code></p>
<p><code v-pre>&quot;@../../styles/global.css&quot;</code> вместо <code v-pre>&quot;@../styles/global.css&quot;</code></p>
<p><code v-pre>&quot;@../../styles/variables.css&quot;</code> вместо <code v-pre>&quot;@../styles/variables.css&quot;</code></p>
<h2 id="profilewhitelist-профиля-клиента" tabindex="-1"><a class="header-anchor" href="#profilewhitelist-профиля-клиента" aria-hidden="true">#</a> ProfileWhitelist профиля клиента</h2>
<p>Позволяет скрыть клиент от всех пользователей, кроме записаных в profileWhitelist</p>
<p>В профиле клиента установите <code v-pre>&quot;limited&quot;: true,</code></p>
<p>В конфиге <code v-pre>LaunchServer.json</code>:</p>
<ul>
<li><code v-pre>&quot;protectHandler&quot;: {</code>
<ul>
<li><code v-pre>&quot;profileWhitelist&quot;: {&quot;TITLE ПРОФИЛЯ&quot;: [&quot;Ник1&quot;, &quot;Ник2&quot;]},</code></li>
</ul>
</li>
</ul>
<h2 id="отладка-рантаима" tabindex="-1"><a class="header-anchor" href="#отладка-рантаима" aria-hidden="true">#</a> Отладка рантайма</h2>
<p>Для отладки рантайма из IDEA войдите в <code v-pre>Run -&gt; Edit configurations</code> и создайте новый <code v-pre>Application</code> с такими параметрами:</p>
<ul>
<li>Модуль: <code v-pre>JavaRuntime.main</code></li>
<li>Аргументы jvm: <code v-pre>-Dlauncherdebug.modules=pro.gravit.launcher.client.JavaRuntimeModule</code> (если параметры не отображаются, нажмите <code v-pre>Modify Options —&gt; Add VM options</code>)</li>
<li>Main Class: <code v-pre>pro.gravit.launcher.debug.DebugMain</code></li>
</ul>
<p>Ограничения отладочного режима:</p>
<ul>
<li>Не будет работать опция &quot;Сохранить пароль&quot;, так как ключ шифрования пароля внедряется лаунчсервером</li>
<li>Невозможно запустить клиент MineCraft (при этом все этапы скачивания, проверки и подготовки к старту будут работать)</li>
<li>Лаунчер не будет пытаться обновиться и получить список методов авторизации</li>
<li>Может не работать проверка HWID, так как лаунчсервер не будет доверять лаунчеру</li>
<li>Отладочный режим невозможно активировать на уже собранном лаунчере</li>
<li>Никакие настройки модулей для лаунчера из папки <code v-pre>config</code> не будут работать</li>
</ul>
</div></template>


