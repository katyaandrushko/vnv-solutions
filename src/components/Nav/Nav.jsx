import React, { useState } from 'react'
import './nav.scss'

function Nav() {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }

  const navLinks = [
    { href: '#whywe', text: 'Чому ми', delay: '0.8s' },
    { href: '#services', text: 'Послуги', delay: '0.9s' },
    { href: '#projects', text: 'Наші проєкти', delay: '1s' },
    { href: '#contact', text: 'Контакти', delay: '1.1s' },
    { href: '#social', text: 'Соціальні мережі', delay: '1.2s' },
  ]

  return (
    <nav className="nav">
      <div className="navbars">
        <div className="logo">
          <a href="#main">
            <img src="./assets/logo.png" alt="Logo" className="logo-img" />
          </a>
        </div>

        <div className="menu-togle" onClick={toggleNav}>
          <div className={`hamBox ${navOpen ? 'hamBoxOpen' : ''}`}>
            <span className={`lineTop ${navOpen ? 'spin' : ''}`}></span>
            <span className={`lineBottom ${navOpen ? 'spin' : ''}`}></span>
          </div>
        </div>

        <div className="nav-overlay" style={{ top: navOpen ? '0' : '-100%' }}>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={link.href}
                  onClick={toggleNav}
                  style={{
                    top: navOpen ? '0' : '120px',
                    transitionDelay: navOpen ? link.delay : '0s',
                  }}
                  className="nav-item-wrapper"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
