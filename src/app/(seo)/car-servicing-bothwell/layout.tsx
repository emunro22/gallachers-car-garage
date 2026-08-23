import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Servicing Bothwell | Full & Interim Services",
  description:
    "Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving Bothwell and the surrounding area. Interim and full services for all makes and models.",
  keywords: ["car servicing Bothwell", "car servicing near me", "car garage Bothwell", "Bothwell mechanic"],
  alternates: { canonical: "/car-servicing-bothwell" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Car Servicing Bothwell", href: "/car-servicing-bothwell" }]} />
      <ServiceJsonLd name="Car Servicing Bothwell" description="Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving Bothwell and the surrounding area. Interim and full services for all makes and models." />
      {children}
    </>
  );
}
