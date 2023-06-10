import axios from 'axios'

export const getAllJobs = async()=>{
        // const response = await axios.get('https://sourcestack-api.com/jobs?name=frontend&exact=false', {
        //     headers: {'x-api-key': 'SECRET_KEY HERE',
        //             'Content-Type': 'application/json'},
        //   })
        const response = await axios.get('https://shesharpnl.github.io/hackathon-2023.sourcestack-data/assets/sourcestack-data-global.json')
        return response.data.data
}
