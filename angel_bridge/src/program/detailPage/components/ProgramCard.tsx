'use client'
import useGetDetailProgram from '@/program/api/hooks/useGetDetailProgram'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React from 'react'
import ProgramDescription from './ProgramDescription'
import {
  program_title,
  programcard_container,
  programPhoto,
} from '../styles/programcard.css'

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
          <div className={programPhoto}>
            <Image src={data?.preFile} alt="프로그램 이미지" fill />
          </div>
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
      )}
    </>
  )
}
