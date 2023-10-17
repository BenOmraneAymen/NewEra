import logo from "../assets/logo.png";
import Reveal from "./Reveal";
export default function LandingPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-indigo-800 to-black" id="landing" >
      <Reveal
        delay="0.5"
        hidden={{ opacity: 0 }} 
        visible={{ opacity: 1 }}
      >
      <img src={logo} />
      </Reveal>
    </div>
  );
}
