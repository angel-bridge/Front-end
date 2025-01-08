import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

export const contents = style({
    display: 'flex',
    width: '50rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '2.8rem',
    gap: '2.4rem',
    borderRadius: '24px',
    background: vars.purple.purple100,
    transition: 'transform 0.7s ease',
    ':hover': {
        transform: 'translateY(-5px)',
    },
    cursor: 'pointer',
});

export const contentImage = style({
    width: '18rem',
    height: '18rem',
    borderRadius: '24px',
    overflow: 'hidden',
    // position: 'relative',
});

export const contentInfo= style({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '2.6rem',
    alignSelf: 'stretch',
});

export const contentText = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.2rem',
    flex: '1 0 0',
});

export const contentPeriod = style([
    font.body16M,
    {
        width: '100%',
        color: vars.grayScale.grayscale300,
    }
]);

export const contentTitle = style([
    font.title24SB,
    {
        width: '100%',
        color: vars.grayScale.grayscale800,
    }
]);

export const contentBio = style([
    font.body18M,
    {
        width: '100%',
        color: vars.grayScale.grayscale600,
    }
]);