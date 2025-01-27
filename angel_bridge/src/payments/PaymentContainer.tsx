'use client'
import React, { useEffect, useRef, useState } from 'react'
import usePaymentWidget from './usePaymentWidget'
import { nanoid } from 'nanoid'
import { ANONYMOUS } from '@tosspayments/tosspayments-sdk'
import { PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk'

const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY as string
// const customerkey = nanoid()

export default function PaymentContainer() {
  const { data: paymentWidget } = usePaymentWidget(clientKey, ANONYMOUS)

  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance['renderPaymentMethods']
  > | null>(null)
  // const agreementsWidgetRef = useRef<ReturnType<
  //   PaymentWidgetInstance['renderAgreement']
  // > | null>(null)
  const [price, setPrice] = useState(50_000)
  const [paymentMethodsWidgetReady, isPaymentMethodsWidgetReady] =
    useState(false)

  useEffect(() => {
    if (paymentWidget == null) {
      return
    }

    // ------  결제위젯 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
    const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
      '#payment-widget',
      { value: price },
      { variantKey: 'DEFAULT' },
    )

    // ------  이용약관 렌더링 ------
    // @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자-옵션
    paymentWidget.renderAgreement('#agreement', {
      variantKey: 'AGREEMENT',
    })

    //  ------  결제 UI 렌더링 완료 이벤트 ------
    paymentMethodsWidget.on('ready', () => {
      paymentMethodsWidgetRef.current = paymentMethodsWidget
      isPaymentMethodsWidgetReady(true)
    })
  }, [paymentWidget])

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current

    if (paymentMethodsWidget == null) {
      return
    }
    paymentMethodsWidget.updateAmount(price)
  }, [price])

  return (
    <div className="wrapper">
      <div className="box_section">
        <div id="payment-widget" style={{ width: '100%' }} />
        <div id="agreement" style={{ width: '100%' }} />
        <div style={{ paddingLeft: '24px' }}>
          <div className="checkable typography--p">
            <label
              htmlFor="coupon-box"
              className="checkable__label typography--regular"
            >
              <input
                id="coupon-box"
                className="checkable__input"
                type="checkbox"
                aria-checked="true"
                disabled={!paymentMethodsWidgetReady}
                onChange={(event) => {
                  setPrice(event.target.checked ? price - 5_000 : price + 5_000)
                }}
              />
              <span className="checkable__label-text">5,000원 쿠폰 적용</span>
            </label>
          </div>
        </div>

        <button
          className="button"
          style={{ marginTop: '30px' }}
          disabled={!paymentMethodsWidgetReady}
          onClick={async () => {
            try {
              // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
              // @docs https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
              await paymentWidget?.requestPayment({
                orderId: nanoid(),
                orderName: '토스 티셔츠 외 2건',
                customerName: '김토스',
                customerEmail: 'customer123@gmail.com',
                customerMobilePhone: '01012341234',
                successUrl: `${window.location.origin}/success`,
                failUrl: `${window.location.origin}/fail`,
              })
            } catch (error) {
              // 에러 처리하기
              console.error(error)
            }
          }}
        >
          결제하기
        </button>
      </div>
    </div>
  )
}
