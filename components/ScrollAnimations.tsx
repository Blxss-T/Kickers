'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let tick = false;

    const sweep = () => {
      const vh = window.innerHeight || 800;

      // Scroll reveals
      document.querySelectorAll<HTMLElement>('.rv:not(.shown)').forEach(el => {
        if (reduced) {
          el.style.transition = 'none';
          el.classList.add('shown');
          return;
        }
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.92 && r.bottom > -40) {
          el.style.transitionDelay = `${parseInt(el.dataset.delay || '0', 10)}ms`;
          el.classList.add('shown');
        }
      });

      // Parallax
      if (!reduced) {
        document.querySelectorAll<HTMLElement>('[data-parallax]').forEach(el => {
          const speed = parseFloat(el.dataset.speed || '-50');
          const parent = el.parentElement;
          if (!parent) return;
          const p = parent.getBoundingClientRect();
          const prog = (p.top + p.height / 2 - vh / 2) / vh;
          el.style.transform = `translate3d(0,${(prog * speed).toFixed(1)}px,0)`;
        });
      }

      // Nav scroll behaviour
      const nav = document.querySelector<HTMLElement>('[data-nav]');
      if (nav) {
        const y = Math.max(window.scrollY || 0, document.documentElement.scrollTop || 0);
        if (y > 60) {
          nav.style.background = 'rgba(8,8,8,.72)';
          nav.style.backdropFilter = 'blur(16px)';
          (nav.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter = 'blur(16px)';
          nav.style.borderBottomColor = 'rgba(255,255,255,.08)';
          nav.style.paddingTop = '14px';
          nav.style.paddingBottom = '14px';
        } else {
          nav.style.background = 'transparent';
          nav.style.backdropFilter = 'none';
          (nav.style as CSSStyleDeclaration & { webkitBackdropFilter: string }).webkitBackdropFilter = 'none';
          nav.style.borderBottomColor = 'transparent';
          nav.style.paddingTop = '22px';
          nav.style.paddingBottom = '22px';
        }
      }
    };

    const onScroll = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(() => { tick = false; sweep(); });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    sweep();
    [120, 400, 900].forEach(t => setTimeout(sweep, t));

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}
