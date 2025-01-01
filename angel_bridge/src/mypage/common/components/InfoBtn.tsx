import React from 'react'
import { ButtonProps } from '../types/buttonprops'
import { buttonblack, buttongray } from '../styles/button.css'

export default function InfoBtn({ onClick, isInfo }: ButtonProps) {
  return (
    <p onClick={onClick} className={isInfo ? buttonblack : buttongray}>
      회원정보
    </p>
  )
}
