import { DetailType } from '@/program/types/detailTypes'
import React from 'react'
import DescriptionTitle from './DescriptionTitle'
import {
  detail_style,
  detail_style_container,
  detail_wrapper,
} from '../styles/programcard.css'

type ProgramDescriptionProps = Omit<
  DetailType,
  'title' | 'preFile' | 'detailFile'
>

export default function ProgramDescription(props: ProgramDescriptionProps) {
  const {
    description,
    educationEndDate,
    educationStartDate,
    recruitmentEndDate,
    recruitmentStartDate,
    price,
  } = props
  return (
    <div className={detail_wrapper}>
      <div className={detail_style_container}>
        <DescriptionTitle number={0} />
        <p className={detail_style}>
          {educationStartDate} ~ {educationEndDate}
        </p>
      </div>
      <div className={detail_style_container}>
        <DescriptionTitle number={1} />
        <p className={detail_style}>
          {recruitmentStartDate} ~ {recruitmentEndDate}
        </p>
      </div>
      <div className={detail_style_container}>
        <DescriptionTitle number={2} />
        <p className={detail_style}>{description}</p>
      </div>
      <div className={detail_style_container}>
        <DescriptionTitle number={3} />
        <p className={detail_style}>{price}</p>
      </div>
    </div>
  )
}
