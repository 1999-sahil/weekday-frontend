import { useState, useEffect } from "react";
import JobComponent from "./components/JobComponent";
import CompanyCards from "./CompanyCards";
import Header from "./components/Header";

const App = () => {

  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0); // Track of offset for scrolling

  const fetchData = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        limit: 9,
        offset: offset, // dynamic offset
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("API Response:", data);

      // Concatenate new jobs with existing jobs
      setJobs((prevJobs) => [...prevJobs, ...data.jdList]);

      // Increment offset for the next request.
      setOffset((prevOffset) => prevOffset + 8);
    } catch (error) {
      console.error("Error fetching job listings:", error);
      // Handle error appropriately
    }
  };

  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [jobs]); // Add event listener when jobs change

  console.log("Jobs:", jobs); // Log jobs to inspect its structure

  return (
    <div className="">
      {/** header */}
      <Header />

      {/** job details section */}
      <div className="mx-5">
        <CompanyCards />
        <JobComponent data={jobs} />
      </div>
    </div>
  );
};

export default App;
