import ceo2 from "../assets/ceo2.png";
import Reveal from "./Reveal";

export default function StaffIntro() {
  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row justify-center gap-y-10 lg:gap-0 lg:justify-around items-center bg-gradient-to-r from-orange-400 via-yellow-600 to-yellow-500 ">
      <Reveal
        delay="0.5"
        hidden={{ opacity: 0, x: -200 }}
        visible={{ opacity: 1, x: 0 }}
        className="self-start lg:self-auto"
      >
        <h2 className="text-xl lg:text-3xl font-medium text-slate-200 md:w-160 lg:w-180">
          A dedicated professional consistently staying abreast of emerging
          technologies in solar power to drive innovation and sustainability.
        </h2>
      </Reveal>
      <Reveal
        delay="0.5"
        hidden={{ opacity: 0, x: 200 }}
        visible={{ opacity: 1, x: 0 }}
        className="self-end lg:self-auto"
      >
        <img src={ceo2} alt="" className="w-100 md:w-140 lg:h-140 lg:w-160 rounded-lg shadow-black" />
      </Reveal>
    </div>
  );
}
