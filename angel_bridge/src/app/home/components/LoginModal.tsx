import Image from 'next/image';
import LoginImage from '@/app/home/assets/Image-LogIn.svg';
import KakaoLogo from '@/app/home/assets/kakao_logo.svg';
import CloseButton from '@/app/home/assets/close_button.svg';

import * as style from '@/app/home/styles/LoginModal.css';

type LoginModalProps = {
    onClose: () => void;
};

export default function LoginModal({ onClose }: LoginModalProps) {
    return (
        <div className={style.loginModal}>
            <div className={style.loginWrapper}>
                <button className={style.closeButton} onClick={onClose}>
                    <Image src={CloseButton} alt='closeButton' />
                </button>
                <div className={style.image}>
                    <Image src={LoginImage} alt='AngelBridgeImage' />
                </div>
                <div className={style.announceText}>창업 시작은 엔젤브릿지와 함께</div>
                <a href="https://api.angelbridge.site/oauth2/authorization/kakao" target="_self">
                    <button className={style.loginButton}>
                        <Image src={KakaoLogo} alt='KakaoLogo' />
                        <div className={style.loginText}>카카오 로그인</div>
                    </button>
                </a>
            </div>
        </div>
    );
}