import React from "react";
import { BsPlayFill } from "react-icons/bs";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <main className=" bg-purple_bg relative">
      <Navbar />
      <header className=" bg-purple_bg max_width px-4 py-12 grid gap-8 md:grid-cols-2 ">
        <section className="lg:max-w-[27rem] order-2 lg:order-1 py-5 mb-5 lg:mb-0">
          <h1 className="text-6xl lg:text-[5rem] text-white font-bold">
            Changing your <span className="text-yellow_text ">eating </span>
            habits
          </h1>
          <p className="text-xl py-6">
            Always take care of your health starting from the food menu that you
            consume every day
          </p>
          <div className="flex items-center gap-8 pb-3">
            <button className="px-4 py-2">Explore Menu</button>
            <div className="flex items-center gap-2">
              <div className="bg-white text-yellow_text text-2xl rounded-full p-2 border-2 border-light_purple ">
                <BsPlayFill />
              </div>
              <span className="text-xl ">Watch Video</span>
            </div>
          </div>
        </section>

        {/* img section */}
        <section className="bg-white h-[30rem] md:h-[25rem] lg:h-[32rem] w-[25rem] md:w-[20rem] lg:w-[24rem] mx-auto order-1 flex rounded-t-full rounded-b-[2000px] z-50 ">
          <div className="bg-light_purple rounded-t-full rounded-b-[2000px] m-4 flex justify-center w-full relative">
            <div className="scale-125 md:scale-150 absolute bottom-[2.4rem] md:bottom-[4rem] lg:bottom-[4.8rem] ">
              <img src="/banner_header.png" alt="Banner_header" />
            </div>
          </div>
        </section>
      </header>

      {/* brand section  */}
      <section className="w-full bg-purple_text absolute bottom-0 z-0">
        <div className="max_width grid lg:grid-cols-3 place-items-center px-4 py-3 ">
          <div className="flex items-center gap-4 h-[3rem] lg:h-[4rem] ">
            <div className="w-[10rem]">
              <img src="/emerson_logo.png" alt="" />
            </div>
            <div className="w-[10rem]">
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
