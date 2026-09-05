import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog | Gallachers Car Garage",
  description:
    "News and advice from Gallachers Car Garage in Blantyre: servicing, diagnostics, brakes, and seasonal car care from our mechanics.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      {children}
    </>
  );
}
