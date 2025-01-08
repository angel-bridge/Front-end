import { instance } from '@/api/instance'
import { DataType } from '@/program/types/dataType'

interface AllProgramType {
  timestamp: string
  code: number
  message: string
  result: DataType[]
}

export const getDetailProgram = async ({
  educationId,
}: {
  educationId: number
}) => {
  const response: AllProgramType = await instance.get(`/api/v1/education/`, {
    params: {
      educationId,
    },
  })
  return response.result
}
