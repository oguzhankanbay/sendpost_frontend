const defaultState={
    isLoggedIn:false,
    username:undefined,
    displayName:undefined,
    image:undefined,
    password:undefined
}


const authReducers=(state={...defaultState},action)=>{

    if (action.type==="logout-success") {
      return defaultState;  
    }
    return state;

};
export default authReducers;
