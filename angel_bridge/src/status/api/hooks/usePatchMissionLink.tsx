'use client'
import { useMutation } from '@tanstack/react-query'
import { patchMission } from '../utils/patchMission'

export default function usePatchMissionLink() {
  const { mutate } = useMutation({
    mutationKey: ['patchMission'],
    mutationFn: ({
      educationId,
      assignmentId,
      submissionLink,
    }: {
      educationId: string
      assignmentId: number
      submissionLink: string
    }) => patchMission(educationId, assignmentId, submissionLink),
    onSuccess: () => {
      console.log('success!')
      alert('제출이 완료되었습니다')
    },
    onError: () => {
      console.log('error')
    },
  })
  return { mutate }
}
