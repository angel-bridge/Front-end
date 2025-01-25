'use client'

import { useState } from 'react'
import PageTitle from './PageTitle'
import Contents from './Contents'
import { wrapper } from '../styles/Wrapper.css'
import PageNation from '@/program/components/main/PageNation'

export default function Wrapper() {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

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
        <div className={wrapper}>
            <PageTitle />
            <Contents />
            <PageNation
                onClickPageNumber={onClickPageNumber}
                onClickNextPage={onClickNextPage}
                onClickPrevPage={onClickPrevPage}
                currentPage={currentPage}
                totalPage={totalPage}
            />
        </div>
    )
}
