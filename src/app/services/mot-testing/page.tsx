import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "MOT Testing | Approved Testing Station in Blantyre",
  description: "MOT testing at our approved station in Blantyre. Honest, thorough testing with competitive repair prices. Book your MOT — call 01698 711111.",
  alternates: { canonical: "/services/mot-testing" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="MOT Testing"
      heroImage="/images/mot-testing.jpg"
      intro="Official MOT-approved testing station in Blantyre. Thorough, honest testing with competitive repair prices if work is needed."
      paragraphs={[
        "Gallachers Car Garage is an official MOT-approved testing station. Our certified technicians carry out thorough, professional MOT tests on all makes and models of cars and vans.",
        "If your vehicle fails, we'll clearly explain what needs attention and offer competitive repair prices to get you through. No pressure, no unnecessary work — just honest advice.",
        "We're consistently rated as one of the best places in Blantyre for MOTs, with customers praising our fair approach and reasonable prices.",
      ]}
      bulletPoints={[
        "Official MOT-approved testing station",
        "Cars and vans tested",
        "Clear explanation of any advisories or failures",
        "Competitive repair prices",
        "No pressure, no unnecessary work",
        "Quick turnaround — often same day",
        "Book by phone for your preferred time",
        "Service book stamped",
      ]}
      faqs={[
        { question: "How much does an MOT cost?", answer: "We offer competitive MOT prices. Call us on 01698 711111 for our current rates." },
        { question: "Can I wait while my MOT is done?", answer: "Yes, in most cases we can carry out your MOT while you wait. Booking in advance helps secure your preferred slot." },
        { question: "What if my car fails the MOT?", answer: "We'll explain exactly what failed and give you a competitive quote for the repair work needed to pass." },
      ]}
    />
  );
}
