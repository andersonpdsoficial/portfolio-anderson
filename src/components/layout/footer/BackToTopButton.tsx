'use client';

import { Button } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { footerStyles } from '@/styles/layoutStyles/footerStyles/footer.styles';

export function BackToTopButton() {
  function scrollToTop(): void {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      endIcon={
        <KeyboardArrowUpRoundedIcon
          sx={{ fontSize: 20 }}
        />
      }
      sx={footerStyles.backToTop}
    >
      Voltar ao topo
    </Button>
  );
}