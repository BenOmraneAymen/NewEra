import Benefits from "./components/Benefits";
import Footer from "./components/footer";
import Introduction from "./components/Introduction";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Staff from "./components/Staff";
import StaffIntro from "./components/StaffIntro";
import Statistics from "./components/statistics";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll" id="container" >
        <Navbar />
        <LandingPage />
        <Introduction />
        <Statistics />
        <Services />
        <Benefits />
        <Staff />
        <StaffIntro />
        <Footer />
      </div>
    </>
  );
}

export default App;
