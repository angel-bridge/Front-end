import React from 'react'
import { mypage_container, page_container } from '../styles/mypagecontainer.css'
import MyPageHeader from '@/mypage/MyPageHeader'
import Wrapper from '@/mypage/payment/components/Wrapper'

export default function page() {
  return (
    <div className={page_container}>
      <div className={mypage_container}>
        <MyPageHeader />
        <Wrapper />
      </div>
    </div>
  )
}
