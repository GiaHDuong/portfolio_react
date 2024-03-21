import DesktopNav from "../DesktopNav";
import HamburgerNav from "../HamburgerNav";
import HeroSection from "../Profile";
import About from "../About";
import Experience from "../Experience";

export default function Home() {
  return (
    <>
      <DesktopNav></DesktopNav>
      <HamburgerNav></HamburgerNav>
      <HeroSection></HeroSection>
      <About></About>
      <Experience></Experience>
    </>
  );
}
