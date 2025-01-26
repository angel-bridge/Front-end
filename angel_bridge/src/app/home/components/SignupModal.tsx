'use client'

import { useState } from 'react';
import usePostMemberInfo from '@/app/login/hooks/usePostMemberInfo';
import Image from 'next/image';
import CloseButton from '@/app/home/assets/close_button.svg';
import { CustomCheckbox } from './CustomCheckbox';

import * as style from '@/app/home/styles/SignupModal.css';

type SignupModalProps = {
    onClose: () => void;
};

export default function SignupModal({ onClose }: SignupModalProps) {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [checkedStates, setCheckedStates] = useState({
        all: false,
        age: false,
        privacy: false,
        news: false,
    });

    const isFormValid =
        email.trim() !== '' &&
        phoneNumber.trim() !== '' &&
        checkedStates.age &&
        checkedStates.privacy;

    const { mutate } = usePostMemberInfo();

    // 전체 동의 핸들러
    const handleAllCheckboxChange = () => {
        const newState = !checkedStates.all;
        setCheckedStates({
            all: newState,
            age: newState,
            privacy: newState,
            news: newState,
        });
    };

    // 개별 체크박스 핸들러
    const handleCheckboxChange = (key: keyof typeof checkedStates) => {
        setCheckedStates((prevState) => {
            const newStates = { ...prevState, [key]: !prevState[key] };

            // 모든 개별 체크박스가 체크된 경우 전체 동의 상태를 true로 설정
            const allChecked =
                newStates.age && newStates.privacy && newStates.news;
            newStates.all = allChecked;

            return newStates;
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) {
            alert('필수 항목을 모두 입력해주세요.');
            return;
        }
    
        mutate(
            { email, phoneNumber, isSelect: checkedStates.news },
            {
            onSuccess: (response) => {
                alert(`회원가입이 완료되었습니다! res: ${response.message}`);
                onClose();
            },
            onError: (error: any) => {
                alert(`회원가입에 실패했습니다. error: ${error.message}`);
            },
            }
        );
    };
    
    return (
        <div className={style.signupModal}>
            <div className={style.signupWrapper}>
                <button className={style.closeButton} onClick={onClose}>
                    <Image src={CloseButton} alt='closeButton' />
                </button>
                <div className={style.title}>추가 정보 입력</div>
                <div className={style.announceText}>서비스 이용에 필요한 정보 입력 및 약관에 동의해 주세요</div>
                <form onSubmit={handleSubmit}>
                    <div className={style.field}>
                        <div className={style.fieldTitle}>이메일 주소 *</div>
                        <input 
                            type='text' 
                            placeholder='angelbridge@gmail.com' 
                            className={style.inputField}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className={style.field}>
                        <div className={style.fieldTitle}>전화번호 *</div>
                        <input 
                        type='tel' 
                        placeholder='010-XXXX-XXXX' 
                        className={style.inputField}
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    ></input>
                    </div>
                    <div className={style.terms}>
                        <div className={style.selectAll}>
                            <CustomCheckbox 
                                isChecked={checkedStates.all} 
                                setIsChecked={handleAllCheckboxChange}
                                id="checkbox-all"
                            />
                            <div className={style.termText}>전체동의</div>
                        </div>
                        <div className={style.line}></div>
                        <div className={style.termWrapper}>
                            <CustomCheckbox 
                                isChecked={checkedStates.age} 
                                setIsChecked={() => handleCheckboxChange('age')}
                                id="checkbox-age"
                            />
                            <div className={style.termText}>[필수] 만 14세 이상 확인</div>
                        </div>
                        <div className={style.termWrapper}>
                            <CustomCheckbox 
                                isChecked={checkedStates.privacy}
                                setIsChecked={() => handleCheckboxChange('privacy')}
                                id="checkbox-privacy"
                            />
                            <div className={style.termText}>[필수] 개인정보 수집 및 이용 동의</div>
                        </div>
                        <div className={style.termWrapper}>
                            <CustomCheckbox
                                isChecked={checkedStates.news}
                                setIsChecked={() => handleCheckboxChange('news')}
                                id="checkbox-news"
                            />
                            <div className={style.termText}>[선택] 엔젤브릿지 프로그램 개설 소식 이메일 수신</div>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className={`${style.signupButton} ${
                            isFormValid
                                ? style.signupButtonVariants.active
                                : style.signupButtonVariants.disabled
                        }`}
                        disabled={!isFormValid}
                    >
                        <div
                            className={`${style.signupText} ${
                                isFormValid
                                    ? style.signupTextVariants.active
                                    : style.signupTextVariants.disabled
                            }`}
                        >
                        회원가입 완료
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
}