'use client'
import React from 'react'
import StatusCard from './StatusCard'
import MissonCard from './MissonCard'
import {
  upper_cards_container,
  upper_container,
  upper_content_container,
  upper_title_style,
} from '../styles/common.css'
import useGetMissionBox from '../api/hooks/useGetMissionBox'
import { useParams } from 'next/navigation'

export default function UpperFrame() {
  const params = useParams()
  const { educationId } = params
  const { data } = useGetMissionBox(educationId)

  return (
    <div className={upper_container}>
      <div className={upper_content_container}>
        <p className={upper_title_style}>{data?.educationTitle} </p>
        <div className={upper_cards_container}>
          <MissonCard />
          <StatusCard />
        </div>
      </div>
    </div>
  )
}
