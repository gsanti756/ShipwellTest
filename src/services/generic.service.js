import axios from 'axios'

const API = 'https://dev-api.shipwell.com:443/v2/'
axios.defaults.headers.common['Content-Type'] = 'application/json'

export const post = async (url, body) => {
  try {
    return await axios.post(`${API}${url}`, body)
  } catch (err) {
    throw err
  }
}
