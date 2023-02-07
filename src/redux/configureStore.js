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
    const auth=localStorage.getItem('auth')
    const defaultState={
        isLoggedIn:false,
        username:undefined,
        displayName:undefined,
        image:undefined,
        password:undefined
    }
    if (auth) {
        try {
            defaultState=JSON.parse(auth)
        } catch (error) {
            
        }
        
    }
const store=  createStore(authReducers, loggedInState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  
store.subscribe(()=>{
    localStorage.setItem('auth',JSON.stringfy(store.loggedInState))
})
}
export default configureStore;
