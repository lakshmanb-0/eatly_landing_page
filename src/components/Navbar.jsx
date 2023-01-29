import React from "react";

const Navbar = () => {
  return (
    <main className=" w-full ">
      <nav className="max_width px-4 flex justify-between items-center py-3 w-full ">
        <div>
          {/* logo */}
          <h1 className="font-bold text-4xl text-yellow_text ml-3">Eatly</h1>
        </div>
        <ul className="lg:flex gap-10 text-xl hidden">
          <li>Programs</li>
          <li>Services</li>
          <li>News</li>
          <li>About Us</li>
        </ul>
        <button className="">Let's Talk</button>
      </nav>
    </main>
  );
};

export default Navbar;
