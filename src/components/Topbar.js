import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import logo from "../assests/hoaxify.png";
import{logoutSuccess} from'../redux/authAction'

 class Topbar extends Component {

  render() {
    const {t,username,isLoggedIn,logoutSuccess}=this.props;
    let links= (
      <ul className='navbar-nav ml-auto'>
      <li className='nav-item'>
      <Link className='nav-link' to="/">{t('Homepage')} </Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link' to="/signup">{t('SignUp')} </Link>
      </li>
      <li className='nav-item'>
      <Link className='nav-link'  to="/login">{t('SignIn')} </Link>
      </li>
      </ul>
    )
   
    if(isLoggedIn){
      links=(
        <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
        <Link className='nav-link' to={`/user/${username}`}>{username}</Link>
        </li>
        <li className='nav-item' onClick={logoutSuccess}>
        {t('logout')}
        </li>
        </ul> 
      );

    }
    return(
      <nav className="navbar navbar-light navbar-expand bg-light">
      <Link className='navbar-brand' to="/">
        <img src={logo} width="60" alt='logo'/>
        {t('SendPost')} 
      </Link>
      {links}
    </nav>
    )
  }
}
const TopbarWithTranslation= withTranslation()(Topbar);

const mapStateToProps=store=>{
  return{
    isLoggedIn:store.isLoggedIn,
    username:store.username
  }
};
const mapDispachToProps=dispatch=>{
  return{
    logoutSuccess: ()=>{
     return dispatch(logoutSuccess());
    }
  }
}
export default connect(mapStateToProps,mapDispachToProps )(TopbarWithTranslation);
