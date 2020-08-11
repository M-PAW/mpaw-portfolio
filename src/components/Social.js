
import React from 'react';
import '../styles/social.css';
import { SocialIcon } from 'react-social-icons';

const Social = () => {
    return (
        <div>
            <div className="social-container">
                <div>
                    <SocialIcon url="https://www.linkedin.com/in/mpaw/" />
                </div>
                <div>
                    <SocialIcon url="https://github.com/M-PAW" />
                </div>
                <div>
                    <SocialIcon url="mailto:Michael_Patricl.Walter@outlook.com" />
                </div>     
            </div>
            <p>Copyright&copy; Michael Walter</p>
        </div>
    )
}

export default Social;