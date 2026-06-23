import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { BUSINESS } from "@/lib/constants";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${BUSINESS.domain}`),
  title: {
    default: "Gallachers Car Garage | MOT, Servicing & Car Repairs in Blantyre, South Lanarkshire",
    template: "%s | Gallachers Car Garage, Blantyre",
  },
  description:
    "Trusted car and van repair garage in Blantyre, South Lanarkshire. MOT testing, servicing, diagnostics, brakes, clutches, timing belts, suspension, exhausts and more. Call 01698 711111.",
  keywords: [
    "car repair Blantyre",
    "MOT Blantyre",
    "car mechanic South Lanarkshire",
    "garage Blantyre",
    "car servicing near me",
    "brake repair Blantyre",
    "diagnostics Blantyre",
    "clutch repair South Lanarkshire",
    "timing belt replacement",
    "van repair South Lanarkshire",
    "exhaust repair Blantyre",
    "suspension repair",
    "engine repair Blantyre",
    "tyres batteries Blantyre",
    "car repair near me",
    "garage near me Blantyre",
    "auto repair South Lanarkshire",
    "Gallachers Car Garage",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: BUSINESS.name,
    title: "Gallachers Car Garage | MOT, Servicing & Repairs in Blantyre",
    description:
      "Trusted auto repair centre in Blantyre. MOT testing, full servicing, diagnostics, brakes, clutches, timing belts and more. 4.8★ rated. Call 01698 711111.",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "Gallachers Car Garage" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallachers Car Garage | Blantyre",
    description: "MOT, servicing & car repairs in Blantyre, South Lanarkshire. Call 01698 711111.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
