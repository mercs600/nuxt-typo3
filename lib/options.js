export default {
  baseURL: 'http://127.0.0.1:3000',
  api: {
    baseURL: 'http://localhost:3000/api',
    endpoints: {
      initialData: '?type=834'
    }
  },
  // map your frontend layouts
  // by default TYPO3 returns integer value
  layouts: {
    0: 'default'
  },
  i18n: {
    locale: 'en',
    fallbackLocale: 'en'
  },
  registerComponents: true,
  registerLayouts: true
}
