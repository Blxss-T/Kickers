const products = [
  {
    num: '01',
    brand: 'Air Jordan',
    name: 'Jordan 1 · Bred Toe',
    img: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=900&q=85',
    delay: 0,
  },
  {
    num: '02',
    brand: 'adidas',
    name: 'Yeezy 350 · Zebra',
    img: 'https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=900&q=85',
    delay: 140,
  },
  {
    num: '03',
    brand: 'New Balance',
    name: 'NB 550 · Green',
    img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=900&q=85',
    delay: 280,
  },
];

export default function Arrivals() {
  return (
    <section
      id="arrivals"
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
          marginBottom: 'clamp(48px,7vw,90px)',
        }}
      >
        <div>
          <p className="ey rv" data-reveal style={{ color: 'var(--color-accent)', marginBottom: 18 }}>
            Featured Arrivals
          </p>
          <h2 className="d rv" data-reveal data-delay="120" style={{ fontSize: 'clamp(44px,6vw,104px)', color: 'var(--color-ink)' }}>
            Curated,<br />Not Listed.
          </h2>
        </div>
        <p className="b rv" data-reveal data-delay="200" style={{ maxWidth: 330, color: '#5b5b5b', fontSize: 15, lineHeight: 1.6 }}>
          A handful of pairs, chosen this week. Each one authenticated, photographed, and held for the people who get it.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 'clamp(24px,3vw,52px)' }}>
        {products.map(p => (
          <div key={p.num} className="rv" data-reveal data-delay={p.delay || undefined}>
            <div className="zoom-wrap" style={{ position: 'relative', overflow: 'hidden', background: '#e7e4df', aspectRatio: '4/5' }}>
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
              <span className="nl" style={{ position: 'absolute', top: 14, left: 14, color: 'var(--color-accent)' }}>
                {p.num}
              </span>
            </div>
            <div style={{ marginTop: 22 }}>
              <p className="nl" style={{ color: '#9a9a9a', marginBottom: 8 }}>{p.brand}</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                <h3 className="d" style={{ fontSize: 'clamp(22px,1.9vw,30px)', color: 'var(--color-ink)' }}>{p.name}</h3>
                <a
                  href="#visit"
                  className="b hover-lift"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'var(--color-accent)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 10,
                    letterSpacing: '.16em',
                    textTransform: 'uppercase',
                    padding: '10px 18px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Book Now →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
