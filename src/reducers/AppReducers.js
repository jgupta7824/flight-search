import { AppActionTypes } from '../actions/AppActions'
import { createStore } from 'redux'

const INITIAL_STATE = {
  isSearchEnabled: false,
  formData: {}
}

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActionTypes.IS_SEARCH_ENABLED:
      return { ...state, isSearchEnabled: action.data }
    case AppActionTypes.UPDATE_FORM_DATE:
      return { ...state, formData: action.data }
    default:
      return state
  }
}

const store = createStore(appReducer);

export default store;


