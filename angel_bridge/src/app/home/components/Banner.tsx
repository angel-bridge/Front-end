import Image from 'next/image';
import BannerImage from '@/app/home/assets/BannerImage.png';

import * as style from '@/app/home/styles/Banner.css';

export default function Banner() {
    return (
        <div className={style.banner}>
            <Image src={BannerImage} alt="BannerImage"/>
        </div>
    );
}