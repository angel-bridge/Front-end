"use client";

import { useEffect } from "react";
import { getCookie } from '@/lib/cookies';

export default function EnvHandler() {
    useEffect(() => {
        const fetchRefreshToken = async () => {
            try {
                // 쿠키에서 refresh 토큰 추출
                const refreshToken = getCookie("next-auth.callback-url");

                if (!refreshToken) {
                    console.error("No cookies found in response.");
                    return;
                }

                console.log("Refresh token:", refreshToken);

                // 토큰 재발급 요청
                const reissueResponse = await fetch("/api/auth/reissue", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ refreshToken }),
                });

                if (reissueResponse.ok) {
                    const data = await reissueResponse.json();
                    console.log("토큰 재발급 성공:", data);
                } else {
                    console.error(
                        "토큰 재발급 실패:",
                        reissueResponse.statusText
                    );
                }
            } catch (error) {
                console.error("Error: ", error);
            }
        };
    
        fetchRefreshToken();
    }, []);
    
    return (null);
}