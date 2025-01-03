import React from 'react'
import Image from 'next/image'
import { search } from '@/program/styles/programHeader.css'

export default function Search() {
  return (
    <div>
      <label>
        <input placeholder="검색할 내용을 입력하세요" className={search} />
        <Image alt="검색" src="/assets/search.svg" width={24} height={24} />
      </label>
    </div>
  )
}
