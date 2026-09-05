import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for Gallachers Car Garage, Blantyre: servicing, repairs and use of this website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Terms & Conditions", href: "/terms" },
        ]}
      />
      {children}
    </>
  );
}
