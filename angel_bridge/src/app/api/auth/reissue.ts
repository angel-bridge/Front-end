import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(400).json({ message: "Refresh token 필요" });
    }

    try {
        const response = await fetch("http://3.39.14.152/api/auth/reissue", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken }),
        });

        if (!response.ok) {
            return res.status(response.status).json({ message: "토큰 재발급 실패" });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error: any) {
        res.status(500).json({ message: "서버 에러", error: error.message });
    }
}
