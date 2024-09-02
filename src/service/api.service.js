import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '9d2db3be49msh4447f2a7c652f52p1dfb94jsnc36cce56a822',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
  };


export const ApiService = {
    async fetching(url){
        const response = await axios.get(`${BASE_URL}/${url}`, options)
        return response.data
    }
}