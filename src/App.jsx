import Header from "./components/Header";
import Program from "./components/Program";
import Values from "./components/Values";
import { RiFlagFill } from "react-icons/ri";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Header />
      <Program />
      <Values />
      {/* banner  */}
      <main className="px-4 py-4 text-center">
        <section className="bg-gradient-to-r from-[#ac7ffe] via-[#9255fb] to-[#9b54e2] border-[1rem] border-white shadow-[0_15px_100px_-15px_#c9b8ec] grid place-items-center max_width rounded-[3rem]">
          <div className="flex flex-col items-center justify-center py-12 px-2">
            <div className="bg-icon_bg text-yellow_text p-2 rounded-lg text-3xl border-[3px] border-light_purple">
              <RiFlagFill />
            </div>
            <h1 className="text-4xl py-3 text-white font-bold">
              Get Started With <span className="text-yellow_text">Eatly</span>
            </h1>
            <p className="text-[1rem] max-w-[23rem] pb-4">
              Discover tips & news for your health from experts and get the best
              discounts by getting started
            </p>
            <button>Get Started</button>
          </div>
        </section>
      </main>
      <Menu />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
