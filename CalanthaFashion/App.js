import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {QueryClientProvider, QueryClient} from 'react-query'
import {Provider} from 'react-redux'
import i18next from 'i18next'
import {I18nextProvider, withTranslation, initReactI18next} from 'react-i18next'
// import detector from 'i18next-browser-languagedetector'
// import backend from 'i18next-http-backend'

import {store} from './src/redux/store/store'
import en from './src/translation/en.json'
import vi from './src/translation/vi.json'
import Container from './src/navigation/Container'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      cacheTime: 0,
    },
  },
})

i18next
  // .use(detector)
  // .use(backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
  })

const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Container />
          </NavigationContainer>
        </QueryClientProvider>
      </Provider>
    </I18nextProvider>
  )
}

export default withTranslation()(App)
