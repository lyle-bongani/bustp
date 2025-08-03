import HeroSection from './components/HeroSection';
import OurStory from './components/OurStory';
import WhatWeDo from './components/WhatWeDo';
import MissionVision from './components/MissionVision';
import StrategicPlan from './components/StrategicPlan';
import CoreValues from './components/CoreValues';
import AudienceReach from './components/AudienceReach';
import BankingPartners from './components/BankingPartners';
import AboutCTA from './components/AboutCTA';

export const metadata = {
  title: "About Bustop TV | Our Story & Mission",
  description: "Learn about Bustop TV, Zimbabwe's leading satire and entertainment platform. Discover our story, mission, vision, values, and impact.",
  alternates: {
    canonical: "https://bustop.org/about",
  },
  openGraph: {
    title: "About Bustop TV | Our Story & Mission",
    description: "Learn about Bustop TV, Zimbabwe's leading satire and entertainment platform. Discover our story, mission, vision, values, and impact.",
    url: "https://bustop.org/about",
    siteName: "Bustop TV",
    images: [
      {
        url: "https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png",
        width: 311,
        height: 311,
        alt: "Bustop TV Logo",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@bustoptv",
    title: "About Bustop TV | Our Story & Mission",
    description: "Learn about Bustop TV, Zimbabwe's leading satire and entertainment platform. Discover our story, mission, vision, values, and impact.",
    images: ["https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png"],
  },
};
export default function AboutPage() {
    return (
        <main>
            <HeroSection />
            <OurStory />
            <MissionVision />
            <WhatWeDo />
            <StrategicPlan />
            <CoreValues />
            <AudienceReach />
            <BankingPartners />
            <AboutCTA />
        </main>
    );
} 