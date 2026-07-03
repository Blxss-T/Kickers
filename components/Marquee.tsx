const items = [
  { text: 'AUTHENTIC', outline: false },
  { text: '·', accent: true },
  { text: 'CURATED', outline: true },
  { text: '·', accent: true },
  { text: 'TRUSTED', outline: false },
  { text: '·', accent: true },
  { text: 'KIGALI KICKS', outline: true },
  { text: '·', accent: true },
];

export default function Marquee() {
  const fontSize = 'clamp(40px,6vw,96px)';

  return (
    <div
      style={{
        background: 'var(--color-ink)',
        borderTop: '1px solid rgba(255,255,255,.08)',
        borderBottom: '1px solid rgba(255,255,255,.08)',
        padding: 'clamp(28px,4vw,46px) 0',
        overflow: 'hidden',
      }}
    >
      <div className="mqrow">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="d"
            style={{
              fontSize,
              color: item.accent
                ? 'var(--color-accent)'
                : item.outline
                ? 'transparent'
                : '#fff',
              WebkitTextStroke: item.outline ? '1.4px rgba(255,255,255,.5)' : undefined,
              margin: item.accent ? '0 .5em' : undefined,
            }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
