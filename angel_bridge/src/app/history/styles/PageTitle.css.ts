import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

export const wrapper = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2.4rem',
    marginBottom: '4.4rem',
})

export const title = style([
    font.title32SB,
    {
        color: vars.grayScale.grayscale800,
        width: '104rem',
    }
]);

export const button_container = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    gap: '1.2rem',
    height: '4.8rem',
})