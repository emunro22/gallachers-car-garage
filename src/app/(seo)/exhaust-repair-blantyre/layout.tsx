import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Exhaust Repair Blantyre | Catalytic Converter & DPF",
  description:
    "Exhaust repair and replacement in Blantyre. Catalytic converters, DPF, back boxes, full systems. All makes and models. Gallachers Car Garage. Call 01698 711111.",
  keywords: ["exhaust repair Blantyre", "exhaust replacement near me", "catalytic converter Blantyre", "DPF cleaning South Lanarkshire", "exhaust system Blantyre"],
  alternates: { canonical: "/exhaust-repair-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Exhaust Repair Blantyre", href: "/exhaust-repair-blantyre" }]} />
      <ServiceJsonLd name="Exhaust Repair Blantyre" description="Full exhaust system repair and replacement in Blantyre, including catalytic converters and DPF." />
      {children}
    </>
  );
}
