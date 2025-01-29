'use client'
import React, { useEffect, useState } from 'react'
import {
  button_style,
  detail,
  icon,
  purchased_fixed,
  text,
  title,
} from '../styles/purchase.css'
import Image from 'next/image'
import purchaseIcon from '../assets/purchase.svg'
import { useParams, useRouter } from 'next/navigation'
import LoginModal from '@/app/home/components/LoginModal'

export default function PurchaseBtn({ price }: { price: number | undefined }) {
  const params = useParams()
  const router = useRouter()
  const educationId = params.educationId as string
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [accessToken, setAccessToken] = useState<string | null>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAccessToken(localStorage.getItem('accessToken'))
    }
  }, [])

  function onClickPurchaseBtn() {
    if (!accessToken) {
      setIsModalOpen(true)
      return
    } else if (accessToken) {
      router.push(`/payments?eucationId=${educationId}&price=${price}`)
      if (typeof window !== 'undefined' && educationId != undefined) {
        localStorage.setItem('educationId', educationId)
        localStorage.setItem('price', JSON.stringify(price))
      }
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && <LoginModal onClose={handleModalClose} />}

      <div className={purchased_fixed}>
        <div className={text}>
          <p className={title}>창업 시작 챌린지 2기</p>
          <p className={detail}>2월 23일 (일) 자정 마감</p>
        </div>

        <button onClick={onClickPurchaseBtn} className={button_style}>
          <span className={icon}>
            <Image src={purchaseIcon} alt="구매" fill />
          </span>
          구매하기
        </button>
      </div>
    </>
  )
}
