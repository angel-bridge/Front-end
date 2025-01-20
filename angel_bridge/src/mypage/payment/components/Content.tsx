import React from 'react'
import Photo from './Photo'
import Texts from './Texts'
import CancelBtn from './CancelBtn'
import {
  container,
  content,
  photo_text_container,
} from '../styles/container.css'
import { PaymentContent } from '@/mypage/api/utils/getPayments'

export default function Content(props: PaymentContent) {
  const { date, status, imageUrl, educationName, price } = props
  console.log(imageUrl)

  return (
    <div className={content}>
      <div className={container}>
        <div className={photo_text_container}>
          <Photo imageUrl={imageUrl} />
          <Texts
            date={date}
            status={status}
            title={educationName}
            price={price}
          />
        </div>
        {status === '결제 완료' && <CancelBtn />}
      </div>
    </div>
  )
}
