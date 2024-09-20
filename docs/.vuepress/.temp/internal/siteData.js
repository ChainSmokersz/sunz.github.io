export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"ChainSmoker\",\"description\":\"Java全栈知识体系\",\"head\":[\"script\",{\"async\":true,\"src\":\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5945083129646506\",\"crossorigin\":\"anonymous\"},[\"link\",{\"rel\":\"icon\",\"href\":\"/images/favicon.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
