'use client';

import { useEffect } from 'react';

export default function CursorDot() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-dot');
    interface MouseEventWithClientX extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const moveCursor = (e: MouseEventWithClientX) => {
      requestAnimationFrame(() => {
      if (cursor) {
        (cursor as HTMLElement).style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return null;
}
