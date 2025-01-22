import { useMutation } from '@tanstack/react-query'
import { putMember, PutMemberData } from '../utils/putMember'

export default function usePutMember() {
  const { mutate } = useMutation({
    mutationKey: ['putMemberInfo'],
    mutationFn: ({
      updatedData,
      newImage,
    }: {
      updatedData: PutMemberData
      newImage: string | null
    }) => putMember(updatedData, newImage),
  })
  return { mutate }
}
