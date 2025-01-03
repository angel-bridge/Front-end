"use client"

import * as style from '@/app/home/styles/BlogArticles.css';

import Image from 'next/image';
import ProfileImage from '@/app/home/assets/ProfileImage.jpg';
import { useState, useEffect } from 'react';
import { BlogResult, getBlogArticles } from '@/api/blog';

const contentsDummyData = [
    {
        title: "[안 읽으면 손해!] 2025 스타트업 지원 사업 총정리",
        text: "블로그 첫 시작 문구를 가져와 주세요 두줄정도가 적당할 것 같다고 생각 중이에요 블로그 첫 시작 문구를 가져와 주세요 두줄정도가 적당할 것 같다고 생각 중이에요",
        writer: "엔젤브릿지",
        date: "2024. 12. 16",
    },
    {
        title: "[안 읽으면 손해!] 2025 스타트업 지원 사업 총정리",
        text: "블로그 첫 시작 문구를 가져와 주세요 두줄정도가 적당할 것 같다고 생각 중이에요 블로그 첫 시작 문구를 가져와 주세요 두줄정도가 적당할 것 같다고 생각 중이에요",
        writer: "엔젤브릿지",
        date: "2024. 12. 16",
    },
];

export default function BlogArticles() {
    const [articles, setArticles] = useState<BlogResult[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const blogData = await getBlogArticles();
                setArticles(blogData);
            } catch (error) {
                console.error("블로그 아티클 불러오기 실패:", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className={style.articles}>
            <div className={style.titleWrapper}>
                <div className={style.title}>NEW! 블로그 아티클</div>
                <div className={style.seeAll}>전체보기</div>
            </div>
            <div className={style.contentsWrapper}>
            {articles.map((article, index) => (
                    <div key={index} className={style.contents}>
                        <div className={style.textWrapper}>
                            <div className={style.contentTitle}>{article.title}</div>
                            <div className={style.contentText}>{article.content}</div>
                        </div>
                        <div className={style.writerWrapper}>
                            <Image
                                src={ProfileImage}
                                alt="ProfileImage"
                                width={24}
                                height={24}
                                style={{
                                    objectFit: 'cover',
                                    borderRadius: '1.5rem',
                                }}
                            />
                            <div className={style.writer}>{article.author}</div>
                            <div className={style.writtenDate}>{article.postingDate}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}