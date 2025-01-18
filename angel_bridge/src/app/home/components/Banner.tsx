"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { getBanners } from '@/api/banner';

import * as style from '@/app/home/styles/Banner.css';

export default function Banner() {
    const [images, setImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const banners = await getBanners();
                const imageUrls = banners.map((banner) => banner.imageFile);
                console.log(banners);
                setImages(imageUrls);
            } catch (error) {
                console.error("배너 이미지 가져오기 실패:", error);
            }
        };
    
        fetchBanners();
    }, []);

    // 슬라이드 전환 타이머
    useEffect(() => {
        if (images.length === 0) return;

        timerRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 3000);
    
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [images]);

    const selectSlide = (index: number) => {
        clearInterval(timerRef.current!);
        setCurrentIndex(index + 1);
    };

    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(images.length); // 마지막 슬라이드로 점프
            }, 50);
        } else if (currentIndex === images.length + 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1); // 첫 번째 슬라이드로 점프
            }, 50);
        }
    
        setTimeout(() => {
            setIsTransitioning(true);
        }, 100);
    };

    if (images.length === 0) return null;
    // 무한 슬라이드용 배열
    const extendedImages = [images[images.length - 1], ...images, images[0]];

    return (
        <div className={style.banner}>
            <div 
                className={style.slidesContainer}
                style={{ 
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: isTransitioning ? "transform 0.7s ease-in-out" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
            >
            {extendedImages.map((src, index) => (
                <div key={index} className={style.slide}>
                    <Image
                        src={src}
                        alt={`BannerImage ${index + 1}`}
                        fill
                        className={style.image}
                    />
                </div>
            ))}
            </div>
            <div className={style.indicatorContainer}>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`${style.indicator} ${
                            index + 1 === (currentIndex === 0 ? images.length : currentIndex > images.length ? 1 : currentIndex)
                            && style.activeIndicator
                            
                        }`}
                        onClick={() => selectSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}