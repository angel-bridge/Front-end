'use client'
import { useQuery } from '@tanstack/react-query'
import { loadPaymentWidget } from '@tosspayments/payment-widget-sdk'

export default function usePaymentWidget(
  clientkey: string,
  custmerkey: string,
) {
  return useQuery({
    queryKey: ['payment-widget', clientkey, custmerkey],
    queryFn: () => {
      return loadPaymentWidget(clientkey, custmerkey)
    },
  })
}
