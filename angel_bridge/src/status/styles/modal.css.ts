import { vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const content_container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',

  width: '44.2rem',
  height: '49.6rem',

  paddingTop: '2.8rem',
  paddingBottom: '2.8rem',
  paddingRight: '2rem',
  paddingLeft: '2rem',

  borderRadius: '28px',
  backgroundColor: vars.grayScale.grayscale00,
})
