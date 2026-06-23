import SeoServicePage from "@/components/SeoServicePage";

export default function CarServicingBlantyre() {
  return (
    <SeoServicePage
      title="Car Servicing Blantyre"
      heading="Car Servicing"
      headingHighlight="in Blantyre"
      intro="Keep your car running smoothly with affordable servicing at Gallachers Car Garage in Blantyre. Interim and full services for all makes and models."
      paragraphs={[
        "Regular servicing keeps your vehicle reliable, safe, and fuel-efficient. At Gallachers Car Garage in Blantyre, we offer comprehensive car servicing for all makes and models at prices that won't break the bank.",
        "Our services include oil and filter changes, fluid top-ups, brake checks, tyre inspections, and a full multi-point vehicle health check. We'll flag anything that needs attention now or in the near future — with no pressure to get unnecessary work done.",
        "Whether you need an interim service to keep things ticking over or a full major service, our experienced mechanics will ensure your car is in top condition. We also stamp your service book to maintain your vehicle's service history.",
      ]}
      bulletPoints={[
        "Interim and full servicing available",
        "Oil and filter change",
        "Multi-point vehicle health check",
        "Brake and tyre inspection",
        "Fluid level checks and top-ups",
        "Air filter and cabin filter replacement",
        "Service book stamped",
        "All makes and models",
      ]}
      faqs={[
        {
          question: "How often should I service my car?",
          answer: "Most manufacturers recommend a service every 12 months or 12,000 miles, whichever comes first. Check your service book or call us on 01698 711111 for advice specific to your vehicle.",
        },
        {
          question: "Will you stamp my service book?",
          answer: "Yes, we stamp your service book with every service. This maintains your vehicle's service history without voiding any manufacturer warranty.",
        },
      ]}
    />
  );
}
