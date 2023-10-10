import React, { useState } from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { RiTiktokFill } from 'react-icons/ri'

import './contact.scss'

function Contact() {
  const [socialMedia, setSocialMedia] = useState('number')
  const handleIconClick = (media) => {
    setSocialMedia(media)
  }
  return (
    <section className="contact">
      <div className="container">
        <div className="leftside">
          <h1 className="text">
            Хочете покращити ваш бізнес? Скоріше лишайте заявку і ми вас
            професійно проконсультуємо!
          </h1>

          <h2 className="c-text">Як з вами зв`язатися?</h2>
          <div className="icons-s">
            <CiFacebook
              size={30}
              className="icon1"
              onClick={() => handleIconClick('number')}
            />
            <FaInstagram
              size={30}
              className="icon2"
              onClick={() => handleIconClick('email')}
            />
            <AiFillLinkedin
              size={30}
              className="icon3"
              onClick={() => handleIconClick('whatsapp')}
            />
            <RiTiktokFill
              size={30}
              className="icon4"
              onClick={() => handleIconClick('telegram')}
            />
          </div>
        </div>

        <div className="rightside">
          <form id="form" className="contact-form">
            <p class="error" id="name-error"></p>
            <p class="error" id="number-error"></p>
            <p class="error" id="email-error"></p>
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
                  placeholder="Телеграм"
                  WhatsApp
                  required
                />
              </>
            )}
            {socialMedia === 'telegram' && (
              <>
                <label>Номер телефону або нікнейм у телеграм</label>
                <input
                  type="text"
                  name="user_email"
                  id="user_email"
                  placeholder="WhatsApp"
                  required
                />
              </>
            )}

            <button className="button" type="submit">
              Надіслати
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
