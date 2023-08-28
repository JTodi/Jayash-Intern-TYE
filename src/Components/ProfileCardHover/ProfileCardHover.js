import React from "react";
import styles from "./ProfileCardHover.module.css";
import phone from "../../assets/images/telephone.png";
import mail from "../../assets/images/gmail.png";
import linkedin from "../../assets/images/linkedin.png";

function ProfileCardHover(props){
    return(
        <div className={styles.Section}>
            <div className={styles.upperPortion}>

                <div className={styles.picture}>
                    <img src={props.img}/>
                </div>
                <div className={styles.container1}>
                    <p className={styles.name}>{props.name}</p>
                    <p>{props.designation}</p>
                </div>

            </div>

            <div className={styles.middlePortion}>
                <h3>Contact</h3>

                <div className={styles.contact_info}>

                    <div className={styles.det}>
                        <img src={phone}/>
                        <p>{props.phoneNo}</p>
                    </div>
                    <div className={styles.det}>
                        <img src={mail}/>
                        <p>  {props.mailid}</p>
                    </div>

                </div>

                <div className={styles.det}>
                    <img src={linkedin}/>
                    <a href={props.linkedin}>{props.linkedin}</a>
                </div>

            </div>

            <div className={styles.lowerPortion}>
                <h3>Bio</h3>
                <p>{props.bio}</p>
            </div>
            
        </div>
    );
}

export default ProfileCardHover;