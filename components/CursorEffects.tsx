'use client';
import { useEffect } from 'react';

export default function CursorEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>('[data-tilt]').forEach(el => {
      const maxAngle = parseFloat(el.dataset.tiltAmount ?? '8');
      const perspective = el.dataset.tiltPerspective ?? '700';

      const onMove = (e: Event) => {
        const { clientX, clientY } = e as MouseEvent;
        const rect = el.getBoundingClientRect();
        const x = (clientX - rect.left) / rect.width - 0.5;
        const y = (clientY - rect.top) / rect.height - 0.5;
        el.style.transition = 'transform 0.08s ease';
        el.style.transform =
          `perspective(${perspective}px) rotateX(${(-y * maxAngle).toFixed(2)}deg) rotateY(${(x * maxAngle).toFixed(2)}deg) translateZ(6px)`;
      };
      const onLeave = () => {
        el.style.transition = 'transform 0.7s cubic-bezier(0.16,1,0.3,1)';
        el.style.transform = '';
      };

      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach(fn => fn());
  }, []);

  return null;
}
