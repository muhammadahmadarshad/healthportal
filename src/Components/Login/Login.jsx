import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const [username,setUsername]=React.useState("")
    const [password,setPassword]=React.useState("")
    const [error,setError]=React.useState("")
    const [errorClass,setErrorClass]=React.useState("textbox")
    function onChangeUsername(e){

        console.log(e.target.classList)
        setUsername(e.target.value)

        if(username.length<3)
        {
            setErrorClass("error")
            setError("Invalid username or password")
        }
    }

    
    function onChangePassword(e){

        setPassword(e.target.value)

    }

    return ( <div>
        
        <div className='LoginBox'>
            <h1>Health Portal</h1>
            <div className={errorClass}>
            <i className="fa fa-user"></i>
            <input placeholder='Enter Username' type='text' value={username} onChange={onChangeUsername}/>
            
            </div>
            <div className={errorClass}>
            <i className="fa fa-lock"></i>
            <input placeholder='Enter Password' value={password} onChange={onChangePassword} type='password'/>
            </div>
            
            <button to='/' className='btn-login'>Login</button>
            <Link to='/signup' className='btn-signup'>Signup</Link>
            <div>
            <div className='error-note'>{error}</div>
                <div>
                <Link className='forgot-link' to="/">Forgot Password</Link>
               
               <Link className='forgot-link' to="/">Forgot Password</Link>

                </div>
                
            </div>

        </div>

    </div>);
}
 
export default Login;