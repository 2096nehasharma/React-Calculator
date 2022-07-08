import { createStore } from "redux";
import evaluationReducer from "./reducers/evaluation";

export default createStore(
    evaluationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// import { createStore, applyMiddleware } from 'redux';
// import evaluation from './reducers/evaluation';
// export default function configureStore(initialState={}) {
//  return createStore(
//    evaluation,
//    initialState,
//  );
// }