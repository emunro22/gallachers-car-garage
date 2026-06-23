import SeoServicePage from "@/components/SeoServicePage";

export default function DiagnosticsBlantyre() {
  return (
    <SeoServicePage
      title="Diagnostics Blantyre"
      heading="Car Diagnostics"
      headingHighlight="in Blantyre"
      intro="Engine warning light on? Gallachers Car Garage in Blantyre has advanced diagnostic equipment to quickly find and fix the problem."
      paragraphs={[
        "Modern vehicles rely on complex electronic systems, and when something goes wrong, a warning light on your dashboard is often the first sign. At Gallachers Car Garage in Blantyre, we use advanced diagnostic equipment to read fault codes and pinpoint exactly what's causing the issue.",
        "Our experienced mechanics can diagnose engine management faults, ABS issues, airbag warnings, transmission problems, and much more. We don't just read the code — we interpret it, find the root cause, and fix it properly.",
        "Don't ignore warning lights. What might seem minor could lead to expensive damage if left unresolved. Bring your vehicle to us for a thorough diagnostic check and get the answers you need.",
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
        {
          question: "What does the engine warning light mean?",
          answer: "The engine warning light can indicate many different issues, from a loose fuel cap to a serious engine fault. The only way to know for sure is to have it diagnosed with professional equipment. Call us on 01698 711111 to book a diagnostic check.",
        },
        {
          question: "How long does a diagnostic check take?",
          answer: "A basic diagnostic scan typically takes 30-60 minutes. More complex electrical fault finding may take longer depending on the issue.",
        },
      ]}
    />
  );
}
