import React from 'react'
import './whywe.scss'
import { motion } from 'framer-motion'
import {
  BsClipboard2Check,
  BsChatSquareText,
  BsCheckCircle,
  BsCheck,
} from 'react-icons/bs'

function WhyWe() {
  return (
    <section id="whywe">
      <h1 className="title">// ЧОМУ ОБИРАЮТЬ НАС</h1>
      <div className="maincontent">
        <motion.div
          className="project-viewer"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-15%' }}
        >
          <div className="why-wrapper">
            <div className="why-header">
              <h1 className="titlewhy">Ефективно</h1>
            </div>
            <div className="why-detail">
              <p className="p-why">
                Наші рішення завжди орієнтовані на досягнення максимальної
                продуктивності для вашого бізнесу. Ми зосереджені на досягненні
                найкращих результатів у найкоротший термін.
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">
                <BsCheckCircle />
              </span>
            </div>
          </div>{' '}
        </motion.div>
        <motion.div
          className="project-viewer"
          initial={{ x: 64, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-15%' }}
        >
          <div className="why-wrapper">
            <div className="why-header">
              <h1 className="titlewhy">Якісно</h1>
            </div>
            <div className="why-detail">
              <p className="p-why">
                Наша команда завжди ставить якість на перше місце в усьому, що
                ми робимо. Ви можете бути впевнені, що наші послуги і вироби
                завжди відповідають найвищим стандартам якості.
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">
                {' '}
                <BsCheckCircle />
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="project-viewer"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-15%' }}
        >
          <div className="why-wrapper">
            <div className="why-header">
              <h1 className="titlewhy">Інноваційно</h1>
            </div>
            <div className="why-detail">
              <p className="p-why">
                Наша компанія завжди прагне застосовувати нові технології та
                підходи у всіх наших проектах. Ми впроваджуємо новаторські ідеї,
                щоб забезпечити вашій компанії конкурентну перевагу.
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">
                {' '}
                <BsCheckCircle />
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="project-viewer"
          initial={{ x: 64, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-15%' }}
        >
          <div className="why-wrapper">
            <div className="why-header">
              <h1 className="titlewhy">Швидко</h1>
            </div>
            <div className="why-detail">
              <p className="p-why">
                Ми розуміємо, що час - це важливий ресурс, і завжди працюємо
                швидко та ефективно. Ми робимо все можливе, щоб забезпечити вам
                швидкий результат без втрати якості. Наші проекти виконуються
                вчасно, без зайвих затримок.
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">
                {' '}
                <BsCheckCircle />
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="project-viewer"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-15%' }}
        >
          <div className="why-wrapper">
            <div className="why-header">
              <h1 className="titlewhy">Професійно</h1>
            </div>
            <div className="why-detail">
              <p className="p-why">
                Наша команда складається з кваліфікованих та досвідчених
                фахівців. Ми завжди ведемо себе професійно і дотримуємось
                найвищих етичних стандартів. Ваш успіх - наша професійна мета, і
                ми робимо все, щоб її досягти.
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">
                {' '}
                <BsCheckCircle />
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="project-viewer"
          initial={{ x: 64, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-15%' }}
        >
          <div className="why-wrapper">
            <div className="why-header">
              <h1 className="titlewhy">Надійно</h1>
            </div>
            <div className="why-detail">
              <p className="p-why">
                Ви можете покладатися на нас, оскільки ми завжди виконуємо
                обіцянки. Наша надійність - це ваша спокійність, оскільки ми
                завжди готові підтримати вас у будь-якій ситуації. Ваша довіра -
                найцінніша перевага
              </p>
            </div>
            <div className="emoji">
              <span className="emogi">
                {' '}
                <BsCheckCircle />
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="button">
        <button
          className="btn"
          onClick={() => {
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Замовити
        </button>
      </div>
    </section>
  )
}

export default WhyWe
