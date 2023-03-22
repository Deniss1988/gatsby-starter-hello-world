import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  const image = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <section className={styles.header}>
        <div className={styles.item}>
          <h2>Web developer based in Latvia</h2>
          <h3>Bringing your vision to life, one pixel at a time.</h3>
          <h3>Crafting functional and visually stunning digital experiences</h3>
          <p>HTML-CSS-JavaScript-React-NodeJS-Gatsby</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <div className={styles.item}>
          <GatsbyImage className={styles.banner} image={image} id="banner" alt="Banner" />
          <label htmlFor="banner">MidJourney created image</label>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
