

export const metadata = {
  title: "Gallery | Bustop TV Photography & Art",
  description: "View Bustop TV's photography and art gallery. Explore creative images, urban life, culture, and social impact in Zimbabwe.",
  alternates: {
    canonical: "https://bustop.org/gallery",
  },
  openGraph: {
    title: "Gallery | Bustop TV Photography & Art",
    description: "View Bustop TV's photography and art gallery. Explore creative images, urban life, culture, and social impact in Zimbabwe.",
    url: "https://bustop.org/gallery",
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
    title: "Gallery | Bustop TV Photography & Art",
    description: "View Bustop TV's photography and art gallery. Explore creative images, urban life, culture, and social impact in Zimbabwe.",
    images: ["https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png"],
  },
};

import dynamic from 'next/dynamic';

const GalleryClient = dynamic(() => import('./GalleryClient'), { ssr: false });

export default function GalleryPage() {
  return <GalleryClient />;
}