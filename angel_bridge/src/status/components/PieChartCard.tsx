'use client'
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { heading28B, vars } from '@/style/theme.css'
import { piechart_container, piechart_percent } from '../styles/status.css'

export default function PieChartCard() {
  return (
    <div className={piechart_container}>
      <div>
        <p>미션 수행도</p>
        <p className={piechart_percent}>32%</p>
      </div>
      <div>
        <PieChart
          data={[
            {
              value: 10,
              color: vars.purple.purple400,
            },
          ]}
          reveal={32}
          style={{
            width: '13.6rem',
            height: '13.6rem',
            padding: '1.2rem',
          }}
          lineWidth={18}
          lengthAngle={360}
          startAngle={270}
          background={vars.purple.purple200}
          rounded
          labelPosition={0}
          label={({ dataEntry }) => dataEntry.value + '%'}
          labelStyle={{
            fontWeight: 700,
            fontSize: '2.8rem',
            lineHeight: '150%',
            letterSpacing: '-0.02rem',
            fill: vars.purple.purple400,
          }}
        />
      </div>
    </div>
  )
}
