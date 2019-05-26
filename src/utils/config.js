import axios from 'axios'

axios.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json'
    return config
})
axios.defaults.timeout = 1000
axios.defaults.baseURL = 'http://localhost:3000'