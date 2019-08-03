import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Github } from "../icons/github.svg";
import { ReactComponent as Medium } from "../icons/medium.svg";

import * as data from "../data";

import "./Home.css";

const Home: React.FC = () => {
  const [a, setA] = useState(false);

  return (
    <div className="root">
      <div className={`app ${a ? "-a" : ""}`}>
        <div className="hero -main">
          <div className="dynamic-container">
            <div className="main-subtitle">Hey, I'm</div>
            <div className="main-title" onClick={() => setA(!a)}>
              Dominik Tarnowski
            </div>
            <div className="main-text">
              And I'm a software developer based in the UK.
            </div>
            <div className="main-links">
              <a href={`mailto:${data.email}`}>Contact Me</a>
              <Link to="/projects">Explore Projects</Link>
            </div>
            <div className="main-external-links">
              <a
                href="https://github.com/d0minikt/"
                target="blank"
                className="main-external-link"
              >
                <Github />
                <div>
                  <div className="main-external-link-title">Github</div>
                  <div className="main-external-link-text">
                    {data.githubProjects} projects
                  </div>
                </div>
              </a>
              <a
                href="https://medium.com/@dominik.t"
                target="blank"
                className="main-external-link"
              >
                <Medium />
                <div>
                  <div className="main-external-link-title">Medium</div>
                  <div className="main-external-link-text">
                    {data.mediumFollowers} Followers
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              alt="Code Editor"
              className="code-image"
              src={process.env.PUBLIC_URL + "/code.png"}
            />
          </div>
        </div>
        <div className="hero -services">
          <div className="container">
            <div className="hero-title">What I do</div>
            <div className="services-grid">
              <div className="service">
                <div className="hero-subtitle">Front-End</div>
                <div className="service-description">
                  I have over 5 years of experience building web apps with
                  modern EcmaScript standards as well as frameworks and
                  libraries, including <b>React</b> and <b>Angular</b>. For
                  styling, I often use <b>SCSS</b> and most of my apps are
                  written in <b>TypeScript</b>.
                </div>
              </div>
              <div className="service">
                <div className="hero-subtitle">Back-End</div>
                <div className="service-description">
                  I have 3 years of experience with writing back-end servers for
                  my projects. I am familiar with writing servers in{" "}
                  <b>Node.js Express</b>, <b>Go</b> and <b>C# Asp.Net Core</b>{" "}
                  and I've used both <b>SQL</b> and <b>NoSQL</b> databases.
                </div>
              </div>
              <div className="service">
                <div className="hero-subtitle">Mobile Apps</div>
                <div className="service-description">
                  I have worked with <b>Flutter</b> to build mobile apps ever
                  since the 1.0 release came out. With Flutter and some
                  <b>Java/Kotlin/Swift</b> knowledge, I can build{" "}
                  <b>cross-platform</b> mobile apps from one codebase.
                </div>
              </div>
              <div className="service">
                <div className="hero-subtitle">Cloud Services</div>
                <div className="service-description">
                  I have experience with publishing scalable <b>Docker</b>{" "}
                  containers to cloud services such as <b>AWS</b>, <b>Azure</b>{" "}
                  or <b>Google Cloud</b>. Most of my cloud platform experience
                  is associated with Google as I've mainly worked with{" "}
                  <b>Firebase</b>, <b>App+Compute Engine</b> and{" "}
                  <b>Cloud Storage</b>.
                </div>
              </div>
              <div className="service">
                <div className="hero-subtitle">Staying Organised</div>
                <div className="service-description">
                  As a developer, I know how important it is to keep an
                  organised codebase to increase productivity, reduce bugs and
                  improve communication. This is why I use <b>Git</b> in all my
                  projects and <b>unit tests</b> in those larger ones that need
                  it.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-title">Dominik Tarnowski</div>
          <div className="footer-subtitle">{data.email}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
