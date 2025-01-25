/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import Programs from './Programs'
import { length_style, main_container } from './styles/programmain.css'
import { useProgramStore } from '@/program/store/useProgramStore'
import useGetAllPrograms from '@/program/api/hooks/useGetAllPrograms'
import useGetOngoings from '@/program/api/hooks/useGetOngoings'
import useGetUpcoming from '@/program/api/hooks/useGetUpcoming'
import useGetSearch from '@/program/api/hooks/useGetSearch'
import PageNation from './PageNation'

export default function MainProgram() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  const {
    program,
    setProgram,
    isClickOngoings,
    isClickUpcomings,
    search,
    listKind,
    setListKind,
  } = useProgramStore()

  const { data: all, isLoading } = useGetAllPrograms({ page: currentPage })
  const { data: ongoings } = useGetOngoings()
  const { data: upcomings } = useGetUpcoming()
  const { data: searchlist, isLoading: LoadingSearch } = useGetSearch({
    keyword: search,
    page: currentPage,
    status: listKind,
  })

  useEffect(() => {
    if (search) {
      if (isClickOngoings && ongoings) {
        setProgram(searchlist)
        setListKind('ONGOING')
      } else if (isClickUpcomings && upcomings) {
        setProgram(searchlist)
        setListKind('UPCOMING')
      } else if (all) {
        setProgram(searchlist)
        setListKind('ALL')
      }
    } else {
      if (isClickOngoings && ongoings) {
        setProgram(ongoings.content)
        setTotalPage(ongoings.totalPages)
      } else if (isClickUpcomings && upcomings) {
        setProgram(upcomings.content)
        setTotalPage(upcomings.totalPages)
      } else if (all) {
        setProgram(all.content)
        setTotalPage(all.totalPages)
      }
    }
  }, [
    all,
    ongoings,
    upcomings,
    program,
    isClickOngoings,
    isClickUpcomings,
    listKind,
    search,
    searchlist,
    LoadingSearch,
    totalPage,
  ])

  //pagenation함수
  function onClickNextPage() {
    setCurrentPage((prev) => prev + 1)
  }

  function onClickPrevPage() {
    setCurrentPage((prev) => prev - 1)
  }

  function onClickPageNumber(page: number) {
    setCurrentPage(page)
  }

  return (
    <>
      {isLoading && <p>loading...</p>}
      {LoadingSearch ? (
        <p>검색 결과 로딩중....</p>
      ) : (
        <div className={main_container}>
          <p className={length_style}>
            전체 {program ? program?.length : '0'}개
          </p>
          <Programs programs={program} />
          <PageNation
            onClickPageNumber={onClickPageNumber}
            onClickNextPage={onClickNextPage}
            onClickPrevPage={onClickPrevPage}
            currentPage={currentPage}
            totalPage={totalPage}
          />
        </div>
      )}
    </>
  )
}
