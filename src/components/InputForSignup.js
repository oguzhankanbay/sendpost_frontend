import React from 'react'

function Input(props) {
    const {errors,onchange,name,label,type}=props;
    const className= errors ?'form-control is-invalid' : 'form-control';
  return (
   
    <div>
    <label>{label}</label>
    <input className={className} type={type}  name={name} onChange={onchange} />
    <div className="invalid-feedback"> {errors}</div>
  </div>
  )
}

export default Input