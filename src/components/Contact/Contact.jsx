import React, { useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillPhone } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import { BsWhatsapp } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'

import './contact.scss'

function Contact() {
  const [socialMedia, setSocialMedia] = useState('number')
  const handleIconClick = (media) => {
    setSocialMedia(media)
  }
  return (
    <section id="contact">
      <div className="container">
        <div className="leftside">
          <div className="desc">
            <h1 className="contact-title">Як з вами зв'язатися?</h1>
            <h2 className="text">
              Хочете покращити ваш бізнес? Скоріше лишайте заявку і ми вас
              професійно проконсультуємо + отримайте безкоштовний чеклист в
              подарунок! 🙌
            </h2>
            <div className="typewr">
              <Typewriter
                options={{
                  strings: ['Знижка 10% на перше замовлення'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
        <div className="rightside">
          <div className="rect">
            <div className="type">
              <div className="mess">
                Обирайте зручний месенджер:
                <div className="icons-s">
                  <div className="social-btn">
                    <AiFillPhone
                      size={30}
                      className="icon"
                      onClick={() => handleIconClick('number')}
                    />
                  </div>
                  <div className="social-btn">
                    <CgMail
                      size={30}
                      className="icon"
                      onClick={() => handleIconClick('email')}
                    />
                  </div>
                  <div className="social-btn">
                    <BsWhatsapp
                      size={30}
                      className="icon"
                      onClick={() => handleIconClick('whatsapp')}
                    />
                  </div>
                  <div className="social-btn">
                    <FaTelegramPlane
                      size={30}
                      className="icon"
                      onClick={() => handleIconClick('telegram')}
                    />
                  </div>
                </div>
              </div>
              <form id="form" className="contact-form">
                <label>Ваше ім`я </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  placeholder="Ім`я та прізвище"
                  required
                />

                {socialMedia === 'number' && (
                  <>
                    <label>Номер телефону</label>
                    <input
                      type="number"
                      name="user_number"
                      id="user_number"
                      placeholder="Номер телефону"
                      required
                    />
                  </>
                )}
                {socialMedia === 'email' && (
                  <>
                    <label> Електронна пошта</label>
                    <input
                      type="text"
                      name="user_email"
                      id="user_email"
                      placeholder="Електронна пошта"
                      required
                    />
                  </>
                )}

                {socialMedia === 'whatsapp' && (
                  <>
                    <label>Номер телефону у WhatsApp</label>
                    <input
                      type="text"
                      name="user_email"
                      id="user_email"
                      placeholder="WhatsApp"
                      required
                    />
                  </>
                )}
                {socialMedia === 'telegram' && (
                  <>
                    <label>Номер телефону/нікнейм у телеграм</label>
                    <input
                      type="text"
                      name="user_email"
                      id="user_email"
                      placeholder="Телеграм"
                      required
                    />
                  </>
                )}
                <button className="btn-contact">Надіслати</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
