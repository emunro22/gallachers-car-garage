import SeoServicePage from "@/components/SeoServicePage";

export default function MotBlantyre() {
  return (
    <SeoServicePage
      title="MOT Blantyre"
      heading="MOT Testing"
      headingHighlight="in Blantyre"
      intro="Book your MOT at Gallachers Car Garage — an approved MOT testing station in Blantyre, South Lanarkshire. Fast, fair, and thorough testing."
      paragraphs={[
        "Gallachers Car Garage is an official MOT-approved testing station in Blantyre, South Lanarkshire. Our certified technicians carry out thorough, professional MOT tests on all makes and models of cars and vans.",
        "We pride ourselves on honest MOT testing — if your vehicle fails, we'll clearly explain what needs fixing and offer competitive repair prices to get you back on the road. No unnecessary work, no inflated charges.",
        "Our customers regularly tell us we're the best place in Blantyre for MOTs, thanks to our fair approach and reasonable prices. With a 4.8-star Google rating from over 40 reviews, you can trust us with your vehicle.",
      ]}
      bulletPoints={[
        "Official MOT-approved testing station",
        "Cars and vans tested",
        "Clear explanation of any failures",
        "Competitive repair prices if work is needed",
        "No pressure, no unnecessary work",
        "Convenient Blantyre location",
        "Book by phone — quick turnaround",
      ]}
      faqs={[
        {
          question: "Where can I get an MOT in Blantyre?",
          answer: "Gallachers Car Garage is an MOT-approved testing station located at Unit 7a, 7b Forrest Street, Blantyre, G72 0JP. Call 01698 711111 to book your MOT.",
        },
        {
          question: "How much does an MOT cost at Gallachers?",
          answer: "We offer competitive MOT prices. Call us on 01698 711111 for our current rates. We're consistently one of the best-value MOT stations in South Lanarkshire.",
        },
        {
          question: "Can I wait while my MOT is done?",
          answer: "Yes, in most cases we can carry out your MOT while you wait. We recommend booking in advance to secure your preferred time slot.",
        },
      ]}
    />
  );
}
