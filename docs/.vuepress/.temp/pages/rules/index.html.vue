<template><div><h1 id="настроика-авторизации" tabindex="-1"><a class="header-anchor" href="#настроика-авторизации" aria-hidden="true">#</a> Настройка авторизации</h1>
<h2 id="введение" tabindex="-1"><a class="header-anchor" href="#введение" aria-hidden="true">#</a> Введение</h2>
<p><strong>AuthCoreProvider</strong> является заменой тройке AuthProvider, AuthHandler, HWIDHandler, выполняя все их функции в едином, связанном интерфейсе</p>
<p>Преимущества AuthCoreProvider:</p>
<ul>
<li>Возможность использовать OAuth</li>
<li>Отсутствует дублирование подключения к БД</li>
<li>Единый интерфейс проверки пароля</li>
<li>Возможность модулям реализовывать поддержку дополнительных функций и получать дополнительные поля</li>
<li>Возможность модулям реализовывать авторизацию/регистрацию через соц.сети</li>
<li>Множество комманд для управления</li>
</ul>
<p>Для использования команд AuthCoreProvider используйте config auth.ВАШAUTHID.core КОМАНДА АРГУМЕНТЫ<br> Список команд вы можете посмотреть, нажав на TAB</p>
<p>AUTH ID это название блока авторизации, например std</p>
<p>В таком случае команды будут выклядеть так: config auth.std.core КОМАНДА АРГУМЕНТЫ</p>
<h2 id="привилегии" tabindex="-1"><a class="header-anchor" href="#привилегии" aria-hidden="true">#</a> Привилегии</h2>
<p>Лаунчер предоставляет систему привилегий для определения того, какие действия может совершить пользователь. Примеры permissions (<strong>К сожалению, в данный момент новая система permissions недоступна в способе MySQL</strong>)</p>
<ul>
<li><code v-pre>*</code> - все привилегии</li>
<li><code v-pre>launchserver.*</code> - все привилегии, проверяемые на стороне лаунчсервера</li>
<li><code v-pre>launcher.*</code> - все привилегии, проверяемые на стороне лаунчера</li>
<li><code v-pre>launchserver.profile.hitech.*</code> - разрешает показ в лаунчере и вход в профиль hitech (в нижнем регистре)</li>
<li><code v-pre>launcher.runtime.optionals.hitech.*</code> - разрешает управлять всеми опциональными модами в профиле hitech</li>
</ul>
<details class="custom-container details"><summary>Примечания:</summary>
<ul>
<li>Все профили по умолчанию доступны всем, вне зависимости от permissions. Установите в профиле поле <code v-pre>limited</code> в true, чтобы ограничить доступ к профилю по permissions</li>
<li>Все опциональные моды по умолчанию доступны всем, вне зависимости от permissions. Установите в опциональном моде поле <code v-pre>limited</code> в true, чтобы ограничить доступ к профилю по permissions</li>
<li><code v-pre>profileWhitelist</code> не относится к привилегиям, но для его работы, требуется установить в профиле поле <code v-pre>limited</code> в true</li>
<li>Профиль может записываться с помощью title в нижнем регистре (hitech) или с помощью его UUID (f210e1f0-c24e-41b6-9214-cee9a9139823). Второй вариант записи предпочтительней, так как не зависит от языка и не содержит спец. символов</li>
</ul>
</details>
<h2 id="метод-memory" tabindex="-1"><a class="header-anchor" href="#метод-memory" aria-hidden="true">#</a> Метод Memory</h2>
<p>Не требует пароль для входа. Подходит для тестирования и серверов в локальной сети.</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"std"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"memory"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"skinURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"cloakURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"request"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"Default"</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Важно:</p>
<p>Этот метод никак не проверяет accessToken и serverId пользователя, а так же не гарантирует сохранения UUID после рестарта. Это означает, что на сервер можно войти с любого лаунчера под любым логином, а трафик minecraft может быть подвержен MITM атаке. Если вам необходимо контролировать вход на сервер и при этом у вас нет базы данных - используйте <RouterLink to="/auth/#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-fileauthsystem">FileAuthSystem</RouterLink></p>
</div>
<h2 id="метод-mysql" tabindex="-1"><a class="header-anchor" href="#метод-mysql" aria-hidden="true">#</a> Метод MySQL</h2>
<p>Этот способ подходит, если:</p>
<ul>
<li>У вас есть сайт или сервис с БД MySQL/MariaDB, через который пользователи могут зарегистрироваться</li>
<li>У лаунчсервера есть прямой доступ к БД</li>
<li>В БД пароли хранятся в одном столбце, в таблице пользователей</li>
</ul>
<p>Выполните следующие SQL запросы для создания таблицы с HWID и необходимых полей:
<strong>ВНИМАНИЕ, измените users на название своей таблицы с пользователями</strong></p>
<CodeGroup>
<CodeGroupItem title="[ ПРИМЕР ]">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- Добавляет недостающие поля в таблицу</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> users
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> uuid <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> accessToken <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> serverID <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> hwidId <span class="token keyword">BIGINT</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- Создаёт триггер на генерацию UUID для новых пользователей</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> setUUID BEFORE <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> users
<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>
<span class="token keyword">IF</span> NEW<span class="token punctuation">.</span>uuid <span class="token operator">IS</span> <span class="token boolean">NULL</span> <span class="token keyword">THEN</span>
<span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>uuid <span class="token operator">=</span> UUID<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span> <span class="token comment">//</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- Генерирует UUID для уже существующих пользователей</span>
<span class="token keyword">UPDATE</span> users <span class="token keyword">SET</span> uuid<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> UUID<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">WHERE</span> uuid <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>hwids<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>publickey<span class="token punctuation">`</span></span> <span class="token keyword">blob</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>hwDiskId<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>baseboardSerialNumber<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>graphicCard<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>displayId<span class="token punctuation">`</span></span> <span class="token keyword">blob</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>bitness<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>totalMemory<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>logicalProcessors<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>physicalProcessors<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>processorMaxFreq<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>battery<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>banned<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">"0"</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>hwids<span class="token punctuation">`</span></span>
<span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>publickey<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>publickey<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>hwids<span class="token punctuation">`</span></span>
<span class="token keyword">MODIFY</span> <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>users<span class="token punctuation">`</span></span>
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>users_hwidfk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>hwidId<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>hwids<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="[ ПРИМЕР ДЛЯ DLE ]">
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- Добавляет недостающие поля в таблицу</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> dle_users
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> uuid <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> accessToken <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> serverID <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> hwidId <span class="token keyword">BIGINT</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- Создаёт триггер на генерацию UUID для новых пользователей</span>
<span class="token keyword">DELIMITER</span> <span class="token comment">//</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> setUUID BEFORE <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> dle_users
<span class="token keyword">FOR EACH ROW</span> <span class="token keyword">BEGIN</span>
<span class="token keyword">IF</span> NEW<span class="token punctuation">.</span>uuid <span class="token operator">IS</span> <span class="token boolean">NULL</span> <span class="token keyword">THEN</span>
<span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>uuid <span class="token operator">=</span> UUID<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
<span class="token keyword">END</span><span class="token punctuation">;</span> <span class="token comment">//</span>
<span class="token keyword">DELIMITER</span> <span class="token punctuation">;</span>

<span class="token comment">-- Генерирует UUID для уже существующих пользователей</span>
<span class="token keyword">UPDATE</span> dle_users <span class="token keyword">SET</span> uuid<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> UUID<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">WHERE</span> uuid <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>hwids<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
<span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>publickey<span class="token punctuation">`</span></span> <span class="token keyword">blob</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>hwDiskId<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>baseboardSerialNumber<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>graphicCard<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>displayId<span class="token punctuation">`</span></span> <span class="token keyword">blob</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>bitness<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>totalMemory<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>logicalProcessors<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>physicalProcessors<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>processorMaxFreq<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>battery<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
<span class="token identifier"><span class="token punctuation">`</span>banned<span class="token punctuation">`</span></span> <span class="token keyword">tinyint</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">"0"</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>hwids<span class="token punctuation">`</span></span>
<span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>publickey<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>publickey<span class="token punctuation">`</span></span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>hwids<span class="token punctuation">`</span></span>
<span class="token keyword">MODIFY</span> <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">;</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>dle_users<span class="token punctuation">`</span></span>
<span class="token keyword">ADD</span> <span class="token keyword">CONSTRAINT</span> <span class="token identifier"><span class="token punctuation">`</span>dle_users_hwidfk<span class="token punctuation">`</span></span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>hwidId<span class="token punctuation">`</span></span><span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> <span class="token identifier"><span class="token punctuation">`</span>hwids<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<p>Поместите в раздел <strong>&quot;auth&quot;: {}</strong> в LaunchServer.json</p>
<CodeGroup>
<CodeGroupItem title="[ Для вставки ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"std"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"mysql"</span><span class="token punctuation">,</span>
        <span class="token property">"mySQLHolder"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
          <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
          <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"launchserver"</span><span class="token punctuation">,</span>
          <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span>
          <span class="token property">"database"</span><span class="token operator">:</span> <span class="token string">"db"</span><span class="token punctuation">,</span>
          <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"UTC"</span><span class="token punctuation">,</span>
          <span class="token property">"useHikari"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"algo"</span><span class="token operator">:</span> <span class="token string">"SHA256"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"digest"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"expireSeconds"</span><span class="token operator">:</span> <span class="token number">3600</span><span class="token punctuation">,</span>
        <span class="token property">"table"</span><span class="token operator">:</span> <span class="token string">"users"</span><span class="token punctuation">,</span>
        <span class="token property">"tableHwid"</span><span class="token operator">:</span> <span class="token string">"hwids"</span><span class="token punctuation">,</span>
        <span class="token property">"uuidColumn"</span><span class="token operator">:</span> <span class="token string">"uuid"</span><span class="token punctuation">,</span>
        <span class="token property">"usernameColumn"</span><span class="token operator">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span>
        <span class="token property">"passwordColumn"</span><span class="token operator">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span>
        <span class="token property">"accessTokenColumn"</span><span class="token operator">:</span> <span class="token string">"accessToken"</span><span class="token punctuation">,</span>
        <span class="token property">"hardwareIdColumn"</span><span class="token operator">:</span> <span class="token string">"hwidId"</span><span class="token punctuation">,</span>
        <span class="token property">"serverIDColumn"</span><span class="token operator">:</span> <span class="token string">"serverID"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"skinURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"cloakURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"request"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"Default"</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="[ Пример с описанием ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"std"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// AUTH ID. При настройке нескольких авторизаций одновременно, имя должно отличаться</span>
      <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// Раздел конфигурации AuthCoreProvider</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"mysql"</span><span class="token punctuation">,</span> <span class="token comment">// Метод авторизации AuthCoreProvider'а</span>
        <span class="token property">"mySQLHolder"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"address"</span><span class="token operator">:</span> <span class="token string">"example.com"</span><span class="token punctuation">,</span> <span class="token comment">// Адрес mysql сервера</span>
          <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span> <span class="token comment">// Порт mysql сервера</span>
          <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"launchserver"</span><span class="token punctuation">,</span> <span class="token comment">// Имя пользователя</span>
          <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"password123"</span><span class="token punctuation">,</span> <span class="token comment">// Пароль пользователя</span>
          <span class="token property">"database"</span><span class="token operator">:</span> <span class="token string">"db?serverTimezone=UTC"</span><span class="token punctuation">,</span> <span class="token comment">// База данных (до ?), после — параметры базы данных, в этом примере — установка серверного часового пояса</span>
          <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"UTC"</span><span class="token punctuation">,</span> <span class="token comment">// установка клиентского часового пояса</span>
          <span class="token property">"useHikari"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// Использовать HikariCP ?</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// Раздел конфигурации PasswordVerifier. Метод сверки пароля пользователя</span>
          <span class="token property">"algo"</span><span class="token operator">:</span> <span class="token string">"SHA256"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"digest"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"expireSeconds"</span><span class="token operator">:</span> <span class="token number">3600</span><span class="token punctuation">,</span> <span class="token comment">// Время действия accessToken в секундах</span>
        <span class="token property">"table"</span><span class="token operator">:</span> <span class="token string">"users"</span><span class="token punctuation">,</span> <span class="token comment">// Таблица с пользователями</span>
        <span class="token property">"tableHwid"</span><span class="token operator">:</span> <span class="token string">"hwids"</span><span class="token punctuation">,</span> <span class="token comment">// Таблица для хранения данных HWID</span>
        <span class="token property">"uuidColumn"</span><span class="token operator">:</span> <span class="token string">"uuid"</span><span class="token punctuation">,</span> <span class="token comment">// Название столбца с UUID в таблице пользователей</span>
        <span class="token property">"usernameColumn"</span><span class="token operator">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token comment">// Название столбца с именами пользователей</span>
        <span class="token property">"passwordColumn"</span><span class="token operator">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span> <span class="token comment">// Название столбца с хешированными паролями пользователей</span>
        <span class="token property">"accessTokenColumn"</span><span class="token operator">:</span> <span class="token string">"accessToken"</span><span class="token punctuation">,</span> <span class="token comment">// Название столбца с accessToken</span>
        <span class="token property">"hardwareIdColumn"</span><span class="token operator">:</span> <span class="token string">"hwidId"</span><span class="token punctuation">,</span> <span class="token comment">// Название столбца с ID записи в таблице hwids</span>
        <span class="token property">"serverIDColumn"</span><span class="token operator">:</span> <span class="token string">"serverID"</span> <span class="token comment">// Название столбца с serverID</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// Раздел конфигурации TextureProvider'а</span>
        <span class="token property">"skinURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"cloakURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"request"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Использование способа авторизации по умолчанию. При наличии нескольких, у остальных должно быть false</span>
      <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"Default"</span> <span class="token comment">// Название метода авторизации в лаунчере</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container tip"><p class="custom-container-title">Настройте следующие конфигурации:</p>
<ul>
<li><a href="#%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%B0%D1%86%D0%B8%D1%8F-passwordverifier">[ PasswordVerifier ]</a></li>
<li><RouterLink to="/other/#textureprovider">[ TextureProvider ]</RouterLink></li>
</ul>
</div>
<p>Для работы HWID включите опцию <code v-pre>enableHardwareFeature</code> в <code v-pre>protectHandler</code> и измените его <code v-pre>type</code> на <code v-pre>advanced</code></p>
<div class="custom-container tip"><p class="custom-container-title">Важно</p>
<p>Начиная с 5.2.9 метод MySQL генерирует access и refresh токены. Refresh токен генерируется на основе имени пользователя, хеша пароля и секретной соли(legacySalt). После смены пароля access токен продолжит действовать в течении определенного в конфигурации времени и только после потребуется повторный вход. Если вы потеряете файлы в папке <code v-pre>.keys</code> лаунчсервера игроки будут вынуждены перелогинится.</p>
</div>
<h2 id="метод-postgresql" tabindex="-1"><a class="header-anchor" href="#метод-postgresql" aria-hidden="true">#</a> Метод PostgreSQL</h2>
<p>Метод postgresql не работает с HWID на момент 5.2.7</p>
<p>Выполните следующий SQL код для добавления новых полей и триггера:</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment">-- Добавляет недостающие поля в таблицу</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> users
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> uuid <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span> <span class="token keyword">UNIQUE</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> accessToken <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> serverID <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">41</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- Добавляет расширение для генерации UUID</span>
<span class="token keyword">CREATE</span> EXTENSION <span class="token keyword">IF</span> <span class="token operator">NOT</span> <span class="token keyword">EXISTS</span> <span class="token string">"uuid-ossp"</span><span class="token punctuation">;</span>
<span class="token comment">-- Добавляет триггер для генерации UUID</span>
<span class="token keyword">CREATE</span> <span class="token operator">OR</span> <span class="token keyword">REPLACE</span> <span class="token keyword">FUNCTION</span> <span class="token keyword">public</span><span class="token punctuation">.</span>users_uuid_trigger_func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">RETURNS</span> <span class="token keyword">TRIGGER</span>
<span class="token keyword">AS</span>
$<span class="token keyword">function</span>$
    <span class="token keyword">BEGIN</span>
        <span class="token keyword">IF</span> <span class="token punctuation">(</span>new<span class="token punctuation">.</span>uuid <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span> <span class="token keyword">THEN</span>
		new<span class="token punctuation">.</span>uuid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">SELECT</span> uuid_generate_v4<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">END</span> <span class="token keyword">IF</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> new<span class="token punctuation">;</span>
    <span class="token keyword">END</span><span class="token punctuation">;</span>
$<span class="token keyword">function</span>$ <span class="token keyword">LANGUAGE</span> plpgsql<span class="token punctuation">;</span>

<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> users_uuid_trigger
    BEFORE <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> users
    <span class="token keyword">FOR EACH ROW</span>
<span class="token keyword">EXECUTE</span> <span class="token keyword">PROCEDURE</span> <span class="token keyword">public</span><span class="token punctuation">.</span>users_uuid_trigger_func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- Генерирует UUID для уже существующих пользователей</span>
<span class="token keyword">UPDATE</span> users <span class="token keyword">SET</span> uuid<span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">SELECT</span> uuid_generate_v4<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">WHERE</span> uuid <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Пример конфигурации:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"std"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"postgresql"</span><span class="token punctuation">,</span>
        <span class="token property">"postgresSQLHolder"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"addresses"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"localhost"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"ports"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5432</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token property">"username"</span><span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span>
          <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"pass"</span><span class="token punctuation">,</span>
          <span class="token property">"database"</span><span class="token operator">:</span> <span class="token string">"db"</span><span class="token punctuation">,</span>
          <span class="token property">"timezone"</span><span class="token operator">:</span> <span class="token string">"UTC"</span><span class="token punctuation">,</span>
          <span class="token property">"useHikari"</span><span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"algo"</span><span class="token operator">:</span> <span class="token string">"SHA256"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"digest"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"expireSeconds"</span><span class="token operator">:</span> <span class="token number">3600</span><span class="token punctuation">,</span>
        <span class="token property">"table"</span><span class="token operator">:</span> <span class="token string">"users"</span><span class="token punctuation">,</span>
        <span class="token property">"tableHwid"</span><span class="token operator">:</span> <span class="token string">"hwids"</span><span class="token punctuation">,</span>
        <span class="token property">"uuidColumn"</span><span class="token operator">:</span> <span class="token string">"uuid"</span><span class="token punctuation">,</span>
        <span class="token property">"usernameColumn"</span><span class="token operator">:</span> <span class="token string">"username"</span><span class="token punctuation">,</span>
        <span class="token property">"passwordColumn"</span><span class="token operator">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span>
        <span class="token property">"accessTokenColumn"</span><span class="token operator">:</span> <span class="token string">"accessToken"</span><span class="token punctuation">,</span>
        <span class="token property">"serverIDColumn"</span><span class="token operator">:</span> <span class="token string">"serverID"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"skinURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/skins/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"cloakURL"</span><span class="token operator">:</span> <span class="token string">"http://example.com/cloaks/%username%.png"</span><span class="token punctuation">,</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"request"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"Default"</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Важно</p>
<p>Начиная с 5.2.9 метод PostgreSQL генерирует access и refresh токены. Refresh токен генерируется на основе имени пользователя, хеша пароля и секретной соли(legacySalt). После смены пароля access токен продолжит действовать в течении определенного в конфигурации времени и только после потребуется повторный вход. Если вы потеряете файлы в папке <code v-pre>.keys</code> лаунчсервера игроки будут вынуждены перелогинится.</p>
</div>
<h2 id="метод-http" tabindex="-1"><a class="header-anchor" href="#метод-http" aria-hidden="true">#</a> Метод http</h2>
<p>Следуйте инструкции к вашему скрипту или обратитесь к <RouterLink to="/dev/#%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-oauth">этой</RouterLink>  инструкции для создания собственного скрипта</p>
<h2 id="метод-fileauthsystem" tabindex="-1"><a class="header-anchor" href="#метод-fileauthsystem" aria-hidden="true">#</a> Метод FileAuthSystem</h2>
<p>Установите модуль <a href="https://github.com/GravitLauncher/LauncherModules/tree/master/FileAuthSystem_module" target="_blank" rel="noopener noreferrer">FileAuthSystem<ExternalLinkIcon/></a><br>
Он позволит вам создать файловую систему хранения логинов и паролей без СУБД</p>
<h2 id="конфигурация-passwordverifier" tabindex="-1"><a class="header-anchor" href="#конфигурация-passwordverifier" aria-hidden="true">#</a> Конфигурация PasswordVerifier</h2>
<p>Для настройки большинства способов авторизации через БД вам необходимо указать passwordVerifier, соответствующий вашей CMS на сайте. (секцию passwordVerifier можно встретить при конфигурировании метода <a href="#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-mysql">mysql</a> либо <a href="#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-postgresql">postgresql</a>)</p>
<CodeGroup>
<CodeGroupItem title="[ DOUBLE DIGESET ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">"algo"</span><span class="token operator">:</span> <span class="token string">"SHA256"</span><span class="token punctuation">,</span>
   <span class="token property">"toHexMode"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
   <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"doubleDigest"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Примечания:</p>
<ul>
<li>Алгоритм doubleDigest <strong>дважды</strong> хеширует пароль одним алгоритмом без соли. Опция toHexMode определяет будут ли хешироваться бинарные данные (false) или HEX строка (true)</li>
<li>Список доступных алгоритмов аналогичен способу digest</li>
<li>Применяется в старых версиях DLE (алгоритм MD5) и в некоторых других CMS</li>
</ul>
</div>
</CodeGroupItem>
<CodeGroupItem title="[ DIGEST ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">"algo"</span><span class="token operator">:</span> <span class="token string">"SHA256"</span><span class="token punctuation">,</span>
   <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"digest"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Примечания:</p>
<ul>
<li>Алгоритм digest <strong>один раз</strong> хеширует пароль одним алгоритмом без соли</li>
<li>Метод поддерживает любые алгоритмы хеширования, реализованные в вашей JDK или библиотеки BouncyCastle. Самые распространенные из них: MD5, SHA1, SHA256, SHA512</li>
</ul>
</div>
</CodeGroupItem>
<CodeGroupItem title="[ PHP BCRYPT ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bcrypt"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::::</p>
<div class="custom-container tip"><p class="custom-container-title">Примечания:</p>
<ul>
<li>Проверяет пароль аналогично функции <code v-pre>password_verify</code> в языке PHP</li>
<li>Большинство современных CMS использует именно этот тип хеширования пароля</li>
</ul>
</div>
</CodeGroupItem>
<CodeGroupItem title="[ WORDPRESS PHPASS ]">
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"passwordVerifier"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"phpass"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Обязательная установка модуля</p>
<p>Несколько вариантов, где можно взять модуль:</p>
<div class="custom-container tip"><p class="custom-container-title">Из релиза:</p>
<ul>
<li><a href="https://github.com/GravitLauncher/Launcher/releases" target="_blank" rel="noopener noreferrer">GitHub Release<ExternalLinkIcon/></a></li>
<li>В архиве <a href="https://github.com/GravitLauncher/Launcher/releases/latest/download/LaunchServerModules.zip" target="_blank" rel="noopener noreferrer">LaunchServerModules.zip<ExternalLinkIcon/></a></li>
</ul>
</div>
<div class="custom-container tip"><p class="custom-container-title">Из своих исходников, после установки скриптом:</p>
<p>Местонахождение: <strong><code v-pre>./src/modules/AdditionalHash_module/build/libs/AdditionalHash_module.jar</code></strong>
Скопировать командой:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cp</span> ./src/modules/AdditionalHash_module/build/libs/AdditionalHash_module.jar ./modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<p><strong>Исходники <a href="https://github.com/GravitLauncher/LauncherModules/tree/master/AdditionalHash_module" target="_blank" rel="noopener noreferrer">AddionalHash<ExternalLinkIcon/></a></strong></p>
</div>
<div class="custom-container tip"><p class="custom-container-title">Примечания:</p>
<ul>
<li>Проверяет пароль аналогично библиотеки <code v-pre>PHPHASH</code> в WordPress</li>
<li>Используется в WordPress</li>
</ul>
</div>
</CodeGroupItem>
</CodeGroup>
<details class="custom-container details"><summary>Комьюнити реализации, метод JSON:</summary>
<p><a href="https://github.com/microwin7/GravitLauncher-PasswordVerifier" target="_blank" rel="noopener noreferrer">[PHP] microwin7/GravitLauncher-PasswordVerifier<ExternalLinkIcon/></a></p>
<ul>
<li>Bcrypt</li>
<li>PHPass</li>
<li>PBKDF2</li>
</ul>
</details>
<h2 id="несколько-методов-авторизации" tabindex="-1"><a class="header-anchor" href="#несколько-методов-авторизации" aria-hidden="true">#</a> Несколько методов авторизации</h2>
<p>Методы авторизации для core вы можете увидеть выше<br>
TextureProvider обязателен если вам нужны скины, подробнее о настройке прочитайте <RouterLink to="/other/#textureprovider">тут</RouterLink></p>
<p>Закрываем метод std и <strong>обязательно</strong> ставим запятую<br>
Далее выполняем настройку столько раз, сколько типов авторизаций необходимо</p>
<p>Пример нескольких методов авторизаций:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token property">"auth"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"std"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  	<span class="token property">"textureProvider"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"void"</span>
	  <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Будет ли данный способ авторизации выбран по умолчанию</span>
    <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"Default"</span> <span class="token comment">// Название метода авторизации в лаунчере</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"Microsoft"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"core"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"isDefault"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Возможен только один блок с положением true</span>
    <span class="token property">"displayName"</span><span class="token operator">:</span> <span class="token string">"Microsoft"</span> <span class="token comment">// Название метода авторизации в лаунчере</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>При копировании данного примера не забудте убрать все коментарии!</strong></p>
</div></template>


