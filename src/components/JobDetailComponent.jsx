import JobCard from "./JobCard"

function JobDetailComponent({ jobData }) {
    console.log(jobData);
  return (
    <div>
        <h2>List of Cards</h2>
        <div>
            {jobInfo.map((val, id) => (
                <JobCard key={id} data={val} />
            ))}
        </div>
    </div>
  )
}

export default JobDetailComponent