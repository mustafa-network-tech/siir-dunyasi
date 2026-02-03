import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p style={{ margin: 0 }}>
          © {year} Mavi Kadraj
        </p>
        <p style={{ margin: "0.5rem 0 0", fontSize: "0.85rem" }}>
          <Link href="/">Ana Sayfa</Link>
          {" · "}
          <Link href="/siirler">Şiirler</Link>
          {" · "}
          <Link href="/about">Hakkımızda</Link>
          {" · "}
          <Link href="/contact">İletişim</Link>
        </p>
      </div>
    </footer>
  );
}
