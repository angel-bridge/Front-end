import { style } from '@vanilla-extract/css'

export const header = style({
    display: 'flex',
    width: '100vw',
    padding: '1rem 2.25rem',
    background: 'var(--Grayscale-00)',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '0px',
    zIndex: 10,
});

export const loginButton = style({
    width: '7.5rem',
    height: '2.5rem',
    padding: '0.5rem 1.5rem',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '1.875rem',
    background: 'var(--Grayscale-800)',
    cursor: 'pointer',
});

export const buttonText = style({
    color: 'var(--Grayscale-00)',
    textAlign: 'center',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.02rem',
});

export const menuTabWrapper = style({
    display: 'flex',
    height: '3rem',
    padding: '0.375rem 0.5rem',
    alignItems: 'center',
    borderRadius: '1.875rem',
    background: 'var(--Grayscale-50)',
    position: "relative",
    zIndex: 1,
});

export const slidingBackground = style({
    position: "absolute",
    width: "7.5rem",
    height: "2.25rem",
    background: "var(--Purple-400)",
    borderRadius: "1.875rem",
    transition: "transform 0.5s ease",
    zIndex: 2,
});

export const colorMenuTab = style({
    display: 'flex',
    width: '7.5rem',
    height: '2.25rem',
    padding: '0.25rem 0.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.25rem',
    borderRadius: '1.875rem',
    cursor: 'pointer',
    position: "relative",
    zIndex: 3,
});

export const greyMenuTab = style({
    display: 'flex',
    width: '7.5rem',
    height: '2.25rem',
    padding: '0.25rem 0.75rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.25rem',
    background: 'transparent',
    cursor: 'pointer',
});

export const colorTabText = style({
    color: 'var(--Grayscale-00)',
    textAlign: 'center',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0225rem',
});

export const greyTabText = style({
    color: 'var(--Grayscale-500)',
    textAlign: 'center',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0225rem',
});