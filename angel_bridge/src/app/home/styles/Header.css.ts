import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

export const header = style({
    display: 'flex',
    width: '100vw',
    padding: '1.6rem 3.6rem',
    boxSizing: 'border-box',
    background: vars.grayScale.grayscale00,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '0px',
    zIndex: 10,
});

export const loginButton = style({
    width: '12rem',
    height: '4rem',
    padding: '0.8rem 2.4rem',
    boxSizing: 'border-box',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '30px',
    background: vars.grayScale.grayscale800,
    cursor: 'pointer',
});

export const buttonText = style([
    font.title16SB, 
    {
        color: vars.grayScale.grayscale00,
    }
]);

export const menuTabWrapper = style({
    display: 'flex',
    height: '4.8rem',
    padding: '0.6rem 0.8rem',
    boxSizing: 'border-box',
    alignItems: 'center',
    borderRadius: '30px',
    background: vars.grayScale.grayscale50,
    position: "relative",
    zIndex: 1,
});

export const slidingBackground = style({
    position: "absolute",
    width: "12rem",
    height: "3.6rem",
    background: vars.purple.purple400,
    borderRadius: "30px",
    transition: "transform 0.5s ease",
    zIndex: 2,
});

export const colorMenuTab = style({
    display: 'flex',
    width: '12rem',
    height: '3.6rem',
    padding: '0.4rem 1.5rem',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.4rem',
    borderRadius: '30px',
    cursor: 'pointer',
    position: "relative",
    zIndex: 3,
});

export const greyMenuTab = style({
    display: 'flex',
    width: '12rem',
    height: '3.6rem',
    padding: '0.4rem 1.5rem',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.4rem',
    background: 'transparent',
    cursor: 'pointer',
});

export const colorTabText = style([
    font.title18SB,
    {
        color: vars.grayScale.grayscale00,
        textAlign: 'center',
    }
]);

export const greyTabText = style([
    font.title18SB,
    {
        color: vars.grayScale.grayscale500,
        textAlign: 'center',
    }
]);