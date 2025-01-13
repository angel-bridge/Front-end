import { useMutation } from '@tanstack/react-query'
import { putMember, PutMemberData } from '../utils/putMember'

export default function usePutMember() {
  const { mutate } = useMutation({
    mutationKey: ['putMemberInfo'],
    mutationFn: ({
      data,
      profileImage,
    }: {
      data: PutMemberData
      profileImage: string | null
    }) => putMember(data, profileImage),
  })
  return { mutate }
}
