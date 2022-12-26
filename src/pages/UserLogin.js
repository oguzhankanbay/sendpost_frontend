import React, { useState,useEffect } from "react";
import Input from "../components/InputForSignup";
import { useTranslation, withTranslation } from "react-i18next";
import{login} from "../ApiCalls/Apicalls";
import {pendingApicall} from "../shared/ApiProgress";

function UserLogin() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const[error,setError]=useState();
  const { t } = useTranslation();

  

const onClickLogin= async event=>{
  event.preventDefault();
  const creds={
    username,
    password
  };

   try {
	await login(creds);
} catch (error) {
	setError(error.response.data.message);  
} 
  } 

  useEffect(() => {
    setError(undefined);

  }, [username, password]);

  const buttonDisabled= username && password;

  return (
   
    <div className="container">
      <form className="row justify-content-center">
        <div className="col-5">
        <h1 className="text-center"> {t("User Login")}</h1>
        <Input
          label={t("Username")}
          onchange={(event) => setUserName(event.target.value)} type="text" name="username"
        />
        <Input
          label={t("password")}
          onchange={(event) => setPassword(event.target.value)} type="password" name="password"
        />
        {error && <div className="alert alert-danger mt-3">{error}</div>}
        <button className="btn btn-success mt-3 form-control" disabled={!buttonDisabled}  onClick={onClickLogin}>{t("Login") }</button>
     </div> </form>
     
    </div>
  );
}
export default withTranslation()(UserLogin);
