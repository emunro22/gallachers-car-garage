import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Brake Repair Bothwell | Pads, Discs & Calipers Replaced",
  description:
    "Expert brake repair and replacement for drivers in Bothwell. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices.",
  keywords: ["brake repair Bothwell", "brake repair near me", "car garage Bothwell", "Bothwell mechanic"],
  alternates: { canonical: "/brake-repair-bothwell" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Brake Repair Bothwell", href: "/brake-repair-bothwell" }]} />
      <ServiceJsonLd name="Brake Repair Bothwell" description="Expert brake repair and replacement for drivers in Bothwell. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices." />
      {children}
    </>
  );
}
