import React from 'react'
import { input_tag } from '../styles/input.css'

//각 input이 뭐에 관련된 건지지
export default function InputTag({ info }: { info: string }) {
  return <p className={input_tag}>{info} *</p>
}
