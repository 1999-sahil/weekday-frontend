import { FaRegSmileWink } from "react-icons/fa";
import JobCard from "./JobCard";

function JobComponent({ data }) {
    console.log("jd data", data);
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-full lg:w-fit h-auto bg-[#baf7b8ea] rounded-3xl mb-4 px-8 py-6 lg:px-4 lg:py-2 drop-shadow-lg shadow-md">
                <h2 className="text-base lg:text-sm font-dmsans font-medium text-[#333]">
                    We, at Weekday, are creating a go-to hub for uncovering 
                    the real issues candidates should be aware of before joining
                    a company.
                    <strong className="underline decoration-blue-500 underline-offset-2"> Access 150+ company reviews here</strong>
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 mb-5 font-bold text-xl font-candal text-[#333]">
                <h2 className="text-2xl">Find you best job.</h2>
                <h2 className="flex gap-2 items-center">Happy Applying <FaRegSmileWink className="w-8 h-8 text-orange-500" /></h2>
            </div>
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