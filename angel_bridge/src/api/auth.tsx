'use client'

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

async function fetchAccessToken(refreshToken: string) {
    const response = await axios.post("https://api.angelbridge.site/api/v1/auth/reissue", {
        refreshToken,
    }, {
        withCredentials: true,
    });
    return response.data.accessToken;
}

async function fetchRefreshToken() {
    const response = await axios.get("https://api.angelbridge.site/api/v1/auth/checkToken", {
        withCredentials: true,
    });
    console.log("리프레시 토큰 API로 받아온거:", response);
    return response.data.result;
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

export function useRefreshTokenMutation() {
    return useMutation({
        mutationFn: () => fetchRefreshToken(),
        onSuccess: (refreshToken) => {
            console.log("리프레시 토큰 확인 성공:", refreshToken);
        },
        onError: (error) => {
            console.error("리프레시 토큰 확인 실패:", error);
        },
    });
}
