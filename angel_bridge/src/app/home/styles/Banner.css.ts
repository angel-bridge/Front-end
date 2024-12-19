import { style } from '@vanilla-extract/css'

export const banner = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100vw',
    height: '12.5rem',
    justifyContent: 'center',
    marginTop: '5rem',
    overflow: 'hidden',
});

export const slidesContainer = style({
    display: 'flex',
    transition: 'transform 0.7s ease-in-out',
    width: '100%',
    height: '100%',
    willChange: 'transform',
});

export const slide = style({
    flexShrink: 0,
    width: '100vw',
    height: '100%',
    position: 'relative',
});

export const image = style({
    objectFit: 'cover',
});

export const indicatorContainer = style({
    position: 'absolute',
    bottom: '0.62rem',
    display: 'flex',
    gap: '0.5rem',
});

export const indicator = style({
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '1.875rem',
    background: 'var(--Grayscale-200)',
    cursor: 'pointer',
    transition: 'background-color 0.7s ease',
});

export const activeIndicator = style({
    width: '1.75rem',
    height: '0.5rem',
    borderRadius: '1.875rem',
    background: 'var(--Purple-400)',
});
