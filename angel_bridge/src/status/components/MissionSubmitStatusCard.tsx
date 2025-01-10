import Image from 'next/image'
import React from 'react'
import * as style from '../styles/missionStatus.css'
import { MISSION_STATUS } from '../core/missionStatus'

type Variants = 'green' | 'orange' | 'red' | 'purple' | 'gray'

export default function MissionSubmitStatusCard({
  attendanceStatus,
  round,
}: {
  attendanceStatus: string
  round: number
}) {
  const status = MISSION_STATUS.find((data) => {
    return data.submitStatus === attendanceStatus
  })

  const img = status?.badge
  const text = status?.text
  const variants = status?.badgecolor as Variants

  return (
    <div
      className={`${style.card_container} variants && ${style.text_style[variants]}`}
    >
      <div className={style.status_img}>
        <Image fill src={img} alt="미션 현황" />
      </div>
      <p>{round}회차</p>
      <p>{text}</p>
    </div>
  )
}
