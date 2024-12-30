import { style } from '@vanilla-extract/css'
import * as theme from '@/style/theme.css'

export const header = style({
    display: 'flex',
    width: '100vw',
    padding: '1rem 2.25rem',
    boxSizing: 'border-box',
    background: theme.grayColors.grayscale00,
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
    boxSizing: 'border-box',
    justifyItems: 'center',
    alignItems: 'center',
    borderRadius: '30px',
    background: theme.grayColors.grayscale800,
    cursor: 'pointer',
});

export const buttonText = style({
    color: theme.grayColors.grayscale00,
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
    boxSizing: 'border-box',
    alignItems: 'center',
    borderRadius: '30px',
    background: theme.grayColors.grayscale50,
    position: "relative",
    zIndex: 1,
});

export const slidingBackground = style({
    position: "absolute",
    width: "8rem",
    height: "2.25rem",
    background: theme.purpleColors.purple400,
    borderRadius: "30px",
    transition: "transform 0.5s ease",
    zIndex: 2,
});

export const colorMenuTab = style({
    display: 'flex',
    width: '8rem',
    height: '2.25rem',
    padding: '0.25rem 0.75rem',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.25rem',
    borderRadius: '30px',
    cursor: 'pointer',
    position: "relative",
    zIndex: 3,
});

export const greyMenuTab = style({
    display: 'flex',
    width: '8rem',
    height: '2.25rem',
    padding: '0.25rem 0.75rem',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.25rem',
    background: 'transparent',
    cursor: 'pointer',
});

export const colorTabText = style({
    color: theme.grayColors.grayscale00,
    textAlign: 'center',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0225rem',
});

export const greyTabText = style({
    color: theme.grayColors.grayscale500,
    textAlign: 'center',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
    letterSpacing: '-0.0225rem',
});