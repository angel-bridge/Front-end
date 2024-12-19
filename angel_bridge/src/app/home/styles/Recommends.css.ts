import { style } from '@vanilla-extract/css'

export const recommends = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    maxWidth: '90rem',
    padding: '0rem 12.5rem',
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
    borderRadius: '1.5rem',
    overflow: 'hidden',
    position: 'relative',
});

export const activeBadge = style({
    display: 'inline-flex',
    padding: '0.375rem 0.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1.875rem',
    background: 'var(--Purple-400)',
    position: 'absolute',
    top: '1rem',
    left: '1rem',

    color: 'var(--Grayscale-00)',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
});

export const inactiveBadge = style({
    display: 'inline-flex',
    padding: '0.375rem 0.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1.875rem',
    background: 'var(--Grayscale-500)',
    position: 'absolute',
    top: '1rem',
    left: '1rem',

    color: 'var(--Grayscale-00)',
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
    color: 'var(Grayscale-800)',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.025rem',
});

export const contentBio = style({
    width: '100%',
    color: 'var(--Grayscale-600)',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
});