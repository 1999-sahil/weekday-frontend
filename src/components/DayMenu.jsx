import { FaEllipsisVertical } from "react-icons/fa6"
import { HiMiniCalendarDays } from "react-icons/hi2"

function DayMenu() {
    return (
        <div className="flex items-center justify-between">
            <div className="rounded-full bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 w-fit h-auto p-[1px]">
                <div className="w-full h-full px-5 py-1 flex gap-1 items-center justify-center bg-white rounded-full">
                    <HiMiniCalendarDays />
                    <span className="text-xs font-dmsans font-medium">Posted 5 days ago</span>
                </div>
            </div>  
            <div className="bg-gray-50 hover:bg-gray-200 cursor-pointer p-2 rounded-full">
                <FaEllipsisVertical className="w-5 h-5 text-[#333]" />
            </div>  
        </div>
    )
}

export default DayMenu
