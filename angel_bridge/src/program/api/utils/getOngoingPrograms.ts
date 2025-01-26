import { instance } from '@/api/authInstance'
import { ContentType } from '@/program/types/dataType'

interface AllProgramType {
  timestamp: string
  code: number
  message: string
  result: ContentType
}

export const getOngoingProgram = async () => {
  const response: AllProgramType = await instance.get(
    `/api/v1/education/ongoing`,
  )
  return response.result
}
