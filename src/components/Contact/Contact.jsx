import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { RiTiktokFill } from 'react-icons/ri'
import { FaTelegram } from 'react-icons/fa'
import './contact.scss'

function Contact() {
  return (
    <section className="container">
      <div className="contact">
        <div className="leftside">
          <h1>Як з вами зв`язатися?</h1>
          <div className="icons-s">
            <CiFacebook size={30} className="icon1" />
            <FaInstagram size={30} className="icon2" />
            <AiFillLinkedin size={30} className="icon3" />
            <RiTiktokFill size={30} className="icon4" />
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
            <label>Номер телефону</label>

            <input
              type="number"
              name="user_number"
              id="user_number"
              placeholder="Номер телефону"
              required
            />
            <label> Електронна пошта</label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              placeholder="Електронна пошта"
              required
            />
            <label>Номер телефону у WhatsApp</label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              placeholder="Телеграм"
              WhatsApp
              required
            />
            <label>Номер телефону або нікнейм у телеграм</label>
            <input
              type="text"
              name="user_email"
              id="user_email"
              placeholder="WhatsApp"
              required
            />

            <button className="btn c-btn" type="submit">
              Надіслати
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
