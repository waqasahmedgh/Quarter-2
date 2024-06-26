import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>Waqas Ahmed</h2>
                  <p>
                    Asslam-o-Aliakum! I am your expertise, and I am very
                    passionate and dedicated to my work. With 4 years
                    experience, I have acquired the skills and knowledge
                    necessary to make your project a success. I enjoy every step
                    of the design process, from discussion and collaboration. My
                    favorite part of programming is the problem-solving aspect.
                    I love the feeling of finally figuring out a solution to a
                    problem. My core stack is Oracle, Oracle Developer, React,
                    Next.js, Node.js, JavaScript and Typescript . I am also
                    familiar I am always looking to learn new technologies.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-50">
                      <p>
                        Website :{" "}
                        <span>
                          <a
                            href="https://waqas-portfolio-nu.vercel.app"
                            target="_blank"
                          >
                            https://waqas-portfolio-nu.vercel.app
                          </a>
                        </span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email :{" "}
                        <a href="mailto:waqasahmed75@gmail.com" target="_blank">
                          <span>waqasahmed75@gmail.com</span>
                        </a>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>MIT</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+92-300-84-32-633</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Lahore</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/waqasahmed.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "25%" }} />
                        <div className="skill-percent">25%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "20%" }} />
                        <div className="skill-percent">20%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Oracle</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2024 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2024 I started to learn Programming. I have
                            learning Html, Css, JavaScript, Typescript, React
                            and Next js. Now I am a Professional Web Designer.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2004 to 2006
                          </h6>
                          <h4 className="timeline-title">
                            Master in Information Technolgy
                          </h4>
                          <p className="timeline-text">
                            From 2004 I started my journey to be a Software
                            Engineer at Preston University.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 1998 to 1999
                          </h6>
                          <h4 className="timeline-title">
                            Post Graduate Diploma in Computer Science
                          </h4>
                          <p className="timeline-text">
                            In 1999, I got the PGD from Govt Islamia College
                            Civil Lines Lahore.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2004 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Real Estate Consultant
                          </h4>
                          <p className="timeline-text">
                            From 2004 I am woking in Real Estate as Sale
                            Executive at DHA Lahore. In 2016 I have registared
                            my own Office with the name of Lasani Real Estate
                            and Consultant with DHA, Lahore.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 1999 to 2004
                          </h6>
                          <h4 className="timeline-title">
                            Sr. Software Engineer
                          </h4>
                          <p className="timeline-text">
                            Since 1999 I started to learn Coding. I have learn
                            Oracle, Oracle Developer, Html, Css, JavaScript,
                            Typescript, React and Next Js. Now I am a
                            Professional Web Designer..
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
