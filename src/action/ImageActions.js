import api from '../config/api'
import axios from 'axios'

export function getImages(page) {
  const { url } = api
  const baseUrl = `${url}/latest.json?page=${page || 1}`
  return function(dispatch) {
    dispatch({type: 'SET_LOADING', payload: true})
    axios.get(baseUrl)
    .then(({ data }) => {
      dispatch({type: 'SET_LOADING', payload: false})
      return dispatch({
        type: 'SET_IMAGES',
        payload: data
      })
    })
    .catch(err => console.log(err))
  }
}
