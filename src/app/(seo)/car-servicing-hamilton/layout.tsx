import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Servicing Hamilton | Full & Interim Services",
  description:
    "Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving Hamilton and the surrounding area. Interim and full services for all makes and models.",
  keywords: ["car servicing Hamilton", "car servicing near me", "car garage Hamilton", "Hamilton mechanic"],
  alternates: { canonical: "/car-servicing-hamilton" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Car Servicing Hamilton", href: "/car-servicing-hamilton" }]} />
      <ServiceJsonLd name="Car Servicing Hamilton" description="Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving Hamilton and the surrounding area. Interim and full services for all makes and models." />
      {children}
    </>
  );
}
