import Banner from "@/components/Banner";
import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar1";
import Sliders from "@/components/Sliders";
import WelcomeSection from "@/components/WelcomeSection";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <WelcomeSection/>
    <Sliders/>
    <Cards/>
    <Footer/>
    </>
  );
};

export default Home;
