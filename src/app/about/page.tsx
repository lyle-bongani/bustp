import HeroSection from './components/HeroSection';
import OurStory from './components/OurStory';
import WhatWeDo from './components/WhatWeDo';
import MissionVision from './components/MissionVision';
import StrategicPlan from './components/StrategicPlan';
import CoreValues from './components/CoreValues';
import AudienceReach from './components/AudienceReach';
import MeetTheTeam from './components/OrganizationalStructure';
import AboutCTA from './components/AboutCTA';

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
            <MeetTheTeam />
            <AboutCTA />
        </main>
    );
} 