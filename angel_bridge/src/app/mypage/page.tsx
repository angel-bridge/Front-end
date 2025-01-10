import React from 'react'
import { mypage_container, page_container } from './styles/mypagecontainer.css'
import PageCompo from '@/mypage/PageCompo'
import Header from '../home/components/Header'

export default function page() {
  return (
    <div className={page_container}>
      <Header />
      <div className={mypage_container}>
        <PageCompo />
      </div>
    </div>
  )
}
