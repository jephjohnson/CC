import { combineReducers, createStore as reduxCreateStore } from "redux"
import { routerReducer } from 'react-router-redux';
import { toggle } from "./toggle"

const rootReducer = combineReducers({
      toggle,
      routing: routerReducer
  });

const createStore = () => reduxCreateStore(rootReducer)
export default createStore
