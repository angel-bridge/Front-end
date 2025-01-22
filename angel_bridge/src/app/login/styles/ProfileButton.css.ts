import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

export const profileButton = style({
    display: 'flex',
    width: '14rem',
    height: '4.8rem',
    padding: '0.6rem 0.8rem',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    borderRadius: '30px',
    background: vars.grayScale.grayscale50,
    cursor: 'pointer',
});

export const profileImage = style({
    width: '3.6rem',
    height: '3.6rem',
    borderRadius: '30px',
    position: 'relative',
    overflow: 'hidden',
});

export const buttonText = style([
    font.title18SB, 
    {
        display: 'flex',
        height: '3.6rem',
        padding: '0.4rem 1.6rem',
        justifyContent: 'center',
        alignItems: 'center',
        color: vars.grayScale.grayscale800,
    }
]);

export const profileModal = style({
    display: 'inline-flex',
    padding: '0.4rem 0',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    position: 'absolute', 
    top: '100%',
    background: vars.grayScale.grayscale50,
});

export const modalMenu = style([
    font.label16SB,
    {
        display: 'flex',
        width: '14rem',
        height: '4rem',
        padding: '0.9rem 3.5rem 0.7rem 3.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: vars.grayScale.grayscale800,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
    }
]);