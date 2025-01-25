import Image from 'next/image'
import Thumbnail from '@/app/home/assets/dummyImage.png'
import * as style from './ProgramCard.css'

interface ProgramCardProps {
  badgeText: string
  badgeType: string
  title: string
  bio: string
  preImage?: string
  onClick?: () => void
}

export default function ProgramCard({
  badgeText,
  badgeType,
  title,
  bio,
  preImage,
  onClick,
}: ProgramCardProps) {
  return (
    <div className={style.contents} onClick={onClick}>
      <div className={style.contentImage}>
        <div
          className={
            badgeType === 'active' ? style.activeBadge : style.inactiveBadge
          }
        >
          {badgeText}
        </div>
        <div className={style.img_style}>
          <Image
            src={preImage ? preImage : Thumbnail}
            alt="Program Thumbnail"
            fill
            style={{
              objectFit: 'cover',
              borderRadius: '1.5rem',
            }}
          />
        </div>
      </div>
      <div className={style.contentText}>
        <div className={style.contentTitle}>{title}</div>
        <div className={style.contentBio}>{bio}</div>
      </div>
    </div>
  )
}
