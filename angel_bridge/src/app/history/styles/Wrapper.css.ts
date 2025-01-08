import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'
import * as font from '@/style/theme.css'

export const wrapper = style({
    display: 'flex',
    marginTop: '13rem',
    flexDirection: 'column',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '104rem',
    gap: '2.4rem',
});