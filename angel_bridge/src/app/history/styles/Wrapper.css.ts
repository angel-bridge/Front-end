import { style } from '@vanilla-extract/css'

export const wrapper = style({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '13rem',
    marginBottom: '30rem',
    width: '100vw',
    maxWidth: '104rem',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2.4rem',
    boxSizing: 'border-box',
    padding: '0 33rem', // 이 부분 추후 수정
});