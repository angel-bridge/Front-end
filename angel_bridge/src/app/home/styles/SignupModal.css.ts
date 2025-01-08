import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

export const signupModal = style({
    width: '100vw',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: '10',
    background: 'rgba(0, 0, 0, 0.80)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});


export const signupWrapper = style({
    display: 'flex',
    padding: '4rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.625rem',
    borderRadius: '40px',
    background: vars.grayScale.grayscale00,
    position: 'relative',
});

export const closeButton = style({
    display: 'flex',
    width: '2.8rem',
    height: '2.8rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.7rem',
    borderRadius: '21px',
    background: vars.grayScale.grayscale800,
    cursor: 'pointer',
    position: 'absolute',
    right: '2.4rem',
    top: '2.4rem',
});

export const title = style([
    font.title28SB,
    {
        color: vars.grayScale.grayscale800,
        textAlign: 'center',
        alignSelf: 'stretch',
    }
]);

export const field = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    marginBottom: '2.4rem',
});

export const fieldTitle = style([
    font.label16SB,
    {
        color: vars.grayScale.grayscale800,
        width: '48rem',
        padding: '0rem 1rem',
        boxSizing: 'border-box',
    }
]);

export const announceText = style([
    font.subTitle20SB,
    {
        color: vars.grayScale.grayscale600,
        textAlign: 'center',
        alignSelf: 'stretch',
        marginTop: '0.8rem',
        marginBottom: '4.8rem',
    }
]);

export const inputField = style({
    display: 'flex',
    width: '48rem',
    height: '6.4rem',
    padding: '1.6rem 2rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '16px',
    border: '2px solid',
    borderColor: vars.grayScale.grayscale100,
    background: vars.grayScale.grayscale00,
});

export const terms = style({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '7.2rem',
});

export const selectAll = style({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1.2rem',
    marginTop: '2.4rem',
    width: '100%',
});

export const termWrapper = style({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '1.2rem',
    width: '100%',
    marginBottom: '1rem',
});

export const termText = style([
    font.label14M,
    {
        color: vars.grayScale.grayscale800,
        alignSelf: 'center',
    }
]);

export const line = style({
    width: '48rem',
    height: '1px',
    backgroundColor: vars.grayScale.grayscale100,
    margin: '1.4rem 0rem',
});

export const signupButton = style({
    display: 'flex',
    width: '48rem',
    height: '6.4rem',
    padding: '1.6rem, 2rem',
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
    active: {
        color: vars.grayScale.grayscale00,
    },
    disabled: {
        color: vars.grayScale.grayscale400,
    },
});