import { useState, useEffect } from "react";
import JobComponent from "./components/JobComponent";
import CompanyCards from "./CompanyCards";
import Header from "./components/Header";
import Introduction from "./components/Introduction";

const App = () => {

  const [jobs, setJobs] = useState([]); // State for fetching data from api
  const [offset, setOffset] = useState(0);  // State of fetching data from api for next request
  const [records, setRecords] = useState([]); // State for filtering data from api
  const [selectedLocation, setSelectedLocation] = useState(""); // State for selected location
  const [selectedRole, setSelectedRole] = useState(""); // State for selected role
  const [locations, setLocations] = useState([]); // State for locations
  const [roles, setRoles] = useState([]); // State for roles
  const [noDataMessage, setNoDataMessage] = useState(""); // State for no data/jobs message

  const fetchData = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        limit: 9,
        offset: offset,
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
      setJobs((prevJobs) => [...prevJobs, ...data.jdList]);
      setOffset((prevOffset) => prevOffset + 8);
      
      // Extract locations and roles from fetched data
      const uniqueLocations = Array.from(new Set(data.jdList.map(job => job.location)));
      const uniqueRoles = Array.from(new Set(data.jdList.map(job => job.jobRole)));

      setLocations(uniqueLocations);
      setRoles(uniqueRoles);

    } catch (error) {
      console.error("Error fetching job listings:", error);
    }
  };

  // get more data after scroll hit the bottom
  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);  // cleanup
  }, [jobs]);

  useEffect(() => {
    // Filter records based on selected location and role when jobs change
    const filteredData = jobs.filter(job =>
      (!selectedLocation || job.location.toLowerCase() === selectedLocation.toLowerCase()) &&
      (!selectedRole || job.jobRole.toLowerCase() === selectedRole.toLowerCase())
    );
    setRecords(filteredData);
    
    // Check if filtered data is empty and set no data message accordingly
    if (filteredData.length === 0) {
      setNoDataMessage("sorry: no jobs found.");
    } else {
      setNoDataMessage("");
    }
  }, [jobs, selectedLocation, selectedRole]);


  return (
    <div className="">
      <Header />
      <div className="mx-5">
        <CompanyCards />

        <Introduction />

        {/** FIlter Section */}
        <div className="my-8 lg:mx-10 flex gap-4 flex-row md:gap-2">
          <div className="w-1/2">
            <h2 className="font-bold font-dmsans text-[#757575] text-sm">Location</h2>
            {/* Dropdown for location */}
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full border rounded-md px-5 py-4 capitalize font-dmsans text-sm font-semibold text-[#333]"
            >
              <option value="" className="capitalize text-xs font-semibold font-ubuntu text-[#757575]">Select location...</option>
              {locations.map((location, index) => (
                <option key={index} value={location} className="capitalize text-sm font-dmsans text-[#757575]">{location}</option>
              ))}
            </select>
          </div>

          <div className="w-1/2">
            <h2 className="font-bold font-dmsans text-[#757575] text-sm">Role</h2>
            {/* Dropdown for role */}
            <select 
              value={selectedRole} 
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full border rounded-md px-3 py-4 capitalize font-dmsans text-sm font-semibold text-[#333]"
            >
              <option value="" className="capitalize text-xs font-semibold font-ubuntu text-[#757575]">Select role...</option>
              {roles.map((role, index) => (
                <option key={index} value={role} className="capitalize text-sm font-dmsans text-[#757575]">{role}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Display message when no data found */}
        {noDataMessage && <div 
            className="flex flex-col md:flex-row items-center lg:gap-4 justify-center mb-20"
          >
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="#ff0000" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 9V13" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17.0195V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="font-bold text-lg lg:text-xl font-ubuntu">{noDataMessage}</p>
          </div>
        }
        
        {/* Display job component only when data is found */}
        {!noDataMessage && <JobComponent data={records} />}
      </div>
    </div>
  );
};

export default App;
