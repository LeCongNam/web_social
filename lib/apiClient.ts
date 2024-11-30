import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // Chỉnh sửa request trước khi gửi đi
    console.log("Request sent at:", new Date())
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    // Xử lý response nếu thành công
    return response
  },
  (error) => {
    // Xử lý lỗi
    console.error("Error response:", error.response)
    return Promise.reject(error)
  },
)

export default axiosInstance
