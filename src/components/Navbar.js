import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import dark from "../images/theme-light-dark.svg";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  return (
    <nav>
      <h1>{title}</h1>

      <div className="links">
        <button className="mode" onClick={darkmode}>
          <img src={dark} alt="Darkmode" />
        </button>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
