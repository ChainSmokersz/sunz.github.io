import comp from "/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"欢迎来到我的博客\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"欢迎来到我的博客\",\"description\":\"这是一个使用 VuePress 搭建的个人博客\",\"lang\":\"zh-CN\",\"heroImage\":\"/images/index-read.gif\",\"heroText\":\"ChainSmoker\",\"tagline\":\"分享知识，记录生活\",\"actions\":[{\"text\":\"开始阅读\",\"link\":\"/guide/\",\"type\":\"primary\"},{\"text\":\"关于作者\",\"link\":\"/guide/User.md\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"学习笔记\",\"details\":\"记录学习过程中的点滴\"},{\"title\":\"编程技巧\",\"details\":\"分享编程相关的经验和技巧\"},{\"title\":\"生活记录\",\"details\":\"用文字记录生活的点点滴滴\"}],\"footer\":\"© 2024 ChainSmoker\"},\"headers\":[],\"git\":{\"updatedTime\":1725004116000,\"contributors\":[{\"name\":\"SunzheTR\",\"email\":\"sunzhe1997@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"index.md\"}")
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
