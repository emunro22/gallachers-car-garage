import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Engine Repair | Head Gaskets, Turbos & Rebuilds",
  description: "All engine work undertaken in Blantyre. Head gaskets, turbo replacement, engine rebuilds for petrol and diesel. Call 01698 711111.",
  alternates: { canonical: "/services/engine-work" },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Engine Work"
      heroImage="/images/engine-work.jpg"
      intro="All engine work undertaken — from head gaskets and turbo replacement to complete engine rebuilds. Petrol and diesel."
      paragraphs={[
        "Engine problems can be daunting, but we have the expertise and equipment to tackle any engine repair. Our experienced mechanics handle everything from minor work to complete rebuilds.",
        "Whether it's a blown head gasket, a faulty turbo, oil leaks, overheating, or poor performance, we'll diagnose the problem accurately and carry out the repair to get you back on the road.",
        "We work on all engine types — petrol, diesel, turbocharged, and naturally aspirated — across all makes and models.",
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
        { question: "How do I know if I have an engine problem?", answer: "Warning lights, unusual noises, loss of power, overheating, excessive smoke, oil leaks, or rough running are all signs." },
        { question: "Do you repair diesel engines?", answer: "Yes, we work on both petrol and diesel engines including turbocharged and common rail systems." },
      ]}
    />
  );
}
