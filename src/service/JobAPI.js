import axios from 'axios'

export const getAllJobs = async()=>{
        const response = await axios.get('https://sourcestack-api.com/jobs?name=frontend&exact=false', {
            headers: {'x-api-key': 'SECRET_KEY HERE',
                    'Content-Type': 'application/json'},
          })
        return response.data.data
}
