export default function Story() {
  return (
    <section
      id="story"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0a0a0a',
        scrollMarginTop: 80,
      }}
    >
      <div
        data-parallax
        data-speed="-70"
        style={{
          position: 'absolute',
          inset: '-12% 0',
          backgroundImage: "url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=85')",
          backgroundPosition: 'center 30%',
          backgroundSize: 'cover',
          willChange: 'transform',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(8,8,8,.82),rgba(8,8,8,.62) 50%,rgba(8,8,8,.9))' }} />
      <div
        className="rv"
        data-reveal
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: 900,
          padding: 'clamp(60px,9vw,120px) clamp(24px,5vw,40px)',
        }}
      >
        <p className="ey" style={{ color: 'var(--color-accent)', marginBottom: 'clamp(22px,3vh,34px)' }}>
          The Kigali Kicks Ethos
        </p>
        <h2 className="d" style={{ fontSize: 'clamp(52px,9.5vw,158px)', color: '#fff' }}>
          More Than<br />Sneakers.
        </h2>
        <p
          className="b"
          style={{
            color: 'rgba(255,255,255,.72)',
            fontSize: 'clamp(16px,1.3vw,20px)',
            lineHeight: 1.7,
            maxWidth: 600,
            margin: 'clamp(26px,4vh,40px) auto 0',
          }}
        >
          We don&apos;t move boxes — we move culture. Every pair that passes through Kigali Kicks is
          authenticated, considered, and presented like the icon it is. This is a gallery for the
          people who walk different.
        </p>
        <a
          href="#visit"
          className="b hover-gap"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 'clamp(30px,4vh,44px)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderBottom: '1px solid var(--color-accent)',
            paddingBottom: 8,
          }}
        >
          Read Our Story →
        </a>
      </div>
    </section>
  );
}
