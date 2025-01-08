import React from 'react'
import MyLectureCard from './MyLectureCard'
import { wrapper } from '../styles/Contents.css';

const MyLectureDummyData = [
    {
        // thumbnail: '',
        state: '수강중',
        period: '2024. 12. 15 - 2024. 12. 28',
        title: '예비창업패키지 2주 완성',
        bio: '프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.',
    },
    {
        // thumbnail: '',
        state: '수강중',
        period: '2024. 12. 15 - 2024. 12. 28',
        title: '예비창업패키지 2주 완성',
        bio: '프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.',
    },
    {
        // thumbnail: '',
        state: '수강중',
        period: '2024. 12. 15 - 2024. 12. 28',
        title: '예비창업패키지 2주 완성',
        bio: '프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.',
    },
    {
        // thumbnail: '',
        state: '수강중',
        period: '2024. 12. 15 - 2024. 12. 28',
        title: '예비창업패키지 2주 완성',
        bio: '프로그램 한줄 소개를 작성해 주세요. 두줄은 곤란해요.',
    },
];

export default function Contents() {
    return (
            <div className={wrapper}>
                {MyLectureDummyData.map((data, index) => (
                <MyLectureCard
                    key={index}
                    thumbnail={'/assets/defaultThumbnail.png'} // 썸네일 없을 경우 기본값
                    state={data.state}
                    period={data.period}
                    title={data.title}
                    bio={data.bio}
                />
                ))}
            </div>
    );
}
