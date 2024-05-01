import { FaRegHeart } from "react-icons/fa"
import { HiOutlineBriefcase } from "react-icons/hi"

function TitleSave({ title }) {
  return (
    <div>
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#333]">
          <HiOutlineBriefcase className="h-8 w-8" />
          <h2 className="capitalize font-bold text-2xl font-candal">
            {title}
          </h2>
        </div>
        <div className="pr-2">
          <FaRegHeart className="w-5 h-5 cursor-pointer text-red-600" />
        </div>
      </div>
    </div>
  )
}

export default TitleSave