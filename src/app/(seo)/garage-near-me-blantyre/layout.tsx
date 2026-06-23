import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Garage Near Me Blantyre | Local Auto Repair, South Lanarkshire",
  description:
    "Looking for a garage near me in Blantyre? Gallachers Car Garage offers MOTs, servicing, repairs for all makes. 4.8★ rated, honest prices. Call 01698 711111.",
  keywords: ["garage near me Blantyre", "garage near me", "local garage South Lanarkshire", "auto repair near me", "car garage Blantyre", "mechanic near me Blantyre"],
  alternates: { canonical: "/garage-near-me-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Garage Near Me Blantyre", href: "/garage-near-me-blantyre" }]} />
      <ServiceJsonLd name="Garage Near Me - Blantyre" description="Local trusted auto repair garage in Blantyre, South Lanarkshire. MOTs, servicing, and all repairs." />
      {children}
    </>
  );
}
