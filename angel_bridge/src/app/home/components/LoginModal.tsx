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
                <div className={style.closeButton} onClick={onClose}>
                    <Image src={CloseButton} alt='closeButton' />
                </div>
                <div className={style.image}>
                    <Image src={LoginImage} alt='AngelBridgeImage' />
                </div>
                <div className={style.announceText}>창업 시작은 엔젤브릿지와 함께</div>
                <a href="http://3.39.14.152/oauth2/authorization/kakao" target="_self">
                    <div className={style.loginButton}>
                        <Image src={KakaoLogo} alt='KakaoLogo' />
                        <div className={style.loginText}>카카오 로그인</div>
                    </div>
                </a>
            </div>
        </div>
    );
}