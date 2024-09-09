import comp from "/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/vuepress/algolia.html.vue"
const data = JSON.parse("{\"path\":\"/vuepress/algolia.html\",\"title\":\"Algolia DocSearch集成\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"Algolia DocSearch集成\",\"description\":\"VuePress集成Algolia DocSearch插件\",\"contributors\":true,\"tags\":[\"VuePress\",\"Algolia\"]},\"headers\":[{\"level\":2,\"title\":\"背景\",\"slug\":\"背景\",\"link\":\"#背景\",\"children\":[]},{\"level\":2,\"title\":\"Algolia\",\"slug\":\"algolia\",\"link\":\"#algolia\",\"children\":[{\"level\":3,\"title\":\"2.1 ces\",\"slug\":\"_2-1-ces\",\"link\":\"#_2-1-ces\",\"children\":[]}]}],\"git\":{\"updatedTime\":1725870688000,\"contributors\":[{\"name\":\"SunzheTR\",\"email\":\"sunzhe1997@gmail.com\",\"commits\":5}]},\"filePathRelative\":\"vuepress/algolia.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
