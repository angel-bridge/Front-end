import React from 'react'
import Banner from './Banner'
import PurchaseBtn from './PurchaseBtn'
import { wrapper } from '../styles/purchase.css'

export default function BannerAndPurchase() {
  return (
    <div>
      <Banner />
      <div className={wrapper}>
        <PurchaseBtn />
      </div>
    </div>
  )
}
