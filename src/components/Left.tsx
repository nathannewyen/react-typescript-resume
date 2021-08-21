import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface Props {
    profile: profileData
}

export const Left: React.FC<Props> = (props) => {
    const {profile} = props;
    
    return (
        <div className="split left">
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