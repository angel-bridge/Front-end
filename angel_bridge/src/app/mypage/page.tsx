import React from 'react'
import { mypage_container, page_container } from './styles/mypagecontainer.css'
import MyPageHeader from '@/mypage/MyPageHeader'
import Info from '@/mypage/memberInfo/components/Info'

//MyPage
export default function page() {
  return (
    <div className={page_container}>
      <div className={mypage_container}>
        <MyPageHeader />
        <Info />
      </div>
    </div>
  )
}
