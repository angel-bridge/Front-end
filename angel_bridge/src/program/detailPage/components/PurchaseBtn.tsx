'use client'
import React from 'react'
import {
  button_style,
  container,
  detail,
  icon,
  text,
  title,
} from '../styles/purchase.css'
import Image from 'next/image'
import purchaseIcon from '../assets/purchase.svg'
import { useParams, useRouter } from 'next/navigation'

export default function PurchaseBtn() {
  const params = useParams()
  const router = useRouter()
  const educationId = params.educationId

  function onClickPurchaseBtn() {
    router.push(`/payments?eucationId=${educationId}`)
  }

  return (
    <div className={container}>
      <div className={text}>
        <p className={title}>예비창업패키지 2주 완성</p>
        <p className={detail}>12월 15일 (일) 자정 마감</p>
      </div>

      <button onClick={onClickPurchaseBtn} className={button_style}>
        <span className={icon}>
          <Image src={purchaseIcon} alt="구매" fill />
        </span>
        구매하기
      </button>
    </div>
  )
}
