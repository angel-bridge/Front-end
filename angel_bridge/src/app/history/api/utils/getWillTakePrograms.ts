import { instance } from '@/api/instance'
import { ContentType } from '@/program/types/dataType'

interface WillTakeProgramType {
    timestamp: string
    code: number
    message: string
    result?: ContentType
}

export const getWillTakePrograms = async ({ page = 1 }) => {
    const response: WillTakeProgramType = await instance.get(`/api/v1/enrollment/scheduled`, {
        params: { page },
    })
    return response.result
}
