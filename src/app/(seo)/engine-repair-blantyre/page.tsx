import SeoServicePage from "@/components/SeoServicePage";

export default function EngineRepairBlantyre() {
  return (
    <SeoServicePage
      title="Engine Repair Blantyre"
      heading="Engine Repair"
      headingHighlight="in Blantyre"
      intro="All engine work undertaken at Gallachers Car Garage in Blantyre. From head gaskets to turbo replacement, our experienced mechanics have you covered."
      paragraphs={[
        "Engine problems can be daunting, but at Gallachers Car Garage in Blantyre, we have the expertise and equipment to tackle any engine repair. Our experienced mechanics handle everything from minor engine work to complete rebuilds.",
        "Whether it's a blown head gasket, a faulty turbo, oil leaks, overheating issues, or poor performance, we'll diagnose the problem accurately and carry out the repair to get you back on the road reliably.",
        "We work on all engine types — petrol, diesel, turbocharged, and naturally aspirated — across all makes and models of cars and vans. No job too big or too small.",
      ]}
      bulletPoints={[
        "Head gasket replacement",
        "Turbo repair and replacement",
        "Engine rebuild and reconditioning",
        "Oil leak diagnosis and repair",
        "Overheating diagnosis and repair",
        "Injector and fuel system repairs",
        "Engine mount replacement",
        "All petrol and diesel engines",
      ]}
      faqs={[
        {
          question: "How do I know if I have an engine problem?",
          answer: "Common signs include warning lights on the dashboard, unusual noises, loss of power, overheating, excessive smoke from the exhaust, oil leaks, or rough running. If you notice anything unusual, bring it to us promptly to avoid further damage.",
        },
        {
          question: "Do you repair diesel engines?",
          answer: "Yes, we work on both petrol and diesel engines including turbocharged and common rail diesel systems. We have diagnostic equipment to handle modern diesel engine management.",
        },
      ]}
    />
  );
}
