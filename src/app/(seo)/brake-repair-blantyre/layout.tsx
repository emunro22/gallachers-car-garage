import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Brake Repair Blantyre | Pads, Discs & Calipers Replaced",
  description:
    "Expert brake repair in Blantyre. Brake pads, discs, calipers replaced on all makes and models. Competitive prices, quality parts. Gallachers Car Garage. Call 01698 711111.",
  keywords: ["brake repair Blantyre", "brake pads Blantyre", "brake discs South Lanarkshire", "brakes near me", "brake replacement Blantyre"],
  alternates: { canonical: "/brake-repair-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Brake Repair Blantyre", href: "/brake-repair-blantyre" }]} />
      <ServiceJsonLd name="Brake Repair Blantyre" description="Expert brake pad, disc and caliper replacement in Blantyre, South Lanarkshire." />
      {children}
    </>
  );
}
