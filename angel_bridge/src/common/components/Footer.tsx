import Image from 'next/image';
import Logo from '@/app/home/assets/Logo_grey.svg';
import ChipButton from '@/app/home/assets/ChipButton.svg';

import * as style from '@/app/home/styles/Footer.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.logoWrapper}>
                <Image src={Logo} alt="Logo"/>
                <Image src={ChipButton} alt="ChipButton"/>
            </div>
            <div className={style.buttonWrapper}>
                <div className={style.button}>About Us</div>
                <div className={style.button}>Contact Us</div>
                <div className={style.button}>Privacy Policy</div>
            </div>
        </footer>
    );
}