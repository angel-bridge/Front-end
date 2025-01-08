import React from 'react'
import ProgramCard from '@/components/common/ProgramCard'
import { program_container } from './styles/programmain.css'
import { ResultType } from '@/program/api/utils/getAllProgram'

export default function Programs({
  programs,
}: {
  programs: ResultType[] | undefined
}) {
  return (
    <div className={program_container}>
      {programs?.map((data) => {
        const { description, recruitmentStatus, title, educationId, preImage } =
          data
        return (
          <div style={{ marginBottom: '3.2rem' }} key={educationId}>
            <ProgramCard
              badgeText={recruitmentStatus}
              badgeType={recruitmentStatus}
              bio={description}
              title={title}
              preImage={preImage}
            />
          </div>
        )
      })}
    </div>
  )
}
