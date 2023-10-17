import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper/modules'
import './projects.scss'
import 'swiper/scss'
import 'swiper/scss/scrollbar'

const projectData = [
  {
    imageSrc: './assets/iren.png',
    title: 'Сучасний та стильний дизайн, мобільна сумісність',
    subtitle:
      'Сайти виглядають сучасно і привабливо, привертаючи увагу відвідувачів. Є оптимізація для мобільних пристроїв, що робить його зручним',
  },
  {
    imageSrc: './assets/project.jpg',
    title: 'Підтримка і обслуговування сайту',
    subtitle:
      'Після запуску сайту ми завжди забезпечуємо постійну підтримку і обслуговування сайту для безперебійної роботи та оновлення контенту.',
  },
  {
    videoSrc: './assets/video.mov',
    title: 'Хочете покращити конверсію?',
    subtitle: 'Знайдемо найкраще рішення для вашого бізнесу!',
  },
]

function Projects() {
  return (
    <section id="projects">
      <h1 className="title">Наші проєкти</h1>

      <Swiper
        modules={[Scrollbar]}
        spaceBetween={50}
        slidesPerView="auto"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        loopedSlides={1}
        speed={700}
      >
        {projectData.map((project, id) => (
          <SwiperSlide key={id}>
            <div className="swip-content">
              {project.videoSrc ? (
                <video
                  id="Video Wrapper"
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  className="video-sl"
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
              ) : (
                <img src={project.imageSrc} alt="" className="p-img" />
              )}
              <div className="desc">
                <h1 className="project-title">{project.title}</h1>
                <h2 className="project-subtitle">{project.subtitle}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Projects
