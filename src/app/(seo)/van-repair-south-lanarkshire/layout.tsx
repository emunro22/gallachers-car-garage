import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Van Repair South Lanarkshire | Light Commercial Vehicle Repairs",
  description:
    "Van repair in South Lanarkshire. All makes and models up to 3.5 tonnes. MOTs, servicing, brakes, clutches, engine work. Gallachers Car Garage, Blantyre. Call 01698 711111.",
  keywords: ["van repair South Lanarkshire", "van mechanic Blantyre", "light commercial vehicle repair", "van MOT South Lanarkshire", "Transit repair near me"],
  alternates: { canonical: "/van-repair-south-lanarkshire" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Van Repair South Lanarkshire", href: "/van-repair-south-lanarkshire" }]} />
      <ServiceJsonLd name="Van Repair South Lanarkshire" description="Van and light commercial vehicle repairs in South Lanarkshire, up to 3.5 tonnes." />
      {children}
    </>
  );
}
