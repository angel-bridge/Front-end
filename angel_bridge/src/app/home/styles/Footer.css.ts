import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css';

export const footer = style({
    display: 'flex',
    width: '100vw',
    padding: '1.25rem 12.5rem',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    background: vars.grayScale.grayscale800,
    bottom: '0px',
});

export const logoWrapper = style({
    display: 'flex',
    gap: '0.5rem',
});

export const buttonWrapper = style({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.875rem',
});

export const button = style({
    color: vars.grayScale.grayscale300,
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.02rem',
    cursor: 'pointer',
});