import { AiTwotoneThunderbolt } from "react-icons/ai"
import { BiSolidUserDetail } from "react-icons/bi"

function Buttons() {
  return (
    <div>
        <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 justify-center border rounded-lg py-3 font-semibold font-dmsans bg-emerald-400 hover:bg-emerald-500">
          <AiTwotoneThunderbolt className="w-6 h-6 text-orange-500" />
          Easy Apply
        </button>
        <button className="flex items-center gap-2 justify-center border border-gray-300 rounded-lg py-3 font-semibold font-dmsans text-white bg-gradient-to-r from-purple-700 to-blue-700 hover:opacity-90">
          <BiSolidUserDetail className="w-6 h-6 text-pink-600" />
          Job Details
        </button>
      </div>
    </div>
  )
}

export default Buttons