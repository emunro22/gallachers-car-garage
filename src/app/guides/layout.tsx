import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Service Guides | Gallachers Car Garage",
  description:
    "Straightforward car advice from our mechanics in Blantyre — timing belts, clutches and more. What to look out for, and when to get it checked.",
  alternates: { canonical: "/guides" },
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
        ]}
      />
      {children}
    </>
  );
}
