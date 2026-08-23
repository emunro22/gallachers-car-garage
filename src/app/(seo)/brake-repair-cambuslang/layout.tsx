import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Brake Repair Cambuslang | Pads, Discs & Calipers Replaced",
  description:
    "Expert brake repair and replacement for drivers in Cambuslang. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices.",
  keywords: ["brake repair Cambuslang", "brake repair near me", "car garage Cambuslang", "Cambuslang mechanic"],
  alternates: { canonical: "/brake-repair-cambuslang" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Brake Repair Cambuslang", href: "/brake-repair-cambuslang" }]} />
      <ServiceJsonLd name="Brake Repair Cambuslang" description="Expert brake repair and replacement for drivers in Cambuslang. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices." />
      {children}
    </>
  );
}
