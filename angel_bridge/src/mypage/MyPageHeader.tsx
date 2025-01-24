'use client'
import { button_container } from './memberInfo/styles/button.css'
import InfoBtn from './common/components/InfoBtn'
import IsPaidBtn from './common/components/IsPaidBtn'
import { usePathname, useRouter } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query'
import { getPayments } from './api/utils/getPayments'

export default function MyPageHeader() {
  const queryClient = useQueryClient()
  const router = useRouter()
  const pathname = usePathname()
  const isInfo = !pathname.includes('myPurchasedList')

  function handleSwitchToInfo() {
    router.push('/mypage')
  }

  function handleSwitchToPaied() {
    queryClient.prefetchQuery({
      queryKey: ['getPayments'],
      queryFn: getPayments,
    })
    router.push('/myPurchasedList')
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
