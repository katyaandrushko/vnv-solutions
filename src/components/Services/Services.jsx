import React, { useState } from 'react'
import './services.scss'
import ServiceItem from './Serviceitem'

function Services() {
  const sections = [
    { id: 'landing', label: 'Landing page' },
    { id: 'corporat', label: 'Багатосторінковий сайт' },
    { id: 'shop', label: 'Інтернет магазин' },
    { id: 'audit', label: 'Аудит сайту' },
    { id: 'consultation', label: 'Індивідуальна консультація' },
  ]
  const serviceData = [
    {
      id: 'landing',
      title:
        'Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація',
      description:
        'Завдяки зручності такого формату, можна легко подати користувачу всю важливу інформацію та швидко підвести його до покупки',
      features: [
        'Ви хочете презентувати власний інфо-продукт, послугу, книгу і тд.',
        'Бажаєте вирішити конкретні проблеми або встановити стратегічні цілі',
        'Бажаєте зрозуміти, як покращити конверсію та залучення клієнтів',
      ],
    },

    {
      id: 'corporat',

      title:
        'Ідеальний варіант для бізнесу, якому потрібна коротка, але змістовна, презентація',
      description:
        'Завдяки зручності такого формату, можна легко подати користувачу всю важливу інформацію та швидко підвести його до покупки',
      features: [
        'Ви хочете створити повноцінний інтернет-портал для вашого бізнесу',
        'У вас є багато продуктів або послуг для представлення, але немає клієнтів',
        'Вам потрібен простір для росту та розвитку вашого бізнесу в онлайні',
      ],
    },

    {
      id: 'shop',
      title: 'Інтернет-магазин',
      description:
        'Ідеальний варіант для продажу товарів або послуг в онлайні. Ми допоможемо вам створити потужний інтернет-магазин з усіма необхідними функціями для продажу та управління інвентарем.',
      features: [
        'Ви хочете розпочати продаж товарів або послуг в онлайн мережі',
        'Бажаєте великий вибір функцій для управління продажами і шукаєте систему',
        'Потрібен інтегрований платіжний шлюз та управління інвентарем',
      ],
    },
    {
      id: 'audit',
      title: 'Аудит сайту',
      description:
        'Аудит сайту допоможе вам зрозуміти, як можна покращити ефективність та продуктивність вашого існуючого веб-сайту. Ми проаналізуємо його та запропонуємо оптимізаційні заходи.',
      features: [
        'Ви хочете покращити роботу свого існуючого веб-сайту, але не знаєте як',
        'Потрібен аналіз інформаційної структури та функціональності вашого сайту',
        'Бажаєте зрозуміти, як покращити конверсію та залучення клієнтів',
      ],
    },
    {
      id: 'consultation',
      title: 'Індивідуальна консультація',
      description:
        'Наші консультанти готові надати вам індивідуальну консультацію з різних аспектів веб-розробки та маркетингу. Ми допоможемо вам зрозуміти ваші потреби та розробити оптимальну стратегію.',
      features: [
        'Ви хочете отримати індивідуальну консультацію в області веб-розробки ',
        'Бажаєте вирішити конкретні проблеми або встановити стратегічні цілі',
        'Вам потрібен простір для росту та розвитку вашого бізнесу в онлайні',
      ],
    },
  ]
  const [activeSection, setActiveSection] = useState('landing')
  const handleButtonClick = (sectionId) => {
    setActiveSection(sectionId)
  }
  return (
    <section id="services">
      <div className="container">
        <h1 className="services-title">Послуги</h1>
        <div className="services-screen">
          <div className="services-top">
            <div class="top-circles">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div class="services_top_btns">
              {sections.map((section) => (
                <span
                  key={sections.id}
                  className={`services_top_btn ${
                    activeSection === section.id ? 'active' : ''
                  }`}
                  onClick={() => handleButtonClick(section.id)}
                >
                  {section.label}
                </span>
              ))}
            </div>
          </div>
          <div className="services-main">
            {serviceData.map((service) => (
              <div
                key={service.id}
                className={`services-item-${service.id} ${
                  activeSection === service.id ? 'active' : ''
                }`}
                style={{ width: activeSection === service.id ? '100%' : '0%' }}
              >
                {activeSection === service.id && (
                  <ServiceItem
                    title={service.title}
                    description={service.description}
                    features={service.features}
                  />
                )}
              </div>
            ))}
            <div className="rightside">
              <img src="./assets/pict.png" alt="" className="services-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
