"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import * as styles from '@/app/login/styles/ProfileButton.css'
import Profile from '@/app/login/assets/profile_img.jpg'

export default function ProfileButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target as Node)
        ) {
            setIsModalOpen(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    const navigate = (path: string) => {
        router.push(path);
        setIsModalOpen(false);
    };

    return (
        <div>
            <button className={styles.profileButton} onClick={toggleModal} ref={buttonRef}>
                <div className={styles.profileImage}>
                    <Image src={Profile} alt="프로필 이미지" fill />
                </div>
                <div className={styles.buttonText}>현종혁</div>
            </button>
            {isModalOpen && (
                <div className={styles.profileModal} ref={modalRef}>
                    <button 
                        className={styles.modalMenu}
                        onClick={() => navigate('/history')}
                    >수강내역</button>
                    <button 
                        className={styles.modalMenu}
                        onClick={() => navigate('/mypage')}
                    >마이페이지</button>
                    <button 
                        className={styles.modalMenu}
                        onClick={() => alert("로그아웃 하는 척 하기...")}
                    >로그아웃</button>
                </div>
            )}
        </div>
    )
}
