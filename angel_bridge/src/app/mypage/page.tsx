import React from 'react'
import { mypage_container, page_container } from './styles/mypagecontainer.css'
import PageCompo from '@/mypage/PageCompo'

export default function page() {
  return (
    <div className={page_container}>
      <div className={mypage_container}>
        <PageCompo />
      </div>
    </div>
  )
}
