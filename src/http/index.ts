import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

axios.interceptors.request.use(
    configurable => {
        if(configurable.url != '/api/user/login') {
            configurable.headers = {
                ...configurable.headers,
                'token': localStorage.getItem('token')
            }
        }
        return configurable
    }
)

axios.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return error
    }
)

export default axios
