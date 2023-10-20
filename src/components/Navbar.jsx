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

export default function Navbar() {
  return (
    <div className="overflow-x-hidden w-full h-20 fixed top-0 left-0 z-50 flex items-center justify-between backdrop-blur-sm bg-opacity-50 p-4">
      <a href="#landing" >
        <img src={logo} alt="" className="h-24 mx-6" />
      </a>
      <div className="w-2/3 hidden lg:flex lg:w-1/2 items-center justify-between mx-4 ">
        <div className="text-xs md:text-base font-semibold text-gray-300">
          <a href="#introduction">Our Company</a>
        </div>
        <div className="text-xs md:text-base font-semibold text-gray-300">
          <a href="#services">Services</a>
        </div>
        <div className="text-xs md:text-base font-semibold text-gray-300">
          <a href="#benefits">Why use Solar Energy</a>
        </div>
        <div className="text-xs md:text-base font-semibold text-gray-300">
          <a href="#staff">Staff</a>
        </div>
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
