import { FaLocationDot } from "react-icons/fa6"

function Location({ location }) {
  return (
    <div>
      <p className="font-semibold text-black font-dmsans text-sm capitalize flex gap-1 items-center border border-blue-500 bg-blue-200 w-fit rounded-full px-5 py-1">
        <FaLocationDot className="text-green-600" />
        {location}
      </p>
    </div>
  )
}

export default Location