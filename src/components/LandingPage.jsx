import logo from "../assets/logo.png";
import Reveal from "./Reveal";
export default function LandingPage() {
  return (
    <div className="snap-center overflow-x-hidden w-full h-screen flex justify-center items-center bg-gradient-to-r from-indigo-800 to-black" id="landing" >
      <Reveal
        delay="0.5"
        hidden={{ opacity: 0 }} 
        visible={{ opacity: 1 }}
      >
      <img src={logo} loading="lazy" />
      </Reveal>
    </div>
  );
}
