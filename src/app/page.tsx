import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import HomeAwards from "../components/home/HomeAwards";
import HomeClients from "../components/home/HomeClients";
import HomeContact from "../components/home/HomeContact";
import HomeNews from "../components/home/HomeNews";
import HomePrograms from "../components/home/HomePrograms";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script id="jsonld-org" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Bustop TV",
          "url": "https://bustop.org/",
          "logo": "https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png",
          "sameAs": [
            "https://www.facebook.com/bustoptv/",
            "https://twitter.com/bustoptv",
            "https://www.instagram.com/bustoptv/"
          ],
          "description": "Zimbabwe's leading satire and entertainment platform."
        }
        `}
      </Script>
      <Script id="jsonld-website" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://bustop.org/",
          "name": "Bustop TV",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://bustop.org/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        `}
      </Script>
      <Script id="jsonld-article" type="application/ld+json" strategy="afterInteractive">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Bustop TV - Zimbabwe's leading satire and entertainment platform.",
          "image": [
            "https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png"
          ],
          "datePublished": "2020-01-01T00:00:00+00:00",
          "author": {
            "@type": "Organization",
            "name": "Bustop TV"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Bustop TV",
            "logo": {
              "@type": "ImageObject",
              "url": "https://bustop.org/images/logos/Bustop%20TV%20Logo%20311px.png"
            }
          },
          "description": "Learn about Bustop TV, Zimbabwe's leading satire and entertainment platform. Discover our story, mission, vision, values, and impact."
        }
        `}
      </Script>
      <Hero />
      <HomeAbout />
      <HomeAwards />
      <HomeClients />
      <HomePrograms />
      <HomeNews />
      <HomeContact />
    </>
  );
}
