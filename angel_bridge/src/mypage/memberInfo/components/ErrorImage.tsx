import React from 'react'
import Image from 'next/image'
import ErrorIc from '../assets/error.svg'
import { error_icon } from '../styles/input.css'

export default function ErrorImage() {
  return (
    <div className={error_icon}>
      <Image alt="에러" src={ErrorIc} fill />
    </div>
  )
}
