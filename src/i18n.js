import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
.use(LanguageDetector)
.use(initReactI18next).use(LanguageDetector).init({
    resources: {
        en: {
          translations: {
            "Sign Up": "Sign Up",
            "password mismatch":"password mismatch",
            "Username":"Username",
            "password":"Password",
            "Password Repeat":"password Repeat",
            "Display Name":"Display Name",
            "SignUp!":"SignUp !",
            "User Login":"User Login",
            "login":"login",
            "SignUp":"SignUp",
            "SignIn":"SignIn",
            "Homepage":"Homepage"
          }
        },
        tr: {
            translations: {
              "Sign Up": "Kayıt Ol",
              "password mismatch":"parola uyuşmadı.",
              "Username":"Kullanıcı Adı",
              "password":"Şifre",
              "Password Repeat":"Şifre Tekrarı",
              "Display Name":"Görünen İsim",
              "SignUp!":"Üye ol !",
              "User Login":"Kullanıcı Girişi",
              "login":"Giriş",
              "SignUp":"Üye Ol",
              "SignIn":"Üye Girişi",
              "Homepage":"Ana Sayfa"
              
            }
          }},
          fallbacklng:'en',
          ns:['translations'],
          defaultNS:"translations",
          keySeparator:false,
          interpolation : {
            escapeValue:false,
            formatSeperator:','   
          }
        
      
});
export default i18n;