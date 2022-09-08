import Navbar from "../Components/1.Navbar/navbar";
import Hero from "../Components/2.Hero/hero";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import HeroFooter from "../Components/3.HeroFooter/heroFooter";





import Features from "../Components/Features/features";


AOS.init();


function Home() {
  return (
    <div className="home-page">
       <Navbar/>
       <Hero/>
       <HeroFooter/>
       <Features/>
    </div>
  );
}

export default Home;
