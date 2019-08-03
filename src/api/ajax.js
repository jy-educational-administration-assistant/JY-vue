import axios from 'axios'
axios.defaults.withCredentials = true

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    let promise
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&'
    })
    if (dataStr !== '') {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
      url = url + '?' + dataStr
    }
    if (type === 'GET') {
      promise = axios.get(url, {
        headers: {'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'}
      })
    } else if (type === 'POST') {
      promise = axios.post(url)
    }
    promise.then((response) => resolve(response.data), (error) => reject(error))
  })
}
