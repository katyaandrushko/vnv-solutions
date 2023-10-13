import React, { useState, useEffect } from 'react'
import './leadmagnet.scss'

function LeadMagnet() {
  const [showWidget, setShowWidget] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const closeWidget = () => {
    setShowWidget(false)
  }

  return (
    showWidget && (
      <div className="leadmagnet">
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
