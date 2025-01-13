import { useMutation } from '@tanstack/react-query'
import { postCancelPayments } from '../utils/postCancelPayment'

type CancelPaymentInput = {
  educationId: number
  cancelReason: string
}

export default function usePostCancelPayments() {
  const { mutate } = useMutation({
    mutationKey: ['postCancelPayment'],
    mutationFn: ({ educationId, cancelReason }: CancelPaymentInput) =>
      postCancelPayments(educationId, cancelReason),
    onSuccess: () => {
      console.log('success!')
    },
    onError: () => {
      console.log('error')
    },
  })
  return { mutate }
}
