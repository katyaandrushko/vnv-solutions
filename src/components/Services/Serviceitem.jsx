import { AiOutlineFileDone } from 'react-icons/ai'
import './services.scss'

function ServiceItem({ title, description, features, img }) {
  return (
    <>
      <div className="services__main--item__text">
        <p className="services__main--item__text-title">{title}</p>
        <p className="services__main--item__text-desc">{description}</p>
        <p className="services__main--item__text-pre-title">
          Обирайте цей тип сайту, якщо:
        </p>
        <ul className="services__main--item__text_text-list">
          {features.map((feature, index) => (
            <li key={index} className="services-main_list">
              <AiOutlineFileDone size={40} />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
        <button
          className="btn"
          onClick={() => {
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Детальніше
        </button>
        <div className="left">{img}</div>
      </div>
    </>
  )
}

export default ServiceItem
