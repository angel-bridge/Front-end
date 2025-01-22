'use client'

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

async function fetchAccessToken() {
    const response = await axios.post("https://api.angelbridge.site/api/v1/auth/reissue", {
    });
    return response.data.accessToken;
}

export function useAccessTokenMutation() {
    return useMutation({
        mutationFn: () => fetchAccessToken(),
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
