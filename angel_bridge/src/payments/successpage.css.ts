import { style } from '@vanilla-extract/css'

export const wrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '540px',
  minHeight: '100vh',
})

export const confirmSuccess = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const responseSection = style({
  width: '100%',
})

export const flexBetween = style({
  display: 'flex',
  justifyContent: 'space-between',
})

export const responseLabel = style({
  fontWeight: 'bold',
})

export const responseText = style({
  color: '#333',
})

export const buttonGroup = style({
  width: '100%',
  display: 'flex',
  gap: '16px',
})

export const btn = style({
  width: '100%',
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#007aff',
  color: '#fff',
  borderRadius: '5px',
  textDecoration: 'none',
})

export const primaryBtn = style([
  btn,
  {
    backgroundColor: '#0051a8',
  },
])

export const imageStyle = style({
  position: 'relative',
  width: '12rem',
  height: '12rem',
})
