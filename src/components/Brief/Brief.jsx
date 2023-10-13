import React from 'react'
import './brief.scss'

function Brief() {
  return (
    <section className="brief">
      <div className="right">
        <img src="./assets/pngwing.png" alt="" className="wing" />
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHdiAuLb7U5vG9ABsxZrEzQ8m1DMLCz_CUChVl6kgK4cSx2A/viewform?usp=sf_link">
          <button className="btn">Заповнити зараз</button>
        </a>
      </div>
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
      </div>
    </section>
  )
}

export default Brief
