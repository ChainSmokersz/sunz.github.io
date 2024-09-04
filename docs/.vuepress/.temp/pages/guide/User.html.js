import comp from "/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/guide/User.html.vue"
const data = JSON.parse("{\"path\":\"/guide/User.html\",\"title\":\"Guide\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Guide\",\"description\":\"This is the guide page for my VuePress site.\"},\"headers\":[],\"git\":{\"updatedTime\":1725004116000,\"contributors\":[{\"name\":\"SunzheTR\",\"email\":\"sunzhe1997@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"guide/User.md\"}")
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
