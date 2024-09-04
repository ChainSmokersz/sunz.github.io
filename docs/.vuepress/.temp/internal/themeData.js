export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/algolia.md\"},{\"text\":\"指南\",\"link\":\"/guide/\"},{\"text\":\"面试题\",\"link\":\"/guide/\"},{\"text\":\"Java\",\"children\":[{\"text\":\"Java 面向对象和基础\",\"children\":[{\"text\":\"Java 面向对象基础\",\"link\":\"/java/GC.md\"},{\"text\":\"Java 基础知识体系\",\"link\":\"/java/basics/\"}]}]},{\"text\":\"工具\",\"children\":[{\"text\":\"VuePress\",\"children\":[{\"text\":\"Algolia DocSearch集成\",\"link\":\"/vuepress/algolia.md\"}]}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
