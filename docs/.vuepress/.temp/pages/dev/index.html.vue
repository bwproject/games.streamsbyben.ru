<template><div><h1 id="разработчикам" tabindex="-1"><a class="header-anchor" href="#разработчикам" aria-hidden="true">#</a> Разработчикам</h1>
<h2 id="подключение-зависимостеи" tabindex="-1"><a class="header-anchor" href="#подключение-зависимостеи" aria-hidden="true">#</a> Подключение зависимостей</h2>
<p>Для написания модулей для лаунчсервера вам нужно подключить следующие библиотеки:</p>
<CodeGroup>
  <CodeGroupItem title="Gradle (Short)" active>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">implementation</span> <span class="token value attr-value">"pro.gravit.launcher:launcher-core:5.2.9"</span>
<span class="token key attr-name">implementation</span> <span class="token value attr-value">"pro.gravit.launcher:launcher-ws-api:5.2.9"</span>
<span class="token key attr-name">implementation</span> <span class="token value attr-value">"pro.gravit.launcher:launchserver-api:5.2.9"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Maven" active>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>pro.gravit.launcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>launcher-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>pro.gravit.launcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>launcher-ws-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>pro.gravit.launcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>launchserver-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<p>Для написания модулей для лаунчера вам нужно подключить следующие библиотеки:</p>
<CodeGroup>
  <CodeGroupItem title="Gradle (Short)" active>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">implementation</span> <span class="token value attr-value">"pro.gravit.launcher:launcher-core:5.2.9"</span>
<span class="token key attr-name">implementation</span> <span class="token value attr-value">"pro.gravit.launcher:launcher-ws-api:5.2.9"</span>
<span class="token key attr-name">implementation</span> <span class="token value attr-value">"pro.gravit.launcher:launcher-client-api:5.2.9"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Maven" active>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>pro.gravit.launcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>launcher-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>pro.gravit.launcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>launcher-ws-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>pro.gravit.launcher<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>launcher-client-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.2.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">></span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">></span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>  </CodeGroupItem>
</CodeGroup>
<h2 id="написание-модуля" tabindex="-1"><a class="header-anchor" href="#написание-модуля" aria-hidden="true">#</a> Написание модуля</h2>
<p>Загрузка модулей происходит из папки modules. Менеджер модулей открывает по очереди все jar и смотрит на параметр
Module-Main-Class в манифесте JAR файла.</p>
<p>Главный класс модуля - это класс, наследуемый от  <strong>pro.gravit.launcher.modules.LauncherModule</strong>  и реализующий метод
init(LauncherInitContext initContext)</p>
<p>Метод init вызывается при инициализации модуля на ранних этапах запуска лаунчера или лаунчсервера. Поэтому реализовывать
логику внутри метода init  <strong>запрещено</strong>. Внутри метода init разрешается обращаться только к методам modulesManager и
initContext, при этом при статической загрузке модуля initContext = null, а при динамической загрузке модуля через
команду loadModule он будет содержать инстанс контекста, из которого можно получить доступ к LaunchServer</p>
<h2 id="события-евенты" tabindex="-1"><a class="header-anchor" href="#события-евенты" aria-hidden="true">#</a> События(евенты)</h2>
<p>Всё что можно сделать из init - загружать другие модули, получать их инстансы и, самое важное,  <strong>подписаться на
события</strong>. Это единственный правильный способ реализовывать логику. При наступлении события менеджер модулей
последовательно проходится по всем модулям в порядке приоритета и вызывает соответствующие обработчики</p>
<p>Встроеные события находятся в pro.gravit.launcher.modules.event</p>
<p>События лаунчсервера находятся в pro.gravit.launchserver.modules.events. Вы должны использовать при работе с
лаунчсервером, так как внутри них содержится инстанс LaunchServer - главный объект лаунчсервера</p>
<p>События лаунчера находятся в pro.gravit.launcher.client.events. Они отвечают за основные события, происходящие в
клиентской части лаунчера</p>
<p>Для подписки на событие вы должны создать метод в вашем классе, принимающий 1 аргумент соответствующий типу события,
которое вы хотите обрабатывать, после чего в методе init вы должны вызвать метод registerEvent, первый аргумент которого</p>
<ul>
<li>ваш метод-обработчик, второй аргумент - класс интересующего вас события</li>
</ul>
<p>Обратите внимание при загрузке модуля через loadModule события, которые уже прошли не вызываются, вместо этого вам
передается initContext</p>
<h2 id="внешние-api" tabindex="-1"><a class="header-anchor" href="#внешние-api" aria-hidden="true">#</a> Внешние API</h2>
<p>Вы можете использовать некоторые API лаунчера извне в вашем моде Minecraft. Вот список пакетов, к которым можно
обращаться извне:</p>
<ul>
<li><strong>pro.gravit.utils</strong>  - утилитные классы и хелперы</li>
<li><strong>pro.gravit.launcher.events</strong>  - ответы на запросы к лаунчсерверу и отдельные события</li>
<li><strong>pro.gravit.launcher.request</strong>  - запросы к лаунчсерверу</li>
<li><strong>pro.gravit.launcher.api</strong>  - Информация о текущем пользователе и профиле</li>
</ul>
<h2 id="написание-authcoreprovider" tabindex="-1"><a class="header-anchor" href="#написание-authcoreprovider" aria-hidden="true">#</a> Написание AuthCoreProvider</h2>
<p>Для интеграции собственных CMS и сайтов с лаунчером рекомендуется написать свой AuthCoreProvider. Для этого Создайте
класс наследник AuthCoreProvider и реализуйте обязательные методы  <RouterLink to="/dev/#%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-oauth">oauth</RouterLink>  после чего
реализуйте необходимые вам расширения:</p>
<p>Расширения класса AuthCoreProvider</p>
<ul>
<li>
<p><strong>AuthSupportExit</strong>  - вы поддерживаете методы завершения сессии пользователя</p>
</li>
<li>
<p><strong>AuthSupportGetAllUsers</strong>  - вы поддерживаете метод получения всех пользователей</p>
</li>
<li>
<p><strong>AuthSupportGetSessionsFromUser</strong>  - вы поддерживаете получение списка сессий пользователя</p>
</li>
<li>
<p><strong>AuthSupportHardware</strong>  - вы поддерживаете работу с HWID <code v-pre>важно</code></p>
</li>
<li>
<p><strong>AuthSupportRegistration</strong>  - вы поддерживаете регистрацию пользователей</p>
</li>
<li>
<p><strong>AuthSupportUserBan</strong>  - вы поддерживаете методы ban и unban</p>
</li>
</ul>
<p>Расширения класса User</p>
<ul>
<li><strong>UserSupportTextures</strong>  - ваш объект User хранит и предоставляет информацию о скинах и плащах. Вы должны вернуть
соответствующие текстуры с метаданными при их наличии. При использовании этих методов TextureProvider больше не
требуется</li>
<li><strong>UserSupportHardware</strong>  - ваш объект User хранит информацию о железе пользователя</li>
<li><strong>UserSupportBanInfo</strong>  - ваш объект User хранит информацию о банах пользователя</li>
<li><strong>UserSupportAdditionalData</strong>  - ваш объект User поддерживает кастомные параметры(такие как email, монеты и т.д.)</li>
</ul>
<h2 id="своя-реализация-oauth-httpauthcoreprovider" tabindex="-1"><a class="header-anchor" href="#своя-реализация-oauth-httpauthcoreprovider" aria-hidden="true">#</a> Своя реализация OAuth (HttpAuthCoreProvider)</h2>
<p>OAuth в лаунчере позволяет использовать временные токены доступа(access) вместо устаревшей системы сессий. Этот метод
отлично подойдет для интеграции собственных CMS с лаунчером</p>
<p>Для работы с OAuth вам необходимо реализовать соответствующие методы getUserSessionByOAuthAccessToken,
refreshAccessToken, а в методе authorize вернуть результат с данными OAuth</p>
<h2 id="порядок-авторизации-с-oauth" tabindex="-1"><a class="header-anchor" href="#порядок-авторизации-с-oauth" aria-hidden="true">#</a> Порядок авторизации с OAuth</h2>
<ul>
<li>Первым шагом вызывается getAuthDetails (Если используется), который сообщает все возможные факторы авторизации</li>
<li>Вторым шагом выполняется авторизация с помощью метода authorize. Вы должны:
<ul>
<li>Проверить, аргументы login и password на null и тип</li>
<li>Если context равен null то это означает, что вам не требуется проверять пароль(если это возможно). Это позволяет
администратору с помощью команды 'sendAuth' авторизировать пользователя без пароля. Вы вправе не поддерживать
данный режим работы и всегда требовать пароль</li>
<li>Создайте объект UserSession, содержащий информацию о пользователе, а так же токены accessToken и refreshToken при
необходимости</li>
</ul>
</li>
<li>Авторизация завершена</li>
</ul>
<p>При необходимости пользователю обновить свой истекший accessToken будет вызван метод refreshAccessToken. В нем вы должны
обновить accessToken  <strong>и refreshToken(если это возможно)</strong>  и вернуть их пользователю. Выставление параметра expire в 0
делает токен вечным</p>
<p>При повторной авторизации вызывается метод getUserByTokenUrl, который должен вернуть объект UserSession с находящимся
внутри объектом HttpUser</p>
<h2 id="написание-своего-скрипта-авторизации" tabindex="-1"><a class="header-anchor" href="#написание-своего-скрипта-авторизации" aria-hidden="true">#</a> Написание своего скрипта авторизации</h2>
<p>Вы можете написать свой скрипт авторизации, для того что бы производить авторизацию через ваше API. Это позволит делать
проверки любой сложности и адаптировать авторизацию лаунчера под любой сайт.</p>
<p>Настройте тип авторизации <code v-pre>http</code></p>
<h3 id="авторизация-приложения" tabindex="-1"><a class="header-anchor" href="#авторизация-приложения" aria-hidden="true">#</a> Авторизация приложения</h3>
<p>HttpAuthCore будет выполнять <code v-pre>Bearer</code> авторизацию со всеми методами. Это значит, что с каждым запросом будет отправлен
дополнительный заголовок:</p>
<p><code v-pre>Authorization: Bearer {token}</code></p>
<p><code v-pre>token</code> - токен из поля <code v-pre>bearerToken</code> в конфиге.</p>
<p>Для обеспечения безопасности, вы должны также сохранить этот токен у себя на удалённом сервере и сверять этот заголовок,
при любом запросе.</p>
<p>UDP: метод <code v-pre>getUserByTokenUrl</code> работает сейчас немного иначе. Заголовок будет отправлен, однако вместо токена, там будет
лежать <code v-pre>accessToken</code>. Что-то вроде <code v-pre>Authorization: Bearer {accessToken}</code>. Учитывайте это, при построении систем.</p>
<h3 id="список-методов" tabindex="-1"><a class="header-anchor" href="#список-методов" aria-hidden="true">#</a> Список методов</h3>
<p>Ниже приведены все методы, которые обрабатывает HttpAuthCoreProvider</p>
<ol>
<li>GET <code v-pre>getUserByUsernameUrl</code></li>
<li>GET <code v-pre>getUserByLoginUrl</code></li>
<li>GET <code v-pre>getUserByUUIDUrl</code></li>
<li>GET <code v-pre>getUserByTokenUrl</code></li>
<li>GET <code v-pre>getAuthDetailsUrl</code> (В конфиге этот метод называется <code v-pre>getAuthDetails</code>, будет исправлено в будущем)</li>
<li>POST <code v-pre>authorizeUrl</code></li>
<li>POST <code v-pre>refreshTokenUrl</code></li>
<li>POST <code v-pre>updateServerIdUrl</code></li>
<li>POST <code v-pre>joinServerUrl</code></li>
<li>POST <code v-pre>checkServerUrl</code></li>
</ol>
<p>Из последних 3-х методов вам необходимо реализовать либо <code v-pre>updateServerIdUrl</code>, либо <code v-pre>joinServerUrl</code> и <code v-pre>checkServerUrl</code></p>
<p>Пример рекомендованного конфига, реализующего OAuth:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"getUserByUsernameUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/user/name/%username%"</span><span class="token punctuation">,</span>
  <span class="token property">"getUserByLoginUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/user/login/%login%"</span><span class="token punctuation">,</span>
  <span class="token property">"getUserByUUIDUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/user/uuid/%uuid%"</span><span class="token punctuation">,</span>
  <span class="token property">"getUserByTokenUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/auth/current"</span><span class="token punctuation">,</span>
  <span class="token property">"getAuthDetailsUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/auth/details"</span><span class="token punctuation">,</span>
  <span class="token property">"refreshTokenUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/auth/refresh"</span><span class="token punctuation">,</span>
  <span class="token property">"authorizeUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/auth/authorize"</span><span class="token punctuation">,</span>
  <span class="token property">"joinServerUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/auth/joinServer"</span><span class="token punctuation">,</span>
  <span class="token property">"checkServerUrl"</span><span class="token operator">:</span> <span class="token string">"https://example.com/auth/checkServer"</span><span class="token punctuation">,</span>
  <span class="token property">"bearerToken"</span><span class="token operator">:</span> <span class="token string">"TOKEN"</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"http"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Успешный ответ предполагает код 200 и тело в виде JSON.</p>
<p>###Обработка ошибок</p>
<p>Вы можете возвращать некоторые ошибки. Все ошибки лаунчер ожидает в виде JSON ответа:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"error"</span><span class="token operator">:</span> <span class="token string">"тип ошибки (ниже)"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Список типов, которые вы можете вернуть:</p>
<ul>
<li><code v-pre>auth.require2fa</code> - вызывается, если нужно проверить второй фактор</li>
<li><code v-pre>auth.require.factor.{number}</code> - вызывается, при использовании MFA для указания необходимости фактора по номеру</li>
<li><code v-pre>auth.expiretoken</code> - вызывается, если токен авторизации истёк (Приведёт к выполнению <code v-pre>refreshTokenUrl</code> для получения
нового токена)</li>
<li><code v-pre>auth.invalidtoken</code> - вызывается, если токен неверный</li>
<li><code v-pre>auth.usernotfound</code> - вызывается, если вы не нашли пользователя (Так же необходимо вернуть код 404)</li>
<li><code v-pre>auth.wrongpassword</code> - вызывается, если пользователь ввёл неверный пароль</li>
<li><code v-pre>auth.userblocked</code> - вызывается, если пользователь заблокирован в вашей системе</li>
</ul>
<h3 id="основные-объекты" tabindex="-1"><a class="header-anchor" href="#основные-объекты" aria-hidden="true">#</a> Основные объекты</h3>
<p>Список объектов, которые будут возвращать методы:</p>
<p>HttpUser:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"Gravita"</span><span class="token punctuation">,</span>
  <span class="token property">"uuid"</span><span class="token operator">:</span> <span class="token string">"UUID"</span><span class="token punctuation">,</span>
  <span class="token property">"accessToken"</span><span class="token operator">:</span> <span class="token string">"accessToken авторизации"</span><span class="token punctuation">,</span>
  <span class="token property">"permissions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"perms"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"launchserver.*"</span><span class="token punctuation">,</span>
      <span class="token string">"launcher.*"</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"roles"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">"ADMIN"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"assets"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"SKIN"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://example.com/skins/Gravita.png"</span><span class="token punctuation">,</span>
      <span class="token property">"digest"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span><span class="token comment">//base64(md5(Bytes))</span>
      <span class="token property">"metadata"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//ничего, если скин типа стив</span>
        <span class="token property">"model"</span><span class="token operator">:</span> <span class="token string">"slim"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"CAPE"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">//ничего, если не используется</span>
      <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://example.com/capes/Gravita.png"</span><span class="token punctuation">,</span>
      <span class="token property">"digest"</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"value"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Properties</p>
<p>Properties - <strong>публичные</strong> параметры, ассоциированные с игроком(например параметры персонажа, выставляемые в личном кабинете). Получить их в моде/плагине можно из объекта <code v-pre>GameProfile</code> authlib. Вы не должны передавать <code v-pre>textures</code> как properties, так как это нарушит правильную работу скинов и плащей. Для работы properties требуется обновление authlib на стороне клиента и сервера</p>
</div>
<p>HttpUserSession:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token punctuation">{</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"RANDOM ID"</span><span class="token punctuation">,</span>
  <span class="token comment">// ID сессии в вашей системе, либо случайная строка или число, если такой системы нет</span>
  <span class="token property">"user"</span><span class="token operator">:</span> (( HttpUser ))<span class="token punctuation">,</span>
  <span class="token property">"expireIn"</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token comment">// Срок окончания действия сессии, 0 - если сессия вечная. Не используется</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AuthReport:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token punctuation">{</span>
  <span class="token property">"minecraftAccessToken"</span><span class="token operator">:</span> <span class="token string">"MINECRAFT ACCESS TOKEN"</span><span class="token punctuation">,</span>
  <span class="token comment">// При желании, может совпадать с "oauthAccessToken"</span>
  <span class="token property">"oauthAccessToken"</span><span class="token operator">:</span> <span class="token string">"ACCESS TOKEN"</span><span class="token punctuation">,</span>
  <span class="token property">"oauthRefreshToken"</span><span class="token operator">:</span> <span class="token string">"REFRESH TOKEN"</span><span class="token punctuation">,</span>
  <span class="token property">"oauthExpire"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">// Длительность действия accessToken в мс, 0 - если токен будет вечным (В таком случае метод refreshToken не будет вызван)</span>
  <span class="token property">"session"</span><span class="token operator">:</span> (( HttpUserSession ))
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="основные-сведения-о-методах" tabindex="-1"><a class="header-anchor" href="#основные-сведения-о-методах" aria-hidden="true">#</a> Основные сведения о методах</h3>
<p>Методы <code v-pre>getUserByUsernameUrl</code>, <code v-pre>getUserByLoginUrl</code>, <code v-pre>getUserByUUIDUrl</code>, <code v-pre>checkServerUrl</code> ожидают ответ типа HttpUser (См. Список объектов), а данные получают в виде GET параметров</p>
<p>Метод <code v-pre>getUserByTokenUrl</code> ожидает ответ типа HttpUserSession (См. Список объектов)</p>
<p>Методы <code v-pre>authorizeUrl</code>, <code v-pre>refreshTokenUrl</code> ожидают ответ типа AuthReport (См. Список объектов)</p>
<p>Методы <code v-pre>joinServerUrl</code>,<code v-pre>updateServerIdUrl</code> ожидают ответ 200 в случае успеха</p>
<h3 id="метод-authorizeurl" tabindex="-1"><a class="header-anchor" href="#метод-authorizeurl" aria-hidden="true">#</a> Метод <code v-pre>authorizeUrl</code></h3>
<p>Метод вызывается при авторизации пользователя. Тут вы должны проверить логин, пароль.</p>
<p>Запрос:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>      <span class="token punctuation">{</span>
  <span class="token property">"login"</span><span class="token operator">:</span> <span class="token string">"Gravita"</span><span class="token punctuation">,</span>
  <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"qwerty"</span><span class="token punctuation">,</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"plain"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"minecraftAccess"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token comment">//если false, то в AuthReport возвращать minecraftAccessToken не требуется</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ответ: ((AuthReport))</p>
<p>Если &quot;context&quot; равно null, вы можете не делать проверку на факторы и сразу разрешить авторизацию. Тогда вы позволите
авторизировать пользователей через консольную команду. Вы в праве не делать этого, если не хотите.</p>
<h3 id="метод-refreshtokenurl" tabindex="-1"><a class="header-anchor" href="#метод-refreshtokenurl" aria-hidden="true">#</a> Метод <code v-pre>refreshTokenUrl</code></h3>
<p>В этом методе вы должны обновить accessToken, если используете не вечные токены. Если ваши токены вечные, вы можете не
реализовывать данный метод</p>
<p>Запрос:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"refreshToken"</span><span class="token operator">:</span> <span class="token string">"REFRESH TOKEN"</span><span class="token punctuation">,</span>
  <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ответ: ((AuthReport))</p>
<h3 id="метод-joinserverurl" tabindex="-1"><a class="header-anchor" href="#метод-joinserverurl" aria-hidden="true">#</a> Метод <code v-pre>joinServerUrl</code></h3>
<p>Используется, когда пользователь заходит на сервер. Вы должны присвоить serverId пользователю в вашей системе, а позже, в
методе checkServer сверить serverId.</p>
<p>Запрос:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"Gravita"</span><span class="token punctuation">,</span>
  <span class="token property">"accessToken"</span><span class="token operator">:</span> <span class="token string">"MINECRAFT ACCESS TOKEN"</span><span class="token punctuation">,</span>
  <span class="token property">"serverId"</span><span class="token operator">:</span> <span class="token string">"SERVER ID"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ответ: любой JSON с кодом 200</p>
<h3 id="метод-checkserverurl" tabindex="-1"><a class="header-anchor" href="#метод-checkserverurl" aria-hidden="true">#</a> Метод <code v-pre>checkServerUrl</code></h3>
<p>В этом методе вы должны проверить serverId с тем что лежит в базе (Было положено в <code v-pre>joinServerUrl</code>)</p>
<p>Запрос:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"Gravita"</span><span class="token punctuation">,</span>
  <span class="token property">"serverId"</span><span class="token operator">:</span> <span class="token string">"SERVER ID"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ответ: ((HttpUser))</p>
<h3 id="метод-updateserveridurl" tabindex="-1"><a class="header-anchor" href="#метод-updateserveridurl" aria-hidden="true">#</a> Метод <code v-pre>updateServerIdUrl</code></h3>
<p>В этом методе вы должны присвоить пользователю полученный serverId</p>
<p>Запрос:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"Gravita"</span><span class="token punctuation">,</span>
  <span class="token property">"serverId"</span><span class="token operator">:</span> <span class="token string">"SERVER ID"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ответ: любой JSON с кодом 200</p>
<h3 id="метод-getauthdetailsurl" tabindex="-1"><a class="header-anchor" href="#метод-getauthdetailsurl" aria-hidden="true">#</a> Метод <code v-pre>getAuthDetailsUrl</code></h3>
<p>Необязательный метод, который используется для указания всех возможных способов авторизации. Используется, только при
реализации 2FA \ MFA</p>
<p>Ответ:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"details"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"password"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"totp"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="подключение-2fa" tabindex="-1"><a class="header-anchor" href="#подключение-2fa" aria-hidden="true">#</a> Подключение 2FA</h3>
<p>Вы можете реализовать 2FA.
Для начала постройте всю авторизацию без него, после чего обязательно реализуйте метод <code v-pre>getAuthDetailsUrl</code></p>
<p>Когда <code v-pre>authorizeUrl</code> вызывается впервые, вы должны проверить, есть ли у пользователя подключённый 2FA. И, если подключён, вернуть ошибку &quot;auth.require2fa&quot;. Обратите внимание, вы должны вернуть эту ошибку после того как пароль пользователя уже прошёл проверку.</p>
<p>Когда вы вернёте необходимость 2FA, пользователю будет предложено ввести второй фактор. Следом метод <code v-pre>authorizeUrl</code> будет вызван ещё раз, однако запрос будет выглядеть немного иначе:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>      <span class="token punctuation">{</span>
  <span class="token property">"login"</span><span class="token operator">:</span> <span class="token string">"Gravita"</span><span class="token punctuation">,</span>
  <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"ip"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"password"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"firstPassword"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"qwerty"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"plain"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"secondPassword"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"totp"</span><span class="token operator">:</span> <span class="token string">"110011"</span><span class="token punctuation">,</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"totp"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"minecraftAccess"</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Вам будет необходимо повторно проверить правильность пароля, а так же правильность введённого кода 2FA (&quot;totp&quot;)</p>
<p>Good luck ❤!</p>
</div></template>


