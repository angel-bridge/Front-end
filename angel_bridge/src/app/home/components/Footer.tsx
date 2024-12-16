import Image from 'next/image';
import Logo from '@/app/home/assets/Logo_grey.svg';

import * as style from '@/app/home/styles/Footer.css';

export default function Footer() {
    return (
        <div className={style.footer}>
            <Image src={Logo} alt="Logo"/>
            <div className={style.buttonWrapper}>
                <div className={style.button}>About Us</div>
                <div className={style.button}>Contact Us</div>
                <div className={style.button}>Privacy Policy</div>
            </div>
        </div>
    );
}