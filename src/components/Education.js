
import React from 'react';
import '../styles/education.css';


const Education = () => {
    return (

        <div className="education-container">
            <div>
                <h3>Formal Education</h3>
                <section>   
                    <h5>Lambda School</h5>
                    <p>Full-Stack Development</p>
                </section>
                <section>
                    <h5>Nanjing University</h5>
                    <p>Mandarin Chinese</p>
                </section>
                <section>
                    <h5>Riverside City College</h5>
                    <p>Computer Science</p>
                </section>
            </div>
            <div>
                <h3>Informal Education</h3>
                <section>
                    <h5>Udemy</h5>
                </section>
            </div>
            <div>
                <h3>Code Challenges</h3>
                <section>
                    <h5>leetcode</h5>
                </section>
                <section>
                    <h5>Edabit</h5>
                </section>
            </div>
        </div>
    )
}

export default Education;