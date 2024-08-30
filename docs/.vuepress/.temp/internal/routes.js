export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎来到我的博客"} }],
  ["/java/GC.html", { loader: () => import(/* webpackChunkName: "java_GC.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/java/GC.html.js"), meta: {"title":"经典垃圾收集器"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide"} }],
  ["/guide/User.html", { loader: () => import(/* webpackChunkName: "guide_User.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/guide/User.html.js"), meta: {"title":"Guide"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Applications/javaProject/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
