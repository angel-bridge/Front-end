import React from 'react'
import ProgramCard from '@/components/common/ProgramCard'
import { program_container } from './styles/programmain.css'
import { DataType } from '@/program/types/dataType'
import Link from 'next/link'

export default function Programs({
  programs,
}: {
  programs: null | DataType[]
}) {
  return (
    <div className={program_container}>
      {programs?.map((data) => {
        const { description, recruitmentStatus, title, educationId, preImage } =
          data
        return (
          <Link href={`program/${educationId}`} key={educationId}>
            <div style={{ marginBottom: '3.2rem' }} key={educationId}>
              <ProgramCard
                badgeText={recruitmentStatus}
                badgeType={recruitmentStatus}
                bio={description}
                title={title}
                preImage={preImage}
              />
            </div>
          </Link>
        )
      })}
    </div>
  )
}
