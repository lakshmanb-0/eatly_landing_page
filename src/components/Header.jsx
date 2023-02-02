import React from "react";
import { BsPlayFill } from "react-icons/bs";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <main className="bg-gradient-to-r from-[#b48bfb] via-[#8c47f2] to-[#d7806f] relative">
      {/* navbar  */}
      <Navbar />

      {/* header  */}
      <header className="max_width px-4 py-12 grid gap-8 md:grid-cols-2 ">
        <section className="lg:max-w-[27rem] order-2 lg:order-1 py-5 mb-5 lg:mb-0">
          <h1 className="text-5xl sm:text-6xl lg:text-[5rem] text-white font-bold">
            Changing your <span className="text-yellow_text ">eating </span>
            habits
          </h1>
          <p className="text-lg sm:text-xl py-6">
            Always take care of your health starting from the food menu that you
            consume every day
          </p>
          <div className="flex items-center gap-8 pb-3">
            <button className="">Explore Menu</button>
            <div className="flex items-center gap-2">
              <div className="bg-white text-yellow_text text-2xl rounded-full p-2 border-2 border-light_purple ">
                <BsPlayFill />
              </div>
              <span className="text-xl">Watch Video</span>
            </div>
          </div>
        </section>

        {/* img section */}
        <section className="img_container order-1">
          <div className="scale-125 sm:scale-150 absolute bottom-[1.6rem] sm:bottom-[3.9rem] lg:bottom-[4.8rem] ">
            <img src="/banner_header.png" alt="Banner_header" />
          </div>
        </section>
      </header>

      {/* brand section  */}
      <section className="w-full bg-gradient-to-r from-white via-[#ede0f2] to-white absolute bottom-0 z-0">
        <div className="max_width grid lg:grid-cols-3 place-items-center px-4 py-3 ">
          <div className="flex items-center gap-4 h-[3rem] lg:h-[4rem] ">
            <div className="w-[8rem] sm:w-[10rem]">
              <img src="/emerson_logo.png" alt="" />
            </div>
            <div className="w-[8rem] sm:w-[10rem]">
              <img src="/herbalife_logo.png" alt="" />
            </div>
          </div>
          <div />
        </div>
      </section>
    </main>
  );
};

export default Header;
