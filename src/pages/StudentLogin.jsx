import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import './StudentLogin.css';
import Logo from "../assets/Logo.png";


function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setloading] = useState("");

    // const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
        }

    }, [])
    async function login() {
        setloading(true)
        console.warn("data", username, password)
        let item = { username, password }
        let result = await fetch('https://juit-webkiosk-api.onrender.com/v1.0/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result))

        if (result.success === true) {
            localStorage.setItem('user-info', JSON.stringify(item));
            setloading(false);
            // history.push("/StudentDashboard");
            console.log(result)
        }
        else {
            console.log("login not valid");
            return;
        }
    }
    return (
        <>
            {loading ?
                <>

                    <h1>Please wait...</h1>
                    <div className="ring"> </div>

                </>
                :
                <>
                    <div className="container">
                        <div className="container1">
                            <div className="leftContainer">
                                <div className="WelcomeText">
                                    <b> Welcome to JUIT Dispensary !</b>
                                </div>
                                <div className="IfCompany">
                                    <Link className='IfCompany' to="/cmpLogin">
                                        Click here if you are an Admin !
                                    </Link>
                                </div>
                                <div>
                                    <b>Student Login</b>
                                </div>
                                
                                <form action="/" method="post" id="form">
                                    <div className="EmailInput">
                                        <input id="EmailInput" type="text" name="rollno" className="login-input" placeholder="Enter Your Roll Number" onChange={(e) => setusername(e.target.value)} /><b><script></script></b>
                                    </div>

                                    <div className="PasswordInput">
                                        <input id="PasswordInput" name="password" type="password" className="login-input" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <div className="loginButton">
                                        <button onClick={login} id="LoginButton" className="login-input">
                                            Login
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className="container2">
                            <div className="rightContainer">
                                <div className="logoJUIT">
                                    <a href="https://www.juit.ac.in/" ><img className="logoJUIT" id="logo" src={Logo} alt="Logo" /></a>
                                </div>
                                <div className="juit"><a className='juit1' href="https://www.juit.ac.in/" >Jaypee University Of Information Technology</a>
                                </div>
                                <div className="approval">Approved by  UGC under Section 2f of UGC Act</div>
                            </div>

                        </div>


                    </div>


                </>
            }
        </>
    )
}

export default Login;