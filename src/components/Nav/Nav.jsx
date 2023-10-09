import './nav.scss'
import React, { useState } from 'react'
import Hamburger from '../Hamburger/Hamburger'

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src="./assets/logo.png" alt="Logo" className="logo-img" />
      </div>

      <div className="rightside active">
        <ul className="nav__items">
          <li className="nav__item">
            <a href="#whywe" className="nav__link">
              Чому ми
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Послуги
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Наші проєкти
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Контакти
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Соціальні мережі
            </a>
          </li>
        </ul>
        <Hamburger />
      </div>
    </nav>
  )
}

export default Nav
