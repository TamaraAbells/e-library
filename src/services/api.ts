import axios from 'axios'

axios.interceptors.request.use(
  ((options) => {
    const config = options
    config.headers!.Authorization = `Bearer ${localStorage.getItem('TOURTOH_USER_TOKEN')}`
    config.baseURL = process.env.REACT_APP_BASE_URL;
    return config;
  }),
  ((error) => Promise.reject(error))
);
const API = {
  GET: axios.get,
  POST: axios.post,
  PUT: axios.put,
  DELETE: axios.delete,
  PATCH: axios.patch
}
export default API
