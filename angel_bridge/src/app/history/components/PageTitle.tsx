'use client'

import React from 'react'
import { title, button_container, wrapper } from '../styles/PageTitle.css'
import TakingButton from './TakingButton'
import WillTakeButton from './WillTakeButton'
import TakenButton from './TakenButton'
import useGetMember from '@/mypage/api/hooks/useGetMember'

interface PageTitleProps {
  selectedButton: 'taking' | 'willTake' | 'taken'
  onButtonClick: (button: 'taking' | 'willTake' | 'taken') => void
}

export default function PageTitle({
  selectedButton,
  onButtonClick,
}: PageTitleProps) {
  const { data: member, isError } = useGetMember()

  if (isError || !member) {
    return <div></div>
  }

  return (
    <div className={wrapper}>
      <h1 className={title}>{member.nickname || '사용자'} 님의 수강내역</h1>
      <div className={button_container}>
        <TakingButton
          isSelected={selectedButton === 'taking'}
          onClick={() => onButtonClick('taking')}
        />
        <WillTakeButton
          isSelected={selectedButton === 'willTake'}
          onClick={() => onButtonClick('willTake')}
        />
        <TakenButton
          isSelected={selectedButton === 'taken'}
          onClick={() => onButtonClick('taken')}
        />
      </div>
    </div>
  )
}
