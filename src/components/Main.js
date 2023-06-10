import { useEffect, useState } from "react";
import { getAllJobs } from "../service/JobAPI";
import Job from './Job';


const Main = () => {
    const [jobs, setJobs] = useState([]);
  
    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const jobsData = await getAllJobs();
          setJobs(jobsData);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchJobs();
    }, []);

    const intern = localStorage.getItem('intern')
    const filteredJobs = intern === "true" ? jobs.filter((job) => job.seniority === "intern") : jobs;

    return (
        <div className="jobs">
        {filteredJobs && filteredJobs.map((job) => (
                 <Job key={job.job_name} {...job} />))} 
       </div>
    )
}

export default Main;