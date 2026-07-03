const brands = [
  { num: '01', name: 'Jordan', img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1100&q=85', delay: 0 },
  { num: '02', name: 'Nike', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1100&q=85', delay: 120 },
  { num: '03', name: 'Adidas', img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1100&q=85', delay: 240 },
  { num: '04', name: 'New Balance', img: 'https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=1100&q=85', delay: 360 },
];

export default function Brands() {
  return (
    <section
      id="brands"
      style={{
        background: 'var(--color-ink)',
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
          marginBottom: 'clamp(48px,6vw,84px)',
        }}
      >
        <div>
          <p className="ey rv" data-reveal style={{ color: 'var(--color-accent)', marginBottom: 18 }}>
            The Houses We Carry
          </p>
          <h2 className="d rv" data-reveal data-delay="120" style={{ fontSize: 'clamp(44px,6vw,104px)', color: '#fff' }}>
            Premium<br />Collection.
          </h2>
        </div>
        <p className="b rv" data-reveal data-delay="200" style={{ maxWidth: 330, color: 'rgba(255,255,255,.55)', fontSize: 15, lineHeight: 1.6 }}>
          Four houses. One standard. Editorial spreads — not endless grids.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))', gap: 'clamp(16px,1.6vw,26px)' }}>
        {brands.map(b => (
          <a
            key={b.num}
            href="#"
            className="rv zoom-wrap-sm"
            data-reveal
            data-delay={b.delay || undefined}
            style={{
              position: 'relative',
              display: 'block',
              overflow: 'hidden',
              aspectRatio: '4/3.1',
              background: '#141414',
              textDecoration: 'none',
            }}
          >
            <div
              className="zoom-inner"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('${b.img}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                willChange: 'transform',
              }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(0,0,0,.25),rgba(0,0,0,0) 45%,rgba(0,0,0,.82))' }} />
            <span className="nl" style={{ position: 'absolute', top: 20, left: 22, color: 'var(--color-accent)' }}>{b.num}</span>
            <div style={{ position: 'absolute', left: 22, right: 22, bottom: 22, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <h3 className="d" style={{ fontSize: 'clamp(34px,3.4vw,56px)', color: '#fff' }}>{b.name}</h3>
              <span className="nl" style={{ color: 'rgba(255,255,255,.7)' }}>Shop →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
