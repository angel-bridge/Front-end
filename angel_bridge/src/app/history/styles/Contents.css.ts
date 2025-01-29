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
    opacity: 0,
    width: '50rem', 
    height: '32.4rem',
});

export const warning = style([
    font.heading28B,
    {
        textAlign: 'center',
        width: '100%',
    }
]);

