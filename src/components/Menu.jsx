import React, { useRef, useState } from "react";

// react icons
import { TbChecklist, TbMessageDots } from "react-icons/tb";
import { MdFreeBreakfast } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";

// swiper
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const Menu = () => {
  const swiperRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const data = [
    {
      id: 1,
      icon: MdFreeBreakfast,
      title: "Breakfast Recipes",
    },
    {
      id: 2,
      icon: TbMessageDots,
      title: "Low-Calorie Recipes",
    },
    {
      id: 3,
      icon: BsFillCalendarCheckFill,
      title: "Holiday Recipes",
    },
    {
      id: 4,
      icon: IoIosLock,
      title: "Restriction Recipes",
    },
    {
      id: 5,
      icon: MdFreeBreakfast,
      title: "Breakfast Recipes",
    },
  ];
  const array = [1, 2, 3, 4, 5];

  return (
    <main className="px-4 py-10 max_width">
      {/* header  */}
      <header className="flex justify-between gap-4">
        <div>
          <h1 className="text-purple_text font-bold space-x-3 text-xl flex items-center">
            <span className="bg-icon_bg text-icon_text p-1 text-2xl rounded-lg">
              <TbChecklist />
            </span>
            <span className="text-3xl font-bold">Try Our Healthy Menu</span>
          </h1>
          <p className="py-3 max-w-[30rem]">
            We provide a variety of healthy recipes that have been curated by
            our best nutritionists for you
          </p>
        </div>
        {/* arrow div  */}
      </header>

      {/* menu section  */}
      <article className="md:grid md:grid-cols-2 gap-4 items-center">
        {/* menu navbar  */}
        <section className="flex md:flex-col gap-4 md:h-[20rem] md:w-[21rem] md:overflow-y-scroll w-full overflow-scroll md:overflow-x-hidden py-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 px-4 py-3 bg-[#f9f1fe] group hover:bg-white hover:shadow-[0_15px_100px_-15px_#c9b8ec] rounded-2xl cursor-pointer w-[18rem]"
            >
              <span className="border-[3px] bg-purple_bg border-light_purple rounded-xl text-white group-hover:bg-yellow_bg text-xl p-2 ">
                <item.icon />
              </span>
              <h1 className="text-xl font-bold whitespace-nowrap text-purple_text group-hover:text-purple_bg ">
                {item.title}
              </h1>
            </div>
          ))}
        </section>
        <section className="w-full py-3">
          {/* menu lists  */}
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              500: {
                slidesPerView: 2,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={() => {
              setDisable("");
              swiperRef.current?.realIndex === 0 && setDisable(true);
            }}
            className="w-full"
          >
            {array.map((item) => (
              <SwiperSlide key={item}>
                <div className="border-[1rem] border-[#f9f1fe] rounded-t-full rounded-b-[100rem] p-4 text-center">
                  <div className="bg-light_purple rounded-t-full rounded-b-[100rem]">
                    <img
                      src="/banner_header.png"
                      alt="image_load"
                      className=""
                    />
                  </div>
                  <h1 className="font-bold text-xl text-purple_text py-3">
                    Red Onions With Chopped Cabbage
                  </h1>
                  <button className="py-1">Try Now</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="space-x-3 flex items-center text-xl sm:text-3xl py-3 ml-auto w-fit">
            <span
              className={`rounded-full p-1 border border-light_purple text-purple_text cursor-pointer ${
                disable ? "pointer-events-none text-purple_text/50 " : ""
              } `}
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <RiArrowLeftSLine />
            </span>
            <span
              className="rounded-full p-1 border border-light_purple text-purple_text cursor-pointer"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <RiArrowRightSLine />
            </span>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Menu;
