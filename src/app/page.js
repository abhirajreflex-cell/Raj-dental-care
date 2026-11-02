import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Appointement from "../../components/AppointmentForm"
import About from "../../components/About";
import Services from "../../components/Services";
import Doctor from "../../components/Doctor";
import WhyUs from "../../components/WhyUs";
import Gallery from "../../components/Gallery";
import Reviews from "../../components/Reviews";
import MapSection from "../../components/MapSection";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Appointement />
        <About />
        <Services />
        <Doctor />
        <WhyUs />
        <Gallery />
        <Reviews />
        <MapSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}