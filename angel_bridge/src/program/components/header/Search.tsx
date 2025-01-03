import React from 'react'
import { search_style, searchIcon_style } from '@/program/styles/search.css'

export default function Search() {
  return (
    <input placeholder="검색할 내용을 입력하세요" className={search_style} />
  )
}
