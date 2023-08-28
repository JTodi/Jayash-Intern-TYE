import React, { useEffect } from "react";
import styles from "./Student.module.css";
import StudentCard from "../StudentCard/StudentCard";
import studentDetails from "../../assets/data/studentDetails";

import Daniel_img from "../../assets/images/Daniel.Hotz.1.jpg";
import Ben_img from "../../assets/images/Ben.Levine.4.jpg";
import Jai_img from "../../assets/images/Jai.Singh.3.jpg";
import Mitchell_img from "../../assets/images/Mitchell.Gallup.5.jpg";
import Kavi_img from "../../assets/images/Kavi.Tabb.7.jpg";
import Mila_img from "../../assets/images/Mila.Sonkin.2.jpg";
import Parsa_img from "../../assets/images/Parsa.Barandish.8.jpg";
import liam_img from "../../assets/images/landscape_img.webp";
import soham_img from "../../assets/images/Soham.Gangal.9.jpg";
import sanika_img from "../../assets/images/Sanika.Gangal.6.jpg";
import Adam_img from "../../assets/images/Adam.Fang.10.jpg";


function createCard(data){
    return (<div>
    <StudentCard name="Daniel hotz" mail="danielrhotz@gmail.com" img={Daniel_img}/>
    <StudentCard name="Ben Levine" mail="gamerbenjamin789@gmail.com" img={Ben_img}/>
    <StudentCard name="Jai Singh" mail="jsingh23@pacificridge.org" img={Jai_img}/>
    <StudentCard name="Sanika Gangal" mail="sanikagangal16@gmail.com" img={sanika_img}/>
    <StudentCard name="Mitchell Steven Gallup" mail="mightymitchg@gmail.com" img={Mitchell_img}/>
    <StudentCard name="Kavi Zaveri-Tabb" mail="kavi.zaveri-tabb.27@bishops.com" img={Kavi_img}/>
    <StudentCard name="Mila Sonkin" mail="milasonkin2@gmail.com" img={Mila_img}/>
    <StudentCard name="Parsa Avaz-Barandish" mail="parsaab2008@gmail.com" img={Parsa_img}/>
    <StudentCard name="Liam N Reid" mail="liam.reid2026@sethigh.org" img={liam_img}/>
    <StudentCard name="Soham Gangal" mail="sohamgangal16@gmail.com" img={soham_img}/>
    <StudentCard name="Adam Fang" mail="adamfang5209@gmail.com" img={Adam_img}/>
    </div>
    )
}

function Student(){


    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <h1>Students</h1>
            </div>
            <div className={styles.cards}>
                {createCard()}
            </div>
        </div>
    );
}

export default Student;