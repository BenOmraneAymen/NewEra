import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
  return (
    <>
      <div className="w-screen h-48 lg:h-screen-1/2  bg-back flex flex-col items-center justify-center">
        <div className="w-full flex lg:justify-between gap-x-12">
          <div className="flex justify-center lg:justify-start ">
            <div className="w-52 flex flex-col p-2 ">
              <div className="text-slate-300 font-extrabold text-xl">
                NewEra Company
              </div>
              <div className="text-slate-300 font-medium text-base">
                Mahdia - Tunisia
              </div>
            </div>
            <div className="w-52 flex flex-col p-2">
              <div className="flex items-center text-slate-300 font-medium text-base py-1">
                <span class="material-symbols-outlined px-1">call</span>
                &nbsp;+216 98 000 000
              </div>
              <div className="flex items-center text-slate-300 font-medium text-base py-1">
                <span class="material-symbols-outlined px-1">call</span>
                &nbsp;+216 98 000 000
              </div>
              <div className="flex items-center text-slate-300 font-medium text-base py-1">
                <span class="material-symbols-outlined px-1">mail</span>
                &nbsp;
                <a
                  href="mailto:mail"
                  className="text-slate-300 font-medium text-base"
                >
                  mail
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex w-64 flex-col">
            <div className="text-slate-300 font-extrabold text-lg">
              Check our social media
            </div>
            <div className="flex gap-2 items-center">
              <img src={facebook} alt="" className="w-10 h-10 " />
              <img src={twitter} alt="" className="w-10 h-10 " />
              <img src={linkedin} alt="" className="w-10 h-10 " />
              <img src={instagram} alt="" className="w-10 h-10 " />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-back flex md:hidden w-full flex-col justify-center items-center p-4">
            <div className="text-slate-300 font-extrabold text-lg">
              Check our social media
            </div>
            <div className="flex gap-2 items-center">
              <img src={facebook} alt="" className="w-10 h-10 " />
              <img src={twitter} alt="" className="w-10 h-10 " />
              <img src={linkedin} alt="" className="w-10 h-10 " />
              <img src={instagram} alt="" className="w-10 h-10 " />
            </div>
          </div>
      <div className="bg-back w-full h-20 self-end flex items-center justify-center text-slate-300 border-t-2 border-slate-300">
        All Rights Reserved &copy; 2023
      </div>
    </>
  );
}
