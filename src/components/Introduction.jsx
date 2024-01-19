import { useTranslation } from "react-i18next";
import worker from "../assets/worker6.jpg";
import Reveal from "./Reveal";

export default function Introduction() {

  const { t } = useTranslation();


  return (
    <div className="snap-center shrink-0 w-full h-screen bg-slate-900 overflow-x-hidden" id="introduction">
      <div className="flex flex-col gap-y-9 lg:gap-y-0 lg:flex-row justify-center lg:justify-normal items-center h-full ">
        <Reveal
          delay="0.5"
          hidden={{ opacity: 0, x: -200 }}
          visible={{ opacity: 1, x: 0 }}
          className=""
        >
          <div className="self-start text-center lg:text-left    text-xl md:text-3xl lg:text-5xl font-normal w-100 md:w-auto text-gray-400 my-1 lg:my-4 mx-2 lg:mx-8">
            {t("introduction")}
            <p className="text-gray-200 font-medium">{t("introduction2")}</p>
          </div>
        </Reveal>
        <Reveal
          delay="0.5"
          hidden={{ opacity: 0, x: 200 }}
          visible={{ opacity: 1, x: 0 }}
          className=""
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
