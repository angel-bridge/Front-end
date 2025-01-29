/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { authInstance } from '@/api/authInstance'
import * as styles from '@/payments/successpage.css'
import Image from 'next/image'

export default function SuccessPage() {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')
  const amount = searchParams.get('amount')
  const paymentKey = searchParams.get('paymentKey')
  const educationId = localStorage.getItem('educationId')

  useEffect(() => {
    async function confirmPayment(educationId: string) {
      try {
        const response = await authInstance.post(
          `/api/v1/payments/confirm/${educationId}`,
          {
            paymentKey,
            orderId,
            amount,
          },
        )
        if (response.status == 200) {
          setIsConfirmed(true)
          router.push('/mypage/mypaidList')
        } else {
          throw new Error('결제 승인 실패: 서버 응답 x')
        }
      } catch (err) {
        console.error(err)
        router.push('/payments/fail')
      }
    }
    if (educationId && orderId && amount && paymentKey) {
      confirmPayment(educationId)
    } else {
      setError('결제 정보가 부족합니다.')
      console.log(educationId)
      console.log(orderId)
      console.log(amount)
      console.log(paymentKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educationId, orderId, amount, paymentKey])

  return (
    <Suspense>
      <div className={styles.wrapper}>
        <div className={styles.confirmSuccess}>
          {isConfirmed ? (
            <>
              <div className={styles.imageStyle}>
                <Image
                  src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png"
                  fill
                  alt="토스체크표시"
                />
              </div>

              <h2>결제를 완료했어요</h2>
              <div className={styles.responseSection}>
                <div className={styles.flexBetween}>
                  <span className={styles.responseLabel}>결제 금액</span>
                  <span className={styles.responseText}>{amount}</span>
                </div>
                <div className={styles.flexBetween}>
                  <span className={styles.responseLabel}>주문번호</span>
                  <span className={styles.responseText}>{orderId}</span>
                </div>
                <div className={styles.flexBetween}>
                  <span className={styles.responseLabel}>paymentKey</span>
                  <span className={styles.responseText}>{paymentKey}</span>
                </div>
              </div>
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
    </Suspense>
  )
}
