import SeoServicePage from "@/components/SeoServicePage";

export default function WhenToReplaceATimingBelt() {
  return (
    <SeoServicePage
      title="When to Replace a Timing Belt"
      heading="When to Replace a"
      headingHighlight="Timing Belt"
      intro="Your timing belt keeps your engine's valves and pistons moving in sync. Left too long, it can snap without warning — and on most engines, that means expensive damage. Here's how to know when it's due."
      paragraphs={[
        "The timing belt (or wet belt, on some newer engines) is one of those parts you don't think about until it fails — and by then it's often too late. Unlike a warning light or a squeal that tells you brakes need attention, a worn timing belt usually gives no notice before it snaps.",
        "Most manufacturers specify a replacement interval, typically somewhere between 60,000 and 100,000 miles, or every 5 to 10 years — whichever comes first. That interval is based on age as well as mileage, because the rubber degrades over time even on a car that's rarely driven. Check your handbook or service history for the exact figure for your model.",
        "On an interference engine — the majority of modern cars — a snapped timing belt lets the pistons and valves collide. That usually means a damaged cylinder head, bent valves, and sometimes a wrecked engine, often running into thousands of pounds in repairs. A replacement belt, by comparison, is a routine and predictable service cost.",
        "If you're not sure when yours was last done, or you've bought a used car with no clear history, it's worth getting it checked. We can look up the recommended interval for your exact make and model and inspect the belt's condition where possible.",
      ]}
      bulletPoints={[
        "Check your manufacturer's recommended mileage and age interval",
        "A belt can fail on age alone, even with low mileage",
        "Interference engines risk major damage if the belt snaps",
        "Water pumps are often replaced at the same time — ask us about combining the job",
        "No service history? We can check what's recommended for your model",
        "Unusual ticking noises from the engine can be an early warning sign",
      ]}
      bulletHeading="What to Know"
      relatedLink={{
        text: "Due a replacement, or not sure when yours was last done?",
        label: "See our timing belt replacement service in Blantyre →",
        href: "/timing-belt-replacement-blantyre",
      }}
      faqs={[
        {
          question: "How much does timing belt replacement cost?",
          answer: "It depends on the make and model, and whether the water pump is replaced at the same time (often recommended, as it's already exposed during the job). Call 01698 711111 and we'll give you a clear quote for your specific vehicle.",
        },
        {
          question: "What happens if a timing belt snaps while driving?",
          answer: "On most modern engines (interference engines), a snapped belt causes the pistons and valves to collide, often resulting in serious engine damage. It can happen with no warning, which is why sticking to the recommended replacement interval matters.",
        },
        {
          question: "Is a timing chain the same as a timing belt?",
          answer: "No — a timing chain is metal and generally lasts the life of the engine, while a timing belt or wet belt is made of reinforced rubber and needs replacing at set intervals. If you're unsure which your car has, we can check for you.",
        },
      ]}
    />
  );
}
