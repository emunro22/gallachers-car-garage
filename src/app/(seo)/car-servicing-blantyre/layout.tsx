import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Servicing Blantyre | Full & Interim Services",
  description:
    "Affordable car servicing in Blantyre. Full and interim services for all makes and models. Oil changes, brake checks, multi-point inspection. Call 01698 711111.",
  keywords: ["car servicing Blantyre", "car service near me", "vehicle servicing South Lanarkshire", "full service Blantyre", "interim service Blantyre"],
  alternates: { canonical: "/car-servicing-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Car Servicing Blantyre", href: "/car-servicing-blantyre" }]} />
      <ServiceJsonLd name="Car Servicing Blantyre" description="Full and interim car servicing in Blantyre, South Lanarkshire. All makes and models." />
      {children}
    </>
  );
}
