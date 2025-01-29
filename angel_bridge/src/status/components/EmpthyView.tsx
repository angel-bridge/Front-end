import React from 'react'
import * as style from '../styles/common.css'

export default function EmpthyView() {
  return (
    <div className={style.empthy_container}>
      <div className={style.mission_empthy_title}>
        <p className={style.title_style}>오늘의 미션</p>
        <p className={style.empthy_text}>종료된 프로그램이에요</p>
      </div>
    </div>
  )
}
