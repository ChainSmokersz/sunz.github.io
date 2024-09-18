export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"指南\",\"link\":\"/guide/\"},{\"text\":\"面试题\",\"link\":\"/index.md/\"},{\"text\":\"Java\",\"children\":[{\"text\":\"Java 面向对象和基础\",\"children\":[{\"text\":\"Java 面向对象基础\",\"link\":\"/java/GC.md\"},{\"text\":\"Java 基础知识体系\",\"link\":\"/java/String.md\"}]}]},{\"text\":\"VuePress\",\"children\":[{\"text\":\"VuePress生态系统\",\"children\":[{\"text\":\"Algolia DocSearch集成\",\"link\":\"/vuepress/algolia.md\"},{\"text\":\"Algolia Giscus集成\",\"link\":\"/vuepress/giscus .md\"}]}]},{\"text\":\"资源库\",\"link\":\"/resourceLibrary/search.md\"}],\"editLinks\":true,\"docsRepo\":\"https://gitlab.com/ChainSmokersz/sunz.github.io\",\"docsBranch\":\"main\",\"docsDir\":\"docs\",\"editLinkPattern\":\":repo/blob/:branch/:path\",\"locales\":{\"/\":{\"lastUpdatedText\":\"最后更新\",\"editLinkText\":\"在GitHub上编辑此页\",\"contributorsText\":\"贡献者\",\"notFound\":[\"页面不存在\",\"找不到页面\",\"哦不，页面跑丢了！\"],\"backToHome\":\"返回首页\",\"prev\":\"上一页\",\"next\":\"下一页\",\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
