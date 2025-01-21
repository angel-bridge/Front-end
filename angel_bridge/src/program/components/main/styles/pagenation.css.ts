import { label14SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const pagenationNumber = style({
  display: 'flex',
  width: '2.8rem',
  height: '2.8rem',
  paddingRight: '1rem',
  paddingLeft: '1rem',
  paddingTop: '0.3rem',
  paddingBottom: '0.3rem',
  borderRadius: '50%',
  backgroundColor: vars.grayScale.grayscale800,
  color: vars.grayScale.grayscale00,
})

export const pageButton = style({
  position: 'relative',
  width: '2.4rem',
  height: '2.4rem',
})

export const pageNumberContainer = style([
  label14SB,
  {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.8rem',
    alignItems: 'center',
    marginTop: '8rem',
    marginBottom: '4rem',
  },
])
