import axios from 'axios'

export const getAllJobs = async()=>{
    
        await axios.get('https://sourcestack-api.com/jobs', {
            headers: {'x-api-key': '',
                        'Content-Type': 'application/json'}
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
}

