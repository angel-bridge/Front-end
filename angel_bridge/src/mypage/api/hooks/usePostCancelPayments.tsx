import { useMutation } from '@tanstack/react-query'
import { postCancelPayments } from '../utils/postCancelPayment'

type CancelPaymentInput = {
  enrollementId: number
  cancelReason: string
}

export default function usePostCancelPayments() {
  const { mutate } = useMutation({
    mutationKey: ['postCancelPayment'],
    mutationFn: ({ enrollementId, cancelReason }: CancelPaymentInput) =>
      postCancelPayments(enrollementId, cancelReason),
    onSuccess: () => {
      console.log('success!')
      alert('결제가 취소되었습니다')
    },
    onError: () => {
      console.log('error')
    },
  })
  return { mutate }
}
