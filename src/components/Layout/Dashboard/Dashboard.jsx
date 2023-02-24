import React from 'react'
import styles from './Dashboard.module.css'
import productImg from './../../../assets/img/product.png'
import pepper from './../../../assets/img/pepper.png'
import peppers from './../../../assets/img/peppers.png'
import fenugreek from './../../../assets/img/fenugreek.png'
import basil from './../../../assets/img/basil.png'
import khmeli from './../../../assets/img/khmeli.png'
import garlic from './../../../assets/img/garlic.png'
import salt from './../../../assets/img/salt.png'
import chili from './../../../assets/img/chili.png'
import kebab from './../../../assets/img/kebab.png'
import chicken from './../../../assets/img/chicken.png'
import soup from './../../../assets/img/soup.png'
import fish from './../../../assets/img/fish.png'
import cheese from './../../../assets/img/cheese.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { FormattedMessage } from 'react-intl'

function Dashboard() {
  return (
    <main className={styles['dashboard-wrapper']}>
      <section className={styles['main-section']} id="main-section">
        <AnimationOnScroll animateIn="animate__bounceIn">
          <img className={styles.productImg} src={productImg} alt="product" />
        </AnimationOnScroll>
      </section>
      <section className={styles['secondary-section']}>
        <div>
          <h1 className={styles['desc-header']} id="product-descr">
            <FormattedMessage id="aboutProduct" />
          </h1>

          <div className={styles['product-description-wrapper']}>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <img className={styles.pepper1} src={pepper} alt="pepper1"></img>
            </AnimationOnScroll>
            <AnimationOnScroll delay={500} animateIn="animate__backInDown">
              <p className={styles['product-description']}>
                <FormattedMessage id="aboutAjika" />
              </p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn">
              <img className={styles.pepper2} src={pepper} alt="pepper2"></img>
            </AnimationOnScroll>
          </div>
        </div>
        <div className={styles['product-composition-wrapper']}>
          <div className={styles['product-composition']}>
            <h4>
              <FormattedMessage id="aboutCompound" />
            </h4>

            <ul className={styles['two-columns']}>
              <li>
                <FormattedMessage id="redPepper" />
              </li>
              <AnimationOnScroll animateIn="animate__heartBeat">
                <img
                  className={styles.peppers}
                  src={peppers}
                  alt="peppers"
                ></img>
              </AnimationOnScroll>

              <li>
                <FormattedMessage id="fenugreek" />
              </li>
              <AnimationOnScroll animateIn="animate__heartBeat">
                <img
                  className={styles.fenugreek}
                  src={fenugreek}
                  alt="fenugreek"
                ></img>
              </AnimationOnScroll>
              <li>
                <FormattedMessage id="basil" />
              </li>
              <AnimationOnScroll animateIn="animate__heartBeat">
                <img className={styles.basil} src={basil} alt="basil"></img>
              </AnimationOnScroll>
              <li>
                <FormattedMessage id="khmeliSuneli" />
              </li>
              <AnimationOnScroll animateIn="animate__heartBeat">
                <img className={styles.khmeli} src={khmeli} alt="khmeli"></img>
              </AnimationOnScroll>
              <li>
                <FormattedMessage id="garlic" />
              </li>
              <AnimationOnScroll animateIn="animate__heartBeat">
                <img className={styles.garlic} src={garlic} alt="garlic"></img>
              </AnimationOnScroll>
              <li>
                <FormattedMessage id="salt" />
              </li>
              <AnimationOnScroll animateIn="animate__heartBeat">
                <img className={styles.salt} src={salt} alt="salt"></img>
              </AnimationOnScroll>
            </ul>
          </div>
          <div className={styles['product-energy']}>
            <table>
              <thead>
                <tr>
                  <th colSpan="2">
                    <h4>
                      <FormattedMessage id="aboutEnergy" />
                    </h4>
                    <h5>
                      <FormattedMessage id="aboutWeight" />
                    </h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2">
                    <img className={styles.chili} src={chili} alt="chili" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <FormattedMessage id="aboutKcal" />
                  </td>
                  <td>20,2</td>
                </tr>

                <tr>
                  <td>
                    <FormattedMessage id="aboutKj" />
                  </td>
                  <td>84,57</td>
                </tr>

                <tr>
                  <td>
                    <FormattedMessage id="aboutProtein" />
                  </td>
                  <td>0,5 г.</td>
                </tr>
                <tr>
                  <td>
                    <FormattedMessage id="aboutCarbohydrate" />
                  </td>
                  <td>3,2 г.</td>
                </tr>
                <tr>
                  <td>
                    <FormattedMessage id="aboutFat" />
                  </td>
                  <td>0,6 г.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h1 className={styles.sutability} id="sutability-link">
            <FormattedMessage id="aboutSutability" />
          </h1>
          <div className={styles.list}>
            <div className={styles['food-container']}>
              <AnimationOnScroll animateIn="animate__zoomIn">
                <img className={styles.kebab} src={kebab} alt="kebab"></img>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__backInRight">
                <h1>
                  <FormattedMessage id="aboutMeat" />
                </h1>
              </AnimationOnScroll>
            </div>
            <div className={styles['food-container']}>
              <AnimationOnScroll animateIn="animate__backInLeft">
                <h1>
                  <FormattedMessage id="aboutChicken" />
                </h1>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__zoomIn">
                <img
                  className={styles.chicken}
                  src={chicken}
                  alt="chicken"
                ></img>
              </AnimationOnScroll>
            </div>
            <div className={styles['food-container']}>
              <AnimationOnScroll animateIn="animate__zoomIn">
                <img className={styles.soup} src={soup} alt="soup"></img>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__backInRight">
                <h1>
                  <FormattedMessage id="aboutSoup" />
                </h1>
              </AnimationOnScroll>
            </div>
            <div className={styles['food-container']}>
              <AnimationOnScroll animateIn="animate__backInLeft">
                <h1>
                  <FormattedMessage id="aboutFish" />
                </h1>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__zoomIn">
                <img className={styles.fish} src={fish} alt="fish"></img>
              </AnimationOnScroll>
            </div>
            <div className={styles['food-container']}>
              <AnimationOnScroll animateIn="animate__zoomIn">
                <img className={styles.cheese} src={cheese} alt="cheese"></img>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__backInRight">
                <h1>
                  <FormattedMessage id="aboutCheese" />
                </h1>
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
