'use client'
import React, { useEffect, useState } from 'react'
import {
  button_style,
  detail,
  icon,
  purchased_fixed,
  purchased_sticky,
  text,
  title,
  wrapper,
} from '../styles/purchase.css'
import Image from 'next/image'
import purchaseIcon from '../assets/purchase.svg'
import { useParams, useRouter } from 'next/navigation'

export default function PurchaseBtn() {
  const params = useParams()
  const router = useRouter()
  const educationId = params.educationId as string
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const wrapperElement = document.querySelector(`.${wrapper}`)!
      const rect = wrapperElement.getBoundingClientRect()

      if (rect.top <= 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  function onClickPurchaseBtn() {
    router.push(`/payments?eucationId=${educationId}`)
    if (typeof window !== 'undefined' && educationId != undefined) {
      localStorage.setItem('educationId', educationId)
    }
  }

  return (
    <div className={wrapper}>
      <div className={isFixed ? purchased_fixed : purchased_sticky}>
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
    </div>
  )
}
