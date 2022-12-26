import { legacy_createStore as createStore } from "redux";
import authReducers from "./authReducers"

const loggedInState={
    isLoggedIn:true,
    username:"user1",
    displayName:"display1",
    image:null,
    password:"12345"
}
const configureStore=()=>{
 return createStore(authReducers, loggedInState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  
}
export default configureStore;
