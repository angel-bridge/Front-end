'use client';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

async function fetchAccessToken(refreshToken: string): Promise<string> {
    const response = await axios.post(
        "https://api.angelbridge.site/api/v1/auth/reissue",
        { refreshToken },
        { withCredentials: true }
    );
    const authorizationHeader = response.headers['authorization'];
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
        return authorizationHeader.split(' ')[1];
    }

    throw new Error('Authorization header is missing or malformed');
}

async function fetchRefreshToken(): Promise<string> {
    const response = await axios.get("https://api.angelbridge.site/api/v1/auth/checkToken", {
        withCredentials: true,
    });
    console.log("리프레시 토큰 API로 받아온거:", response);
    return response.data.result;
}

export function useAccessTokenMutation() {
    return useMutation<string, unknown, string>({
        mutationFn: (refreshToken) => fetchAccessToken(refreshToken),
        onSuccess: (newAccessToken) => {
            localStorage.setItem("accessToken", newAccessToken);
            console.log("Access token 저장 성공~~", newAccessToken);
        },
        onError: (error) => {
            console.error("Access token 저장 실패ㅠㅠ", error);
        },
    });
}

export function useRefreshTokenMutation() {
    return useMutation<string, unknown, void>({
        mutationFn: () => fetchRefreshToken(),
        onSuccess: (refreshToken) => {
            console.log("리프레시 토큰 확인 성공:", refreshToken);
        },
        onError: (error) => {
            console.error("리프레시 토큰 확인 실패:", error);
        },
    });
}
