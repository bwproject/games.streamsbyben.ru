export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"ru_RU\",\"title\":\"ProjectBW-WiKi\",\"description\":\"ProjectBW-WiKi\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"16x16\",\"href\":\"/images/icons/favicon-16x16.png\"}],[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"sizes\":\"32x32\",\"href\":\"/images/icons/favicon-32x32.png\"}]],\"locales\":{}}")

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
