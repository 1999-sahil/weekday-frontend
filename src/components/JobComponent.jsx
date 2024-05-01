import { FaRegSmileWink } from "react-icons/fa";
import JobCard from "./JobCard";

function JobComponent({ data }) {
    console.log("jd data", data);
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-full h-auto bg-[#baf7b8ea] rounded-3xl px-8 py-3">
                <h2 className="text-base font-dmsans font-medium text-[#333]">
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
            <ul>
                {data.map((job, index) => (
                    <li key={index}>
                        <JobCard key={index} data={job} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default JobComponent