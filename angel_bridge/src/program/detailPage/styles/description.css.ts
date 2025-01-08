import { title16SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const emoji_style = style({
  position: 'relative',
  width: '1.6rem',
  height: '1.6rem',
  padding: '0.8rem',
})

export const detail_title = style([
  title16SB,
  {
    color: vars.grayScale.grayscale800,
  },
])

export const detail_container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
