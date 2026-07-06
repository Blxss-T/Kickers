const photos = [
  { img: 'https://images.unsplash.com/photo-1483721310020-03333e577078?w=900&q=85', spanRow: true, delay: 0 },
  { img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=85', spanRow: false, delay: 100 },
  { img: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=85', spanRow: false, delay: 200 },
  { img: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=900&q=85', spanRow: true, delay: 160 },
  { img: 'https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?w=800&q=85', spanRow: false, delay: 260 },
];

export default function Community() {
  return (
    <section
      id="community"
      style={{
        background: 'var(--color-paper)',
        color: 'var(--color-ink)',
        padding: 'clamp(80px,12vw,170px) clamp(20px,5vw,84px)',
        scrollMarginTop: 80,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
          marginBottom: 'clamp(44px,6vw,80px)',
        }}
      >
        <div>
          <p className="ey rv" data-reveal style={{ color: 'var(--color-accent)', marginBottom: 18 }}>
            The Community
          </p>
          <h2 className="d rv" data-reveal data-delay="120" style={{ fontSize: 'clamp(44px,6vw,104px)', color: 'var(--color-ink)' }}>
            Follow<br />The Culture.
          </h2>
        </div>
        <a
          href="#"
          className="b rv"
          data-reveal
          data-delay="200"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            color: 'var(--color-ink)',
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderBottom: '1px solid var(--color-accent)',
            paddingBottom: 8,
          }}
        >
          @kigalikicks →
        </a>
      </div>

      <div
        className="grid-community"
        style={{
          display: 'grid',
          gap: 'clamp(12px,1.4vw,20px)',
        }}
      >
        {photos.map((p, i) => (
          <div
            key={i}
            className="rv zoom-wrap"
            data-reveal
            data-delay={p.delay || undefined}
            style={{
              position: 'relative',
              overflow: 'hidden',
              gridRow: p.spanRow ? 'span 2' : undefined,
              background: '#e7e4df',
            }}
          >
            <div
              className="zoom-inner"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('${p.img}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </div>
        ))}

        {/* Join card */}
        <div
          className="rv"
          data-reveal
          data-delay="320"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--color-ink)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 20,
          }}
        >
          <div>
            <p className="d" style={{ color: '#fff', fontSize: 'clamp(20px,2vw,30px)' }}>
              Join The<br />Movement
            </p>
            <p className="nl" style={{ color: 'var(--color-accent)', marginTop: 14 }}>#WalkDifferent</p>
          </div>
        </div>
      </div>
    </section>
  );
}
