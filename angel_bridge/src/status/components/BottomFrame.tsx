'use client'
import React, { useState } from 'react'
import * as style from '../styles/bottom.css'
import { DUMMY_DATA } from '../core/submitStatus'
import MissionSubmitStatusCard from './MissionSubmitStatusCard'
import { bottom_black_style, bottom_gray_style } from '../styles/button.css'
import useGetMissionStatusList from '../api/hooks/useGetMissionStatusList'
import { useParams } from 'next/navigation'

export default function BottomFrame() {
  const params = useParams()
  const educationId = params.educationId as string
  const [page, setPage] = useState(1)

  const { data } = useGetMissionStatusList(educationId, page)

  console.log(data)

  function handleSetPage(number: number) {
    setPage(number)
  }

  return (
    <div className={style.bottom_contaeinr}>
      <p className={style.title_style}>미션 제출 현황</p>
      <div className={style.buttons_container}>
        <button onClick={() => handleSetPage(1)} className={bottom_black_style}>
          1-7회차
        </button>
        <button onClick={() => handleSetPage(2)} className={bottom_gray_style}>
          8-14회차
        </button>
        <button onClick={() => handleSetPage(3)} className={bottom_gray_style}>
          15-21회차
        </button>
      </div>
      <div className={style.submitCards_container}>
        {DUMMY_DATA.map((data) => {
          return (
            <MissionSubmitStatusCard
              round={data.round}
              attendanceStatus={data.attendanceStatus}
              key={data.assignmentId}
            />
          )
        })}
      </div>
    </div>
  )
}
