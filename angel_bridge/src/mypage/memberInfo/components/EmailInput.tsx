import React from 'react'
import { input, input_tag, inputwithtag_container } from '../styles/input.css'

export default function EmailInput() {
  return (
    <div className={inputwithtag_container}>
      <p className={input_tag}>이메일 주소 *</p>
      <input placeholder="sadfdsfsdf@adsfsd.com" className={input} />
    </div>
  )
}
