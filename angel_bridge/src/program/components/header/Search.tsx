import { search } from 'program/styles/programHeader'
import React from 'react'
import Image from 'next/image'

export default function Search() {
  return (
    <input placeholder="검색할 내용을 입력하세요" className={search}>
      <Image alt="검색" src="/assets/search.svg" width={24} height={24} />
    </input>
  )
}
