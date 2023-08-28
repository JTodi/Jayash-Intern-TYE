import React from "react";
import styles from "./ProjectModal.module.css";
import img_data from "../../assets/images/landscape_img.webp"

function ProjectModal(){
    return (
        <div className={styles.wholeSection}>

            <h1>Projects</h1>

            <div className={styles.upperSection}>
                <h3>Project Purpose</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div className={styles.lowerSection}>

                <div className={styles.leftPart}>

                    <div>
                        <h3>Wider Vision</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    
                    <div>
                        <h3>Deliverables</h3>
                        <ul>
                            <li>Lorem Ipsum is simply dummy text of the julia when came is lorem ipsum falit</li>
                            <li>Ipsum dolor sit amet. Qui corporis officiis et cumque iste in ullam consequatur et nostrum veniam. Et velit numquam et tempore nulla qui voluptas esse in laboriosam voluptatem</li>
                            <li>Ipsum dolor sit amet. voluptatem</li>
                            <li>Ipsum dolor sit amet ipsum dolor sit amet. voluptatem </li>
                        </ul>
                    </div>

                </div>

                <div className={styles.rightPart}>
                    <div className={styles.image}>
                        <img src={img_data}/>
                    </div>
                    <div>
                        <h3>What was Achieved</h3>
                        <p>Lorem ipsum dolor sit amet. Ea nisi quia et voluptate placeat aut dignissimos asperiores ex galisum praesentium aut veritatis voluptatum sit minima eaque eos autem facilis. Sit illum adipisci et nesciunt laudantium est doloribus internos in ipsum sint est illum tempore nam quas rerum eum dolore repellat. Est illo sint At incidunt nulla rem officiis voluptatem ut dolorem ducimus nam quidem excepturi.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectModal;