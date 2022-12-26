import React, { Component } from "react";
import { withTranslation } from 'react-i18next';
import { Signup, changeLanguageForBackEnd } from "../ApiCalls/Apicalls";
import Input from "../components/InputForSignup";

 class UserSignup extends Component {
  state = {
    username: null,
    displayName: null,
    password: null,
    passwordRepeat: null,
    pendingSignUp: false,
    errors: {},
  };

  
  onChangeLanguage= parametre =>{
    const{i18n}=this.props;
    i18n.changeLanguage(parametre);
    changeLanguageForBackEnd(parametre);
  }
  onchange = (event) => {
    const { value, name } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = undefined;
    const { t } = this.props;

    if (name=== "password" || name === "passwordRepeat") {
      if (name==="password" && value !== this.state.passwordRepeat) {
        errors.passwordRepeat=t("password mismatch")
        
      }
      else if (name==="passwordRepeat" && value !== this.state.password) {
        errors.passwordRepeat=t("password mismatch")
      }
      else{
        errors.passwordRepeat=undefined;
      }
      
    }

    this.setState({ [name]: value, errors });
  };

  onClickSignup = async (event) => {
    event.preventDefault();
    const { username, password, displayName } = this.state;
    const body = { username, password, displayName };
    this.setState({ pendingSignUp: true });
    try {
      const res = await Signup(body);
    } catch (error) {
      if (error.response.data.validationErrors) {
        this.setState({ errors: error.response.data.validationErrors });
      }
    }
    this.setState({ pendingSignUp: false });
  };


  render() {
    const { pendingSignUp, errors } = this.state;
    const { username, displayName, password, passwordRepeat } = errors;
    const { t } = this.props;
    return (
      <div className="container">
        <form className="row justify-content-center">
          <div className="col-5">
          <h1 className="text-center">{t('Sign Up')}</h1>

          <Input
            onchange={this.onchange}
            name="displayName"
            label={t("Display Name")}
            type="text"
            errors={displayName}
          />
          <Input
            onchange={this.onchange}
            name="username"
            label={t("Username")}
            type="text"
            errors={username}
          />
          <Input
            onchange={this.onchange}
            name="password"
            label={t("password")}
            type="password"
            errors={password}
          />
          <Input
            onchange={this.onchange}
            name="passwordRepeat"
            label={t("Password Repeat")}
            type="password"
            errors={passwordRepeat}
          />

          <button
            type="submit"
            disabled={pendingSignUp || passwordRepeat!==undefined}
            className="btn btn-success mt-3 form-control"
            onClick={this.onClickSignup}
          >
            {pendingSignUp && (
              <span className="spinner-border spinner-border-sm me-2" />
            )}
            {t("SignUp!")}
          </button>
          </div>
        </form>
       
      </div>
    );
  }
}
export default withTranslation()(UserSignup);
