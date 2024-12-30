import Info from '@/mypage/memberInfo/components/Info'
import React from 'react'
import { mypage_container } from './styles/mypagecontainer.css'

export default function page() {
  return (
    <div className={mypage_container}>
      <Info />
    </div>
  )
}
