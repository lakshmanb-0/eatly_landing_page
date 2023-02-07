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
  const [dish, SetDish] = useState("Breakfast Recipes");
  const data = [
    {
      id: 1,
      icon: MdFreeBreakfast,
      title: "Breakfast Recipes",
      products: [
        {
          image: "/breakfast/image1.png",
          heading: "Red Onions With Chopped Cabbage",
        },
        {
          image: "/breakfast/image2.png",
          heading: "brown Onions With Chopped Cabbage",
        },
        {
          image: "/breakfast/image3.png",
          heading: "yellow Onions With Chopped Cabbage",
        },
      ],
    },
    {
      id: 2,
      icon: TbMessageDots,
      title: "Low-Calorie Recipes",
      products: [
        {
          image: "/banner_header",
          heading: "Red Onions With Chopped Cabbage",
        },
        {
          image: "/banner_header",
          heading: "Red Onions With Chopped Cabbage",
        },
      ],
    },
    {
      id: 3,
      icon: BsFillCalendarCheckFill,
      title: "Holiday Recipes",
      image: "/banner_header",
      heading: "Red Onions With Chopped Cabbage",
    },
    {
      id: 4,
      icon: IoIosLock,
      title: "Restriction Recipes",
      image: "/banner_header",
      heading: "Red Onions With Chopped Cabbage",
    },
    {
      id: 5,
      icon: MdFreeBreakfast,
      title: "Breakfast Recipes",
    },
  ];
  const handleData = (event) => {
    data.map((item) => {
      item.title === event && SetDish(event);
    });
  };

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
      <article className="md:grid md:grid-cols-2 xl:grid-cols-3 gap-4 items-center">
        {/* menu navbar  */}
        <section className="flex md:flex-col gap-4 md:h-[20rem] xl:w-[21rem] md:overflow-y-scroll w-full overflow-scroll md:overflow-x-hidden py-3 scrollBar">
          {data.map((item) => (
            <div
              key={item.id}
              className={`flex items-center space-x-4 px-4 py-3 bg-[#f9f1fe] group hover:bg-white hover:shadow-[0_15px_100px_-15px_#c9b8ec] rounded-2xl cursor-pointer w-[18rem] ${
                item.title == dish
                  ? "bg-white shadow-[0_15px_100px_-15px_#c9b8ec]"
                  : ""
              }`}
              onClick={() => handleData(item.title)}
            >
              <span
                className={`border-[3px] bg-purple_bg border-light_purple rounded-xl text-white group-hover:bg-yellow_bg text-sm sm:text-xl p-1 sm:p-2 ${
                  item.title == dish ? "bg-yellow_bg" : ""
                }`}
              >
                <item.icon />
              </span>
              <h1
                className={`text-sm sm:text-xl font-bold whitespace-nowrap text-purple_text group-hover:text-purple_bg ${
                  item.title == dish ? "text-purple_bg" : ""
                }`}
              >
                {item.title}
              </h1>
            </div>
          ))}
        </section>
        <section className="w-full py-3 xl:col-span-2">
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
            {data.map(
              (item) =>
                item.title === dish &&
                item.products?.map((prod) => (
                  <SwiperSlide key={prod.heading}>
                    <div className="border-[1rem] border-[#f9f1fe] rounded-t-full rounded-b-[100rem] p-4 text-center xl:w-[20rem]">
                      <div className="bg-light_purple rounded-t-full rounded-b-[100rem] h-[10rem] sm:h-[15rem] xl:h-[15rem]">
                        <img src={prod.image} alt="image_load" />
                      </div>
                      <h1 className="font-bold text-xl text-purple_text py-3">
                        {prod.heading}
                      </h1>
                      <button className="py-1">Try Now</button>
                    </div>
                  </SwiperSlide>
                ))
            )}
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
