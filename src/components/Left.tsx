import React, {useState, useEffect} from 'react';
import { FaGithub, FaLinkedin, FaAngleDown } from "react-icons/fa";

interface Props {
    profile: profileData,
    showScroll: boolean,
    scrollDownFunc: ScrollDown
}

export const Left: React.FC<Props> = (props) => {
    const { profile, showScroll, scrollDownFunc } = props;
    
    const [mobileScroll, setMobileScroll] = useState(true)

    useEffect(() => {
        if (window.innerWidth > 600) {
            setMobileScroll(false)
        }
    }, [])

    return (
        <div className="split left" onWheelCapture={scrollDownFunc}>
            {showScroll === true && mobileScroll === true && (
                <div className="field">
                    <div className="scroll">
                        <FaAngleDown className="icon" />
                    </div>
                </div>
            )}
            <div className="bg-img"></div>
            <div className="left-inner centered">
                <div className="info">
                <h2 className="name">{profile.name}</h2>
                <div className="subtext">{profile.subtext}</div>
                <div className="jobStatus">{profile.jobStatus}</div>
                <div className="social-links">
                    <a href={profile.githubURL}><FaGithub className="fa" /></a>
                    <a href={profile.linkedinURL}><FaLinkedin className="fa" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
};