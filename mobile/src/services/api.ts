import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.31.171.223:3333'
})
