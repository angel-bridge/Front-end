'use client'

import { useState } from 'react'
import PageTitle from './PageTitle'
import Contents from './Contents'
import { wrapper } from '../styles/Wrapper.css'
import PageNation from '@/program/components/main/PageNation'
import { ProgramContentType } from '@/program/types/dataType'

import useGetTakingPrograms from '../api/hooks/useGetTakingPrograms'
import useGetWillTakePrograms from '../api/hooks/useGetWillTakePrograms'
import useGetTakenPrograms from '../api/hooks/useGetTakenPrograms'

export default function Wrapper() {
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedButton, setSelectedButton] = useState<'taking' | 'willTake' | 'taken'>('taking')
    const [willTakePrograms, setWillTakePrograms] = useState<ProgramContentType | undefined>(undefined)
    const [takenPrograms, setTakenPrograms] = useState<ProgramContentType | undefined>(undefined)

    const { data: takingPrograms, isLoading: loadingTaking } = useGetTakingPrograms({ page: currentPage })

    const [loadingWillTake, setLoadingWillTake] = useState(false)
    const [loadingTaken, setLoadingTaken] = useState(false)

    const fetchWillTakePrograms = async () => {
        if (willTakePrograms) return // 이미 데이터가 있으면 호출 X
        setLoadingWillTake(true)
        const response = await useGetWillTakePrograms({ page: currentPage })
        setWillTakePrograms(response.data)
        setLoadingWillTake(false)
    }

    const fetchTakenPrograms = async () => {
        if (takenPrograms) return // 이미 데이터가 있으면 호출 X
        setLoadingTaken(true)
        const response = await useGetTakenPrograms({ page: currentPage })
        setTakenPrograms(response.data)
        setLoadingTaken(false)
    }

    const handleButtonClick = async (button: 'taking' | 'willTake' | 'taken') => {
        setSelectedButton(button)
        setCurrentPage(1)
        if (button === 'willTake') {
            await fetchWillTakePrograms()
        } else if (button === 'taken') {
            await fetchTakenPrograms()
        }
    }
    
    const currentData: ProgramContentType | undefined =
        selectedButton === 'taking' ? takingPrograms
            : selectedButton === 'willTake' ? willTakePrograms
            : takenPrograms
    
    
    return (
        <div className={wrapper}>
            <PageTitle selectedButton={selectedButton} onButtonClick={handleButtonClick} />
            <Contents data={currentData?.content} isLoading={loadingTaking || loadingWillTake || loadingTaken} />
            <PageNation
                onClickPageNumber={(page) => setCurrentPage(page)}
                onClickNextPage={() => setCurrentPage((prev) => prev + 1)}
                onClickPrevPage={() => setCurrentPage((prev) => prev - 1)}
                currentPage={currentPage}
                totalPage={currentData?.totalPages || 1}
            />
        </div>
    )
}
