import { instance } from '@/api/instance'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface DetailType {
  title: string
  description: string
  educationStartDate: string
  educationEndDate: string
  recruitmentStartDate: string
  recruitmentEndDate: string
  price: string
  preFile: string | StaticImport
  detailFile: string
}

interface AllProgramType {
  timestamp: string
  code: number
  message: string
  result: DetailType
}

export const getDetailProgram = async ({
  educationId,
}: {
  educationId: string | number
}) => {
  const response: AllProgramType = await instance.get(
    `/api/v1/education/${educationId}`,
  )
  return response.result
}
