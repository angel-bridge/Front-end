'use client'
import React, { useEffect } from 'react'
import Programs from './Programs'
import { length_style, main_container } from './styles/programmain.css'
import { useProgramStore } from '@/program/store/useProgramStore'
import useGetAllPrograms from '@/program/api/hooks/useGetAllPrograms'
import useGetOngoings from '@/program/api/hooks/useGetOngoings'
import useGetUpcoming from '@/program/api/hooks/useGetUpcoming'

export default function MainProgram() {
  const { program, setProgram, isClickOngoings, isClickUpcomings } =
    useProgramStore()
  const { data: all, isLoading } = useGetAllPrograms()
  const { data: ongoings } = useGetOngoings()
  const { data: upcomings } = useGetUpcoming()

  useEffect(() => {
    if (isClickOngoings && ongoings) {
      setProgram(ongoings)
    } else if (isClickUpcomings && upcomings) {
      setProgram(upcomings)
    } else if (all) {
      setProgram(all)
    }
  }, [all, ongoings, upcomings, program, isClickOngoings, isClickUpcomings])

  return (
    <>
      {isLoading && <p>loading...</p>}
      <div className={main_container}>
        <p className={length_style}>전체 {program?.length}개</p>
        <Programs programs={program} />
      </div>
    </>
  )
}
