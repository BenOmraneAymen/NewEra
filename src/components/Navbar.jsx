import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <div className="w-screen h-20 fixed top-0 left-0 z-50 flex items-center justify-between backdrop-blur-sm bg-opacity-50">
      <a href="#landing" >
        <img src={logo} alt="" className="h-24 mx-6" />
      </a>
      <div className="w-2/3  lg:w-1/2 flex items-center justify-between mx-4 ">
        <div className="text-xs md:text-base font-semibold text-gray-300">
          {" "}
          <a href="#introduction">Our Company</a>
        </div>
        <div className="text-xs md:text-base font-semibold text-gray-300">
          {" "}
          <a href="#services">Services</a>
        </div>
        <div className="text-xs md:text-base font-semibold text-gray-300">
          {" "}
          <a href="#benefits">Why use Solar Energy</a>
        </div>
        <div className="text-xs md:text-base font-semibold text-gray-300">
          {" "}
          <a href="#staff">Staff</a>
        </div>
      </div>
    </div>
  );
}
