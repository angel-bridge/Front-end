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
import EmpthyView from './EmpthyView'

export default function UpperFrame() {
  const params = useParams()
  const { educationId } = params
  const { data, isLoading } = useGetMissionBox(educationId)

  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <div className={upper_container}>
      <div className={upper_content_container}>
        <p className={upper_title_style}>{data?.educationTitle} </p>
        <div className={upper_cards_container}>
          {data?.assignmentId ? (
            <MissonCard
              assignmentId={data?.assignmentId}
              assignmentTitle={data?.assignmentTitle}
              description={data?.description}
            />
          ) : (
            <EmpthyView />
          )}
          <StatusCard
            performanceRate={data?.performanceRate}
            noticeLink={data?.noticeLink}
            methodLink={data?.methodLink}
          />
        </div>
      </div>
    </div>
  )
}
