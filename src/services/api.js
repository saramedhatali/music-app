import axios from 'axios'

const consumer = axios.create({
    baseURL: process.env.VUE_APP_API_HOST, // ENV
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
});
consumer.defaults.timeout = 10000;

consumer.interceptors.request.use(
    config => {
        const token = process.env.VUE_APP_API_TOKEN
        if (token) {
            config.headers.common['Authorization'] = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    },
)

consumer.interceptors.response.use(
    response => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    errormsg(error.response)

                    break

                case 401:
                    errormsg(error.response)

                    break
                case 403:
                    errormsg(error.response)

                    break
                case 404:
                    errormsg(error.response)

                    break
                case 502:
                    errormsg(error.response)

            }
            return Promise.reject(error.response)
        }
    },
)
let errormsg=function (err){
    alert(err)

}

export default consumer