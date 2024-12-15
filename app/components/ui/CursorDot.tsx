'use client';

import { useEffect } from 'react';

export default function CursorDot() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot') as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }
      });
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        cursor.classList.add('is-hovering');
      }
    };

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        cursor.classList.remove('is-hovering');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return null;
}
