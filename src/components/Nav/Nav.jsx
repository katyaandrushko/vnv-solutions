import React from 'react'
import { useState } from 'react'
import './nav.scss'

function Nav() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className="nav">
      <div className="navig">
        <div className="navbars">
          <div className="logo">
            <a href="/">
              <img
                src="../../assets/logo.png"
                alt="Logo"
                className="logo-img"
              />
            </a>
          </div>

          <div className="menu-togle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? 'hamBox hamBoxOpen' : 'hamBox'}>
              <span className={navOpen ? 'lineTop spin' : 'lineTop'}></span>
              <span
                className={navOpen ? 'lineBottom spin' : 'lineBottom'}
              ></span>
            </div>
          </div>

          <div
            className="nav-overlay"
            style={{
              top: navOpen ? '0' : '-100%',
              transitionDelay: navOpen ? '0s' : '0s',
            }}
          >
            <ul className="nav-links">
              <li className="nav-item">
                <a
                  href="#whywe"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? '0' : '120px',
                    transitionDelay: navOpen ? '0.8s' : '0s',
                  }}
                  className="nav-item-wrapper"
                >
                  Чому ми
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#services"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? '0' : '120px',
                    transitionDelay: navOpen ? '0.9s' : '0s',
                  }}
                >
                  Послуги
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? '0' : '120px',
                    transitionDelay: navOpen ? '1s' : '0s',
                  }}
                >
                  Наші проєкти
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? '0' : '120px',
                    transitionDelay: navOpen ? '1.1s' : '0s',
                  }}
                  className="nav-item-wrapper"
                >
                  Контакти
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#social"
                  onClick={() => setNavOpen(!navOpen)}
                  style={{
                    top: navOpen ? '0' : '120px',
                    transitionDelay: navOpen ? '1.2s' : '0s',
                  }}
                >
                  Соціальні мережі
                </a>
                <div className="nav-item-wrapper"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
