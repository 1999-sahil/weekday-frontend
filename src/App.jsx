import { useState, useEffect } from 'react';
import JobComponent from './components/JobComponent';
import CompanyCards from './CompanyCards';
import Header from './components/Header';

const App = () => {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          "limit": 10,
          "offset": 0
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log("API Response:", data);
        setJobs(data.jdList); // Assuming jdList contains the array of job listings
      } catch (error) {
        console.error('Error fetching job listings:', error);
        // Handle error appropriately
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  console.log("Jobs:", jobs); // Log jobs to inspect its structure

  return (
    <div className=''>
      
      {/** header */}
      <Header />
    
      {/** job details section */}
      <div className='mx-10 py-10 flex flex-col gap-5'>
        <CompanyCards />
        <JobComponent data={jobs} />
      </div>
      
    </div>
  );
};

export default App;
