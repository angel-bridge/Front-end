import { style } from '@vanilla-extract/css'

export const backgound_style = style({
  backgroundColor: '#e8f3ff',
})

export const wrapper_style = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '800px',
  margin: '0 auto',
})

export const button_style = style({
  color: '#f9fafb',
  backgroundColor: '#3182f6',
  margin: '3rem 1.5rem 0rem 1.5rem',
  fontSize: '1.5rem',
  fontWeight: 600,
  lineHeight: '1.8rem',
  whiteSpace: 'nowrap',
  textAlign: 'center',
  cursor: 'pointer',
  border: '0 solid transparent',
  userSelect: 'none',
  transition: 'background 0.2s ease, color 0.1s ease',
  textDecoration: 'none',
  borderRadius: '7px',
  padding: '1.1rem 1.6rem',
  width: '25rem',

  ':hover': {
    color: '#fff',
    backgroundColor: '#1b64da',
  },
})
