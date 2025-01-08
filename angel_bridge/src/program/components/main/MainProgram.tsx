'use client'
import React from 'react'
import Programs from './Programs'
import { length_style, main_container } from './styles/programmain.css'
import useGetAllPrograms from '@/program/api/hooks/useGetAllPrograms'

export default function MainProgram() {
  const { data } = useGetAllPrograms()
  return (
    <div className={main_container}>
      <p className={length_style}>전체 {data?.length}개</p>
      <Programs programs={data} />
    </div>
  )
}
