import { Suspense } from "react";
import Reveal from "./Reveal";

export default function Card({ backgroundImage, title, delay }) {
  console.log(delay);
  return (
      <Reveal
        delay={delay}
        hidden={{ opacity: 0, y: 100 }}
        visible={{ opacity: 1, y: 0 }}
      >
        <div
          className={
            "w-64 h-40 md:w-64 md:h-56 lg:w-72 lg:h-64 xl:w-96 xl:h-80 bg-cover rounded-xl flex gap-10 justify-center lg:justify-center " +
            backgroundImage
          }
        >
          <div className="w-52 lg:w-60 lg:h-14  flex items-center justify-center self-end mb-6 bg-primary text-white font-medium text-base rounded-xl text-center ">
            {title}
          </div>
        </div>
      </Reveal>
  );
}
