import { CiFacebook } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'
import { RiTiktokFill } from 'react-icons/ri'
import { FaTelegram } from 'react-icons/fa'
import './social.scss'

function Social() {
  return (
    <section id="social">
      <div className="icons-s">
        <a href="https://www.facebook.com/profile.php?id=100088433736254">
          <CiFacebook size={50} className="icon" />
        </a>
        <a href="https://instagram.com/vnv_solutions?igshid=MWI4MTIyMDE=">
          <FaInstagram size={50} className="icon" />
        </a>
        <a href="https://www.linkedin.com/company/vnv-tech/</div>">
          <AiFillLinkedin size={50} className="icon" />
        </a>
        <a href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1">
          <RiTiktokFill size={50} className="icon" />
        </a>
        <a href="https://t.me/vnv_solutions">
          <FaTelegram size={50} className="icon" />
        </a>
      </div>
    </section>
  )
}

export default Social
