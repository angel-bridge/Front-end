import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css';

export const recommends = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    maxWidth: '90rem',
    padding: '0rem 12.5rem',
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    gap: '1rem',
    alignSelf: 'stretch',
    margin: '0 auto 2.75rem auto',
});

export const titleWrapper = style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '1rem',
});

export const title = style({
    color: vars.grayScale.grayscale800,
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: '600',
    //lineHeight: '150%',
    letterSpacing: '-0.03rem',
});

export const seeAll = style({
    color: vars.grayScale.grayscale600,
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.02rem',
    cursor: 'pointer',
});

export const contentsWrapper = style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
});