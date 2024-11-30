import Image from "next/image"

interface ISidebarRow {
  src?: string
  Icon?: any
  title: string | undefined
}

function SidebarRow({ src, Icon, title }: ISidebarRow) {
  return (
    <div className="flex items-center space-x-2 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
          layout="fixed"
          alt="Icon-sidebar.png"
        />
      )}

      {Icon && <Icon className="h-8 w-8 text-blue-500 " />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  )
}

export default SidebarRow
