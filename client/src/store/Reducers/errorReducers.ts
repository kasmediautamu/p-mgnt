import { ERROR } from '../../models/error'
import { ActionTypes } from '../actions/types'
const initialState = {
  msg: {},
  status: null,
  id:null
}
/**
 * GET_ERRORS: 'GET_ERRORS',
   CLEAR_ERRORS: 'CLEAR_ERRORS'
 */
export interface GET_ERRORS {
  readonly type: 'GET_ERROR'
  payload: ERROR[]
}

export interface CLEAR_ERRORS {
  readonly type: 'CLEAR_ERRORS'
  payload: ERROR
}

export const getErrorReducer = (state = initialState, action: GET_ERRORS) => {
  switch (action.type) {
    case ActionTypes.GET_ERRORS:
      return { ...state, errors: action.payload }

    default:
      return state
  }
}

export const clearErrorReducer = (state = initialState, action: CLEAR_ERRORS) => {
    switch (action.type) {
      case ActionTypes.CLEAR_ERRORS:
        return { initialState }
  
      default:
        return state
    }
  }

