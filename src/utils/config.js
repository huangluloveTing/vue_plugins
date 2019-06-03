import axios from 'axios'

axios.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json'
    return config
})
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://admin.ylfood.com/b2cnew-web/version2_0'