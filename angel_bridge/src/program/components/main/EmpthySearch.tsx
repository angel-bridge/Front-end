import Image from 'next/image'
import React from 'react'
import searchIcon from '../../assets/searchIc.svg'
import {
  empthy_icon,
  empthy_view_container,
} from '@/program/styles/empthyview.css'

export default function EmptySearch() {
  return (
    <div className={empthy_view_container}>
      <div className={empthy_icon}>
        <Image src={searchIcon} fill alt="검색 아이콘" />
      </div>
      <p>앗! 검색 결과가 없어요</p>
    </div>
  )
}
