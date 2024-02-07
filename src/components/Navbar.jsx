import logo from "../assets/logo.png";
import DefaultDropdown from "./Dropdown";
import worker1 from "../assets/worker1.jpg";
import worker2 from "../assets/worker2.jpg";
import worker3 from "../assets/worker3.jpg";
import worker4 from "../assets/worker4.jpg";
import worker5 from "../assets/worker5.jpg";
import worker6 from "../assets/worker6.jpg";
import bg from "../assets/bg.jpg";
import solarPanel from "../assets/solarPanel.jpeg";
import { useTranslation } from "react-i18next";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import english from "../assets/english.svg";
import french from "../assets/french.svg.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log(i18n.language);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-20 z-40 flex items-center justify-between bg-opacity-40 backdrop-blur-sm  p-4">
      <a href="#landing">
        <img src={logo} alt="" className="h-24 mx-6" />
      </a>
      <div className="w-2/3 hidden lg:flex lg:w-1/2 items-center justify-between mx-4 ">
        <div className="text-xs md:text-base font-semibold text-gray-300">
          <a href="#introduction">{t("nav1")}</a>
        </div>
        <div className="text-xs md:text-base font-semibold text-gray-300">
          <a href="#services">{t("nav2")}</a>
        </div>
        <div className="text-xs md:text-base font-semibold text-gray-300">
          <a href="#benefits">{t("nav3")}</a>
        </div>
        <div className="text-xs md:text-base font-semibold text-gray-300">
          <a href="#staff">{t("nav4")}</a>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              Options
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-blue-700 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                      onClick={() => changeLanguage("en")}
                    >
                      <img src={english}  className="w-6 mx-3" />
                      {t("english")}
                    </div>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={`${
                        active ? "bg-blue-700 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer`}
                      onClick={() => changeLanguage("fr")}
                    >
                      <img src={french} className="w-6 mx-3" />
                      {t("french")}
                    </div>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <DefaultDropdown className="block lg:hidden" />
      <img className="hidden" src={worker1} alt="" />
      <img className="hidden" src={worker2} alt="" />
      <img className="hidden" src={worker3} alt="" />
      <img className="hidden" src={worker4} alt="" />
      <img className="hidden" src={worker5} alt="" />
      <img className="hidden" src={worker6} alt="" />
      <img className="hidden" src={bg} alt="" />
      <img className="hidden" src={solarPanel} alt="" />
    </div>
  );
}
