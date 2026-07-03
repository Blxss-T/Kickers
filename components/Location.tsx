export default function Location() {
  return (
    <section
      id="visit"
      style={{
        background: 'var(--color-ink)',
        padding: 'clamp(80px,12vw,170px) clamp(20px,5vw,84px)',
        scrollMarginTop: 80,
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))',
          gap: 'clamp(40px,5vw,84px)',
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div>
          <p className="ey rv" data-reveal style={{ color: 'var(--color-accent)', marginBottom: 22 }}>
            Visit The Gallery
          </p>
          <h2 className="d rv" data-reveal data-delay="120" style={{ fontSize: 'clamp(48px,7vw,118px)', color: '#fff' }}>
            Don&apos;t<br />Get Lost.
          </h2>
          <div
            className="rv"
            data-reveal
            data-delay="240"
            style={{
              marginTop: 'clamp(32px,4vw,52px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))',
              gap: 30,
            }}
          >
            <div>
              <p className="nl" style={{ color: 'var(--color-accent)', marginBottom: 12 }}>Address</p>
              <p className="b" style={{ color: 'rgba(255,255,255,.78)', fontSize: 15, lineHeight: 1.65 }}>
                KN 4 Avenue<br />Nyarugenge, Kigali City<br />Rwanda
              </p>
            </div>
            <div>
              <p className="nl" style={{ color: 'var(--color-accent)', marginBottom: 12 }}>Hours</p>
              <p className="b" style={{ color: 'rgba(255,255,255,.78)', fontSize: 15, lineHeight: 1.65 }}>
                Mon — Sat · 09:00–20:00<br />Sun · 11:00–18:00
              </p>
            </div>
          </div>
          <a
            href="#"
            className="b rv hover-lift"
            data-reveal
            data-delay="340"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              marginTop: 40,
              background: 'var(--color-accent)',
              color: '#fff',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              padding: '16px 30px',
              textDecoration: 'none',
            }}
          >
            Get Directions →
          </a>
        </div>

        {/* Right */}
        <div className="rv" data-reveal data-delay="200" style={{ position: 'relative' }}>
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3.4', background: '#141414' }}>
            <div
              data-parallax
              data-speed="-30"
              style={{
                position: 'absolute',
                inset: '-8% 0',
                backgroundImage: "url('/assets/kgl%20kick%20store.png')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                willChange: 'transform',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg,rgba(0,0,0,.2),rgba(0,0,0,.55))' }} />
            <span className="nl" style={{ position: 'absolute', left: 22, top: 22, color: 'rgba(255,255,255,.85)' }}>
              The Boutique · Kigali
            </span>
          </div>

          {/* Location image card */}
          <div
            style={{
              position: 'absolute',
              right: 18,
              bottom: -26,
              border: '1px solid rgba(255,255,255,.12)',
              overflow: 'hidden',
              boxShadow: '0 24px 50px rgba(0,0,0,.6)',
            }}
          >
            <img
              src="/assets/location.jpg"
              alt="Store location"
              style={{ width: 210, height: 148, objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
