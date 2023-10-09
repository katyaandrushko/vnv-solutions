import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'
import './projects.scss'
// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'

function Projects() {
  return (
    <section className="projects">
      <h1 className="title">Наші проєкти</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="swip-content">
            <img src="./assets/iren.png" alt="" className="p-img" />
            <div className="desc">
              <h1 className="project-title">
                Lorem, ipsum dolor sit amet consectetid, non cumque dolore.
              </h1>
              <h2 className="project-subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                libero voluptatibus quibusdam saepe, officia fugiat in magnam
                adipisci
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="swip-content">
            <img src="./assets/project.jpg" className="p-img" alt="" />
            <div className="desc">
              <h1 className="project-title">
                Lorem, ipsum dolor sit amet consectetid, non cumque dolore.
              </h1>
              <h2 className="project-subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                libero voluptatibus quibusdam saepe, officia fugiat in magnam
                adipisci
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className="swip-content">
            <img src="./assets/learnitlive.png" alt="" className="p-img" />
            <div className="desc">
              <h1 className="project-title">
                Lorem, ipsum dolor sit amet consectetid, non cumque dolore.
              </h1>
              <h2 className="project-subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                libero voluptatibus quibusdam saepe, officia fugiat in magnam
                adipisci modi praesentium incidunt
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Projects
