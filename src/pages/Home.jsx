// src/pages/Home.jsx
import HeroSlider from "../components/home/HeroSlider";
import Welcome from "../components/home/Welcome";
import Profile from "../components/home/Profile";
import Services from "../components/home/Services";
import CarTypes from "../components/home/CarTypes";
import TestDrive from "../components/home/TestDrive";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Articles from "../components/home/Articles";
import Header from "../components/Header";
import Gallery from "../components/home/Gallery";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <HeroSlider />
      <Welcome />
      <Profile />
      <Services />
      <CarTypes />
      <TestDrive />
      <WhyChooseUs />
      <Header />
      <Gallery />
      <Articles />
    </div>
  );
}
