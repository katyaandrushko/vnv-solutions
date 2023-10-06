import { CiFacebook } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { RiTiktokFill } from 'react-icons/ri'
import { FaTelegram } from 'react-icons/fa'
import './social.scss'

function Social() {
  return (
    <section className="social">
      <div className="icons-s">
        <CiFacebook size={50} className="icon1" />
        <FaInstagram size={50} className="icon2" />
        <AiFillLinkedin size={50} className="icon3" />
        <RiTiktokFill size={50} className="icon4" />
        <FaTelegram size={50} className="icon5" />
      </div>
    </section>
  )
}

export default Social
