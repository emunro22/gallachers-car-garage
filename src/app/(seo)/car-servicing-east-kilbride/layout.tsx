import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Servicing East Kilbride | Full & Interim Services",
  description:
    "Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving East Kilbride and the surrounding area. Interim and full services for all makes and models.",
  keywords: ["car servicing East Kilbride", "car servicing near me", "car garage East Kilbride", "East Kilbride mechanic"],
  alternates: { canonical: "/car-servicing-east-kilbride" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Car Servicing East Kilbride", href: "/car-servicing-east-kilbride" }]} />
      <ServiceJsonLd name="Car Servicing East Kilbride" description="Keep your car running smoothly with affordable servicing at Gallachers Car Garage, serving East Kilbride and the surrounding area. Interim and full services for all makes and models." />
      {children}
    </>
  );
}
