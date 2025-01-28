import React from 'react'
import { is_canceld_style, is_paied_style } from '../../styles/texts.css'

export default function IsPaid({ status }: { status: string }) {
  return (
    <p className={status === '결제 완료' ? is_paied_style : is_canceld_style}>
      {status}
    </p>
  )
}
