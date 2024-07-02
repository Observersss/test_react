import React from 'react';
import {Link} from "react-router-dom";
import classes from "./navbar.module.css";
const Navbar = () => {
    return (
        <div>
            <div className={classes.navbar}>
                <div className={classes.navbar__links}>
                    <Link to="/about">About</Link>
                    <Link to="/posts">Posts</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;