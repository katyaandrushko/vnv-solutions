import React from 'react'
import { motion } from 'framer-motion'
import { BsCheckCircle } from 'react-icons/bs'
import './whywe.scss'
import Button from '../Button/Button'

const reasons = [
  {
    id: 1,
    title: 'Ефективно',
    description:
      'Наші рішення завжди орієнтовані на досягнення максимальної продуктивності для вашого бізнесу. Ми зосереджені на досягненні найкращих результатів у найкоротший термін.',
  },
  {
    id: 2,
    title: 'Якісно',
    description:
      'Наша команда завжди ставить якість на перше місце в усьому, що ми робимо. Ви можете бути впевнені, що наші послуги і вироби завжди відповідають найвищим стандартам якості.',
  },
  {
    id: 3,
    title: 'Інноваційно',
    description:
      'Наша компанія завжди прагне застосовувати нові технології та підходи у всіх наших проектах. Ми впроваджуємо новаторські ідеї, щоб забезпечити вашій компанії конкурентну перевагу.',
  },
  {
    id: 4,
    title: 'Швидко',
    description:
      'Ми розуміємо, що час - це важливий ресурс, і завжди працюємо швидко та ефективно. Ми робимо все можливе, щоб забезпечити вам швидкий результат без втрати якості. Наші проекти виконуються вчасно, без зайвих затримок.',
  },
  {
    id: 5,
    title: 'Професійно',
    description:
      'Наша команда складається з кваліфікованих та досвідчених фахівців. Ми завжди ведемо себе професійно і дотримуємось найвищих етичних стандартів. Ваш успіх - наша професійна мета, і ми робимо все, щоб її досягти.',
  },
  {
    id: 6,
    title: 'Надійно',
    description:
      'Ви можете покладатися на нас, оскільки ми завжди виконуємо обіцянки. Наша надійність - це ваша спокійність, оскільки ми завжди готові підтримати вас у будь-якій ситуації. Ваша довіра - найцінніша перевага.',
  },
]

function WhyWe() {
  return (
    <section id="whywe">
      <h1 className="title">// ЧОМУ ОБИРАЮТЬ НАС</h1>
      <div className="maincontent">
        {reasons.map((reason, id) => (
          <motion.div
            key={reason.id}
            initial={{ x: id % 2 === 0 ? -100 : 64, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-15%' }}
          >
            <div className="why-wrapper">
              <div className="why-header">
                <h1 className="titlewhy">{reason.title}</h1>
              </div>
              <div className="why-detail">
                <p className="p-why">{reason.description}</p>
              </div>
              <div className="emoji">
                <span>
                  <BsCheckCircle />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Button buttonText={'Замовити'} />
    </section>
  )
}

export default WhyWe
