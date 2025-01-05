import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

export const articles = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    maxWidth: '104rem',
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    gap: 'auto',
    alignSelf: 'stretch',
    marginBottom: '10rem',
    margin: '0 auto',
});

export const titleWrapper = style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '1.6rem',
});

export const title = style([
    font.title24SB,
    {
        color: vars.grayScale.grayscale800,
    }
])

export const seeAll = style([
    font.subTitle16M, 
    {
        color: vars.grayScale.grayscale600,
        cursor: 'pointer',
    }
]);

export const contentsWrapper = style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
});

export const contents = style({
    display: 'flex',
    width: '50.8rem',
    padding: '2rem 2.8rem',
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
    borderRadius: '16px',
    background: vars.purple.purple100,
    transition: 'transform 0.7s ease',
    ':hover': {
        transform: 'translateY(-5px)',
        background: vars.purple.purple200,
    },
    cursor: 'pointer',
});

export const textWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
});

export const contentTitle = style([
    font.title18SB, 
    {
        width: '100%',
        color: vars.grayScale.grayscale700,
    }
]);

export const contentText = style([
    font.body14M,
    {
        width: '100%',
        alignSelf: 'stretch',
        color: vars.grayScale.grayscale500,
    }
]);

export const writerWrapper = style({
    width: '100%',
    display: 'flex',
    gap: '1.2rem',
});

export const writer = style([
    font.label14SB,
    {
        color: vars.grayScale.grayscale700,
        marginLeft: '-1rem',
    }
]);

export const writtenDate = style([
    font.label14M, 
    {
        color: vars.grayScale.grayscale500,
    }
]);