'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#arrivals', label: 'Arrivals' },
  { href: '#brands', label: 'Brands' },
  { href: '#story', label: 'Story' },
  { href: '#community', label: 'Culture' },
  { href: '#visit', label: 'Visit Store' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <nav
      data-nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '22px clamp(20px,4vw,56px)',
        borderBottom: '1px solid transparent',
        background: 'transparent',
      }}
    >
      <a href="#top" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', zIndex: 110, position: 'relative' }}>
        <img src="/assets/kgl-logo.jpg" alt="Kigali Kicks" style={{ width: 42, height: 42, display: 'block', borderRadius: 2 }} />
        <span className="d" style={{ color: '#fff', fontSize: 19, letterSpacing: '.04em' }}>
          KIGALI<span style={{ color: 'var(--color-accent)' }}>.</span>KICKS
        </span>
      </a>

      <div className="nav-links">
        <a href="#arrivals" className="lnk">Arrivals</a>
        <a href="#brands" className="lnk">Brands</a>
        <a href="#story" className="lnk">Story</a>
        <a href="#community" className="lnk">Culture</a>
        <a
          href="#visit"
          className="b hover-opacity"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--color-accent)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 11,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            padding: '11px 20px',
            textDecoration: 'none',
          }}
        >
          Visit Store
        </a>
      </div>

      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className={`nav-burger${open ? ' open' : ''}`}
        onClick={() => setOpen(v => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
