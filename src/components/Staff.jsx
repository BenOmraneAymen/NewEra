import { useTranslation } from "react-i18next";
import ceo from "../assets/ceo.jpg";
import Reveal from "./Reveal";

export default function Staff() {
  const {t} = useTranslation();
  return (
    <div
      className="snap-center overflow-x-hidden shrink-0 w-full h-screen bg-blue-950 flex flex-col items-center"
      id="staff"
    >
      <Reveal delay="0.5" hidden={{ opacity: 0 }} visible={{ opacity: 1 }}>
        <img loading="lazy" src={ceo} alt="" className="w-72 h-72 lg:w-96 lg:h-96 rounded-full mt-20 mb-10" />
      </Reveal>
      <Reveal delay="0.75" hidden={{ opacity: 0 , y:100}} visible={{ opacity: 1 ,y:0}}>
        <div className="text-3xl lg:text-5xl font-medium text-slate-200 mb-10">
          {t('staff')}
        </div>
      </Reveal>
      <Reveal delay="0.75" hidden={{ opacity: 0 }} visible={{ opacity: 1 }}>
        <div className="w-120 md:w-160 px-5 py-3 md:px-8 md:py-5 lg:px-10 lg:py-6 flex items-center justify-center mb-6 bg-secondary text-white font-medium text-4xl lg:text-5xl rounded-xl">
          Houthayfa Belhaj
        </div>
      </Reveal>
    </div>
  );
}
