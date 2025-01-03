import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css';

export const contents = style({
    display: 'flex',
    width: '31.25rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '1.75rem',
    gap: '1.5rem',
    borderRadius: '24px',
    background: vars.purple.purple100,
    transition: 'transform 0.7s ease',
    ':hover': {
        transform: 'translateY(-5px)',
    },
    cursor: 'pointer',
});

export const contentImage = style({
    width: '11.25rem',
    height: '11.25rem',
    borderRadius: '24px',
    overflow: 'hidden',
    // position: 'relative',
});

export const contentInfo= style({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.625rem',
    alignSelf: 'stretch',
});

export const contentText = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.75rem',
    flex: '1 0 0',
});

export const contentPeriod = style({
    width: '100%',
    color: vars.grayScale.grayscale300,
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.02rem',
});

export const contentTitle = style({
    width: '100%',
    color: vars.grayScale.grayscale800,
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.03rem',
});

export const contentBio = style({
    width: '100%',
    color: vars.grayScale.grayscale600,
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.0225rem',
});