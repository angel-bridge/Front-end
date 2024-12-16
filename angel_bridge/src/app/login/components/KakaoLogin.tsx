"use client";

import Image from 'next/image';

export default function KakaoLogin() {
    return (
        <a href="http://3.39.14.152/oauth2/authorization/kakao" target="_self">
            <Image 
                src='/assets/kakao_login.png'
                alt='카카오 로그인 버튼'
                width={300}
                height={300}
            />
        </a>
    );
}
