import api from '../config/api'
import axios from 'axios'

export function getImages() {
  const { url } = api
  const baseUrl = `${url}/latest.json`

  return function(dispatch) {
    axios.get(baseUrl)
    .then(({ data }) => {
      return dispatch({
        type: 'SET_IMAGES',
        payload: data
      })
    })
    .catch(err => console.log(err))
  }
}
