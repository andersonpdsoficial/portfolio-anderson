'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Box, useMediaQuery } from '@mui/material';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Uma única animação de entrada reutilizada em todo o portfólio, sem biblioteca extra. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const element = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const current = element.current;
    if (!current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.06, rootMargin: '0px 0px 70px 0px' });
    observer.observe(current);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return (
    <Box
      ref={element}
      className={className}
      sx={{
        minWidth: 0,
        opacity: reducedMotion || visible ? 1 : 0,
        transform: reducedMotion || visible ? 'none' : 'translateY(15px)',
        transition: 'opacity 450ms ease, transform 450ms cubic-bezier(.2,.8,.2,1)',
        transitionDelay: `${Math.min(Math.max(delay, 0), 0.4)}s`,
        '@media (prefers-reduced-motion: reduce)': { opacity: 1, transform: 'none', transition: 'none' },
      }}
    >
      {children}
    </Box>
  );
}
