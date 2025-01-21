import React from 'react'
import * as style from '../styles/bottom.css'
import { DUMMY_DATA } from '../core/submitStatus'
import MissionSubmitStatusCard from './MissionSubmitStatusCard'
import { bottom_black_style, bottom_gray_style } from '../styles/button.css'

export default function BottomFrame() {
  return (
    <div className={style.bottom_contaeinr}>
      <p className={style.title_style}>미션 제출 현황</p>
      <div className={style.buttons_container}>
        <button className={bottom_black_style}>1-7회차</button>
        <button className={bottom_gray_style}>8-14회차</button>
        <button className={bottom_gray_style}>15-21회차</button>
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
