import { AppActionTypes } from '../actions/AppActions'
import { createStore } from 'redux'

const INITIAL_STATE = {
  isSearchEnabled: false
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.IS_SEARCH_ENABLED:
      return { ...state, isSearchEnabled: action.data }
    default:
      return state
  }
}

const store = createStore(appReducer);

export default store;


