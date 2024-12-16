"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '@/app/home/assets/Logo_purple.svg';
import HomeIconColor from '@/app/home/assets/HomeIcon_color.svg';
import ProgramIconColor from '@/app/home/assets/ProgramIcon_color.svg';
import QnAIconColor from '@/app/home/assets/QnAIcon_color.svg';
import HomeIconGrey from '@/app/home/assets/HomeIcon_grey.svg';
import ProgramIconGrey from '@/app/home/assets/ProgramIcon_grey.svg';
import QnAIconGrey from '@/app/home/assets/QnAIcon_grey.svg';

import * as styles from '@/app/home/styles/Header.css';

export default function Header() {
    const [activeTab, setActiveTab] = useState("home");

    const tabs = [
        { id: "home", label: "홈", colorIcon: HomeIconColor, greyIcon: HomeIconGrey },
        { id: "program", label: "프로그램", colorIcon: ProgramIconColor, greyIcon: ProgramIconGrey },
        { id: "qna", label: "문의", colorIcon: QnAIconColor, greyIcon: QnAIconGrey },
    ];

    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

    return (
        <div className={styles.header}>
            <Image src={Logo} alt="MainLogo"/>
            <div className={styles.menuTabWrapper}>
                {/* 슬라이딩 넣구싶어서...ㅎㅎ */}
                <div
                    className={styles.slidingBackground}
                    style={{
                        transform: `translateX(${activeIndex * 7.5}rem)`,
                    }}
                />
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={activeTab === tab.id ? styles.colorMenuTab : styles.greyMenuTab}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <Image
                            src={activeTab === tab.id ? tab.colorIcon : tab.greyIcon}
                            alt={`${tab.label}Button`}
                        />
                        <div className={activeTab === tab.id ? styles.colorTabText : styles.greyTabText}>
                            {tab.label}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.loginButton}>
                <p className={styles.buttonText}>로그인</p>
            </div>
        </div>
    )
}