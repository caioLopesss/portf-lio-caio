export default function PortfolioFooter() {
  return (
    <footer className="portfolio-footer">
      <p className="portfolio-footer-cta">Tem uma ideia? <span>Vamos transformar em algo digital.</span></p>
      <div className="portfolio-footer-links">
      <a
        className="footer-contact-link contact-instagram"
        href="https://www.instagram.com/caiilopes/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir o Instagram de Caio Lopes em uma nova aba"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle className="instagram-graffiti-dot" cx="17.4" cy="6.7" r="1.1" />
        </svg>
      </a>
      <a
        className="footer-contact-link contact-email"
        href="mailto:caiilopescosta@gmail.com"
        aria-label="Enviar e-mail para caiilopescosta@gmail.com"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </a>
      <a
        className="footer-contact-link contact-whatsapp"
        href="https://wa.me/5532999629386"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp pelo número 32 9 99629386"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 11.5a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.3-4.6A8.2 8.2 0 1 1 20.5 11.5Z" />
          <path d="M8.4 7.6c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.6c-.1.2 0 .3.1.5.4.8 1 1.5 1.8 1.9.2.1.4.2.5.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5v.5c0 .3-.2.6-.5.8-.5.3-1.3.3-2.2 0-1.2-.4-2.6-1.4-3.8-2.7-1-1.1-1.8-2.4-2.1-3.4-.3-.9-.3-1.5 0-2.1Z" />
        </svg>
      </a>
      <a
        className="footer-contact-link contact-github"
        href="https://github.com/caioLopesss"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir o GitHub de caioLopesss em uma nova aba"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-2.85 17.53c.45.08.62-.19.62-.43v-1.67c-2.52.55-3.05-1.07-3.05-1.07-.42-1.07-1.01-1.35-1.01-1.35-.83-.56.06-.55.06-.55.92.07 1.4.94 1.4.94.82 1.4 2.14 1 2.66.76.08-.6.32-1 .58-1.23-2.01-.23-4.12-1-4.12-4.47 0-.99.35-1.79.94-2.43-.1-.23-.41-1.15.09-2.39 0 0 .76-.24 2.47.93A8.5 8.5 0 0 1 12 6.32c.76 0 1.52.1 2.23.3 1.7-1.17 2.46-.93 2.46-.93.5 1.24.19 2.16.1 2.39.58.64.93 1.44.93 2.43 0 3.48-2.12 4.23-4.13 4.46.33.28.61.81.61 1.64v2.44c0 .24.16.51.62.43A9 9 0 0 0 12 3Z" />
        </svg>
      </a>
      <a
        className="footer-contact-link contact-linkedin"
        href="https://www.linkedin.com/in/caiilopes/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir o LinkedIn de Caio Lopes em uma nova aba"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="9" width="3.4" height="11" rx=".5" />
          <circle cx="5.7" cy="5.3" r="1.9" />
          <path d="M10.4 20V9h3.3v1.5c.7-1.1 1.9-1.9 3.7-1.9 2.6 0 3.6 1.7 3.6 4.4v7h-3.4v-6.1c0-1.45-.52-2.45-1.82-2.45-1.01 0-1.61.68-1.87 1.34-.1.23-.12.56-.12.89V20Z" />
        </svg>
      </a>
      </div>
    </footer>
  );
}
