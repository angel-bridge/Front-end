import { style } from '@vanilla-extract/css'

export const footer = style({
    display: 'flex',
    width: '100vw',
    padding: '1.25rem 12.5rem',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    background: '#21272A',
    position: 'fixed',
    bottom: '0px',
});

export const buttonWrapper = style({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.875rem',
});

export const button = style({
    color: '#A2A9B0',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.02rem',
    cursor: 'pointer',
});