"use client"

import Image from 'next/image';
import { signIn } from 'next-auth/react';

export default function KakaoLogin() {

    return (
        <div onClick={() => signIn("kakao", { callbackUrl: '/'})}>
            <Image 
                src='/assets/kakao_login.png'
                alt='카카오 로그인 버튼'
                width={300}
                height={300}
            />
        </div>
    )
}