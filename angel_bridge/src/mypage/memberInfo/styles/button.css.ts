import { style } from '@vanilla-extract/css'
import { grayColors, title24SB } from 'style/theme.css'

export const buttonblack = style([
  title24SB,
  {
    color: grayColors.grayscale800,
  },
])

export const buttongray = style([
  title24SB,
  {
    color: grayColors.grayscale300,
  },
])
