import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Suspension Repair | Shocks, Springs & Wishbones",
  description: "Expert suspension repair in Blantyre. Shock absorbers, springs, drop links, wishbones for all makes and models. Call 01698 711111.",
  alternates: { canonical: "/services/suspension" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Suspension Work"
      heroImage="/images/suspension.jpg"
      intro="Bumpy ride or knocking noises? Full suspension repairs including shock absorbers, springs, drop links, and wishbones."
      paragraphs={[
        "Worn suspension affects your vehicle's handling, comfort, and safety. We carry out full suspension repairs on all makes and models — from shock absorbers and coil springs to drop links, anti-roll bars, and wishbones.",
        "If you're hearing knocking or clunking over bumps, noticing uneven tyre wear, or your car feels bouncy or unstable, your suspension likely needs attention.",
        "With South Lanarkshire's roads, suspension wear is common. We use quality parts and ensure everything is fitted correctly for a safe, smooth ride.",
      ]}
      bulletPoints={[
        "Shock absorber replacement",
        "Coil spring replacement",
        "Drop link replacement",
        "Anti-roll bar bushes and links",
        "Wishbone and ball joint replacement",
        "Steering rack repairs",
        "Wheel alignment available",
        "All makes and models",
      ]}
      faqs={[
        { question: "How do I know if my suspension needs repair?", answer: "Knocking noises over bumps, a bouncy ride, dipping when braking, uneven tyre wear, or pulling to one side are all common signs." },
        { question: "Can worn suspension be dangerous?", answer: "Yes, significantly worn shocks, broken springs, or excessive play in suspension joints can be dangerous and should be repaired promptly." },
      ]}
    />
  );
}
