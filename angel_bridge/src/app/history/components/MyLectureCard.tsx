import Image from 'next/image';
import * as style from '../styles/MyLectureCard.css';

interface CardProps {
    thumbnail: string; // 썸네일 이미지
    state: string; // 수강중, 수강예정, 수강 완료
    period: string; // 날짜 자료형 백에서 데이터 어케 처리하느냐에 따라 바꾸기
    title: string;
    bio: string;
}

export default function MyLectureCard({ thumbnail, state, period, title, bio }: CardProps) {
    return (
        <div className={style.contents}>
            <div className={style.contentInfo}>
                <div className={style.contentImage}>
                    <Image
                        src={thumbnail}
                        alt="Program Thumbnail"
                        width={180}
                        height={180}
                        style={{
                            objectFit: 'cover',
                            borderRadius: '24px',
                        }}
                    />
                </div>
                <div className={style.contentText}>
                    <div className={style.contentPeriod}>{period}</div>
                    <div className={style.contentTitle}>{title}</div>
                    <div className={style.contentBio}>{bio}</div>
                </div>
            </div>
        </div>
    );
}
