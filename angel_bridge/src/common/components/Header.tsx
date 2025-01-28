"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '@/app/home/assets/Logo_purple.svg';
import HomeIconColor from '@/app/home/assets/HomeIcon_color.svg';
import ProgramIconColor from '@/app/home/assets/ProgramIcon_color.svg';
import QnAIconColor from '@/app/home/assets/QnAIcon_color.svg';
import HomeIconGrey from '@/app/home/assets/HomeIcon_grey.svg';
import ProgramIconGrey from '@/app/home/assets/ProgramIcon_grey.svg';
import QnAIconGrey from '@/app/home/assets/QnAIcon_grey.svg';

import * as styles from '@/app/home/styles/Header.css';

import LoginModal from '../../app/home/components/LoginModal';

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const tabs = [
        { id: "/", label: "홈", colorIcon: HomeIconColor, greyIcon: HomeIconGrey },
        { id: "/program", label: "프로그램", colorIcon: ProgramIconColor, greyIcon: ProgramIconGrey },
        { id: "/inquiry", label: "문의", colorIcon: QnAIconColor, greyIcon: QnAIconGrey },
    ];

    const activeSection = `/${pathname.split("/")[1] || ""}`;
    const activeIndex = tabs.findIndex((tab) => tab.id === activeSection);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleClickTab = (id: string) => {
        router.push(id);
    };

    return (
        <div className={styles.header}>
            <Link href='/'>
                <Image src={Logo} alt="MainLogo"/>
            </Link>
            <div className={styles.menuTabWrapper}>
                {/* 슬라이딩 넣구싶어서...ㅎㅎ */}
                {activeIndex >= 0 && (
                    <div
                        className={styles.slidingBackground}
                        style={{
                            transform: `translateX(${activeIndex * 12}rem)`,
                        }}
                    />
                )}
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={activeSection === tab.id ? styles.colorMenuTab : styles.greyMenuTab}
                        onClick={() => handleClickTab(tab.id)}
                    >
                        <Image
                            src={activeSection === tab.id ? tab.colorIcon : tab.greyIcon}
                            alt={`${tab.label}Button`}
                        />
                        <div className={activeSection === tab.id ? styles.colorTabText : styles.greyTabText}>
                            {tab.label}
                        </div>
                    </div>
                ))}
            </div>
            <button className={styles.loginButton} onClick={handleModalOpen}>
                <div className={styles.buttonText}>로그인</div>
            </button>

            {/* 로그인 모달 컴포넌트 */}
            {isModalOpen && <LoginModal onClose={handleModalClose} />}
        </div>
    )
}