import { instance } from '@/api/instance'
import { ProgramContentType } from '@/program/types/dataType'

interface TakenProgramType {
    timestamp: string
    code: number
    message: string
    result?: ProgramContentType
}

export const getTakenPrograms = async ({ page = 1 }) => {
    const response: TakenProgramType = await instance.get(`/api/v1/enrollment/completed`, {
        params: { page },
    })
    return response.result
}
