import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Trusted Car Garage in Blantyre",
  description:
    "Learn about Gallachers Car Garage, a family-run auto repair centre in Blantyre, South Lanarkshire. Led by Darren Gallacher. Honest service, fair prices, expert mechanics. Call 01698 711111.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Gallachers Car Garage | Blantyre, South Lanarkshire",
    description:
      "Family-run auto repair centre in Blantyre. Honest, affordable vehicle repairs for all makes and models.",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      {children}
    </>
  );
}
