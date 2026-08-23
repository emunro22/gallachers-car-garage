import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "When to Replace a Timing Belt | Gallachers Car Garage",
  description:
    "Not sure when your timing belt is due? Learn the mileage and age intervals, what happens if it snaps, and how to get it checked in Blantyre. Call 01698 711111.",
  keywords: ["timing belt replacement", "when to replace timing belt", "timing belt interval", "wet belt replacement Blantyre"],
  alternates: { canonical: "/guides/when-to-replace-a-timing-belt" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "When to Replace a Timing Belt", href: "/guides/when-to-replace-a-timing-belt" },
        ]}
      />
      {children}
    </>
  );
}
