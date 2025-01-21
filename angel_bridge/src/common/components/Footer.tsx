import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/app/home/assets/Logo_grey.svg';
import Instagram from '@/common/assets/instagram_button.svg'
import Mail from '@/common/assets/mail_button.svg'
import Notion from '@/common/assets/notion_button.svg'
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
                <Link href = 'https://www.instagram.com/angel_bridge.kr/' target='_blank' className={style.button}>
                    <Image src={Instagram} alt="InstagramButton"/> 
                </Link>
                <Link href='mailto:example@example.com' className={style.button}>
                    <Image src={Mail} alt="MailButton" />
                </Link>
                <Link href='https://angelbridge.notion.site/Privacy-Policy-18259bdbf30a803bb683d5d7eb22926b?pvs=4' target='_blank' className={style.button}>
                    <Image src={Notion} alt="NotionButton" />
                </Link>
            </div>
        </footer>
    );
}