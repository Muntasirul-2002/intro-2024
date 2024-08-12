import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
            delay: 3000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex flex-col overflow-hidden rounded-xl border border-none shadow-sm bg-[#121B2D] p-6 lg:px-7 lg:py-8 mb-20">
            <div className="flex-1">
              <blockquote className=" flex-1">
                <p className="font-[400] text-lg lg:text-xl italic text-white text-justify">
                  “Muntasirul Islam is a passionate MERN stack developer with
                  good skill and patience.He worked in my team for 6 months on
                  various client projects from scratch and proved his abilities.
                  I wish him the best in his future endeavors”
                </p>
              </blockquote>
            </div>
            <div className="mt-8 flex items-center">
              <img
                className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                src="/megaminds.jpg"
                alt="Person"
              />
              <div className="ml-4">
                <p className="text-base font-bold text-blue-500">Gouthami V.</p>
                <p className="mt-0.5 text-sm text-gray-500">R&D Manager, Megaminds IT Services</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col overflow-hidden rounded-xl border border-none shadow-sm bg-[#121B2D] p-6 lg:px-7 lg:py-8">
            <div className="flex-1">
              <blockquote className="mt-8 flex-1">
                <p className="font-[400] text-lg lg:text-xl italic text-white">
                  “Highly impressed with Muntasirul's dedication, ability to fix
                  complex issues with timely manner and quick learner. Shows
                  great potential and strong teamwork skills. Keep up the
                  excellent work! 👏”
                </p>
              </blockquote>
            </div>
            <div className="mt-8 flex items-center">
              <img
                className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                src="/mansur.jpg"
                alt="Person"
              />
              <div className="ml-4">
                <p className="text-base font-bold text-blue-500">
                  Mansur Haider
                </p>
                <p className="mt-0.5 text-sm text-gray-500">
                  Application Development Specialist, Accenture
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col overflow-hidden rounded-xl border border-none shadow-sm bg-[#121B2D] p-6 lg:px-7 lg:py-8">
            <div className="flex-1">
              <blockquote className="mt-8 flex-1">
                <p className="font-[400] text-lg lg:text-xl italic text-white">
                  “With exceptional proficiency and effectiveness,
                  he can manage intricate web applications as well as easily
                  navigable websites. I'm glad to work with you 🤝.”
                </p>
              </blockquote>
            </div>
            <div className="mt-8 flex items-center">
              <img
                className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                src="/megaminds.jpg"
                alt="Person"
              />
              <div className="ml-4">
                <p className="text-base font-bold text-blue-500">
                  Mahesh Kandlakatla
                </p>
                <p className="mt-0.5 text-sm text-gray-500">
                  CEO, Megaminds IT Services
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default Testimonials;
