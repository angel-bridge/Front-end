import { style } from '@vanilla-extract/css'

export const loginModal = style({
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


export const loginWrapper = style({
    display: 'flex',
    width: '35rem',
    padding: '2.5rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.625rem',
    borderRadius: '2.5rem',
    background: '#FFFFFF',
    position: 'relative',

    zIndex: '11',
});

export const closeButton = style({
    display: 'flex',
    width: '1.75rem',
    height: '1.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.4375rem',
    borderRadius: '1.3425rem',
    background: '#21272A',
    cursor: 'pointer',
    position: 'absolute',
    right: '1.5rem',
    top: '1.1875rem',
    
    zIndex: '12',
});

export const image = style({
    width: '30rem',
    height: '12.14575rem',
    marginTop: '1.25rem',
    zIndex: '12',
});

export const announceText = style({
    color: '#4D5358',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.025rem',
    textAlign: 'center',
    alignSelf: 'stretch',
    marginTop: '0.75rem',
    marginBottom: '2.48rem',

    zIndex: '12',
});

export const loginButton = style({
    display: 'flex',
    width: '30rem',
    height: '4rem',
    padding: '1rem, 2.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.75rem',
    borderRadius: '4.375rem',
    background: '#FEE500',
    cursor: 'pointer',

    zIndex: '12',
});

export const loginText = style({
    color: '#21272A',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.025rem',

    zIndex: '13',
});