'use client'
import React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import { vars } from '@/style/theme.css'
import { piechart_container, piechart_percent } from '../styles/status.css'

export default function PieChartCard() {
  return (
    <div className={piechart_container}>
      <div>
        <p>미션 수행도</p>
        <p className={piechart_percent}>32%</p>
      </div>
      <div style={{}}>
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
            color: ' #6C54F6',
          }}
        />
      </div>
    </div>
  )
}
