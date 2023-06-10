import axios from 'axios'

export const getAllJobs = async()=>{
        const response = await axios.get('https://sourcestack-api.com/jobs?name=frontend&exact=false', {
            headers: {'x-api-key': '',
                    'Content-Type': 'application/json'},
          })
        return response.data.data
}

