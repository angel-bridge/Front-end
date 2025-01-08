import { subTitle16M, vars } from '@/style/theme.css'
import { style } from '@vanilla-extract/css'

export const search_style = style([
  subTitle16M,
  {
    display: 'flex',
    alignItems: 'center',

    width: '33rem',
    height: '4.8rem',
    paddingLeft: '2rem',

    borderRadius: '12px',
    borderWidth: '0.2rem',
    borderColor: vars.grayScale.grayscale50,
    backgroundColor: vars.grayScale.grayscale00,

    backgroundImage: 'url(/assets/search.svg)',
    backgroundSize: '2.4rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center right 1.2rem',

    '::placeholder': {
      color: vars.grayScale.grayscale400,
    },
  },
])
