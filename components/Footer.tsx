const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kigali_kicks_/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@kigali.kicks.collection',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 5.82c-.7-.66-1.15-1.55-1.24-2.54h-3.03v13.44c0 1.53-1.24 2.77-2.77 2.77a2.77 2.77 0 0 1-2.77-2.77 2.77 2.77 0 0 1 2.77-2.77c.28 0 .55.04.8.12v-3.1a5.9 5.9 0 0 0-.8-.06 5.86 5.86 0 0 0-5.86 5.86 5.86 5.86 0 0 0 5.86 5.86 5.86 5.86 0 0 0 5.86-5.86V9.4a8.5 8.5 0 0 0 4.98 1.6V7.96a5.4 5.4 0 0 1-3.8-2.14Z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/message/K4HYPF3M7HUIJ1',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.47 14.38c-.29-.14-1.7-.84-1.96-.93-.26-.1-.46-.14-.65.14-.19.29-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.65-1.58-.9-2.16-.24-.57-.48-.49-.65-.5-.17-.01-.36-.01-.55-.01-.19 0-.51.07-.77.36-.26.29-1.01.99-1.01 2.41 0 1.42 1.04 2.79 1.18 2.98.14.19 2.04 3.12 4.95 4.37.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z" />
        <path d="M12.02 2.5c-5.24 0-9.5 4.26-9.5 9.5 0 1.68.44 3.29 1.28 4.71L2.5 21.5l4.9-1.28a9.46 9.46 0 0 0 4.62 1.18h.01c5.24 0 9.5-4.26 9.5-9.5s-4.27-9.4-9.51-9.4Zm0 17.28h-.01a7.8 7.8 0 0 1-3.97-1.09l-.28-.17-2.95.77.79-2.88-.18-.29a7.76 7.76 0 0 1-1.19-4.12c0-4.29 3.49-7.78 7.79-7.78 4.29 0 7.78 3.49 7.78 7.79 0 4.29-3.49 7.77-7.78 7.77Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-ink)',
        padding: 'clamp(70px,9vw,120px) clamp(20px,5vw,84px) 40px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
          gap: 40,
          paddingBottom: 'clamp(50px,7vw,90px)',
          borderBottom: '1px solid rgba(255,255,255,.08)',
        }}
      >
        {/* Brand */}
        <div>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 20 }}>
            <img src="/assets/kgl-logo.jpg" alt="Kigali Kicks" style={{ width: 48, height: 48, display: 'block', borderRadius: 2 }} />
            <span className="d" style={{ color: '#fff', fontSize: 20 }}>
              KIGALI<span style={{ color: 'var(--color-accent)' }}>.</span>KICKS
            </span>
          </a>
          <p className="b" style={{ color: 'rgba(255,255,255,.5)', fontSize: 14, lineHeight: 1.6, maxWidth: 260 }}>
            Authentic. Curated. Kigali.<br />The home of Rwanda&apos;s sneaker culture.
          </p>
        </div>

        {/* Shop + Brand — always share a row */}
        <div className="footer-links-row">
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <p className="nl" style={{ color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Shop</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="#arrivals" className="lnk">Arrivals</a>
              <a href="#brands" className="lnk">Jordan</a>
              <a href="#brands" className="lnk">Nike</a>
              <a href="#brands" className="lnk">Adidas · New Balance</a>
            </div>
          </div>

          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <p className="nl" style={{ color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Brand</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href="#story" className="lnk">Our Story</a>
              <a href="#visit" className="lnk">Visit Store</a>
              <a href="#community" className="lnk">Community</a>
            </div>
          </div>
        </div>

        {/* Follow */}
        <div>
          <p className="nl" style={{ color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Follow</p>
          <div style={{ display: 'flex', gap: 12 }}>
            {socialLinks.map(s => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="footer-social-icon hover-lift"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <h2
        className="d"
        style={{
          fontSize: 'clamp(40px,9vw,148px)',
          color: '#fff',
          textAlign: 'center',
          margin: 'clamp(40px,5vw,70px) auto clamp(30px,4vw,50px)',
          lineHeight: 0.86,
          maxWidth: '100%',
        }}
      >
        Walk<span style={{ color: 'var(--color-accent)' }}>.</span>Different
      </h2>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <p className="nl" style={{ color: 'rgba(255,255,255,.35)' }}>© 2026 Kigali Kicks</p>
        <p className="nl" style={{ color: 'rgba(255,255,255,.35)' }}>Kigali · Rwanda</p>
        <a
          href="#top"
          className="nl hover-white"
          style={{ color: 'rgba(255,255,255,.55)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
