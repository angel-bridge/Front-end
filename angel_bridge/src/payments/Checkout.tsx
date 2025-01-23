'use client'
import {
  ANONYMOUS,
  loadTossPayments,
  TossPaymentsWidgets,
} from '@tosspayments/tosspayments-sdk'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import * as style from './style.css'
import usePostSaveAmount from './api/hooks/usePostSaveAmount'
import { useSearchParams } from 'next/navigation'

export function CheckoutPage() {
  const searchParams = useSearchParams()

  const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY as string
  const customerKey = 'UTuk_CpV40JbupUHAF0De'
  const educationId = searchParams.get('educationId')

  const { mutate: postSaveAmountMutate } = usePostSaveAmount()

  const [amount, setAmount] = useState({
    currency: 'KRW',
    value: 50_000,
  })

  const [ready, setReady] = useState(false)
  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null)

  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments = await loadTossPayments(clientKey)
      // 회원 결제
      const widgets = tossPayments.widgets({
        customerKey: ANONYMOUS,
      })

      setWidgets(widgets)
    }

    fetchPaymentWidgets()
  }, [clientKey, customerKey])

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount(amount)

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        widgets.renderPaymentMethods({
          selector: '#payment-method',
          variantKey: 'DEFAULT',
        }),
        // ------  이용약관 UI 렌더링 ------
        widgets.renderAgreement({
          selector: '#agreement',
          variantKey: 'AGREEMENT',
        }),
      ])

      setReady(true)
    }

    renderPaymentWidgets()
  }, [widgets])

  useEffect(() => {
    if (widgets == null) {
      return
    }

    widgets.setAmount(amount)
  }, [widgets, amount])

  async function onClickBtn() {
    const orderId = nanoid()

    try {
      postSaveAmountMutate(
        {
          orderId,
          amount,
        },
        {
          onSuccess: async () => {
            // ------ 서버 저장 성공 후 결제 진행 ------
            await widgets?.requestPayment({
              orderId,
              orderName: '토스 티셔츠 외 2건',
              customerName: '김토스',
              customerEmail: 'customer123@gmail.com',
              customerMobilePhone: '01012341234',
              successUrl: `${window.location.origin}/payment/success?educationId=${educationId}&orderId=${orderId}&amount=${amount}`,
              failUrl: `${window.location.origin}/payment/fail?orderId=${orderId}`,
            })
          },
          onError: (error) => {
            console.error('Failed to save order:', error)
            alert('결제 요청 중 문제가 발생했습니다. 다시 시도해주세요.')
          },
        },
      )
    } catch (error) {
      console.error('Payment request failed:', error)
    }
  }

  return (
    <div className="wrapper">
      <div className="box_section">
        {/* 결제 UI */}
        <div id="payment-method" />
        {/* 이용약관 UI */}
        <div id="agreement" />
        {/* 쿠폰 체크박스 */}
        <div></div>

        {/* 결제하기 버튼 */}
        <button
          className={style.button_style}
          disabled={!ready}
          onClick={onClickBtn}
        >
          결제하기
        </button>
      </div>
    </div>
  )
}
