import Image from 'next/image'
import Button from '@/components/common/Button'
import * as style from '../styles/MyLectureCard.css'
import Link from 'next/link'

interface CardProps {
  thumbnail: string // 썸네일 이미지
  state: string // 수강중, 수강예정, 수강 완료
  start: string
  end: string
  title: string
  bio: string
  educationId: number
}

export default function MyLectureCard({
  thumbnail,
  state,
  start,
  end,
  title,
  bio,
  educationId,
}: CardProps) {
  const isValid = state === '수강중' || state === '수강완료'

  return (
    <div className={style.contents}>
      <div className={style.contentInfo}>
        <div className={style.contentImage}>
          <Image
            src={thumbnail}
            alt="Program Thumbnail"
            fill
            style={{
              objectFit: 'cover',
              borderRadius: '24px',
            }}
          />
        </div>
        <div className={style.contentText}>
          <div className={style.contentPeriod}>
            {start} - {end}
          </div>
          <div className={style.contentTitle}>{title}</div>
          <div className={style.contentBio}>{bio}</div>
        </div>
      </div>
      <Link href={`/status/${educationId}`}>
        <Button isValid={isValid} text="미션 바로가기" />
      </Link>
    </div>
  )
}
