import React from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";

const Values = () => {
  return (
    <main
      className="max_width py-10 px-4 grid md:grid-cols-2 gap-8 place-items-center"
      id="program"
    >
      <section className="bg-light_purple shadow-[0_35px_60px_-15px_#c9b8ec] rounded-t-full rounded-b-[2000px] relative h-[30rem] md:h-[25rem] lg:h-[32rem] w-[25rem] md:w-[20rem] lg:w-[24rem] z-50 mx-auto border-[1.1rem] border-white">
        <div className="scale-110 md:scale-[1.5] lg:scale-[1.4] absolute bottom-[0.4rem] md:bottom-[4.4rem] lg:bottom-[4.1rem] ">
          <img src="/values_img.png" alt="Banner_header" />
        </div>
      </section>
      <section>
        <div className="px-4">
          <h1 className="text-purple_text font-bold space-x-3 text-xl flex items-center">
            <span className="bg-icon_bg text-icon_text p-2 rounded-lg">
              <IoDiamondSharp />
            </span>
            <span className="text-3xl font-bold">Our Value To Help You</span>
          </h1>
          <p className="py-3 max-w-[30rem]">
            We always want to provide the best value for you and your health,
            join us to maximize the benefits
          </p>
        </div>
        <section className="grid grid-cols-2 py-8 gap-8">
          <div className="relative bg-[#f9f1fe] group hover:bg-white border hover:shadow-[0_15px_100px_-15px_#c9b8ec] cursor-pointer border-white px-6 py-8 rounded-2xl">
            <span className="absolute left-5 -top-4 bg-icon_bg text-white p-2 rounded-lg text-lg group-hover:bg-yellow_bg ">
              <AiFillHeart />
            </span>
            <h1 className="text-purple_text text-2xl font-bold">
              Becomes Healthier
            </h1>
            <p className="py-2">
              Immune will stronger if the body is healthier
            </p>
          </div>
          <div className="relative bg-[#f9f1fe] group hover:bg-white border hover:shadow-[0_15px_100px_-15px_#c9b8ec] cursor-pointer border-white px-6 py-8 rounded-2xl">
            <span className="absolute left-5 -top-4 bg-icon_bg text-white p-2 rounded-lg text-lg group-hover:bg-yellow_bg ">
              <GiGrowth />
            </span>
            <h1 className="text-purple_text text-2xl font-bold">
              Increase Energy
            </h1>
            <p className="py-2">
              Have enough energy can help carry out a routine
            </p>
          </div>
          <div className="relative bg-[#f9f1fe] group hover:bg-white border hover:shadow-[0_15px_100px_-15px_#c9b8ec] cursor-pointer border-white px-6 py-8 rounded-2xl">
            <span className="absolute left-5 -top-4 bg-icon_bg text-white p-2 rounded-lg text-lg group-hover:bg-yellow_bg ">
              <BsShieldCheck />
            </span>
            <h1 className="text-purple_text text-2xl font-bold">
              Controlling Weight
            </h1>
            <p className="py-2">
              Body will feel lighter and will not be easily tired
            </p>
          </div>
          <div className="relative bg-[#f9f1fe] group hover:bg-white border hover:shadow-[0_15px_100px_-15px_#c9b8ec] cursor-pointer border-white px-6 py-8 rounded-2xl">
            <span className="absolute left-5 -top-4 bg-icon_bg text-white p-2 rounded-lg text-lg group-hover:bg-yellow_bg ">
              <AiFillStar />
            </span>
            <h1 className="text-purple_text text-2xl font-bold">
              Becomes Happier
            </h1>
            <p className="py-2">
              Living a healthy life also increase self-confidence
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Values;
