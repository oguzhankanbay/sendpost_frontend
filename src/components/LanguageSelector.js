import React from 'react'
import { useTranslation, withTranslation } from "react-i18next";
import { changeLanguageForBackEnd } from "../ApiCalls/Apicalls";
function LanguageSelector(props) {
   function onChangeLanguage(parametre){
        const {i18n} = props;
        i18n.changeLanguage(parametre);
        changeLanguageForBackEnd(parametre);
      };
  return (
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-5">
       <span
    className="flag-icon flag-icon-tr"
    alt="Turkey"
    onClick={() => onChangeLanguage("tr")}
    style={{ cursor: "pointer" }}
  />
  <span
    className="flag-icon flag-icon-us"
    alt="United States"
    onClick={() => onChangeLanguage("en")}
    style={{ cursor: "pointer" }}
  /></div></div></div>
  )
}

export default withTranslation() (LanguageSelector);