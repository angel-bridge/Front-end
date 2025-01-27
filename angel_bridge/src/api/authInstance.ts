import axios from 'axios'

export const authInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

authInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  },
)

authInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('API 에러:', error.message)
    return Promise.reject(error)
  },
) 
