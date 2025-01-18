'use client'
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from '@tosspayments/payment-widget-sdk'
import { ANONYMOUS } from '@tosspayments/tosspayments-sdk'
import React, { useEffect, useRef, useState } from 'react'
import { useAsync } from 'react-use'

const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY as string

export default function Checkout() {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null)
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance['renderPaymentMethods']
  > | null>(null)
  const [price, setPrice] = useState(50000)

  useAsync(async () => {
    const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS)
    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      '#payment-widget',
      { value: price },
      { variantKey: 'DEFAULT' },
    )
    paymentWidget.renderAgreement('#agreement', { variantKey: 'AGREEMENT' })
    paymentWidgetRef.current = paymentWidget
    paymentMethodsWidgetRef.current = paymentMethodsWidget
  }, [])

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current
    if (paymentMethodsWidget == null) {
      return
    }
    //새로운 결제 금액 넣어야 함요
    paymentMethodsWidget.updateAmount(price)
  }, [price])
  return (
    <main
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>주문서</h1>
      <span>{`${price.toLocaleString()}원`}</span>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={(event) => {
              setPrice(event.target.checked ? price - 5000 : price + 5000)
            }}
          />
          5,000원 할인 쿠폰 적용
        </label>
      </div>
      <div id="payment-widget" style={{ width: '100%' }} />
      <div id="agreement" style={{ width: '100%' }} />
      <button
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current
          try {
            await paymentWidget?.requestPayment({
              orderId: 'ujRprh3uWK8Wt-UHEX82B',
              orderName: '토스 티셔츠 외 2건',
              customerName: '김토스',
              customerEmail: 'customer123@gmail.com',
              customerMobilePhone: '01012341234',
              // successUrl: `${window.location.origin}/success`,
              // failUrl: `${window.location.origin}/fail`,
            })
          } catch (error) {
            console.error(error)
          }
        }}
      >
        결제하기
      </button>
    </main>
  )
}
