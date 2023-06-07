import { configureStore, compose, applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { mainReducer } from "../reducers/employeesReducer";

debugger
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default configureStore({
//     reducer:{
//         employees : mainReducer
//     }
// });

const myStore = createStore(
    mainReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default myStore;