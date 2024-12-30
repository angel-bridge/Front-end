import Image from 'next/image';
import Thumbnail from '@/app/home/assets/dummyImage.png';
import * as style from './ProgramCard.css';

interface ProgramCardProps {
    badgeText: string;
    badgeType: string;
    title: string;
    bio: string;
}

export default function ProgramCard({ badgeText, badgeType, title, bio }: ProgramCardProps) {
    return (
        <div className={style.contents}>
            <div className={style.contentImage}>
                <div className={badgeType === 'active' ? style.activeBadge : style.inactiveBadge}>
                    {badgeText}
                </div>
                <Image
                    src={Thumbnail}
                    alt="Program Thumbnail"
                    width={330}
                    height={180}
                    style={{
                        objectFit: 'cover',
                        borderRadius: '1.5rem',
                    }}
                />
            </div>
            <div className={style.contentText}>
                <div className={style.contentTitle}>{title}</div>
                <div className={style.contentBio}>{bio}</div>
            </div>
        </div>
    );
}
