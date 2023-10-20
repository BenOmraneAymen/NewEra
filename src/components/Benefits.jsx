import Card from "./Card";

export default function Benefits(){
    return(
        <div className="snap-center shrink-0 w-full h-screen flex flex-col items-center lg:justify-between bg-back overflow-x-hidden" id="benefits" >
            <h2 className="text-4xl lg:text-7xl font-medium text-white p-8 lg:p-14" >Why Use solar Energy</h2>
            <div className="h-full lg:h-1/2 w-full flex flex-col md:flex-row  justify-around items-center lg:mb-28" >
                <Card backgroundImage="bg-solarPanel2" title="Increase Property value" delay="0.5" />
                <Card backgroundImage="bg-worker3" title="Return On Invesment" delay="0.6" />
                <Card backgroundImage="bg-solarPanel4" title="Return On Invesment" delay="0." />
            </div>
        </div>
    )
}