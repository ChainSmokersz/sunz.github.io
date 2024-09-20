import comp from "/Applications/javaProject/sunz/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"Guide\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Guide\",\"description\":\"This is the guide page for my VuePress site.\",\"editLink\":false},\"headers\":[],\"git\":{\"updatedTime\":1725503192000,\"contributors\":[{\"name\":\"SunzheTR\",\"email\":\"sunzhe1997@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"guide/README.md\",\"readingTime\":{\"minutes\":0.11,\"words\":32}}")
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
