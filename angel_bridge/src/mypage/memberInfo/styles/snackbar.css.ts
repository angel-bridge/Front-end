import { label16M, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const snackbar_container = style([
  label16M,
  {
    position: 'absolute',
    right: '20rem',
    bottom: '6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: vars.grayScale.grayscale800,

    gap: '1.2rem',
    color: vars.grayScale.grayscale00,

    borderRadius: '8px',
    width: '26rem',
    height: '4.8rem',
  },
])

export const green_check = style({
  position: 'relative',
  width: '2.4rem',
  height: '2.4rem',
})
