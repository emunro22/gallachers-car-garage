import SeoServicePage from "@/components/SeoServicePage";

export default function BrakeRepairBlantyre() {
  return (
    <SeoServicePage
      title="Brake Repair Blantyre"
      heading="Brake Repair"
      headingHighlight="in Blantyre"
      intro="Expert brake repair and replacement in Blantyre. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices."
      paragraphs={[
        "Your brakes are your vehicle's most important safety feature. At Gallachers Car Garage in Blantyre, we provide comprehensive brake repair services including brake pads, discs, calipers, and brake fluid changes for all makes and models.",
        "If you're hearing squealing, grinding, or noticing your car pulling to one side when braking, don't delay — bring it to us for a thorough brake inspection. We'll diagnose the issue and give you an honest quote before carrying out any work.",
        "We use quality brake components and our experienced mechanics ensure every brake job is done to the highest standard. Your safety is our priority, and we never cut corners on brake work.",
      ]}
      bulletPoints={[
        "Brake pad replacement",
        "Brake disc replacement",
        "Brake caliper repair and replacement",
        "Brake fluid change",
        "Brake line inspection and repair",
        "Handbrake adjustment and repair",
        "Free brake inspection with every service",
        "All makes and models — cars and vans",
      ]}
      faqs={[
        {
          question: "How do I know if my brakes need replacing?",
          answer: "Common signs include squealing or grinding noises when braking, the car pulling to one side, a spongy brake pedal, or a brake warning light on the dashboard. If you notice any of these, book in for a brake check.",
        },
        {
          question: "How much does brake repair cost in Blantyre?",
          answer: "Costs depend on what needs replacing. We offer competitive prices and will always give you a clear quote before starting work. Call 01698 711111 for a free estimate.",
        },
      ]}
    />
  );
}
