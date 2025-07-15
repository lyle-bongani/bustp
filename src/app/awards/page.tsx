import AwardsHero from './components/AwardsHero';
import MajorAwards from './components/MajorAwards';
import Milestones from './components/Milestones';
import AwardsMeaning from './components/AwardsMeaning';
import AwardsGallery from './components/AwardsGallery';
import AwardsCTA from './components/AwardsCTA';

export default function AwardsPage() {
    return (
        <main>
            <AwardsHero />
            <MajorAwards />
            <Milestones />
            <AwardsMeaning />
            <AwardsGallery />
            <AwardsCTA />
        </main>
    );
} 