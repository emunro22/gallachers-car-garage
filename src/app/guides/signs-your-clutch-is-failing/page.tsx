import SeoServicePage from "@/components/SeoServicePage";

export default function SignsYourClutchIsFailing() {
  return (
    <SeoServicePage
      title="Signs Your Clutch Is Failing"
      heading="Signs Your Clutch"
      headingHighlight="Is Failing"
      intro="Clutches wear gradually, so the warning signs are easy to miss until a gear change fails you at the worst moment. Here's what to look and feel for."
      paragraphs={[
        "Unlike a sudden breakdown, clutch wear is usually gradual: a slightly higher biting point one month, a faint slip the next. Most drivers only notice something's wrong once it starts affecting how the car drives day to day.",
        "The clutch connects the engine to the gearbox, and every gear change relies on it engaging and releasing cleanly. As the friction plate wears down, it loses grip, and you start to see symptoms like slipping under load, a spongy or high pedal, or difficulty getting the car into gear.",
        "How long a clutch lasts depends heavily on driving style and conditions: stop-start town driving and frequent hill starts wear a clutch faster than motorway miles. There's no fixed mileage interval the way there is for a timing belt, so it's about recognising the signs rather than watching the clock.",
        "Catching it early usually means a simpler, cheaper repair. Leave it too long and a slipping clutch can damage the flywheel too, turning a clutch replacement into a bigger job.",
      ]}
      bulletPoints={[
        "Slipping: engine revs rise without matching acceleration, especially uphill or overtaking",
        "A biting point that's crept noticeably higher than usual",
        "Difficulty selecting gears, or the car jumping out of gear",
        "A burning smell, particularly after hill starts or in traffic",
        "A spongy, soft, or vibrating clutch pedal",
        "Unusual noises when the pedal is pressed or released",
      ]}
      bulletHeading="Warning Signs to Watch For"
      relatedLink={{
        text: "Noticed any of these signs?",
        label: "See our clutch repair service in Blantyre →",
        href: "/clutch-repair-blantyre",
      }}
      faqs={[
        {
          question: "How long should a clutch last?",
          answer: "There's no fixed mileage: it depends on driving style and conditions. Clutches used mostly for motorway driving can last well over 80,000 miles, while frequent stop-start town driving or towing can wear one out much sooner. Watch for the warning signs rather than a specific interval.",
        },
        {
          question: "Can I keep driving with a slipping clutch?",
          answer: "You can for a short while, but it will get worse and can eventually leave you unable to drive at all, or cause damage to the flywheel. It's best to get it checked as soon as you notice slipping or a change in the biting point.",
        },
        {
          question: "How much does clutch replacement cost?",
          answer: "It varies by vehicle, and whether the dual mass flywheel needs replacing alongside the clutch. Call 01698 711111 and we'll inspect it and give you an honest, upfront quote.",
        },
      ]}
    />
  );
}
