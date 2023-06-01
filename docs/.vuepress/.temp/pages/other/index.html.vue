<template><div><h1 id="другие-настроики" tabindex="-1"><a class="header-anchor" href="#другие-настроики" aria-hidden="true">#</a> Другие настройки</h1>
<h2 id="textureprovider" tabindex="-1"><a class="header-anchor" href="#textureprovider" aria-hidden="true">#</a> TextureProvider</h2>
<p>TextureProvider нужен при отсутствии поддержки скинов со стороны AuthCoreProvider. Выберите один из вариантов TextureProvider:</p>
<ul>
<li>Поддерживаются следующие placeholder:
<ul>
<li><strong>%username%</strong>  имя пользователя</li>
<li><strong>%uuid%</strong>  UUID пользователя</li>
<li><strong>%hash%</strong>  UUID пользователя без разделителей</li>
</ul>
</li>
</ul>
<h3 id="метод-request" tabindex="-1"><a class="header-anchor" href="#метод-request" aria-hidden="true">#</a> Метод Request</h3>
<CodeGroup>
<CodeGroupItem title="[ REMOTE ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"skinURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"cloakURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"request"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Прямое получение скина</p>
<ul>
<li>Если скины храняться не на этой машине</li>
<li>Выполняется дополнительный запрос в лаунчсервере на подсчёт хеш суммы и передаче её в AuthLib</li>
</ul>
</div>
</CodeGroupItem>
<CodeGroupItem title="[ LOCAL ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"skinURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"cloakURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"skinLocalPath"</span><span class="token operator">:</span> <span class="token string">"/var/www/site/skins/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"cloakLocalPath"</span><span class="token operator">:</span> <span class="token string">"/var/www/site/cloaks/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"request"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Получение скина с локальным путём</p>
<ul>
<li>Быстрее обработка хеш суммы</li>
<li>Лаунчсерверу не нужно выполнять дополнительный запрос, так как файл считывается локально</li>
</ul>
</div>
</CodeGroupItem>
</CodeGroup>
<h3 id="метод-json" tabindex="-1"><a class="header-anchor" href="#метод-json" aria-hidden="true">#</a> Метод JSON</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://example.com/getskin.php?username=%username%"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"json"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Запрос к сайту для получения URL'ов скина/плаща и их метаданных</p>
<ul>
<li>Может обрабатывать <strong>slim</strong> (тонкие) скины</li>
</ul>
</div>
<details class="custom-container details"><summary>Комьюнити реализации:</summary>
<p><a href="https://github.com/microwin7/GravitLauncher-TextureProvider" target="_blank" rel="noopener noreferrer">[PHP] microwin7/GravitLauncher-TextureProvider<ExternalLinkIcon/></a></p>
</details>
<p>Пример ответа:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"SKIN"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/Gravita.png"</span><span class="token punctuation">,</span>
    <span class="token property">"digest"</span><span class="token operator">:</span> <span class="token string">"BASE64 ENCODED MD5 HASH"</span><span class="token punctuation">,</span>
    <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"model"</span><span class="token operator">:</span> <span class="token string">"slim"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"CAPE"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/Gravita.png"</span><span class="token punctuation">,</span>
    <span class="token property">"digest"</span><span class="token operator">:</span> <span class="token string">"BASE64 ENCODED MD5 HASH"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Сведения, при написании своего скрипта:</summary>
<ul>
<li><strong>digest</strong> - должен содержать <strong>бинарный</strong> md5 хеш файла, преобразованный в base64
<ul>
<li>реализация в PHP: strtr(base64_encode(md5($string, true)), '+/', '-_')</li>
</ul>
</li>
</ul>
</details>
<h3 id="метод-void" tabindex="-1"><a class="header-anchor" href="#метод-void" aria-hidden="true">#</a> Метод Void</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"void"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Скины и плащи не передаются</p>
<ul>
<li>Если у вас другое решение по передаче скинов, либо если вам скины и плащи не нужны</li>
<li>Сервер может сам устанавливать скины, к примеру при использовании плагина <a href="https://www.spigotmc.org/resources/skinsrestorer.2124/" target="_blank" rel="noopener noreferrer">SkinsRestorer<ExternalLinkIcon/></a></li>
</ul>
</div>
<h2 id="подпись-лаунчера" tabindex="-1"><a class="header-anchor" href="#подпись-лаунчера" aria-hidden="true">#</a> Подпись лаунчера</h2>
<p>Лаунчер(как JAR, так и EXE) может быть подписан. JAR версия лаунчера подписана всегда и отключить это нельзя. По умолчанию сертификат генерируется при <code v-pre>build</code> из текущей даты, ключей лаунчсервера и названия проекта.</p>
<h3 id="генерация-с-помощью-xca" tabindex="-1"><a class="header-anchor" href="#генерация-с-помощью-xca" aria-hidden="true">#</a> Генерация с помощью XCA</h3>
<ul>
<li>Скачайте последнюю версию <a href="https://hohnstaedt.de/xca/index.php/download" target="_blank" rel="noopener noreferrer">XCA (Windows)<ExternalLinkIcon/></a> с официального сайта, установите и запустите. Если у вас Linux - то установите пакет <code v-pre>xca</code> с помощью вашего менеджера пакетов</li>
<li>Создайте новую базу данных с помощью <code v-pre>File -&gt; New DataBase</code> и защитите её паролем.</li>
<li>Создадим корневой СА. Перейдите в раздел <code v-pre>Certificates</code> и нажмите <code v-pre>New Certificate</code>. В разделе <code v-pre>Subject</code> заполните поле <code v-pre>Common Name</code>(например <code v-pre>BeautifulCraft Root CA</code>), остальные поля по желанию. Нажмите <code v-pre>Generate a new key</code> и выберите тип <code v-pre>RSA</code> размером 2048 или 4096.</li>
<li>В разделе <code v-pre>Extensions</code> укажите <code v-pre>Type</code> -  <code v-pre>Certification Authority</code>. Укажите срок действия сертификата по вашему усмотрению. Не рекомендуется устанавливать срок действия меньше 1 года и больше 50 лет. Для приминения срока нужно нажать кнопку <code v-pre>Apply</code></li>
<li>В раздлеле <code v-pre>Key Usage</code> установите <code v-pre>Certificate Sign</code> и <code v-pre>CRL Sign</code>.</li>
<li>По желанию вы можете создать промежуточные СА. Действия аналогичны созданию корневого СА, но в разделе <code v-pre>Source</code> нужно выбрать родительский(предыдущий) СА.</li>
<li>Создадим конечный CodeSign сертификат. В разделе <code v-pre>Source</code> мы должны выбрать родительский(предыдущий) СА. Настройка раздела <code v-pre>Subject</code> полностью аналогична. В разделе <code v-pre>Extensions</code> укажите <code v-pre>Type</code> - <code v-pre>End Entity</code>. Укажите срок действия по усмотрению. В разделе <code v-pre>Key Usage</code> установите <code v-pre>Digital Signature</code> а в соседнем списке <code v-pre>Code Signing</code> и <code v-pre>Microsoft Individual Code Signing</code>.</li>
<li>Экспортируем CodeSign сертификат. Для этого нужно выбрать конечный CodeSign сертификат и нажать кнопку <code v-pre>Export</code>. Выбираем тип экспорта <code v-pre>PKCS#12 chain</code>. Задаем пароль и сохраняем в удобное место.</li>
<li>Экспортируем корневой сертификат. Для этого нужно выбрать корневой и нажать кнопку <code v-pre>Export</code>. Выбираем тип экспорта <code v-pre>PEM</code>. Сохраняем в удобное место.</li>
<li>Мы получили два файла. Файл типа <code v-pre>.pfx</code>/<code v-pre>.p12</code> нужно указать в секции <code v-pre>sign</code> лаунчсервера вместе со всеми данными. Файл типа <code v-pre>.crt</code> нужно скопировать в папку <code v-pre>truststore</code> лаунчсервера.</li>
</ul>
<h3 id="получение-алиаса-из-фаила-p12-pfx" tabindex="-1"><a class="header-anchor" href="#получение-алиаса-из-фаила-p12-pfx" aria-hidden="true">#</a> Получение алиаса из файла .p12/.pfx</h3>
<p>Для получения алиаса(поле <code v-pre>keyAlias</code>) нам понадобится утилита <code v-pre>keytool</code> из состава JDK. Выполните эту команду:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>keytool <span class="token parameter variable">-storepass</span> PASSWORD <span class="token parameter variable">-keystore</span> PATH_TO_PFX_OR_P12 <span class="token parameter variable">-list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Вы получите следующий вывод:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Your keystore contains 1 entry

beautiful codesign, Jan 16, 2023, PrivateKeyEntry, 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Строка <code v-pre>beautiful codesign</code> будет искомым алиасом</p>
<h3 id="настроика-секции-sign-для-p12-pfx" tabindex="-1"><a class="header-anchor" href="#настроика-секции-sign-для-p12-pfx" aria-hidden="true">#</a> Настройка секции sign для .p12/.pfx</h3>
<p>Пример настройки:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  <span class="token property">"sign"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"enabled"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">"keyStore"</span><span class="token operator">:</span> <span class="token string">"PATH_TO_PFX_OR_P12"</span><span class="token punctuation">,</span>
    <span class="token property">"keyStoreType"</span><span class="token operator">:</span> <span class="token string">"PKCS12"</span><span class="token punctuation">,</span>
    <span class="token property">"keyStorePass"</span><span class="token operator">:</span> <span class="token string">"PASSWORD"</span><span class="token punctuation">,</span>
    <span class="token property">"keyAlias"</span><span class="token operator">:</span> <span class="token string">"KEY ALIAS"</span><span class="token punctuation">,</span>
    <span class="token property">"keyPass"</span><span class="token operator">:</span> <span class="token string">"PASSWORD"</span><span class="token punctuation">,</span>
    <span class="token property">"metaInfKeyName"</span><span class="token operator">:</span> <span class="token string">"SIGNUMO.RSA"</span><span class="token punctuation">,</span>
    <span class="token property">"metaInfSfName"</span><span class="token operator">:</span> <span class="token string">"SIGNUMO.SF"</span><span class="token punctuation">,</span>
    <span class="token property">"signAlgo"</span><span class="token operator">:</span> <span class="token string">"SHA256WITHRSA"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Обратите внимание</p>
<p>Пароли <code v-pre>keyStorePass</code> и <code v-pre>keyPass</code> должны совпадать</p>
</div>
</div></template>


