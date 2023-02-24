import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import './Navbar.css'
import { FormattedMessage } from 'react-intl'

const Navbar = () => {
  return (
    <Menu right className="menu-item-wrapper">
      <a className="menu-item" href="#main-section">
        <FormattedMessage id="navMain" />
      </a>
      <a className="menu-item" href="#product-descr">
        <FormattedMessage id="navProduct" />
      </a>
      <a className="menu-item" href="#sutability-link">
        <FormattedMessage id="navSutabiliy" />
      </a>
      <a className="menu-item" href="#footer-id">
        <FormattedMessage id="navContacts" />
      </a>
    </Menu>
  )
}

export default Navbar
