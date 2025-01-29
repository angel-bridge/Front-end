import Image from 'next/image'
import React from 'react'
import preparingIc from '../../assets/preparingIc.svg'
import {
  empthy_icon,
  empthy_view_container,
} from '@/program/styles/empthyview.css'

export default function EmpthyView() {
  return (
    <div className={empthy_view_container}>
      <div className={empthy_icon}>
        <Image src={preparingIc} fill alt="준비중" />
      </div>
      <p>앗! 결제한 프로그램이 없어요</p>
    </div>
  )
}
