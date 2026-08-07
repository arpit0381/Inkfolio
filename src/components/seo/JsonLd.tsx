import React from "react";

export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://arpitbajpai.in/#person",
    name: "Arpit Bajpai",
    alternateName: [
      "Arpit Bajpai",
      "arpit bajpai",
      "Arpit Bajpai Inkfolio",
      "Arpit Bajpai Developer",
      "Arpit's Diary",
      "Arpit's Notebook",
      "Arpit Bajpai PSIT"
    ],
    url: "https://arpitbajpai.in",
    image: "https://arpitbajpai.in/profile.jpg",
    jobTitle: "Full Stack Web Developer & Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Sulax Solar Industries",
      url: "https://sulaxsolar.com"
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Pranveer Singh Institute of Technology (PSIT)",
      location: "Kanpur, UP, India"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kanpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India"
    },
    email: "arpitbajpai038@gmail.com",
    telephone: "+919235823255",
    sameAs: [
      "https://github.com/arpit0381",
      "https://linkedin.com/in/arpitbajpai",
      "https://formstuff.in",
      "https://lifereceipt.in",
      "https://sulaxsolar.com",
      "https://clubsphere.in"
    ],
    knowsAbout: [
      "Full Stack Web Development",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "TypeScript",
      "Python",
      "Flutter",
      "Tailwind CSS",
      "RESTful APIs",
      "Database Architecture"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://arpitbajpai.in/#website",
    url: "https://arpitbajpai.in",
    name: "Inkfolio by Arpit Bajpai",
    alternateName: [
      "Inkfolio",
      "inkfolio",
      "Inkfolio by Arpit Bajpai",
      "inkfolio by arpit bajpai",
      "Arpit's Diary",
      "Arpit Bajpai Portfolio",
      "arpitbajpai.in"
    ],
    publisher: {
      "@id": "https://arpitbajpai.in/#person"
    },
    description:
      "Official interactive handwritten engineering notebook, developer portfolio, and personal diary of Arpit Bajpai (Inkfolio / Arpit's Diary)."
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://arpitbajpai.in/#profilepage",
    url: "https://arpitbajpai.in",
    name: "Arpit Bajpai — Handwritten Developer Notebook | Inkfolio by Arpit Bajpai",
    mainEntity: {
      "@id": "https://arpitbajpai.in/#person"
    }
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "FormStuff",
          operatingSystem: "Web",
          applicationCategory: "DeveloperApplication",
          url: "https://formstuff.in",
          description: "Dynamic form builder platform powered by React and Express with PostgreSQL schema management.",
          author: {
            "@id": "https://arpitbajpai.in/#person"
          }
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "LifeReceipt",
          operatingSystem: "iOS, Android",
          applicationCategory: "FinanceApplication",
          url: "https://lifereceipt.in",
          description: "Mobile digital receipt vault application built in Flutter with real-time Firebase cloud sync.",
          author: {
            "@id": "https://arpitbajpai.in/#person"
          }
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "WebSite",
          name: "Sulax Solar Website",
          url: "https://sulaxsolar.com",
          description: "Enterprise solar business website and government subsidy calculator built with Next.js.",
          author: {
            "@id": "https://arpitbajpai.in/#person"
          }
        }
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "SoftwareApplication",
          name: "ClubSphere",
          url: "https://clubsphere.in",
          description: "Community & club coordination web platform for college student organizations.",
          author: {
            "@id": "https://arpitbajpai.in/#person"
          }
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </>
  );
}
