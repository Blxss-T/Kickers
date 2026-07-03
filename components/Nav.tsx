export default function Nav() {
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
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
        <img src="/assets/kgl-logo.jpg" alt="Kigali Kicks" style={{ width: 42, height: 42, display: 'block', borderRadius: 2 }} />
        <span className="d" style={{ color: '#fff', fontSize: 19, letterSpacing: '.04em' }}>
          KIGALI<span style={{ color: 'var(--color-accent)' }}>.</span>KICKS
        </span>
      </a>

      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,2.4vw,34px)' }}>
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
    </nav>
  );
}
