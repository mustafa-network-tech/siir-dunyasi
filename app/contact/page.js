export default function ContactPage() {
  return (
    <div className="contact-page">

      <div className="contact-inner">

        <h1>İletişim</h1>
        <p>
          Şiir Dünyası ile iletişime geçmek için aşağıdaki kanalları
          kullanabilirsiniz.
        </p>

        {/* alta sabit duran alan */}
        <div className="contact-links">

          <a
            className="contact-link"
            href="mailto:mustafa82oner@gmail.com"
          >
            <span className="contact-icon">✉️</span>
            <span className="contact-text">
              <strong>E-posta</strong>
              <small>mustafa82oner@gmail.com</small>
            </span>
          </a>

          <a
            className="contact-link"
            href="https://instagram.com/mavi_kadraj14"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">📷</span>
            <span className="contact-text">
              <strong>Instagram</strong>
              <small>@mavi_kadraj14</small>
            </span>
          </a>

        </div>

      </div>

    </div>
  );
}