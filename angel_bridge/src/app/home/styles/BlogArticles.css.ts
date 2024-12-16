import { style } from '@vanilla-extract/css'

export const recommends = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    padding: '0rem 12.5rem',
    alignItems: 'flex-start',
    gap: '1rem',
    alignSelf: 'stretch',
    marginBottom: '2.75rem',
});

export const titleWrapper = style({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '1rem',
});

export const title = style({
    color: '#21272A',
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.03rem',
});

export const seeAll = style({
    color: '#4D5358',
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
    background: '#F6F6FB',
    transition: 'transform 0.3s ease',
    ':hover': {
        transform: 'translateY(-5px)',
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
    color: '#343A3F',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0225rem',
});

export const contentText = style({
    width: '100%',
    alignSelf: 'stretch',
    color: '#697077',
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
    color: '#343A3F',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
    marginLeft: '-1rem',
});

export const writtenDate = style({
    color: '#697077',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '150%',
    letterSpacing: '-0.0175rem',
});