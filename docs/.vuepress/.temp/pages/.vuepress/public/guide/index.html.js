import comp from "/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/.vuepress/public/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/.vuepress/public/guide/\",\"title\":\"Guide\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Guide\",\"description\":\"This is the guide page for my VuePress site.\"},\"headers\":[],\"git\":{},\"filePathRelative\":\".vuepress/public/guide/README.md\"}")
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
