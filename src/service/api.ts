import axios from "axios"

const api = axios.create({
  baseURL: 'https://api-ambisis.onrender.com/'
})

export default api