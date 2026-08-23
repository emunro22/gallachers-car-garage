import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Servicing Uddingston | Full & Interim Services",
  description:
    "Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving Uddingston and the surrounding area. Interim and full services for all makes and models.",
  keywords: ["car servicing Uddingston", "car servicing near me", "car garage Uddingston", "Uddingston mechanic"],
  alternates: { canonical: "/car-servicing-uddingston" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Car Servicing Uddingston", href: "/car-servicing-uddingston" }]} />
      <ServiceJsonLd name="Car Servicing Uddingston" description="Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving Uddingston and the surrounding area. Interim and full services for all makes and models." />
      {children}
    </>
  );
}
