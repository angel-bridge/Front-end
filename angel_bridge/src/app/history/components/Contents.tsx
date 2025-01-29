import MyLectureCard from './MyLectureCard'
import { wrapper, warning, emptyCard } from '../styles/Contents.css'
import { ProgramDataType } from '@/program/types/dataType'

interface ContentsProps {
  data: ProgramDataType[] | undefined
  isLoading: boolean
}

export default function Contents({ data, isLoading }: ContentsProps) {
  if (isLoading) {
    return (
      <div className={wrapper}>
        <div className={warning}>로딩 중...</div>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return (
      <div className={wrapper}>
        <div className={warning}>등록된 수강 프로그램이 없습니다.</div>
      </div>
    )
  }

  const filledData = [...data, ...Array(Math.max(0, 4 - data.length)).fill(null)];

  return (
    <div className={wrapper}>
      {filledData.map((item, index) => item ? (
          <MyLectureCard
            educationId={item.educationId}
            key={index}
            thumbnail={item.preImage || '/assets/defaultThumbnail.png'}
            state={item.enrollmentStatus}
            start={item.educationStartDate}
            end={item.educationEndDate}
            title={item.title}
            bio={item.description}
          />
        ) : (
          <div key={`empty-${index}`} className={emptyCard}></div>
        )
      )}
    </div>
  )
}
