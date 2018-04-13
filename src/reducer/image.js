const initialState = {
  processing: [],
  page: 1,
  loading: false,
  init: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_IMAGES':
      return {
        ...state,
        processing: state.processing.concat(action.payload.result),
        page: action.payload.page
      }
    case 'SET_LOADING':
      return {...state, loading: action.payload}
    case 'SET_INIT':
      return {...state, init: true}
    default:
      return state
  }
}
