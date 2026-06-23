import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Repair Near Me | Trusted Garage in Blantyre, South Lanarkshire",
  description:
    "Looking for car repair near me? Gallachers Car Garage in Blantyre offers expert car and van repairs, MOTs, servicing, brakes, clutches and more. Competitive prices. Call 01698 711111.",
  keywords: ["car repair near me", "car repair Blantyre", "car mechanic near me", "garage near me South Lanarkshire", "vehicle repair Blantyre"],
  alternates: { canonical: "/car-repair-near-me" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Car Repair Near Me", href: "/car-repair-near-me" }]} />
      <ServiceJsonLd name="Car Repair Near Me - Blantyre" description="Expert car and van repair service in Blantyre, South Lanarkshire. All makes and models, competitive prices." />
      {children}
    </>
  );
}
