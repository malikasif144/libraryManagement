import React,{useState} from 'react'
import { message, } from 'antd';

const AdminLogin = () => {
  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null);

  const  handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "email"){
          setEmail(value);
      }
      if(id === "password"){
          setPassword(value);
      }
}
const handleLogin = () => {
  var admin = localStorage.getItem('admin');
  var adminpassword = localStorage.getItem('password');
  if(email === admin && password === adminpassword  ){
  //   <Alert
  //   message="Logged In As Admin"
  //   type="success"
  // />
  message.success("Logged In As A Admin")
  }else{
    // <Alert message="Invalid credentials" type='error' />
  message.error("Invalid Credentials")


  }
}
  return (
    <div>
         <div className="form container">
    <div className="form-body">
      <h1>Log In As Admin</h1>
        <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} className="form__input" placeholder="Email"/>
              </div>
        <div className="password">
                <label className="form__label" htmlFor="password">Password </label>
                <input className="form__input" value={password} onChange = {(e) => handleInputChange(e)} type="password"  id="password" placeholder="Password"/>
        </div>
    </div>
    <div className="footer">
        <button type="submit" onClick={handleLogin} className="btn text-center btn-info">Login</button>
    </div>
</div>
    </div>
  )
}

export default AdminLogin
