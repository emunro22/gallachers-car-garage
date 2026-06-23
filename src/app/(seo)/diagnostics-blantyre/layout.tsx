import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Car Diagnostics Blantyre | Engine Warning Light Diagnosis",
  description:
    "Advanced car diagnostics in Blantyre. Engine warning light, ABS, airbag fault finding for all makes and models. Gallachers Car Garage. Call 01698 711111.",
  keywords: ["diagnostics Blantyre", "car diagnostics near me", "engine warning light Blantyre", "fault code reading South Lanarkshire", "car diagnostic check"],
  alternates: { canonical: "/diagnostics-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Diagnostics Blantyre", href: "/diagnostics-blantyre" }]} />
      <ServiceJsonLd name="Car Diagnostics Blantyre" description="Advanced vehicle diagnostics in Blantyre, South Lanarkshire. Engine management, ABS, and electrical fault finding." />
      {children}
    </>
  );
}
