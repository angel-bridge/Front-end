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
import { loadTossPayments, ANONYMOUS } from '@tosspayments/tosspayments-sdk'

const amount = {
  currency: 'KRW',
  value: 50_000,
}

export default function PurchaseBtn() {
  async function handleClickPayment() {
    await pay.requestPayment({
      orderId: Math.random().toString(32),
      orderName: '토스 티셔츠 외 2건',
      successUrl: window.location.origin + '/sandbox/success',
      failUrl: window.location.origin + '/sandbox/fail',
      customerEmail: 'customer123@gmail.com',
      customerName: '김토스',
      customerMobilePhone: '01012341234',
    })
  }

  return (
    <div className={container}>
      <div className={text}>
        <p className={title}>예비창업패키지 2주 완성</p>
        <p className={detail}>12월 15일 (일) 자정 마감</p>
      </div>

      <button className={button_style}>
        <span className={icon}>
          <Image src={purchaseIcon} alt="구매" fill />
        </span>
        구매하기
      </button>
    </div>
  )
}
