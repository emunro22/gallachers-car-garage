import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Car Servicing | Full & Interim Services in Blantyre",
  description: "Affordable car servicing in Blantyre. Full and interim services for all makes and models. Service book stamped. Call 01698 711111.",
  alternates: { canonical: "/services/servicing" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Full Servicing"
      heroImage="/images/servicing.jpg"
      intro="Keep your car running smoothly with comprehensive servicing. Interim and full services for all makes and models at honest prices."
      paragraphs={[
        "Regular servicing keeps your vehicle reliable, safe, and fuel-efficient. We offer both interim and full major services for all makes and models at prices that won't break the bank.",
        "Every service includes an oil and filter change, fluid top-ups, brake checks, tyre inspections, and a thorough multi-point vehicle health check. We'll flag anything that needs attention — with no pressure to get unnecessary work done.",
        "We stamp your service book to maintain your vehicle's full service history, keeping your warranty valid and your resale value strong.",
      ]}
      bulletPoints={[
        "Interim and full servicing available",
        "Oil and filter change",
        "Multi-point vehicle health check",
        "Brake and tyre inspection",
        "Fluid level checks and top-ups",
        "Air and cabin filter replacement",
        "Service book stamped",
        "All makes and models",
      ]}
      faqs={[
        { question: "How often should I service my car?", answer: "Most manufacturers recommend every 12 months or 12,000 miles, whichever comes first. Call us for advice specific to your vehicle." },
        { question: "Will you stamp my service book?", answer: "Yes, we stamp your service book with every service to maintain your full service history." },
        { question: "What's the difference between interim and full service?", answer: "An interim service covers the essentials (oil, filter, key checks). A full service is more comprehensive, including additional inspections and replacements." },
      ]}
    />
  );
}
