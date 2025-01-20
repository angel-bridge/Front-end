import { instance } from '@/api/instance'

interface ImageFileType {
  imageFile: string
}

interface BannerType {
  timestamp: string
  code: number
  message: string
  result?: ImageFileType
}

export const getBanner = async () => {
  const response: BannerType = await instance.get(`/api/v1/banner/education`)
  return response?.result
}
