import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Car & Van Repairs | All Makes & Models up to 3.5t",
  description: "Complete car and van repair services in Blantyre. All makes and models including light commercial vehicles up to 3.5 tonnes. Call 01698 711111.",
  alternates: { canonical: "/services/car-van-repairs" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Car & Van Repairs"
      heroImage="/images/car-van-repairs.jpg"
      intro="Complete car and van repair services for all makes and models, including light goods vehicles up to 3.5 tonnes. Honest prices, expert mechanics."
      paragraphs={[
        "At Gallachers Car Garage, we handle all types of mechanical repairs for cars, vans, and light commercial vehicles. Whether it's a simple fix or a major job, our experienced team will get you back on the road quickly and affordably.",
        "We work on every make and model — from family hatchbacks and saloons to Transit vans, Sprinters, and everything in between. Our workshop is fully equipped with modern tools and diagnostic equipment to handle both older and newer vehicles.",
        "We pride ourselves on transparent pricing. You'll always get an honest assessment of what needs doing and a clear quote before any work begins. No surprises, no unnecessary work.",
      ]}
      bulletPoints={[
        "All makes and models of cars",
        "Vans and light commercial vehicles up to 3.5t",
        "Engine and gearbox repairs",
        "Electrical fault finding",
        "Cooling system repairs",
        "Steering and driveshaft work",
        "Welding and underside repairs",
        "Free, no-obligation quotes",
      ]}
      faqs={[
        { question: "What types of vehicles do you repair?", answer: "We repair all makes and models of cars and vans, including light commercial vehicles up to 3.5 tonnes — Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, and more." },
        { question: "Do I need to book in advance?", answer: "We recommend calling ahead on 01698 711111, but we'll always try to fit in urgent repairs at short notice." },
        { question: "Do you offer free quotes?", answer: "Yes, we provide free, no-obligation quotes for all repair work. Call us or use our online contact form." },
      ]}
    />
  );
}
