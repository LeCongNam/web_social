import clsx from "clsx"

function HeaderIcon({ Icon, active = false }) {
  return (
    <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500 group">
      <Icon
        className={clsx("h-5 text-gray-500 group-hover:text-blue-500 text-center sm:h-7 mx-auto", {
          "text-blue-500": active,
        })}
      />
    </div>
  )
}

export default HeaderIcon
