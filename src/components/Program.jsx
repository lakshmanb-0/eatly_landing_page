import React, { useRef } from "react";
// react icons
import { FaCrown } from "react-icons/fa";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { GiChefToque } from "react-icons/gi";

// swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Program = () => {
  const swiperRef = useRef(null);

  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <main className="max_width py-10 px-4">
      <section className="flex items-center justify-between gap-4">
        <h1 className="text-purple_text font-bold space-x-3 text-xl flex items-center">
          <span className=" bg-icon_bg text-icon_text p-2 rounded-lg">
            <FaCrown />
          </span>
          <span className="text-3xl">Our Best Programs</span>
        </h1>
        <div className="space-x-3 flex items-center text-2xl lg:text-3xl py-3">
          <span
            className="rounded-full p-1 border border-light_purple text-purple_text cursor-pointer "
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <RiArrowLeftSLine />
          </span>
          <span
            className="rounded-full p-1 border border-light_purple text-purple_text  cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <RiArrowRightSLine />
          </span>
        </div>
      </section>
      {/* programs list  */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="flex gap-1 bg-purple_bg border-[0.9rem] border-white rounded-3xl my-3 shadow-[0_12px_60px_-15px_#c9b8ec]"
      >
        {array.map((item) => (
          <SwiperSlide
            className="group flex flex-col items-center py-5 px-6 hover:text-btn_text hover:bg-icon_text cursor-pointer select-none "
            key={item}
          >
            <span className="bg-icon_bg text-icon_text group-hover:bg-yellow_bg   p-2 rounded-lg text-2xl">
              <GiChefToque />
            </span>
            <h1 className="font-bold text-xl py-1 text-white group-hover:text-yellow_text">
              Healthy Recipe
            </h1>
            <p className="text-sm text-center">
              Healthier Recipes, from food & nutrition experts
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default Program;
