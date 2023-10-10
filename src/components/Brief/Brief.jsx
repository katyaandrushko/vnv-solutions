import React from 'react'
import './brief.scss'
import Contact from '../Contact/Contact'

function Brief() {
  return (
    <section className="brief">
      <div className="left">
        <div className="desc">
          <h1 className="b-title">
            Для того, щоб отримати якісну консультацію, заповніть, будь ласка,
            коротеньку форму!
          </h1>
          <h2 className="b-subtitle">
            Це дасть нам змогу дізнатися всі ваші проблеми та якомога швидше
            допомогти вирішити їх!
          </h2>
          <h3 className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            modi optio facere doloribus magni eligendi sunt quis perferendis
            deserunt totam qui, perspiciatis, doloremque rerum blanditiis in ex
            recusandae sapiente veritatis.
          </h3>
        </div>
        <div className="b-btn">
          <button className="button">Заповнити зараз</button>
        </div>
      </div>

      <div className="right">
        <img src="./assets/email.png" alt="" className="email" />
      </div>
    </section>
  )
}

export default Brief
