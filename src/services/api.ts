import axios from 'axios'

const api = axios.create({
  baseURL: 'http://guiaproff.herokuapp.com',
  headers: {
    'Content-Type': ' application/json',
  }
})

export default api