export default function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Scorrie",
    url: "https://www.scorrie.com",
    logo: "https://www.scorrie.com/icon-512.png",
    description:
      "A revolutionary platform where trust meets transactions. Connect safely in a world full of uncertainty.",
    foundingDate: "2026-06",
    founders: [
      {
        "@type": "Person",
        name: "Ruan Klopper",
      },
    ],
    sameAs: ["https://www.ruanklopper.com"],
  }
}

