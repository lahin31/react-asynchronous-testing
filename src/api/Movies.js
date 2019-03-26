import axios from 'axios'

export default async () => {
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=en-US')
  return response.data.results
}