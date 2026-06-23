import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Clutch Repair & Replacement | Dual Mass Flywheel",
  description: "Expert clutch repair and replacement in Blantyre. Clutch kits, dual mass flywheels for all cars and vans. Competitive prices. Call 01698 711111.",
  alternates: { canonical: "/services/clutches" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Clutch Repairs"
      heroImage="/images/clutches.jpg"
      intro="Clutch slipping or biting high? Complete clutch replacement and repair including dual mass flywheels at competitive prices."
      paragraphs={[
        "A worn clutch makes driving difficult and dangerous. We carry out complete clutch replacement and repair on all makes and models of cars and vans.",
        "Whether you need a full clutch kit replacement, a dual mass flywheel swap, or a clutch cable adjustment, our experienced mechanics have the skills and equipment to get the job done efficiently.",
        "Clutch replacement costs vary significantly between garages. We pride ourselves on fair, competitive pricing without compromising on quality.",
      ]}
      bulletPoints={[
        "Complete clutch kit replacement",
        "Dual mass flywheel replacement",
        "Clutch cable adjustment and replacement",
        "Slave and master cylinder repair",
        "Clutch fluid change",
        "All makes and models — cars and vans",
        "Quality parts used",
        "Competitive pricing",
      ]}
      faqs={[
        { question: "How do I know if my clutch needs replacing?", answer: "Slipping (revs rise without acceleration), a high biting point, difficulty selecting gears, or unusual noises when pressing the pedal." },
        { question: "How long does a clutch replacement take?", answer: "Typically 4–8 hours depending on the vehicle. We aim to complete most jobs within a day." },
      ]}
    />
  );
}
