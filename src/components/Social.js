
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
                    <SocialIcon url="mailto:Michael_Patrick.Walter@outlook.com" />
                </div>
                {/* <a href="../download_content/Michael_Walter_Resume.pdf" download="Michael_Walter_Resume.pdf" type="pdf">
                    <div className="r-button">
                        <p><strong>Resume</strong></p>
                    </div>
                </a>       */}
            </div>
            <p>Copyright&copy; Michael Walter 2020</p>
        </div>
    )
}

export default Social;