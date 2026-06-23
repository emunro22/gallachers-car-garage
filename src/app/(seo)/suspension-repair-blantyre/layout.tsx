import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Suspension Repair Blantyre | Shocks, Springs & More",
  description:
    "Expert suspension repair in Blantyre. Shock absorbers, springs, drop links, wishbones replaced. All makes and models. Gallachers Car Garage. Call 01698 711111.",
  keywords: ["suspension repair Blantyre", "shock absorbers Blantyre", "suspension near me", "coil springs South Lanarkshire", "suspension work Blantyre"],
  alternates: { canonical: "/suspension-repair-blantyre" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Suspension Repair Blantyre", href: "/suspension-repair-blantyre" }]} />
      <ServiceJsonLd name="Suspension Repair Blantyre" description="Full suspension repair service in Blantyre including shock absorbers, springs, and wishbones." />
      {children}
    </>
  );
}
