import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css';

export const contents = style({
    display: 'flex',
    width: '20.625rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    transition: 'transform 0.7s ease',
    ':hover': {
        transform: 'translateY(-5px)',
    },
    cursor: 'pointer',
});

export const contentImage = style({
    width: '20.625rem',
    height: '11.25rem',
    borderRadius: '24px',
    overflow: 'hidden',
    position: 'relative',
});

export const activeBadge = style({
    display: 'inline-flex',
    padding: '0.375rem 0.75rem',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30px',
    background: vars.purple.purple400,
    position: 'absolute',
    top: '1rem',
    left: '1rem',

    color: vars.grayScale.grayscale00,
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
});

export const inactiveBadge = style({
    display: 'inline-flex',
    padding: '0.375rem 0.75rem',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '30px',
    background: vars.grayScale.grayscale500,
    position: 'absolute',
    top: '1rem',
    left: '1rem',

    color: vars.grayScale.grayscale00,
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
});

export const contentText = style({
    display: 'flex',
    flexDirection: 'column',
});

export const contentTitle = style({
    width: '100%',
    color: vars.grayScale.grayscale800,
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.025rem',
});

export const contentBio = style({
    width: '100%',
    color: vars.grayScale.grayscale600,
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
});