import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css';
import * as font from '@/style/theme.css'

export const recommends = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    maxWidth: '104rem',
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    gap: 'auto',
    alignSelf: 'stretch',
    margin: '0 auto 4.4rem auto',
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
]);

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