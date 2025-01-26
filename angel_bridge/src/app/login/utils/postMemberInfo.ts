import { authInstance } from '@/api/authInstance';
import { Member } from '@/mypage/api/utils/getMember';

export interface MemberInfo {
    email: string;
    phoneNumber: string;
    isSelect: boolean;
}

interface PostMemberResponse {
    timestamp: string;
    code: number;
    message: string;
    result?: Member;
}

export const postMemberInfo = async (memberInfo: MemberInfo) => {
    const response: PostMemberResponse = await authInstance.post(
        '/api/v1/auth/signup',
        memberInfo
    );
    return response;
};
