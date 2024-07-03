import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from "./navbar.module.css";
import {AuthContext} from "../../context/ index";
const Navbar = () => {

    const {isAuth,setIsAuth} = useContext(AuthContext);

    const handleLogout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };

    return (
        <div>
            <div className={classes.navbar}>
                <div className={classes.navbar__links}>
                    <Link to="/about">About</Link>
                    <Link to="/posts">Posts</Link>
                    {isAuth
                    ? <Link to={'/login'} onClick={handleLogout}>Log out</Link>
                    : <Link to={'/login'}>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;