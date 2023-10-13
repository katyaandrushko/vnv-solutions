import React from 'react'
import './button.scss'

function Button({ buttonText }) {
  return (
    <div className="button">
      <button
        className="btn"
        onClick={() => {
          document
            .getElementById('contact')
            .scrollIntoView({ behavior: 'smooth' })
        }}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default Button
