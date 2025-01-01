'use client'
import { useState } from 'react'
import Info from './memberInfo/components/Info'
import { button_container } from './memberInfo/styles/button.css'
import Wrapper from './payment/components/Wrapper'
import InfoBtn from './memberInfo/common/components/InfoBtn'
import IsPaidBtn from './memberInfo/common/components/IsPaidBtn'

export default function PageCompo() {
  const [isInfo, setIsInfo] = useState(true)

  function handleSwitchToInfo() {
    setIsInfo(true)
  }

  function handleSwitchToPaied() {
    setIsInfo(false)
  }

  return (
    <div>
      <div className={button_container}>
        <InfoBtn isInfo={isInfo} onClick={handleSwitchToInfo} />
        <IsPaidBtn isInfo={isInfo} onClick={handleSwitchToPaied} />
      </div>
      {isInfo ? <Info /> : <Wrapper />}
    </div>
  )
}
