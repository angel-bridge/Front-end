import React from 'react'
import PieChartCard from './PieChartCard'
import { NOTION_LIST } from '../core/notion'
import Notion from './Notion'
import { title } from 'process'
import { notions_container, status_constainer } from '../styles/status.css'

//미션 수행도 카드드 + 파이 차트
export default function StatusCard() {
  return (
    <div className={status_constainer}>
      <PieChartCard />
      <div className={notions_container}>
        {NOTION_LIST.map((data) => {
          return <Notion key={title} title={data.title} img={data.img} />
        })}
      </div>
    </div>
  )
}
