'use client'
import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import PurchaseBtn from './PurchaseBtn'
import { wrapper } from '../styles/purchase.css'

export default function BannerAndPurchase() {
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

  return (
    <div>
      <Banner />
      <div className={wrapper}>
        <PurchaseBtn isFixed={isFixed} />
      </div>
    </div>
  )
}
