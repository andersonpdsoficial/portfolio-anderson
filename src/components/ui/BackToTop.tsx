'use client';

import { useEffect, useState } from 'react';
import { Fab, Tooltip, Zoom } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 440);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  function goToTop(): void {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  }

  return (
    <Zoom in={visible} unmountOnExit>
      <Tooltip title="Voltar ao topo" placement="left" arrow>
        <Fab
          aria-label="Voltar ao topo da página"
          onClick={goToTop}
          size="medium"
          color="primary"
          sx={(theme) => ({
            position: 'fixed',
            zIndex: theme.zIndex.speedDial,
            bottom: { xs: 20, md: 30 },
            right: { xs: 16, md: 28 },
            border: '2px solid',
            borderColor: 'background.paper',
            boxShadow: '0 12px 36px rgba(0,0,0,0.22)',
            '&:focus-visible': { outline: '3px solid', outlineColor: 'info.main', outlineOffset: 3 },
          })}
        >
          <KeyboardArrowUpRoundedIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}
