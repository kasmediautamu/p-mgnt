import { combineReducers } from "redux";
import {
  userLoadingReducer,
  userLoadedReducer,
  userLoginSuccessReducer,
  logoutSuccessReducer,
  registerFailReducer,
  authErrorReducer,
  userRegisterSuccessReducer,
  loginFailReducer
} from "./authReducers";
import { clearErrorReducer, getErrorReducer } from "./errorReducers";

const reducers = combineReducers({
  userLoading: userLoadingReducer,
  userLoaded: userLoadedReducer,
  userLoginSuccess: userLoginSuccessReducer,
  userLogoutSuccess: logoutSuccessReducer,
  userRegisterSuccess: userRegisterSuccessReducer,
  userRegisterFail: registerFailReducer,
  userLoginFail:loginFailReducer,
  authError: authErrorReducer,
  getError: getErrorReducer,
  clearError: clearErrorReducer,

});

export default reducers;
