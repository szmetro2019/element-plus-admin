import axios from 'axios'
const service = axios.create({
  baseURL: '',
  // process.env.VUE_APP_BASE_API,
  //  process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // console.log(response,'response')
    const res = response.data
    // if (res.code !== 20000) {
      // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        // MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //   confirmButtonText: 'Re-Login',
        //   cancelButtonText: 'Cancel',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // })
      // }
      // return Promise.reject(new Error(res.message || 'Error'))
    // } else {
      return res
    // }
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
