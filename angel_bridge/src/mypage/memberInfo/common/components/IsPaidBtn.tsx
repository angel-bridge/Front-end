import React from 'react'
import { ButtonProps } from '../types/buttonprops'
import { buttonblack, buttongray } from '../styles/button.css'

export default function IsPaidBtn({ onClick, isInfo }: ButtonProps) {
  return (
    <p onClick={onClick} className={isInfo ? buttongray : buttonblack}>
      결제내역
    </p>
  )
}
