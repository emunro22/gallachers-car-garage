import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Timing Belt Replacement Blantyre | Wet Belt & Cambelt Change",
  description:
    "Timing belt and wet belt replacement in Blantyre. Protect your engine from costly damage. All makes and models. Gallachers Car Garage. Call 01698 711111.",
  keywords: ["timing belt replacement Blantyre", "wet belt replacement", "cambelt change South Lanarkshire", "timing belt near me", "Ford EcoBoost wet belt"],
  alternates: { canonical: "/timing-belt-replacement-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Timing Belt Replacement", href: "/timing-belt-replacement-blantyre" }]} />
      <ServiceJsonLd name="Timing Belt Replacement Blantyre" description="Timing belt and wet belt replacement in Blantyre. Protect your engine from costly failure." />
      {children}
    </>
  );
}
