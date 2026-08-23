import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Signs Your Clutch Is Failing | Gallachers Car Garage",
  description:
    "Slipping, a high biting point, a burning smell — learn the warning signs of a failing clutch and what to do about it. Gallachers Car Garage, Blantyre. Call 01698 711111.",
  keywords: ["signs of a failing clutch", "clutch slipping symptoms", "clutch replacement Blantyre", "when to replace clutch"],
  alternates: { canonical: "/guides/signs-your-clutch-is-failing" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/guides" },
          { name: "Signs Your Clutch Is Failing", href: "/guides/signs-your-clutch-is-failing" },
        ]}
      />
      {children}
    </>
  );
}
