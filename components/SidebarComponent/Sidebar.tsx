"use client"

import { CalendarIcon, ChevronDownIcon, ClockIcon, ComputerDesktopIcon, UserIcon } from "@heroicons/react/20/solid"
import { ShoppingBagIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import { useSession } from "next-auth/react"
import SidebarRow from "./SidebarRow"

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow
        src={session?.user.image}
        title={session?.user.name}
      />
      <SidebarRow
        Icon={UserIcon}
        title="Friends"
      />
      <SidebarRow
        Icon={UserGroupIcon}
        title="Groups"
      />
      <SidebarRow
        Icon={ShoppingBagIcon}
        title="Marketplace"
      />

      <SidebarRow
        Icon={ComputerDesktopIcon}
        title="Marketplace"
      />
      <SidebarRow
        Icon={CalendarIcon}
        title="Events"
      />
      <SidebarRow
        Icon={ClockIcon}
        title="Memories"
      />
      <SidebarRow
        Icon={ChevronDownIcon}
        title="See More"
      />
    </div>
  )
}

export default Sidebar
