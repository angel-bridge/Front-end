import React from 'react'
import { input } from '../styles/input.css'

// 닉네임, 전화번호, 이메일 주소 변경 input
export default function Input({ infodetail }: { infodetail: string }) {
  return <input placeholder={infodetail} className={input}></input>
}
