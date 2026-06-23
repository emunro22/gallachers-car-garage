import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Mechanic South Lanarkshire | Trusted Garage in Blantyre",
  description:
    "Experienced car mechanic in South Lanarkshire. Gallachers Car Garage in Blantyre offers expert repairs, MOTs, servicing and diagnostics. 4.8★ rated. Call 01698 711111.",
  keywords: ["car mechanic South Lanarkshire", "mechanic Blantyre", "car mechanic near me", "auto mechanic South Lanarkshire", "vehicle mechanic Hamilton"],
  alternates: { canonical: "/car-mechanic-south-lanarkshire" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Car Mechanic South Lanarkshire", href: "/car-mechanic-south-lanarkshire" }]} />
      <ServiceJsonLd name="Car Mechanic South Lanarkshire" description="Experienced car mechanics in South Lanarkshire, based in Blantyre. All makes and models, honest service." />
      {children}
    </>
  );
}
