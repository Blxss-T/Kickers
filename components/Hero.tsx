export default function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(440px,1fr))',
        background: 'var(--color-ink)',
      }}
    >
      {/* Left */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(96px,11vh,150px) clamp(28px,5vw,84px) clamp(36px,5vh,56px)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(180deg,transparent,rgba(255,255,255,.08),transparent)',
          }}
        />
        <p className="ey rv" data-reveal style={{ color: 'var(--color-accent)' }}>
          Authentic · Curated · Kigali
        </p>
        <div>
          <h1
            className="d rv"
            data-reveal
            data-delay="120"
            style={{ color: '#fff', fontSize: 'clamp(64px,8.6vw,138px)' }}
          >
            Walk<br />Different.
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
            className="rv"
            data-reveal
            data-delay="400"
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 'clamp(26px,4vh,40px)' }}
          >
            <a
              href="#arrivals"
              className="b hover-lift"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
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
              Explore Arrivals →
            </a>
            <a
              href="#story"
              className="b hover-border-white"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid rgba(255,255,255,.34)',
                color: '#fff',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                padding: '16px 30px',
                textDecoration: 'none',
              }}
            >
              The Story
            </a>
          </div>
        </div>
        <div className="rv" data-reveal data-delay="560" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <span className="nl" style={{ color: 'rgba(255,255,255,.4)' }}>01 — Kigali, Rwanda</span>
        </div>
      </div>

      {/* Right image */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '62vh', background: '#111' }}>
        <div
          data-parallax
          data-speed="-50"
          style={{
            position: 'absolute',
            inset: '-9% 0',
            backgroundImage: "url('https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1400&q=85')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            willChange: 'transform',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,.4),rgba(0,0,0,0) 30%,rgba(0,0,0,.45))' }} />
        {/* Animated power-line at the panel boundary */}
        <div
          className="power-line"
          style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, zIndex: 10 }}
        />
        <span className="nl rv" data-reveal data-delay="500" style={{ position: 'absolute', right: 24, bottom: 24, color: 'rgba(255,255,255,.9)' }}>
          Air Jordan 1 · Bred &apos;24
        </span>
      </div>
    </section>
  );
}
