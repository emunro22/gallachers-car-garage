import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "MOT Blantyre | Approved MOT Testing Station, South Lanarkshire",
  description:
    "Book your MOT in Blantyre at Gallachers Car Garage. Approved MOT testing station with honest, thorough testing and competitive repair prices. Call 01698 711111.",
  keywords: ["MOT Blantyre", "MOT test Blantyre", "MOT near me", "MOT South Lanarkshire", "MOT testing station Blantyre", "cheap MOT Blantyre"],
  alternates: { canonical: "/mot-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "MOT Blantyre", href: "/mot-blantyre" }]} />
      <ServiceJsonLd name="MOT Testing Blantyre" description="Approved MOT testing station in Blantyre, South Lanarkshire. Honest, thorough MOT testing for cars and vans." />
      {children}
    </>
  );
}
