import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Brake Repair East Kilbride | Pads, Discs & Calipers Replaced",
  description:
    "Expert brake repair and replacement for drivers in East Kilbride. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices.",
  keywords: ["brake repair East Kilbride", "brake repair near me", "car garage East Kilbride", "East Kilbride mechanic"],
  alternates: { canonical: "/brake-repair-east-kilbride" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Brake Repair East Kilbride", href: "/brake-repair-east-kilbride" }]} />
      <ServiceJsonLd name="Brake Repair East Kilbride" description="Expert brake repair and replacement for drivers in East Kilbride. Gallachers Car Garage keeps you safe on the road with quality brake parts at competitive prices." />
      {children}
    </>
  );
}
