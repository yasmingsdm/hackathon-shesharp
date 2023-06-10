const Job = (job)=>{
    return (
        <div className="job">
        <h5>{job.job_name}</h5>
        <p> {job.seniority!== null && 'Seniority:' + job.seniority}</p>
        <p>Remote: {job.remote==='true'? 'yeah': 'no'} | {job.hours}</p>
        <a href= {job.post_url}>Check it here</a>
        </div>
    )
}

export default Job;