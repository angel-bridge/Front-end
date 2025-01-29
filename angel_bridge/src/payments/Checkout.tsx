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

export function CheckoutPage() {
  const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY as string
  const customerKey = 'UTuk_CpV40JbupUHAF0De'
  const { mutate: postSaveAmountMutate } = usePostSaveAmount()

  const [price, setPrice] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedPrice = localStorage.getItem('price')
      setPrice(storedPrice ? JSON.parse(storedPrice) : 119000)
    }
  }, [price])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [amount, setAmount] = useState({
    currency: 'KRW',
    value: price,
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
      await widgets.setAmount({
        currency: 'KRW',
        value: price,
      })

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
  }, [widgets, price])

  useEffect(() => {
    if (widgets == null) {
      return
    }

    widgets.setAmount(amount)
  }, [widgets, amount])

  //educationId 저장

  async function onClickBtn() {
    const amountValue = amount.value
    const orderId = nanoid()

    try {
      postSaveAmountMutate(
        {
          orderId,
          amount: amountValue,
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
              successUrl: `${window.location.origin}/mypage/mypaidList`,
              failUrl: `${window.location.origin}/payments/fail`,
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
