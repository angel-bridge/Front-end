'use client'
import { button_container } from './memberInfo/styles/button.css'
import InfoBtn from './common/components/InfoBtn'
import IsPaidBtn from './common/components/IsPaidBtn'
import { usePathname, useRouter } from 'next/navigation'

export default function MyPageHeader() {
  const router = useRouter()
  const pathname = usePathname()
  const isInfo = !pathname.includes('mypaidList')

  function handleSwitchToInfo() {
    router.push('/mypage')
  }

  function handleSwitchToPaied() {
    router.push('/mypage/mypaidList')
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
