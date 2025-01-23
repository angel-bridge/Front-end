'use client'

import { useMutation } from '@tanstack/react-query'
import { postSaveAmount } from '../utils/postSaveAmount'

export interface AmountType {
  currency: string
  value: number
}

export default function usePostSaveAmount() {
  const { mutate } = useMutation({
    mutationKey: ['postSaveAmount'],
    mutationFn: ({ orderId, amount }: { orderId: string; amount: number }) =>
      postSaveAmount(orderId, amount),
  })
  return { mutate }
}
