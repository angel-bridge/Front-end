import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

export const signupButton = style({
    display: 'flex',
    width: '44.4rem',
    height: '6.4rem',
    padding: '1.6rem 2.0rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.2rem',
    borderRadius: '70px',
    border: 'none',
    cursor: 'pointer',
});

export const signupText = style([
    font.title20SB,
    {
        color: vars.grayScale.grayscale00,
    }
]);

export const signupButtonVariants = styleVariants({
    active: {
        background: vars.purple.purple400,
        cursor: 'pointer',
    },
    disabled: {
        background: vars.grayScale.grayscale100,
        cursor: 'not-allowed',
    },
});

export const signupTextVariants = styleVariants({
    active: [font.title20SB, { color: vars.grayScale.grayscale00 }],
    disabled: [font.title20SB, { color: vars.grayScale.grayscale400 }],
});