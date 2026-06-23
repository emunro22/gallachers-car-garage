import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Engine Repair Blantyre | Head Gaskets, Turbos & Rebuilds",
  description:
    "All engine work undertaken in Blantyre. Head gaskets, turbo replacement, engine rebuilds. Petrol and diesel. Gallachers Car Garage. Call 01698 711111.",
  keywords: ["engine repair Blantyre", "head gasket Blantyre", "turbo replacement South Lanarkshire", "engine rebuild near me", "diesel engine repair Blantyre"],
  alternates: { canonical: "/engine-repair-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Engine Repair Blantyre", href: "/engine-repair-blantyre" }]} />
      <ServiceJsonLd name="Engine Repair Blantyre" description="Complete engine repair service in Blantyre. Head gaskets, turbos, rebuilds for all makes and models." />
      {children}
    </>
  );
}
