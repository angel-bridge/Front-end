import { instance } from "./instance";

export interface BlogResult {
    title: string;
    content: string;
    postingDate: string;
    link: string;
}

interface FetchBlogResponse {
    timestamp: string;
    code: number;
    message: string;
    result: BlogResult[];
}

export const getBlogArticles = async () => {
    const response: FetchBlogResponse = await instance.get(`/api/v1/blog/latest`);
    // console.log('블로그 아티클 가져옴!!', response);
    return response.result;
};