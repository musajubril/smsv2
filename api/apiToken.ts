/* eslint-disable no-param-reassign */
import axios from 'axios'

const apiToken = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL
})

apiToken.interceptors.request.use(
  (config) => {
    const easysch_token = localStorage.getItem('easysch_token')
    if (easysch_token) {
      config.headers.Authorization = `Bearer ${easysch_token}`
    }

    return config
  },
  (error) => Promise.reject(error)
)
export const apiMultiPartToken = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL
})

apiMultiPartToken.interceptors.request.use(
  (config) => {
    const easysch_token = localStorage.getItem('easysch_token')
    if (easysch_token) {
      config.headers.Authorization = `Bearer ${easysch_token}`
      config.headers['Content-Type'] = "multipart/form-data"
    }

    return config
  },
  (error) => Promise.reject(error)
)

export default apiToken
