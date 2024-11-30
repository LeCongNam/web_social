"use client"
import { postApi } from "@/apis"
import { CameraIcon, FaceSmileIcon, VideoCameraIcon } from "@heroicons/react/20/solid"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useForm } from "react-hook-form"

export type TPost = {
  contents: string
  email: string
  name: string
  image: string
  imagePost?: string[]
}

function InputBox() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TPost>()
  const { data: session } = useSession()

  const imagePost = watch("imagePost")

  console.log(imagePost)

  const sendPost = async (data: TPost) => {
    try {
      const { imagePost, ...rest } = data
      const response = await postApi.postData(rest)

      if (imagePost) {
        console.log(imagePost)
      }

      reset()
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4  p-4 items-center">
        <Image
          className="rounded-full"
          src={session?.user.image ?? ""}
          alt={session?.user.image ?? "image.png"}
          width={40}
          height={40}
          layout="fixed"
        />
        <form
          className="flex flex-1"
          onSubmit={handleSubmit(sendPost)}
        >
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session?.user.name}?`}
            {...register("contents")}
          />
          <button
            hidden
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div className="inputIcon">
          <CameraIcon className="h-7 text-green-400 " />
          <label
            className="text-xs sm:text-sm xl:text-base cursor-pointer"
            htmlFor="imagePost"
          >
            Photo/Video
          </label>
          <input
            type="file"
            id="imagePost"
            className="hidden"
            {...register("imagePost")}
          />
        </div>

        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
