"use client"

import * as style from '@/app/home/styles/Recommends.css';
import ProgramCard from '@/components/common/ProgramCard';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getRecommendedProgram, ProgramResult } from '@/api/education';

export default function Recommends() {
    const router = useRouter();
    const [programs, setPrograms] = useState<ProgramResult[]>([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const data = await getRecommendedProgram();
                setPrograms(data);
            } catch (error) {
                console.error("추천 프로그램 불러오기 실패:", error);
            }
        };

        fetchPrograms();
    }, []);

    return (
        <div className={style.recommends}>
            <div className={style.titleWrapper}>
                <div className={style.title}>추천 프로그램</div>
                <div 
                    className={style.seeAll}
                    onClick={() => router.push('/program')}
                >전체보기</div>
            </div>
            <div className={style.contentsWrapper}>
                {programs.map((program) => (
                    <ProgramCard
                        key={program.educationId}
                        badgeText={program.recruitmentStatus}
                        badgeType={
                            program.recruitmentStatus === "모집중" ? "active" : "inactive"
                        }
                        title={program.title}
                        bio={program.description}
                        preImage={program.preImage}
                        onClick={() => router.push(`/program/${program.educationId}`)}
                    />
                ))}
            </div>
        </div>
    );
}