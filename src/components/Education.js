
import React from 'react';
import '../styles/education.css';


const Education = () => {
    return (

        <div className="education-container">
            <div>
                <h2>Formal Education</h2>
                <section>   
                    <h4>Lambda School</h4>
                    <p>Full-Stack Development</p>
                </section>
                <section>
                    <h4>Nanjing University</h4>
                    <p>Mandarin Chinese</p>
                </section>
                <section>
                    <h4>Riverside City College</h4>
                    <p>Computer Science</p>
                </section>
            </div>
            <div>
                <h2>Informal Education</h2>
                <section>
                    <h5>Udemy</h5>
                </section>
            </div>
            <div>
                <h2>Code Challenges</h2>
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