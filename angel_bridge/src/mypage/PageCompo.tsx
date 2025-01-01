'use client'
import { useState } from 'react'
import Button from './memberInfo/components/Button'
import Info from './memberInfo/components/Info'
import { button_container } from './memberInfo/styles/button.css'
import Wrapper from './payment/components/Wrapper'

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
        <Button text="회원정보" onClick={handleSwitchToInfo} />
        <Button text="결제내역" onClick={handleSwitchToPaied} />
      </div>
      {isInfo ? <Info /> : <Wrapper />}
    </div>
  )
}
