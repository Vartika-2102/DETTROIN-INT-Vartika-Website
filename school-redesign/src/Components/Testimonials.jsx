import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    quote:
      'The counselling support and small class sizes gave our daughter the confidence to speak up in class for the first time.',
    name: 'Parent, Grade 6',
    image: 'https://i.pravatar.cc/150?img=32',
  },
  {
    quote:
      'Teachers here actually notice when a student is struggling, and step in before it becomes a bigger problem.',
    name: 'Parent, Grade 9',
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    quote:
      'The sports program pushed me to try things I never thought I would be good at.',
    name: 'Student, Grade 11',
    image: 'https://i.pravatar.cc/150?img=15',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-gradient-to-b from-[#173126] to-[#0f241d] text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-brasslight text-sm mb-4">
            Testimonials
          </p>

          <h2 className="font-display text-4xl md:text-5xl mb-4">
            What Our Families Say
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            Parents and students share their experiences of learning,
            growth and success at Krishna International School.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14 testimonialsSwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-xl h-full transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-green-700"
                  />

                  <div>
                    <h4 className="font-semibold">{item.name}</h4>

                    <div className="text-yellow-500 text-sm">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>

                <p className="italic leading-8 text-gray-600">
                  "{item.quote}"
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <style>{`
        .testimonialsSwiper .swiper-button-next,
        .testimonialsSwiper .swiper-button-prev{
            color:#d4af7a;
        }

        .testimonialsSwiper .swiper-pagination-bullet{
            background:#ffffff66;
            opacity:1;
        }

        .testimonialsSwiper .swiper-pagination-bullet-active{
            background:#d4af7a;
        }
      `}</style>
    </section>
  )
}