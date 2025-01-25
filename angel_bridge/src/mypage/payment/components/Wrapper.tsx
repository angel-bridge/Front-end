'use client'

import React from 'react'
import Content, { ContentProps } from './Content'
import { wrapper_style } from '../styles/container.css'
import useGetPayment from '@/mypage/api/hooks/useGetPayment'

//결제 내역 부분입니다.
export default function Wrapper() {
  const { data, isLoading } = useGetPayment()

  if (isLoading) {
    return <p>isLoading</p>
  }
  if (!data) {
    return <p>data가 없습니다.</p>
  }

  return (
    <div className={wrapper_style}>
      {data?.content &&
        data?.content.map((data: ContentProps) => {
          return (
            <div key={data.enrollementId}>
              <Content
                key={data.enrollementId}
                date={data.date}
                imageUrl={data.imageUrl}
                status={data.status}
                price={data.price}
                educationName={data.educationName}
                enrollementId={data.enrollementId}
              />
            </div>
          )
        })}
    </div>
  )
}
