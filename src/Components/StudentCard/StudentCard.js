import React from "react";
import styles from "./StudentCard.module.css";

function StudentCard(props){
    return (
        <div className={styles.container}>
            <img src={props.img}/>
            <div className={styles.second_container}>
                <p>{props.name}</p>
                <p className={styles.content_text}>{props.mail}</p>
            </div>
            <div className={styles.connect_cont}>
                <a>Connect Now</a>
            </div>
        </div>
    );
}

export default StudentCard;