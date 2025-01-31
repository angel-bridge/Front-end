'use client'
import React, { useState } from 'react'
import Content, { ContentProps } from './Content'
import { content_wrapper, wrapper_style } from '../styles/container.css'
import useGetPayment from '@/mypage/api/hooks/useGetPayment'
import PageNation from '@/program/components/main/PageNation'
import EmpthyView from './EmpthyView'
import { useQueryClient } from '@tanstack/react-query'

// 결제 내역 부분입니다.
export default function Wrapper() {
  const queryClient = useQueryClient()
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useGetPayment({ page: currentPage })

  if (isLoading) {
    return <p>isLoading</p>
  }
  if (!data || !data.content || data.content.length === 0) {
    return <EmpthyView />
  }

  //결제 취소 후에 실행될 함수입니다.
  function handleCancelSuccess() {
    queryClient.invalidateQueries({
      queryKey: ['getPayments', { page: currentPage }],
    })
  }

  return (
    <div className={wrapper_style}>
      <div className={content_wrapper}>
        {data.content.map((item: ContentProps) => (
          <Content
            key={item.enrollmentId}
            date={item.date}
            imageUrl={item.imageUrl}
            status={item.status}
            price={item.price}
            educationName={item.educationName}
            enrollmentId={item.enrollmentId}
            handleCancelSuccess={handleCancelSuccess}
          />
        ))}
      </div>
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
