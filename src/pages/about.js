import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/about.module.css";
import downloadFile from "../downloads/CV_Deniss_Mijusovs_ENG.pdf";

export default function About() {
  return (
    <Layout>
      <div className={styles.about}>
        <h1>About Page</h1>
        <p>
          My objective is to secure a junior frontend developer position that
          will enable me to apply my technical skills and creativity to build
          modern and responsive web applications. I am proficient in HTML, CSS,
          and JavaScript, familiar with modern frontend framework such as React.
          I have understanding of responsive design principles and cross-browser
          compatibility, able to write clean and maintainable code. Strong
          problem-solving and analytical skills. Excellent communication and
          teamwork abilities.
        </p>
        <div>
          <h2>SKILLS</h2>
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>Javascript ES6</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>Bootstrap</li>
            <li>Styled components</li>
            <li>Wordpress</li>
            <li>PHP</li>
            <li>MySQL/PostgreSQL</li>
            <li>ReactJS</li>
            <li>Testing/Debugging</li>
          </ul>
        </div>
        <a href={downloadFile} className={styles.btn} download>
          Dowload CV
        </a>
      </div>
    </Layout>
  );
}
