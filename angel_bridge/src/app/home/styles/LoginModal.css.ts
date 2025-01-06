import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

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
    width: '56rem',
    padding: '4rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    borderRadius: '40px',
    background: vars.grayScale.grayscale00,
    position: 'relative',

    zIndex: '11',
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
    top: '1.9rem',
    
    zIndex: '12',
});

export const image = style({
    width: '48rem',
    height: '19.4rem',
    marginTop: '2rem',
    zIndex: '12',
});

export const announceText = style([
    font.subTitle20SB, {
        color: vars.grayScale.grayscale600,
        textAlign: 'center',
        alignSelf: 'stretch',
        marginTop: '0.75rem',
        marginBottom: '2.48rem',
    
        zIndex: '12',
    }
]);

export const loginButton = style({
    display: 'flex',
    width: '48rem',
    height: '6.4rem',
    padding: '1.6rem, 4rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.2rem',
    borderColor: '#FEE500',
    borderRadius: '70px',
    background: '#FEE500',
    cursor: 'pointer',

    zIndex: '12',
});

export const loginText = style([
    font.title20SB, 
    {
        color: vars.grayScale.grayscale800,
        zIndex: '13',
    }
]);