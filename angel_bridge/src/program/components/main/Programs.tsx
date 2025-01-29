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
          <Link style={{ textDecoration: 'none' }} href={`program/${educationId}`} key={educationId}>
            <div key={educationId}>
              <ProgramCard
                badgeText={recruitmentStatus}
                badgeType={recruitmentStatus === "모집중" ? "active" : "inactive"}
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
