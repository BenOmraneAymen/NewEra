import Counter from "./Counter";
import Reveal from "./Reveal";

export default function Statistics() {
  return (
    <div className="snap-center overflow-x-hidden shrink-0 bg-solarPanel flex justify-center items-center  bg-cover w-full h-screen">
      <div className=" md:w-full backdrop-blur-sm flex justify-around items-start md:items-center">
        <Reveal
          delay="0.5"
          hidden={{ opacity: 0, x: 1000 }}
          visible={{ opacity: 1, x: 0 }}
          className="w-full"
        >
          <div className="w-fit md:w-full flex flex-col md:flex-row justify-around items-start gap-y-20 md:items-center p-4 md:p-14 bg-black opacity-60">
            <Reveal
              delay="0.75"
              hidden={{ opacity: 0, y: 200 }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="text-white text-3xl md:text-5xl ">
                <Counter number={50} delay={750} />+
              </div>
              <div className="text-indigo-700 text-2xl md:text-4xl font-medium">
                Projects
              </div>
            </Reveal>
            <Reveal
              delay="0.75"
              hidden={{ opacity: 0, y: 200 }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="text-white text-3xl md:text-5xl ">
                <Counter number={50} delay={750} />+
              </div>
              <div className="text-indigo-700 text-2xl md:text-4xl font-medium">
                Client satisfied
              </div>
            </Reveal>
            <Reveal
              delay="0.75"
              hidden={{ opacity: 0, y: 200 }}
              visible={{ opacity: 1, y: 0 }}
            >
              <div className="text-white text-3xl md:text-5xl ">
                <Counter number={8} delay={750} />+
              </div>
              <div className="text-indigo-700 text-2xl md:text-4xl font-medium">
                City visited
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
