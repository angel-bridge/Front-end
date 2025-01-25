'use client'

import { useState, useEffect } from 'react'
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
    const { data: willTakeProgramsData, isLoading: loadingWillTake } = useGetWillTakePrograms({ page: currentPage })
    const { data: takenProgramsData, isLoading: loadingTaken } = useGetTakenPrograms({ page: currentPage })

    useEffect(() => {
        if (selectedButton === 'willTake') {
            setWillTakePrograms(willTakeProgramsData)
        } else if (selectedButton === 'taken') {
            setTakenPrograms(takenProgramsData)
        }
    }, [selectedButton, currentPage, willTakeProgramsData, takenProgramsData])

    const handleButtonClick = (button: 'taking' | 'willTake' | 'taken') => {
        setSelectedButton(button)
        setCurrentPage(1)
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
