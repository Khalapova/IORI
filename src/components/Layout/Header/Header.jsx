import React from 'react'
import styles from './Header.module.css'
import logo from '../../../assets/img/logo.png'
import { FormattedMessage } from 'react-intl'
import LanguageSwitcher from './LanguageSwitcher'
const Header = () => {
  return (
    <>
      <header className={styles.header} id="home">
        <img className={styles.logo} src={logo} alt="logo" />
        <LanguageSwitcher />
        <h1 className={styles.headline}>
          <FormattedMessage id="headerTitle" />
        </h1>
      </header>
    </>
  )
}

export default Header
