import { body14M, title16SB, title20SB, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

const date = style([
  body14M,
  {
    color: vars.grayScale.grayscale300,
  },
])
const is_paied = style([
  title16SB,
  {
    color: vars.sementic.sementicSuccess,
  },
])

const title = style([
  title20SB,
  {
    color: vars.grayScale.grayscale800,
  },
])
const price = style([
  body14M,
  {
    color: vars.grayScale.grayscale600,
  },
])

export { date, is_paied, title, price }
