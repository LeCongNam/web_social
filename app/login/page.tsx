"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

function LoginPage() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
        alt={"logo.svg"}
      />

      <h1
        className="p-5 bg-blue-500 rounded-full  text-white hover:bg-white hover:text-blue-500  hover:border-blue-500 hover:border text-center cursor-pointer"
        onClick={() => signIn("facebook")}
      >
        Login with Facebook
      </h1>
    </div>
  )
}

export default LoginPage
