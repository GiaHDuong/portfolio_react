import DesktopNav from "../DesktopNav";
import HamburgerNav from "../HamburgerNav";
import HeroSection from "../Profile";
import About from "../About";
import Experience from "../Experience";
import Project from "../Project";
import Funfact from "../Funfact";
import Contact from "../Contact";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <DesktopNav></DesktopNav>
      <HamburgerNav></HamburgerNav>
      <HeroSection></HeroSection>
      <About></About>
      <Experience></Experience>
      <Project></Project>
      <Funfact></Funfact>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
