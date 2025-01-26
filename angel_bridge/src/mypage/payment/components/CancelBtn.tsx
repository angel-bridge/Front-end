'use client'
import React from 'react'
import { cancel_btn } from '../styles/cancelbtn.css'
import usePostCancelPayments from '@/mypage/api/hooks/usePostCancelPayments'

export default function CancelBtn({
  enrollementId,
}: {
  enrollementId: number
}) {
  const { mutate } = usePostCancelPayments()

  function handleCancelPayments(enrollementId: number) {
    const cancelReason = '마음이 바뀌어서 결제 취소합니다.'

    mutate({ enrollementId, cancelReason })
  }

  return (
    <button
      onClick={() => handleCancelPayments(enrollementId)}
      className={cancel_btn}
    >
      결제 취소
    </button>
  )
}
