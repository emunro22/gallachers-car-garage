import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Timing Belt & Wet Belt Replacement | Blantyre",
  description: "Timing belt and wet belt replacement in Blantyre. Prevent costly engine damage. All makes and models. Call 01698 711111.",
  alternates: { canonical: "/services/timing-belts" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Timing Belts & Wet Belts"
      heroImage="/images/timing-belts.jpg"
      intro="Don't risk catastrophic engine damage. Timing belt and wet belt replacement to manufacturer schedules at competitive prices."
      paragraphs={[
        "A snapped timing belt can destroy your engine — costing thousands to repair. We carry out timing belt and wet belt replacement to manufacturer schedules, protecting your engine and saving you money long-term.",
        "Wet belt systems, found in many modern vehicles like the Ford EcoBoost, are particularly critical. These belts run in engine oil and deteriorate faster than traditional timing belts.",
        "We recommend replacing your timing belt at the intervals in your vehicle handbook — typically every 40,000–100,000 miles or 4–5 years. Not sure when yours was last changed? Give us a call.",
      ]}
      bulletPoints={[
        "Timing belt replacement",
        "Wet belt replacement (Ford EcoBoost and others)",
        "Water pump replacement (recommended with belt)",
        "Tensioner and idler pulley replacement",
        "Timing chain inspection and replacement",
        "All makes and models",
        "Quality OEM-spec parts",
        "Competitive pricing",
      ]}
      faqs={[
        { question: "How often should a timing belt be replaced?", answer: "Every 40,000–100,000 miles or 4–5 years, whichever comes first. Check your handbook or call us for your specific vehicle." },
        { question: "What is a wet belt?", answer: "A wet belt runs inside the engine bathed in oil, rather than externally. Found in many Ford EcoBoost engines and others." },
        { question: "What happens if a timing belt snaps?", answer: "In most modern engines, pistons and valves collide, causing major damage. Preventative replacement is essential." },
      ]}
    />
  );
}
