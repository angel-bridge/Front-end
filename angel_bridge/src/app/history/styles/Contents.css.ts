import { style } from '@vanilla-extract/css';
import * as font from '@/style/theme.css'

export const wrapper = style({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '4rem',
    width: '104rem',
});

export const warning = style([
    font.heading28B,
]);

