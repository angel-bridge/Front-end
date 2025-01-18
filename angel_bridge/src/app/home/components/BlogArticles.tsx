"use client"

import * as style from '@/app/home/styles/BlogArticles.css';

import Image from 'next/image';
import Link from 'next/link';
import ProfileImage from '@/app/home/assets/ProfileImage.jpg';
import { useState, useEffect } from 'react';
import { BlogResult, getBlogArticles } from '@/api/blog';

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
                <Link href = 'https://blog.naver.com/angel_bridge'>
                    <div className={style.seeAll}>전체보기</div>
                </Link>
            </div>
            <div className={style.contentsWrapper}>
            {articles.map((article, index) => (
                <Link key={index} href = {article.link}>
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
                            <div className={style.writer}>엔젤브릿지</div>
                            <div className={style.writtenDate}>{article.postingDate}</div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    );
}