import React from 'react'
import { input, input_tag, inputwithtag_container } from '../styles/input.css'

export default function PhoneNumberInput() {
  return (
    <div className={inputwithtag_container}>
      <p className={input_tag}>전화번호 *</p>
      <input placeholder="010-1234-1234" className={input} />
    </div>
  )
}
