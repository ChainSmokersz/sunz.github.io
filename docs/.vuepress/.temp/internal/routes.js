export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎来到我的博客"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide"} }],
  ["/guide/User.html", { loader: () => import(/* webpackChunkName: "guide_User.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/guide/User.html.js"), meta: {"title":"Guide"} }],
  ["/java/GC.html", { loader: () => import(/* webpackChunkName: "java_GC.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/java/GC.html.js"), meta: {"title":"经典垃圾收集器"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
