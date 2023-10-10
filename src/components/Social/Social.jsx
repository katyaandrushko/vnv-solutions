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
        <CiFacebook size={50} className="icon" />
        <FaInstagram size={50} className="icon" />
        <AiFillLinkedin size={50} className="icon" />
        <RiTiktokFill size={50} className="icon" />
        <FaTelegram size={50} className="icon" />
      </div>
    </section>
  )
}

export default Social
