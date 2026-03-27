 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isPoemsRoute = pathname === "/siirler" || pathname?.startsWith("/siirler/");

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className={`site-header${isPoemsRoute ? " site-header--poems" : ""}`}>
      <div className="site-header-inner">
        <h1 className="site-title">
          <Link href="/">Şiir Dünyası</Link>
        </h1>
        <nav>
          <ul className="nav-menu">
            <li>
              <Link href="/" aria-current={isActive("/") ? "page" : undefined}>
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/siirler" aria-current={isActive("/siirler") ? "page" : undefined}>
                Şiirler
              </Link>
            </li>
            <li>
              <Link href="/contact" aria-current={isActive("/contact") ? "page" : undefined}>
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
