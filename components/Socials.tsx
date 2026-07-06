import { WA_LINK } from '@/lib/config';

const socials = [
  {
    num: '01',
    name: 'Instagram',
    handle: '@kigalikicks',
    sub: 'Follow our drops',
    href: 'https://www.instagram.com/kigali_kicks_/',
  },
  {
    num: '02',
    name: 'TikTok',
    handle: '@kigalikicks',
    sub: 'Watch the culture',
    href: 'https://www.tiktok.com/@kigali.kicks.collection',
  },
  {
    num: '03',
    name: 'WhatsApp',
    handle: 'Message Us',
    sub: 'Talk to us directly',
    href: 'wa.me/message/K4HYPF3M7HUIJ1',
  },
];

export default function Socials() {
  return (
    <section
      id="socials"
      style={{
        background: 'var(--color-ink)',
        padding: 'clamp(70px,10vw,130px) clamp(20px,5vw,84px)',
        borderTop: '1px solid rgba(255,255,255,.06)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 'clamp(36px,5vw,60px)',
        }}
      >
        <div>
          <p className="ey rv" data-reveal style={{ color: 'var(--color-accent)', marginBottom: 16 }}>
            Find Us On
          </p>
          <h2 className="d rv" data-reveal data-delay="100" style={{ fontSize: 'clamp(38px,5vw,88px)', color: '#fff' }}>
            The Socials.
          </h2>
        </div>
        <p className="b rv" data-reveal data-delay="180" style={{ color: 'rgba(255,255,255,.45)', fontSize: 14, maxWidth: 240, lineHeight: 1.65 }}>
          Drops, culture &amp; community — stay plugged in wherever you are.
        </p>
      </div>

      <div>
        {socials.map((s, i) => (
          <a
            key={s.num}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rv social-row"
            data-reveal
            data-delay={String(i * 90)}
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              padding: 'clamp(16px,2.2vw,26px) 0',
              borderTop: i === 0 ? '1px solid rgba(255,255,255,.08)' : 'none',
              borderBottom: '1px solid rgba(255,255,255,.08)',
            }}
          >
            <span className="nl" style={{ color: 'var(--color-accent)', minWidth: 32, flexShrink: 0 }}>
              {s.num}
            </span>
            <span
              className="d"
              style={{
                fontSize: 'clamp(24px,3.8vw,56px)',
                color: 'inherit',
                flex: 1,
                marginLeft: 20,
                lineHeight: 1,
              }}
            >
              {s.name}
            </span>
            <div style={{ textAlign: 'right', marginRight: 'clamp(12px,2vw,36px)' }}>
              <p className="b" style={{ color: 'inherit', fontSize: 13, fontWeight: 500 }}>{s.handle}</p>
              <p className="nl" style={{ color: 'rgba(255,255,255,.3)', marginTop: 5 }}>{s.sub}</p>
            </div>
            <span className="social-arrow" style={{ fontSize: 20, color: 'var(--color-accent)', flexShrink: 0 }}>
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
