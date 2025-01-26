import { authInstance } from '@/api/authInstance';

export const postLogout = async () => {
    try {
        const { data } = await authInstance.post('/logout');
        console.log('Logout Response:', data);
        return data;
    } catch (error) {
        console.error('Logout Error:', error);
        throw error;
    }
};
