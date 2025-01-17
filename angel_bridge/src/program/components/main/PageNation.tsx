'use client'
import {
  pageButton,
  pagenationNumber,
  pageNumberContainer,
} from './styles/pagenation.css'
import NextBtn from '../../assets/rightIc.svg'
import PrevBtn from '../../assets/leftIc.svg'
import Image from 'next/image'

export default function PageNation({
  onClickNextPage,
  onClickPrevPage,
  currentPage,
}: {
  onClickNextPage: () => void
  onClickPrevPage: () => void
  currentPage: number
}) {
  return (
    <div className={pageNumberContainer}>
      <div onClick={onClickPrevPage} className={pageButton}>
        <Image src={PrevBtn} alt="이전으로" fill />
      </div>
      <div className={pagenationNumber}>{currentPage}</div>
      <div onClick={onClickNextPage} className={pageButton}>
        <Image src={NextBtn} alt="이후페이지로" fill />
      </div>
    </div>
  )
}
