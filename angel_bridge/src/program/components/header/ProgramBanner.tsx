'use client'
import useGetBanner from '@/program/api/hooks/useGetBanner'
import { programbanner_style } from '@/program/styles/header.css'
import Image from 'next/image'
import React from 'react'

export default function ProgramBanner() {
  const { data } = useGetBanner()
  const imageFile = data?.imageFile
  return (
    <div className={programbanner_style}>
      {imageFile && <Image src={imageFile} alt="프로그램 배너" fill />}
    </div>
  )
}
