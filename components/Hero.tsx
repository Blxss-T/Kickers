export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'var(--color-ink)',
      }}
    >
      {/* Jordan background image */}
      <div
        data-parallax
        data-speed="-40"
        style={{
          position: 'absolute',
          inset: '-9% 0',
          backgroundImage: "url('https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1600&q=85')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          willChange: 'transform',
        }}
      />
      {/* Dark overlay so foreground content stays legible over the photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(5,5,5,.8) 0%, rgba(5,5,5,.6) 45%, rgba(5,5,5,.88) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(96px,11vh,150px) clamp(28px,5vw,84px) clamp(36px,5vh,56px)',
        }}
      >
        <p className="ey rv hero-eyebrow" data-reveal style={{ color: 'var(--color-accent)' }}>
          Authentic · Curated · Kigali
        </p>
        <div>
          <h1
            className="d rv"
            data-reveal
            data-delay="120"
            style={{ color: '#fff', fontSize: 'clamp(64px,8.6vw,138px)' }}
          >
            Walk<br />Different<span className="text-dot">.</span>
          </h1>
          <p
            className="b rv"
            data-reveal
            data-delay="260"
            style={{
              color: 'rgba(255,255,255,.6)',
              fontSize: 'clamp(15px,1.2vw,18px)',
              lineHeight: 1.6,
              maxWidth: 430,
              marginTop: 'clamp(20px,3vh,34px)',
            }}
          >
            Rwanda's home for authentic, hand-curated sneakers. Grails, drops and icons — selected
            with intent, never listed in bulk. This is the culture, elevated.
          </p>
          <div
            className="rv hero-cta"
            data-reveal
            data-delay="400"
            style={{ display: 'flex', gap: 14, marginTop: 'clamp(26px,4vh,40px)' }}
          >
            <a
              href="#arrivals"
              className="b hover-lift"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                background: 'var(--color-accent)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                padding: '16px 30px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Explore Arrivals →
            </a>
            <a
              href="#story"
              className="b hover-border-white"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                border: '1px solid rgba(255,255,255,.34)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                padding: '16px 30px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              The Story
            </a>
          </div>
        </div>
        <div className="rv" data-reveal data-delay="560" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <span className="nl" style={{ color: 'rgba(255,255,255,.4)' }}>01 — Kigali, Rwanda</span>
          <span className="nl" style={{ color: 'rgba(255,255,255,.6)' }}>Air Jordan 1 · Bred &apos;24</span>
        </div>
      </div>
    </section>
  );
}
