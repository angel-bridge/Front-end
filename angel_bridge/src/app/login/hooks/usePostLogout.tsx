'use client'

import { useMutation } from '@tanstack/react-query';
import { postLogout } from '../utils/postLogout';

export default function usePostLogout() {
    return useMutation({
        mutationKey: ['postLogout'],
        mutationFn: () => postLogout(),
    })
}