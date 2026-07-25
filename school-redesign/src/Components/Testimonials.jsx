import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    quote: 'The counselling support and small class sizes gave our daughter the confidence to speak up in class for the first time.',
    name: 'Parent, Grade 6',
  },
  {
    quote: 'Teachers here actually notice when a student is struggling, and step in before it becomes a bigger problem.',
    name: 'Parent, Grade 9',
  },
  {
    quote: 'The sports program pushed me to try things I never thought I would be good at.',
    name: 'Student, Grade 11',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs uppercase tracking-widest text-brasslight mb-4">
          What Families Say
        </p>
        <h2 className="font-display text-4xl leading-tight max-w-xl mb-16">
          Trusted by parents, remembered by students.
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper pb-14"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="h-full">
                <p className="text-lg font-display italic leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-xs uppercase tracking-widest text-paper/60">
                  {t.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <style>{`
        .testimonials-swiper {
          position: relative;
        }
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #d4af7a;
          width: 36px;
          height: 36px;
        }
        .testimonials-swiper .swiper-button-next::after,
        .testimonials-swiper .swiper-button-prev::after {
          font-size: 20px;
        }
        .testimonials-swiper .swiper-pagination {
          position: relative;
          margin-top: 20px;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: #d4af7a;
        }
      `}</style>
    </section>
  )
}