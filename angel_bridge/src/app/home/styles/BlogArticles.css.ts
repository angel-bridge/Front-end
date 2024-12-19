import { style } from '@vanilla-extract/css'

export const articles = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    maxWidth: '90rem',
    padding: '0rem 12.5rem',
    alignItems: 'flex-start',
    gap: '1rem',
    alignSelf: 'stretch',
    marginBottom: '2.75rem',
    margin: '0 auto',
});

export const titleWrapper = style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '1rem',
});

export const title = style({
    color: 'var(--Grayscale-800)',
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.03rem',
});

export const seeAll = style({
    color: 'var(--Grayscale-600)',
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

export const contents = style({
    display: 'flex',
    width: '31.75rem',
    padding: '1.25rem 1.75rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1.25rem',
    borderRadius: '1rem',
    background: 'var(--Purple-100)',
    transition: 'transform 0.7s ease',
    ':hover': {
        transform: 'translateY(-5px)',
        background: 'var(--Purple-200)',
    },
    cursor: 'pointer',
});

export const textWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
});

export const contentTitle = style({
    width: '100%',
    color: 'var(--Grayscale-700)',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0225rem',
});

export const contentText = style({
    width: '100%',
    alignSelf: 'stretch',
    color: 'var(--Grayscale-500)',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
});

export const writerWrapper = style({
    width: '100%',
    display: 'flex',
    gap: '1.5rem',
});

export const writer = style({
    color: 'var(--Grayscale-700)',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
    marginLeft: '-1rem',
});

export const writtenDate = style({
    color: 'var(--Grayscale-500)',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
});