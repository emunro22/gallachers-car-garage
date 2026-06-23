import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Brake Repairs | Pads, Discs & Calipers in Blantyre",
  description: "Expert brake repair in Blantyre. Brake pads, discs, calipers replaced on all makes and models. Quality parts, competitive prices. Call 01698 711111.",
  alternates: { canonical: "/services/brakes" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Brake Repairs"
      heroImage="/images/brakes.jpg"
      intro="Your brakes are your most important safety feature. Expert brake repair and replacement using quality parts at competitive prices."
      paragraphs={[
        "At Gallachers Car Garage, we provide comprehensive brake repair services including pads, discs, calipers, and brake fluid changes for all makes and models of cars and vans.",
        "If you're hearing squealing, grinding, or noticing your car pulling to one side when braking, bring it in for a thorough inspection. We'll diagnose the issue and give you an honest quote before carrying out any work.",
        "We use quality brake components and ensure every brake job is done to the highest standard. Your safety is our priority.",
      ]}
      bulletPoints={[
        "Brake pad replacement",
        "Brake disc replacement",
        "Brake caliper repair and replacement",
        "Brake fluid change",
        "Brake line inspection and repair",
        "Handbrake adjustment and repair",
        "Free brake inspection with every service",
        "All makes and models",
      ]}
      faqs={[
        { question: "How do I know if my brakes need replacing?", answer: "Common signs include squealing or grinding noises, the car pulling to one side, a spongy pedal, or a dashboard warning light." },
        { question: "How long do brake pads last?", answer: "Typically 25,000–60,000 miles depending on driving style. We can check your remaining pad life during a service or free inspection." },
        { question: "Do you use quality parts?", answer: "Yes, we use OEM-equivalent or better brake components for long-lasting, safe results." },
      ]}
    />
  );
}
