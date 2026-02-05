import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Şiir Dünyası – Sevda, Hasret ve Ayrılık Şiirleri | Mavi Kadraj",
  description:
    "Mavi Kadraj imzalı sevda, hasret ve ayrılık temalı özgün şiirler. Şiir Dünyası’nda kalbe dokunan dizeleri keşfedin.",
};

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
