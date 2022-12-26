import axios from 'axios'

export const Signup =(body)=>{
 return axios.post("/api/users",body)
}

export const changeLanguageForBackEnd= language=>{
    axios.defaults.headers['accept-language']=language;
}

export const login=creds =>{
    const _URL="api/auth"
return axios.post(_URL,{},{auth:creds});
}
