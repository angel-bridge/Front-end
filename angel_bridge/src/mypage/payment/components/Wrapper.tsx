'use client'

import React from 'react'
import Content, { ContentProps } from './Content'
import { wrapper_style } from '../styles/container.css'
import useGetPayment from '@/mypage/api/hooks/useGetPayment'
import Image from 'next/image'

export default function Wrapper() {
  const { data, isLoading, isError } = useGetPayment()
  // console.log(data.content)

  return (
    <div className={wrapper_style}>
      {isLoading && <p>loading....</p>}
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
