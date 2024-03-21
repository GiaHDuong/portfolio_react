import HeroSection from "../HeroSection";
import DesktopNav from "../DesktopNav";
import HamburgerNav from "../HamburgerNav";

export default function Home() {
  return (
    <>
      <DesktopNav></DesktopNav>
      <HamburgerNav></HamburgerNav>
      <HeroSection></HeroSection>
    </>
  );
}