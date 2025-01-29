'use client'

import { useMutation } from '@tanstack/react-query';
import { postMemberInfo, MemberInfo } from '../utils/postMemberInfo';

export default function usePostMemberInfo() {
    return useMutation({
        mutationKey: ['postMemberInfo'],
        mutationFn: (memberInfo: MemberInfo) =>
            postMemberInfo(memberInfo),
    })
}