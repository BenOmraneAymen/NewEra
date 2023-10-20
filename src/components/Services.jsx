import Card from "./Card";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <div
      className="snap-center overflow-x-hidden shrink-0 h-screen bg-background bg-cover bg-fixed"
      id="services"
    >
      <div className="backdrop-blur-md h-full w-full flex flex-col items-center justify-between">
        <Reveal delay="0.5" hidden={{ opacity: 0 }} visible={{ opacity: 1 }}>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium text-white p-14">Our Services</h2>
        </Reveal>
        <div className="h-full md:h-1/2 w-full flex flex-grow flex-col md:flex-row justify-around items-center mb-6 md:mb-28">
          <Card backgroundImage="bg-worker1" title="Installing Solar Panels" delay="0.4" />
          <Card backgroundImage="bg-worker5" title="Repairing" delay="0.5"  />
          <Card backgroundImage="bg-worker4" title="Maintenance" delay="0.6" />
        </div>
      </div>
    </div>
  );
}
