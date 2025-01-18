import { instance } from '@/api/instance'
import { ContentType } from '@/program/types/dataType'

interface AllProgramType {
  timestamp: string
  code: number
  message: string
  result: ContentType
}

export const getSearch = async ({ keyword = '', page = 1, status = '' }) => {
  const response: AllProgramType = await instance.get(
    `/api/v1/education/search`,
    {
      params: {
        keyword,
        page,
        status,
      },
    },
  )
  return response.result
}
