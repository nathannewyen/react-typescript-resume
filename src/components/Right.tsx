import React from 'react';

interface Props {
  profile: profileData
}

export const Right: React.FC<Props> = (props) => {
 
  const {profile} = props
  
    return (
        <div className="split right">
          <div className="right-inner centered">
            <div className="introduction">
              <h4>Intro</h4>
              <div className="content">
                <p className="intro-p">
                  I'm currently working as a full stack developer at CMIND LLC
                </p>
                <p className="intro-p">
                  I enjoy being the bridge between engineering and design, and feel right at home as a front end engineer. I'm experienced in developing and designing products for the web, from simple landing pages to full-fledged web apps.
              </p>
              <span className="intro-p job-pls">I&#39;m currently learning and growing my career through new opportunities.</span>

              </div>
          </div>
            <div className="skills">
                <h4>Skills</h4>
                <div className="content">
                  <div className="skill-category">
                    <strong>Languages: &nbsp;</strong>
                    <span>JavaScript (ES6), HTML5, CSS3, C#, Python</span>
                  </div>
                  <div className="skill-category">
                    <strong>Libraries &amp; Frameworks: </strong>
                    <span>jQuery, Bootstrap, Node, Backbone, Marionette, MongoDB, Angular, Express, React</span>
                  </div>
                  <div className="skill-category">
                    <strong>Tools: &nbsp;</strong>
                    <span>Git &amp; Github, Command Line, Postman, Adobe Photoshop, InDesign</span>
                  </div>
                </div>
          </div>
          <div className="education">
                <h4>Education</h4>
                <div className="content">
                  <div className="university"><a href="http://www.northeastern.edu/" target="_blank">University of Texas at Arlington</a></div>
                  <div className="college"><a href="http://www.ccis.northeastern.edu/" target="_blank">Tarrant County College</a></div>
                  <div className="conc bootcamp"><a href="http://www.ccis.northeastern.edu/" target="_blank">Coding Dojo</a></div>
                  <div className="major"><strong>Major:</strong> Computer Science</div>
                  <div className="minor"><strong>Minor:</strong> Graphic Design</div>
                  <div className="grad-date">Graduation: June 2020</div>
                </div>
          </div>
          
          <div className="experience">
                <h4>Experience</h4>
                <div className="content">
                  <div className="exp-item">
                    <div className="job">
                      <a className="company" href="https://starry.com/" target="_blank">Mastertronics, Inc.</a>
                      <div className="duration">Nov 2019 &mdash; August 2020</div>
                    </div>
                    <div className="title">Computer Technical</div>
                    <ul className="description">
                      <li>Received broken computer from amazon and performed diagnostics then communicated the issues to the repair team.</li>
                      <li>Propose and implement design and engineering solutions to ensure optimal and coherent user experiences for Mastertronics iOS and android apps</li>
                    </ul>
                  </div>
                  <div className="exp-item">
                    <div className="job">
                      <a className="company" href="http://us.mullenlowe.com/" target="_blank">The TX Studio</a>
                      <div className="duration">October 2020 &mdash; Dec 2020</div>
                    </div>
                    <div className="title">Intern Creative Technologist Co-op</div>
                    <ul className="description">
                      <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
                      <li>Tested code in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
                      <li>Made presentations for introducing completed projects or solving algorithm issues.</li>
                    </ul>
                  </div>
                  <div className="exp-item">
                    <div className="job">
                      <a className="company" href="http://us.mullenlowe.com/" target="_blank">TeammateMe</a>
                      <div className="duration">March 2021 &mdash; Present</div>
                    </div>
                    <div className="title">Full Stack Software Engineer</div>
                    <ul className="description">
                      <li>TeammateMe helps users find and create teams for their course, projects, classes, and extracurricular activities. Also, it helps them gain professional experience and sharpen their teamwork skills. Work with UI/UX Designer.</li>
                      <li>Manage GitHub and cloud server. Code review for web developer. Marketing for company.</li>
                      <li>Building features, user interface with NextJS for front-end, manage user data, working back-end with NodeJS and PostgresSQL.</li>
                    </ul>
                  </div>
                  <div className="exp-item">
                    <div className="job">
                      <a className="company" href="http://us.mullenlowe.com/" target="_blank">CMINDLLC</a>
                      <div className="duration">August 2021 &mdash; Present</div>
                    </div>
                    <div className="title">Full Stack Software Engineer</div>
                    <ul className="description">
                      <li>As a full stack developer, I get an opportunity to work with brilliant leaders and fortune 100 clients to help build software products that help organizations innovate in their digital transformation and end-user experience excellence.</li>
                      <li>Building features, user interface with React Typescript for front-end, manage user data, working back-end with NodeJS.</li>
                    </ul>
                  </div>
                </div>
          </div>
          <a className="resume" href={profile.resumeURL} target="_blank"><div className="resume-link">Grab a PDF of my full resume</div></a>
          </div>
        </div>
    )
};