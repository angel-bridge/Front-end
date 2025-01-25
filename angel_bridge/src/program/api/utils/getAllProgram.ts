import { instance } from '@/api/authInstance'
import { ContentType } from '@/program/types/dataType'

interface AllProgramType {
  timestamp: string
  code: number
  message: string
  result?: ContentType
}

export const getAllPrograms = async ({ page = 1 }) => {
  const response: AllProgramType = await instance.get(`/api/v1/education`, {
    params: { page },
  })
  return response.result
}
