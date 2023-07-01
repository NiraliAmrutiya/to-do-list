import React from "react";
import Navigation from "./Navigation";
import classes from './Mainheader.module.css';

const MainHeader = props => {
    return(
        <header className={classes['main-header']}>
            <h3>ToDo App</h3>
            <Navigation onLogout={props.onLogout}/>
        </header>
    );
};

export default MainHeader;