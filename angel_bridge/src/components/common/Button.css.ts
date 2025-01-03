import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css';

export const signupButton = style({
    display: 'flex',
    width: '30rem',
    height: '4rem',
    padding: '1rem, 2.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.75rem',
    borderRadius: '70px',
    cursor: 'pointer',
});

export const signupText = style({
    color: vars.grayScale.grayscale00,
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.025rem',
});

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
    active: {
        color: vars.grayScale.grayscale00,
    },
    disabled: {
        color: vars.grayScale.grayscale400,
    },
});