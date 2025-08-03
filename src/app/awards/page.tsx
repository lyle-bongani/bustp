import AwardsHero from './components/AwardsHero';
import MajorAwards from './components/MajorAwards';
import Milestones from './components/Milestones';
import AwardsMeaning from './components/AwardsMeaning';
import AwardsGallery from './components/AwardsGallery';
import AwardsCTA from './components/AwardsCTA';

export const metadata = {
  title: "Awards & Recognitions | Bustop TV",
  description: "See Bustop TV's major awards, milestones, and recognitions for creative excellence and social impact in Zimbabwe.",
  alternates: {
    canonical: "https://bustop.org/awards",
  },
  openGraph: {
    title: "Awards & Recognitions | Bustop TV",
    description: "See Bustop TV's major awards, milestones, and recognitions for creative excellence and social impact in Zimbabwe.",
    url: "https://bustop.org/awards",
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
    title: "Awards & Recognitions | Bustop TV",
    description: "See Bustop TV's major awards, milestones, and recognitions for creative excellence and social impact in Zimbabwe.",
    images: ["https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png"],
  },
};
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