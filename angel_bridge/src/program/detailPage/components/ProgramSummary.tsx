import React from 'react'
import { detail_photo } from '../styles/detail.css'
import Image from 'next/image'

export default function ProgramSummary({ detailFile }: { detailFile: string }) {
  return (
    <div className={detail_photo}>
      <Image src={detailFile} alt="디테일" fill />
    </div>
  )
}
