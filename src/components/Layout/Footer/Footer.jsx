import React from 'react'
import styles from './Footer.module.css'
import wp from './../../../assets/img/wp.png'
import instagram from './../../../assets/img/instagram.png'
import linkedin from './../../../assets/img/linkedin.png'
import fb from './../../../assets/img/fb.png'
import { FormattedMessage } from 'react-intl'

function Footer() {
  return (
    <footer className={styles.footer} id="footer-id">
      <h1 className={styles.ftext}>
        <FormattedMessage id="footerHeadline" />
      </h1>
      <h3 className={styles['smm-text']}>
        <FormattedMessage id="footerSocial" />
      </h3>
      <div className={styles.smm}>
        <a
          href="https://www.linkedin.com/company/iori/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.wp} src={wp} alt="wp"></img>
        </a>
        <a
          href="https://www.linkedin.com/company/iori/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.instagram}
            src={instagram}
            alt="instagram"
          ></img>
        </a>

        <a
          href="https://www.linkedin.com/company/iori/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.linkedin} src={linkedin} alt="linkedin"></img>
        </a>
        <a
          href="https://www.linkedin.com/company/iori/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={styles.fb} src={fb} alt="fb"></img>
        </a>
      </div>
      <div className={styles.information}>
        <FormattedMessage id="footerAddress" />
      </div>
    </footer>

    // {/* <img className={styles.footer} src={footer} alt="footer"/></img> */}
    //  </footer>
  )
}

export default Footer
