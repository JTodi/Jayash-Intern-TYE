import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo_pic from "../../assets/images/tie-logo.png";

function Navbar(props){

    const [color,setColor] = useState(2);

    return (
        <div className={styles.navb}>
            <div className={styles.logo}>
                <img src={logo_pic}/>
            </div>

            <div className={styles.container}>
                <p style={color == 2 ?{color:`whitesmoke`} : {color:`grey`}} onClick={()=>{props.getWindow("about");setColor(2);}}>About Us</p>
                <p style={color == 3 ?{color:`whitesmoke`} : {color:`grey`}} onClick={()=>{props.getWindow("projects");setColor(3);}}>Projects</p>
                <p style={color == 4 ?{color:`whitesmoke`} : {color:`grey`}} onClick={()=>{props.getWindow("students");setColor(4);}}>Students</p>
                <p style={color == 5 ?{color:`whitesmoke`} : {color:`grey`}}>Yearbook</p>
            </div>    
        </div>
    );
}

export default Navbar;
