import { subTitle24M, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const empthy_icon = style({
  position: 'relative',
  width: '4rem',
  height: '4rem',
})

export const empthy_view_container = style([
  subTitle24M,
  {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    color: vars.grayScale.grayscale500,
  },
])
