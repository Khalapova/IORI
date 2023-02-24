import React, { useContext } from 'react'
import { LanguageContext } from '../../../hooks/languageContext'
import styles from './LanguageSwitcher.module.css'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  function handleLanguageChange(event) {
    const selectedLanguage = event.target.value
    setLanguage(selectedLanguage)
  }

  return (
    <>
      <label htmlFor="language-select"></label>
      <select
        id="language-select"
        value={language}
        onChange={handleLanguageChange}
        className={styles.select}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="ar">Arabian</option>
      </select>
    </>
  )
}

export default LanguageSwitcher
