import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Brake Repair Hamilton | Pads, Discs & Calipers Replaced",
  description:
    "Expert brake repair and replacement for drivers in Hamilton. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices.",
  keywords: ["brake repair Hamilton", "brake repair near me", "car garage Hamilton", "Hamilton mechanic"],
  alternates: { canonical: "/brake-repair-hamilton" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Brake Repair Hamilton", href: "/brake-repair-hamilton" }]} />
      <ServiceJsonLd name="Brake Repair Hamilton" description="Expert brake repair and replacement for drivers in Hamilton. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices." />
      {children}
    </>
  );
}
