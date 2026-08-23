import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Servicing Cambuslang | Full & Interim Services",
  description:
    "Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving Cambuslang and the surrounding area. Interim and full services for all makes and models.",
  keywords: ["car servicing Cambuslang", "car servicing near me", "car garage Cambuslang", "Cambuslang mechanic"],
  alternates: { canonical: "/car-servicing-cambuslang" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Car Servicing Cambuslang", href: "/car-servicing-cambuslang" }]} />
      <ServiceJsonLd name="Car Servicing Cambuslang" description="Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving Cambuslang and the surrounding area. Interim and full services for all makes and models." />
      {children}
    </>
  );
}
