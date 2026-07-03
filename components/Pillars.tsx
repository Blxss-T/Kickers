const pillars = [
  {
    num: '01',
    title: 'Authentic',
    body: 'Every pair verified, in-house. No replicas, no shortcuts — only the real thing, guaranteed.',
    delay: 0,
  },
  {
    num: '02',
    title: 'Curated',
    body: 'Selected by people who live the culture. Fewer pairs, higher standard — taste over volume.',
    delay: 140,
  },
  {
    num: '03',
    title: 'Trusted',
    body: 'Built on Kigali\'s word of mouth. The name the community sends their own people to.',
    delay: 280,
  },
];

export default function Pillars() {
  return (
    <section
      style={{
        background: 'var(--color-paper)',
        color: 'var(--color-ink)',
        padding: 'clamp(80px,12vw,170px) clamp(20px,5vw,84px)',
      }}
    >
      <p className="ey rv" data-reveal style={{ color: 'var(--color-accent)', marginBottom: 'clamp(40px,6vw,80px)' }}>
        Why Kigali Kicks
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(36px,4vw,72px)' }}>
        {pillars.map(p => (
          <div
            key={p.num}
            className="rv"
            data-reveal
            data-delay={p.delay || undefined}
            style={{ borderTop: '1px solid #d6d2cb', paddingTop: 30 }}
          >
            <p className="d" style={{ color: 'var(--color-accent)', fontSize: 18, marginBottom: 24 }}>{p.num}</p>
            <h3 className="d" style={{ fontSize: 'clamp(32px,3.2vw,48px)', color: 'var(--color-ink)', marginBottom: 18 }}>{p.title}</h3>
            <p className="b" style={{ color: '#5b5b5b', fontSize: 15, lineHeight: 1.7, maxWidth: 340 }}>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
