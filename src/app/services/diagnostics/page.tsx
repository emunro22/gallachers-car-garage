import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Car Diagnostics | Engine Warning Light & Fault Finding",
  description: "Advanced car diagnostics in Blantyre. Engine management, ABS, airbag fault finding for all makes and models. Call 01698 711111.",
  alternates: { canonical: "/services/diagnostics" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Diagnostics"
      heroImage="/images/diagnostics.jpg"
      intro="Engine warning light on? Our advanced diagnostic equipment quickly pinpoints faults so we can fix them properly first time."
      paragraphs={[
        "Modern vehicles rely on complex electronic systems, and when something goes wrong, a warning light is often the first sign. We use advanced diagnostic equipment to read fault codes and identify exactly what's causing the issue.",
        "Our experienced mechanics don't just read the code — they interpret it, find the root cause, and fix it properly. From engine management faults and ABS issues to airbag warnings and transmission problems.",
        "Don't ignore warning lights. What might seem minor could lead to expensive damage if left unresolved.",
      ]}
      bulletPoints={[
        "Advanced diagnostic equipment for all makes",
        "Engine management fault diagnosis",
        "ABS and traction control diagnostics",
        "Airbag warning light diagnosis",
        "Transmission fault finding",
        "Electrical fault diagnosis",
        "Clear explanation of faults found",
        "Competitive repair prices",
      ]}
      faqs={[
        { question: "What does the engine warning light mean?", answer: "It can indicate many issues, from a loose fuel cap to a serious fault. The only way to know is professional diagnostic equipment." },
        { question: "How long does a diagnostic check take?", answer: "A basic scan typically takes 30–60 minutes. Complex electrical issues may take longer." },
        { question: "Can you diagnose all car brands?", answer: "Yes, our equipment covers all major makes and models, both older and newer vehicles." },
      ]}
    />
  );
}
