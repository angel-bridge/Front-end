'use client'

import React, { useState } from 'react'
import Content, { ContentProps } from './Content'
import { wrapper_style } from '../styles/container.css'
import useGetPayment from '@/mypage/api/hooks/useGetPayment'
import PageNation from '@/program/components/main/PageNation'
import EmpthyView from './EmpthyView'

// 결제 내역 부분입니다.
export default function Wrapper() {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useGetPayment({ page: currentPage })

  if (isLoading) {
    return <p>isLoading</p>
  }
  if (!data || !data.content || data.content.length === 0) {
    return <EmpthyView />
  }

  return (
    <div className={wrapper_style}>
      {data.content.map((item: ContentProps) => (
        <Content
          key={item.enrollementId}
          date={item.date}
          imageUrl={item.imageUrl}
          status={item.status}
          price={item.price}
          educationName={item.educationName}
          enrollementId={item.enrollementId}
        />
      ))}

      <PageNation
        onClickPageNumber={(page) => setCurrentPage(page)}
        onClickNextPage={() => setCurrentPage((prev) => prev + 1)}
        onClickPrevPage={() => setCurrentPage((prev) => prev - 1)}
        currentPage={currentPage}
        totalPage={data.totalPages || 1}
      />
    </div>
  )
}
