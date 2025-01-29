/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from 'react'
import Programs from './Programs'
import {
  length_style,
  main_container,
  program_pagnation,
} from './styles/programmain.css'
import { useProgramStore } from '@/program/store/useProgramStore'
import useGetAllPrograms from '@/program/api/hooks/useGetAllPrograms'
import useGetOngoings from '@/program/api/hooks/useGetOngoings'
import useGetUpcoming from '@/program/api/hooks/useGetUpcoming'
import useGetSearch from '@/program/api/hooks/useGetSearch'
import PageNation from './PageNation'
import EmptySearch from './EmpthySearch'
import EmpthyView from './EmpthyView'

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

  //0은 있다. 1은 검색결과가 비었다. 2는 아예 그냥 준비가 안됐다.
  const [isEmpthy, setIsEmpthy] = useState(0)

  useEffect(() => {
    if (search?.length != 0) {
      if (searchlist?.length == 0) {
        setIsEmpthy(1)
      } else {
        if (isClickOngoings && ongoings) {
          setProgram(searchlist)
          setListKind('ONGOING')
          setIsEmpthy(0)
        } else if (isClickUpcomings && upcomings) {
          setProgram(searchlist)
          setListKind('UPCOMING')
          setIsEmpthy(0)
        } else if (all) {
          setProgram(searchlist)
          setListKind('ALL')
          setIsEmpthy(0)
        }
      }
    } else if (search?.length == 0) {
      setIsEmpthy(0)
      if (isClickOngoings && ongoings) {
        if (ongoings?.content?.length !== 0) {
          setProgram(ongoings.content)
          setTotalPage(ongoings.totalPages)
        } else setIsEmpthy(2)
      } else if (isClickUpcomings && upcomings) {
        if (upcomings?.content?.length !== 0) {
          setProgram(upcomings.content)
          setTotalPage(upcomings.totalPages)
        } else setIsEmpthy(2)
      } else if (all) {
        if (all.content.length !== 0) {
          setProgram(all.content)
          setTotalPage(all.totalPages)
        } else setIsEmpthy(2)
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
    currentPage,
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
            전체 {isEmpthy == 0 ? program?.length : '0'}개
          </p>
          <div className={program_pagnation}>
            {isEmpthy == 1 ? (
              <EmptySearch />
            ) : isEmpthy == 2 ? (
              <EmpthyView />
            ) : (
              <Programs programs={program} />
            )}
            {isEmpthy == 0 && (
              <PageNation
                onClickPageNumber={onClickPageNumber}
                onClickNextPage={onClickNextPage}
                onClickPrevPage={onClickPrevPage}
                currentPage={currentPage}
                totalPage={totalPage}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
