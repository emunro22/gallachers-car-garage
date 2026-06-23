import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Repair Services | MOT, Servicing, Brakes, Diagnostics",
  description:
    "Full range of car and van repair services in Blantyre, South Lanarkshire. MOT testing, servicing, brakes, diagnostics, clutches, timing belts, suspension, exhausts, engine work, tyres and batteries. Call 01698 711111.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services | Gallachers Car Garage, Blantyre",
    description:
      "MOT testing, servicing, brakes, diagnostics, clutches, timing belts, suspension, exhausts, engine work and more in Blantyre.",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <ServiceJsonLd
        name="Auto Repair Services"
        description="Full range of car and van repair services including MOT testing, servicing, brakes, diagnostics, clutches, timing belts, suspension, exhausts, engine work, tyres and batteries in Blantyre, South Lanarkshire."
      />
      {children}
    </>
  );
}
