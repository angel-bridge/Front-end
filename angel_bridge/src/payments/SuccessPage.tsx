/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { authInstance } from '@/api/authInstance'
import { useEducationIdStore } from './store/useEducationIdStore'

export default function SuccessPage() {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { educationId } = useEducationIdStore()

  const router = useRouter()

  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const amount = searchParams.get('amount')
  const paymentKey = searchParams.get('paymentKey')

  // async function confirmPayment({ educationId }: { educationId: number }) {
  //   // TODO: API를 호출해서 서버에게 paymentKey, orderId, amount를 넘겨주세요.
  //   // 서버에선 해당 데이터를 가지고 승인 API를 호출하면 결제가 완료됩니다.
  //   // https://docs.tosspayments.com/reference#%EA%B2%B0%EC%A0%9C-%EC%8A%B9%EC%9D%B8
  //   const response = await authInstance.post(
  //     `/api/v1/payments/confirm/${educationId}`,
  //     {
  //       paymentKey,
  //       orderId,
  //       amount,
  //     },
  //   )
  //   if (response) {
  //     setIsConfirmed(true)
  //   }
  // }

  useEffect(() => {
    async function confirmPayment() {
      try {
        const response = await authInstance.post(
          `/api/vi/payments/confirm/${educationId}`,
          {
            paymentKey,
            orderId,
            amount,
          },
        )
        if (response.status == 200) {
          setIsConfirmed(true)
        } else {
          throw new Error('결제 승인 실패: 서버 응답 x')
        }
      } catch (err) {
        console.error(err)
        router.push(`/payment/fail?message=${err}`)
      }
    }
    if (educationId && orderId && amount && paymentKey) {
      confirmPayment()
    } else {
      setError('결제 정보가 부족합니다.')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educationId, orderId, amount, paymentKey])

  return (
    <div className="result wrapper">
      <div className="box_section">
        {isConfirmed ? (
          <>
            <h2>결제 성공</h2>
            <p>주문번호: {orderId}</p>
            <p>결제 금액: {Number(amount).toLocaleString()}원</p>
            <p>Payment Key: {paymentKey}</p>
          </>
        ) : error ? (
          <div>
            <h2>결제 실패</h2>
            <p>{error}</p>
          </div>
        ) : (
          <p>결제 승인 중입니다...</p>
        )}
      </div>
    </div>
  )
}
