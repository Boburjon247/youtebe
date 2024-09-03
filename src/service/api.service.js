import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '3049f09d19msh4254c15e16fe3bfp190b3ejsn3db8dda58e2d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
  };


export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    }
}