import React from 'react'
import { is_canceld_style, is_paied_style } from '../../styles/texts.css'

export default function IsPaid({ ispaid }: { ispaid: boolean }) {
  return (
    <p className={ispaid ? is_paied_style : is_canceld_style}>
      {ispaid ? '결제 완료' : '결제 취소'}
    </p>
  )
}
