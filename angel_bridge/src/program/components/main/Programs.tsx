import React from 'react'
import { DUMMY_DATA } from './dummy'
import ProgramCard from '@/components/common/ProgramCard'
import { program_container } from './styles/programmain.css'

export default function Programs() {
  return (
    <div className={program_container}>
      {DUMMY_DATA.map((data, index) => {
        const { badgeText, badgeType, bio, title } = data
        return (
          <div style={{ marginBottom: '3.2rem' }} key={index}>
            <ProgramCard
              badgeText={badgeText}
              badgeType={badgeType}
              bio={bio}
              title={title}
            />
          </div>
        )
      })}
    </div>
  )
}
