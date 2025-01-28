'use client'
import {
  pageButton,
  pagenationNumber,
  pageNumberContainer,
} from './styles/pagenation.css'
import NextBtn from '../../assets/rightIc.svg'
import PrevBtn from '../../assets/leftIc.svg'
import Image from 'next/image'

interface PageNationProps {
  onClickNextPage: () => void
  onClickPrevPage: () => void
  onClickPageNumber: (page: number) => void
  currentPage: number
  totalPage: number
}

export default function PageNation({
  onClickNextPage,
  onClickPrevPage,
  onClickPageNumber,
  currentPage,
  totalPage,
}: PageNationProps) {
  const renderPageNumbers = () => {
    return Array.from({ length: totalPage }, (_, index) => {
      const page = index + 1
      return (
        <div
          key={page}
          className={currentPage === page ? pagenationNumber : ''}
          onClick={() => onClickPageNumber(page)}
        >
          {page}
        </div>
      )
    })
  }

  return (
    <div className={pageNumberContainer}>
      <div
        onClick={onClickPrevPage}
        className={pageButton}
        aria-disabled={currentPage === 1}
      >
        <Image src={PrevBtn} alt="이전으로" fill />
      </div>
      {renderPageNumbers()}
      <div
        onClick={onClickNextPage}
        className={pageButton}
        aria-disabled={currentPage === totalPage}
      >
        <Image src={NextBtn} alt="다음으로" fill />
      </div>
    </div>
  )
}
