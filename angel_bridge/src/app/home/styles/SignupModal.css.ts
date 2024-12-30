import { style, styleVariants } from '@vanilla-extract/css'

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
    width: '35rem',
    padding: '2.5rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.625rem',
    borderRadius: '40px',
    background: 'var(--Grayscale-00)',
    position: 'relative',
});

export const closeButton = style({
    display: 'flex',
    width: '1.75rem',
    height: '1.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.4375rem',
    borderRadius: '21px',
    background: 'var(--Grayscale-800)',
    cursor: 'pointer',
    position: 'absolute',
    right: '1.5rem',
    top: '1.1875rem',
});

export const title = style({
    color: 'var(--Grayscale-800)',
    fontSize: '1.75rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.035rem',
    textAlign: 'center',
    alignSelf: 'stretch',
});

export const field = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.5rem',
});

export const fieldTitle = style({
    color: 'var(--Grayscale-800)',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.02rem',

    width: '30rem',
    padding: '0rem 0.625rem',
    boxSizing: 'border-box',
});

export const announceText = style({
    color: 'var(--Grayscale-600)',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.025rem',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: '0.5rem',
    marginBottom: '3rem',
});

export const inputField = style({
    display: 'flex',
    width: '30rem',
    height: '4rem',
    padding: '1rem 1.25rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '16px',
    border: '2px solid var(--Grayscale-100)',
    background: 'var(--Grayscale-00)',
});

export const terms = style({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '4.5rem',
});

export const selectAll = style({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '0.75rem',
    marginTop: '1.5rem',
    width: '100%',
});

export const termWrapper = style({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '0.75rem',
    width: '100%',
    marginBottom: '0.81rem',
});

export const termText = style({
    color: 'var(--Grayscale-800)',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',

    alignSelf: 'center',
});

export const line = style({
    width: '30rem',
    height: '1px',
    backgroundColor: 'var(--Grayscale-100)',
    margin: '0.88rem 0rem',
});

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
    color: 'var(--Grayscale-00)',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.025rem',
});

export const signupButtonVariants = styleVariants({
    active: {
        background: 'var(--Purple-400)',
        cursor: 'pointer',
    },
    disabled: {
        background: 'var(--Grayscale-100)',
        cursor: 'not-allowed',
    },
});

export const signupTextVariants = styleVariants({
    active: {
        color: 'var(--Grayscale-00)',
    },
    disabled: {
        color: 'var(--Grayscale-400)',
    },
});