import Link from "next/link";
import HomeHero from "@/components/home/HomeHero";
import EditorialRingsCluster from "@/components/home/EditorialRingsCluster";
import ManifestoLetterDesk from "@/components/home/ManifestoLetterDesk";
import poems from "@/data/poems";
import { poemExcerpt } from "@/lib/poemExcerpt";

const EDITORIAL_RING_PATCHES = ["nw", "n", "ne", "c", "sw", "se"];

export default function HomePage() {
  const featured = poems[0];
  const previews = poems.slice(1, 4);

  const featuredBody = poemExcerpt(featured, 4);

  return (
    <div className="home-editorial">
      <div className="home-atmosphere" aria-hidden="true" />
      <HomeHero />

      <div className="home-editorial-body">
        <div className="home-editorial-body__layers" aria-hidden="true">
          <div className="home-editorial-body__bloom home-editorial-body__bloom--1" />
          <div className="home-editorial-body__bloom home-editorial-body__bloom--2" />
          {EDITORIAL_RING_PATCHES.map((patch) => (
            <EditorialRingsCluster key={patch} patchId={patch} />
          ))}
        </div>

        <section className="home-manifesto" id="manifesto" aria-labelledby="manifesto-heading">
          <ManifestoLetterDesk />
          <div className="home-manifesto__inner">
            <h2 id="manifesto-heading" className="home-manifesto__title">
              Şiirin Yeri, Gönlümün Evi
            </h2>

            <div className="home-manifesto__stanza">
              <p className="home-manifesto__line">
                Burada kelime vitrinde değil; <em>yürekten süzülen bir iz</em> gibi durur.
              </p>
              <p className="home-manifesto__aside home-sans">
                Sade bir okuma alanı — sessizlikte açılan, yavaş bir sayfa.
              </p>
            </div>

            <div className="home-manifesto__breath" aria-hidden="true" />

            <div className="home-manifesto__stanza">
              <p className="home-manifesto__line">
                Tüketmek için değil; <strong>durmak</strong>, dinlemek ve hissetmek için buradayız.
              </p>
              <p className="home-manifesto__aside home-sans">
                Buraya hoş geldiniz. Aceleye yer vermez.
              </p>
            </div>
          </div>
        </section>

        <section className="home-flow home-sans" aria-label="Temalar ve şiirler">
          <div className="home-flow__inner">
            <span className="home-flow__hint">Yönler</span>
            <nav className="home-flow__themes" aria-label="Kategori girişleri">
              <Link href="/siirler" className="home-flow__link">
                Sevda
              </Link>
              <Link href="/siirler" className="home-flow__link">
                Hasret
              </Link>
              <Link href="/siirler" className="home-flow__link">
                Ayrılık
              </Link>
            </nav>
          </div>
        </section>

        <section className="home-featured" aria-labelledby="featured-heading">
          <div className="home-featured__inner">
            <h2 id="featured-heading" className="home-section-label home-sans">
              Seçili
            </h2>

            <Link href={`/siirler/${featured.slug}`} className="home-featured-card home-featured-card--hero">
              <div className="home-featured-card__hero-bulk">
                <span className="home-featured-card__tag home-sans">{featured.category}</span>
                <h3 className="home-featured-card__title">{featured.title}</h3>
                <p className="home-featured-card__excerpt">{featuredBody}</p>
              </div>
              <div className="home-featured-card__hero-bottom">
                <span className="home-featured-card__hint home-sans">Okumaya devam</span>
              </div>
            </Link>

            <ul className="home-featured-grid">
              {previews.map((p) => (
                <li key={p.slug}>
                  <Link href={`/siirler/${p.slug}`} className="home-featured-card home-featured-card--small">
                    <span className="home-featured-card__tag home-sans">{p.category}</span>
                    <h3 className="home-featured-card__title">{p.title}</h3>
                    <p className="home-featured-card__excerpt home-featured-card__excerpt--short">
                      {poemExcerpt(p, 3)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="home-featured-more home-sans">
              <Link href="/siirler">Tüm şiirler</Link>
            </p>
          </div>
        </section>

        <section className="home-closing">
          <div className="home-closing__inner">
            <p className="home-closing__line">
              Bir yerde, kelimeler hâlâ <em>nefes alıyor</em>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
