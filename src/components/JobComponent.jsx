import { FaRegSmileWink } from "react-icons/fa";
import JobCard from "./JobCard";

function JobComponent({ data }) {
    //console.log("jd data", data);
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            
            <ul className="flex flex-wrap m-auto justify-between lg:mx-10">
                {data.map((job, index) => (
                    <li key={index} className="w-full md:w-[48%] lg:w-[33%] xl:w-[32%]">
                        <JobCard key={index} data={job} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default JobComponent