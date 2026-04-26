import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://somesh-mesh.github.io"),
  title: "Somesh Meshram | Sr. Flutter & Android Developer",
  description:
    "Premium portfolio for Somesh Meshram, a Senior Flutter and Android Developer building high-performance mobile experiences from Nagpur, Maharashtra.",
  openGraph: {
    title: "Somesh Meshram | Sr. Flutter & Android Developer",
    description:
      "Engineering the future of mobile with Flutter, Kotlin, Java, and robust product execution.",
    url: "https://somesh-mesh.github.io",
    siteName: "Somesh Meshram Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Somesh Meshram | Sr. Flutter & Android Developer",
    description:
      "4+ years of building robust Android and Flutter solutions with a focus on performance and maintainability."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
