import React,{ Component,useState } from "react";
import styles from "./CountryModal.module.css";
import {Document,Page} from "react-pdf"
import pdfFile from '../../assets/images/Sanika_Gangal.pdf';
import Navbar from "../Navbar/Navbar";
import ProfileCard from "../ProfileCard/ProfileCard";
import Student from "../Student/Student";
import ProjectModal from "../ProjectModal/ProjectModal";
import Dana from "../../assets/images/Dana Losbog .jpg";
import Sandeep from "../../assets/images/Sandeep Varma.jpg";
import Mamta from "../../assets/images/landscape_img.webp";

class CountryModal extends Component{

    state = {
        about:true,
        students:false,
        projects:false,
    };

    closeModal = (event) =>{
        event.preventDefault();
        this.props.modalActive(event);
    }

    getWindow = (data)=>{
        if(data == "students") this.setState({about:false,students:true,projects:false});
        else if(data == "about") this.setState({about:true,students:false,projects:false});
        else if(data == "projects") this.setState({about:false,students:false,projects:true});
    }

    render(){
        const about = this.state.about;
        const students = this.state.students;
        const projects = this.state.projects;
        const details = ["Sandeep Varma, the founder and proprietor of ATS Wealth Management and ATS Advanced Trustee Strategies, is a Registered Investment Advisor with over 30 years of experience as a financial advisor. As an accomplished entrepreneur and businessman, Sandeep became involved in the local chapter of TIE and served as the President of the San Diego Chapter from 2017 to 2019. During this period, he identified a significant opportunity to give back by assisting with the TIE Young Entrepreneurs (TYE) program. Sandeep is deeply committed to student education, and over time he has become renowned for his leadership in entrepreneurship. His ultimate goal is to inspire, motivate, and excite young people about entrepreneurship and to assist them in realizing their entrepreneurial dreams.","Dana Losbog has been involved with TYE since 2020. She helps facilitate TYE San Diego’s program in an efficient and detail-oriented manner. Dana has experience in business operations, accounting, and thorough relational skills. She enjoys watching the students develop professionally and personally throughout their participation in the TYE San Diego program. Dana gladly invests her time into both students and parents, making sure that each person is taken care of. She is in regular contact with the board members of TiE San Diego and ensures all program sessions and events run smoothly.","Mamta Buch, the program lead for the 2023 TYE San Diego program, is thrilled to elevate San Diego’s “best kept secret”. Drawing upon her extensive 25+ years of experience in the Learning & Development field, as well as her firsthand involvement in supporting her husband’s business for the past 12+ years, Mamta brings a wealth of knowledge to her students. She has been involved in a variety of roles within TYE, including being a mentor to the TYE San Diego class of 2022. She is excited to offer her students an unforgettable experience that equips them with both business related and practical skills that will prove invaluable as they progress through their careers whether as entrepreneurs or in any other profession they choose."]
        return (
            <>

                <div className={styles.MainSection}>

                    <Navbar getWindow={(data)=> this.getWindow(data)}/>

    
                    {about ? <div className={styles.content}>
                        <h1 className={styles.content_heading}>
                            About Us
                        </h1>
                        <p className={styles.content_info}>
                        TiE South Coast, formed in 2000, is a non-profit community welcoming entrepreneurs from San Diego and surrounding areas. The chapter's goal is to foster entrepreneurship within the community. We believe in creating a thriving entrepreneurial ecosystem through mentoring, networking, and education
                        </p>
                    </div> : <></>}

                    
                    {about ? <div className={styles.card_div}>
                        <ProfileCard img={Sandeep} name="Sandeep Varma" phoneNo="8582545705" mailid="sandeep.v@atsfinancial.com" designation="TiE Charter Member" content={details[0]} linkedin="https://www.linkedin.com/in/atswm/"/>
                        <ProfileCard img={Dana} name="Dana Losbog" phoneNo="8586435757" mailid="Dana.L@ATSFinancial.com " designation="TYE San Diego Program Coordinator" content={details[1]} linkedin="https://www.linkedin.com/in/dana-losbog-0a70b2101/ "/>
                        <ProfileCard img={Mamta} name="Mamta Buch" phoneNo="8587548801" mailid="mamta@neversnows.com" designation="TYE San Diego Program Lead" content={details[2]} linkedin="https://www.linkedin.com/in/mbuch/ "/>
                    </div> : <></>}

                    {students ? <div className={styles.student_div}>
                        <Student/>
                    </div> : <></>}
                    
                    {projects ? <div>
                        <ProjectModal/>
                    </div> : <></>}
                    
                    <div className={styles.buttonDiv}>
                        <button
                        onClick={(event)=> this.closeModal(event)}
                        >X</button>
                    </div>
                </div>

            </>
        );
    }
}

export default CountryModal;