import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us | Get a Quote for Car Repairs in Blantyre",
  description:
    "Contact Gallachers Car Garage in Blantyre, South Lanarkshire. Call 01698 711111 for Servicing, diagnostics and all car repairs. Unit 7a, 7b Forrest Street, Blantyre, G72 0JP.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Gallachers Car Garage | Blantyre",
    description:
      "Get in touch for a free quote. Call 01698 711111 or send us an enquiry online.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      {children}
    </>
  );
}
