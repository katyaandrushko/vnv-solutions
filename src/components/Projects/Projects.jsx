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
    <section id="projects">
      <h1 className="title">Наші проєкти</h1>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView="auto"
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        loopedSlides={1}
        speed={700}
      >
        <SwiperSlide>
          <div className="swip-content">
            <img src="./assets/iren.png" alt="" className="p-img" />
            <div className="desc">
              <h1 className="project-title">
                Сучасний та стильний дизайн, мобільна сумісність
              </h1>
              <h2 className="project-subtitle">
                Сайти виглядають сучасно і привабливо, привертаючи увагу
                відвідувачів. Є оптимізація для мобільних пристроїв, що робить
                його зручним
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="img">
            <img src="./assets/project.jpg" className="p-img" alt="" />
            <div className="desc">
              <div className="desc">
                <h1 className="project-title">
                  Підтримка і обслуговування сайту
                </h1>
                <h2 className="project-subtitle">
                  Після запуску сайту ми завжди забезпечуємо постійну підтримку
                  і обслуговування сайту для безперебійної роботи та оновлення
                  контенту.
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiiper">
          <div class="slide-video" data-slide-type="vdo">
            <video
              id="Video Wrapper "
              autoplay="true"
              loop="true"
              muted=""
              playsinline=""
              className="video-sl"
            >
              <source src="./assets/video.mov" type="video/mp4" />
            </video>
            <div className="desc-video">
              <h1 className="project-title">Хочете покращити конверсію?</h1>
              <h2 className="project-subtitle">
                Знайдемо найкраще рішення для вашого бізнесу!
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Projects
