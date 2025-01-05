import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css';
import * as font from '@/style/theme.css'

export const footer = style({
    display: 'flex',
    width: '100vw',
    padding: '2rem 20rem',
    boxSizing: 'border-box',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    background: vars.grayScale.grayscale800,
    bottom: '0px',
});

export const logoWrapper = style({
    display: 'flex',
    gap: '0.8rem',
});

export const buttonWrapper = style({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '2.9rem',
});

export const button = style([
    font.title16SB,
    {
        color: vars.grayScale.grayscale300,
        cursor: 'pointer',
    }
]);