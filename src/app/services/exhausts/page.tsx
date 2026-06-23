import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Exhaust Repair & Replacement | Catalytic Converter & DPF",
  description: "Exhaust repair and replacement in Blantyre. Catalytic converters, DPF cleaning, full exhaust systems. Call 01698 711111.",
  alternates: { canonical: "/services/exhausts" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Exhausts"
      heroImage="/images/exhausts.jpg"
      intro="Loud exhaust or failed emissions? Full exhaust system repair and replacement including catalytic converters and DPF."
      paragraphs={[
        "A damaged exhaust affects performance, fuel economy, and noise levels — and can fail your MOT. We offer complete exhaust system repairs and replacements for all vehicles.",
        "From back boxes and silencers to catalytic converter replacements, DPF cleaning, and full system swaps, we've got you covered.",
        "If your exhaust is louder than usual, you can smell fumes, or your emissions light is on, bring it in for a thorough inspection.",
      ]}
      bulletPoints={[
        "Full exhaust system replacement",
        "Back box and silencer replacement",
        "Catalytic converter replacement",
        "DPF cleaning and replacement",
        "Exhaust manifold repair",
        "Lambda sensor replacement",
        "Exhaust brackets and hangers",
        "Emissions testing",
      ]}
      faqs={[
        { question: "How do I know if my exhaust needs replacing?", answer: "Increased noise, visible rust or holes, rattling, reduced fuel economy, or a strong smell of fumes." },
        { question: "Will a damaged exhaust fail an MOT?", answer: "Yes, excessive noise, leaks, and high emissions will all cause an MOT failure." },
      ]}
    />
  );
}
