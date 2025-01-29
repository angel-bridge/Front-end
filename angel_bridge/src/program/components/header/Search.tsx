'use client'
import React from 'react'
import { search_style } from '@/program/styles/search.css'
import { useProgramStore } from '@/program/store/useProgramStore'

export default function Search() {
  const { search, setSearch } = useProgramStore()

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <input
      value={search}
      onChange={handleSearch}
      placeholder="검색할 내용을 입력하세요"
      className={search_style}
    />
  )
}
