import { instance } from '@/api/instance'

interface AllProgramInterface {}

export const getAllPrograms = async () => {
  const response: AllProgramInterface = await instance.get(`/api/v1/education`)
  return response
}
