import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import todoListReducer from "../reducers/todoListReducer";
import modifyContactReducer from "../reducers/modifyContactReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

const store = createStore(
  combineReducers({
    list: todoListReducer,
    modify: modifyContactReducer
  }),
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
