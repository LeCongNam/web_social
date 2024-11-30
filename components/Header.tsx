import Image from "next/image"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

function Header() {
  return (
    <div>
      <h1 className="text-6xl">Header</h1>

      {/*    left   */}
      <div>
        <Image
          src="https://links.papareact.com/5me"
          alt="logo.svg"
          width={40}
          height={40}
          layout="fixed"
        />

        <div className="flex ml-2 items-center rounded-full">
          <MagnifyingGlassIcon className="h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/*    center  */}

      {/*    right   */}
    </div>
  )
}

export default Header
