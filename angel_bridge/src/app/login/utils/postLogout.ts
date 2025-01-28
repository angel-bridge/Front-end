import { authInstance } from '@/api/authInstance';

export const postLogout = async () => {
    try {
        const { data } = await authInstance.post(
            '/logout', 
            {},
            { withCredentials: true });
        console.log('Logout Response:', data);
        localStorage.removeItem('accessToken');
        window.location.reload();
        return data;
    } catch (error) {
        console.error('Logout Error:', error);
        throw error;
    }
};
