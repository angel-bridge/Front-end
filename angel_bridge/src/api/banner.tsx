import { instance } from "./instance";

interface Image {
    imageFile: string;
}

interface FetchResponse {
    timestamp: string;
    code: number;
    message: string;
    result: Image[];
}

export const getBanners = async () => {
    const response: FetchResponse = await instance.get(`/api/v1/banner`);
    console.log('배너이미지 가져옴!!', response);
    return response.result;
};