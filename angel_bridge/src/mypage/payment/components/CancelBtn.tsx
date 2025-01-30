'use client'
import React from 'react'
import { cancel_btn } from '../styles/cancelbtn.css'
import usePostCancelPayments from '@/mypage/api/hooks/usePostCancelPayments'

export default function CancelBtn({ enrollmentId }: { enrollmentId: number }) {
  const { mutate } = usePostCancelPayments()

  console.log(enrollmentId)
  function handleCancelPayments(enrollmentId: number) {
    const cancelReason = '마음이 바뀌어서 결제 취소합니다.'

    mutate(
      { enrollmentId, cancelReason },
      {
        onSuccess: () => {
          alert('결제가 취소되었습니다.')
        },
      },
    )
  }

  return (
    <button
      onClick={() => handleCancelPayments(enrollmentId)}
      className={cancel_btn}
    >
      결제 취소
    </button>
  )
}
