import { label14M, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({})

export const label = style([
  label14M,
  {
    display: 'flex',
    justifyContent: 'flex-end',
    color: vars.grayScale.grayscale400,
    margin: 0,
  },
])
