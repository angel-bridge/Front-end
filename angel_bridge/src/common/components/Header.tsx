'use client';

import React, { useState, useEffect } from 'react';
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
import ProfileButton from '@/app/login/components/ProfileButton';
import { jwtDecode } from 'jwt-decode';

import { useAccessTokenMutation, useRefreshTokenMutation } from '@/api/auth';

interface JwtPayload {
    exp: number;
    iat: number;
    sub: string;
}

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false); 
    const [isFetching, setIsFetching] = useState(false);

    const tabs = [
        { id: '/', label: '홈', colorIcon: HomeIconColor, greyIcon: HomeIconGrey },
        { id: '/program', label: '프로그램', colorIcon: ProgramIconColor, greyIcon: ProgramIconGrey },
        { id: '/inquiry', label: '문의', colorIcon: QnAIconColor, greyIcon: QnAIconGrey },
    ];

    const activeSection = `/${pathname.split('/')[1] || ''}`;
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

    const accessMutation = useAccessTokenMutation();
    const refreshMutation = useRefreshTokenMutation();

    useEffect(() => {
        if (hasLoaded || isFetching) return;

        const initializeAuth = async () => {
            setIsFetching(true);

            try {
                const accessToken = localStorage.getItem('accessToken');

                if (accessToken) {
                    const decodedToken = jwtDecode<JwtPayload>(accessToken);
                    const currentTime = Math.floor(Date.now() / 1000);

                    if (decodedToken.exp > currentTime) {
                        setIsLoggedIn(true);
                        setHasLoaded(true);
                        setIsFetching(false);
                        return;
                    } else {
                        localStorage.removeItem('accessToken');
                    }
                }

                await refreshMutation.mutateAsync(undefined, {
                    onSuccess: (refreshToken) => {
                        if (refreshToken) {
                            accessMutation.mutate(refreshToken, {
                                onSuccess: () => {
                                    setIsLoggedIn(true);
                                },
                                onError: () => {
                                    setIsLoggedIn(false);
                                },
                            });
                        } else {
                            setIsLoggedIn(false);
                        }
                    },
                    onError: () => {
                        setIsLoggedIn(false);
                    },
                });
            } catch (error) {
                console.error('초기화 실패:', error);
                setIsLoggedIn(false);
            } finally {
                setHasLoaded(true);
                setIsFetching(false);
            }
        };

        initializeAuth();
    }, [accessMutation, refreshMutation, hasLoaded, isFetching]);

    return (
        <div className={styles.header}>
            <Link href='/'>
                <Image src={Logo} alt='MainLogo' />
            </Link>
            <div className={styles.menuTabWrapper}>
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
                        className={
                            activeSection === tab.id
                                ? styles.colorMenuTab
                                : styles.greyMenuTab
                        }
                        onClick={() => handleClickTab(tab.id)}
                    >
                        <Image
                            src={activeSection === tab.id ? tab.colorIcon : tab.greyIcon}
                            alt={`${tab.label}Button`}
                        />
                        <div
                            className={
                                activeSection === tab.id
                                    ? styles.colorTabText
                                    : styles.greyTabText
                            }
                        >
                            {tab.label}
                        </div>
                    </div>
                ))}
            </div>
            {isLoggedIn ? (
                <ProfileButton />
            ) : (
                <button className={styles.loginButton} onClick={handleModalOpen}>
                    <div className={styles.buttonText}>로그인</div>
                </button>
            )}

            {isModalOpen && <LoginModal onClose={handleModalClose} />}
        </div>
    );
}
