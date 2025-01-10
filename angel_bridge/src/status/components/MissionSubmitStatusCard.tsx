import Image from 'next/image'
import React from 'react'
import * as style from '../styles/missionStatus'

type Variants = 'green' | 'orange' | 'red' | 'gray' | 'purple'

export default function MissionSubmitStatusCard({
  img,
  round,
  text,
  variants,
}: {
  img: string
  round: number
  text: string
  variants: Variants
}) {
  return (
    <div className={`${style.card_container} ${style.text_style[variants]}`}>
      <div className={style.status_img}>
        <Image fill src={img} alt="미션 현황" />
      </div>
      <p>{round}회차</p>
      <p>{text}</p>
    </div>
  )
}
