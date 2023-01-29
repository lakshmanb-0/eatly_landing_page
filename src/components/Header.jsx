import React from "react";
import { BsPlayFill } from "react-icons/bs";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <main className=" bg-purple_bg relative">
      <Navbar />
      <header className=" bg-purple_bg max_width px-4 pt-12 grid gap-8 md:grid-cols-2 ">
        <section className="lg:max-w-[33rem] order-2 lg:order-1 py-5 ">
          <h1 className="text-6xl lg:text-8xl text-white font-bold">
            Changing your <span className="text-yellow_text ">eating </span>
            habits
          </h1>
          <p className="text-xl md:text-2xl py-6">
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
        <section className="bg-white h-[30rem] md:h-[25rem] lg:h-[35rem] w-[25rem] md:w-[20rem] lg:w-[30rem] mx-auto order-1 flex rounded-t-full rounded-b-[2000px] z-50 ">
          <div className="bg-light_purple rounded-t-full rounded-b-[2000px] m-4 flex justify-center w-full relative">
            <div className="absolute -bottom-2 w-[30rem] md:w-[27rem] lg:w-[34rem]  h-[31rem] lg:h-[38rem] flex justify-center">
              <img src="/banner_header.png" alt="Banner_header" />
            </div>
          </div>
        </section>
      </header>

      {/* brand section  */}
      <section className="w-full mt-10 bg-white absolute bottom-0 z-0">
        <div className="max_width grid grid-cols-2 ">
          <div className="flex items-center gap-4 h-[5rem] w-[15rem]">
            <img src="/emerson_logo.png" alt="" />
            <img src="/herbalife_logo.png" alt="" />
          </div>
          <div />
        </div>
      </section>
    </main>
  );
};

export default Header;
