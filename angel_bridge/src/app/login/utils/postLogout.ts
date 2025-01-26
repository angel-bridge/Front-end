import { authInstance } from '@/api/authInstance';
import { Member } from '@/mypage/api/utils/getMember';

interface PostLogoutResponse {
    timestamp: string;
    code: number;
    message: string;
    result?: Member;
}

export const postLogout = async () => {
    const response: PostLogoutResponse = await authInstance.post(
        '/logout',
    );
    return response;
};
