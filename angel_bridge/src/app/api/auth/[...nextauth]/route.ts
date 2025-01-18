import NextAuth from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'

const handler = NextAuth(
    {
        providers: [
            KakaoProvider({
                clientId: process.env.KAKAO_CLIENT_ID!,
                clientSecret: process.env.CLIENT_SECRET!,
            }),
        ],
        callbacks: {
            signIn: async ({ user, account }) => {
                console.log("user:", user);
                console.log("account:", account);
                return true;
            }
        },
        //secret: process.env.NEXTAUTH_SECRET,
    }
);
export { handler as GET, handler as POST}