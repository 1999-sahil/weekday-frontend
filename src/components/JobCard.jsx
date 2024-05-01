import { AiTwotoneThunderbolt } from "react-icons/ai"
import { FaLink, FaRegHeart } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import { HiOutlineBriefcase } from "react-icons/hi"
import { HiMiniCalendarDays } from "react-icons/hi2"
import { FaEllipsisVertical } from "react-icons/fa6"
import { BiSolidUserDetail } from "react-icons/bi"
import Buttons from "./Buttons"
import DayMenu from "./DayMenu"
import TitleSave from "./TitleSave"
import ModeExperience from "./ModeExperience"
import JobDescription from "./JobDescription"
import Location from "./Location"
import JdLink from "./JdLink"

function JobCard({ data }) {
  console.log(data.jobRole);
  return (
    <div className="w-full h-fit m-auto border drop-shadow-lg shadow-md py-8 px-6 mb-10 rounded-[12px] hover:border-[#959595]">
      <div className="flex flex-col gap-4">
        <DayMenu />
        <TitleSave title={data.jobRole} />
        <ModeExperience />
        <JobDescription 
          desc={data.jobDetailsFromCompany} 
          title={data.jobRole} 
          location={data.location}
          link={data.jdLink} 
        />
        <Location location={data.location} />
        <JdLink link={data.jdLink} />
        <Buttons />
      </div>
    </div>
  )
}

export default JobCard