import { style } from '@vanilla-extract/css'
import { vars } from '@/style/theme.css'

export const footer = style({
  display: 'flex',
  width: '100vw',
  padding: '2rem 20rem',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  background: vars.grayScale.grayscale800,
  bottom: '0px',
})

export const logoWrapper = style({
  display: 'flex',
  gap: '0.8rem',
})

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.6rem',
})

export const logo = style({
  position: 'relative',
  width: '12.8rem',
  height: '2.8rem',
})

export const adminButton = style({
  position: 'relative',
  width: '2rem',
  height: '2rem',
})

export const button = style({
  cursor: 'pointer',
  position: 'relative',
  width: '3.2rem',
  height: '3.2rem',
})
