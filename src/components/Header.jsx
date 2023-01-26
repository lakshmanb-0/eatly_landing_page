import React from "react";

const Header = () => {
  return (
    <main className=" bg-purple_bg h-fit">
      <header className="h-full lg:h-screen max_width px-4 py-8 bg-purple_bg grid gap-8 place-items-center lg:grid-cols-2  ">
        <section className="md:max-w-[33rem] order-2 lg:order-1">
          <h1 className=" text-7xl md:text-8xl text-white font-bold">
            Changing your <span className="text-yellow_text ">eating </span>
            habits
          </h1>
          <p className="text-xl md:text-2xl py-6">
            Always take care of your health starting from the food menu that you
            consume every day
          </p>
          <div className="flex items-center  gap-8">
            <button className="px-4 py-2">Explore Menu</button>
            <div>
              {/* icon */}
              <span>Watch Video</span>
            </div>
          </div>
        </section>

        {/* img section */}
        <section className="bg-white h-[30rem] rounded-t-full w-[25rem] mx-auto order-1 flex">
          <div className="bg-light_purple rounded-t-full m-4 w-full">
            <img src="" alt="" />
          </div>
        </section>
      </header>
    </main>
  );
};

export default Header;
