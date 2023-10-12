import React from 'react'
import './main.scss'

function Main() {
  return (
    <section id="main">
      <div className="container">
        <div className="main-title">
          <h1 className="main-text">
            Easy, quality, IT - winning <span>solutions</span> for your business
          </h1>
        </div>
        <div className="mains">
          <button
            className="btn"
            onClick={() => {
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Замовити зараз
          </button>
        </div>
      </div>
    </section>
  )
}

export default Main
