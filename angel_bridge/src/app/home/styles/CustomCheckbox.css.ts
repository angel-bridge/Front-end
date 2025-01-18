import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
});

export const hiddenCheckbox = style({
    border: 0,
    height: '1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
});

export const styledCheckbox = style({
    width: '2.4rem',
    height: '2.4rem',
    cursor: 'pointer',
    backgroundSize: 'cover',
});

export const checkboxVariants = styleVariants({
    checked: {
        backgroundImage: 'url("/assets/toggleOn.svg")',
    },
    unchecked: {
        backgroundImage: 'url("/assets/toggleOff.svg")',
    },
});
