import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <nav className="site-footer__nav home-sans" aria-label="Alt menü">
          <Link href="/">Ana Sayfa</Link>
          <span className="site-footer__sep" aria-hidden="true">
            ·
          </span>
          <Link href="/siirler">Şiirler</Link>
          <span className="site-footer__sep" aria-hidden="true">
            ·
          </span>
          <Link href="/contact">İletişim</Link>
        </nav>
        <p className="site-footer__brand home-sans">
          © {year} Mavi Kadraj
        </p>
        <p className="site-footer__credit home-sans">
          <a
            href="https://mustafaoner.net"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__credit-link"
            aria-label="M.K. Digital Systems - mustafaoner.net"
          >
            M.K. Digital Systems
          </a>
        </p>
      </div>
    </footer>
  );
}
