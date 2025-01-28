import Image from 'next/image'
import React from 'react'
import greencheck from '../assets/greencheck.svg'
import { snackbar_container, green_check } from '../styles/snackbar.css'

export default function SnackBar() {
  return (
    <div className={snackbar_container}>
      <div className={green_check}>
        <Image src={greencheck} alt="변경사항 완료" fill />
      </div>
      <p>변경사항 저장이 완료되었어요</p>
    </div>
  )
}
