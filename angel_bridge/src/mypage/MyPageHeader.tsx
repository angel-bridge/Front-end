'use client'
import { useState } from 'react'
import { button_container } from './memberInfo/styles/button.css'
import InfoBtn from './common/components/InfoBtn'
import IsPaidBtn from './common/components/IsPaidBtn'
import { useRouter } from 'next/navigation'

export default function MyPageHeader() {
  const [isInfo, setIsInfo] = useState(true)
  const router = useRouter()

  function handleSwitchToInfo() {
    setIsInfo(true)
    router.push('/mypage')
  }

  function handleSwitchToPaied() {
    setIsInfo(false)
    router.push('/mypage/payment')
  }

  return (
    <>
      <div className={button_container}>
        <InfoBtn isInfo={isInfo} onClick={handleSwitchToInfo} />
        <IsPaidBtn isInfo={isInfo} onClick={handleSwitchToPaied} />
      </div>
    </>
  )
}
