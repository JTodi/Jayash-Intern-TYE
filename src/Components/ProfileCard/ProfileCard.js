import React, { useState } from "react";
import styles from "./ProfileCard.module.css";
import ProfileCardHover from "../ProfileCardHover/ProfileCardHover";

function ProfileCard(props){

    const [ddmActive,setDdmActive] = useState(false);

    function touched(){
        setDdmActive(!ddmActive);
    }
    return (
        <div className={styles.card}>
            <div className={styles.dropdown}>
                <p onClick={touched} className={styles.i_button}>ⓘ</p>
                {ddmActive ?<div className={styles.dropdown_menu}>
                    <ProfileCardHover linkedin={props.linkedin} phoneNo={props.phoneNo} mailid={props.mailid} name={props.name} img={props.img} designation={props.designation} bio={props.content}/>
                </div> : <></>}
            </div>
            <div className={styles.image}>
                <img src={props.img}/>
            </div>
            <h2>{props.name}</h2>
            <p className={styles.desig}> {props.designation} </p>
            <div className={styles.button}>
                <a href={props.linkedin}>Connect Now</a>
            </div>
        </div>
    );
}

export default ProfileCard;