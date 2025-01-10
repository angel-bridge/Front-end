import { label14M, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '57.2rem',
})

export const label = style([
  label14M,
  {
    display: 'flex',
    justifyContent: 'flex-end',
    color: vars.grayScale.grayscale400,
    margin: 0,
  },
])

export const Info_container = style({
  display: 'flex',

  justifyContent: 'space-between',
  alignItems: 'stretch',
  width: '104rem',
  height: '23.8rem',

  flexWrap: 'wrap',
})
