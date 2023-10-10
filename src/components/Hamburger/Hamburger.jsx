import React from 'react'
import './hamburger.scss'

function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger">
        <span className="burger burger1" />
        <span className="burger burger2" />
        <span className="burger burger3" />
      </div>
    </>
  )
}

export default Hamburger
