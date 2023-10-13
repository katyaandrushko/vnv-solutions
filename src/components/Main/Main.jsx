import React from 'react'
import './main.scss'
import Button from '../Button/Button'

function Main() {
  return (
    <section id="main">
      <div className="container">
        <div className="main-title">
          <h1 className="main-text">
            Easy, quality, IT - winning <span>solutions</span> for your business
          </h1>
        </div>
        <Button buttonText={'Замовити зараз'} />
      </div>
    </section>
  )
}

export default Main
