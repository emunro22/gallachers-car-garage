import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Clutch Repair Blantyre | Clutch Replacement, South Lanarkshire",
  description:
    "Expert clutch repair and replacement in Blantyre. Dual mass flywheel, clutch kit replacement for all cars and vans. Competitive prices. Call 01698 711111.",
  keywords: ["clutch repair Blantyre", "clutch replacement South Lanarkshire", "clutch near me", "dual mass flywheel Blantyre", "clutch slipping repair"],
  alternates: { canonical: "/clutch-repair-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Clutch Repair Blantyre", href: "/clutch-repair-blantyre" }]} />
      <ServiceJsonLd name="Clutch Repair Blantyre" description="Complete clutch replacement and repair in Blantyre, South Lanarkshire." />
      {children}
    </>
  );
}
