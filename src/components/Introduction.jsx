import worker from "../assets/worker5.png";
import Reveal from "./Reveal";

export default function Introduction() {
  return (
    <div className="w-screen h-screen bg-slate-900" id="introduction">
      <div className="flex flex-col gap-y-9 lg:gap-y-0 lg:flex-row justify-center lg:justify-normal items-center h-full ">
        <Reveal
          delay="0.5"
          hidden={{ opacity: 0, x: -200 }}
          visible={{ opacity: 1, x: 0 }}
          className="self-start lg:self-auto"
        >
          <div className="self-start text-xl md:text-3xl lg:text-5xl font-normal text-gray-400 my-1 lg:my-4 mx-2 lg:mx-8">
            Empowering a sustainable future through innovative
            <p className="text-gray-200 font-medium">solar solutions</p>
          </div>
        </Reveal>
        <Reveal
          delay="0.5"
          hidden={{ opacity: 0, x: 200 }}
          visible={{ opacity: 1, x: 0 }}
          className="self-end lg:self-auto"
        >
          <img
            src={worker}
            alt=""
            className=" rounded-3xl aspect-auto h-60 md:h-100 lg:h-140  my-1 lg:my-4 mx-2 lg:mx-8"
          />
        </Reveal>
      </div>
    </div>
  );
}