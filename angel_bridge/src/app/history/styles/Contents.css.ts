import { style } from '@vanilla-extract/css';
import * as font from '@/style/theme.css'

export const wrapper = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, auto)',
    justifyItems: 'center',
    gap: '4rem',
    width: '104rem',
});

export const emptyCard = style({
    visibility: 'hidden',
    width: '100%', 
    height: '100%',
});

export const warning = style([
    font.heading28B,
]);

