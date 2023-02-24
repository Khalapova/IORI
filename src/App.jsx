import './App.css'
import React, { useContext, useState } from 'react'
import Header from './components/Layout/Header/Header'
import Dashboard from './components/Layout/Dashboard/Dashboard'
import Footer from './components/Layout/Footer/Footer'
import Navbar from './components/Layout/Header/Navbar'
import 'animate.css/animate.min.css'
import { IntlProvider } from 'react-intl'
import { localizedMessages } from './assets/i18n/localizedMessages'
import { LanguageContext } from './hooks/languageContext'

function App() {
  const [language, setLanguage] = useState('en')
  const value = { language, setLanguage }

  return (
    <LanguageContext.Provider value={value}>
      <IntlProvider
        locale={language}
        defaultLocale="en"
        messages={localizedMessages[language]}
      >
        <Header />
        <Navbar />
        <Dashboard />
        <Footer />
      </IntlProvider>
    </LanguageContext.Provider>
  )
}

export default App
