"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import useGetMember from '@/mypage/api/hooks/useGetMember'
import * as styles from '@/app/login/styles/ProfileButton.css'
import DefaultProfile from '@/app/login/assets/profile_img.jpg'
import SignupModal from '@/app/home/components/SignupModal'

export default function ProfileButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    const { data: member, isLoading, isError } = useGetMember();

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

    useEffect(() => {
        if (member && !member.isRegistered) {
            setIsSignupModalOpen(true);
        }
    }, [member]);

    const navigate = (path: string) => {
        router.push(path);
        setIsModalOpen(false);
    };

    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    if (isError || !member) {
        return <div>프로필 로드 중 에러 발생</div>;
    }

    return (
        <div>
            <button className={styles.profileButton} onClick={toggleModal} ref={buttonRef}>
                <div className={styles.profileImage}>
                    <Image src={member.profileImageUrl || DefaultProfile} alt="프로필 이미지" fill />
                </div>
                <div className={styles.buttonText}>{member.nickname || '사용자'}</div>
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
            {isSignupModalOpen && <SignupModal onClose={() => setIsSignupModalOpen(false)} />}
        </div>
    )
}
