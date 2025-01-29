import { style } from '@vanilla-extract/css';
import * as font from '@/style/theme.css'

export const wrapper = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, auto)',
    justifyItems: 'center',
    gap: '4rem',
    width: '104rem',

    selectors: {
      '&[data-length="1"] > *:nth-child(1)': {
        gridColumn: '1 / 2',
        gridRow: '1 / 2',
    },
      '&[data-length="2"] > *:nth-child(1)': {
        gridColumn: '1 / 2',
        gridRow: '1 / 2',
    },
      '&[data-length="2"] > *:nth-child(2)': {
        gridColumn: '2 / 3',
        gridRow: '1 / 2',
    },
      '&[data-length="3"] > *:nth-child(1)': {
        gridColumn: '1 / 2',
        gridRow: '1 / 2',
    },
      '&[data-length="3"] > *:nth-child(2)': {
        gridColumn: '2 / 3',
        gridRow: '1 / 2',
    },
      '&[data-length="3"] > *:nth-child(3)': {
        gridColumn: '1 / 2',
        gridRow: '2 / 3',
    },
      '&[data-length="4"] > *': {
        gridColumn: 'auto',
        gridRow: 'auto',
    },
    }
});

export const warning = style([
    font.heading28B,
]);

