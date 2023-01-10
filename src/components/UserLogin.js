import React, { useState } from 'react'
// import { setUserRegistration } from '../redux/registrationSlice';
import { useSelector } from 'react-redux';
import { message } from 'antd';


const UserLogin = () => {
    const userRegister = useSelector((state) => state.register.userRegister)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    }
    const handleLogin = (e) => {
        if (userRegister[0]?.email === email && userRegister[0]?.password === password) {
            message.success("login successfully")

        } else {
            message.error("Invalid email or password")

        }

        // console.log(firstName,lastName,password)
        // const filterEmail = userRegister.filter(e=>e.email === email)
        console.log("userRegister >>", userRegister)
        // console.log("filterEmail >>",filterEmail)
    }
    return (
        <div className="form container">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input type="email" id="email" value={email} onChange={(e) => handleInputChange(e)} className="form__input" placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" value={password} onChange={(e) => handleInputChange(e)} type="password" id="password" placeholder="Password" />
                </div>
            </div>
            <div className="footer">
                <button type="submit" onClick={handleLogin} className="btn text-center btn-info">Login</button>
            </div>
        </div>
    )
}

export default UserLogin
