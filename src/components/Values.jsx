import React from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { BsShieldCheck } from "react-icons/bs";
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { GiGrowth } from "react-icons/gi";

const Values = () => {
  return (
    <section className="max_width py-4 px-4">
      <div>
        <h1 className="text-purple_text font-bold space-x-3 text-xl flex items-center">
          <span className="bg-icon_bg text-icon_text p-2 rounded-lg">
            <IoDiamondSharp />
          </span>
          <span className="text-2xl">Our Value To Help You</span>
        </h1>
        <p className="text-sm">
          We always want to provide the best value for you and your health, join
          us to maximize the benefits
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="relative bg-light_purple group hover:bg-white border border-white">
          <span className="absolute left-3 -top-4 bg-icon_bg text-white p-2 rounded-lg">
            <AiFillHeart />
          </span>
          <h1 className="text-purple_text ">Becomes Healthier</h1>
          <p>Immune will stronger if the body is healthier</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
