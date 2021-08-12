import { USER } from "../../models/user";
import { ActionTypes } from "../actions/types";
const initialState = {
  token: sessionStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};
/**
 * USER_LOADING: 'USER_LOADING',
    USER_LOADED:'USER_LOADED',
    AUTH_ERROR: 'AUTH_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
    LOGOUT_SUCCESS:'LOGOUT_SUCCESS',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAIL: 'REGISTER_FAIL',
 * 
 * 
 */

export interface USER_LOADING {
  readonly type: "USER_LOADING";
  payload: any;
}

export interface USER_LOADED {
  readonly type: "USER_LOADED";
  payload: USER;
}

export interface LOGIN_SUCCESS {
  readonly type: "LOGIN_SUCCESS";
  payload: USER;
}
export interface REGISTER_SUCCESS {
  readonly type: "REGISTER_SUCCESS";
  payload: USER;
}
export interface REGISTER_FAIL {
  readonly type: "REGISTER_FAIL";
  payload: USER;
}
export interface LOGOUT_SUCCESS {
  readonly type: "LOGOUT_SUCCESS";
  payload: USER;
}
export interface AUTH_ERROR {
  readonly type: "AUTH_ERROR";
  payload: USER;
}
export interface LOGIN_FAIL {
  readonly type: "LOGIN_FAIL";
  payload: USER;
}

export const userLoadingReducer = (
  state = initialState,
  action: USER_LOADING
) => {
  switch (action.type) {
    case ActionTypes.USER_LOADING:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};

export const userLoadedReducer = (
  state = initialState,
  action: USER_LOADED
) => {
  switch (action.type) {
    case ActionTypes.USER_LOADED:
      return { ...state, isAuthenticated: true, isLoading: false };

    default:
      return state;
  }
};

export const userLoginSuccessReducer = (
  state = initialState,
  action: LOGIN_SUCCESS
) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const userRegisterSuccessReducer = (
  state = initialState,
  action: REGISTER_SUCCESS
) => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const authErrorReducer = (state = initialState, action: AUTH_ERROR) => {
  switch (action.type) {
    case ActionTypes.AUTH_ERROR:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const loginFailReducer = (state = initialState, action: LOGIN_FAIL) => {
  switch (action.type) {
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const registerFailReducer = (
  state = initialState,
  action: REGISTER_FAIL
) => {
  switch (action.type) {
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const logoutSuccessReducer = (
  state = initialState,
  action: LOGOUT_SUCCESS
) => {
  switch (action.type) {
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };

    default:
      return state;
  }
};
