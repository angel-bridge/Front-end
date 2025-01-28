import React from 'react'
import PieChartCard from './PieChartCard'
import { NOTION_LIST } from '../core/notion'
import Notion from './Notion'
import { notions_container, status_constainer } from '../styles/status.css'
import Link from 'next/link'

//미션 수행도 카드드 + 파이 차트
export default function StatusCard({
  noticeLink,
  methodLink,
  performanceRate,
}: {
  noticeLink: string | undefined
  methodLink: string | undefined
  performanceRate: number | undefined
}) {
  return (
    <div className={status_constainer}>
      <PieChartCard performanceRate={performanceRate} />
      <div className={notions_container}>
        {noticeLink && (
          <Link href={noticeLink && noticeLink}>
            <Notion title={NOTION_LIST[0].title} img={NOTION_LIST[0].img} />
          </Link>
        )}
        {methodLink && (
          <Link href={methodLink}>
            <Notion title={NOTION_LIST[1].title} img={NOTION_LIST[1].img} />
          </Link>
        )}
      </div>
    </div>
  )
}
