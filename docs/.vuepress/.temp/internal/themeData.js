export const themeData = JSON.parse("{\"repo\":\"bwproject/projectbw-wiki\",\"docsRepo\":\"https://github.com/bwproject/projectbw-wiki\",\"docsBranch\":\"master\",\"docsDir\":\"docs\",\"editLinkPattern\":\":repo/edit/:branch/:path\",\"locales\":{\"/\":{\"editLinkText\":\"Измените эту страницу на GitHub\",\"lastUpdatedText\":\"Последнее обновление\",\"notFound\":[\"Здесь ничего нет.\",\"Как мы тут оказались?\",\"Похоже, у нас есть несколько неработающих ссылок.\"],\"backToHome\":\"Вернуться на главную\",\"openInNewWindow\":\"открыть в новом окне\",\"toggleDarkMode\":\"переключить темный режим\",\"toggleSidebar\":\"переключить боковую панель\",\"contributors\":false,\"contributorsText\":\"Спонсоры\",\"selectLanguageName\":\"English\"}},\"logo\":\"images/hero.png\",\"navbar\":[{\"text\":\"Руководство\",\"children\":[\"/0_welcome/README.md\",\"/1_rules/README.md\",\"/2_server/README.md\",\"/3_login/README.md\",\"/4_plugins/README.md\",\"/5_bedrock/README.md\"]},{\"text\":\"Зеркало\",\"link\":\"https://projectbw.ru/\"},{\"text\":\"Discord\",\"link\":\"https://projectbw.ru/\"}],\"sidebar\":{\"/\":[{\"text\":\"Руководство\",\"collapsible\":false,\"children\":[\"/0_welcome/README.md\",\"/1_rules/README.md\",\"/2_server/README.md\",\"/3_login/README.md\",\"/4_plugins/README.md\",\"/5_bedrock/README.md\"]}]},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
