import React ,{useState} from 'react'
import {useDispatch } from 'react-redux';
import { setUserRegistration } from '../redux/registrationSlice';
import { useNavigate } from "react-router-dom";
import { message } from 'antd';


const SignupForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);


    const  handleInputChange = (e) => {
            const {id , value} = e.target;
            if(id === "firstName"){
                setFirstName(value);
            }
            if(id === "lastName"){
                setLastName(value);
            }
            if(id === "email"){
                setEmail(value);
            }
            if(id === "password"){
                setPassword(value);
            }
            if(id === "confirmPassword"){
                setConfirmPassword(value);
            }
    }
    const handleSubmit  = () => {
        if(password === confirmPassword){
            navigate('/userlogin')
        }else{
            message.error("Password Mismatch")
        }
        dispatch(setUserRegistration({
            firstName,
            lastName,
            email,
            password,
            confirmPassword

        }))
    }
  return (
    <div className="form container">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  value={lastName} onChange = {(e) => handleInputChange(e)} className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" value={password} onChange = {(e) => handleInputChange(e)} type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" value={confirmPassword} onChange = {(e) => handleInputChange(e)} type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="btn text-center btn-info">Register</button>
          </div>
      </div>      
  )
}

export default SignupForm
