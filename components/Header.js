import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <h1 className="site-title">
          <Link href="/">Şiir Dünyası</Link>
        </h1>
        <nav>
          <ul className="nav-menu">
            <li><Link href="/">Ana Sayfa</Link></li>
            <li><Link href="/siirler">Şiirler</Link></li>
            <li><Link href="/about">Hakkımızda</Link></li>
            <li><Link href="/contact">İletişim</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
