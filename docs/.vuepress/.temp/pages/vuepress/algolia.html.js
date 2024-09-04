import comp from "/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/vuepress/algolia.html.vue"
const data = JSON.parse("{\"path\":\"/vuepress/algolia.html\",\"title\":\"Algolia DocSearch集成\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"Algolia DocSearch集成\",\"description\":\"VuePress集成Algolia DocSearch插件\"},\"headers\":[],\"git\":{\"updatedTime\":1725431536000,\"contributors\":[{\"name\":\"SunzheTR\",\"email\":\"sunzhe1997@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"vuepress/algolia.md\"}")
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
