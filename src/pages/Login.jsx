import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../components/context/ index";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const {setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        navigate('/about');
        localStorage.setItem('auth','true');
    }

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Login..."/>
                <MyInput type="password" placeholder="Password...MyInput"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    );
};

export default Login;