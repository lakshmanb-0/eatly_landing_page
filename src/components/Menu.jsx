import React from "react";
import { TbChecklist, TbMessageDots } from "react-icons/tb";
import { MdFreeBreakfast } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";

const Menu = () => {
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
  return (
    <main className="px-4 py-10 max_width">
      {/* header  */}
      <header>
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
      </header>

      {/* menu section  */}
      <article className="grid md:grid-cols-2">
        {/* menu navbar  */}
        <section className="flex md:flex-col gap-4 md:h-[20rem] md:w-[25rem] md:overflow-y-scroll w-full overflow-scroll md:overflow-x-hidden py-3">
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

        {/* menu lists  */}
        <section></section>
      </article>
    </main>
  );
};

export default Menu;
