import { TPost } from "@/components/InputBox"
import axiosInstance from "@/lib/apiClient"

export class PostApi {
  prefix: string

  constructor() {
    this.prefix = "/posts"
  }

  async postData(data: TPost) {
    try {
      const response = await axiosInstance.post(this.prefix, data)
      console.log("Response:", response.data)

      return response.data
    } catch (error) {
      console.error("Error posting data:", error)
      throw new Error(error)
    }
  }
}
