import MyLectureCard from './MyLectureCard'
import { wrapper } from '../styles/Contents.css';
import { ProgramDataType } from '@/program/types/dataType';

// export interface ContentType {
//     thumbnail?: string
//     state: string
//     period: string
//     title: string
//     bio: string
// }

interface ContentsProps {
    data: ProgramDataType[] | undefined
    isLoading: boolean
}

export default function Contents({ data, isLoading }: ContentsProps) {
    if (isLoading) {
        return <div className={wrapper}>로딩 중...</div>
    }

    if (!data || data.length === 0) {
        return <div className={wrapper}>등록된 수강 프로그램이 없습니다.</div>
    }

    return (
            <div className={wrapper}>
                {data.map((item, index) => (
                <MyLectureCard
                    key={index}
                    thumbnail={item.preImage || '/assets/defaultThumbnail.png'} // 썸네일 없을 경우 기본값
                    state={item.enrollmentStatus}
                    start={item.educationStartDate}
                    end={item.educationEndDate}
                    title={item.title}
                    bio={item.description}
                />
                ))}
            </div>
    );
}
