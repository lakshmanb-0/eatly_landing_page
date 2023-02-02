import React, { useRef, useState } from "react";
import { HiMailOpen } from "react-icons/hi";

// swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";

const AboutUs = () => {
  const swiperRef = useRef(null);
  const [disable, setDisable] = useState("prev");

  const data = [
    {
      id: 1,
      name: "Rara Sanchez",
      icon: AiFillMessage,
      job: "Freelancer",
      overview:
        "Eatly really helps me to maintain food intake and is perfect for those of you who want to diet or just make the body more healthy. In addition, Eatly helped me to create a menu that is suitable for the family",
    },
    {
      id: 2,
      icon: AiFillMessage,
      name: "Rara Sanchez",
      job: "Freelancer",
      overview:
        "Eatly really helps me to maintain food intake and is perfect for those of you who want to diet or just make the body more healthy. In addition, Eatly helped me to create a menu that is suitable for the family",
    },
  ];

  return (
    <main className="max_width px-4 py-10 md:grid grid-cols-2 items-center">
      {/* image section  */}
      <section className="img_container">
        <div className="scale-110 md:scale-[1.4] lg:scale-[1.3] absolute bottom-[0.2rem] md:bottom-[4.4rem] lg:bottom-[4.1rem] ">
          <img src="/about_banner.png" alt="Banner_header" />
        </div>
      </section>

      {/* text section  */}
      <section>
        <div className="px-4 pt-10 md:pt-0">
          <h1 className="text-purple_text font-bold space-x-3 text-xl flex items-center">
            <span className="bg-icon_bg text-yellow_text p-2 rounded-lg border-[3px] border-light_purple text-3xl">
              <HiMailOpen />
            </span>
            <span className="text-4xl font-bold">Testimonials About Us</span>
          </h1>
          <p className="py-3 max-w-[30rem]">
            In the smallest case we always give your best, find out what other
            users have to say about us
          </p>
        </div>

        {/* swiper  */}
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => {
            setDisable("");
            swiperRef.current?.realIndex === 0 && setDisable("prev");
            swiperRef.current?.realIndex === 1 && setDisable("nxt");
          }}
          className="relative border-[1rem] border-white shadow-[0_12px_60px_-15px_#c9b8ec] rounded-3xl my-4 "
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className=" bg-[#f9f1fe] px-4 py-6">
              <div className="w-fit text-4xl z-50 bg-purple_bg text-white p-2 border-[3px] border-white rounded-lg">
                <item.icon />
              </div>
              <p className="py-4">"{item.overview}"</p>
              <h1 className="font-bold text-2xl text-purple_text">
                {item.name}
              </h1>
              <p className="">{item.job}</p>
            </SwiperSlide>
          ))}

          {/* arrow div  */}
          <div className="space-x-3 flex items-center text-2xl lg:text-3xl py-3 absolute bottom-4 right-2 z-50">
            <span
              className={`rounded-full p-1 border border-light_purple text-purple_text cursor-pointer ${
                disable === "prev"
                  ? "pointer-events-none text-purple_text/50  "
                  : ""
              } `}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <RiArrowLeftSLine />
            </span>
            <span
              className={`rounded-full p-1 border border-light_purple text-purple_text cursor-pointer ${
                disable === "nxt"
                  ? "pointer-events-none text-purple_text/50  "
                  : ""
              } `}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <RiArrowRightSLine />
            </span>
          </div>
        </Swiper>
      </section>
    </main>
  );
};

export default AboutUs;
