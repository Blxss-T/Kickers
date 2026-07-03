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

        {/* Shop */}
        <div>
          <p className="nl" style={{ color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Shop</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a href="#arrivals" className="lnk">Arrivals</a>
            <a href="#brands" className="lnk">Jordan</a>
            <a href="#brands" className="lnk">Nike</a>
            <a href="#brands" className="lnk">Adidas · New Balance</a>
          </div>
        </div>

        {/* Brand */}
        <div>
          <p className="nl" style={{ color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Brand</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a href="#story" className="lnk">Our Story</a>
            <a href="#visit" className="lnk">Visit Store</a>
            <a href="#community" className="lnk">Community</a>
          </div>
        </div>

        {/* Follow */}
        <div>
          <p className="nl" style={{ color: 'rgba(255,255,255,.4)', marginBottom: 20 }}>Follow</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a href="#" className="lnk">Instagram</a>
            <a href="#" className="lnk">TikTok</a>
            <a href="#" className="lnk">WhatsApp</a>
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
