import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Customer Reviews | 4.8★ Rated Garage in Blantyre",
  description:
    "Read 40+ Google reviews from happy customers. Gallachers Car Garage in Blantyre is rated 4.8/5 for honest service, quality repairs, and competitive prices. South Lanarkshire's trusted garage.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Reviews | Gallachers Car Garage, Blantyre",
    description:
      "4.8/5 rated from 40+ Google reviews. See what customers say about our honest, quality service.",
  },
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Reviews", href: "/reviews" },
        ]}
      />
      {children}
    </>
  );
}
