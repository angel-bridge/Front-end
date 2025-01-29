'use client'
import useGetDetailProgram from '@/program/api/hooks/useGetDetailProgram'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import ProgramDescription from './ProgramDescription'
import {
  banneranddetail_style,
  container,
  program_photo_and_detail,
  program_title,
  programcard_container,
  programPhoto,
} from '../styles/programcard.css'
import ProgramSummary from './ProgramSummary'
import PurchaseBtn from './PurchaseBtn'

export default function ProgramCard() {
  const params = useParams()
  const { educationId } = params
  const { data, isLoading } = useGetDetailProgram({
    educationId: educationId as string,
  })
  return (
    <>
      {isLoading && <p>loading</p>}
      {data && (
        <div className={programcard_container}>
          <div className={program_photo_and_detail}>
            <div className={programPhoto}>
              <Image src={data?.preFile} alt="프로그램 이미지" fill />
            </div>
            <div className={container}>
              <p className={program_title}>{data?.title}</p>
              <ProgramDescription
                description={data?.description}
                educationStartDate={data?.educationStartDate}
                educationEndDate={data?.educationEndDate}
                recruitmentStartDate={data?.recruitmentStartDate}
                recruitmentEndDate={data?.recruitmentEndDate}
                price={data?.price}
              />
            </div>
          </div>

          <div className={banneranddetail_style}>
            <PurchaseBtn />
            <ProgramSummary detailFile={data?.detailFile} />
          </div>
        </div>
      )}
    </>
  )
}
