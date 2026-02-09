import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Şiir Dünyası | Sevda, Hasret ve Ayrılık Şiirleri – Mavi Kadraj",
  description: "Mavi Kadraj imzasıyla sevda, hasret ve ayrılık temalı özgün şiirler.",

  openGraph: {
    title: "Şiir Dünyası | Sevda, Hasret ve Ayrılık Şiirleri – Mavi Kadraj",
    description: "Mavi Kadraj imzasıyla sevda, hasret ve ayrılık temalı özgün şiirler.",
    url: "https://www.siirdunyasi.com.tr/",
    siteName: "Şiir Dünyası",
    images: [
      {
        url: "https://www.siirdunyasi.com.tr/public/og-siir-dunyasi.jpg",
        width: 1200,
        height: 630
      }
    ],
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Şiir Dünyası – Mavi Kadraj",
    description: "Sevda, hasret ve ayrılık temalı özgün şiirler.",
    images: ["https://www.siirdunyasi.com.tr/public/og-siir-dunyasi.jpg"]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <div className="app-layout">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
