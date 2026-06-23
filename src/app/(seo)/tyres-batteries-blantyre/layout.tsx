import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tyres & Batteries Blantyre | Supply & Fit, South Lanarkshire",
  description:
    "Quality tyres and batteries in Blantyre. Supply and fit tyres for all vehicles. Battery testing and replacement. Gallachers Car Garage. Call 01698 711111.",
  keywords: ["tyres Blantyre", "batteries Blantyre", "new tyres near me", "car battery replacement South Lanarkshire", "cheap tyres Blantyre"],
  alternates: { canonical: "/tyres-batteries-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tyres & Batteries Blantyre", href: "/tyres-batteries-blantyre" }]} />
      <ServiceJsonLd name="Tyres & Batteries Blantyre" description="Quality tyres supplied and fitted plus battery testing and replacement in Blantyre." />
      {children}
    </>
  );
}
