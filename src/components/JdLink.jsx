import { FaLink } from "react-icons/fa"

function JdLink({ link }) {
  return (
    <div>
        <a href='' className="flex gap-2 items-center underline font-ubuntu text-xs font-medium hover:text-blue-700">
        <FaLink className="hover:text-none" />
        {link}
      </a>
    </div>
  )
}

export default JdLink