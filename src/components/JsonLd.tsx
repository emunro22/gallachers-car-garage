import { BUSINESS } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    description:
      "Trusted car and van repair garage in Blantyre, South Lanarkshire. Servicing, diagnostics, brakes, clutches, timing belts, suspension, exhausts, engine work, tyres and batteries. Light goods up to 3.5t.",
    url: `https://${BUSINESS.domain}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.area,
      addressRegion: "South Lanarkshire",
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 55.7917,
      longitude: -4.0917,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
    },
    image: `https://${BUSINESS.domain}/logo.jpg`,
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 55.7917,
        longitude: -4.0917,
      },
      geoRadius: "15000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Repair Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car & Van Repairs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Servicing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Repairs" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diagnostics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Clutch Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Timing Belt Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Suspension Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exhaust Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Work" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tyres & Batteries" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Van Repairs" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({ name, description }: { name: string; description: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "AutoRepair",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.area,
        addressRegion: "South Lanarkshire",
        postalCode: BUSINESS.address.postcode,
        addressCountry: "GB",
      },
    },
    areaServed: {
      "@type": "Place",
      name: "South Lanarkshire",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; href: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://${BUSINESS.domain}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
