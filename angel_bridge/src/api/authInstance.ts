import axios from 'axios'

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

authInstance.interceptors.request.use((config) => {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN
  //   const accessToken = Cookies.get('accessToken')
  console.log('Authorization Header:', accessToken)
  if (accessToken) {
    config.headers['Authorization'] = accessToken
  }
  authInstance.interceptors.response.use(
    (response) => response.data,
    async (error) => {
      console.error('API 에러:', error.message)
      return Promise.reject(error)
    },
  )
  return config
})
