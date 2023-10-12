import React from 'react'
import './leadmagnet.scss'
import { useState } from 'react'

function LeadMagnet() {
  const [showWidget, setShowWidget] = useState(true)

  const closeWidget = () => {
    setTimeout(() => {
      setShowWidget(false)
    }, 300)
  }

  return (
    showWidget && (
      <div className={`leadmagnet set`}>
        <a href="#contact">
          <span>Отримати безкоштовний чеклист!</span>
        </a>

        <button onClick={closeWidget} className="close-button">
          X
        </button>
      </div>
    )
  )
}

export default LeadMagnet
