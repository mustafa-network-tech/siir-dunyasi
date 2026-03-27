import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Şiir Dünyası",
  description: "Şiir Dünyası – Mavi Kadraj",
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
