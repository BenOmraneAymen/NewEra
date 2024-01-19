import { useTranslation } from "react-i18next";
import Card from "./Card";

export default function Benefits(){
    const {t} = useTranslation()
    return(
        <div className="snap-center shrink-0 w-full h-screen flex flex-col items-center lg:justify-between bg-back overflow-x-hidden" id="benefits" >
            <h2 className="text-4xl lg:text-7xl font-medium text-white p-8 lg:p-14" >{t("benefits")}</h2>
            <div className="h-full lg:h-1/2 w-full flex flex-col md:flex-row  justify-around items-center lg:mb-28" >
                <Card backgroundImage="bg-solarPanel2" title={t("benefit1")} delay="0.5" />
                <Card backgroundImage="bg-worker3" title={t("benefit2")} delay="0.6" />
                <Card backgroundImage="bg-solarPanel4" title={t("benefit3")} delay="0." />
            </div>
        </div>
    )
}