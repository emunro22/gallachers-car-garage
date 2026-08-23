import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Brake Repair Uddingston | Pads, Discs & Calipers Replaced",
  description:
    "Expert brake repair and replacement for drivers in Uddingston. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices.",
  keywords: ["brake repair Uddingston", "brake repair near me", "car garage Uddingston", "Uddingston mechanic"],
  alternates: { canonical: "/brake-repair-uddingston" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Brake Repair Uddingston", href: "/brake-repair-uddingston" }]} />
      <ServiceJsonLd name="Brake Repair Uddingston" description="Expert brake repair and replacement for drivers in Uddingston. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices." />
      {children}
    </>
  );
}
