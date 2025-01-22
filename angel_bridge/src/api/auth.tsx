'use client'

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

async function fetchAccessToken(refreshToken: string) {
    const response = await axios.post("https://api.angelbridge.site/api/v1/auth/refresh", {
        refreshToken,
    });
    return response.data.accessToken;
}

export function useAccessTokenMutation() {
    return useMutation({
        mutationFn: (refreshToken: string) => fetchAccessToken(refreshToken),
        onSuccess: (newAccessToken) => {
            // Access 토큰 저장
            localStorage.setItem("accessToken", newAccessToken);
            console.log("Access token 저장 성공~~", newAccessToken);
        },
        onError: (error) => {
            console.error("access token 저장 실패ㅠㅠ", error);
            // 에러 처리 로직 넣기
        },
    });
}
