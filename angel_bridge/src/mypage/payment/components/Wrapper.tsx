'use client'

import React, { useEffect } from 'react'
import Content, { ContentProps } from './Content'
import { wrapper_style } from '../styles/container.css'
import useGetPayment from '@/mypage/api/hooks/useGetPayment'

export default function Wrapper() {
  const { data, isLoading, refetch } = useGetPayment()

  useEffect(() => {
    if (!data) {
      refetch()
    }
  }, [data, refetch])

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
