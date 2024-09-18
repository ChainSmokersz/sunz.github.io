export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎来到我的博客"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide"} }],
  ["/guide/User.html", { loader: () => import(/* webpackChunkName: "guide_User.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/guide/User.html.js"), meta: {"title":"Guide"} }],
  ["/vuepress/algolia.html", { loader: () => import(/* webpackChunkName: "vuepress_algolia.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/vuepress/algolia.html.js"), meta: {"title":"Algolia DocSearch集成"} }],
  ["/vuepress/giscus%20.html", { loader: () => import(/* webpackChunkName: "vuepress_giscus .html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/vuepress/giscus .html.js"), meta: {"title":"Giscus集成"} }],
  ["/java/GC.html", { loader: () => import(/* webpackChunkName: "java_GC.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/java/GC.html.js"), meta: {"title":"经典垃圾收集器"} }],
  ["/java/String.html", { loader: () => import(/* webpackChunkName: "java_String.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/java/String.html.js"), meta: {"title":"String"} }],
  ["/resourceLibrary/search.html", { loader: () => import(/* webpackChunkName: "resourceLibrary_search.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/resourceLibrary/search.html.js"), meta: {"title":"百宝箱"} }],
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
