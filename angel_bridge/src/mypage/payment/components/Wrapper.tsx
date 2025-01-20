'use client'

import React from 'react'
import Content from './Content'
import { wrapper_style } from '../styles/container.css'
import useGetPayment from '@/mypage/api/hooks/useGetPayment'

export default function Wrapper() {
  const { data: PaiedList } = useGetPayment()

  return (
    <div className={wrapper_style}>
      {PaiedList?.content.map((data) => {
        const { date, educationName, enrollementId, imageUrl, price, status } =
          data
        return (
          <Content
            key={enrollementId}
            date={date}
            imageUrl={imageUrl}
            price={price}
            status={status}
            educationName={educationName}
          />
        )
      })}
    </div>
  )
}
