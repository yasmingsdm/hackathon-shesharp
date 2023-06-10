import { getAllJobs } from "../service/JobAPI";
import Job from './Job';


const Main = async()=>{
    const jobs = await getAllJobs()
    console.log(jobs)
    

    return (
        <div className="books">
        {jobs && jobs.map((job) => (
                 <Job key={job._id} {...job} />))} 
       </div>
    )
}

export default Main;