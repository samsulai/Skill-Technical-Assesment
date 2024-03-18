import NavBar from "@/components/common/NavBar";
import AllinOneSection from "@/components/sections/AllinOneSection";
import FooterSection from "@/components/sections/FooterSection";
import Hero from "@/components/sections/Hero";
import IntegrationSection from "@/components/sections/IntegrationSection";
import LatestNewsSection from "@/components/sections/LatestNewsSection";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import OurFeatures from "@/components/sections/OurFeatures";
import TestimonialSection from "@/components/sections/TestimonialSection";
import WhatisSkillSection from "@/components/sections/WhatisSkillSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="bg-[#FFF2E1] clippy ">
      <NavBar />
      <Hero/>
      </div>
      <div className="flex flex-col gap-32">
      <LogoGroupSection/>
      <div className="mx-3 md:mx-16 pb-32">
      <AllinOneSection/>
      <WhatisSkillSection/>
      <OurFeatures/>
      <IntegrationSection/>
      <TestimonialSection/>
      <LatestNewsSection/>
      </div>
      </div>
      <FooterSection />
    </main>
  );
}
