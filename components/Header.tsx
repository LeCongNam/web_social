"use client"

import HeaderIcon from "@/components/HeaderIcon"
import {
  BellAlertIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChevronDownIcon,
  FlagIcon,
  HomeIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { Fragment } from "react"
import { GridIcon } from "./GridIcon"

function Header() {
  const { data: session, status } = useSession()

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/*    left   */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          alt="logo.svg"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink-0"
          />
        </div>
      </div>

      {/*    center  */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon
            active
            Icon={HomeIcon}
          />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/*    right   */}

      <div className="flex items-center sm:space-x-2 justify-end">
        {status !== "loading" ? (
          <Image
            onClick={() => signOut()}
            className="rounded-full cursor-pointer"
            src={session?.user.image ?? ""}
            width="40"
            height="40"
            layout="fixed"
            alt={"avt.png"}
          />
        ) : (
          <Fragment />
        )}
        {status !== "loading" ? (
          <p className="whitespace-nowrap font-semibold pr-3">{session?.user?.name}</p>
        ) : (
          <Fragment />
        )}

        <GridIcon className="icon" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellAlertIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  )
}

export default Header
