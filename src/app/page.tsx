import Image from "next/image";
import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import HomeAwards from "../components/home/HomeAwards";
import HomeClients from "../components/home/HomeClients";
import HomeContact from "../components/home/HomeContact";
import HomeNews from "../components/home/HomeNews";
import HomePrograms from "../components/home/HomePrograms";
import HomeProjects from "../components/home/HomeProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeAwards />
      <HomeClients />
      <HomePrograms />
      <HomeNews />
      <HomeProjects />
      <HomeContact />
      {/* Optionally, keep or remove the old content below */}
    </>
  );
}
