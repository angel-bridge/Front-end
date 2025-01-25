import { instance } from '@/api/instance'
import { ContentType } from '@/program/types/dataType'

interface TakenProgramType {
    timestamp: string
    code: number
    message: string
    result?: ContentType
}

export const getTakenPrograms = async ({ page = 1 }) => {
    const response: TakenProgramType = await instance.get(`/api/v1/enrollment/completed`, {
        params: { page },
    })
    return response.result
}
