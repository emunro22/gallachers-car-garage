import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Tyres & Batteries | Supply, Fit & Test in Blantyre",
  description: "Quality tyres and batteries in Blantyre. Supply and fit tyres, battery testing and replacement for all vehicles. Call 01698 711111.",
  alternates: { canonical: "/services/tyres-batteries" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Tyres & Batteries"
      heroImage="/images/tyres-batteries.jpg"
      intro="Quality tyres at competitive prices and battery testing and replacement. Budget, mid-range, and premium options available."
      paragraphs={[
        "Whether you need new tyres or a battery replacement, we offer quality products at competitive prices. We supply and fit tyres for all makes and models of cars and vans.",
        "We can advise on the right tyre for your vehicle and driving style. All tyres are professionally fitted and balanced, and we'll check pressures and tread depth while we're at it.",
        "If your car is struggling to start or your battery warning light is on, bring it in for a free battery test. We stock batteries for most vehicles and can have you sorted quickly.",
      ]}
      bulletPoints={[
        "New tyres supplied and fitted",
        "Budget, mid-range, and premium options",
        "Professional wheel balancing",
        "Tyre pressure and tread depth checks",
        "Battery testing and replacement",
        "Batteries for all vehicle types",
        "Same-day service available",
        "Competitive prices",
      ]}
      faqs={[
        { question: "How do I know if I need new tyres?", answer: "The legal minimum tread is 1.6mm. We recommend replacing at 3mm. Also check for uneven wear, bulges, or cuts." },
        { question: "How long does a car battery last?", answer: "Most batteries last 3–5 years. If your car is slow to start or the battery is over 4 years old, it's worth testing." },
      ]}
    />
  );
}
