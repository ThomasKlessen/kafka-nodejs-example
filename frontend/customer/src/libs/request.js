import axios from 'axios'

const requestHandler = config => {
    config.crossDomain = true;
    config.method = config.method || 'POST';
    return config
};

const responseHandler = response => {
    return response.data
}

const request = axios.create()
request.interceptors.request.use(requestHandler)
request.interceptors.response.use(responseHandler)

export default request
