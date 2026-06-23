import SeoServicePage from "@/components/SeoServicePage";

export default function TyresBatteriesBlantyre() {
  return (
    <SeoServicePage
      title="Tyres & Batteries Blantyre"
      heading="Tyres & Batteries"
      headingHighlight="in Blantyre"
      intro="Quality tyres at competitive prices and battery testing and replacement in Blantyre. Gallachers Car Garage has you covered."
      paragraphs={[
        "Whether you need new tyres or a battery replacement, Gallachers Car Garage in Blantyre offers quality products at competitive prices. We supply and fit tyres for all makes and models of cars and vans.",
        "We can advise on the right tyre for your vehicle and driving style, whether you're looking for budget, mid-range, or premium options. All tyres are professionally fitted and balanced, and we'll check your tyre pressures and tread depth while we're at it.",
        "If your car is struggling to start or your battery warning light is on, bring it in for a free battery test. We stock batteries for most vehicles and can have you back on the road in no time.",
      ]}
      bulletPoints={[
        "New tyres supplied and fitted",
        "Budget, mid-range, and premium options",
        "Professional wheel balancing",
        "Tyre pressure and tread depth checks",
        "Battery testing and replacement",
        "Batteries for all vehicle types",
        "Competitive prices",
        "Same-day service available",
      ]}
      faqs={[
        {
          question: "How do I know if I need new tyres?",
          answer: "The legal minimum tread depth is 1.6mm across the central three-quarters of the tyre. We recommend replacing tyres when they reach 3mm for optimal safety. Look for uneven wear, bulges, or cuts as well.",
        },
        {
          question: "How long does a car battery last?",
          answer: "Most car batteries last 3-5 years. If your car is slow to start, your battery warning light is on, or your battery is over 4 years old, it's worth having it tested.",
        },
      ]}
    />
  );
}
