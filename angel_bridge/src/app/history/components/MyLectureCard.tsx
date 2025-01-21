import Image from 'next/image';
import Button from '@/components/common/Button';
import * as style from '../styles/MyLectureCard.css';

interface CardProps {
    thumbnail: string; // 썸네일 이미지
    state: string; // 수강중, 수강예정, 수강 완료
    period: string; // 날짜 자료형 백에서 데이터 어케 처리하느냐에 따라 바꾸기
    title: string;
    bio: string;
}

export default function MyLectureCard({ thumbnail, state, period, title, bio }: CardProps) {
    const isValid = state === '수강중' || state === '수강완료';

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
                    <div className={style.contentPeriod}>{period}</div>
                    <div className={style.contentTitle}>{title}</div>
                    <div className={style.contentBio}>{bio}</div>
                </div>
            </div>
            <Button isValid={isValid} text='미션 바로가기'/>
        </div>
    );
}
