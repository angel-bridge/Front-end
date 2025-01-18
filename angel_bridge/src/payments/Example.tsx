import React from 'react'

export default function Checkoutting() {
  return (
    <div>
      <div className="wrapper">
        <div
          className="box_section"
          style={{
            padding: '4rem 3rem 5rem 3rem',
            marginTop: '3rem',
            marginBottom: '5rem',
          }}
        >
          {/* 결제 UI /}
          <div id="payment-method"></div>
          {/* 이용약관 UI /}
        <div id="agreement"></div>
        {/*  쿠폰 체크박스*/}
          <div style={{ paddingLeft: '2.5rem' }}>
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
                />
                <span className="checkable__label-text">5,000원 쿠폰 적용</span>
              </label>
            </div>
          </div>
          <div className="result wrapper">
            <button
              className="button"
              id="payment-button"
              style={{ marginTop: '3rem' }}
            >
              결제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
