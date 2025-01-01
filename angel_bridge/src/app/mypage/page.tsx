import React from 'react'
import { mypage_container } from './styles/mypagecontainer.css'
import PageCompo from '@/mypage/PageCompo'

export default function page() {
  return (
    <div className={mypage_container}>
      <PageCompo />
    </div>
  )
}
